import {getCommParticipant,getAllCommParticipants} from "../../services/commParticipantRegistry.js"

export function getListCommParticipant (req, res)
{
  res.status(200).json(
    getAllCommParticipants("client")
  );
}

export function getReadCommParticipant (req, res) {
  res.status(200).json(
    getCommParticipant(req.params.id,404)
  );
}