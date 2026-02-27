

# L2MD-Nachricht CalloutAcknowledgement

<p>Alarmierungsantwort des mobilen Endgerätes</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/mobile_device_callout/0.1/mobile_device_CalloutAcknowledgement.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#acknowledgement">acknowledgement</a></td><td>Array (vom Typ Object)</td><td>Ja</td></tr></tbody></table>


## Beispiel



```
{
    "acknowledgement": [
        {
            "mobileDevice": "123456",
            "answer": "1"
        },
        {
            "mobileDevice": "sip:1235@fw.com",
            "answer": "komme"
        }
    ]
}
```



<hr />


## acknowledgement


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Alarmierungsantwort</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Antwort eines alarmierten Endgerätes</td>
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
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#acknowledgementmobiledevice">mobileDevice</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgementanswer">answer</a></td><td>String</td><td>Ja</td></tr></tbody></table>


### acknowledgement.mobileDevice


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Endgerätekennung</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Eindeutige Kennung des antwortenden Endgerätes</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### acknowledgement.answer


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Alarmierungsantwort</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Antwort des Endgerätes</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>










<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/mobile_device_callout/0.1/mobile_device_CalloutAcknowledgement.schema.json",
    "unevaluatedProperties": false,
    "title": "L2MD-Nachricht CalloutAcknowledgement",
    "description": "Alarmierungsantwort des mobilen Endgerätes",
    "required": [
        "acknowledgement"
    ],
    "type": "object",
    "properties": {
        "acknowledgement": {
            "type": "array",
            "title": "Alarmierungsantwort",
            "description": "Antwort eines alarmierten Endgerätes",
            "minItems": 1,
            "items": {
                "type": "object",
                "title": "Liste der Antworten",
                "description": "Liste der Antworten",
                "required": [
                    "mobileDevice",
                    "answer"
                ],
                "properties": {
                    "mobileDevice": {
                        "title": "Endgerätekennung",
                        "description": "Eindeutige Kennung des antwortenden Endgerätes",
                        "type": "string"
                    },
                    "answer": {
                        "type": "string",
                        "title": "Alarmierungsantwort",
                        "description": "Antwort des Endgerätes"
                    }
                }
            }
        }
    },
    "examples": [
        {
            "acknowledgement": [
                {
                    "mobileDevice": "123456",
                    "answer": "1"
                },
                {
                    "mobileDevice": "sip:1235@fw.com",
                    "answer": "komme"
                }
            ]
        }
    ]
}
```


