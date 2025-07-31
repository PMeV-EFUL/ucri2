import {steps} from "./test/standalone-tests.js"
import {spawn} from "child_process";
import {resolve} from "path";
import {writeFileSync} from "fs";
import {sleep,base64Encode} from "../shared-js/util.js";
import jwt from "jsonwebtoken";

const ucrmChildProcesses = {}
const ucrmData = {};
const userTokens = {};
const testFailures = [];

async function runTests() {
  let testNumber = 0;
  for (const testStep of steps) {
    switch (testStep.type) {
      case "startUcrm":
        const startDir = resolve(testStep.startDir)
        console.log(`starting UCRM with id ${testStep.ucrmId} from '${startDir}' ...`);
        const childProcess = spawn(testStep.startCmd, testStep.startCmdParms, {cwd: testStep.startDir});
        ucrmChildProcesses[testStep.ucrmId] = childProcess;
        ucrmData[testStep.ucrmId] = testStep;
        childProcess.stdout.on('data', (data) => {
          if (data.includes(testStep.readyLogString)){
            console.log(`ucrm with id ${testStep.ucrmId} is ready.`);
            ucrmData[testStep.ucrmId].ready=true;
          }
          if (testStep.logStdOut) {
            console.log(`${testStep.ucrmId} stdout: ${data}`);
          }
        });
        if (testStep.logStdErr) {
          childProcess.stderr.on('data', (data) => {
            console.error(`${testStep.ucrmId} stderr: ${data}`);
          });
        }
        childProcess.on('close', (code) => {
          console.log(`${testStep.ucrmId} child process exited with code ${code}`);
        });
        console.log("waiting for UCRM to become ready...");
        while(!ucrmData[testStep.ucrmId].ready){
          await sleep(100);
        }
        console.log(`ucrm with id ${testStep.ucrmId} has started, continuing...`);
        break;
      case "sleep": {
        console.log(`sleeping for ${testStep.duration} seconds...`);
        await sleep(testStep.duration * 1000);
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

function reportTestFailure(stepData, testNumber, message,offendingObject) {
  console.error(`Test number ${testNumber} failed with message: ${message}`);
  let failure = {
    testNumber: testNumber,
    errorMessage: message,
    stepData: stepData
  };
  if (offendingObject){
    failure.offendingObject = offendingObject;
  }
  testFailures.push(failure);
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

async function performFetch(step, testNumber) {
  let username = step.username;
  const ucrmId = step.ucrmId;
  const url = `${ucrmData[ucrmId].baseUrl}/${step.endpoint}`;
  const method = step.method;
  console.log(`Fetching data from on remote UCRM with id '${ucrmId}' with token for '${username}' at url ${url}' http method ${method}...`);
  let responseHttpCode;
  try {
    let authHeader = `bearer ${userTokens[username]}`;
    const response = await fetch(url, {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": authHeader,
      },
      "method": method
    })
    responseHttpCode = response.status;
    let respJSON = await response.json();
    console.log(`response with HTTP status code ${responseHttpCode} from remote ucrm ${ucrmId}: ${JSON.stringify(respJSON, null, 2)}`);
    if (step.expect.responseChecker) {
      const checkErrorMessage = step.expect.responseChecker(respJSON);
      if (checkErrorMessage) {
        reportTestFailure(step, testNumber, `response checker error: '${checkErrorMessage}'`,respJSON);
      }
    }
  } catch (err) {
    console.warn(`remote ucrm ${ucrmId} is not available or response was malformed (no JSON response)`);
    responseHttpCode = -1;
  }
  if (step.expect.http !== responseHttpCode) {
    reportTestFailure(step, testNumber, `http status code mismatch, expected '${step.expect.http}' but got '${responseHttpCode}'`);
  }
  //
  //
  // const ucrmId = step.ucrmId;
  // const url = `${ucrmData[ucrmId].baseUrl}/token`;
  // const authInfo = base64Encode(`${username}:${step.password}`);
  // console.log(`Authenticating username '${username}' on remote UCRM with id '${ucrmId}' at authUrl ${url}'`);
  // let responseHttpCode;
  // try {
  //   //request token
  //   const response = await fetch(url, {
  //     "headers": {
  //       "Content-Type": "application/json",
  //       "Authorization": `basic ${authInfo}`,
  //     },
  //     "method": "GET"
  //   })
  //   responseHttpCode = response.status;
  //   if (responseHttpCode === 200) {
  //     let respJSON = await response.json();
  //     let token = respJSON.token;
  //     userTokens[username] = token;
  //     console.log(`received token ${token}`);
  //     const decodedToken=jwt.decode(token);
  //     let expectedRole = step.expect.role;
  //     let actualRole = decodedToken.role;
  //     if (actualRole!==expectedRole){
  //       reportTestFailure(step,testNumber,`returned JWT has role claim mismatch, expected '${expectedRole}' but got '${actualRole}`);
  //     }
  //   }
  // } catch (err) {
  //   console.warn("remote ucrm is not available or 200 response was malformed");
  //   responseHttpCode = -1;
  // }
  // if (step.expect.http !== responseHttpCode){
  //   reportTestFailure(step,testNumber,`Token endpoint http status code mismatch, expected '${step.expect.http}' but got '${responseHttpCode}`);
  // }
}

function cleanUp() {
  console.log("Cleaning up...");
  console.log("writing test failures to file...");
  writeFileSync("test-failures.json", JSON.stringify(testFailures, null, 2));
  for (const [ucrmId, childProcess] of Object.entries(ucrmChildProcesses)) {
    console.log(`terminating UCRM with id ${ucrmId} ...`);
    childProcess.kill("SIGKILL");
  }
}

await runTests();
cleanUp();