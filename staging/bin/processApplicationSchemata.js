import { registerSchema, validate} from "@hyperjump/json-schema/draft-2020-12";
import { bundle } from "@hyperjump/json-schema/bundle";
import { BASIC } from "@hyperjump/json-schema/experimental";
import JsonSchemaStaticDocs from "./json-schema-static-docs-master/lib/json-schema-static-docs.js";
// const JsonSchemaStaticDocs = require("json-schema-static-docs");
import * as path from 'path';
import * as fs from 'fs';

/*
general notes:
-the standard bundling is modified by making all internalized refs into #/$def/filename refs (to allow documentation generation and support schema implementations which do not fully support the 2020 schema draft.
-$refs at the root of $def schemas are replaced by merging the reffed schemas directly. Altough the 2020 draft allows root level $refs (as a means to model "inheritance"), not all implementations support this (hyperjump and ajv JS validators do, the used
 json-schema-static-docs lib for schema documentation generation doesn't.
 LIMITATION: Only one level of root $ref is supported at this point (as used by the person->patient inheritance)
-the resulting bundled schemata for the application messages should be usable for most JSON schema implementations as they are simplified in regards to the possibilities granted by the JSON schema spec
 */

const stagedAppsPath="../apps";
const bundledAppsPath="../../apps";
const docsPath="../../docs/apps";

// console.log(path.sep);
// path.sep="/";
// console.log(path.sep);
// import $RefParser from "@apidevtools/json-schema-ref-parser";
// try {
//   let schemaDir=`${bundledAppsPath}/incident_transfer_with_patient/0.1`
//   let schemaName="incident";
//   let schema=JSON.parse(fs.readFileSync(`${schemaDir}/${schemaName}.schema.json`, 'utf8'));
//   await $RefParser.dereference(schema);//,{resolve:{external:false}});
//   // note - by default, mySchema is modified in place, and the returned value is a reference to the same object
//   console.log(JSON.stringify(schema,null,2));
// } catch (err) {
//   console.error(err);
// }

async function process(){
  const schemaDirs={
    "building_blocks/0.1":[
      "address","coordinate","healthInsuranceInformation","initialAssessment","location","missionObject","personBase","person","patient"
    ],
    "incident_transfer_with_patient/0.1":[
      "incident","acknowledgement"
    ],
    "patient_transfer/0.1":[
      "incident","acknowledgement"
    ]
  };
  let schemas={};
  for (const schemaDir in schemaDirs){
    console.log(`processing schema Dir ${schemaDir}...`);
    const schemaNames=schemaDirs[schemaDir];
    for (const schemaName of schemaNames){
      console.log(`loading schema "${schemaName}"...`);
      //load files
      let schema=JSON.parse(fs.readFileSync(`${stagedAppsPath}/${schemaDir}/${schemaName}.schema.json`, 'utf8'));
      registerSchema(schema);

      schemas[schemaName]=schema;
      console.log(`schema "${schemaName}" registered!`);
    }
    //now lets test the schema examples
    for (const schemaName of schemaNames){
      console.log(`testing schema "${schemaName}"...`);
      let schema=schemas[schemaName];
      if (!schema.examples){
        console.error("NO EXAMPLE GIVEN!")
      }else{
        let schemaId = schema["$id"];
        const output = await validate(schemaId, schema.examples[0],BASIC);
        if (output.valid) {
          console.log("Example instance is valid :-)");
        } else {
          console.log("Instance is invalid :-(");
          console.log(JSON.stringify(output,null,2));
        }
      }
      console.log(`schema "${schemaName}" tested!`);
    }
    //now bundle the schemata
    if (schemaDir.indexOf("building_blocks")<0) {
      for (const schemaName of schemaNames){
        console.log(`bundling schema "${schemaName}"...`);
        let schema=schemas[schemaName];
        let schemaId = schema["$id"];
        const output = await bundle(schemaId);
        //process the output to change all refs to be local
        replaceRefs(output);

        //resolve all refs which point to a *Base Building block
        resolveBaseRefs(output);

        //write the bundled and processed final schema
        const outputPath= `${bundledAppsPath}/${schemaDir}`
        const outputFile= `${outputPath}/${schemaName}.schema.json`
        let outputString = JSON.stringify(output, null, 2);
        //console.log(JSON.stringify(output,null,2));
        fs.mkdirSync(outputPath,{recursive:true});
        fs.writeFileSync(outputFile,outputString);
        console.log(`schema "${schemaName}" bundled and written to apps dir!`);
      }
    }else{
      console.log("not bundling building blocks...");
    }


    if (schemaDir.indexOf("building_blocks")<0) {
      // generate documentation
      //not working ATM
      console.log("generating docs....");
      //const inputPath= `C:/Users/ZernickePaul(Zi)/git/ucri2/apps/${schemaDir}`;
      const inputPath= `${bundledAppsPath}/${schemaDir}`;
      // (async () => {
      const outputPath= `${docsPath}/${schemaDir}`
      //console.log(JSON.stringify(output,null,2));
      fs.mkdirSync(outputPath,{recursive:true});
      let jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
        //inputPath: `./${schemaDir}`,
        inputPath:inputPath,
        inputFileGlob: "*.json",
        outputPath: outputPath,
        jsonSchemaVersion: "https://json-schema.org/draft/2020-12/schema",
        ajvOptions: {
          allowUnionTypes: true,
        },
        // resolve:{external:false},
      });
      await jsonSchemaStaticDocs.generate();
      console.log("Documents generated.");
    }else{
      console.log("not generating docs for building blocks...");
    }


    
  }

}

function replaceRefs(obj) {
  for (var key in obj) {

    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      replaceRefs(obj[key])
    }
    //business logic
    let prefix = "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/";
    if (key.indexOf(prefix)===0){
      //this is a $defs entry, change the key to only contain the actual name
      //also delete the $id which will no longer match the ref
      delete obj[key].$id;
      let newId = key.substring(prefix.length);
      obj[newId]=obj[key];
      delete obj[key];
    }else if (key==="$ref" && obj[key].indexOf(prefix)===0){
      //this is a (bundled) ref that we make into a local one
      const newRef=obj[key].substring(prefix.length);
      obj[key]=`#/$defs/${newRef}`;
    }
  }
}

function resolveBaseRefs(schema) {
  //we check all $defs for direct $refs to *Base schemata
  const resolvedBaseRefKeys={}
  const $defs=schema.$defs;
  for (var key in $defs){
    const defSchema=$defs[key];
    if (defSchema.$ref){
      const baseRefMatch=/(#\/\$defs\/)(.*Base.schema.json)/.exec(defSchema.$ref);
      if (baseRefMatch){
        //we replace the ref by merging the reffed schema
        const reffedKey=baseRefMatch[2];
        const reffedSchema=$defs[reffedKey];
        delete defSchema.$ref;
        let mergedSchema=JSON.parse(JSON.stringify(reffedSchema));
        //merge the extending schema into the reffed schema
        mergeDeep(mergedSchema,defSchema);
        $defs[key]=mergedSchema;
        //mark the reffed Base schema for deletion
        resolvedBaseRefKeys[reffedKey]=true;
      }
    }
  }
  for (const baseSchemaKey in resolvedBaseRefKeys){
    delete $defs[baseSchemaKey];
  }
}

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return mergeDeep(target, ...sources);
}

process();




// const testPatient={
//   name:"loler"
// }
// const output = await validate(`file:///C:/Users/ZernickePaul(Zi)/git/building_blocks/patient.schema.json`, testPatient);