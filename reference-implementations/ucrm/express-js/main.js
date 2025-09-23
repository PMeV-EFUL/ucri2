import express from 'express';
import logger from 'morgan';
import http from 'http';
import fsPromises from 'fs/promises';
import replaceInFiles from 'replace-in-files';
import Ajv2020 from "ajv/dist/2020.js"
import addFormats from "ajv-formats"
import canonicalize from "canonicalize";
import sha3 from "js-sha3";
import * as jose from 'jose';
import {
  notifyDiscoveryFinished as notifyDiscoveryFinishedOnMessageBus,
  setAppSchemata,
  setConfiguration as setConfigurationOnMessageBus,
  start as startMessageBus
} from "./services/messageBus.js";
import {
  notifyDiscoveryFinished as notifyDiscoveryFinishedOnInfoEndpoint,
} from "./routes/client/info.js";
import {UcrmError} from "./util/ucrmError.js"
import {ucrmErrors} from "../../shared-js/ucrmErrorCodes.js"
import {init as initCrypto,getKTRecordSignature} from "../../shared-js/crypto.js"
import {setConfiguration as setConfigurationOnRegistry,addCommParticipants,fetchParticipantsFromRemoteUcrms} from "./services/commParticipantRegistry.js";
import {setConfiguration,checkBasicCredentials,checkJWTCredentials,authenticateRemoteUcrm} from "./services/authManager.js"

import {
  middleware,
  resolvers,
} from 'express-openapi-validator';
import fs from "fs";

const REMOTE_PARTICIPANT_UPDATE_INTERVAL_MS=60*1000;
const TRANSPORT_LAYER_APPID="transport_layer_messages";
const TRANSPORT_LAYER_APP_VERSION="0.1";
const TRANSPORT_LAYER_SPEC_DIR = "transport-layer-spec";

initCrypto(UcrmError,canonicalize,sha3,jose);

const ajv = new Ajv2020({
  strict:false,
  allErrors: true
});
addFormats(ajv);

const app = express();

let config;

if (await initConfiguration()){
  await start();
}

async function signKTRecords(){
  console.log(`signing KT records...`);
  for (const record of Object.values(config.commParticipants)){
    const oid = record.id;
    const domain = record.domain;
    if (!domain){
      console.error(`Participant with oid '${oid}' has no domain!`);
      return false;
    }
    let domainPrivateKey = config.domainPrivateKeys[domain];
    if (!domainPrivateKey){
      console.error(`Participant with oid '${oid}' has unknown domain '${domain}'!`);
      return false;
    }
    record.signature=await getKTRecordSignature(record,domainPrivateKey);
  }
  return true;
}


async function initConfiguration(){
  if (process.argv.length != 3){
    console.error("Usage: node main.js <path to of config.js file>\nexample: node main.js ./config/a.config.js\nnote the leading './' for the config file path");
    return false;
  }
  try{
    let configPath = process.argv[2];
    console.log(`loading configuration from ${configPath}`);
    config=(await import(configPath)).config;
    //check presence of ownOID and privateSigningKey fields
    if (!config.ownOid){
      throw new Error("Config is missing mandatory 'ownOid' property!");
    }
    if (!config.privateSigningKey){
      throw new Error("Config is missing mandatory 'privateSigningKey' property!");
    }
    if (config.commParticipants.length<1 || !config.commParticipants[config.ownOid] || config.commParticipants[config.ownOid].type!=="ucrm"){
      throw new Error("Config error: commParticipants do not have an entry with ownOid as its id or is not of type 'ucrm' !");
    }
    //check local participants for support of transport layer app
    for (const commParticipant of Object.values(config.commParticipants)){
      if (commParticipant.supportedApps.filter((app) => app.appId === TRANSPORT_LAYER_APPID && app.appVersion === TRANSPORT_LAYER_APP_VERSION).length === 0) {
        throw new Error(`local commParticipant '${commParticipant.id}' does not support the required transport layer app '${TRANSPORT_LAYER_APPID}' ín version '${TRANSPORT_LAYER_APP_VERSION}'`);
      }
    }
    //add local participants
    setConfiguration(config);
    setConfigurationOnRegistry(config);
    setConfigurationOnMessageBus(config);
    if (config.useKTSignatures) {
      //self-sign commParticipants - NEVER to be done in a production UCRM, instead the domain owner should provide signatures!
      if (!await signKTRecords()) {
        return false;
      }
    }
    if (!await addCommParticipants(config.commParticipants,"self")){
      return false;
    }

    console.log("configuration loaded.")
    return true;
  }catch(err){
    console.error(err.message);
    return false;
  }
}

