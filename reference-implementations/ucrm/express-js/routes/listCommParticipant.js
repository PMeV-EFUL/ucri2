export function get (req, res)
{
  res.json(
    {
      commParticipants: [
        {
          "id": "1.2.3.1.276.5.1.58.28.2.1",
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
          "status": "off",
          "techSupport": {
            "phone": "001-555-1234",
            "e-mail": "abc@lst-essen.de"
          }
        }
      ]
    }
  );
}