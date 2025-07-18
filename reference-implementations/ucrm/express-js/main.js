import express from 'express';
import path from 'path';
import logger from 'morgan';
import http from 'http';
import fsPromises from 'fs/promises';
import replaceInFiles from 'replace-in-files';

import {
  middleware,
  resolvers,
} from 'express-openapi-validator';

const port = 3002;
const app = express();



start();

async function prepareSpec(){
  //as we need to adapt the API spec a little (serverUrl may not contain Variables), we copy over the spec
  await fsPromises.cp('../../../api/crm/0.1','./spec',{recursive:true});
  //replace server url variables
  await replaceInFiles({
    files: './spec/ucrm.yaml',
    from: '{apiRoot}/{basePath}',
    to: '/ucrm/v0'
  });
  console.log("openapi spec was prepared");
}

async function start(){
  await prepareSpec();
  const apiSpec = 'spec/ucrm.yaml';

// 1. Install bodyParsers for the request types your API will support
  app.use(express.urlencoded({ extended: false }));
  app.use(express.text());
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
          const controllerName = schema['operationId'];
          const functionName = route.method.toLowerCase();
          // Get path to module and attempt to dynamically import it
          const modulePath = `./${basePath}/${controllerName}.js`;
          const handler= await import(modulePath);
          // Simplistic error checking to make sure the function actually exists
          // on the handler module
          if (handler[functionName] === undefined) {
            throw new Error(
              `Could not find a [${functionName}] function in ${modulePath} when trying to route [${route.method} ${route.expressRoute}].`
            )
          }
          // Finally return our function
          return handler[functionName]
        }
      },
    }),
  );

// 5. Create a custom error handler
  app.use((err, req, res, next) => {
    console.error(err);
    let errorHttpCode = err.status || 500;
    let errorDescription = `HTTP error ${errorHttpCode}: ${err.message}`;
    let errorMessage = `HTTP error ${errorHttpCode}: ${err.message}`;
    let errorUcriCode = 100;

    //express-openapi-validator errors can be identified by the presence of the the err.errors array
    if (err.errors && err.status) {
      errorMessage = err.message;
      //decide whether request or response validation failed
      if (err.stack.includes("ResponseValidator")){
        errorHttpCode = 500;
        errorUcriCode = 1;
        errorDescription = `HTTP error ${errorHttpCode}: Response validation failed. See message field for details.`
      }else{
        errorHttpCode = 400;
        errorUcriCode = 2;
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

// export app;