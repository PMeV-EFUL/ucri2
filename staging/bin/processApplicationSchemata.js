import { registerSchema, validate} from "@hyperjump/json-schema/draft-2020-12";
import { bundle } from "@hyperjump/json-schema/bundle";
import { BASIC } from "@hyperjump/json-schema/experimental";
import JsonSchemaStaticDocs from "./json-schema-static-docs-master/lib/json-schema-static-docs.js";
import { mdToPdf } from 'md-to-pdf';
import toc from 'markdown-toc';
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
-Markdown documentation is generated for each schema individually ([schemaname].schema.md and also for each usecase
 */

const stagedAppsPath="../apps";
const bundledAppsPath="../../apps";
const docsPath="../../docs/apps";
async function process(){
  const schemaDirs=collectInputSchemata();
  console.log(`Processing the following app/version directories with schema files:\n ${JSON.stringify(schemaDirs,null,2)}`);
  //   {
  //   "building_blocks/0.1":[
  //     "address","coordinate","healthInsuranceInformation","initialAssessment","location","missionObject","personBase","person","patient"
  //   ],
  //   "incident_transfer_with_patient/0.1":[
  //     "incident","acknowledgement"
  //   ],
  //   "patient_transfer/0.1":[
  //     "incident","acknowledgement"
  //   ]
  // };
  let errorsOccured=false;

  let schemas={};
  for (const schemaDir in schemaDirs){
    console.log(`processing schema dir ${schemaDir}...`);
    const schemaNames=schemaDirs[schemaDir].files;
    //STEP 1: Load schemas from filesystem, register with hyperjump library
    for (const schemaName of schemaNames){
      console.log(`STEP 1: loading schema "${schemaName}"...`);
      //load files
      let schema=JSON.parse(fs.readFileSync(`${stagedAppsPath}/${schemaDir}/${schemaName}`, 'utf8'));
      registerSchema(schema);

      schemas[schemaName]=schema;
      console.log(`schema "${schemaName}" registered!`);
    }
    //STEP 2: Test schema examples
    //now lets test the schema examples
    for (const schemaName of schemaNames){
      console.log(`STEP 2: testing schema "${schemaName}"...`);
      let schema=schemas[schemaName];
      if (!schema.examples){
        console.error("NO EXAMPLE GIVEN!")
      }else{
        let schemaId = schema["$id"];
        const output = await validate(schemaId, schema.examples[0],BASIC);
        if (output.valid) {
          console.log("Example instance is valid :-)");
        } else {
          console.log("ERROR: Instance is invalid :-(");
          console.log(JSON.stringify(output,null,2));
          errorsOccured=true;
        }
      }
      console.log(`schema "${schemaName}" tested!`);
      if (errorsOccured){
        console.error("errors occured when testing, aborting...");
      }
    }
    //STEP 3: Bundle and postprocess schemata
    //now bundle the schemata
    if (schemaDir.indexOf("building_blocks")<0) {
      for (const schemaName of schemaNames){
        console.log(`STEP 3: bundling schema "${schemaName}"...`);
        let schema=schemas[schemaName];
        let schemaId = schema["$id"];
        let output = await bundle(schemaId);
        //process the output to change all refs to be local
        replaceRefs(output);

        let resolvedBaseRefKeys = {};
        //remove  top level base $ref if any
        output=resolveTopLevelRefs(output,resolvedBaseRefKeys);

        //resolve all refs which point to a *Base Building block until no more replacements are done
        let replacementsPerformed=true;
        while(replacementsPerformed){
          replacementsPerformed=resolveBaseRefs(output,resolvedBaseRefKeys);
        }

        //remove all *Base refs which were replaced
        removeResolvedBaseRefs(output,resolvedBaseRefKeys);

        //write the bundled and processed final schema
        const outputPath= `${bundledAppsPath}/${schemaDir}`
        const outputFile= `${outputPath}/${schemaName}`
        let outputString = JSON.stringify(output, null, 2);
        //console.log(JSON.stringify(output,null,2));
        fs.mkdirSync(outputPath,{recursive:true});
        fs.writeFileSync(outputFile,outputString);
        console.log(`schema "${schemaName}" bundled and written to apps dir!`);
      }
    }else{
      console.log("not bundling building blocks...");
    }

    //STEP 4: generate per-schema documentatio using local json-schema-static-docs library (adapted by PZernicke)
    if (schemaDir.indexOf("building_blocks")<0) {
      // generate documentation
      console.log("STEP 4: generating per message docs....");
      const inputPath= `${bundledAppsPath}/${schemaDir}`;
      const outputPath= `${docsPath}/${schemaDir}`
      //console.log(JSON.stringify(output,null,2));
      fs.mkdirSync(outputPath,{recursive:true});
      let jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
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
      console.log("per message documents generated.");
    }else{
      console.log("not generating per-message docs for building blocks...");
    }

    //STEP 5: collect markdown files into a single one and generate pdf version
    if (schemaDir.indexOf("building_blocks")<0) {
      console.log("STEP 5: generating merged docs ...");
      let completeMarkdown=fs.readFileSync(`${stagedAppsPath}/${schemaDir}/manual_documentation.md`, 'utf8');
      // completeMarkdown+="\n # App-Nachrichten\n"
      //include per-message docs as indicated by comments
      let includeRegexMatch;
      const includeRegex= /(<!-- include )(.*)( -->)/g;
      const includedFilenames=[];
      while ((includeRegexMatch = includeRegex.exec(completeMarkdown)) !== null) {
        includedFilenames.push(includeRegexMatch[2]);
      }
      for (const includedFilename of includedFilenames){
        //read schema markdown, push all headings one level down
        const includedMarkdown=fs.readFileSync(`${docsPath}/${schemaDir}/${includedFilename}`, 'utf8').replaceAll("# ","## ");
        completeMarkdown=completeMarkdown.replaceAll(`<!-- include ${includedFilename} -->`,includedMarkdown);
      }

      // for (const schemaName of schemaNames) {
      //   const schemaDocFilename=schemaName.replace("schema.json","schema.md");
      //   //read schema markdown, push all headings one level down
      //   const schemaDocMarkdown=fs.readFileSync(`${docsPath}/${schemaDir}/${schemaDocFilename}`, 'utf8').replaceAll("# ","## ");
      //   completeMarkdown+=`\n${schemaDocMarkdown}`;
      // }
      //insert table of contents (needs <!-- toc --><!-- tocstop --> in manual_documentation.md)
      completeMarkdown=toc.insert(completeMarkdown);
      //write completed markdown
      const outputFileName=`${docsPath}/${schemaDir}/${schemaDirs[schemaDir].appName}_${schemaDirs[schemaDir].appVersion}.md`
      fs.writeFileSync(outputFileName,completeMarkdown);
      console.log("transforming merged docs to pdf...");
      //transform to PDF
      const outputFileNamePdf=`${docsPath}/${schemaDir}/${schemaDirs[schemaDir].appName}_${schemaDirs[schemaDir].appVersion}.pdf`
      await mdToPdf({ content: completeMarkdown }, { dest: outputFileNamePdf });
    }else{
      console.log("not generating merged docs for building blocks...");
    }
  }
  if (errorsOccured){
    console.error("ERROR: processing FAILED, see ERROR messages above!")
  }else{
    console.log("processing finished sucessfully.");
  }
}

function collectInputSchemata(){
  const out={}
  const appList = fs.readdirSync(stagedAppsPath);
  for (const appName of appList){
    const versionList = fs.readdirSync(`${stagedAppsPath}/${appName}`);
    for (const versionName of versionList){
      const schemaFileNames = fs.readdirSync(`${stagedAppsPath}/${appName}/${versionName}`).filter(s=>s.endsWith("schema.json"));
      out[`${appName}/${versionName}`]={
        files:schemaFileNames,
        appName:appName,
        appVersion:versionName
      };
    }
  }
  return out;
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

function resolveTopLevelRefs(schema,resolvedBaseRefKeys) {
  let outSchema=schema;
  //we check the top level for any $refs and resolve them
  const $defs = schema.$defs;
  const defSchema = schema;
  if (defSchema.$ref) {
    const baseRefMatch = /(#\/\$defs\/)(.*.schema.json)/.exec(defSchema.$ref);
    if (baseRefMatch) {
      //we replace the ref by merging the reffed schema
      const reffedKey = baseRefMatch[2];
      const reffedSchema = $defs[reffedKey];
      delete defSchema.$ref;
      //to make sure that the resulting schema has a sensible order of keys we first define the firstmost keys and then add the rest of the reffed schema
      let mergedSchema = {$schema:"",$id:"",unevaluatedProperties:false};
      mergeDeep(mergedSchema,JSON.parse(JSON.stringify(reffedSchema)));
      //let mergedSchema = JSON.parse(JSON.stringify(reffedSchema));
      //then merge the extending schema into the reffed schema
      mergeDeep(mergedSchema, defSchema);
      outSchema=mergedSchema;
      //mark the reffed Base schema for deletion
      resolvedBaseRefKeys[reffedKey] = true;
    }
  }
  return outSchema;
}

function resolveBaseRefs(schema,resolvedBaseRefKeys) {
  //we check all $defs for direct $refs to *Base schemata
  // const resolvedBaseRefKeys = {}
  let replacementsPerformed=false;
  const $defs = schema.$defs;
  for (var key in $defs) {
    const defSchema = $defs[key];
    if (defSchema.$ref) {
      const baseRefMatch = /(#\/\$defs\/)(.*Base.schema.json)/.exec(defSchema.$ref);
      if (baseRefMatch) {
        //we replace the ref by merging the reffed schema
        const reffedKey = baseRefMatch[2];
        const reffedSchema = $defs[reffedKey];
        delete defSchema.$ref;
        let mergedSchema = JSON.parse(JSON.stringify(reffedSchema));
        //merge the extending schema into the reffed schema
        mergeDeep(mergedSchema, defSchema);
        $defs[key] = mergedSchema;
        //mark the reffed Base schema for deletion
        resolvedBaseRefKeys[reffedKey] = true;
        replacementsPerformed=true;
      }
    }
  }
  return replacementsPerformed;
}
function removeResolvedBaseRefs(schema,resolvedBaseRefKeys) {
  const $defs = schema.$defs;
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
