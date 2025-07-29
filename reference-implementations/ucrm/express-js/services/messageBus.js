import {v4 as uuidv4} from "uuid";
import {UcrmError} from "../util/ucrmError.js"
import {ucrmErrors} from "../util/ucrmErrorCodes.js"
import {getCommParticipant, getUcrmIdFromParticipantId} from "./commParticipantRegistry.js"
import {getRemoteUcrmToken} from "./authManager.js";

export function setAppSchemata(appSchemataToUse) {
  appSchemata = appSchemataToUse;
}

export function setConfiguration(conf){
  config=conf;
}

const TRANSPORT_LAYER_APPID="transport_layer_messages";
const STATUS_MESSAGE_SCHEMAID="message_delivery_status";
const TIMEOUT_TRACKING_INVERVAL_MS=5000;


let appSchemata;
let config;
const unsentOutgoingMessages = []
const outgoingMessagesPendingDeliveryResponseOrTimeout = []
const pendingMessagesPerDestination = {}
const messageSeqNumbersPerDestination = {}
const trackedOutgoingMessagesPerMessageId = {};

export function start(){
  console.log("starting messageBus...");
  console.log("Starting message timeout tracking...");
  setInterval(checkForTimeouts,TIMEOUT_TRACKING_INVERVAL_MS);
}

export async function sendMessage(senderRequest, role) {
  switch (role) {
    case "ucrm":
      return handleIncomingMessage(senderRequest);
      break;
    case "client":
      return handleOutgoingMessage(senderRequest,false);
      break;
    default:
      throw new UcrmError(400, `Unknown role '${role}'`, ucrmErrors.REQUEST_ROLE_UNKNOWN);
  }
}

function handleIncomingMessage(senderRequest) {
  console.log("incoming P2P message...");
  //as the P2P receive endpoint is the same as the one for client send, some fields are optional in the schema but mandatory for P2P send
  if (!senderRequest.destinations || senderRequest.destinations.length !== 1) {
    throw new UcrmError(400, `Missing destination for P2P message`, ucrmErrors.REQUEST_INVALID_PER_P2P_SPEC);
  }
  if (!senderRequest.sentDate) {
    throw new UcrmError(400, `Missing sentDate for P2P message`, ucrmErrors.REQUEST_INVALID_PER_P2P_SPEC);
  }
  if (!senderRequest.messageId) {
    throw new UcrmError(400, `Missing messageId for P2P message`, ucrmErrors.REQUEST_INVALID_PER_P2P_SPEC);
  }
  validateSenderRequest(senderRequest);

  const destinationId = senderRequest.destinations[0];
  //checkAndHandlePotentialStatusMessage will indicate with its return value if this message should be suppressen (returns false in this case)
  if (checkAndHandlePotentialStatusMessage(senderRequest)){
    getPendingMessagesForDestination(destinationId).push(senderRequest);
  }
  return senderRequest;
}

function handleOutgoingMessage(senderRequest,allowTransportLayerMessages) {
  console.log("outgoing message...");
  if (!senderRequest.messageId) {
    senderRequest.messageId = uuidv4();
  }
  let sentDate = new Date();
  senderRequest.sentDate = sentDate.toISOString();

  const appId = senderRequest.payload.appId;
  const isTransportLayerApp=TRANSPORT_LAYER_APPID===appId

  if (!allowTransportLayerMessages && isTransportLayerApp) {
    //clients may not send forbidden app messages
    throw new UcrmError(400, `AppId '${appId}' may not be used by clients.`, ucrmErrors.REQUEST_PAYLOAD_FORBIDDEN_APPID);
  }

  validateSenderRequest(senderRequest);

  unsentOutgoingMessages.push(senderRequest);

  //if the message is not a transport layer message and ack is not NONE, we add the message to the (timeout) tracking
  let ack = senderRequest.ack;
  if (!isTransportLayerApp && ack && senderRequest.ack!=="NONE" && senderRequest.timeout) {
    trackedOutgoingMessagesPerMessageId[senderRequest.messageId]={
      source:senderRequest.source,
      destination:senderRequest.destinations[0],
      ack:ack,
      timeoutAt:sentDate.getTime()+(senderRequest.timeout*1000),
      timeoutSeconds:senderRequest.timeout
    }
  }

  processUnsentMessages();
  return senderRequest;
}

/**
 *
 * @param envelope
 * @return a boolean indicating if this message should be added to the destination queue (true) or not (false)
 */
