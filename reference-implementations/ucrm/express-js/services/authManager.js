import {UcrmError} from "../util/ucrmError.js"
import {ucrmErrors} from "../util/ucrmErrorCodes.js"
import {base64Decode,base64Encode,sleep} from "../util/util.js"
import {Buffer} from "buffer";
import jwt from "jsonwebtoken";

let users;
let jwtSecret;
let remoteUcrms;
let remoteUcrmTokens={};

export function setConfiguration(conf){
  users = conf.auth.accounts;
  jwtSecret = conf.auth.jwtSecret;
  remoteUcrms = conf.remoteUcrms;
}

export function checkBasicCredentials(req){
  //extract username/password from Authorization header...
  let authHeader = req.headers['authorization'];
  if (authHeader && authHeader.length>6){
    //strip the "Basic " heading
    authHeader = authHeader.substring(6);
  }
  let [username,password] = ["",""]
  try{
    [username,password]=base64Decode(authHeader).split(":");
  }catch (err){
    throw new UcrmError(401,`Invalid Authorization header`,ucrmErrors.REQUEST_UNAUTHORIZED);
  }

  if (!username || !users[username] || users[username].password!==password) {
    throw new UcrmError(401,`User/password combination for username '${username}' is unknown.`,ucrmErrors.REQUEST_UNAUTHORIZED);
  }

  //store username in req.auth
  if (!req.auth){
    req.auth={}
  }
  req.auth.username=username;
  return true;
}

export function getToken(username){
  return jwt.sign({
    username,
    role:users[username].role
  }, jwtSecret,{expiresIn:'3600s'});
}

export function checkJWTCredentials(req){
  //extract token from Authorization header...
  let token = req.headers['authorization'];
  if (token && token.length>7){
    //strip the "Bearer " heading
    token = token.substring(7);
  }

  const payload = jwt.verify(token, jwtSecret ,{maxAge:"3600s"});
  req.claims = payload;
  if (!req.claims || !req.claims.role){
    //TODO should we use a general error number here?
    throw new UcrmError(400,`provided JWT does not contain 'role' claim.`,ucrmErrors.REQUEST_INVALID_PER_TRANSPORT_SPEC);
  }
  return true;
}

//FIXME currently, token expiration is NOT handled!

export function getRemoteUcrmToken(ucrmId){
  return remoteUcrmTokens[ucrmId];
}

export async function authenticateRemoteUcrm(ucrmId){
  let retriesRemaining=15;
  const remoteConfig=remoteUcrms[ucrmId];
  const authUrl = `${remoteConfig.baseUrl}/token`;
  const authInfo = base64Encode(`${remoteConfig.username}:${remoteConfig.password}`);
  console.log(`Authenticating username '${remoteConfig.username}' on remote UCRM with id '${ucrmId}' at authUrl ${authUrl}'`);

  while (retriesRemaining>0){
    retriesRemaining--;
    try{
      //request token
      const response = await fetch(authUrl, {
        "headers": {
          "Content-Type": "application/json",
          "Authorization": `basic ${authInfo}`,
        },
        "method": "GET"
      })
      if (response.status===401){
        console.error(`unauthorized response from remote ucrm ${ucrmId}`);
        return false;
      }else if (response.status===200){
        let respJSON = await response.json();
        remoteUcrmTokens[ucrmId] = respJSON.token;
        console.log(`received token ${respJSON.token}`)
        return true;
      }
    }catch (err) {
      console.warn("remote ucrm is not ready yet, waiting before retrying...");
      await sleep(2500);
    }
  }
  console.error("authentication failed after several retries, aborting...");
  return false;


}