let fetchStepDefaults={}

const FALLBACK_DEFAULT_NAME = "default";

export function setFetchStepDefaults(stepDefaults,defaultId){
  if (!defaultId){
    defaultId= FALLBACK_DEFAULT_NAME;
  }
  fetchStepDefaults[defaultId] = stepDefaults;
}

export function generateStepInfoGetFetch(stepBase, defaultId){
  Object.assign(stepBase,{
    endpoint:"info",
    method:"GET",
  });
  return generateStepFetch(stepBase,defaultId);
}

export function generateStepMessagingSendPostFetch(stepBase, defaultId){
  Object.assign(stepBase,{
    endpoint:"messaging/send",
    method:"POST",
  });
  return generateStepFetch(stepBase,defaultId);
}

export function generateStepMessagingReceivePostFetch(stepBase, defaultId){
  Object.assign(stepBase,{
    endpoint:"messaging/receive",
    method:"POST",
  });
  return generateStepFetch(stepBase,defaultId);
}

export function generateStepMessagingCommitPostFetch(stepBase, defaultId){
  Object.assign(stepBase,{
    endpoint:"messaging/commit",
    method:"POST",
  });
  return generateStepFetch(stepBase,defaultId);
}

export function generateStepFetch(stepBase,defaultId){
  let step={
    type:"fetch",
    expect:{}
  };
  Object.assign(step, fetchStepDefaults[defaultId || FALLBACK_DEFAULT_NAME]);
  Object.assign(step, stepBase);
  return step;
}
  // const step={
  //   type:"fetch",
  //   desc:"get info",
  //   ucrmId:"standalone",
  //   username:"userA1",
  //   endpoint:"info",
  //   method:"GET",
  //   expect:{
  //     http:200,
  //     responseChecker:checkInfoResponse
  //   }
// }