async function prepareSpec(){
  //as we need to adapt the TS-API spec , we copy over the spec
  await fsPromises.cp('../../../api/crm/0.1',`./${TRANSPORT_LAYER_SPEC_DIR}`,{recursive:true,
  filter: (src,dst)=>!src.includes("spectral.yaml")});
  //replace server url variables
  await replaceInFiles({
    files: `./${TRANSPORT_LAYER_SPEC_DIR}/ucrm-client.yaml`,
    from: '{apiRoot}/{basePath}',
    to: '/ucrm/client/v0'
  //replace relative tokenUrl
  }).pipe({
    from: 'tokenUrl: /token',
    to: 'tokenUrl: https://ucri.mycompany.com/ucrm/v0/token'
  });
  //replace server url variables
  await replaceInFiles({
    files: `./${TRANSPORT_LAYER_SPEC_DIR}/ucrm-p2p.yaml`,
    from: '{apiRoot}/{basePath}',
    to: '/ucrm/p2p/v0'
    //replace relative tokenUrl
  }).pipe({
    from: 'tokenUrl: /token',
    to: 'tokenUrl: https://ucri.mycompany.com/ucrm/v0/token'
  });

  //the app spec is copied 1:1
  await fsPromises.cp('../../../apps','./app-spec',{recursive:true});
  console.log("transport layer and app specs were prepared...");
}

async function authorizeWithRemoteUcrms(){
  for (const [ucrmId,ucrmData] of Object.entries(config.remoteUcrms)){
    if (!await authenticateRemoteUcrm(ucrmId)){
      console.error("remote UCRM authentication failed. Please check your credentials and restart!")
      return false;
    };
  }
  return true;
}

