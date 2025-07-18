import { bundle, loadConfig } from '@redocly/openapi-core';
import fs from "fs";

const pathToApi = '../../api/crm/0.1/ucrm.yaml';
const config = await loadConfig({  });
const bundleResults = await bundle({ ref: pathToApi, config });
fs.writeFileSync("../../api/crm/0.1/ucrm-bundled.json",JSON.stringify(bundleResults.bundle.parsed,null,2));
//console.log('bundleResults', bundleResults);