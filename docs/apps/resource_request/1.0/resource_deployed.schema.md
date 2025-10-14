

# Resource Deployed

<p>Indicates which specific resource, originally requested, has been deployed (moved out) and at what time.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/1.0/resource_deployed.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#resourcerequestid">resourceRequestId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#resourceid">resourceId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#resourcename">resourceName</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#resourcetype">resourceType</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#deployedat">deployedAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#comment">comment</a></td><td>String</td><td>Nein</td></tr></tbody></table>


## Beispiel



```
{
    "resourceRequestId": "10002003",
    "resourceId": "1234",
    "resourceName": "KTW-1",
    "resourceType": "KTW",
    "deployedAt": "2025-06-11T10:30:00Z"
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
      <td colspan="2">Die eindeutige Kennung der ursprünglichen Ressourcenanforderung.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




## resourceId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Resource ID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Eindeutige Kennung der disponierten Ressource.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




## resourceName


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ressourcenname</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Name der disponierten Ressource.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




## resourceType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ressourcentyp</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Typ der disponierten Ressource (laut Ressourcentypkatalog).</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




## deployedAt


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ausrückzeitpunkt</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zeitpunkt, zu dem die Ressource ausgerückt ist.</td>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/1.0/resource_deployed.schema.json",
    "title": "Resource Deployed",
    "description": "Indicates which specific resource, originally requested, has been deployed (moved out) and at what time.",
    "type": "object",
    "properties": {
        "resourceRequestId": {
            "title": "Resource Request ID",
            "description": "Die eindeutige Kennung der ursprünglichen Ressourcenanforderung.",
            "type": "string"
        },
        "resourceId": {
            "title": "Resource ID",
            "description": "Eindeutige Kennung der disponierten Ressource.",
            "type": "string"
        },
        "resourceName": {
            "title": "Ressourcenname",
            "description": "Name der disponierten Ressource.",
            "type": "string"
        },
        "resourceType": {
            "title": "Ressourcentyp",
            "description": "Typ der disponierten Ressource (laut Ressourcentypkatalog).",
            "type": "string"
        },
        "deployedAt": {
            "title": "Ausrückzeitpunkt",
            "description": "Zeitpunkt, zu dem die Ressource ausgerückt ist.",
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
        "resourceId",
        "resourceName",
        "resourceType",
        "deployedAt"
    ],
    "examples": [
        {
            "resourceRequestId": "10002003",
            "resourceId": "1234",
            "resourceName": "KTW-1",
            "resourceType": "KTW",
            "deployedAt": "2025-06-11T10:30:00Z"
        }
    ]
}
```


