import {sendMessage,receiveMessages,confirmMessages} from "../../services/messageBus.js"

export async function postSendMessage (req, res) {
  res.status(200).json(await sendMessage(req.body,req.claims.usr,"p2p"));
}
