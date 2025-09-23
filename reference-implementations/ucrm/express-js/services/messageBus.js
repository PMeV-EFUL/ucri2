import {v4 as uuidv4} from "uuid";


import {UcrmError} from "../util/ucrmError.js"
import {ucrmErrors} from "../../../shared-js/ucrmErrorCodes.js"
import {verifyEnvelope,getEnvelopeSignature} from "../../../shared-js/crypto.js"
import {getCommParticipant, getUcrmIdFromParticipantId} from "./commParticipantRegistry.js"
import {checkIfClientMayUseOID, getRemoteUcrmToken} from "./authManager.js";

export function setAppSchemata(appSchemataToUse) {
  appSchemata = appSchemataToUse;
}

export function setConfiguration(conf){
  config=conf;
}

export function notifyDiscoveryFinished(){
  discoveryFinished=true;
}

const TRANSPORT_LAYER_APPID="transport_layer_messages";
const STATUS_MESSAGE_SCHEMAID="message_delivery_status";
const TIMEOUT_TRACKING_INVERVAL_MS=1000;


let appSchemata;
let config;
let discoveryFinished = false;
const unsentOutgoingMessages = []
const pendingMessagesPerDestination = {}
const messageSeqNumbersPerDestination = {}
const trackedOutgoingMessagesPerMessageId = {};

export function start(){
  console.log("starting messageBus...");
  console.log("Starting message timeout tracking...");
  setInterval(checkForTimeouts,TIMEOUT_TRACKING_INVERVAL_MS);
}

export async function sendMessage(senderRequest, username,type) {
  //first check if discovery is finished for send requests
  if (!discoveryFinished){
    throw new UcrmError(500, `Remote UCRM participant discovery is in process, please try again later!`, ucrmErrors.REQUEST_TRY_LATER_UCRM_IS_IN_DISCOVERY_MODE);
  }
  //the client access checks should only be performed on this level as the handleXXX() methods will be called from within the messageBus too!
  //also, they should only be performed for type==="client"
  if (type==="client"){
    checkIfClientMayUseOID(username,senderRequest.source,"source");
  }
  switch (type) {
    case "p2p":
      return handleIncomingP2PMessage(senderRequest);
    case "client":
      return handleOutgoingMessage(senderRequest,false);
    default:
      throw new UcrmError(400, `Unknown type '${type}'`, ucrmErrors.REQUEST_INTERNAL_ERROR);
  }
}

async function handleIncomingP2PMessage(senderRequest) {
  console.log("incoming message...");
  //FIXME this logic is just for testing and should be configurable instead of being hardcoded!!!!
  if (senderRequest.description && senderRequest.description.startsWith("X-GETERROR")) {
    throw new UcrmError(400, `Envelope Description stated X-GETERROR so an error is returned for testing purposes!`, ucrmErrors.REQUEST_INVALID_PER_P2P_SPEC);
  }

  await validateSenderRequest(senderRequest);

  const destinationId = senderRequest.destinations[0];
  //checkAndHandlePotentialStatusMessage will indicate with its return value if this message should be suppressed (returns false in this case)
  if (checkAndHandlePotentialStatusMessage(senderRequest)) {
    getPendingMessagesForDestination(destinationId).push(senderRequest);
  }
  return senderRequest;
}

