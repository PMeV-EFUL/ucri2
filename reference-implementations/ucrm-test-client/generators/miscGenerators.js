import {createErrorResponseChecker} from "../reponseCheckers/responseCheckers.js";

export function genExpectedError400(ucriErrorCode){
  return genExpectedError(400,ucriErrorCode);
}

export function genExpectedError(httpErrorCode, ucriErrorCode) {
  return {
    http:httpErrorCode,
    responseChecker:createErrorResponseChecker(ucriErrorCode)
  };
}