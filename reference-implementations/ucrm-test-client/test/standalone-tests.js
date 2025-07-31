import {checkInfoResponse} from "../reponseCheckers/responseCheckers.js";

const ANY_STRING="X-TYPE-STRING";

export const steps=[
  {
    type:"startUcrm",
    ucrmId:"standalone",
    startDir:"../ucrm/express-js",
    startCmd:"node",
    startCmdParms:["main.js","./config/standalone.config.js"],
    baseUrl:"http://localhost:3002/ucrm/v0",
    readyLogString:"Listening on port",
    logStdOut:false,
    logStdErr:false
  },
  {
    type:"authorize",
    desc:"authorize with wrong password",
    ucrmId:"standalone",
    username:"userA1",
    password:"wrongPassword",
    expect:{
      http:401
    }
  },
  {
    type:"authorize",
    desc:"authorize with unknown user",
    ucrmId:"standalone",
    username:"unknownUser",
    password:"test",
    expect:{
      http:401
    }
  },
  {
    type:"authorize",
    desc:"authorize with correct credentials",
    ucrmId:"standalone",
    username:"userA1",
    password:"test",
    expect:{
      http:200,
      role:"client"
    }
  },
  {
    type:"fetch",
    desc:"get info",
    ucrmId:"standalone",
    username:"userA1",
    endpoint:"info",
    method:"GET",
    expect:{
      http:200,
      responseChecker:checkInfoResponse
    }
  }
  // { type:"sleep",
  //   duration: 10
  // },
  // { type:"stopUcrm",
  //   ucrmId: "standalone"
  // }
];
