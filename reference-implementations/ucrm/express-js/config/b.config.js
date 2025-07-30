export const config={
  port:3003,
  auth:{
    //be aware that directly storing secrets in configuration files ist NOT a desirable behaviour for production use.
    //instead, you should store sensitive information in .env-Files and ignore them in your .gitignore !
    jwtSecret:"test1234",
    accounts: {
      userA: {
        username: "userB",
        password: "test",
        oids:["1.2.3.4.5.7"],
        role: "client"
      },
      crmA: {
        username: "crmA",
        password: "test",
        role: "ucrm"
      }
    }
  },
  remoteUcrms: {
    a:{
      baseUrl:"http://localhost:3002/ucrm/v0",
      username:"crmB",
      password:"test",
    }
  },
  commParticipants:{
    "1.2.3.4.5.7": {
      "id": "1.2.3.4.5.7",
      "systemName": "ELS Trinken",
      "operatorName": "Einsatzleitstelle Trinken",
      "operatorShortName": "ELS B",
      "supportedApps": [
        {
          "appId": "incident_transfer",
          "appVersion": "0.1"
        },
        {
          "appId": "transport_layer_messages",
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
  }
}