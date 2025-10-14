

# App-Nachricht notification - Einsatzbezogene Textnachrichten

<p>Einsatzbezogene Textnachrichten</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/notification_text/1.0/notification.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#notifications">notifications</a></td><td>Array (vom Typ Object)</td><td>Ja</td></tr></tbody></table>


## Beispiel



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "notifications": [
        {
            "timestamp": "2024-01-01T10:06:09Z",
            "message": "NEF wurde durch Einsatzkräfte vor Ort nachalarmiert",
            "category": "information",
            "silent": true
        }
    ]
}
```



<hr />


## sharedIncidentId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">globale Einsatz-UUID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">global eindeutige UUID des Einsatzes, auf den sich die Benachrichtigungen beziehem.</td>
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




## notifications


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Nachrichten</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Liste der einsatzbezogenen Nachrichten.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Array (vom Typ Object)</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>

### Eigenschaften der Objekte im Array
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#notificationstimestamp">timestamp</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#notificationsmessage">message</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#notificationscategory">category</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#notificationssilent">silent</a></td><td>Boolean</td><td>Nein</td></tr></tbody></table>


### notifications.timestamp


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Zeitstempel</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zeitpunkt an dem Benachrichtigung senderseitig hinzugefügt wurde</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### notifications.message


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Benachrichtigungstext</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Inhalt der Benachrichtigung</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### notifications.category


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Benachrichtigungskategorie</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Kategorie der Benachrichtigung. Aktuell ist diese Kategorie frei wählbar</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### notifications.silent


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Benachrichtigungs-Sichtbarkeit</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">true, falls die Benachrichtigung dem empfangenden Nutzer angezeigt werden soll, false, falls die Benachrichtigung nur als Protokollvermerk gespeichert, aber nicht angezeigt werden soll.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>










<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/notification_text/1.0/notification.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht notification - Einsatzbezogene Textnachrichten",
    "description": "Einsatzbezogene Textnachrichten",
    "required": [
        "sharedIncidentId",
        "notifications"
    ],
    "type": "object",
    "properties": {
        "sharedIncidentId": {
            "type": "string",
            "format": "uuid",
            "title": "globale Einsatz-UUID",
            "description": "global eindeutige UUID des Einsatzes, auf den sich die Benachrichtigungen beziehem."
        },
        "notifications": {
            "title": "Nachrichten",
            "description": "Liste der einsatzbezogenen Nachrichten.",
            "type": "array",
            "minItems": 1,
            "items": {
                "title": "Nachricht",
                "description": "Eine einsatzbezogene Nachricht.",
                "$ref": "#/$defs/notification.schema.json"
            }
        }
    },
    "examples": [
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "notifications": [
                {
                    "timestamp": "2024-01-01T10:06:09Z",
                    "message": "NEF wurde durch Einsatzkräfte vor Ort nachalarmiert",
                    "category": "information",
                    "silent": true
                }
            ]
        }
    ],
    "$defs": {
        "notification.schema.json": {
            "unevaluatedProperties": false,
            "title": "Einsatzbezogene Text-Benachrichtigung",
            "description": "Eine textbasierte, einsatzbezogene Benachrichtigung, die protokolliert werden sollte.",
            "required": [
                "timestamp",
                "message"
            ],
            "type": "object",
            "properties": {
                "timestamp": {
                    "type": "string",
                    "format": "date-time",
                    "title": "Zeitstempel",
                    "description": "Zeitpunkt an dem Benachrichtigung senderseitig hinzugefügt wurde"
                },
                "message": {
                    "title": "Benachrichtigungstext",
                    "description": "Inhalt der Benachrichtigung",
                    "type": "string"
                },
                "category": {
                    "title": "Benachrichtigungskategorie",
                    "description": "Kategorie der Benachrichtigung. Aktuell ist diese Kategorie frei wählbar",
                    "type": "string"
                },
                "silent": {
                    "title": "Benachrichtigungs-Sichtbarkeit",
                    "description": "true, falls die Benachrichtigung dem empfangenden Nutzer angezeigt werden soll, false, falls die Benachrichtigung nur als Protokollvermerk gespeichert, aber nicht angezeigt werden soll.",
                    "type": "boolean"
                }
            },
            "examples": [
                {
                    "timestamp": "2024-01-01T10:06:09Z",
                    "message": "NEF wurde durch Einsatzkräfte vor Ort nachalarmiert",
                    "category": "information",
                    "silent": true
                }
            ]
        }
    }
}
```


