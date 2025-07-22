

# App-Nachricht acknowledgement - Bestätigung oder Ablehnung einer Patiententransportanfrage

<p>Bestätigung oder Ablehnung einer Patiententransportanfrage</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transport/0.1/acknowledgement.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedbydispatcherat">acknowledgedByDispatcherAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#status">status</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#plannedpickuptime">plannedPickupTime</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#alternativeproposal">alternativeProposal</a></td><td>String</td><td>Nein</td></tr></tbody></table>


## Beispiel



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "acknowledgedByDispatcherAt": "2024-01-01T10:06:09Z",
    "status": "accepted",
    "plannedPickupTime": "2024-01-01T14:15:00Z"
}
```


## Beispiel



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "acknowledgedByDispatcherAt": "2024-01-01T10:06:09Z",
    "status": "rejected",
    "alternativeProposal": "Transport am nächsten Tag um 9:00 Uhr möglich"
}
```



<hr />


## sharedIncidentId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">globale Einsatz-UUID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">global eindeutige UUID der Patiententransportanfrage, die bestätigt oder abgelehnt wird.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
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
      <th>Titel</th>
      <td colspan="2">Dispatcher-Zeitstempel</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zeitpunkt an dem die Annahme oder Ablehnung vom Disponenten ausgelöst wurde</td>
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




## status


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Annahme- oder Ablehnungsstatus</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Annahme- oder Ablehnungsstatus</td>
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




## plannedPickupTime


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Abholzeitpunkt</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Geplante Abholzeit des Patienten</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




## alternativeProposal


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Alternativvorschlag</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Alternativer Vorschlag bei Ablehnung (z.B. anderer Zeitpunkt)</td>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transport/0.1/acknowledgement.schema.json",
    "title": "App-Nachricht acknowledgement - Bestätigung oder Ablehnung einer Patiententransportanfrage",
    "description": "Bestätigung oder Ablehnung einer Patiententransportanfrage",
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
            "title": "globale Einsatz-UUID",
            "description": "global eindeutige UUID der Patiententransportanfrage, die bestätigt oder abgelehnt wird."
        },
        "acknowledgedByDispatcherAt": {
            "type": "string",
            "format": "date-time",
            "title": "Dispatcher-Zeitstempel",
            "description": "Zeitpunkt an dem die Annahme oder Ablehnung vom Disponenten ausgelöst wurde"
        },
        "status": {
            "type": "string",
            "enum": [
                "accepted",
                "rejected"
            ],
            "title": "Annahme- oder Ablehnungsstatus",
            "description": "Annahme- oder Ablehnungsstatus"
        },
        "plannedPickupTime": {
            "type": "string",
            "format": "date-time",
            "title": "Abholzeitpunkt",
            "description": "Geplante Abholzeit des Patienten"
        },
        "alternativeProposal": {
            "type": "string",
            "title": "Alternativvorschlag",
            "description": "Alternativer Vorschlag bei Ablehnung (z.B. anderer Zeitpunkt)"
        }
    },
    "unevaluatedProperties": false,
    "examples": [
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "acknowledgedByDispatcherAt": "2024-01-01T10:06:09Z",
            "status": "accepted",
            "plannedPickupTime": "2024-01-01T14:15:00Z"
        },
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "acknowledgedByDispatcherAt": "2024-01-01T10:06:09Z",
            "status": "rejected",
            "alternativeProposal": "Transport am nächsten Tag um 9:00 Uhr möglich"
        }
    ]
}
```


