# UCRM Test Client
The ucrm test client is used to perform client-side testing of UCRMs. To do so, it uses a concept 
of test suites comprised of individual test steps.

# Code structure
This client uses the shared-js library with code common to the UCRM express-js implementation and the test client.
- main.js : Main client entrypoint. Currently uses a hardcoded set of test suites (see ./tests directory)
- generators dir: Generators for request bodies, miscellaneous objects (currently expect objects) and generators for individual testing steps.
- responseCheckers dir: Functions for checking responses
- tests dir: test suites (currently for single standalone UCRM tests and dual UCRM p2p tests)
- logs dir: generated log files (two for each test suite with the actual test steps that were performed (<testsuite>-tests.json) and the errors that occured (<testsuite>-failures.json))

# Using this client
To use the client, just run "npm install" followed by "node main.js". Depending on the hardcoded configuration in the beginning of main.js, test suites will be run and in the end, the results will be printed to console.
A successful run should end with console logs like this:

testing is finished. Results:

Test Suite standalone had 0 failed tests.

Test Suite ucrm-p2p had 0 failed tests.

for detailed results, see logs in the ./logs directory ([suiteName]-tests.json for the performed testing steps and [suiteName]-failed.json for test failure details...

All tests have passed, yay!

# Supported test step types
Currently, the following test step types are supported (see the existing suites in ./tests for reference)
- startUcrm: Start an Ucrm (will wait until step.readyLogString appears in the process stdout, will be killed during cleanup after the suite is finished). If you want the UCRM console output to appear, set step.logStdOut and/or step.logStdErr to true.
- authorize: Get an authorization Token (if sucessfull, token will be saved for the provided step.username). to use the fetch step type, you must first authorize the desired username successfully using an authorize step!
- fetch: Fetch data from a remote endpoint (using HTTP), expected response http code and a function to check the JSON response body can be supplied in the "expect" property
- sleep: Sleep for step.durationMs milliseconds
- awaitDiscoveryComplete: Poll the /info endpoint and wait for the info.status to become 0 (indicating that P2P discovery is finished)

Generally, the "desc" step description property is just used for documentation. Use it to describe the steps operation...
Also, most step types use the ucrmId property to indicate which UCRM is supposed to be used. Also, some steps use the username property to indicate which users token shall be used for authentication 

# Usage of the express-js UCRM
The current test suites will start instances of the express-js UCRM automatically:
- the standalone suite will start the UCRM with the ./config/standalone.config.js
- the p2p suite will start two UCRMs with the a.config.js and b.config.js configurations respectively

# Adding new test suites
To add a new test suite:
- create a new .js file in the tests directory (or copy an existing one)
- import the tests in main.js and add a "runtests()" line akin to the existing ones

If you want to test against your own ucrm, you should change to startUCRM step to start your UCRM instead of the express-js one.
Testing against already running ucrms is not supported at this time (but should be easy to accomplish by checking if startDir was provided and not starting the ucrm if it was missing).

# Miscellaneous code notes
- in the existing test suites, the "curry" library is used to preconfigure function parameters ahead of time. Example: "responseChecker:curry(checkReceiveResponse)(1)" means that the checkReceiveResponse() function - which expects a number and a response payload object - will be curried with the number parameter set to 1, returning a curried version of the function that expects the response body as its sole parameter).