async function start(){
  if (config.copySpec){
    await prepareSpec();
  }else{
    console.log("as config:copySpec==false -> not copying spec automatically. Please either enable auto spec copy or make sure that the transport layer spec resides in ./transport-layer-spec and the app spec in ./app-spec. \n also make sure that the TL spec has been correctly adapted (see main.js:prepareSpec for the necessary steps...)")
  }

  const appSchemata= await compileAppSchemata();
  setAppSchemata(appSchemata);
  const apiSpec = `${TRANSPORT_LAYER_SPEC_DIR}/ucrm-client.yaml`;



// 1. Install bodyParsers for the request types your API will support
//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.text());
  app.use(express.json());

  app.use(logger('dev'));

  app.use('/spec', express.static(apiSpec));

//  2. Install the OpenApiValidator middleware for both the client and p2p specs (which will be available at ucrm/client and ucrm/p2p pathes
  const specs=[
    {
      specPath:`${TRANSPORT_LAYER_SPEC_DIR}/ucrm-client.yaml`,
      type:"client"
    },
    {
      specPath:`${TRANSPORT_LAYER_SPEC_DIR}/ucrm-p2p.yaml`,
      type:"p2p"
    },
  ]
  for (const spec of specs){
    app.use(
      middleware({
        apiSpec:spec.specPath,
        validateRequests: {
          // return all validation errors, not only the first one.
          // for productive use, this option should be false to help mitigate slow validations and potential ReDOS attacks.
          // see https://cdimascio.github.io/express-openapi-validator-documentation/usage-validate-requests/ and
          // https://ajv.js.org/security.html#security-risks-of-trusted-schemas
          allErrors: true
        },
        validateResponses: {
          // return all validation errors, not only the first one.
          // see validateRequests.allErrors notes above!
          allErrors:true,
        },
        //neither ajv nor ajv-formats support the base64url format natively, so we need to add it manually
        //note that contrary to the eov docs, the formats should be passed in an object, not an array (array form is
        //deprecated in ajv)
        formats: {
          base64url:{
            type: 'string',
            validate : (v) => /^[A-Za-z0-9_-]+$/.test(v),
          }
        },
        operationHandlers: {
          // 3. Provide the path to the controllers directory
          basePath: `./routes/${spec.type}`,
          validateResponses: true, // default false
          // 4. Provide a function responsible for resolving an Express RequestHandler
          //    function from the current OpenAPI Route object.
          resolver:async (basePath, route,apiDoc) => {
            const pathKey = route.openApiRoute.substring(route.basePath.length)
            const schema = apiDoc.paths[pathKey][route.method.toLowerCase()]
            const tagName = schema.tags[0];
            const operationName = schema['operationId'];
            const methodName = route.method.toLowerCase();
            // const routerFileName = `./${basePath}/${operationName}.js`;
            // const routerMethodName = methodName;
            const routerFileName = `./${basePath}/${tagName.toLowerCase()}.js`;
            const routerMethodName = `${methodName}${upperCaseFirstLetter(operationName)}`;
            // Get path to module and attempt to dynamically import it
            const modulePath = routerFileName;
            const handler= await import(modulePath);
            // Simplistic error checking to make sure the function actually exists
            // on the handler module
            if (handler[routerMethodName] === undefined) {
              throw new Error(
                `Could not find a [${routerMethodName}] function in ${routerFileName} when trying to route [${route.method} ${route.expressRoute}].`
              )
            }
            // Finally return our function
            return handler[routerMethodName]
          }
        },
        validateSecurity: {
          handlers: {
            basic: (req, scopes, schema) => {
              return checkBasicCredentials(req,spec.type);
            },
            oAuth2ClientCredentials: (req, scopes, schema) => {
              return checkJWTCredentials(req,spec.type);
            }
          }
        }
      }),
    );
  }


// 5. Create a custom error handler
  app.use((err, req, res, next) => {
    console.error(err);
    let errorHttpCode = err.status || 500;
    let errorDescription = `HTTP error ${errorHttpCode}: ${err.message}`;
    let errorMessage = `HTTP error ${errorHttpCode}: ${err.description||err.message}`;
    let errorUcriCode = err.ucriErrorCode || ucrmErrors.REQUEST_UNAUTHORIZED;
    
    //express-openapi-validator errors can be identified by the presence of the the err.errors array
    if (err.errors && err.status) {
      errorMessage = err.message;
      //decide whether request or response validation failed
      if (err.stack.includes("ResponseValidator")){
        errorHttpCode = 500;
        errorUcriCode = ucrmErrors.RESPONSE_INVALID_PER_TRANSPORT_SPEC;
        errorDescription = `HTTP error ${errorHttpCode}: Response validation failed. See message field for details.`
      }else if (err.stack.includes("RequestValidator")){
        errorHttpCode = 400;
        errorUcriCode = ucrmErrors.REQUEST_INVALID_PER_TRANSPORT_SPEC;
        errorDescription = `HTTP error ${errorHttpCode}: Request validation failed. See message field for details.`
      }
    }
    // other errors

    res.status(errorHttpCode).json({
      code: errorUcriCode,
      reason: errorDescription,
      message: errorMessage
    });
  });

  http.createServer(app).listen(config.port);
  console.log(`Listening on port ${config.port}`);

  startMessageBus();

  const remoteUcrmAuthorizeSuccessful=await authorizeWithRemoteUcrms();
  if (!remoteUcrmAuthorizeSuccessful){
    return;
  }

  const fetchParticipantsSucessful =await fetchParticipantsFromRemoteUcrms();
  if (!fetchParticipantsSucessful){
    return;
  }
  console.log("Fetching participants sucessful");
  notifyDiscoveryFinishedOnInfoEndpoint();
  notifyDiscoveryFinishedOnMessageBus();
  setInterval(fetchParticipantsFromRemoteUcrms,REMOTE_PARTICIPANT_UPDATE_INTERVAL_MS);
}

function upperCaseFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function compileAppSchemata(){
  console.log("compiling app schemata...")
  const out={}
  const appsPath="./app-spec";
  const appList = fs.readdirSync(appsPath);
  for (const appName of appList){
    out[appName]={};
    const versionList = fs.readdirSync(`${appsPath}/${appName}`);
    for (const versionName of versionList){
      out[appName][versionName] = {};
      const schemaFileNames = fs.readdirSync(`${appsPath}/${appName}/${versionName}`).filter(s=>s.endsWith("schema.json"));
      for (const schemaFileName of schemaFileNames){
        //compile schema
        const schemaName = schemaFileName.replace(".schema.json","");
        let schemaFilePath = `${appsPath}/${appName}/${versionName}/${schemaFileName}`;
        console.log(`compiling app schema '${schemaFilePath}' ...`);
        const schema=JSON.parse(fs.readFileSync(schemaFilePath, 'utf8'));
        // registerSchema(schema,`http://ucri2/${schemaName}`);
        out[appName][versionName][schemaName] = ajv.compile(schema);//await validate(`http://ucri2/${schemaName}`,BASIC);
      }
      // out[`${appName}/${versionName}`]={
      //   files:schemaFileNames,
      //   appName:appName,
      //   appVersion:versionName
      // };
    }
  }
  console.log("app schemata compiled successfully.");
  return out;
}


// export app;