

# L2MD-Nachricht CalloutAvailabilityRequest - Abfrage der Verfügbarkeit mobiler Endgeräte

<p>Abfrage der Verfügbarkeit mobiler Endgeräte</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/mobile_device_callout/0.1/mobile_device_CalloutAvailabilityRequest.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#mobiledevices">mobileDevices</a></td><td>Array (vom Typ String)</td><td>Ja</td></tr></tbody></table>


## Beispiel



```
{
    "mobileDevices": [
        "122334",
        "122335",
        "sip:1234@fw.com"
    ]
}
```



<hr />


## mobileDevices


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Liste abzufragender mobiler Endgeräte</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Liste eindeutiger Kennungen der abzufragenden mobilen Endgeräte</td>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/mobile_device_callout/0.1/mobile_device_CalloutAvailabilityRequest.schema.json",
    "unevaluatedProperties": false,
    "title": "L2MD-Nachricht CalloutAvailabilityRequest - Abfrage der Verfügbarkeit mobiler Endgeräte",
    "description": "Abfrage der Verfügbarkeit mobiler Endgeräte",
    "required": [
        "mobileDevices"
    ],
    "type": "object",
    "properties": {
        "mobileDevices": {
            "title": "Liste abzufragender mobiler Endgeräte",
            "description": "Liste eindeutiger Kennungen der abzufragenden mobilen Endgeräte",
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
            "mobileDevices": [
                "122334",
                "122335",
                "sip:1234@fw.com"
            ]
        }
    ]
}
```


