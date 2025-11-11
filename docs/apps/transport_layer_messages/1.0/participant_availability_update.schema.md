

# App-Nachricht participant_availability_update - Update des Verfügbarkeitsstatus für einen Teilnehmer

<p>Diese Nachricht wird von einem UCRM an andere UCRM versendet, um die Veränderung des Verfügbarkeitsstatus eines Teilnehmers zu kommunizieren. Diese Nachricht wird NICHT an angebundene Teilnehmer weitergeleitet.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/transport_layer_messages/1.0/participant_availability_update.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#id">id</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#status">status</a></td><td>String</td><td>Ja</td></tr></tbody></table>


## Beispiel



```
{
    "id": "1.2.3.4.5.6.7",
    "status": "online"
}
```



<hr />


## id


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Teilnehmer-OID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die OID des referenzierten Teilnehmers</td>
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




## status


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Teilnehmer-status</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Verfügbarkeitsstatus dieses Teilnehmers. Für an UCRM angebundene TN wird dieser Status durch das UCRM verwaltet. Für UCRMs selbst wird der Status durch diese verwaltet.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>online</li><li>offline</li><li>unknown</li></ul></td>
    </tr>
  </tbody>
</table>









<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/transport_layer_messages/1.0/participant_availability_update.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht participant_availability_update - Update des Verfügbarkeitsstatus für einen Teilnehmer",
    "description": "Diese Nachricht wird von einem UCRM an andere UCRM versendet, um die Veränderung des Verfügbarkeitsstatus eines Teilnehmers zu kommunizieren. Diese Nachricht wird NICHT an angebundene Teilnehmer weitergeleitet.",
    "required": [
        "id",
        "status"
    ],
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "title": "Teilnehmer-OID",
            "description": "Die OID des referenzierten Teilnehmers",
            "pattern": "^([0-9]+\\.?)+$"
        },
        "status": {
            "type": "string",
            "enum": [
                "online",
                "offline",
                "unknown"
            ],
            "title": "Teilnehmer-status",
            "description": "Verfügbarkeitsstatus dieses Teilnehmers. Für an UCRM angebundene TN wird dieser Status durch das UCRM verwaltet. Für UCRMs selbst wird der Status durch diese verwaltet."
        }
    },
    "examples": [
        {
            "id": "1.2.3.4.5.6.7",
            "status": "online"
        }
    ]
}
```


