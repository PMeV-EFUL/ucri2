import {Buffer} from "buffer";

export function base64Encode(str){
  return Buffer.from(str, "utf8").toString("base64")
}

export function base64Decode(str){
  return Buffer.from(str, "base64").toString("utf8")
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
