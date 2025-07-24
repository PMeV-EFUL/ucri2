export const config={
  port:3002,
  commParticipants:{
    "1.2.3.4.5.6": {
      "id": "1.2.3.4.5.6",
      "systemName": "ELS Essen",
      "operatorName": "Einsatzleitstelle Essen",
      "operatorShortName": "ELS E",
      "supportedApps": [
        {
          "appId": "incident",
          "appVersion": "0.1"
        },
        {
          "appId": "incident",
          "appVersion": "0.2"
        }
      ],
      "key": {
        "kty": "RSA",
        "n": "ofgWCuLjybRlzo0tZWJjNiuSfb4p4fAkd_wWJcyQoTbji9k0l8W26mPddx",
        "e": "AQAB"
      },
      "status": "on",
      "techSupport": {
        "phone": "001-555-1234",
        "e-mail": "abc@lst-essen.de"
      }
    },
    //FIXME remove later, belongs to B
    "1.2.3.4.5.7": {
      "id": "1.2.3.4.5.7",
      "systemName": "ELS Trinken",
      "operatorName": "Einsatzleitstelle Trinken",
      "operatorShortName": "ELS T",
      "supportedApps": [
        {
          "appId": "incident",
          "appVersion": "0.1"
        },
        {
          "appId": "incident_transfer",
          "appVersion": "0.1"
        }
      ],
      "key": {
        "kty": "RSA",
        "n": "ofgWCuLjybRlzo0tZWJjNiuSfb4p4fAkd_wWJcyQoTbji9k0l8W26mPddx",
        "e": "AQAB"
      },
      "status": "off",
      "techSupport": {
        "phone": "001-555-1234",
        "e-mail": "abc@lst-trinken.de"
      }
    }
  },
  remoteUcrms:{
    b:{
      url:"http://localhost:3002/ucrm/v0"
    }
  }
}