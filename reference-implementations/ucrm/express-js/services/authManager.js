import {UcrmError} from "../util/ucrmError.js"
import {ucrmErrors} from "../../../shared-js/ucrmErrorCodes.js"
import {base64Decode,base64Encode,sleep} from "../../../shared-js/util.js"
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

export function checkBasicCredentials(req, type){
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

  if (users[username].type !== type) {
    throw new UcrmError(401,`User type mismatch for '${username}', expected ${type} but user has type ${users[username].type}.`,ucrmErrors.REQUEST_UNAUTHORIZED);
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
    usr:username
  }, jwtSecret,{expiresIn:'3600s'});
}

export function checkJWTCredentials(req, type){
  //extract token from Authorization header...
  let token = req.headers['authorization'];
  if (token && token.length>7){
    //strip the "Bearer " heading
    token = token.substring(7);
  }

  const payload = jwt.verify(token, jwtSecret ,{maxAge:"3600s"});
  req.claims = payload;
  if (!req.claims || !req.claims.usr){
    throw new UcrmError(401,`provided JWT is valid but does not contain 'usr' claim.`,ucrmErrors.REQUEST_UNAUTHORIZED);
  }
  const username=req.claims.usr;
  if (!username || !users[username]) {
    throw new UcrmError(401,`user '${username}' is unknown.`,ucrmErrors.REQUEST_UNAUTHORIZED);
  }

  if (users[username].type !== type) {
    throw new UcrmError(401,`User type mismatch for '${username}', expected ${type} but user has type ${users[username].type}.`,ucrmErrors.REQUEST_UNAUTHORIZED);
  }

  return true;
}

//FIXME currently, token expiration is NOT handled!

export function getRemoteUcrmToken(ucrmId){
  return remoteUcrmTokens[ucrmId];
}

export function checkIfClientMayUseOID(username,oid,propertyName){
  let userData = users[username];
  if (!userData){
    throw new UcrmError(401,`username '${username}' is unknown.`,ucrmErrors.REQUEST_UNAUTHORIZED);
  }
  if (!userData.oids || !userData.oids.includes(oid)){
    throw new UcrmError(400,`username '${username}' may not use OID '${oid}' in ${propertyName}.`,ucrmErrors.REQUEST_OID_FORBIDDEN);
  }
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