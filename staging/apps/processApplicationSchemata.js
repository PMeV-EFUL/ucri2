import { registerSchema, validate} from "@hyperjump/json-schema/draft-2020-12";
import { bundle } from "@hyperjump/json-schema/bundle";
import { BASIC } from "@hyperjump/json-schema/experimental";
// import JsonSchemaStaticDocs from "./json-schema-static-docs-master/lib/json-schema-static-docs.js";
// const JsonSchemaStaticDocs = require("json-schema-static-docs");

import * as fs from 'fs';
//list of schema directories to process (schemata need to be ordered so a $ref is loaded AFTER the corresponding schema was loaded!)

const bundledAppsPath="../../apps";

async function process(){
  const schemaDirs={
    "building_blocks/0.1":[
      "address","coordinate","healthInsuranceInformation","initialAssessment","location","missionObject","personBase","person","patient"
    ],
    "incident_transfer_with_patient/0.1":[
      "incident","acknowledgement"
    ],
    "patient_transfer_new/0.1":[
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
      let schema=JSON.parse(fs.readFileSync(`${schemaDir}/${schemaName}.schema.json`, 'utf8'));
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
        const outputPath= `${bundledAppsPath}/${schemaDir}`
        const outputFile= `${outputPath}/${schemaName}.schema.json`
        //console.log(JSON.stringify(output,null,2));
        fs.mkdirSync(outputPath,{recursive:true});
        fs.writeFileSync(outputFile,JSON.stringify(output,null,2));
        console.log(`schema "${schemaName}" bundled and written to apps dir!`);
      }
    }else{
      console.log("not bundling building blocks...");
    }


    // generate documentation
    //not working ATM
    // console.log("generating docs....");
    // const inputPath= `C:/Users/ZernickePaul(Zi)/git/ucri2/apps/${schemaDir}`;
    // // const inputPath= `${bundledAppsPath}/${schemaDir}`;
    // // (async () => {
    // let jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
    //   //inputPath: `./${schemaDir}`,
    //   inputPath:inputPath,
    //   inputFileGlob: "*.json",
    //   outputPath: `docs`,
    //   jsonSchemaVersion: "https://json-schema.org/draft/2020-12/schema",
    //   ajvOptions: {
    //     allowUnionTypes: true,
    //   },
    // });
    // await jsonSchemaStaticDocs.generate();
    // console.log("Documents generated.");

    
  }

}

process();




// const testPatient={
//   name:"loler"
// }
// const output = await validate(`file:///C:/Users/ZernickePaul(Zi)/git/building_blocks/patient.schema.json`, testPatient);