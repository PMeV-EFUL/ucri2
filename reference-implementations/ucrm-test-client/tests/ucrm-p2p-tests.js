import {
  checkInfoResponse, checkInfoResponseForStatus,
  checkReceiveResponse,
  createErrorResponseChecker
} from "../reponseCheckers/responseCheckers.js";
import {
  genStepGenericFetch,
  genStepInfo, genStepMessagingCommit,
  genStepMessagingReceive, genStepMessagingSend, genStepRegistry,
  setFetchStepProfile
} from "../generators/stepGenerators.js";
import {
  genBodyCommitRequest,
  genBodyReceiveRequest,
  genBodySendRequest
} from "../generators/bodyGenerators.js";
import curry from "lodash.curry";
import {ucrmErrors} from "../../shared-js/ucrmErrorCodes.js"
import {genExpectedError, genExpectedError400} from "../generators/miscGenerators.js";

//fetch defaults for the sending user (which is used by default)
setFetchStepProfile({
  ucrmId: "ucrmA",
  username: "userA1"
},"sender")

//fetch defaults for the receiving user
setFetchStepProfile({
  ucrmId: "ucrmB",
  username: "userB"
}, "receiver")

const senderOID = "1.2.3.4.5.6";
const receiverOID = "1.2.3.4.5.7";
const unknownOID = "1.2.3.4.5.1";

const DURATION_FOR_MESSAGE_DELIVERY_MS = 2000;

export const ucrmP2PSteps = [
  {
    type: "startUcrm",
    desc: "start UCRM A",
    ucrmId: "ucrmA",
    startDir: "../ucrm/express-js",
    startCmd: "node",
    startCmdParms: ["main.js", "./config/a.config.js"],
    baseUrl: "http://localhost:3002/ucrm/v0",
    readyLogString: "Listening on port",
    logStdOut: false,
    logStdErr: false
  },
  {
    type: "authorize",
    desc: "authorize with correct credentials (userA1)",
    ucrmId: "ucrmA",
    username: "userA1",
    password: "test",
    expect: {
      http: 200,
      role: "client"
    }
  },
  genStepInfo({
    desc: "get info while p2p discovery is active (status must be 1)",
    expect: {
      http: 200,
      responseChecker: curry(checkInfoResponseForStatus)(1)
    }
  },"sender"),
  genStepMessagingSend({
    desc: "post messaging send while discovery is active (leads to try again later error)",
    body: genBodySendRequest(senderOID, receiverOID),
    expect: genExpectedError(500,ucrmErrors.REQUEST_TRY_LATER_UCRM_IS_IN_DISCOVERY_MODE)
  },"sender"),

  //start second ucrm and wait for discovey to complete on both
  {
    type: "startUcrm",
    desc: "start UCRM B",
    ucrmId: "ucrmB",
    startDir: "../ucrm/express-js",
    startCmd: "node",
    startCmdParms: ["main.js", "./config/b.config.js"],
    baseUrl: "http://localhost:3003/ucrm/v0",
    readyLogString: "Listening on port",
    logStdOut: false,
    logStdErr: false
  },
  {
    type: "authorize",
    desc: "authorize with correct credentials (userB1)",
    ucrmId: "ucrmB",
    username: "userB",
    password: "test",
    expect: {
      http: 200,
      role: "client"
    }
  },
  {
    type: "awaitDiscoveryComplete",
    ucrmId: "ucrmA",
    username: "userA1"
  },
  {
    type: "awaitDiscoveryComplete",
    ucrmId: "ucrmB",
    username: "userB",
  },

  //send a message from userA1@ucrmA to userB@ucrmB and check for the returned delivery notification
  genStepMessagingSend({
    desc: "post messaging send first message (valid message)",
    body: genBodySendRequest(senderOID, receiverOID),
    expect: {
      http: 200
    }
  },"sender"),
  {
    type:"sleep",
    durationMs: DURATION_FOR_MESSAGE_DELIVERY_MS
  },
  genStepMessagingReceive({
    desc: "post messaging receive first message",
    body: genBodyReceiveRequest(receiverOID),
    expect: {
      http: 200,
      responseChecker:curry(checkReceiveResponse)(1)
    }
  },"receiver"),
  genStepMessagingSend({
    desc: "post messaging send second message (valid message)",
    body: genBodySendRequest(senderOID, receiverOID),
    expect: {
      http: 200
    }
  },"sender"),
  {
    type:"sleep",
    durationMs:DURATION_FOR_MESSAGE_DELIVERY_MS
  },
  genStepMessagingReceive({
    desc: "post messaging receive first and second message",
    body: genBodyReceiveRequest(receiverOID),
    expect: {
      http: 200,
      responseChecker:curry(checkReceiveResponse)(2)
    }
  },"receiver"),
  genStepMessagingReceive({
    desc: "post messaging receive first message (maxMessages=1)",
    body: genBodyReceiveRequest(receiverOID,1),
    expect: {
      http: 200,
      responseChecker:curry(checkReceiveResponse)(1)
    }
  },"receiver"),
  genStepMessagingCommit({
    desc: "post messaging commit first message",
    body: genBodyCommitRequest(receiverOID, 1),
    expect: {
      http: 204
    }
  },"receiver"),
  genStepMessagingReceive({
    desc: "post messaging receive second message (first was already committed)",
    body: genBodyReceiveRequest(receiverOID),
    expect: {
      http: 200,
      responseChecker:curry(checkReceiveResponse)(1)
    }
  },"receiver"),
  genStepMessagingCommit({
    desc: "post messaging commit second message",
    body: genBodyCommitRequest(receiverOID, 2),
    expect: {
      http: 204
    }
  },"receiver"),
  genStepMessagingReceive({
    desc: "post messaging receive no messages (first and second was already committed)",
    body: genBodyReceiveRequest(receiverOID),
    expect: {
      http: 204
    }
  },"receiver"),
  {
    type:"sleep",
    durationMs: DURATION_FOR_MESSAGE_DELIVERY_MS
  },
  //as the ACK of all sent messages was ALL, sender should now have two delivery notifications
  genStepMessagingReceive({
    //TODO check that the two messages are actual delivery success messages
    desc: "post messaging receive two delivery success messages",
    body: genBodyReceiveRequest(senderOID),
    expect: {
      http: 200,
      responseChecker:curry(checkReceiveResponse)(2)
    }
  },"sender"),
  genStepMessagingCommit({
    desc: "commit both delivery success messages",
    body: genBodyCommitRequest(senderOID, 2),
    expect: {
      http: 204
    }
  },"sender"),

  //next up is a round with a timed out message
  genStepMessagingSend({
    desc: "post messaging send (correct message with ACK=ALL and 5sec timeout)",
    body: genBodySendRequest(senderOID, receiverOID,{
      //lower timeouts are invalid as per spec
      timeout:10,
    }),
    expect: {
      http: 200
    }
  },"sender"),

  //sleep to generate a timeout
  {
    type:"sleep",
    durationMs:12500,
  },

  genStepMessagingReceive({
    //TODO check that messages is an actual delivery timeout messages
    desc: "post messaging receive one delivery timeout message",
    body: genBodyReceiveRequest(senderOID),
    expect: {
      http: 200,
      responseChecker:curry(checkReceiveResponse)(1)
    }
  },"sender"),
  genStepMessagingCommit({
    desc: "commit one delivery timeout message",
    body: genBodyCommitRequest(senderOID, 3),
    expect: {
      http: 204
    }
  },"sender"),

  //TODO receiver still has an incoming message in the receive queue now
  //TODO create a test which fails on the remote UCRM
  //TODO create a test with ACK=NONE and check if no timeout message is returned to the sender
];

