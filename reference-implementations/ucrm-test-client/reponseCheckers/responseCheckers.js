export function checkInfoResponse (response){
  if (typeof (response.apiVersion) !== "string" || typeof (response.crmProvider) !== "string"){
    return "apiVersion or crmProvider not set or not of type string";
  }
  return false;
}