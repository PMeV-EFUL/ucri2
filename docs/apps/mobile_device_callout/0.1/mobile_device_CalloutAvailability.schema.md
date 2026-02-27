

# L2MD-Nachricht CalloutAvailability - Verfügbarkeitsstatus

<p>Verfügbarkeitsstatus</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/mobile_device_callout/0.1/mobile_device_CalloutAvailability.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#availabilitystatus">availabilitystatus</a></td><td>Array (vom Typ Object)</td><td>Ja</td></tr></tbody></table>


## Beispiel



```
{
    "availabilitystatus": [
        {
            "mobileDevice": "123456",
            "status": "1"
        },
        {
            "mobileDevice": "sip:1235@fw.com",
            "status": "on"
        }
    ]
}
```



<hr />


## availabilitystatus


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Verfügbarkeitsstatus</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Status der Verfügbarkeit eines Endgerätes</td>
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
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#availabilitystatusmobiledevice">mobileDevice</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#availabilitystatusstatus">status</a></td><td>String</td><td>Ja</td></tr></tbody></table>


### availabilitystatus.mobileDevice


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Endgerätekennung</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Eindeutige Kennung des abzufragenden Endgerätes</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### availabilitystatus.status


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Verfügbarkeitsstatus</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Status der Verfügbarkeit des Endgerätes</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>










<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/mobile_device_callout/0.1/mobile_device_CalloutAvailability.schema.json",
    "unevaluatedProperties": false,
    "title": "L2MD-Nachricht CalloutAvailability - Verfügbarkeitsstatus",
    "description": "Verfügbarkeitsstatus",
    "required": [
        "availabilitystatus"
    ],
    "type": "object",
    "properties": {
        "availabilitystatus": {
            "type": "array",
            "title": "Verfügbarkeitsstatus",
            "description": "Status der Verfügbarkeit eines Endgerätes",
            "minItems": 1,
            "items": {
                "type": "object",
                "title": "Liste der Verfügbarkeitsmeldungen",
                "description": "Liste der Verfügbarkeitsmeldungen",
                "required": [
                    "mobileDevice",
                    "status"
                ],
                "properties": {
                    "mobileDevice": {
                        "title": "Endgerätekennung",
                        "description": "Eindeutige Kennung des abzufragenden Endgerätes",
                        "type": "string"
                    },
                    "status": {
                        "type": "string",
                        "title": "Verfügbarkeitsstatus",
                        "description": "Status der Verfügbarkeit des Endgerätes"
                    }
                }
            }
        }
    },
    "examples": [
        {
            "availabilitystatus": [
                {
                    "mobileDevice": "123456",
                    "status": "1"
                },
                {
                    "mobileDevice": "sip:1235@fw.com",
                    "status": "on"
                }
            ]
        }
    ]
}
```


