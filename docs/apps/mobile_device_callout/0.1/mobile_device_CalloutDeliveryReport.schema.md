

# L2MD-Nachricht CalloutDeliveryReport - Nachricht über erfolgreiches Versenden einer Alarmierung

<p>Nachricht über erfolgreiches Versenden einer Alarmierung</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/mobile_device_callout/0.1/mobile_device_CalloutDewliveryReport.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#calloutid">calloutId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#mobiledevices">mobileDevices</a></td><td>Array (vom Typ String)</td><td>Ja</td></tr></tbody></table>


## Beispiel



```
{
    "calloutId": "229",
    "mobileDevices": [
        "122334",
        "122335",
        "sip:1234@fw.com"
    ]
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
      <td colspan="2">Liste erfolgreich alarmierter mobiler Endgeräte</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Liste von Kennungen erfolgreich alarmierter mobiler Endgeräte</td>
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









<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/mobile_device_callout/0.1/mobile_device_CalloutDewliveryReport.schema.json",
    "unevaluatedProperties": false,
    "title": "L2MD-Nachricht CalloutDeliveryReport - Nachricht über erfolgreiches Versenden einer Alarmierung",
    "description": "Nachricht über erfolgreiches Versenden einer Alarmierung",
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
            "title": "Liste erfolgreich alarmierter mobiler Endgeräte",
            "description": "Liste von Kennungen erfolgreich alarmierter mobiler Endgeräte",
            "type": "array",
            "minItems": 1,
            "items": {
                "title": "Kennung des abzufragenden mobilen Endgerätes",
                "description": "Eindeutige Kennung des abzufragenden Endgerätes",
                "type": "string"
            }
        }
    },
    "examples": [
        {
            "calloutId": "229",
            "mobileDevices": [
                "122334",
                "122335",
                "sip:1234@fw.com"
            ]
        }
    ]
}
```