function checkAndHandlePotentialStatusMessage(envelope){
  if (envelope.payload.appId===TRANSPORT_LAYER_APPID && envelope.payload.schemaId===STATUS_MESSAGE_SCHEMAID){
    const message=JSON.parse(envelope.payload.data);
    if (message.statusCode===200){
      const originalMessageId=message.refMessageId;
      const originalDestination=message.destination;
      console.log(`detected sucess status message for original message id ${originalMessageId} directed to ${originalDestination}`);
      const trackedData = trackedOutgoingMessagesPerMessageId[originalMessageId];
      delete trackedOutgoingMessagesPerMessageId[originalMessageId];
      if (trackedData && trackedData.ack==="NACK"){
        console.log(`success status message for ${originalMessageId} will be suppressed for the client as the original message had ack:'NACK' set`);
        return false;
      }
    }
  }
  return true;
}

function validateSenderRequest(senderRequest) {
  const destinationId = senderRequest.destinations[0];
  const appId = senderRequest.payload.appId;
  const appVersion = senderRequest.payload.appVersion;
  const schemaId = senderRequest.payload.schemaId;


  //check if target OID is known and get supported Apps
  const commParticipant = getCommParticipant(destinationId, 400);
  if (commParticipant.supportedApps.filter((app) => app.appId === appId && app.appVersion === appVersion).length === 0) {
    throw new UcrmError(400, `Unsupported version '${appVersion}' for UCRI2 App '${appId}' for destination '${destinationId}'`, ucrmErrors.REQUEST_PAYLOAD_UNSUPPORTED_APPID_OR_APPVERSION);
  }

  //validate payload
  if (!appSchemata[appId]) {
    throw new UcrmError(400, `Unknown UCRI2 App '${appId}'`, ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_APPID);
  }
  if (!appSchemata[appId][appVersion]) {
    throw new UcrmError(400, `Unknown version '${appVersion}' for UCRI2 App '${appId}'`, ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_APPVERSION);
  }
  if (!appSchemata[appId][appVersion][schemaId]) {
    throw new UcrmError(400, `Unknown message name '${schemaId}' for UCRI2 App '${appId}' version '${appVersion}' `, ucrmErrors.REQUEST_PAYLOAD_UNKNOWN_SCHEMAID);
  }

  let payloadObject;
  try {
    payloadObject = JSON.parse(senderRequest.payload.data);
  } catch (err) {
    throw new UcrmError(400, `Invalid JSON payload' `, ucrmErrors.REQUEST_PAYLOAD_INVALID_JSON);
  }

  let validator = appSchemata[appId][appVersion][schemaId];
  const valid = validator(payloadObject);
  if (!valid) {
    const errorMessages = validator.errors.map((err) => `At '${err.instancePath}': ${err.message}`);
    throw new UcrmError(400, `Payload violates schema for message name '${schemaId}' for UCRI2 App '${appId}' version '${appVersion}'`, ucrmErrors.REQUEST_PAYLOAD_INVALID_PER_APP_SPEC, `Errors: ${errorMessages.join(",")}`);
  }
}

async function processUnsentMessages() {
  if (unsentOutgoingMessages.length > 0) {
    console.log(`sending ${unsentOutgoingMessages.length} outgoing message(s)...`);
    const sentMessageIds=[];
    for (const senderRequest of unsentOutgoingMessages) {
      const destinationId = senderRequest.destinations[0];
      const messageId = senderRequest.messageId;
      const targetUcrmId = getUcrmIdFromParticipantId(destinationId);
      console.log(`about to send message with id '${senderRequest.messageId}' directed at participant '${destinationId}' connected via UCRM '${targetUcrmId}'`);
      if (targetUcrmId === "self") {
        //TODO it would be better to call handleIncomingMessage instead to have a consistent flow here
        console.log("message is local, no sending to remote ucrm necessary...");
        sentMessageIds.push(messageId);
        if (checkAndHandlePotentialStatusMessage(senderRequest)){
          getPendingMessagesForDestination(destinationId).push(senderRequest);
        }
      }else{
        const remoteConfig=config.remoteUcrms[targetUcrmId]
        const sendUrl = `${remoteConfig.baseUrl}/messaging/send`;
        const messageId =senderRequest.messageId;
        console.log(`sending message with id ${messageId} to remote UCRM with id '${targetUcrmId}' at sendUrl ${sendUrl}'....`);
        try {
          let authHeader = `bearer ${getRemoteUcrmToken(targetUcrmId)}`;
          const response = await fetch(sendUrl, {
            "headers": {
              "Content-Type": "application/json",
              "Authorization": authHeader,
            },
            body: JSON.stringify(senderRequest),
            "method": "POST"
          })
          if (response.status === 200) {
            let respJSON = await response.json();
            console.log(`success response from remote ucrm ${targetUcrmId} for messageId ${messageId}: ${JSON.stringify(respJSON, null, 2)}`);
            sentMessageIds.push(messageId);
          } else {
            let respJSON = await response.json();
            console.error(`received HTTP error ${response.status}, aborting... Response:\n ${JSON.stringify(respJSON, null, 2)}`)
          }
        } catch (err) {
          console.error(`remote ucrm '${targetUcrmId}' is not responding, aborting...`);
        }
      }
    }
    let i = unsentOutgoingMessages.length;
    while (i--) {
      const message = unsentOutgoingMessages[i];
      if (sentMessageIds.indexOf(message.messageId)>-1) {
        console.log(`removing message with id '${message.messageId}' from outgoing message queue...`);
        unsentOutgoingMessages.splice(i, 1);
      }
    }
  }
}

