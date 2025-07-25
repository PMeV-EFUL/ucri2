import {UcrmError} from "../util/ucrmError.js"
import {ucrmErrors} from "../util/ucrmErrorCodes.js"
import {Buffer} from "buffer";

export function checkRole(req,allowedRoles){
  if (!req.claims || !req.claims.role || allowedRoles.indexOf(req.claims.role) === -1){
    throw new UcrmError(400,`Role may not access this resource.`,ucrmErrors.ROLE_MISMATCH);
  }
}

export function base64Encode(str){
  return Buffer.from(str, "utf8").toString("base64")
}

export function base64Decode(str){
  return Buffer.from(str, "base64").toString("utf8")
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
