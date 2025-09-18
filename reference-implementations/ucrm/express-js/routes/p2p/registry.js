import {getCommParticipant,getAllCommParticipants} from "../../services/commParticipantRegistry.js"

export function getListCommParticipant (req, res)
{
  res.status(200).json(
    getAllCommParticipants("p2p")
  );
}
