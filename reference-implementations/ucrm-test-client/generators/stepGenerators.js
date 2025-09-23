import canonicalize from "canonicalize";
import sha3 from "js-sha3";
import * as jose from 'jose';
import {getEnvelopeSignature,init as initCrypto} from "../../shared-js/crypto.js"

initCrypto(null,canonicalize,sha3,jose);

const signingKeys={}

export function setSigningKey(sourceId,privateKey){
  signingKeys[sourceId] = privateKey;
}


let fetchStepProfiles={}

const FALLBACK_PROFILE_NAME = "default";

export function setFetchStepProfile(stepDefaults, defaultId){
  if (!defaultId){
    defaultId= FALLBACK_PROFILE_NAME;
  }
  fetchStepProfiles[defaultId] = stepDefaults;
}

export function genStepInfo(stepBase, defaultId){
  Object.assign(stepBase,{
    endpoint:"info",
    method:"GET",
  });
  return genStepGenericFetch(stepBase,defaultId);
}

export function genStepRegistry(stepBase, defaultId){
  Object.assign(stepBase,{
    endpoint:"registry",
    method:"GET",
  });
  return genStepGenericFetch(stepBase,defaultId);
}


export async function genStepMessagingSend(stepBase, defaultId){
  Object.assign(stepBase,{
    endpoint:"messaging/send",
    method:"POST",
  });
  let stepData = genStepGenericFetch(stepBase,defaultId);
  //add signature if key present
  if (stepData.body && stepData.body.source){
    const source=stepData.body.source;
    if (signingKeys[source]){
      stepData.body.signature = await getEnvelopeSignature(stepData.body,signingKeys[source]);
    }
  }
  return stepData;
}

export function genStepMessagingReceive(stepBase, defaultId){
  Object.assign(stepBase,{
    endpoint:"messaging/receive",
    method:"POST",
  });
  return genStepGenericFetch(stepBase,defaultId);
}

export function genStepMessagingCommit(stepBase, defaultId){
  Object.assign(stepBase,{
    endpoint:"messaging/commit",
    method:"POST",
  });
  return genStepGenericFetch(stepBase,defaultId);
}

export function genStepGenericFetch(stepBase, defaultId){
  let step={
    type:"fetch",
    expect:{}
  };
  Object.assign(step, fetchStepProfiles[defaultId || FALLBACK_PROFILE_NAME]);
  Object.assign(step, stepBase);
  return step;
}
