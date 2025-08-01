import {standaloneSteps} from "./tests/standalone-tests.js"
import {ucrmP2PSteps} from "./tests/ucrm-p2p-tests.js";

import {spawn} from "child_process";
import {resolve} from "path";
import {writeFileSync} from "fs";
import {sleep, base64Encode} from "../shared-js/util.js";
import jwt from "jsonwebtoken";

let ucrmChildProcesses = {}
let ucrmData = {};
let userTokens = {};
let testFailures = [];
let totalNumOfTestFailures = 0;
const numOfTestFailuresPerSuite = {};

// await runTestSuite("standalone",standaloneSteps);
await runTestSuite("ucrm-p2p", ucrmP2PSteps);
finish();

async function runTestSuite(testSuiteName, testSuiteSteps) {
  console.log(`Running test suite '${testSuiteName}' with a total of ${testSuiteSteps.length} test steps...`);
  await runTestSteps(testSuiteSteps);
  cleanUp(testSuiteName, testSuiteSteps);
}



async function runTestSteps(steps) {
  let testNumber = 1;
  for (const testStep of steps) {
    console.log(`executing step ${testNumber}: ${JSON.stringify(testStep, null, 2)}`);
    switch (testStep.type) {
      case "startUcrm":
        await performStartUcrm(testStep);
        break;
      case "awaitDiscoveryComplete":
        await performAwaitDiscoveryComplete(testStep, testNumber);
        break;
      case "sleep": {
        console.log(`sleeping for ${testStep.durationMs} milliseconds...`);
        await sleep(testStep.durationMs);
        break;
      }
      case "authorize":
        await performAuthorize(testStep, testNumber);
        break;
      case "fetch":
        await performFetch(testStep, testNumber);
        break;
      default:
        console.error("unsupported step type: " + testStep.type);
        return;
    }
    testNumber++;
  }
}

function reportTestFailure(stepData, testNumber, message, offendingObject) {
  console.error(`Test number ${testNumber} failed with message: ${message}`);
  let failure = {
    testNumber: testNumber,
    errorMessage: message,
    stepData: stepData
  };
  if (offendingObject) {
    failure.offendingObject = offendingObject;
  }
  testFailures.push(failure);
}

function createUcrmStdOutListener(testStep) {
  return (data) => {
    if (data.includes(testStep.readyLogString)) {
      console.log(`ucrm with id ${testStep.ucrmId} is ready.`);
      ucrmData[testStep.ucrmId].ready = true;
    }
    if (testStep.logStdOut) {
      console.log(`${testStep.ucrmId} stdout: ${data}`);
    }
  }
}

function createUcrmStdErrListener(testStep) {
  return (data) => {
    console.error(`${testStep.ucrmId} stderr: ${data}`);
  }
}

async function performStartUcrm(testStep) {
  const startDir = resolve(testStep.startDir)
  console.log(`starting UCRM with id ${testStep.ucrmId} from '${startDir}' ...`);
  const childProcess = spawn(testStep.startCmd, testStep.startCmdParms, {cwd: testStep.startDir});
  ucrmChildProcesses[testStep.ucrmId] = childProcess;
  ucrmData[testStep.ucrmId] = testStep;
  childProcess.stdout.on('data', createUcrmStdOutListener(testStep));
  if (testStep.logStdErr) {
    childProcess.stderr.on('data', createUcrmStdErrListener(testStep));
  }
  childProcess.on('close', (code) => {
    console.log(`${testStep.ucrmId} child process exited with code ${code}`);
  });
  console.log("waiting for UCRM to become ready...");
  while (!ucrmData[testStep.ucrmId].ready) {
    await sleep(100);
  }
  console.log(`ucrm with id ${testStep.ucrmId} has started, continuing...`);
}

async function performAuthorize(authorizeStep, testNumber) {
  const ucrmId = authorizeStep.ucrmId;
  const authUrl = `${ucrmData[ucrmId].baseUrl}/token`;
  const authInfo = base64Encode(`${authorizeStep.username}:${authorizeStep.password}`);
  console.log(`Authenticating username '${authorizeStep.username}' on remote UCRM with id '${ucrmId}' at authUrl ${authUrl}'`);
  let responseHttpCode;
  try {
    //request token
    const response = await fetch(authUrl, {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `basic ${authInfo}`,
      },
      "method": "GET"
    })
    responseHttpCode = response.status;
    if (responseHttpCode === 200) {
      let respJSON = await response.json();
      let token = respJSON.token;
      userTokens[authorizeStep.username] = token;
      console.log(`received token ${token}`);
      const decodedToken = jwt.decode(token);
      let expectedRole = authorizeStep.expect.role;
      let actualRole = decodedToken.role;
      if (actualRole !== expectedRole) {
        reportTestFailure(authorizeStep, testNumber, `returned JWT has role claim mismatch, expected '${expectedRole}' but got '${actualRole}'`);
      }
    }
  } catch (err) {
    console.warn("remote ucrm is not available or 200 response was malformed");
    responseHttpCode = -1;
  }
  if (authorizeStep.expect.http !== responseHttpCode) {
    reportTestFailure(authorizeStep, testNumber, `Token endpoint http status code mismatch, expected '${authorizeStep.expect.http}' but got '${responseHttpCode}'`);
  }
}

