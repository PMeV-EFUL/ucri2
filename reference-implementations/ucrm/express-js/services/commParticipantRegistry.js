import {UcrmError} from "../util/ucrmError.js";
import {ucrmErrors} from "../../../shared-js/ucrmErrorCodes.js";
import fetch from 'node-fetch';
import {getRemoteUcrmToken} from "./authManager.js";

export async function addCommParticipants(participants, ucrmId) {
  const validParticipants = {};
  let errorOccured = false;
  for (const [oid,participant] of Object.entries(participants)) {
    //KT Signing is (no longer) part of Transport Layer 2.0, so everything pertaining to it has been disabled (for now)
    // if (config.useKTSignatures){
    //   if (!participant.domain){
    //     console.error(`Participant with oid '${oid}' has no domain!`);
    //     errorOccured = true;
    //     continue;
    //   }
    //   let domainPublicKey = config.domainPublicKeys[participant.domain];
    //   if (!domainPublicKey){
    //     console.error(`Participant with oid '${oid}' has unknown domain '${participant.domain}'!`);
    //     errorOccured = true;
    //     continue;
    //   }
    //   try{
    //     await verifyKTRecord(participant,domainPublicKey);
    //     validParticipants[oid]=participant;
    //   }catch(err){
    //     console.error(`KT signature verification fail for oid '${oid}', reason: ${err.message}`);
    //     errorOccured = true;
    //     continue;
    //   }
    // }else{
      validParticipants[oid]=participant;
    // }
  }
  Object.assign(commParticipants, validParticipants);
  for (let id of Object.keys(validParticipants)) {
    ucrmIdsByParticipantIds[id] = ucrmId;
  }
  return !errorOccured;
}

export function setConfiguration(conf) {
  config = conf;
}

let commParticipants = {};
let ucrmIdsByParticipantIds = {};
let config = {};

export function getUcrmIdFromParticipantId(participantId) {
  return ucrmIdsByParticipantIds[participantId];
}

export function getCommParticipant(id, httpErrorNumber) {
  if (!commParticipants[id]) {
    throw new UcrmError(httpErrorNumber, `CommParticipant with id '${id}' is unknown.`, ucrmErrors.REQUEST_UNKNOWN_DESTINATION_ID);
  }
  return commParticipants[id];
}

export function getAllCommParticipants(type) {
  let out=[];
  if (type === "p2p") {
    //console.log("type is p2p, filtering results to own participants...");
    //filter results to only include own ones
    for (const [participantId, ucrmId] of Object.entries(ucrmIdsByParticipantIds)) {
      if (ucrmId === "self") {
        out.push(commParticipants[participantId]);
      }
    }
  } else {
    out=Object.values(commParticipants);
  }
  // console.log(`COMMPARTICIPANTS ARE: ${JSON.stringify(out, null, 2)}`);
  return {commParticipants:out};
}

export function updateCommParticipantStatus(id, status) {
  if (!commParticipants[id]) {
     console.error(`CommParticipant with id '${id}' is unknown.`);
  }
  commParticipants[id].status = status;
}

export async function fetchParticipantsFromRemoteUcrms() {
  console.log("Fetching remote comm participants for all remote UCRMs...");
  for (const [ucrmId, remoteConfig] of Object.entries(config.remoteUcrms)) {
    const registryUrl = `${remoteConfig.baseUrl}/registry`;
    console.log(`Fetching remote comm participants on remote UCRM with id '${ucrmId}' at registryUrl ${registryUrl}'....`);
    try {
      let authHeader = `bearer ${getRemoteUcrmToken(ucrmId)}`;
      const response = await fetch(registryUrl, {
        "headers": {
          "Content-Type": "application/json",
          "Authorization": authHeader,
        },
        "method": "GET"
      })
      if (response.status === 200) {
        let respJSON = await response.json();
        console.log(`success response from remote ucrm ${ucrmId}: ${JSON.stringify(respJSON, null, 2)}`);
        const participantMap={};
        for (const participant of respJSON.commParticipants) {
          participantMap[participant.id] = participant;
        }
        await addCommParticipants(participantMap, ucrmId);
      } else {
        let respJSON = await response.json();
        console.error(`received HTTP error ${response.status}, aborting... Response:\n ${JSON.stringify(respJSON, null, 2)}`)
        return false;
      }
    } catch (err) {
      console.error(`remote ucrm '${ucrmId}' is not responding, aborting...`);
      return false;
    }
  }
  return true;
}

