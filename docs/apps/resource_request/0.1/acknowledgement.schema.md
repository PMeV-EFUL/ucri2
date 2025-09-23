

# Ressourcenanforderungsbestätigung

<p>Bestätigung einer Ressourcenanforderung. Es wird angegeben, ob die Anforderung insgesamt akzeptiert oder abgelehnt wurde.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/0.1/acknowledgement.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#resourcerequestid">resourceRequestId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgementstatus">acknowledgementStatus</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedat">acknowledgedAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#comment">comment</a></td><td>String</td><td>Nein</td></tr></tbody></table>


## Beispiel



```
{
    "resourceRequestId": "10002003",
    "acknowledgementStatus": "accepted",
    "acknowledgedAt": "2025-06-11T10:15:00Z"
}
```


## Beispiel



```
{
    "resourceRequestId": "10002005",
    "acknowledgementStatus": "rejected",
    "acknowledgedAt": "2025-06-11T10:16:00Z",
    "comment": "Nicht genügend Ressourcen verfügbar."
}
```



<hr />


## resourceRequestId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ressourcenanforderungs-ID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die eindeutige Kennung der bestätigten Ressourcenanforderung.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




## acknowledgementStatus


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Bestätigungsstatus</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Gibt an, ob die Ressourcenanforderung insgesamt akzeptiert oder abgelehnt wurde.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>accepted</li><li>rejected</li></ul></td>
    </tr>
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
      <td colspan="2">Zeitpunkt, zu dem die Bestätigung erstellt wurde.</td>
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
      <td colspan="2">Optionaler Kommentar oder Ablehnungsgrund.</td>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/0.1/acknowledgement.schema.json",
    "title": "Ressourcenanforderungsbestätigung",
    "description": "Bestätigung einer Ressourcenanforderung. Es wird angegeben, ob die Anforderung insgesamt akzeptiert oder abgelehnt wurde.",
    "type": "object",
    "properties": {
        "resourceRequestId": {
            "title": "Ressourcenanforderungs-ID",
            "description": "Die eindeutige Kennung der bestätigten Ressourcenanforderung.",
            "type": "string"
        },
        "acknowledgementStatus": {
            "title": "Bestätigungsstatus",
            "description": "Gibt an, ob die Ressourcenanforderung insgesamt akzeptiert oder abgelehnt wurde.",
            "type": "string",
            "enum": [
                "accepted",
                "rejected"
            ]
        },
        "acknowledgedAt": {
            "title": "Bestätigt am",
            "description": "Zeitpunkt, zu dem die Bestätigung erstellt wurde.",
            "type": "string",
            "format": "date-time"
        },
        "comment": {
            "title": "Kommentar",
            "description": "Optionaler Kommentar oder Ablehnungsgrund.",
            "type": "string"
        }
    },
    "required": [
        "resourceRequestId",
        "acknowledgementStatus",
        "acknowledgedAt"
    ],
    "examples": [
        {
            "resourceRequestId": "10002003",
            "acknowledgementStatus": "accepted",
            "acknowledgedAt": "2025-06-11T10:15:00Z"
        },
        {
            "resourceRequestId": "10002005",
            "acknowledgementStatus": "rejected",
            "acknowledgedAt": "2025-06-11T10:16:00Z",
            "comment": "Nicht genügend Ressourcen verfügbar."
        }
    ]
}
```


