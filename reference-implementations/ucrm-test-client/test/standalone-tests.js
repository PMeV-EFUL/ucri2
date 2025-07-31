import {checkInfoResponse, createErrorResponseChecker} from "../reponseCheckers/responseCheckers.js";
import {
  generateStepInfoGetFetch, generateStepMessagingCommitPostFetch,
  generateStepMessagingReceivePostFetch, generateStepMessagingSendPostFetch,
  setFetchStepDefaults
} from "../stepGenerators/stepGenerators.js";
import {
  generateBodyCommitRequest,
  generateBodyReceiveRequest,
  generateBodySendRequest
} from "../bodyGenerators/bodyGenerators.js";
import {ucrmErrors} from "../../shared-js/ucrmErrorCodes.js"
import {generateExpectedError400} from "../miscGenerators.js";

//fetch defaults for the sending user (which is used by default)
setFetchStepDefaults({
  ucrmId: "standalone",
  username: "userA1"
})

//fetch defaults for the receiving user
setFetchStepDefaults({
  ucrmId: "standalone",
  username: "userA2"
}, "receiver")

const senderOID = "1.2.3.4.5.6";
const receiverOID = "1.2.3.4.5.8";
const unknownOID = "1.2.3.4.5.1";

export const steps = [
  {
    type: "startUcrm",
    ucrmId: "standalone",
    startDir: "../ucrm/express-js",
    startCmd: "node",
    startCmdParms: ["main.js", "./config/standalone.config.js"],
    baseUrl: "http://localhost:3002/ucrm/v0",
    readyLogString: "Listening on port",
    logStdOut: false,
    logStdErr: false
  },
  {
    type: "authorize",
    desc: "authorize with wrong password",
    ucrmId: "standalone",
    username: "userA1",
    password: "wrongPassword",
    expect: {
      http: 401
    }
  },
  {
    type: "authorize",
    desc: "authorize with unknown user",
    ucrmId: "standalone",
    username: "unknownUser",
    password: "test",
    expect: {
      http: 401
    }
  },
  {
    type: "authorize",
    desc: "authorize with correct credentials (userA1)",
    ucrmId: "standalone",
    username: "userA1",
    password: "test",
    expect: {
      http: 200,
      role: "client"
    }
  },
  {
    type: "authorize",
    desc: "authorize with correct credentials (userA2)",
    ucrmId: "standalone",
    username: "userA2",
    password: "test",
    expect: {
      http: 200,
      role: "client"
    }
  },
  generateStepInfoGetFetch({
    desc: "get info",
    expect: {
      http: 200,
      responseChecker: checkInfoResponse
    }
  }),
  generateStepMessagingReceivePostFetch({
    desc: "post messaging receive (empty)",
    body: generateBodyReceiveRequest(senderOID),
    expect: {
      http: 204
    }
  }),
  //TODO maybe the UCRM should check first if this destination is actually known and return a different error here?
  generateStepMessagingReceivePostFetch({
    desc: "post messaging receive (invalid OID)",
    body: generateBodyReceiveRequest("1.666"),
    expect: generateExpectedError400(ucrmErrors.REQUEST_OID_FORBIDDEN)
  }),
  generateStepMessagingReceivePostFetch({
    desc: "post messaging receive (unallowed but existing OID)",
    body: generateBodyReceiveRequest(receiverOID),
    expect: generateExpectedError400(ucrmErrors.REQUEST_OID_FORBIDDEN)
  }),

  generateStepMessagingCommitPostFetch({
    desc: "post messaging commit (invalid as nothing to commit)",
    body: generateBodyCommitRequest(senderOID, 1234),
    expect: generateExpectedError400(ucrmErrors.REQUEST_NO_MESSAGES_TO_COMMIT)
  }),

  generateStepMessagingSendPostFetch({
    desc: "post messaging send (disallowed source)",
    body: generateBodySendRequest(receiverOID, receiverOID),
    expect: generateExpectedError400(ucrmErrors.REQUEST_OID_FORBIDDEN)
  }),
  generateStepMessagingSendPostFetch({
    desc: "post messaging send (unknown destination)",
    body: generateBodySendRequest(senderOID, unknownOID),
    expect: generateExpectedError400(ucrmErrors.REQUEST_UNKNOWN_DESTINATION_ID)
  }),
  generateStepMessagingSendPostFetch({
    desc: "post messaging send (unknown appId)",
    body: generateBodySendRequest(senderOID, receiverOID,{
      payload:{
        appId:"unknownApp"
      }
    }),
    expect: generateExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_APPID)
  }),
  generateStepMessagingSendPostFetch({
    desc: "post messaging send (unknown appVersion)",
    body: generateBodySendRequest(senderOID, receiverOID,{
      payload:{
        appVersion:"999.999"
      }
    }),
    expect: generateExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_APPVERSION)
  }),
  generateStepMessagingSendPostFetch({
    desc: "post messaging send (unknown schemaId)",
    body: generateBodySendRequest(senderOID, receiverOID,{
      payload:{
        schemaId:"unknownMessage"
      }
    }),
    expect: generateExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_SCHEMAID)
  }),
  generateStepMessagingSendPostFetch({
    desc: "post messaging send (appId not supported by receiver)",
    body: generateBodySendRequest(senderOID, receiverOID,{
      payload:{
        appId:"patient_transport"
      }
    }),
    expect: generateExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNSUPPORTED_APPID_OR_APPVERSION)
  }),
  //TODO to use this test we need an app spec which has at least two different versions!
  // generateStepMessagingSendPostFetch({
  //   desc: "post messaging send (appVersion not supported by receiver)",
  //   body: generateBodySendRequest(senderOID, receiverOID,{
  //     payload:{
  //       appVersion:"0.2"
  //     }
  //   }),
  //   expect: generateExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNSUPPORTED_APPID_OR_APPVERSION)
  // }),
  generateStepMessagingSendPostFetch({
    desc: "post messaging send (invalid non-JSON payload)",
    body: generateBodySendRequest(senderOID, receiverOID,{
      payload:{
        data:"some invalid data"
      }
    }),
    expect: generateExpectedError400(ucrmErrors.REQUEST_PAYLOAD_INVALID_JSON)
  }),
  generateStepMessagingSendPostFetch({
    desc: "post messaging send (invalid payload JSON)",
    body: generateBodySendRequest(senderOID, receiverOID,{
      payload:{
        data:JSON.stringify({invalidData:true})
      }
    }),
    expect: generateExpectedError400(ucrmErrors.REQUEST_PAYLOAD_INVALID_PER_APP_SPEC)
  }),
];
