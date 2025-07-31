export function checkInfoResponse (response){
  if (typeof (response.apiVersion) !== "string" || typeof (response.crmProvider) !== "string"){
    return "apiVersion or crmProvider not set or not of type string";
  }
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