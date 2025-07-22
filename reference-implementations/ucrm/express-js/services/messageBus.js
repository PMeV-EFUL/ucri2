import {v4 as uuidv4} from "uuid";
import {UcrmError} from "../util/ucrmError.js"
import {ucrmErrors} from "../util/ucrmErrorCodes.js"

export function setAppSchemata(appSchemataToUse){
  appSchemata = appSchemataToUse;
}

let appSchemata;
const pendingMessagesPerDestination ={}
const messageSeqNumbersPerDestination ={}

export async function sendMessage(senderRequest){
  const destinationId = senderRequest.destinations[0];
  if (!senderRequest.messageId){
    senderRequest.messageId = uuidv4();
  }
  senderRequest.sentDate = new Date().toISOString();
  //validate payload
  const appId=senderRequest.payload.appId;
  const appVersion=senderRequest.payload.appVersion;
  const schemaId=senderRequest.payload.schemaId;

  if (!appSchemata[appId]){
    throw new UcrmError(400,`Unknown UCRI2 App '${appId}'`,ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_APPID);
  }
  if (!appSchemata[appId][appVersion]){
    throw new UcrmError(400,`Unknown version '${appVersion}' for UCRI2 App '${appId}'`,ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_APPVERSION);
  }
  if (!appSchemata[appId][appVersion][schemaId]){
    throw new UcrmError(400,`Unknown message name '${schemaId}' for UCRI2 App '${appId}' version '${appVersion}' `,ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_SCHEMAID);
  }

  let payloadObject;
  try {
    payloadObject = JSON.parse(senderRequest.payload.data);
  }catch(err){
    throw new UcrmError(400,`Invalid JSON payload' `,ucrmErrors.REQUEST_PAYLOAD_INVALID_JSON);
  }

  let validator = appSchemata[appId][appVersion][schemaId];
  const valid = validator(payloadObject);
  if (!valid) {
    const errorMessages = validator.errors.map((err) => `At '${err.instancePath}': ${err.message}`);
    throw new UcrmError(400,`Payload violates schema for message name '${schemaId}' for UCRI2 App '${appId}' version '${appVersion}'`,ucrmErrors.REQUEST_PAYLOAD_INVALID_PER_APP_SPEC,`Errors: ${errorMessages.join(",")}`);
  }



  getPendingMessagesForDestination(destinationId).push(senderRequest);
  return senderRequest;
}

export function receiveMessages(receiverRequest){
  const destinations = receiverRequest.destinations;
  const maxMessageCount = receiverRequest.maxMessages || 1;
  let messagesToReturn = [];
  for (const destinationId of destinations){
    if (pendingMessagesPerDestination[destinationId]){
      let messagesForDestination = pendingMessagesPerDestination[destinationId].slice(0,maxMessageCount);
      for (const message of messagesForDestination){
        //set message sequence numbers if not set already
        if (!message.sequenceId){
          message.sequenceId = getNextSequenceIdForDestination(destinationId);
        }
        //this works because each message only has a single destination for now...
        message.destination = destinationId;
      }
      messagesToReturn=messagesToReturn.concat(messagesForDestination);
    }
  }
  return {messages: messagesToReturn,maxMessages: maxMessageCount};
}

export function confirmMessages(messageRef){
  const destinationId = messageRef.destination;
  const sequenceId = messageRef.sequenceId;
  let pendingMessagesForDestination = pendingMessagesPerDestination[destinationId];
  if (!pendingMessagesForDestination){
    throw new UcrmError(400,`No messages to commit for destination '${destinationId}'.`);
  }
  let confirmedMessageCount = 0;
  let i = pendingMessagesForDestination.length;
  while (i--) {
    const message = pendingMessagesForDestination[i];
    if (message.sequenceId && message.sequenceId<=sequenceId){
      confirmedMessageCount++;
      pendingMessagesForDestination.splice(i,1);
    }
  }
  if (confirmedMessageCount === 0){
    throw new UcrmError(400,`No messages to commit for destination '${destinationId}' as no message has sequenceId <= ${sequenceId}`);
  }

}

function getPendingMessagesForDestination(destinationId){
  if (!pendingMessagesPerDestination[destinationId]){
    pendingMessagesPerDestination[destinationId] = [];
  }
  return pendingMessagesPerDestination[destinationId];
}

function getNextSequenceIdForDestination(destinationId){
  if (typeof messageSeqNumbersPerDestination[destinationId] === "undefined"){
    messageSeqNumbersPerDestination[destinationId] = 0;
  }
  messageSeqNumbersPerDestination[destinationId]++;
  return messageSeqNumbersPerDestination[destinationId];
}