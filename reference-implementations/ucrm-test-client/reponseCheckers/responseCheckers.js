import {getErrorName} from "../../shared-js/ucrmErrorCodes.js";

export function resetResponseCheckers(){
  lastSequenceId=-1;
}

let lastSequenceId=-1;

export function checkReceiveResponse(numberOfExpectedMessages,response){
  let messages = response.messages;
  if (!Array.isArray(messages) || messages.length !== numberOfExpectedMessages){
    return `messages must be an array with length==${numberOfExpectedMessages}`;
  }
  lastSequenceId=messages[messages.length - 1].sequenceId;
  console.log(`highest message sequenceId is ${lastSequenceId}`)
}

export function checkInfoResponse (response){
  if (typeof (response.apiVersion) !== "string" || typeof (response.crmProvider) !== "string" || !Number.isInteger(response.status) ){
    return "apiVersion or crmProvider not set or not of type string OR status not set or not of type integer";
  }
}

export function checkInfoResponseForStatus (status,response){
  if (!response.status===status){
    return `response status mismatch, expected ${status}, got ${response.status}`;
  }
  return checkInfoResponse(response);
}

export function createErrorResponseChecker(expectedUcriErrorCode){
  return function(response){
    if (!Number.isInteger(response.code)){
      return "error code must be an integer"
    }
    if (typeof(response.reason)!== "string"){
      return "error reason must be a string";
    }
    if (expectedUcriErrorCode !== response.code){
      return `ucrm error code mismatch, expected ${expectedUcriErrorCode} (${getErrorName(expectedUcriErrorCode)}), got ${response.code} (${getErrorName(response.code)})`;
    }
  }
}

export function checkArrayResponse(arrayPropertyName,expectedElementCount,optionalElementCheckerFunction,response){
  let arrayObject = response[arrayPropertyName];
  if (!Array.isArray(arrayObject)){
    return `response must contain an array property named '${arrayPropertyName}'`;
  }
  if (arrayObject.length!==expectedElementCount){
    return `response array with name ${arrayPropertyName} was expected to contain ${expectedElementCount} but ${arrayObject.length} elements were encountered!`;
  }
  if (typeof(optionalElementCheckerFunction)==="function"){
    let i=0;
    for (const el of arrayObject){
      const checkResult = optionalElementCheckerFunction(el);
      if (checkResult){
        return `array element at index ${i} was errorneous: ${checkResult}`;
      }
      i++;
    }
  }
}