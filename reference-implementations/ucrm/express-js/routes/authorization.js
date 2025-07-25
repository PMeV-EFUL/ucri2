import {getToken} from "../services/authManager.js"

export function getAuthorize(req, res) {
  res.status(200).json({
    token: getToken(req.auth.username)
  });
}