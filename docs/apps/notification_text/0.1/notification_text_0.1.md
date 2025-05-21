# UCRI2-App Einsatzbezogene Textnachricht

<!-- toc -->

- [Überblick](#uberblick)
- [Ablaufbeschreibung](#ablaufbeschreibung)
- [App-Nachrichten](#app-nachrichten)
  * [App-Nachricht notification - Einsatzbezogene Textnachricht](#app-nachricht-notification---einsatzbezogene-textnachricht)
    + [Eigenschaften](#eigenschaften)
    + [Beispiel](#beispiel)
    + [sharedIncidentId](#sharedincidentid)
    + [timestamp](#timestamp)
    + [message](#message)
    + [type](#type)
    + [silent](#silent)
    + [Schema](#schema)

<!-- tocstop -->

# Überblick
Diese UCRI2-App ermöglicht es, parallel zu anderen einsatzbezogenen Apps einen dynamischen Austausch von Textnachrichten zu unterstützen. Einzige Voraussetzung hierbei ist, dass für einen Einsatz bereits eine Übergabenachricht mit einer sharedIncidentId übermittelt wurde und diese sharedIncidentId dann in der Nachricht genutzt wird.
Nachrichten, die bereits existierende App-Nachrichten nachbilden (z.b. Einsatzannahme/-Ablehnung oder Einsatzendnachrichten) sind **nicht** als einsatzbezogene Textnachrichten zu übermitteln.

# Ablaufbeschreibung

1. A->B: Einsatzbezogene Textnachricht übermitteln

# App-Nachrichten


## App-Nachricht notification - Einsatzbezogene Textnachricht

<p>Eine einsatzbezogene Textnachricht</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/notification_text/0.1/notification.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#timestamp">timestamp</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#message">message</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#type">type</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#silent">silent</a></td><td>Boolean</td><td>Nein</td></tr></tbody></table>


### Beispiel



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "timestamp": "2024-01-01T10:06:09",
    "message": "NEF wurde durch Einsatzkräfte vor Ort nachalarmiert",
    "type": "information",
    "silent": true
}
```



<hr />


### sharedIncidentId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">global eindeutige UUID des Einsatzes, auf den sich diese Benachrichtigung bezieht.</td>
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




### timestamp


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
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### message


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
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Benachrichtigungstyp</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Typ der Benachrichtigung. Aktuell ist dieser Typ frei wählbar</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### silent


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
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>









<hr />

### Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/notification_text/0.1/notification.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht notification - Einsatzbezogene Textnachricht",
    "description": "Eine einsatzbezogene Textnachricht",
    "required": [
        "sharedIncidentId",
        "timestamp",
        "message"
    ],
    "type": "object",
    "properties": {
        "sharedIncidentId": {
            "type": "string",
            "format": "uuid",
            "description": "global eindeutige UUID des Einsatzes, auf den sich diese Benachrichtigung bezieht."
        },
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
        "type": {
            "title": "Benachrichtigungstyp",
            "description": "Typ der Benachrichtigung. Aktuell ist dieser Typ frei wählbar",
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
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "timestamp": "2024-01-01T10:06:09",
            "message": "NEF wurde durch Einsatzkräfte vor Ort nachalarmiert",
            "type": "information",
            "silent": true
        }
    ],
    "$defs": {}
}
```
