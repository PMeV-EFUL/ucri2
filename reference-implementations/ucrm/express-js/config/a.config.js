export const config = {
  port: 3002,
  auth: {
    //be aware that directly storing secrets in configuration files ist NOT a desirable behaviour for production use.
    //instead, you should store sensitive information in .env-Files and ignore them in your .gitignore !
    jwtSecret: "test1234",
    accounts: {
      userA1: {
        username: "userA1",
        password: "test",
        role: "client"
      },
      userA2: {
        username: "userA2",
        password: "test",
        role: "client"
      },
      crmB: {
        username: "crmB",
        password: "test",
        role: "ucrm"
      }
    }
  },
  remoteUcrms: {
    b: {
      baseUrl: "http://localhost:3003/ucrm/v0",
      username: "crmA",
      password: "test",
    }
  },
  commParticipants: {
    "1.2.3.4.5.6": {
      "id": "1.2.3.4.5.6",
      "systemName": "ELS Essen 1",
      "operatorName": "Einsatzleitstelle Essen 1",
      "operatorShortName": "ELS A1",
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
      "status": "on",
      "techSupport": {
        "phone": "001-555-1234",
        "e-mail": "abc@lst-essen.de"
      }
    },
    "1.2.3.4.5.8": {
      "id": "1.2.3.4.5.8",
      "systemName": "ELS Essen 2",
      "operatorName": "Einsatzleitstelle Essen 2",
      "operatorShortName": "ELS A2",
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
      "status": "on",
      "techSupport": {
        "phone": "001-555-1234",
        "e-mail": "abc@lst-essen.de"
      }
    }
  }
}