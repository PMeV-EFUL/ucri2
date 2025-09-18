let discoveryFinished=false;

export function notifyDiscoveryFinished(){
  discoveryFinished=true;
}

export function getInfo(req, res) {
  res.json({apiVersion: "0.1",crmProvider: "reference",status:discoveryFinished ? 0 : 1})
}