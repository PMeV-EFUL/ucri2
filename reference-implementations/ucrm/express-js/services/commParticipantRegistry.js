import {UcrmError} from "../util/ucrmError.js"
import {ucrmErrors} from "../util/ucrmErrorCodes.js"

let commParticipants = {
  "1.2.3.1.276.5.1.58.28.2.1": {
    "id": "1.2.3.1.276.5.1.58.28.2.1",
    "systemName": "ELS Essen",
    "operatorName": "Einsatzleitstelle Essen",
    "operatorShortName": "ELS E",
    "supportedApps": [
      {
        "appId": "incident",
        "appVersion": "0.1"
      },
      {
        "appId": "incident",
        "appVersion": "0.2"
      }
    ],
    "key": {
      "kty": "RSA",
      "n": "ofgWCuLjybRlzo0tZWJjNiuSfb4p4fAkd_wWJcyQoTbji9k0l8W26mPddx",
      "e": "AQAB"
    },
    "status": "off",
    "techSupport": {
      "phone": "001-555-1234",
      "e-mail": "abc@lst-essen.de"
    }
  },
  "1.2.3.1.337.5.1.58.28.2.1": {
    "id": "1.2.3.1.337.5.1.58.28.2.1",
    "systemName": "ELS Trinken",
    "operatorName": "Einsatzleitstelle Trinken",
    "operatorShortName": "ELS T",
    "supportedApps": [
      {
        "appId": "incident",
        "appVersion": "0.1"
      },
      {
        "appId": "incident",
        "appVersion": "0.2"
      }
    ],
    "key": {
      "kty": "RSA",
      "n": "ofgWCuLjybRlzo0tZWJjNiuSfb4p4fAkd_wWJcyQoTbji9k0l8W26mPddx",
      "e": "AQAB"
    },
    "status": "off",
    "techSupport": {
      "phone": "001-555-1234",
      "e-mail": "abc@lst-trinken.de"
    }
  }
};

export function getCommParticipant(id) {
  if (!commParticipants[id]) {
    throw new UcrmError(404,`CommParticipant with id '${id}' not found.`,ucrmErrors.REGISTRY_UNKNOWN_ID);
  }
  return commParticipants[id];
}

export function getAllCommParticipants(){
  return commParticipants;
}