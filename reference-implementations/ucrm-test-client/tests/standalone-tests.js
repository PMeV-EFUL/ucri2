import {
  checkArrayResponse,
  checkInfoResponse,
  checkReceiveResponse,
  createErrorResponseChecker
} from "../reponseCheckers/responseCheckers.js";
import {
  genStepGenericFetch,
  genStepInfo, genStepMessagingCommit,
  genStepMessagingReceive, genStepMessagingSend, genStepRegistry,
  setFetchStepProfile,setSigningKey
} from "../generators/stepGenerators.js";
import {
  genBodyCommitRequest,
  genBodyReceiveRequest,
  genBodySendRequest
} from "../generators/bodyGenerators.js";
import curry from "lodash.curry";
import {ucrmErrors} from "../../shared-js/ucrmErrorCodes.js"
import {genExpectedError, genExpectedError400} from "../generators/miscGenerators.js";

/*
Each step has a type, currently supported are:
startUcrm: Start an Ucrm (will wait until step.readyLogString appears in the process stdout, will be killed during cleanup)
authorize: Get an authorization Token (if sucessfull, token will be saved for the provided step.username)
fetch: Fetch data from a remote endpoint (using HTTP)
sleep: Sleep for step.durationMs milliseconds

 */
export async function generateSteps () {
  //fetch defaults for the sending user (which is used by default)
  setFetchStepProfile({
    ucrmId: "standalone",
    username: "userA1"
  },"sender")

//fetch defaults for the receiving user
  setFetchStepProfile({
    ucrmId: "standalone",
    username: "userA2"
  }, "receiver")

  const senderOID = "1.2.3.4.5.6";
  const receiverOID = "1.2.3.4.5.8";
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

  return  [
    //use startUcrm steps to start your UCRM. If you want to test an external UCRM,
    //you can also start and stop it manually and omit this step.
    {
      type: "startUcrm",
      desc: "start the standalone UCRM",
      ucrmId: "standalone",
      startDir: "../ucrm/express-js",
      startCmd: "node",
      startCmdParms: ["main.js", "./config/standalone.config.js"],
      baseUrl: "http://localhost:3001/ucrm/client/v0",
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
        http: 200
      }
    },
    {
      type: "authorize",
      desc: "authorize with correct credentials (userA2)",
      ucrmId: "standalone",
      username: "userA2",
      password: "test",
      expect: {
        http: 200
      }
    },
    //TODO we are currently missing tests for invalid tokens

    genStepInfo({
      desc: "get info",
      expect: {
        http: 200,
        responseChecker: checkInfoResponse
      }
    }, "sender"),

    //now to check the registry
    genStepRegistry({
      desc: "get registry entries (should be 3)",
      expect: {
        http: 200,
        responseChecker: curry(checkArrayResponse)("commParticipants", 3, false)

      }
    }, "sender"),
    genStepGenericFetch({
      endpoint: `registry/${receiverOID}`,
      method: "GET",
      desc: "get individual registry entry (existing)",
      expect: {
        http: 200
      }
    }, "sender"),
    genStepMessagingReceive({
      desc: "post messaging receive (empty)",
      body: genBodyReceiveRequest(senderOID),
      expect: {
        http: 204
      }
    }, "sender"),
    genStepMessagingReceive({
      desc: "post messaging receive (unknown OID)",
      body: genBodyReceiveRequest("1.666"),
      expect: genExpectedError400(ucrmErrors.REQUEST_UNKNOWN_DESTINATION_ID)
    }, "sender"),
    genStepMessagingReceive({
      desc: "post messaging receive (unallowed but existing OID)",
      body: genBodyReceiveRequest(receiverOID),
      expect: genExpectedError400(ucrmErrors.REQUEST_OID_FORBIDDEN)
    }, "sender"),

    genStepMessagingCommit({
      desc: "post messaging commit (invalid as nothing to commit)",
      body: genBodyCommitRequest(senderOID, 1234),
      expect: genExpectedError400(ucrmErrors.REQUEST_NO_MESSAGES_TO_COMMIT)
    }, "sender"),

    await genStepMessagingSend({
      desc: "post messaging send (disallowed source)",
      body: genBodySendRequest(receiverOID, receiverOID),
      expect: genExpectedError400(ucrmErrors.REQUEST_OID_FORBIDDEN)
    }, "sender"),
    await genStepMessagingSend({
      desc: "post messaging send (unknown destination)",
      body: genBodySendRequest(senderOID, unknownOID),
      expect: genExpectedError400(ucrmErrors.REQUEST_UNKNOWN_DESTINATION_ID)
    }, "sender"),
    await genStepMessagingSend({
      desc: "post messaging send (unknown appId)",
      body: genBodySendRequest(senderOID, receiverOID, {
        payload: {
          appId: "unknownApp"
        }
      }),
      expect: genExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_APPID)
    }, "sender"),
    await genStepMessagingSend({
      desc: "post messaging send (unknown appVersion)",
      body: genBodySendRequest(senderOID, receiverOID, {
        payload: {
          appVersion: "999.999"
        }
      }),
      expect: genExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_APPVERSION)
    }, "sender"),
    await genStepMessagingSend({
      desc: "post messaging send (unknown schemaId)",
      body: genBodySendRequest(senderOID, receiverOID, {
        payload: {
          schemaId: "unknownMessage"
        }
      }),
      expect: genExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_SCHEMAID)
    }, "sender"),
    await genStepMessagingSend({
      desc: "post messaging send (appId not supported by receiver)",
      body: genBodySendRequest(senderOID, receiverOID, {
        payload: {
          appId: "patient_transport"
        }
      }),
      expect: genExpectedError400(ucrmErrors.REQUEST_PAYLOAD_UNSUPPORTED_APPID_OR_APPVERSION)
    }, "sender"),
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
    await genStepMessagingSend({
      desc: "post messaging send (invalid non-JSON payload)",
      body: genBodySendRequest(senderOID, receiverOID, {
        payload: {
          data: "some invalid data"
        }
      }),
      expect: genExpectedError400(ucrmErrors.REQUEST_PAYLOAD_INVALID_JSON)
    }, "sender"),
    await genStepMessagingSend({
      desc: "post messaging send (invalid payload JSON)",
      body: genBodySendRequest(senderOID, receiverOID, {
        payload: {
          data: JSON.stringify({invalidData: true})
        }
      }),
      expect: genExpectedError400(ucrmErrors.REQUEST_PAYLOAD_INVALID_PER_APP_SPEC)
    }, "sender"),

    //an actual working round of message sending
    await genStepMessagingSend({
      desc: "post messaging send first message (valid message)",
      body: genBodySendRequest(senderOID, receiverOID),
      expect: {
        http: 200
      }
    }, "sender"),
    {
      type: "sleep",
      durationMs: 500
    },
    genStepMessagingReceive({
      desc: "post messaging receive first message",
      body: genBodyReceiveRequest(receiverOID),
      expect: {
        http: 200,
        responseChecker: curry(checkReceiveResponse)(1)
      }
    }, "receiver"),
    await genStepMessagingSend({
      desc: "post messaging send second message (valid message)",
      body: genBodySendRequest(senderOID, receiverOID),
      expect: {
        http: 200
      }
    }, "sender"),
    {
      type: "sleep",
      durationMs: 500
    },
    genStepMessagingReceive({
      desc: "post messaging receive first and second message",
      body: genBodyReceiveRequest(receiverOID),
      expect: {
        http: 200,
        responseChecker: curry(checkReceiveResponse)(2)
      }
    }, "receiver"),
    genStepMessagingReceive({
      desc: "post messaging receive first message (maxMessages=1)",
      body: genBodyReceiveRequest(receiverOID, 1),
      expect: {
        http: 200,
        responseChecker: curry(checkReceiveResponse)(1)
      }
    }, "receiver"),
    genStepMessagingCommit({
      desc: "post messaging commit first message",
      body: genBodyCommitRequest(receiverOID, 1),
      expect: {
        http: 204
      }
    }, "receiver"),
    genStepMessagingReceive({
      desc: "post messaging receive second message (first was already committed)",
      body: genBodyReceiveRequest(receiverOID),
      expect: {
        http: 200,
        responseChecker: curry(checkReceiveResponse)(1)
      }
    }, "receiver"),
    genStepMessagingCommit({
      desc: "post messaging commit second message",
      body: genBodyCommitRequest(receiverOID, 2),
      expect: {
        http: 204
      }
    }, "receiver"),
    genStepMessagingReceive({
      desc: "post messaging receive no messages (first and second was already committed)",
      body: genBodyReceiveRequest(receiverOID),
      expect: {
        http: 204
      }
    }, "receiver"),
    genStepGenericFetch({
      endpoint: `registry/${unknownOID}`,
      method: "GET",
      desc: "get individual registry entry (unknown)",
      expect: genExpectedError(404, ucrmErrors.REQUEST_UNKNOWN_DESTINATION_ID)
    }, "sender"),
  ];
}
