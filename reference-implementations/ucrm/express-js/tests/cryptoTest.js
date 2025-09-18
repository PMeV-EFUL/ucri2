import canonicalize from "canonicalize";
import sha3 from "js-sha3";
import * as jose from 'jose';
import {UcrmError} from "../util/ucrmError.js"

import {getSigningHash,sign,verifySignature,getEnvelopeSignature,getKTRecordSignature,verifyEnvelope,init as initCrypto} from "../../../shared-js/crypto.js"

initCrypto(UcrmError,canonicalize,sha3,jose);

// await generateSignedKTData("standalone");
// await generateSignedKTData("a");
// await generateSignedKTData("b");

async function performEnvelopeTests(){

  let testEnvelope = {
    "description": "Einsatzübergabe am 13.11.2023 um 20:20",
    "timeout": 300,
    "ack": "NACK",
    "source": "1.2.3.4.5.6",
    "destinations": [
      "1.2.3.4.5.8"
    ],
    "payload": {
      "appId": "incident_transfer",
      "appVersion": "0.1",
      "schemaId": "incident",
      "contentType": "application/json",
      "data": "{\"sharedIncidentId\":\"550e8400-e29b-41d4-a716-446655440000\",\"internalId\":\"f123456\",\"classifications\":[\"A1\",\"F2\"],\"issue\":\"Notfall\",\"flashingLights\":true,\"additionalInfo\":\"Zusatzinformationen\",\"sentByDispatcherAt\":\"2024-01-01T10:05:08Z\",\"startTimestamp\":\"2024-01-01T09:55:15Z\",\"missionLocation\":{\"coordinate\":{\"lat\":65.453323,\"lon\":14.542343},\"address\":{\"street\":\"Musterstrasse\",\"houseNumber\":\"15b\",\"postalCode\":\"12345\",\"city\":\"Musterhausen\",\"cityDistrict\":\"Musterberg\",\"state\":\"Brandenburg\",\"country\":\"DE\"},\"object\":{\"name\":\"Abteilung IV, Haus 3\",\"additionalInfo\":\"Campus West\"},\"superiorObject\":{\"name\":\"Krankenhaus Musterstift\",\"additionalInfo\":\"Weitere Informationen\"},\"floor\":\"3. OG\",\"room\":\"412\",\"additionalInfo\":\"Weitere Informationen\"},\"informers\":[{\"name\":\"Musterfrau\",\"surname\":\"Heike\",\"phone\":\"+49 30 234567\",\"email\":\"heike.musterfrau@example.com\"}]}"
    }
  }

  let testEnvelope2={
    "description": "Einsatzübergabe am 13.11.2023 um 20:20",
    "timeout": 300,
    "ack": "NACK",
    "source": "1.2.3.4.5.6",
    "destinations": [
      "1.2.3.4.5.8"
    ],
    "payload": {
      "appId": "incident_transfer",
      "appVersion": "0.1",
      "schemaId": "incident",
      "contentType": "application/json",
      "data": "{\"sharedIncidentId\":\"550e8400-e29b-41d4-a716-446655440000\",\"internalId\":\"f123456\",\"classifications\":[\"A1\",\"F2\"],\"issue\":\"Notfall\",\"flashingLights\":true,\"additionalInfo\":\"Zusatzinformationen\",\"sentByDispatcherAt\":\"2024-01-01T10:05:08Z\",\"startTimestamp\":\"2024-01-01T09:55:15Z\",\"missionLocation\":{\"coordinate\":{\"lat\":65.453323,\"lon\":14.542343},\"address\":{\"street\":\"Musterstrasse\",\"houseNumber\":\"15b\",\"postalCode\":\"12345\",\"city\":\"Musterhausen\",\"cityDistrict\":\"Musterberg\",\"state\":\"Brandenburg\",\"country\":\"DE\"},\"object\":{\"name\":\"Abteilung IV, Haus 3\",\"additionalInfo\":\"Campus West\"},\"superiorObject\":{\"name\":\"Krankenhaus Musterstift\",\"additionalInfo\":\"Weitere Informationen\"},\"floor\":\"3. OG\",\"room\":\"412\",\"additionalInfo\":\"Weitere Informationen\"},\"informers\":[{\"name\":\"Musterfrau\",\"surname\":\"Heike\",\"phone\":\"+49 30 234567\",\"email\":\"heike.musterfrau@example.com\"}]}"
    },
    "signature": "eyJ0eXAiOiJVQ1JJX1BMQUlOIiwiYWxnIjoiUlMyNTYifQ.NDUzY2Q0MzYzZGE2MzNiYmQ1MmI1MTIxYTEyNThlMWFmNzUxODI5NmI5MGJjN2MyMDdhYzlmYjk4ZmVhNTNlNw.Syzytj8gKIKIOaIHQehHRL7uJvNoJoigHTxYj9RBz2heTeKJVGU6lq2c3rXh-69KoJd1KZat6M8di7pekUkPlY8emnn9AtRwdZqF3-4Nq96Y8xTbZhOid4TlXFeK4ocABD2ueeymdv-Gikbj793gin00E5nSg-BLV-tKD5cLk-K03GpPeSOKxLLhC8sha1t31ExFPKQBu9j_qCV-hYx2Vw433UcHzzJ8BnhLSDBro1L5op5991leKzI-2R5ZKS3TDf0izQU2IZGAVUByKQU_qJhQujxiMxa_rroP_-0XDV_7WDzzexHflDm69VZZD_82CM3ufsM5AE6NHRL_5biLHQ",
    "messageId": "a896d9d8-efb1-497d-8c51-927d99d56666",
    "sentDate": "2025-09-09T09:54:42.257Z"
  }

  console.log(`TestEnvelope Hash: ${getSigningHash(testEnvelope)}`);
  console.log(`TestEnvelope2 Hash: ${getSigningHash(testEnvelope2)}`);

  let privateKey = {
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
  };
  let publicKey = {
    "kty": "RSA",
    "alg": "RS256",
    "n": "riPtU1ZKwnCjfwxcf9w5Le6imUaPueVkqeU4JbzVN5FcFuwbhhKLYa1jRJb64-xLM9PJHTfh74-6HhL0DBgDwhXheYYNJioyvmJ3ceWMjRAHLY-mkpnxE9hwJbfRvqL1wQUYrIFX71N9ujmILfGljijPv7dqSyyPQJjgN-gBTXmIXS8_Jo8cVlaEOpOcE8FYvEmy02lHCErxFI5aogNnwaH1w82XiUuntnDNe9xf0QcKETlV8vipzUQp2OXJhEzv7o3qQIElvCcF66F1VLKxFF7yuO9NDvo5_b4WK9dtB-Zb6r-8N5LrN1Y6BvBq-HzDY6J389DzUHlChFqhV9-V2Q",
    "e": "AQAB"
  };

  const publicKey2 = {
    "kty": "RSA",
    "alg": "RS256",
    "n": "rq0uZ0i6OTaeSrcF2U944e_JJTX8yLv34_uAhBomchS1IJhzyVZvoHaA6hgIKCNgSlzcfrZCqRMfPSD0wFaugJ6sKepZxrrrCqpyCWwNRYNOgfn2gThts7OuCVdGRFdGPlJDc5bCaQzMn9j-tVnVnMPw8pTgvOOG4KKeB2gqmjffNosZ9qSeaJNjQiCD65i0cYArJxfeUFsxmfKMepCAhRSwxb4VGGoNizb9iAe8hBe9OPRhAoRHahlG-QUrkUjz3PEgQx_U0OYJnbbDWOo-6I_hgYqkymsyd1caP1Mw4U6830DiVAyjzgZ3DUx5zr499G-83ZR8mg2118b6eRbCFw",
    "e": "AQAB"
  }
// let jws = await sign("test",privateKey);
// console.log("JWS for TestEnvelope:",jws);

// await verifySignature(jws,publicKey);

  const testSignature = await getEnvelopeSignature(testEnvelope,privateKey);

  console.log(`Test signature: ${testSignature}`);
  let verifyResult= await verifyEnvelope(testEnvelope,testSignature,publicKey);
  console.log(verifyResult);

//key mismatch
  verifyResult= await verifyEnvelope(testEnvelope,testSignature,publicKey2);
  console.log(verifyResult);

//payload hash mismatch
  testEnvelope.baz=1;
  verifyResult= await verifyEnvelope(testEnvelope,testSignature,publicKey2);
  console.log(verifyResult);

}

async function generateSignedKTData(configName){
  console.log(`signatures for config ${configName}:`)
  const config= (await import((`../config/${configName}.config.js`))).config;
  const domainKey= (await import("../config/domainkey.test.js")).key;
  for (const record of Object.values(config.commParticipants)){
    record.signature=await getKTRecordSignature(record,domainKey);
    console.log(`OID ${record.id}`);
    console.log(`"signature": "${record.signature}"`);
  }
  // console.log(`SIGNED KT DATA:\n ${JSON.stringify(config, null, 2)}`);
}
