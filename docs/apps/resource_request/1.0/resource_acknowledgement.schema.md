

# Resource Acknowledgement

<p>Acknowledgement specifying which specific resources are provided in response to a resource request.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/1.0/resource_acknowledgement.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#resourcerequestid">resourceRequestId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedresources">acknowledgedResources</a></td><td>Array (vom Typ Object)</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedat">acknowledgedAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#comment">comment</a></td><td>String</td><td>Nein</td></tr></tbody></table>


## Beispiel



```
{
    "resourceRequestId": "10002003",
    "acknowledgedResources": [
        {
            "resourceId": "1234",
            "resourceName": "KTW-1",
            "resourceType": "KTW"
        },
        {
            "resourceId": "5674",
            "resourceName": "RTW-3",
            "resourceType": "RTW"
        }
    ],
    "acknowledgedAt": "2025-06-11T10:20:00Z"
}
```



<hr />


## resourceRequestId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Resource Request ID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die eindeutige Kennung der Ressourcenanforderung, auf die sich die Bestätigung bezieht.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




## acknowledgedResources


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Bestätigte Ressourcen</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Liste der spezifischen Ressourcen, die als Antwort auf die Anforderung bestätigt/zur Verfügung gestellt werden.</td>
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
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#acknowledgedresourcesresourceid">resourceId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedresourcesresourcename">resourceName</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedresourcesresourcetype">resourceType</a></td><td>String</td><td>Ja</td></tr></tbody></table>


### acknowledgedResources.resourceId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ressourcen-ID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Eindeutige Kennung der spezifischen Ressource.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### acknowledgedResources.resourceName


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ressourcenname</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Name der spezifischen Ressource.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### acknowledgedResources.resourceType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ressourcentyp</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Typ der Ressource (laut Ressourcentypkatalog).</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





## acknowledgedAt


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Bestätigt am</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zeitpunkt, zu dem die Ressourcenbestätigung erstellt wurde.</td>
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




## comment


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Kommentar</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Optionaler Kommentar oder zusätzliche Informationen.</td>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/1.0/resource_acknowledgement.schema.json",
    "title": "Resource Acknowledgement",
    "description": "Acknowledgement specifying which specific resources are provided in response to a resource request.",
    "type": "object",
    "properties": {
        "resourceRequestId": {
            "title": "Resource Request ID",
            "description": "Die eindeutige Kennung der Ressourcenanforderung, auf die sich die Bestätigung bezieht.",
            "type": "string"
        },
        "acknowledgedResources": {
            "title": "Bestätigte Ressourcen",
            "description": "Liste der spezifischen Ressourcen, die als Antwort auf die Anforderung bestätigt/zur Verfügung gestellt werden.",
            "type": "array",
            "minItems": 1,
            "items": {
                "title": "Bestätigte Ressource",
                "description": "Die bestätigten Ressourcen",
                "type": "object",
                "required": [
                    "resourceId",
                    "resourceName",
                    "resourceType"
                ],
                "properties": {
                    "resourceId": {
                        "title": "Ressourcen-ID",
                        "description": "Eindeutige Kennung der spezifischen Ressource.",
                        "type": "string"
                    },
                    "resourceName": {
                        "title": "Ressourcenname",
                        "description": "Name der spezifischen Ressource.",
                        "type": "string"
                    },
                    "resourceType": {
                        "title": "Ressourcentyp",
                        "description": "Typ der Ressource (laut Ressourcentypkatalog).",
                        "type": "string"
                    }
                }
            }
        },
        "acknowledgedAt": {
            "title": "Bestätigt am",
            "description": "Zeitpunkt, zu dem die Ressourcenbestätigung erstellt wurde.",
            "type": "string",
            "format": "date-time"
        },
        "comment": {
            "title": "Kommentar",
            "description": "Optionaler Kommentar oder zusätzliche Informationen.",
            "type": "string"
        }
    },
    "required": [
        "resourceRequestId",
        "acknowledgedResources",
        "acknowledgedAt"
    ],
    "examples": [
        {
            "resourceRequestId": "10002003",
            "acknowledgedResources": [
                {
                    "resourceId": "1234",
                    "resourceName": "KTW-1",
                    "resourceType": "KTW"
                },
                {
                    "resourceId": "5674",
                    "resourceName": "RTW-3",
                    "resourceType": "RTW"
                }
            ],
            "acknowledgedAt": "2025-06-11T10:20:00Z"
        }
    ],
    "$defs": {}
}
```


