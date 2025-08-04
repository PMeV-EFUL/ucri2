export const config = {
  //the port to use
  port: 3002,
  //shall the apps and transport layer specs be copied from the /api and /apps folders on startup? Note that if you switch this to off, you need to provide the spec files yourself and
  //must update the ucrm.yaml according to main.js:processSpec() by replacing two things.
  copySpec:true,
  //the auth settings. be aware that directly storing secrets in configuration files ist NOT a desirable behaviour for production use.
  //instead, you should store sensitive information in .env-Files and ignore them in your .gitignore !
  auth: {
    //the secret to use for JWT signing
    jwtSecret: "test1234",
    //the user accounts
    accounts: {
      //the key MUST match the username!
      userA1: {
        username: "userA1",
        password: "test",
        //the OIDs this user is allowed to access
        oids:["1.2.3.4.5.6"],
        //the role of this user (client or urcm, latter for remote UCRMs)
        role: "client"
      },
      userA2: {
        username: "userA2",
        password: "test",
        oids:["1.2.3.4.5.8"],
        role: "client"
      },
      //this is the user for the remote CRM b
      crmB: {
        username: "crmB",
        password: "test",
        role: "ucrm"
      }
    }
  },
  //if you want standalone mode, just leave this empty!
  //if remote ucrms are defined here, we will enter a p2p participant discovery phase on startup where we fetch all commParticipants of remote ucrms.
  remoteUcrms: {
    //remote ucrm with id "b"
    b: {
      //the baseURL
      baseUrl: "http://localhost:3003/ucrm/v0",
      //these need to be defined as user accounts on the remote UCRM!
      username: "crmA",
      password: "test",
    }
  },
  //the LOCAL commParticipants. Make sure that each user has at least one of the OIDs mentioned here defined in their oids: key
  //also, ALL commParticipants MUST support transport_layer_messages:0.1, this will be checked during startup!
  //note that payload signature checking is NOT implemented at this time!
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