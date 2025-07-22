import express from 'express';
import path from 'path';
import logger from 'morgan';
import http from 'http';
import fsPromises from 'fs/promises';
import replaceInFiles from 'replace-in-files';
import { registerSchema, validate} from "@hyperjump/json-schema/draft-2020-12";
import { BASIC } from "@hyperjump/json-schema/experimental";
import Ajv2020 from "ajv/dist/2020.js"
import addFormats from "ajv-formats"
import { setAppSchemata } from "./services/messageBus.js";
import {ucrmErrors} from "./util/ucrmErrorCodes.js"

import {
  middleware,
  resolvers,
} from 'express-openapi-validator';
import fs from "fs";

const port = 3002;
const app = express();

const ajv = new Ajv2020({
  strict:false,
  allErrors: true
});
addFormats(ajv);

start();

async function prepareSpec(){
  //as we need to adapt the TS-API spec a little (serverUrl may not contain Variables), we copy over the spec
  await fsPromises.cp('../../../api/crm/0.1','./transport-spec',{recursive:true});
  //replace server url variables
  await replaceInFiles({
    files: './transport-spec/ucrm.yaml',
    from: '{apiRoot}/{basePath}',
    to: '/ucrm/v0'
  });
  //as we need to adapt the app spec is copied 1:1
  await fsPromises.cp('../../../apps','./app-spec',{recursive:true});
  console.log("transport layer and app specs were prepared...");
}

async function start(){
  await prepareSpec();
  const appSchemata= await compileAppSchemata();
  setAppSchemata(appSchemata);
  const apiSpec = 'transport-spec/ucrm.yaml';

// 1. Install bodyParsers for the request types your API will support
//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.text());
  app.use(express.json());

  app.use(logger('dev'));

  app.use('/spec', express.static(apiSpec));

//  2. Install the OpenApiValidator middleware
  app.use(
    middleware({
      apiSpec,
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
        basePath: './routes',
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
    }),
  );

// 5. Create a custom error handler
  app.use((err, req, res, next) => {
    console.error(err);
    let errorHttpCode = err.status || 500;
    let errorDescription = `HTTP error ${errorHttpCode}: ${err.description||err.message}`;
    let errorMessage = `HTTP error ${errorHttpCode}: ${err.message}`;
    let errorUcriCode = err.ucriErrorCode || 100;
    
    //express-openapi-validator errors can be identified by the presence of the the err.errors array
    if (err.errors && err.status) {
      errorMessage = err.message;
      //decide whether request or response validation failed
      if (err.stack.includes("ResponseValidator")){
        errorHttpCode = 500;
        errorUcriCode = ucrmErrors.RESPONSE_INVALID_PER_TRANSPORT_SPEC;
        errorDescription = `HTTP error ${errorHttpCode}: Response validation failed. See message field for details.`
      }else{
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

  http.createServer(app).listen(port);
  console.log(`Listening on port ${port}`);
}

function upperCaseFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function compileAppSchemata(){
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
        const schema=JSON.parse(fs.readFileSync(`${appsPath}/${appName}/${versionName}/${schemaFileName}`, 'utf8'));
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