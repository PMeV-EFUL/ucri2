# Express-JS UCRM
This project contains a test-implementation of an UCRI2 UCRM. It was developed for testing purposes only and should not be used in production.
It has no persistency whatsoever and will thus lose all state on shutdown.

# Code Structure
The project uses the express-openapi-validator library which enables the following functionalities:
- Automatic request routing
- Automatic request and response validation against the openAPI spec

The project also uses the shared-js library contained in the ucri2 git (/reference-implementations/shared-js)

The project comprises of
- main.js : The main entrypoint into the UCRM. Expects one parameter with the path to the config.js module to use
- config dir: Directory with configuration files. Currently contained are standalone.config.js (for a standalone UCRM), a.config.js and b.config.js (for two UCRMs which are connected via P2P).
- routes dir: Directory with route endpoint methods. File and function names are derived from the openAPI spec (filename=endpoint tag, functionName=httpMethod+operationId).
- services dir: implementation of the business logic in the form of the authManager,commParticipantRegistry and messageBus services
- app-spec and transport-spec dir: Directories for the app and TL specs. These will be auto-copied and preprocessed if config.json/copySpec is true. If you want to manually provide the files, check main.js:preprocessSpec() as the crm.yaml needs two changes to work with this application!

# Running the UCRM
to prepare, run "npm install". To run, use "node main.js <path to config.js>", e.g. "node main.js ./config/standalone.config.js"

If remote UCRMs are configured, the UCRM will first perform remote participant discovery (and for this to work, the remote UCRM needs to be running too). 
The code will retry 10 times with a delay of 5 Seconds, so you should have 50 seconds to start both UCRM instances.

Because errorneous requests will be handled using expceptions internally, regular usage will produce exception logs in the console. Be aware that all Exceptions of type "UcrmError" are regular ones.
All other exceptions might indicate a bug in the code

# Testing the UCRM
Automated tests can be performed using the ucrm-test-client in this repo at /reference-implementations/ucrm-test-client. It provides out-of-the-box tests for both standalone and p2p mode. See the README.md of the ucrm-test-client for more details...

Manual tests can be performed by the tools of your choice. If you want to use POSTMan, note that a bundled version of the TL spec can be found at /api/crm/0.1/schemas/ucrm-bundled.json (as PostMan does not support external $refs).
To recreate the bundled json, you can run bundle-yaml.js in /staging/bin.