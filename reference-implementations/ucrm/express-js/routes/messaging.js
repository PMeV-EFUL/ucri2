import {sendMessage,receiveMessages,confirmMessages} from "../services/messageBus.js"
import {checkRole} from "../util/util.js"

export function postReceiveMessages (req, res) {
  checkRole(req,["client"]);
  let receiverResponse = receiveMessages(req.body);
  if (receiverResponse.messages.length === 0){
    res.status(204).send();
  }else{
    res.status(200).json(receiverResponse);
  }
}

export async function postSendMessage (req, res) {
  checkRole(req,["client","ucrm"]);
  res.status(200).json(await sendMessage(req.body));
}

export function postCommitMessage (req, res) {
  checkRole(req,["client"]);
  confirmMessages(req.body);
  res.status(204).send();
}