async function performAwaitDiscoveryComplete(step,testNumber) {
  const ucrmId = step.ucrmId;
  const username = step.username;
  const url = `${ucrmData[ucrmId].baseUrl}/info`;
  console.log(`waiting for UCRM discovery to complete for UCRM '${ucrmId}' by polling on infoURL '${url}'...`);
  //poll the info endpoint until the status becomes 0
  //TODO implement a timeout here!
  let status=1;
  let responseHttpCode;
  while (status!==0){
    try {
      let authHeader = `bearer ${userTokens[username]}`;
      let request = {
        "headers": {
          "Content-Type": "application/json",
          "Authorization": authHeader,
        },
        "method": "GET"
      };
      const response = await fetch(url, request);
      responseHttpCode = response.status;
      if (responseHttpCode === 200) {
        let respJSON = await response.json();
        // console.log(`response with HTTP status code ${responseHttpCode} from remote ucrm ${ucrmId}: ${JSON.stringify(respJSON, null, 2)}`);
        status = respJSON.status;
      }
    } catch (err) {
      console.warn(`remote ucrm ${ucrmId} is not available or response was malformed (no JSON response)`);
      responseHttpCode = -1;
    }
    if (responseHttpCode !== 200) {
      reportTestFailure(step, testNumber, `http status code was 200 OR response was malformed!'`);
      return;
    }
    await sleep(500);
  }
}

async function performFetch(step, testNumber) {
  let username = step.username;
  const ucrmId = step.ucrmId;
  const url = `${ucrmData[ucrmId].baseUrl}/${step.endpoint}`;
  const method = step.method;
  console.log(`Fetching data from on remote UCRM with id '${ucrmId}' with token for '${username}' at url ${url}' http method ${method}...`);
  let responseHttpCode;
  try {
    let authHeader = `bearer ${userTokens[username]}`;
    let request = {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": authHeader,
      },
      "method": method
    };
    if (step.body) {
      request.body = JSON.stringify(step.body);
    }
    const response = await fetch(url, request);
    responseHttpCode = response.status;
    if (responseHttpCode === 204) {
      console.log(`response with HTTP status code ${responseHttpCode} (no content) from remote ucrm ${ucrmId}`);
    } else {
      //in all other cases there MUST be a json in the response!
      let respJSON = await response.json();
      console.log(`response with HTTP status code ${responseHttpCode} from remote ucrm ${ucrmId}: ${JSON.stringify(respJSON, null, 2)}`);
      if (step.expect.responseChecker) {
        const checkErrorMessage = step.expect.responseChecker(respJSON);
        if (checkErrorMessage) {
          reportTestFailure(step, testNumber, `response checker error: '${checkErrorMessage}'`, respJSON);
        }
      }
    }
  } catch (err) {
    console.warn(`remote ucrm ${ucrmId} is not available or response was malformed (no JSON response)`);
    responseHttpCode = -1;
  }
  if (step.expect.http !== responseHttpCode) {
    reportTestFailure(step, testNumber, `http status code mismatch, expected '${step.expect.http}' but got '${responseHttpCode}'`);
  }
}

function cleanUp(testSuiteName, testSteps) {
  console.log(`Cleaning up after test suite '${testSuiteName}'...`);
  console.log("writing performed steps and test failures to file...");
  writeFileSync(`./logs/${testSuiteName}-tests.json`, JSON.stringify(testSteps, null, 2));
  writeFileSync(`./logs/${testSuiteName}-failures.json`, JSON.stringify(testFailures, null, 2));
  for (const [ucrmId, childProcess] of Object.entries(ucrmChildProcesses)) {
    console.log(`terminating UCRM with id ${ucrmId} ...`);
    childProcess.kill("SIGKILL");
  }
  totalNumOfTestFailures += testFailures.length;
  numOfTestFailuresPerSuite[testSuiteName] = testFailures.length;

  ucrmChildProcesses = {}
  ucrmData = {};
  userTokens = {};
  testFailures = [];
}

function finish() {
  console.log("testing is finished. Results:");
  for (const [suiteName, numOfFailures] of Object.entries(numOfTestFailuresPerSuite)) {
    console.log(`Test Suite ${suiteName} had ${numOfFailures} failed tests.`);
  }
  console.log("for detailed results, see logs in the ./logs directory ([suiteName]-tests.json for the performed testing steps and [suiteName]-failed.json for test failure details...");
  if (totalNumOfTestFailures === 0) {
    console.log("All tests have passed, yay!");
    process.exit(0);
  } else {
    console.error(`There were ${testFailures.length} tests that have failed`);
    process.exit(1);
  }
}

