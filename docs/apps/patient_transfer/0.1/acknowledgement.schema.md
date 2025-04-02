

# Bestätigung oder Ablehnung einer Patientenübergabeanfrage

<p>Bestätigung oder Ablehnung einer Patientenübergabeanfrage</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transfer_new/0.1/acknowledgement.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th><th>Required</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Yes</td></tr><tr><td colspan="2"><a href="#acknowledgedbydispatcherat">acknowledgedByDispatcherAt</a></td><td>String</td><td>Yes</td></tr><tr><td colspan="2"><a href="#status">status</a></td><td>String</td><td>Yes</td></tr><tr><td colspan="2"><a href="#cause">cause</a></td><td>String</td><td>No</td></tr></tbody></table>


## Example



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "acknowledgedByDispatcherAt": "2024-01-01T10:06:09",
    "status": "rejected",
    "cause": "Einsatzort ist unbekannt!"
}
```



<hr />


## sharedIncidentId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">global eindeutige UUID des Einsatzes</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uuid</td>
    </tr>
  </tbody>
</table>




## acknowledgedByDispatcherAt


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Zeitpunkt an dem die Annahme oder Ablehnung vom Disponenten ausgelöst wurde</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




## status


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Annahme- oder Ablehnungsstatus</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>accepted</li><li>rejected</li></ul></td>
    </tr><tr>
      <th>Format</th>
      <td colspan="2">uuid</td>
    </tr>
  </tbody>
</table>




## cause


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Begründung für die Annahme oder Ablehnung</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>









<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transfer_new/0.1/acknowledgement.schema.json",
    "title": "Bestätigung oder Ablehnung einer Patientenübergabeanfrage",
    "description": "Bestätigung oder Ablehnung einer Patientenübergabeanfrage",
    "required": [
        "sharedIncidentId",
        "acknowledgedByDispatcherAt",
        "status"
    ],
    "type": "object",
    "properties": {
        "sharedIncidentId": {
            "type": "string",
            "format": "uuid",
            "description": "global eindeutige UUID des Einsatzes"
        },
        "acknowledgedByDispatcherAt": {
            "type": "string",
            "format": "date-time",
            "description": "Zeitpunkt an dem die Annahme oder Ablehnung vom Disponenten ausgelöst wurde"
        },
        "status": {
            "type": "string",
            "format": "uuid",
            "enum": [
                "accepted",
                "rejected"
            ],
            "description": "Annahme- oder Ablehnungsstatus"
        },
        "cause": {
            "type": "string",
            "description": "Begründung für die Annahme oder Ablehnung"
        }
    },
    "unevaluatedProperties": false,
    "examples": [
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "acknowledgedByDispatcherAt": "2024-01-01T10:06:09",
            "status": "rejected",
            "cause": "Einsatzort ist unbekannt!"
        }
    ]
}
```


