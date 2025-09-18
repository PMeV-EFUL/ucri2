import {sendMessage,receiveMessages,confirmMessages} from "../../services/messageBus.js"

export function postReceiveMessages (req, res) {
  let receiverResponse = receiveMessages(req.body,req.claims.usr);
  if (receiverResponse.messages.length === 0){
    res.status(204).send();
  }else{
    res.status(200).json(receiverResponse);
  }
}

export async function postSendMessage (req, res) {
  res.status(200).json(await sendMessage(req.body,req.claims.usr,"client"));
}

export function postCommitMessage (req, res) {
  confirmMessages(req.body,req.claims.usr);
  res.status(204).send();
}