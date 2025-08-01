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


export function genStepMessagingSend(stepBase, defaultId){
  Object.assign(stepBase,{
    endpoint:"messaging/send",
    method:"POST",
  });
  return genStepGenericFetch(stepBase,defaultId);
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
