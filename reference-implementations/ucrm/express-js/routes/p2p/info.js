let discoveryFinished=false;

export function notifyDiscoveryFinished(){
  discoveryFinished=true;
}

export function getInfo(req, res) {
  res.json({apiVersion: "0.1",ucrmProvider: "reference",ucrmProductName:"express-js-poc (P2P interface)",ucrmVersion:"1.0",status:discoveryFinished ? 0 : 1})
}