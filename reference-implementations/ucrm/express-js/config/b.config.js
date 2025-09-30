export const config={
  port:3003,
  copySpec:true,
  useKTSignatures:false,
  //Note that production UCRMS should NEVER have access to the private domain key. Instead, they would be provided signatures for their KT records from the domain owner
  domainPrivateKeys: {
    testDomain:{
      "kty": "RSA",
      "kid": "4edf32bd-418b-4917-86a7-948527180731",
      "d": "sKg6gUlbK7K9xd3LmLjPOnNpCXV4rnC0v7imiQfmMcdbvhV0keNk_m936jYEqqjix5tC6jxDFaxqE8ei_AymEWOeaeWeIS9HzfTE3CrV769ZZSqjI08DPnb7FvAapcUwrt--weh5MSpILheGIrDfaxmiVK10kKiBPsnBsLeKowJF6hSSL7-Q7pdaMNM-QiV1FThW1k1WLTN4IukRO2hU1WQmZsvlI-auaHwRCCQzNCycJVVulD8j6OBhJ5Zn2KHABWfQwZVgnaTS1siWyhN02q9gMDlFPsKE490E3ALQrII2r95wRSOmom1weP1ztJFGhawaCvVXO0YD35yvNhRs2Q",
      "n": "vy2yloQawTQOhwr-LiNmKFkO56PsA1ZDQgPSkoCmW-7cToOfmSiU14aV4ZSHfufFZSEjzqOGe3W7pUot6linskry6h2Q02u6X5kjApTipMsZodd2LpGBYdmQTEYPrJp9_6e5baPIQe0taCV0Zi18a-bPut_j_ZHR1_JOPZRuCdw03GlxHjY4R3tJaspYuQOXVkQHndthuG2hz7O31kkU2yJMIT_4cFkgj3QH0_6N8NCLtxlwy6Wkjl0oEVUtFCY36IXwpRVRtWV50ojxI6nnQCmRHtLdgnT68Chjk8G7A5KiP5MkSApt4F-fql94XJ1YU3E47zPrXOUNAKgmjo569w",
      "e": "AQAB",
      "p": "zpQk34hH02T16bgJB9OYrCPGTDcVdY6MHsAKlLXIRUQ77cyQ96grCr-mNk0GbKKZ2EeWFtgkqHVepYmeANLhHbwUS29ZYDIHZFEMv5BP19iviC_xMXGLcF4n7i8QFUsohKc-y_NrXlv93yrIy0150eXcAmHEj3s_zNZ4XmECVIs",
      "q": "7OpfpcUEB9mjZZt07bwy2Ns-ErnXvQ1v4H_aFqrKx2PDM90eLkxHdL9R3j30ZEfv29gshw_XK4CXSbhGszCNgAmrxibDyL_XVluzKsM7siZWaGuxv-rRJr7jMKYuHeV7Z4RltcsXXJAwNn0NcnB3we-MS3OwcPxTuynTMUk7xMU",
      "dp": "yN36ALT2ClJ4X5tIhKi2ImPi1IcXQairDNd1MmaT5u5TS4YHTBjkSV5TEyfQYF-3MjthcLMY6gi-UD5BOdHTfWM9ZKBQCp5624uH1tlPGbWj8MuVPpuGl2umbg6rF9lt-5bYE96Mf0L51z814aFjG7rjNBm21EFmpxnADx1K88M",
      "dq": "b6YgPznypVRuiYLSfvrzJ3li7mZAgmqjr7Pw7j-84mxkYLuy7nSqNB25kje2RdAU_JEKovfXGjw2j9pVDzsxZAaque4o1CF8dMkwTVXGezVQAVPHZ79co5rP7GxUTWiJWIZvfFXig4-7-OHEBYt1FKM0hZZWr1hqiUizq4VsslU",
      "qi": "IZh7uJ5hEN1vHTrzfncZVgI1V6HD9EwGK62DTwkjUSWsdWAhgK03FI7qxwfHvxWvc9Qz3uWNhqhs1NfX4scpys1vglm2zGuLuvL_8fnP15XMvMftshI2Oi-mr-BIXrmK2msVBac1m47OR666IAy4opPvaAuZGHLwxLzDRCEzVC8"
    }
  },
  domainPublicKeys: {
    testDomain: {
      "kty": "RSA",
      "alg": "RS256",
      "n": "vy2yloQawTQOhwr-LiNmKFkO56PsA1ZDQgPSkoCmW-7cToOfmSiU14aV4ZSHfufFZSEjzqOGe3W7pUot6linskry6h2Q02u6X5kjApTipMsZodd2LpGBYdmQTEYPrJp9_6e5baPIQe0taCV0Zi18a-bPut_j_ZHR1_JOPZRuCdw03GlxHjY4R3tJaspYuQOXVkQHndthuG2hz7O31kkU2yJMIT_4cFkgj3QH0_6N8NCLtxlwy6Wkjl0oEVUtFCY36IXwpRVRtWV50ojxI6nnQCmRHtLdgnT68Chjk8G7A5KiP5MkSApt4F-fql94XJ1YU3E47zPrXOUNAKgmjo569w",
      "e": "AQAB"
    }
  },
  auth:{
    //be aware that directly storing secrets in configuration files ist NOT a desirable behaviour for production use.
    //instead, you should store sensitive information in .env-Files and ignore them in your .gitignore !
    jwtSecret:"test1234",
    accounts: {
      userB: {
        username: "userB",
        password: "test",
        oids:["1.2.3.4.5.7"],
        type: "client"
      },
      crmA: {
        username: "crmA",
        password: "test",
        type: "p2p"
      }
    }
  },
  remoteUcrms: {
    a:{
      baseUrl:"http://localhost:3002/ucrm/p2p/v0",
      username:"crmB",
      password:"test",
      oid:"1.2.3.4.5.0"
    }
  },
  privateSigningKey:{
    "kty": "RSA",
    "alg": "RS256",
    "kid": "ce0c04df-245d-4142-93b2-6b1e2d46a9b2",
    "n": "riPtU1ZKwnCjfwxcf9w5Le6imUaPueVkqeU4JbzVN5FcFuwbhhKLYa1jRJb64-xLM9PJHTfh74-6HhL0DBgDwhXheYYNJioyvmJ3ceWMjRAHLY-mkpnxE9hwJbfRvqL1wQUYrIFX71N9ujmILfGljijPv7dqSyyPQJjgN-gBTXmIXS8_Jo8cVlaEOpOcE8FYvEmy02lHCErxFI5aogNnwaH1w82XiUuntnDNe9xf0QcKETlV8vipzUQp2OXJhEzv7o3qQIElvCcF66F1VLKxFF7yuO9NDvo5_b4WK9dtB-Zb6r-8N5LrN1Y6BvBq-HzDY6J389DzUHlChFqhV9-V2Q",
    "e": "AQAB",
    "d": "n3cK5xvIThIzxi4droCOY_95Kn8xMnxcGDBtoDEx1zbna54-_iGRPZs3oiHYEkvZ-dXg_z6jSWsGdm_IyCJdnqfG2C_nbqGJ4kntM4GPmcWprRE06l7KIvA6km-oRLiZ722pUJ8JVYHRSm1QxTHZ9zpsNBXT4o8lh3P3L3rnZnd3sOxU1bXioWdgGNJkC1ydCNuyu5d5AZ74mVfKATsQacpBfYuJaxvoCdWKkynSuPgScTRn84-8-d-MTkBXTjMC7NbnyRCZI1fk1GGKPkFGugySFdCACUzEAp43RN1prv-OM3znrScYqy3VXZT2VAptn6swIDpNtpsPzieRFD9gWQ",
    "p": "0Z0xbVmSRWQLxNeIM9SSoBOz2BXYqNSwMJk0nTpN0LZf1oekT55E7BC6bbxL9Mf_KDnIY8CBaAExanBRBBcKienI9C7gfF0p-iY_uIhcrdnjiGV_zfvNXuvqonQieBTu8NtrRwGO-p0IPyzo0qt4UGSmoX7GQAeVnz5JRUNC4Lc",
    "q": "1K0evAdQOTjWbvPafkr4UuPxfck3xSAcSEYdAg1vRIZysar2QmdxFp49oNBX9Up0St-_QkW_fVbMlc1RBGTy0Deo2Qc-SSwAMXymiBV6LDujBpn2LmuiHzqqIG4WRYJA7XuLl0jxcdWYZX7297yYeCyUjuPnnqS-LMbVg_2tje8",
    "dp": "DsrqHw5wLSd3USfou8enpVZencRE6v0_hd56ARKJRU5piwk9hkTkFkjD71SXg6nNjvgs9SUzvLRA2YMdpI0_uCXggaMBQqWMfdPPMWWmLLqwvQJ0t4OqpaU-hMJvYEwR5LuHYZZxkawdVeAEekGRlxLTU5hPw1sFqxxJLXMmuBc",
    "dq": "icWoblgygQ8v4mp4NW4tlczySPEL_thBWhSJgCXh2btbG3tL0lKecO-Lrtyozk8wLLzrcmwqk3CiUbzS6gzXO0mDSSynDdHCQkykuO1o2rS7dHBSiVnSiXaAdUe7h8XMd8ub7yIivwKGmeF47Z2wC9GdXz-GcT_5rpoUAVBZmOM",
    "qi": "ML7z92hUzkHlYAQixyFh1RTjrIuNz_rL6yLFuKPyvquCTt6LJAlU0yXhhewwj6cUFibyeoNQ_Jafir1rhSxPPj5BrxiFKTIuEkcPrlHHC04aSFboglG67TKA8K1GEBBs-SyQuuGWz9uz1YXrG9ZwGM9LDPZ08vAmXPEf3G1JIJw"
  },
  ownOid: "1.2.3.4.5.1",
  commParticipants:{
    "1.2.3.4.5.1": {
      "id": "1.2.3.4.5.1",
      "type": "ucrm",
      "domain": "testDomain",
      "systemName": "UCRM Trinken ",
      "operatorName": "UCRM Trinken (ELS Trinken",
      "operatorShortName": "UCRM B",
      "supportedApps": [
        {
          "appId": "transport_layer_messages",
          "appVersion": "0.1"
        }
      ],
      "key": {
        "kty": "RSA",
        "alg": "RS256",
        "n": "riPtU1ZKwnCjfwxcf9w5Le6imUaPueVkqeU4JbzVN5FcFuwbhhKLYa1jRJb64-xLM9PJHTfh74-6HhL0DBgDwhXheYYNJioyvmJ3ceWMjRAHLY-mkpnxE9hwJbfRvqL1wQUYrIFX71N9ujmILfGljijPv7dqSyyPQJjgN-gBTXmIXS8_Jo8cVlaEOpOcE8FYvEmy02lHCErxFI5aogNnwaH1w82XiUuntnDNe9xf0QcKETlV8vipzUQp2OXJhEzv7o3qQIElvCcF66F1VLKxFF7yuO9NDvo5_b4WK9dtB-Zb6r-8N5LrN1Y6BvBq-HzDY6J389DzUHlChFqhV9-V2Q",
        "e": "AQAB"
      },
      "status": "online",
      "techSupport": {
        "phone": "001-555-1234",
        "e-mail": "ucrm@lst-trinken.de"
      }
    },
    "1.2.3.4.5.7": {
      "id": "1.2.3.4.5.7",
      "type": "client",
      "domain": "testDomain",
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
        "alg": "RS256",
        "n": "riPtU1ZKwnCjfwxcf9w5Le6imUaPueVkqeU4JbzVN5FcFuwbhhKLYa1jRJb64-xLM9PJHTfh74-6HhL0DBgDwhXheYYNJioyvmJ3ceWMjRAHLY-mkpnxE9hwJbfRvqL1wQUYrIFX71N9ujmILfGljijPv7dqSyyPQJjgN-gBTXmIXS8_Jo8cVlaEOpOcE8FYvEmy02lHCErxFI5aogNnwaH1w82XiUuntnDNe9xf0QcKETlV8vipzUQp2OXJhEzv7o3qQIElvCcF66F1VLKxFF7yuO9NDvo5_b4WK9dtB-Zb6r-8N5LrN1Y6BvBq-HzDY6J389DzUHlChFqhV9-V2Q",
        "e": "AQAB"
      },
      "status": "online",
      "techSupport": {
        "phone": "001-555-1234",
        "e-mail": "abc@lst-trinken.de"
      }
    }
  }
}