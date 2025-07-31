import {sendMessage,receiveMessages,confirmMessages} from "../services/messageBus.js"
import {checkRole} from "../services/authManager.js";

export function postReceiveMessages (req, res) {
  const role=checkRole(req,["client"]);
  let receiverResponse = receiveMessages(req.body,role,req.claims.username);
  if (receiverResponse.messages.length === 0){
    res.status(204).send();
  }else{
    res.status(200).json(receiverResponse);
  }
}

export async function postSendMessage (req, res) {
  const role=checkRole(req,["client","ucrm"]);
  res.status(200).json(await sendMessage(req.body,role,req.claims.username));
}

export function postCommitMessage (req, res) {
  const role=checkRole(req,["client"]);
  confirmMessages(req.body,role,req.claims.username);
  res.status(204).send();
}