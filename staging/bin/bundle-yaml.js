import { bundle, loadConfig } from '@redocly/openapi-core';
import fs from "fs";

await bundleYaml('../../api/crm/2.0.0/ucrm-client.yaml',"../../api/crm/2.0.0/ucrm-client-bundled.json");
await bundleYaml('../../api/crm/2.0.0/ucrm-p2p.yaml',"../../api/crm/2.0.0/ucrm-p2p-bundled.json");

async function bundleYaml(pathToApi,pathToBundledJson){
  const config = await loadConfig({  });
  const bundleResults = await bundle({ ref: pathToApi, config });
  fs.writeFileSync(pathToBundledJson,JSON.stringify(bundleResults.bundle.parsed,null,2));
  //console.log('bundleResults', bundleResults);
}
