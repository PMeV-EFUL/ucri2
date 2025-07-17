const express = require('express');
const path = require('path');
const logger = require('morgan');
const http = require('http');
const {
  middleware: openApiMiddleware,
  resolvers,
} = require('express-openapi-validator');

const port = 3002;
const app = express();
// const apiSpec = path.join(__dirname, 'api.yaml');
const apiSpec = path.join(__dirname, '../../../api/crm/0.1/ucrm.yaml');

// 1. Install bodyParsers for the request types your API will support
app.use(express.urlencoded({ extended: false }));
app.use(express.text());
app.use(express.json());

app.use(logger('dev'));

app.use('/spec', express.static(apiSpec));

//  2. Install the OpenApiValidator middleware
app.use(
  openApiMiddleware({
    apiSpec,
    validateResponses: true, // default false
    operationHandlers: {
      // 3. Provide the path to the controllers directory
      basePath: path.join(__dirname, 'routes'),
      validateResponses: true, // default false
      // 4. Provide a function responsible for resolving an Express RequestHandler
      //    function from the current OpenAPI Route object.
      resolver:(basePath, route,apiDoc) => {
        const pathKey = route.openApiRoute.substring(route.basePath.length)
        const schema = apiDoc.paths[pathKey][route.method.toLowerCase()]
        // Pluck controller and function names from operationId
        const controllerName = schema['operationId'];
        const functionName = route.method.toLowerCase();
        // const [controllerName, functionName] = schema['operationId'].split('.')
        // Get path to module and attempt to require it
        const modulePath = path.join(basePath, controllerName);
        const handler = require(modulePath)
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
  // format errors
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

http.createServer(app).listen(port);
console.log(`Listening on port ${port}`);

module.exports = app;