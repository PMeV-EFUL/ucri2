

# Resource Deployed

<p>Indicates which specific resource, originally requested, has been deployed (moved out) and at what time.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/0.1/resource_deployed.schema.json</td></tr>
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
      <td colspan="2">The unique identifier of the original resource request.</td>
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
      <td colspan="2">Unique identifier of the deployed resource.</td>
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
      <td colspan="2">Resource Name</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Name of the deployed resource.</td>
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
      <td colspan="2">Resource Type</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Type of the deployed resource (from resource type catalog).</td>
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
      <td colspan="2">Deployed At</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Timestamp when the resource was deployed (moved out).</td>
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
      <td colspan="2">Optional comment or additional information.</td>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/0.1/resource_deployed.schema.json",
    "title": "Resource Deployed",
    "description": "Indicates which specific resource, originally requested, has been deployed (moved out) and at what time.",
    "type": "object",
    "properties": {
        "resourceRequestId": {
            "title": "Resource Request ID",
            "description": "The unique identifier of the original resource request.",
            "type": "string"
        },
        "resourceId": {
            "title": "Resource ID",
            "description": "Unique identifier of the deployed resource.",
            "type": "string"
        },
        "resourceName": {
            "title": "Resource Name",
            "description": "Name of the deployed resource.",
            "type": "string"
        },
        "resourceType": {
            "title": "Resource Type",
            "description": "Type of the deployed resource (from resource type catalog).",
            "type": "string"
        },
        "deployedAt": {
            "title": "Deployed At",
            "description": "Timestamp when the resource was deployed (moved out).",
            "type": "string",
            "format": "date-time"
        },
        "comment": {
            "title": "Kommentar",
            "description": "Optional comment or additional information.",
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


