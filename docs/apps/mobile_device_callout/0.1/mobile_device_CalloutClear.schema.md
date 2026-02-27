

# L2MD-Nachricht CalloutClear - Beenden einer Alarmierung

<p>Beenden einer Alarmierung</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/mobile_device_callout/0.1/mobile_device_CalloutClear.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#calloutid">calloutId</a></td><td>String</td><td>Ja</td></tr></tbody></table>


## Beispiel



```
{
    "calloutId": "228"
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









<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/mobile_device_callout/0.1/mobile_device_CalloutClear.schema.json",
    "unevaluatedProperties": false,
    "title": "L2MD-Nachricht CalloutClear - Beenden einer Alarmierung",
    "description": "Beenden einer Alarmierung",
    "required": [
        "calloutId"
    ],
    "type": "object",
    "properties": {
        "calloutId": {
            "title": "Alarmierungs-ID",
            "description": "Eindeutige ID der Alarmierung",
            "type": "string"
        }
    },
    "examples": [
        {
            "calloutId": "228"
        }
    ]
}
```


