let discoveryFinished=false;

export function notifyDiscoveryFinished(){
  discoveryFinished=true;
}

export function getInfo(req, res) {
  res.json({apiVersion: "2.0.0",ucrmProvider: "reference",ucrmProductName:"express-js-poc (client Interface)",ucrmVersion:"1.0",status:discoveryFinished ? 0 : 1})
}