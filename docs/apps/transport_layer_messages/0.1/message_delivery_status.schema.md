

# App-Nachricht message_delivery_status - Zustellungsstatus für eine andere App-Nachricht

<p>Diese Nachricht wird von einem UCRM versendet, um den Zustellungsstatus einer App-Nachricht zu kommunizieren</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/transport_layer_messages/0.1/message_delivery_status.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#refmessageid">refMessageId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#destination">destination</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#statuscode">statusCode</a></td><td>Integer</td><td>Ja</td></tr><tr><td colspan="2"><a href="#cause">cause</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#statusmessage">statusMessage</a></td><td>String</td><td>Nein</td></tr></tbody></table>


## Beispiel



```
{
    "refMessageId": "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3454",
    "destination": "1.2.3.4.5.6.7",
    "statusCode": 504,
    "statusMessage": "Meldung konnte innerhalb von 30 Sekunden nicht zugestellt werden und wurde verworfen"
}
```


## Beispiel



```
{
    "refMessageId": "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3454",
    "destination": "1.2.3.4.5.6.7",
    "statusCode": 500,
    "statusMessage": "Das empfangende UCRM hat einen Fehler gemeldet",
    "cause": {
        "code": 468,
        "reason": "HTTP error 401: invalid signature",
        "message": "invalid signature"
    }
}
```


## Beispiel



```
{
    "refMessageId": "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3454",
    "destination": "1.2.3.4.5.6.7",
    "statusCode": 200
}
```



<hr />


## refMessageId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Referenz-UUID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Systemweit eindeutige ID der referenzierten Nachricht</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uuid</td>
    </tr>
  </tbody>
</table>




## destination


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Empfänger-OID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Empfänger-OID</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^([0-9]+\.?)+$</td>
    </tr>
  </tbody>
</table>




## statusCode


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Annahme- oder Ablehnungsstatus</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Status-Code: 200 - Zustellbestätigung; 504 - Timeout; 502 - Fehler bei Zustellung an entferntes UCRM</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>200</li><li>502</li><li>504</li></ul></td>
    </tr>
  </tbody>
</table>




## cause


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Zugrundeliegender UCRI-Fehler</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zugrundeliegender vom sendenden oder entfernten UCRM gemeldeter Fehler, sollte bei statusCode 500 übermittelt werden.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>

### Eigenschaften
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#causecode">code</a></td><td>Integer</td><td>Ja</td></tr><tr><td colspan="2"><a href="#causereason">reason</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#causemessage">message</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### cause.code


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">UCRI-Fehlercode</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Anwendungsspezifische Fehler-Code</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### cause.reason


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Fehlerursache</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Fehlerursache in für Menschen verständlicher Sprache</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### cause.message


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Fehlerbeschreibung</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Detailliertere Fehlerbeschreibung eventuell mit Angabe der Korrektivmaßnahmen in für Menschen verständlicher Sprache</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>





## statusMessage


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Fehlertext</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Text mit weiteren Einzelheiten und Abhilfemaßnahmen in Bezug auf den Fehler. Dies kann einem Client-Benutzer angezeigt werden.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Max Length</th>
      <td colspan="2">100</td>
    </tr>
  </tbody>
</table>









<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/transport_layer_messages/0.1/message_delivery_status.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht message_delivery_status - Zustellungsstatus für eine andere App-Nachricht",
    "description": "Diese Nachricht wird von einem UCRM versendet, um den Zustellungsstatus einer App-Nachricht zu kommunizieren",
    "required": [
        "refMessageId",
        "destination",
        "statusCode"
    ],
    "type": "object",
    "properties": {
        "refMessageId": {
            "type": "string",
            "format": "uuid",
            "title": "Referenz-UUID",
            "description": "Systemweit eindeutige ID der referenzierten Nachricht"
        },
        "destination": {
            "type": "string",
            "pattern": "^([0-9]+\\.?)+$",
            "title": "Empfänger-OID",
            "description": "Empfänger-OID"
        },
        "statusCode": {
            "title": "Annahme- oder Ablehnungsstatus",
            "description": "Status-Code: 200 - Zustellbestätigung; 504 - Timeout; 502 - Fehler bei Zustellung an entferntes UCRM",
            "type": "integer",
            "enum": [
                200,
                502,
                504
            ]
        },
        "cause": {
            "required": [
                "code",
                "reason"
            ],
            "type": "object",
            "properties": {
                "code": {
                    "title": "UCRI-Fehlercode",
                    "type": "integer",
                    "description": "Anwendungsspezifische Fehler-Code"
                },
                "reason": {
                    "title": "Fehlerursache",
                    "type": "string",
                    "description": "Fehlerursache in für Menschen verständlicher Sprache"
                },
                "message": {
                    "title": "Fehlerbeschreibung",
                    "type": "string",
                    "description": "Detailliertere Fehlerbeschreibung eventuell mit Angabe der Korrektivmaßnahmen in für Menschen verständlicher Sprache"
                }
            },
            "title": "Zugrundeliegender UCRI-Fehler",
            "description": "Zugrundeliegender vom sendenden oder entfernten UCRM gemeldeter Fehler, sollte bei statusCode 500 übermittelt werden."
        },
        "statusMessage": {
            "title": "Fehlertext",
            "description": "Text mit weiteren Einzelheiten und Abhilfemaßnahmen in Bezug auf den Fehler. Dies kann einem Client-Benutzer angezeigt werden.",
            "type": "string",
            "maxLength": 100
        }
    },
    "examples": [
        {
            "refMessageId": "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3454",
            "destination": "1.2.3.4.5.6.7",
            "statusCode": 504,
            "statusMessage": "Meldung konnte innerhalb von 30 Sekunden nicht zugestellt werden und wurde verworfen"
        },
        {
            "refMessageId": "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3454",
            "destination": "1.2.3.4.5.6.7",
            "statusCode": 500,
            "statusMessage": "Das empfangende UCRM hat einen Fehler gemeldet",
            "cause": {
                "code": 468,
                "reason": "HTTP error 401: invalid signature",
                "message": "invalid signature"
            }
        },
        {
            "refMessageId": "f8c3de3d-1fea-4d7c-a8b0-29f63c4c3454",
            "destination": "1.2.3.4.5.6.7",
            "statusCode": 200
        }
    ]
}
```


