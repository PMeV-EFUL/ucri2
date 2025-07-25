import {UcrmError} from "../util/ucrmError.js";
import {ucrmErrors} from "../util/ucrmErrorCodes.js";
import fetch from 'node-fetch';
import {getRemoteUcrmToken} from "./authManager.js";
import {base64Encode} from "../util/util.js"

export function addCommParticipants(participants,ucrmId){
  Object.assign(commParticipants,participants);
  for (let id of Object.keys(participants)){
    ucrmIdsByParticipantIds[id]=ucrmId;
  }
}

export function setConfiguration(conf){
  config=conf;
}

let commParticipants={};
let ucrmIdsByParticipantIds={};
let config={};

export function getCommParticipant(id,httpErrorNumber) {
  if (!commParticipants[id]) {
    throw new UcrmError(httpErrorNumber,`CommParticipant with id '${id}' is unknown.`,ucrmErrors.REQUEST_UNKNOWN_ID);
  }
  return commParticipants[id];
}

export function getAllCommParticipants(role){
  if (role==="ucrm"){
    console.log("role is ucrm, filtering results to own participants...");
    //filter results to only include own ones
    const out={}
    for (const [participantId,ucrmId] of Object.entries(ucrmIdsByParticipantIds)){
      if (ucrmId==="self"){
        out[participantId]=commParticipants[participantId];
      }
    }
    return out;
  }else{
    return commParticipants;
  }
}

export async function fetchParticipantsFromRemoteUcrms(){
  console.log("Fetching remote comm participants for all remote UCRMs...");
  for (const [ucrmId,remoteConfig] of Object.entries(config.remoteUcrms)){
    const registryUrl = `${remoteConfig.baseUrl}/registry`;
    console.log(`Fetching remote comm participants on remote UCRM with id '${ucrmId}' at registryUrl ${registryUrl}'....`);
    try{
      let authHeader = `bearer ${getRemoteUcrmToken(ucrmId)}`;
      const response = await fetch(registryUrl, {
          "headers": {
            "Content-Type": "application/json",
            "Authorization": authHeader,
          },
          "method": "GET"
        })
        if (response.status===200){
          let respJSON = await response.json();
          console.error(`success response from remote ucrm ${ucrmId}: ${JSON.stringify(respJSON,null,2)}`);
          addCommParticipants(respJSON,ucrmId);
        }else {
          let respJSON = await response.json();
          console.error(`received HTTP error ${response.status}, aborting... Response:\n ${JSON.stringify(respJSON,null,2)}`)
          return false;
        }
      }catch (err) {
        console.error(`remote ucrm '${ucrmId}' is not responding, aborting...`);
        return false;
      }
  }
}

