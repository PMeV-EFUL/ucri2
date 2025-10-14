export const ucrmErrors = {
  "REQUEST_INVALID_PER_CLIENT_TRANSPORT_SPEC": 460,
  "REQUEST_PAYLOAD_UNKNOWN_APPID": 461,
  "REQUEST_PAYLOAD_UNKNOWN_APPVERSION": 462,
  "REQUEST_PAYLOAD_UNKNOWN_SCHEMAID": 463,
  "REQUEST_PAYLOAD_INVALID_PER_APP_SPEC": 464,
  "REQUEST_PAYLOAD_INVALID_JSON": 465,
  "REQUEST_PAYLOAD_UNSUPPORTED_APPID_OR_APPVERSION": 466,
  "REQUEST_PAYLOAD_UNSUPPORTED_MESSAGE": 468,
  "REQUEST_PAYLOAD_FORBIDDEN_APPID": 467,
  "REQUEST_UNKNOWN_DESTINATION_ID": 470,
  "REQUEST_UNAUTHORIZED": 475,
  "REQUEST_OID_FORBIDDEN": 478,
  "REQUEST_WRONG_SIGNATURE": 479,
  "REQUEST_INVALID_PER_P2P_TRANSPORT_SPEC": 480,
  "REQUEST_INTERNAL_ERROR": 491,
}

const errorNames={}

for (const [name,code] of Object.entries(ucrmErrors)) {
  errorNames[code] = name;
}

export function getErrorName(code) {
  return errorNames[code] || `UNKNOWN_ERROR_${code}`
}

function printErrorList(){
  console.log("- "+Object.values(ucrmErrors).join('\n- '));
  for (const errorEntry of Object.entries(ucrmErrors)) {
    console.log(`## Fehlercode ${errorEntry[1]} (${errorEntry[0]})`);
  }
}

// printErrorList();
