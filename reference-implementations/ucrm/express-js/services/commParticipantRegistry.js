import {UcrmError} from "../util/ucrmError.js"
import {ucrmErrors} from "../util/ucrmErrorCodes.js"

export function addCommParticipants(participants,ucrmId){
  Object.assign(commParticipants,participants);
  for (let id of Object.keys(participants)){
    ucrmIdsByPartipantIds[id]=ucrmId;
  }
}

let commParticipants={};
let ucrmIdsByPartipantIds={};

export function getCommParticipant(id,httpErrorNumber) {
  if (!commParticipants[id]) {
    throw new UcrmError(httpErrorNumber,`CommParticipant with id '${id}' is unknown.`,ucrmErrors.REQUEST_UNKNOWN_ID);
  }
  return commParticipants[id];
}

export function getAllCommParticipants(){
  return commParticipants;
}