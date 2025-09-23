import {
  checkArrayResponse,
  checkInfoResponse, checkInfoResponseForStatus,
  checkReceiveResponse,
  createErrorResponseChecker
} from "../reponseCheckers/responseCheckers.js";
import {
  genStepGenericFetch,
  genStepInfo, genStepMessagingCommit,
  genStepMessagingReceive, genStepMessagingSend, genStepRegistry,
  setFetchStepProfile, setSigningKey
} from "../generators/stepGenerators.js";
import {
  genBodyCommitRequest,
  genBodyReceiveRequest,
  genBodySendRequest
} from "../generators/bodyGenerators.js";
import curry from "lodash.curry";
import {ucrmErrors} from "../../shared-js/ucrmErrorCodes.js"
import {genExpectedError, genExpectedError400} from "../generators/miscGenerators.js";



const DURATION_FOR_MESSAGE_DELIVERY_MS = 2000;
const LOG_UCRM_A_CONSOLE = false;
const LOG_UCRM_B_CONSOLE = false;

export async function generateSteps(){
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

//fetch defaults for p2p ucrm user
  setFetchStepProfile({
    ucrmId: "ucrmA",
    username: "crmB",
    baseUrlOverride: "http://localhost:3002/ucrm/p2p/v0"
  },"crmBOnCrmA")


  const senderOID = "1.2.3.4.5.6";
  const receiverOID = "1.2.3.4.5.7";
  const unknownOID = "1.2.3.4.5.1";

  setSigningKey(senderOID,{
    "kty": "RSA",
    "alg": "RS256",
    "kid": "ce0c04df-245d-4142-93b2-6b1e2d46a9b2",
    "n": "riPtU1ZKwnCjfwxcf9w5Le6imUaPueVkqeU4JbzVN5FcFuwbhhKLYa1jRJb64-xLM9PJHTfh74-6HhL0DBgDwhXheYYNJioyvmJ3ceWMjRAHLY-mkpnxE9hwJbfRvqL1wQUYrIFX71N9ujmILfGljijPv7dqSyyPQJjgN-gBTXmIXS8_Jo8cVlaEOpOcE8FYvEmy02lHCErxFI5aogNnwaH1w82XiUuntnDNe9xf0QcKETlV8vipzUQp2OXJhEzv7o3qQIElvCcF66F1VLKxFF7yuO9NDvo5_b4WK9dtB-Zb6r-8N5LrN1Y6BvBq-HzDY6J389DzUHlChFqhV9-V2Q",
    "e": "AQAB",
    "d": "n3cK5xvIThIzxi4droCOY_95Kn8xMnxcGDBtoDEx1zbna54-_iGRPZs3oiHYEkvZ-dXg_z6jSWsGdm_IyCJdnqfG2C_nbqGJ4kntM4GPmcWprRE06l7KIvA6km-oRLiZ722pUJ8JVYHRSm1QxTHZ9zpsNBXT4o8lh3P3L3rnZnd3sOxU1bXioWdgGNJkC1ydCNuyu5d5AZ74mVfKATsQacpBfYuJaxvoCdWKkynSuPgScTRn84-8-d-MTkBXTjMC7NbnyRCZI1fk1GGKPkFGugySFdCACUzEAp43RN1prv-OM3znrScYqy3VXZT2VAptn6swIDpNtpsPzieRFD9gWQ",
    "p": "0Z0xbVmSRWQLxNeIM9SSoBOz2BXYqNSwMJk0nTpN0LZf1oekT55E7BC6bbxL9Mf_KDnIY8CBaAExanBRBBcKienI9C7gfF0p-iY_uIhcrdnjiGV_zfvNXuvqonQieBTu8NtrRwGO-p0IPyzo0qt4UGSmoX7GQAeVnz5JRUNC4Lc",
    "q": "1K0evAdQOTjWbvPafkr4UuPxfck3xSAcSEYdAg1vRIZysar2QmdxFp49oNBX9Up0St-_QkW_fVbMlc1RBGTy0Deo2Qc-SSwAMXymiBV6LDujBpn2LmuiHzqqIG4WRYJA7XuLl0jxcdWYZX7297yYeCyUjuPnnqS-LMbVg_2tje8",
    "dp": "DsrqHw5wLSd3USfou8enpVZencRE6v0_hd56ARKJRU5piwk9hkTkFkjD71SXg6nNjvgs9SUzvLRA2YMdpI0_uCXggaMBQqWMfdPPMWWmLLqwvQJ0t4OqpaU-hMJvYEwR5LuHYZZxkawdVeAEekGRlxLTU5hPw1sFqxxJLXMmuBc",
    "dq": "icWoblgygQ8v4mp4NW4tlczySPEL_thBWhSJgCXh2btbG3tL0lKecO-Lrtyozk8wLLzrcmwqk3CiUbzS6gzXO0mDSSynDdHCQkykuO1o2rS7dHBSiVnSiXaAdUe7h8XMd8ub7yIivwKGmeF47Z2wC9GdXz-GcT_5rpoUAVBZmOM",
    "qi": "ML7z92hUzkHlYAQixyFh1RTjrIuNz_rL6yLFuKPyvquCTt6LJAlU0yXhhewwj6cUFibyeoNQ_Jafir1rhSxPPj5BrxiFKTIuEkcPrlHHC04aSFboglG67TKA8K1GEBBs-SyQuuGWz9uz1YXrG9ZwGM9LDPZ08vAmXPEf3G1JIJw"
  });

  return [
    {
      type: "startUcrm",
      desc: "start UCRM A",
      ucrmId: "ucrmA",
      startDir: "../ucrm/express-js",
      startCmd: "node",
      startCmdParms: ["main.js", "./config/a.config.js"],
      baseUrl: "http://localhost:3002/ucrm/client/v0",
      readyLogString: "Listening on port",
      logStdOut: LOG_UCRM_A_CONSOLE,
      logStdErr: LOG_UCRM_A_CONSOLE
    },
    {
      type: "authorize",
      desc: "authorize with correct credentials (userA1)",
      ucrmId: "ucrmA",
      username: "userA1",
      password: "test",
      expect: {
        http: 200
      }
    },
    genStepInfo({
      desc: "get info while p2p discovery is active (status must be 1)",
      expect: {
        http: 200,
        responseChecker: curry(checkInfoResponseForStatus)(1)
      }
    },"sender"),
    genStepRegistry({
      desc: "get registry entries while p2p discovery is active (should be 3)",
      expect:{
        http: 200,
        responseChecker:curry(checkArrayResponse)("commParticipants",3,false)
      }
    },"sender"),
    //get auth for ucrmB user on ucrm A
    {
      type: "authorize",
      desc: "authorize with correct credentials (p2p user ucrmB on ucrmA)",
      ucrmId: "ucrmA",
      baseUrlOverride: "http://localhost:3002/ucrm/p2p/v0",
      username: "crmB",
      password: "test",
      expect: {
        http: 200
      }
    },
    await genStepMessagingSend({
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
      baseUrl: "http://localhost:3003/ucrm/client/v0",
      readyLogString: "Listening on port",
      logStdOut: LOG_UCRM_B_CONSOLE,
      logStdErr: LOG_UCRM_B_CONSOLE
    },
    {
      type: "authorize",
      desc: "authorize with correct credentials (userB1)",
      ucrmId: "ucrmB",
      username: "userB",
      password: "test",
      expect: {
        http: 200
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
    genStepRegistry({
      desc: "get registry entries after p2p discovery is complete (should be 5)",
      expect:{
        http: 200,
        responseChecker:curry(checkArrayResponse)("commParticipants",5,false)
      }
    },"sender"),
    genStepRegistry({
      desc: "get local registry entries after p2p discovery is complete (should be 3)",
      expect:{
        http: 200,
        responseChecker:curry(checkArrayResponse)("commParticipants",3,false)
      }
    },"crmBOnCrmA"),
    //send a message from userA1@ucrmA to userB@ucrmB and check for the returned delivery notification
    await genStepMessagingSend({
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
    await genStepMessagingSend({
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
    await genStepMessagingSend({
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
}