const otherSteps = [
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
  //TODO we are currently missing tests for invalid tokens

  genStepInfo({
    desc: "get info",
    expect: {
      http: 200,
      responseChecker: checkInfoResponse
    }
  },"sender"),
  genStepMessagingReceive({
    desc: "post messaging receive (empty)",
    body: genBodyReceiveRequest(senderOID),
    expect: {
      http: 204
    }
  },"sender"),
  genStepMessagingReceive({
    desc: "post messaging receive (unknown OID)",
    body: genBodyReceiveRequest("1.666"),
    expect: genExpectedError400(ucrmErrors.REQUEST_UNKNOWN_DESTINATION_ID)
  },"sender"),
  genStepMessagingReceive({
    desc: "post messaging receive (unallowed but existing OID)",
    body: genBodyReceiveRequest(receiverOID),
    expect: genExpectedError400(ucrmErrors.REQUEST_OID_FORBIDDEN)
  },"sender"),

  genStepMessagingCommit({
    desc: "post messaging commit (invalid as nothing to commit)",
    body: genBodyCommitRequest(senderOID, 1234),
    expect: genExpectedError400(ucrmErrors.REQUEST_NO_MESSAGES_TO_COMMIT)
  },"sender"),

  genStepMessagingSend({
    desc: "post messaging send (disallowed source)",
    body: genBodySendRequest(receiverOID, receiverOID),
    expect: genExpectedError400(ucrmErrors.REQUEST_OID_FORBIDDEN)
  },"sender"),
  genStepMessagingSend({
    desc: "post messaging send (unknown destination)",
    body: genBodySendRequest(senderOID, unknownOID),
    expect: genExpectedError400(ucrmErrors.REQUEST_UNKNOWN_DESTINATION_ID)
  },"sender"),
  genStepMessagingSend({
    desc: "post messaging send (unknown appId)",
    body: genBodySendRequest(senderOID, receiverOID,{
      payload:{
        appId:"unknownApp"
      }
    }),
    expect: genExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_APPID)
  },"sender"),
  genStepMessagingSend({
    desc: "post messaging send (unknown appVersion)",
    body: genBodySendRequest(senderOID, receiverOID,{
      payload:{
        appVersion:"999.999"
      }
    }),
    expect: genExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_APPVERSION)
  },"sender"),
  genStepMessagingSend({
    desc: "post messaging send (unknown schemaId)",
    body: genBodySendRequest(senderOID, receiverOID,{
      payload:{
        schemaId:"unknownMessage"
      }
    }),
    expect: genExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_SCHEMAID)
  },"sender"),
  genStepMessagingSend({
    desc: "post messaging send (appId not supported by receiver)",
    body: genBodySendRequest(senderOID, receiverOID,{
      payload:{
        appId:"patient_transport"
      }
    }),
    expect: genExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNSUPPORTED_APPID_OR_APPVERSION)
  },"sender"),
  //TODO to use this test we need an app spec which has at least two different versions!
  // generateStepMessagingSendPostFetch({
  //   desc: "post messaging send (appVersion not supported by receiver)",
  //   body: generateBodySendRequest(senderOID, receiverOID,{
  //     payload:{
  //       appVersion:"0.2"
  //     }
  //   }),
  //   expect: generateExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNSUPPORTED_APPID_OR_APPVERSION)
  // },"sender"),
  genStepMessagingSend({
    desc: "post messaging send (invalid non-JSON payload)",
    body: genBodySendRequest(senderOID, receiverOID,{
      payload:{
        data:"some invalid data"
      }
    }),
    expect: genExpectedError400(ucrmErrors.REQUEST_PAYLOAD_INVALID_JSON)
  },"sender"),
  genStepMessagingSend({
    desc: "post messaging send (invalid payload JSON)",
    body: genBodySendRequest(senderOID, receiverOID,{
      payload:{
        data:JSON.stringify({invalidData:true})
      }
    }),
    expect: genExpectedError400(ucrmErrors.REQUEST_PAYLOAD_INVALID_PER_APP_SPEC)
  },"sender"),

  //an actual working round of message sending
  genStepMessagingSend({
    desc: "post messaging send first message (valid message)",
    body: genBodySendRequest(senderOID, receiverOID),
    expect: {
      http: 200
    }
  },"sender"),
  {
    type:"sleep",
    durationMs:500
  },
  genStepMessagingReceive({
    desc: "post messaging receive first message",
    body: genBodyReceiveRequest(receiverOID),
    expect: {
      http: 200,
      responseChecker:curry(checkReceiveResponse)(1)
    }
  },"receiver"),
  genStepMessagingSend({
    desc: "post messaging send second message (valid message)",
    body: genBodySendRequest(senderOID, receiverOID),
    expect: {
      http: 200
    }
  },"sender"),
  {
    type:"sleep",
    durationMs:500
  },
  genStepMessagingReceive({
    desc: "post messaging receive first and second message",
    body: genBodyReceiveRequest(receiverOID),
    expect: {
      http: 200,
      responseChecker:curry(checkReceiveResponse)(2)
    }
  },"receiver"),
  genStepMessagingReceive({
    desc: "post messaging receive first message (maxMessages=1)",
    body: genBodyReceiveRequest(receiverOID,1),
    expect: {
      http: 200,
      responseChecker:curry(checkReceiveResponse)(1)
    }
  },"receiver"),
  genStepMessagingCommit({
    desc: "post messaging commit first message",
    body: genBodyCommitRequest(receiverOID, 1),
    expect: {
      http: 204
    }
  },"receiver"),
  genStepMessagingReceive({
    desc: "post messaging receive second message (first was already committed)",
    body: genBodyReceiveRequest(receiverOID),
    expect: {
      http: 200,
      responseChecker:curry(checkReceiveResponse)(1)
    }
  },"receiver"),
  genStepMessagingCommit({
    desc: "post messaging commit second message",
    body: genBodyCommitRequest(receiverOID, 2),
    expect: {
      http: 204
    }
  },"receiver"),
  genStepMessagingReceive({
    desc: "post messaging receive no messages (first and second was already committed)",
    body: genBodyReceiveRequest(receiverOID),
    expect: {
      http: 204
    }
  },"receiver"),

  //now to check the registry
  genStepRegistry({
    desc: "get registry entries",
    expect:{
      http: 200
    }
  },"sender"),
  genStepGenericFetch({
    endpoint:`registry/${receiverOID}`,
    method:"GET",
    desc: "get individual registry entry (existing)",
    expect:{
      http: 200
    }
  },"sender"),
  genStepGenericFetch({
    endpoint:`registry/${unknownOID}`,
    method:"GET",
    desc: "get individual registry entry (unknown)",
    expect:genExpectedError(404,ucrmErrors.REQUEST_UNKNOWN_DESTINATION_ID)
  },"sender"),
];
