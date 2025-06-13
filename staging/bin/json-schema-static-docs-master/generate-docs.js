const JsonSchemaStaticDocs = require("./lib/json-schema-static-docs.js");
// const path = require("path");
// const fastGlob = require("fast-glob");
// const extend = require("extend");
// const fs = require("fs");
//
// const defaultOptions = {
//   inputPath: "schema",
//   inputFileGlob: "**/*.{yml,json}",
//   outputPath: "docs",
//   createIndex: true,
//   indexPath: "index.md",
//   indexTitle: "Index",
//   templatePath: path.join(__dirname, "../templates"),
//   linkBasePath: "./",
//   resolve: {},
//   skipTemplates: false,
//   ajvOptions: {},
//   enableMetaEnum: false,
//   addFrontMatter: false,
//   displaySchema: true,
//   jsonSchemaVersion: undefined,
// };
//
// this._options = extend(true, defaultOptions, {});
//
// this._options.inputPath = this._options.inputPath.replace(/\/$/, "");
// this._options.outputPath = this._options.outputPath.replace(/\/$/, "");
//
// const inputPathPattern = fastGlob.convertPathToPattern(
//   this._options.inputPath
// );
// const inputPathGlob = path.join(
//   inputPathPattern,
//   this._options.inputFileGlob
// );
//
// // clean up path (strip leading ./ etc)
// const cleanInputPath = path.join(this._options.inputPath);

// inputPathGlob.map(file=>{
//   {
//     console.log(file)
//   }
// })

(async () => {
  let jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
    inputPath: "./schema",
    inputFileGlob: "*.schema.json",
    jsonSchemaVersion: "https://json-schema.org/draft/2020-12/schema",
    outputPath: "./docs",
    ajvOptions: {
      allowUnionTypes: true,
    },
  });
  await jsonSchemaStaticDocs.generate();
  console.log("Documents generated.");
})();