export function receiveMessages(receiverRequest) {
  const destinations = receiverRequest.destinations;
  const maxMessageCount = receiverRequest.maxMessages || 1;
  let messagesToReturn = [];
  for (const destinationId of destinations) {
    if (pendingMessagesPerDestination[destinationId]) {
      let messagesForDestination = pendingMessagesPerDestination[destinationId].slice(0, maxMessageCount);
      for (const message of messagesForDestination) {
        //set message sequence numbers if not set already
        if (!message.sequenceId) {
          message.sequenceId = getNextSequenceIdForDestination(destinationId);
        }
        //this works because each message only has a single destination for now...
        message.destination = destinationId;
      }
      messagesToReturn = messagesToReturn.concat(messagesForDestination);
    }
  }
  return {messages: messagesToReturn, maxMessages: maxMessageCount};
}

export function confirmMessages(messageRef) {
  const destinationId = messageRef.destination;
  const sequenceId = messageRef.sequenceId;
  let pendingMessagesForDestination = pendingMessagesPerDestination[destinationId];
  if (!pendingMessagesForDestination) {
    throw new UcrmError(400, `No messages to commit for destination '${destinationId}'.`);
  }
  let confirmedMessageCount = 0;
  let i = pendingMessagesForDestination.length;
  while (i--) {
    const message = pendingMessagesForDestination[i];
    if (message.sequenceId && message.sequenceId <= sequenceId) {
      confirmedMessageCount++;
      pendingMessagesForDestination.splice(i, 1);
      //if the message is NOT a transport layer message AND ack is not NONE send a success status message back to the sender
      if (message.payload.appId!=TRANSPORT_LAYER_APPID && message.ack!=="NONE"){
        let originalSource = message.source;
        console.log(`sending delivery success message for messageId ${message.messageId} back to message source ${originalSource}...`);
        let originalDestination = message.destinations[0];
        const successMessage={
          "refMessageId": message.messageId,
          "destination": originalDestination,
          "statusCode": 200
        }
        const successEnvelope=createMessageDeliveryStatusEnvelope(originalDestination,originalSource,successMessage);
        handleOutgoingMessage(successEnvelope, true);
      }
    }
  }
  if (confirmedMessageCount === 0) {
    throw new UcrmError(400, `No messages to commit for destination '${destinationId}' as no message has sequenceId <= ${sequenceId}`);
  }

}

function getPendingMessagesForDestination(destinationId) {
  if (!pendingMessagesPerDestination[destinationId]) {
    pendingMessagesPerDestination[destinationId] = [];
  }
  return pendingMessagesPerDestination[destinationId];
}

function getNextSequenceIdForDestination(destinationId) {
  if (typeof messageSeqNumbersPerDestination[destinationId] === "undefined") {
    messageSeqNumbersPerDestination[destinationId] = 0;
  }
  messageSeqNumbersPerDestination[destinationId]++;
  return messageSeqNumbersPerDestination[destinationId];
}

function checkForTimeouts(){
  console.log("Checking for Message timeouts...");
  const now=new Date().getTime();
  for (const [messageId,trackingData] of Object.entries(trackedOutgoingMessagesPerMessageId)){
    if (now>trackingData.timeoutAt){
      console.log(`timeout detected for messageId ${messageId}`);
      const timeoutMessage={
        "refMessageId": messageId,
        "destination": trackingData.destination,
        "statusCode": 504,
        "statusMessage": `Message was not delivered within ${trackingData.timeoutSeconds} seconds.`
      }
      const timeoutEnvelope=createMessageDeliveryStatusEnvelope(trackingData.destination,trackingData.source,timeoutMessage)

      getPendingMessagesForDestination(trackingData.source).push(timeoutEnvelope);
      delete trackedOutgoingMessagesPerMessageId[messageId];
    }
  }
}

function createMessageDeliveryStatusEnvelope(sourceId,destinationId,message){
  return {
    "messageId":uuidv4(),
    "sentDate": new Date().toISOString(),
    //FIXME timeout should be optional???
    "timeout" : 10,
    "ack": "NONE",
    //TODO we should manage OIDS for UCRMS too and use the UCRM here
    "source": sourceId,
    "destinations": [
      destinationId
    ],
    "payload": {
      "appId": "transport_layer_messages",
      "appVersion": "0.1",
      "schemaId": "message_delivery_status",
      "contentType": "application/json",
      "data": JSON.stringify(message)
    }
  };
}