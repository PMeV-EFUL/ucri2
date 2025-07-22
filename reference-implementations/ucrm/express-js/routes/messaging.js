import {sendMessage,receiveMessages,confirmMessages} from "../services/messageBus.js"

export function postReceiveMessages (req, res) {
  let receiverResponse = receiveMessages(req.body);
  if (receiverResponse.messages.length === 0){
    res.status(204).send();
  }else{
    res.status(200).json(receiverResponse);
  }
}

export async function postSendMessage (req, res) {
  res.status(200).json(await sendMessage(req.body));
}

export function postCommitMessage (req, res) {
  confirmMessages(req.body);
  res.status(204).send();
}