import {createErrorResponseChecker} from "./reponseCheckers/responseCheckers.js";

export function generateExpectedError400(ucriErrorCode){
  return generateExpectedError(400,ucriErrorCode);
}

export function generateExpectedError(httpErrorCode,ucriErrorCode) {
  return {
    http:httpErrorCode,
    responseChecker:createErrorResponseChecker(ucriErrorCode)
  };
}