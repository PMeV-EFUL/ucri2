

# L2MD-Nachricht CalloutInfo - INfo zu einer Alarmierung

<p>Info zu einer Alarmierung</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/mobile_device_callout/0.1/mobile_device_CalloutInfo.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#calloutid">calloutId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#mobiledevices">mobileDevices</a></td><td>Array (vom Typ String)</td><td>Ja</td></tr><tr><td colspan="2"><a href="#callouttext">calloutText</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#precodedstatus">precodedStatus</a></td><td>String</td><td>Nein</td></tr></tbody></table>


## Beispiel



```
{
    "calloutId": "228",
    "mobileDevices": [
        "122334",
        "122335"
    ],
    "calloutText": "Brand gelöscht"
}
```


## Beispiel



```
{
    "calloutId": "229",
    "mobileDevices": [
        "sip:1234@fw.com",
        "sip:1235@fw.com"
    ],
    "precodedStatus": "L20"
}
```



<hr />


## calloutId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Alarmierungs-ID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Eindeutige ID der Alarmierung</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




## mobileDevices


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Liste zu informierender mobiler Endgeräte</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Liste eindeutiger Kennungen der zu informierenden mobilen Endgeräte</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Array (vom Typ String)</td></tr>
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




## calloutText


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Infotext</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Text, der am mobilen Endgerät angezeigt werden soll</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




## precodedStatus


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Vordefinierter Status</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Wert bei Information durch vordefiniertes Kommandos</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>









<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/mobile_device_callout/0.1/mobile_device_CalloutInfo.schema.json",
    "unevaluatedProperties": false,
    "title": "L2MD-Nachricht CalloutInfo - INfo zu einer Alarmierung",
    "description": "Info zu einer Alarmierung",
    "required": [
        "calloutId",
        "mobileDevices"
    ],
    "type": "object",
    "properties": {
        "calloutId": {
            "title": "Alarmierungs-ID",
            "description": "Eindeutige ID der Alarmierung",
            "type": "string"
        },
        "mobileDevices": {
            "title": "Liste zu informierender mobiler Endgeräte",
            "description": "Liste eindeutiger Kennungen der zu informierenden mobilen Endgeräte",
            "type": "array",
            "minItems": 1,
            "items": {
                "title": "Kennung des zu informierenden mobiler Endgerätes",
                "description": "Eindeutige Kennung des zu informierenden mobilen Endgerätes",
                "type": "string"
            }
        },
        "calloutText": {
            "title": "Infotext",
            "description": "Text, der am mobilen Endgerät angezeigt werden soll",
            "type": "string"
        },
        "precodedStatus": {
            "title": "Vordefinierter Status",
            "description": "Wert bei Information durch vordefiniertes Kommandos",
            "type": "string"
        }
    },
    "examples": [
        {
            "calloutId": "228",
            "mobileDevices": [
                "122334",
                "122335"
            ],
            "calloutText": "Brand gelöscht"
        },
        {
            "calloutId": "229",
            "mobileDevices": [
                "sip:1234@fw.com",
                "sip:1235@fw.com"
            ],
            "precodedStatus": "L20"
        }
    ]
}
```


