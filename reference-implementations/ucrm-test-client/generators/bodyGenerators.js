import deepMerge from '@75lb/deep-merge';

export function genBodyReceiveRequest(destination, maxMessages=5,maxDelay=0){
  return {
    "destinations": [
      destination
    ],
    maxMessages,
    maxDelay
  }
}

export function genBodyCommitRequest(destination, sequenceId){
  return {
    destination,
    sequenceId
  }
}

export function genBodySendRequest(source, destination, bodyOverride){
  let body = {
    "description": "Einsatzübergabe am 13.11.2023 um 20:20",
    "timeout": 20,
    "ack": "ALL",
    "source": source,
    "destinations": [
      destination
    ],
    "payload": {
      "appId": "incident_transfer",
      "appVersion": "1.0",
      "schemaId": "incident",
      "contentType": "application/json",
      "data": "{\"sharedIncidentId\":\"550e8400-e29b-41d4-a716-446655440000\",\"internalId\":\"f123456\",\"classifications\":[\"A1\",\"F2\"],\"issue\":\"Notfall\",\"flashingLights\":true,\"additionalInformation\":\"Zusatzinformationen\",\"sentByDispatcherAt\":\"2024-01-01T10:05:08Z\",\"startTimestamp\":\"2024-01-01T09:55:15Z\",\"missionLocation\":{\"coordinate\":{\"lat\":65.453323,\"lon\":14.542343},\"address\":{\"street\":\"Musterstrasse\",\"houseNumber\":\"15b\",\"postalCode\":\"12345\",\"city\":\"Musterhausen\",\"cityDistrict\":\"Musterberg\",\"state\":\"Brandenburg\",\"country\":\"DE\"},\"object\":{\"name\":\"Abteilung IV, Haus 3\",\"additionalInformation\":\"Campus West\"},\"superiorObject\":{\"name\":\"Krankenhaus Musterstift\",\"additionalInformation\":\"Weitere Informationen\"},\"floor\":\"3. OG\",\"room\":\"412\",\"additionalInformation\":\"Weitere Informationen\"},\"informers\":[{\"name\":\"Musterfrau\",\"surname\":\"Heike\",\"phone\":\"+49 30 234567\",\"email\":\"heike.musterfrau@example.com\"}]}"
    }
  };
  if (bodyOverride){
    body=deepMerge(body,bodyOverride);
  }
  return body;
}