async function handleOutgoingMessage(senderRequest, allowTransportLayerMessages) {
  console.log("outgoing message...");
  if (!senderRequest.messageId) {
    senderRequest.messageId = uuidv4();
  }
  let sentDate = new Date();
  senderRequest.sentDate = sentDate.toISOString();

  const appId = senderRequest.payload.appId;
  const isTransportLayerApp = TRANSPORT_LAYER_APPID === appId

  if (!allowTransportLayerMessages && isTransportLayerApp) {
    //clients may not send forbidden app messages
    throw new UcrmError(400, `AppId '${appId}' may not be used by clients.`, ucrmErrors.REQUEST_PAYLOAD_FORBIDDEN_APPID);
  }

  await validateSenderRequest(senderRequest);

  unsentOutgoingMessages.push(senderRequest);

  //if the message is not a transport layer message and ack is not NONE, we add the message to the (timeout) tracking
  let ack = senderRequest.ack;
  if (!isTransportLayerApp && ack && senderRequest.ack !== "NONE" && senderRequest.timeout) {
    trackedOutgoingMessagesPerMessageId[senderRequest.messageId] = {
      source: senderRequest.source,
      destination: senderRequest.destinations[0],
      ack: ack,
      timeoutAt: sentDate.getTime() + (senderRequest.timeout * 1000),
      timeoutSeconds: senderRequest.timeout
    }
  }
  setImmediate(processUnsentMessages);
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

async function validateSignature(senderRequest) {
  if (!config.checkSignatures){
    return;
  }
  if (!senderRequest.signature) {
    //FIXME signatures are currently NOT required as per spec, this is highly problematic as an attacker could just remove the signature and be done with it!
    console.warn("Signature verification: senderRequest.signature is missing!");
    return;
  }
  const signature = senderRequest.signature;
  const sourceId = senderRequest.source;
  //fetch source private key
  const sourceData=getCommParticipant(sourceId,400);
  if (!sourceData.key){
    throw new UcrmError(400, `Signature verification failed - no public key found for source OID '${sourceId}'`, ucrmErrors.REQUEST_WRONG_SIGNATURE);
  }
  await verifyEnvelope(senderRequest,signature,sourceData.key);
}

async function validateSenderRequest(senderRequest) {
  const destinationId = senderRequest.destinations[0];
  const appId = senderRequest.payload.appId;
  const appVersion = senderRequest.payload.appVersion;
  const schemaId = senderRequest.payload.schemaId;

  //validate signature
  await validateSignature(senderRequest);

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

  //check if target OID is known and get supported Apps
  const commParticipant = getCommParticipant(destinationId, 400);
  if (commParticipant.supportedApps.filter((app) => app.appId === appId && app.appVersion === appVersion).length === 0) {
    throw new UcrmError(400, `Unsupported version '${appVersion}' for UCRI2 App '${appId}' for destination '${destinationId}'`, ucrmErrors.REQUEST_PAYLOAD_UNSUPPORTED_APPID_OR_APPVERSION);
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

async function notifyMessageSendingErrorToSender(senderRequest,errorMessageText, responseJSON) {
  let messageId = senderRequest.messageId;
  if (senderRequest.ack==="NONE"){
    console.log(`as message.ack='NONE' indicates no status updates are desired at all, no failure status message will be sent for message id ${messageId}`);
    return;
  }
  let originalSource = senderRequest.source;
  console.log(`sending delivery failure message for messageId ${messageId} back to message source ${originalSource}...`);
  let originalDestination = senderRequest.destinations[0];
  const errorMessage={
    "refMessageId": messageId,
    "destination": originalDestination,
    "statusCode": 502,
    "statusMessage": errorMessageText
  }
  if (responseJSON && Number.isInteger(responseJSON.code) && typeof responseJSON.reason === "string") {
    //the response object seems to be a valid, but still there could be additional errorneous fields in there, so we create a new object
    const cause={
      code: responseJSON.code,
      reason: responseJSON.reason,
    }
    if (typeof responseJSON.message === "string"){
      cause.message = responseJSON.message;
    }
    errorMessage.cause = cause;
  }
  const errorEnvelope=await createMessageDeliveryStatusEnvelope(originalDestination,originalSource,errorMessage);
  getPendingMessagesForDestination(originalSource).push(errorEnvelope);
  delete trackedOutgoingMessagesPerMessageId[messageId];
}

let messageSendingInProgress=false;

async function processUnsentMessages() {
  if (messageSendingInProgress) {
    console.log("message sending in progress, delaying next send...");
    setTimeout(processUnsentMessages,500);
    return;
  }
  messageSendingInProgress=true;
  if (unsentOutgoingMessages.length > 0) {
    console.log(`sending ${unsentOutgoingMessages.length} outgoing message(s)...`);
    const sentMessageIds=[];
    for (const senderRequest of unsentOutgoingMessages) {
      const destinationId = senderRequest.destinations[0];
      const messageId = senderRequest.messageId;
      const targetUcrmId = getUcrmIdFromParticipantId(destinationId);
      console.log(`about to send message with id '${senderRequest.messageId}' directed at participant '${destinationId}' connected via UCRM '${targetUcrmId}'`);
      if (targetUcrmId === "self") {
        console.log("message is local, no sending to remote ucrm necessary, looping back to handleIncomingMessage()...");
        sentMessageIds.push(messageId);
        handleIncomingP2PMessage(senderRequest);
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
            let respJSON,respText;
            try{
              respJSON = await response.json();
              respText = `Response received as valid JSON:\n${JSON.stringify(respJSON, null, 2)}`;
            }catch (err){
              respText = `Response received as invalid JSON:\n${await response.text()}`;
            }
            const errorMessage=`Remote UCRM at ${sendUrl} returned an HTTP Error ${response.status}.`;
            const fullErrorMessage = `${errorMessage}: ${respText}`;
            console.error(fullErrorMessage);
            //this implementation will directly give up sending after one error while production implementations should retry sending instead...
            sentMessageIds.push(messageId);
            await notifyMessageSendingErrorToSender(senderRequest,fullErrorMessage,respJSON);
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
  messageSendingInProgress=false;
}

export function receiveMessages(receiverRequest,username) {
  for (const destination of receiverRequest.destinations) {
    if (getUcrmIdFromParticipantId(destination)!=="self"){
      throw new UcrmError(400, `destination OID '${destination}' is not registered here.`,ucrmErrors.REQUEST_UNKNOWN_DESTINATION_ID);
    }
    checkIfClientMayUseOID(username,destination,"destinations");
  }
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

export async function confirmMessages(messageRef,username) {
  const destinationId = messageRef.destination;
  checkIfClientMayUseOID(username,destinationId,"destination");

  const sequenceId = messageRef.sequenceId;
  let pendingMessagesForDestination = pendingMessagesPerDestination[destinationId];
  if (!pendingMessagesForDestination) {
    throw new UcrmError(400, `No messages to commit for destination '${destinationId}'.`,ucrmErrors.REQUEST_NO_MESSAGES_TO_COMMIT);
  }
  let confirmedMessageCount = 0;
  let newPendingMessagesForDestination = [];
  // let i = pendingMessagesForDestination.length;
  // while (i--) {
  //   const message = pendingMessagesForDestination[i];
  for (const message of pendingMessagesForDestination) {
    if (message.sequenceId && message.sequenceId <= sequenceId) {
      confirmedMessageCount++;
      // pendingMessagesForDestination.splice(i, 1);
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
        const successEnvelope=await createMessageDeliveryStatusEnvelope(originalDestination,originalSource,successMessage);
        await handleOutgoingMessage(successEnvelope, true);
      }
    }else{
      newPendingMessagesForDestination.push(message);
    }
  }
  pendingMessagesPerDestination[destinationId]=newPendingMessagesForDestination;
  if (confirmedMessageCount === 0) {
    throw new UcrmError(400, `No messages to commit for destination '${destinationId}' as no message has sequenceId <= ${sequenceId}`,ucrmErrors.REQUEST_NO_MESSAGES_TO_COMMIT);
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

async function checkForTimeouts(){
  //as we are executed quite often we do not want to spam the log
  // console.log("Checking for Message timeouts...");
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
      const timeoutEnvelope=await createMessageDeliveryStatusEnvelope(trackingData.destination,trackingData.source,timeoutMessage)

      getPendingMessagesForDestination(trackingData.source).push(timeoutEnvelope);
      delete trackedOutgoingMessagesPerMessageId[messageId];
    }
  }
}

async function createMessageDeliveryStatusEnvelope(sourceId,destinationId,message){
  const envelope = {
    "messageId":uuidv4(),
    "sentDate": new Date().toISOString(),
    //FIXME timeout should be optional???
    "timeout" : 10,
    "ack": "NONE",
    "source": config.ownOid,
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
  //sign message with private signing key
  envelope.signature = await getEnvelopeSignature(envelope,config.privateSigningKey);
  console.log(`Signature verification - generated Signature is ${envelope.signature}`);
  return envelope;
}