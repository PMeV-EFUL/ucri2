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
      return `ucrm error code mismatch, expected ${expectedUcriErrorCode}, got ${response.code}`;
    }
  }
}