# UCRI2-App Einsatzübergabe mit Patientendaten

<!-- toc -->

- [Überblick](#uberblick)
- [App-Nachrichten](#app-nachrichten)
  * [Bestätigung oder Ablehnung einer Einsatzübergabeanfrage](#bestatigung-oder-ablehnung-einer-einsatzubergabeanfrage)
    + [Properties](#properties)
    + [Example](#example)
    + [sharedIncidentId](#sharedincidentid)
    + [acknowledgedByDispatcherAt](#acknowledgedbydispatcherat)
    + [status](#status)
    + [cause](#cause)
    + [Schema](#schema)
  * [Ein Einsatz mit Patientendaten](#ein-einsatz-mit-patientendaten)
    + [Properties](#properties-1)
    + [Example](#example-1)
    + [sharedIncidentId](#sharedincidentid-1)
    + [internalId](#internalid)
    + [classifications](#classifications)
    + [issue](#issue)
    + [flashingLights](#flashinglights)
    + [additionalInfo](#additionalinfo)
    + [sentByDispatcherAt](#sentbydispatcherat)
    + [missionLocation](#missionlocation)
      - [Properties](#properties-2)
      - [missionLocation.coordinate](#missionlocationcoordinate)
      - [missionLocation.coordinate.lat](#missionlocationcoordinatelat)
      - [missionLocation.coordinate.lon](#missionlocationcoordinatelon)
      - [missionLocation.address](#missionlocationaddress)
      - [missionLocation.address.street](#missionlocationaddressstreet)
      - [missionLocation.address.houseNumber](#missionlocationaddresshousenumber)
      - [missionLocation.address.postalCode](#missionlocationaddresspostalcode)
      - [missionLocation.address.city](#missionlocationaddresscity)
      - [missionLocation.address.cityDistrict](#missionlocationaddresscitydistrict)
      - [missionLocation.address.state](#missionlocationaddressstate)
      - [missionLocation.address.country](#missionlocationaddresscountry)
      - [missionLocation.object](#missionlocationobject)
      - [missionLocation.object.name](#missionlocationobjectname)
      - [missionLocation.object.additionalInfo](#missionlocationobjectadditionalinfo)
      - [missionLocation.superiorObject](#missionlocationsuperiorobject)
      - [missionLocation.superiorObject.name](#missionlocationsuperiorobjectname)
      - [missionLocation.superiorObject.additionalInfo](#missionlocationsuperiorobjectadditionalinfo)
      - [missionLocation.floor](#missionlocationfloor)
      - [missionLocation.room](#missionlocationroom)
      - [missionLocation.additionalInfo](#missionlocationadditionalinfo)
      - [missionLocation.0](#missionlocation0)
      - [missionLocation.1](#missionlocation1)
    + [patients](#patients)
      - [patients.name](#patientsname)
      - [patients.surname](#patientssurname)
      - [patients.phone](#patientsphone)
      - [patients.email](#patientsemail)
      - [patients.address](#patientsaddress)
      - [patients.address.street](#patientsaddressstreet)
      - [patients.address.houseNumber](#patientsaddresshousenumber)
      - [patients.address.postalCode](#patientsaddresspostalcode)
      - [patients.address.city](#patientsaddresscity)
      - [patients.address.cityDistrict](#patientsaddresscitydistrict)
      - [patients.address.state](#patientsaddressstate)
      - [patients.address.country](#patientsaddresscountry)
      - [patients.additionalInfo](#patientsadditionalinfo)
      - [patients.gender](#patientsgender)
      - [patients.dateOfBirth](#patientsdateofbirth)
      - [patients.age](#patientsage)
      - [patients.healthInsuranceInformation](#patientshealthinsuranceinformation)
      - [patients.healthInsuranceInformation.healthInsuranceCompany](#patientshealthinsuranceinformationhealthinsurancecompany)
      - [patients.healthInsuranceInformation.healthInsuranceCompanyNumber](#patientshealthinsuranceinformationhealthinsurancecompanynumber)
      - [patients.healthInsuranceInformation.insuranceNumber](#patientshealthinsuranceinformationinsurancenumber)
      - [patients.initialAssessment](#patientsinitialassessment)
      - [patients.initialAssessment.rmi](#patientsinitialassessmentrmi)
      - [patients.initialAssessment.rmc](#patientsinitialassessmentrmc)
      - [patients.initialAssessment.pzc](#patientsinitialassessmentpzc)
      - [patients.initialAssessment.additionalInformation](#patientsinitialassessmentadditionalinformation)
      - [patients.infectionInformation](#patientsinfectioninformation)
      - [patients.infectionStatus](#patientsinfectionstatus)
      - [patients.transportNumber](#patientstransportnumber)
    + [informers](#informers)
      - [informers.name](#informersname)
      - [informers.surname](#informerssurname)
      - [informers.phone](#informersphone)
      - [informers.email](#informersemail)
      - [informers.address](#informersaddress)
      - [informers.address.street](#informersaddressstreet)
      - [informers.address.houseNumber](#informersaddresshousenumber)
      - [informers.address.postalCode](#informersaddresspostalcode)
      - [informers.address.city](#informersaddresscity)
      - [informers.address.cityDistrict](#informersaddresscitydistrict)
      - [informers.address.state](#informersaddressstate)
      - [informers.address.country](#informersaddresscountry)
      - [informers.additionalInfo](#informersadditionalinfo)
    + [Schema](#schema-1)

<!-- tocstop -->

# Überblick
Im Gegensatz zur Einsatzübergabe ohne Personendaten ist die Einsatzübergabe mit Patientendaten explizit dafür gedacht Einsätze zwischen Systemen übertragen zu können, die explizit mit Patientendaten arbeiten und mit den dafür spezifischen Zusatzinformationen von Patienten sinnvoll umgehen können. Typische Einsatzzwecke sind Einsatzübergaben an Rettungsdienstleitstellen.



 # App-Nachrichten



## Bestätigung oder Ablehnung einer Einsatzübergabeanfrage

<p>Bestätigung oder Ablehnung einer Einsatzübergabeanfrage</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer_with_patient/0.1/acknowledgement.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th><th>Required</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Yes</td></tr><tr><td colspan="2"><a href="#acknowledgedbydispatcherat">acknowledgedByDispatcherAt</a></td><td>String</td><td>Yes</td></tr><tr><td colspan="2"><a href="#status">status</a></td><td>String</td><td>Yes</td></tr><tr><td colspan="2"><a href="#cause">cause</a></td><td>String</td><td>No</td></tr></tbody></table>


### Example



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "acknowledgedByDispatcherAt": "2024-01-01T10:06:09",
    "status": "rejected",
    "cause": "Einsatzort ist unbekannt!"
}
```



<hr />


### sharedIncidentId


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




### acknowledgedByDispatcherAt


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




### status


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




### cause


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

### Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer_with_patient/0.1/acknowledgement.schema.json",
    "title": "Bestätigung oder Ablehnung einer Einsatzübergabeanfrage",
    "description": "Bestätigung oder Ablehnung einer Einsatzübergabeanfrage",
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





## Ein Einsatz mit Patientendaten

<p>Ein Einsatz mit Patientendaten</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer_with_patient/0.1/incident.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th><th>Required</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Yes</td></tr><tr><td colspan="2"><a href="#internalid">internalId</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#classifications">classifications</a></td><td>Array</td><td>No</td></tr><tr><td colspan="2"><a href="#issue">issue</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#flashinglights">flashingLights</a></td><td>Boolean</td><td>No</td></tr><tr><td colspan="2"><a href="#additionalinfo">additionalInfo</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#sentbydispatcherat">sentByDispatcherAt</a></td><td>String</td><td>Yes</td></tr><tr><td rowspan="2">missionLocation</td><td rowspan="2">Any of:</td><td>Object</td></tr><tr><td>Object</td></tr><tr><td colspan="2"><a href="#patients">patients</a></td><td>Array</td><td>Yes</td></tr><tr><td colspan="2"><a href="#informers">informers</a></td><td>Array</td><td>No</td></tr></tbody></table>


### Example



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "internalId": "f123456",
    "classifications": [
        "A1",
        "F2"
    ],
    "issue": "Notfall",
    "flashingLights": true,
    "additionalInfo": "Zusatzinformationen",
    "sentByDispatcherAt": "2024-01-01T10:05:08",
    "missionLocation": {
        "coordinate": {
            "lat": 65.453323,
            "lon": 14.542343
        },
        "address": {
            "street": "Musterstrasse",
            "houseNumber": "15b",
            "postalCode": "12345",
            "city": "Musterhausen",
            "cityDistrict": "Musterberg",
            "state": "Brandenburg",
            "country": "DE"
        },
        "object": {
            "name": "Abteilung IV, Haus 3",
            "additionalInfo": "Campus West"
        },
        "superiorObject": {
            "name": "Krankenhaus Musterstift",
            "additionalInfo": "Weitere Informationen"
        },
        "floor": "3. OG",
        "room": "412",
        "additionalInfo": "Weitere Informationen"
    },
    "patients": [
        {
            "name": "Mustermann",
            "surname": "Hans",
            "phone": "+49 30 123456",
            "email": "hans.mustermann@example.com",
            "address": {
                "street": "Musterstrasse",
                "houseNumber": "15b",
                "postalCode": "12345",
                "city": "Musterhausen",
                "cityDistrict": "Musterberg",
                "state": "Brandenburg",
                "country": "DE"
            },
            "additionalInfo": "weitere Informationen",
            "gender": "Male",
            "dateOfBirth": "19801230",
            "age": 55,
            "healthInsuranceInformation": {
                "healthInsuranceCompany": "Musterkasse",
                "healthInsuranceCompanyNumber": 101234567,
                "insuranceNumber": "S123456789"
            },
            "initialAssessment": {
                "rmi": 360,
                "rmc": 360543215,
                "pzc": 360401,
                "additionalInformation": "unspezifischer Notfall"
            },
            "infectionInformation": "potentiell ansteckend",
            "infectionStatus": true,
            "transportNumber": "123456"
        }
    ],
    "informers": [
        {
            "name": "Musterfrau",
            "surname": "Heike",
            "phone": "+49 30 234567",
            "email": "heike.musterfrau@example.com"
        }
    ]
}
```



<hr />


### sharedIncidentId


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




### internalId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Sender-interne ID des Einsatzes</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### classifications


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Stichwortkürzel des Einsatzes</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### issue


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Taktische Bewertung: Sachverhalt</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### flashingLights


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### sentByDispatcherAt


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Zeitpunkt an dem die Übergabe vom Disponenten angestoßen wurde</td>
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




### missionLocation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Ein Einsatz-Zielort</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Ein Einsatz-Zielort</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">Any of:</td><td>Object</td></tr><tr><td>Object</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>

#### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th><th>Required</th></tr></thead><tbody><tr><td colspan="2"><a href="#missionlocationcoordinate">coordinate</a></td><td>Object</td><td>No</td></tr><tr><td colspan="2"><a href="#missionlocationaddress">address</a></td><td>Object</td><td>No</td></tr><tr><td colspan="2"><a href="#missionlocationobject">object</a></td><td>Object</td><td>No</td></tr><tr><td colspan="2"><a href="#missionlocationsuperiorobject">superiorObject</a></td><td>Object</td><td>No</td></tr><tr><td colspan="2"><a href="#missionlocationfloor">floor</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#missionlocationroom">room</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#missionlocationadditionalinfo">additionalInfo</a></td><td>String</td><td>No</td></tr><tr><td colspan="2" rowspan="2">Any of:</td><td></td></tr><tr><td></td></tr></tbody></table>


#### missionLocation.coordinate


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Eine WGS84-Koordinate</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Eine WGS84-Koordinate.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



#### missionLocation.coordinate.lat


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Minimum</th>
      <td colspan="2">-90</td>
    </tr><tr>
      <th>Maximum</th>
      <td colspan="2">90</td>
    </tr>
  </tbody>
</table>




#### missionLocation.coordinate.lon


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Minimum</th>
      <td colspan="2">-180</td>
    </tr><tr>
      <th>Maximum</th>
      <td colspan="2">180</td>
    </tr>
  </tbody>
</table>





#### missionLocation.address


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Eine Adresse</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Eine Adresse</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



#### missionLocation.address.street


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




#### missionLocation.address.houseNumber


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### missionLocation.address.postalCode


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### missionLocation.address.city


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### missionLocation.address.cityDistrict


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### missionLocation.address.state


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### missionLocation.address.country


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





#### missionLocation.object


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Ein Einsatz-Zielobjekt</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Ein Einsatz-Zielobjekt</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



#### missionLocation.object.name


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




#### missionLocation.object.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





#### missionLocation.superiorObject


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Ein Einsatz-Zielobjekt</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Ein Einsatz-Zielobjekt</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



#### missionLocation.superiorObject.name


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




#### missionLocation.superiorObject.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





#### missionLocation.floor


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### missionLocation.room


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### missionLocation.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### missionLocation.0


<table class="jssd-property-table">
  <tbody>
    
    
  </tbody>
</table>




#### missionLocation.1


<table class="jssd-property-table">
  <tbody>
    
    
  </tbody>
</table>





### patients


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>



#### patients.name


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### patients.surname


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### patients.phone


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### patients.email


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### patients.address


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Eine Adresse</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Eine Adresse</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



#### patients.address.street


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




#### patients.address.houseNumber


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### patients.address.postalCode


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### patients.address.city


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### patients.address.cityDistrict


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### patients.address.state


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### patients.address.country


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





#### patients.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### patients.gender


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>Male</li><li>Female</li><li>Diverse</li></ul></td>
    </tr>
  </tbody>
</table>




#### patients.dateOfBirth


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date</td>
    </tr>
  </tbody>
</table>




#### patients.age


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




#### patients.healthInsuranceInformation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Informationen zum Versicherungsverhältnis</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Informationen zum Versicherungsverhältnis</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



#### patients.healthInsuranceInformation.healthInsuranceCompany


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### patients.healthInsuranceInformation.healthInsuranceCompanyNumber


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">999999999</td>
    </tr>
  </tbody>
</table>




#### patients.healthInsuranceInformation.insuranceNumber


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





#### patients.initialAssessment


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Ersteinschätzung</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Ersteinschätzung</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



#### patients.initialAssessment.rmi


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">999</td>
    </tr>
  </tbody>
</table>




#### patients.initialAssessment.rmc


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    
  </tbody>
</table>




#### patients.initialAssessment.pzc


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">999999</td>
    </tr>
  </tbody>
</table>




#### patients.initialAssessment.additionalInformation


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





#### patients.infectionInformation


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### patients.infectionStatus


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




#### patients.transportNumber


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





### informers


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>



#### informers.name


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### informers.surname


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### informers.phone


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### informers.email


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### informers.address


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Eine Adresse</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Eine Adresse</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



#### informers.address.street


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




#### informers.address.houseNumber


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### informers.address.postalCode


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### informers.address.city


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### informers.address.cityDistrict


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### informers.address.state


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




#### informers.address.country


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





#### informers.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>










<hr />

### Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer_with_patient/0.1/incident.schema.json",
    "title": "Ein Einsatz mit Patientendaten",
    "description": "Ein Einsatz mit Patientendaten",
    "required": [
        "sharedIncidentId",
        "sentByDispatcherAt",
        "patients",
        "missionLocation"
    ],
    "type": "object",
    "properties": {
        "sharedIncidentId": {
            "type": "string",
            "format": "uuid",
            "description": "global eindeutige UUID des Einsatzes"
        },
        "internalId": {
            "type": "string",
            "description": "Sender-interne ID des Einsatzes"
        },
        "classifications": {
            "type": "array",
            "description": "Stichwortkürzel des Einsatzes",
            "minItems": 1,
            "items": {
                "type": "string"
            }
        },
        "issue": {
            "type": "string",
            "description": "Taktische Bewertung: Sachverhalt"
        },
        "flashingLights": {
            "type": "boolean"
        },
        "additionalInfo": {
            "type": "string"
        },
        "sentByDispatcherAt": {
            "type": "string",
            "format": "date-time",
            "description": "Zeitpunkt an dem die Übergabe vom Disponenten angestoßen wurde"
        },
        "missionLocation": {
            "$ref": "#/$defs/location.schema.json"
        },
        "patients": {
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "#/$defs/patient.schema.json"
            }
        },
        "informers": {
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "#/$defs/person.schema.json"
            }
        }
    },
    "unevaluatedProperties": false,
    "examples": [
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "internalId": "f123456",
            "classifications": [
                "A1",
                "F2"
            ],
            "issue": "Notfall",
            "flashingLights": true,
            "additionalInfo": "Zusatzinformationen",
            "sentByDispatcherAt": "2024-01-01T10:05:08",
            "missionLocation": {
                "coordinate": {
                    "lat": 65.453323,
                    "lon": 14.542343
                },
                "address": {
                    "street": "Musterstrasse",
                    "houseNumber": "15b",
                    "postalCode": "12345",
                    "city": "Musterhausen",
                    "cityDistrict": "Musterberg",
                    "state": "Brandenburg",
                    "country": "DE"
                },
                "object": {
                    "name": "Abteilung IV, Haus 3",
                    "additionalInfo": "Campus West"
                },
                "superiorObject": {
                    "name": "Krankenhaus Musterstift",
                    "additionalInfo": "Weitere Informationen"
                },
                "floor": "3. OG",
                "room": "412",
                "additionalInfo": "Weitere Informationen"
            },
            "patients": [
                {
                    "name": "Mustermann",
                    "surname": "Hans",
                    "phone": "+49 30 123456",
                    "email": "hans.mustermann@example.com",
                    "address": {
                        "street": "Musterstrasse",
                        "houseNumber": "15b",
                        "postalCode": "12345",
                        "city": "Musterhausen",
                        "cityDistrict": "Musterberg",
                        "state": "Brandenburg",
                        "country": "DE"
                    },
                    "additionalInfo": "weitere Informationen",
                    "gender": "Male",
                    "dateOfBirth": "19801230",
                    "age": 55,
                    "healthInsuranceInformation": {
                        "healthInsuranceCompany": "Musterkasse",
                        "healthInsuranceCompanyNumber": 101234567,
                        "insuranceNumber": "S123456789"
                    },
                    "initialAssessment": {
                        "rmi": 360,
                        "rmc": 360543215,
                        "pzc": 360401,
                        "additionalInformation": "unspezifischer Notfall"
                    },
                    "infectionInformation": "potentiell ansteckend",
                    "infectionStatus": true,
                    "transportNumber": "123456"
                }
            ],
            "informers": [
                {
                    "name": "Musterfrau",
                    "surname": "Heike",
                    "phone": "+49 30 234567",
                    "email": "heike.musterfrau@example.com"
                }
            ]
        }
    ],
    "$defs": {
        "coordinate.schema.json": {
            "title": "Eine WGS84-Koordinate",
            "description": "Eine WGS84-Koordinate.",
            "required": [
                "lat",
                "lon"
            ],
            "type": "object",
            "properties": {
                "lat": {
                    "type": "number",
                    "minimum": -90,
                    "maximum": 90
                },
                "lon": {
                    "type": "number",
                    "minimum": -180,
                    "maximum": 180
                }
            },
            "unevaluatedProperties": false,
            "examples": [
                {
                    "lat": 65.453323,
                    "lon": 14.542343
                }
            ]
        },
        "address.schema.json": {
            "title": "Eine Adresse",
            "description": "Eine Adresse",
            "required": [
                "street"
            ],
            "type": "object",
            "properties": {
                "street": {
                    "type": "string"
                },
                "houseNumber": {
                    "type": "string"
                },
                "postalCode": {
                    "type": "string"
                },
                "city": {
                    "type": "string"
                },
                "cityDistrict": {
                    "type": "string"
                },
                "state": {
                    "type": "string"
                },
                "country": {
                    "type": "string"
                }
            },
            "unevaluatedProperties": false,
            "examples": [
                {
                    "street": "Musterstrasse",
                    "houseNumber": "15b",
                    "postalCode": "12345",
                    "city": "Musterhausen",
                    "cityDistrict": "Musterberg",
                    "state": "Brandenburg",
                    "country": "DE"
                }
            ]
        },
        "missionObject.schema.json": {
            "title": "Ein Einsatz-Zielobjekt",
            "description": "Ein Einsatz-Zielobjekt",
            "required": [
                "name"
            ],
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "additionalInfo": {
                    "type": "string"
                }
            },
            "unevaluatedProperties": false,
            "examples": [
                {
                    "name": "Krankenhaus Musterstift",
                    "additionalInfo": "Weitere Informationen"
                }
            ]
        },
        "location.schema.json": {
            "title": "Ein Einsatz-Zielort",
            "description": "Ein Einsatz-Zielort",
            "anyOf": [
                {
                    "required": [
                        "coordinate"
                    ]
                },
                {
                    "required": [
                        "address"
                    ]
                }
            ],
            "type": "object",
            "properties": {
                "coordinate": {
                    "$ref": "#/$defs/coordinate.schema.json"
                },
                "address": {
                    "$ref": "#/$defs/address.schema.json"
                },
                "object": {
                    "$ref": "#/$defs/missionObject.schema.json"
                },
                "superiorObject": {
                    "$ref": "#/$defs/missionObject.schema.json"
                },
                "floor": {
                    "type": "string"
                },
                "room": {
                    "type": "string"
                },
                "additionalInfo": {
                    "type": "string"
                }
            },
            "unevaluatedProperties": false,
            "examples": [
                {
                    "coordinate": {
                        "lat": 65.453323,
                        "lon": 14.542343
                    },
                    "address": {
                        "street": "Musterstrasse",
                        "houseNumber": "15b",
                        "postalCode": "12345",
                        "city": "Musterhausen",
                        "cityDistrict": "Musterberg",
                        "state": "Brandenburg",
                        "country": "DE"
                    },
                    "object": {
                        "name": "Abteilung IV, Haus 3",
                        "additionalInfo": "Campus West"
                    },
                    "superiorObject": {
                        "name": "Krankenhaus Musterstift",
                        "additionalInfo": "Weitere Informationen"
                    },
                    "floor": "3. OG",
                    "room": "412",
                    "additionalInfo": "Weitere Informationen"
                }
            ]
        },
        "healthInsuranceInformation.schema.json": {
            "title": "Informationen zum Versicherungsverhältnis",
            "description": "Informationen zum Versicherungsverhältnis",
            "required": [],
            "type": "object",
            "properties": {
                "healthInsuranceCompany": {
                    "type": "string"
                },
                "healthInsuranceCompanyNumber": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 999999999
                },
                "insuranceNumber": {
                    "type": "string"
                }
            },
            "unevaluatedProperties": false,
            "examples": [
                {
                    "healthInsuranceCompany": "Musterkasse",
                    "healthInsuranceCompanyNumber": 101234567,
                    "insuranceNumber": "S123456789"
                }
            ]
        },
        "initialAssessment.schema.json": {
            "title": "Ersteinschätzung",
            "description": "Ersteinschätzung",
            "required": [],
            "type": "object",
            "properties": {
                "rmi": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 999
                },
                "rmc": {
                    "type": "integer"
                },
                "pzc": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 999999
                },
                "additionalInformation": {
                    "type": "string"
                }
            },
            "unevaluatedProperties": false,
            "examples": [
                {
                    "rmi": 360,
                    "rmc": 360543215,
                    "pzc": 360401,
                    "additionalInformation": "unspezifischer Notfall"
                }
            ]
        },
        "patient.schema.json": {
            "title": "Ein Patient",
            "description": "Ein Patient",
            "required": [
                "name"
            ],
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "surname": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "address": {
                    "$ref": "#/$defs/address.schema.json"
                },
                "additionalInfo": {
                    "type": "string"
                },
                "gender": {
                    "type": "string",
                    "enum": [
                        "Male",
                        "Female",
                        "Diverse"
                    ]
                },
                "dateOfBirth": {
                    "type": "string",
                    "format": "date"
                },
                "age": {
                    "type": "number",
                    "minimum": 0
                },
                "healthInsuranceInformation": {
                    "$ref": "#/$defs/healthInsuranceInformation.schema.json"
                },
                "initialAssessment": {
                    "$ref": "#/$defs/initialAssessment.schema.json"
                },
                "infectionInformation": {
                    "type": "string"
                },
                "infectionStatus": {
                    "type": "boolean"
                },
                "transportNumber": {
                    "type": "string"
                }
            },
            "examples": [
                {
                    "name": "Mustermann",
                    "surname": "Hans",
                    "phone": "+49 30 123456",
                    "email": "hans.mustermann@example.com",
                    "address": {
                        "street": "Musterstrasse",
                        "houseNumber": "15b",
                        "postalCode": "12345",
                        "city": "Musterhausen",
                        "cityDistrict": "Musterberg",
                        "state": "Brandenburg",
                        "country": "DE"
                    },
                    "additionalInfo": "weitere Informationen",
                    "gender": "Male",
                    "dateOfBirth": "19801230",
                    "age": 55,
                    "healthInsuranceInformation": {
                        "healthInsuranceCompany": "Musterkasse",
                        "healthInsuranceCompanyNumber": 101234567,
                        "insuranceNumber": "S123456789"
                    },
                    "initialAssessment": {
                        "rmi": 360,
                        "rmc": 360543215,
                        "pzc": 360401,
                        "additionalInformation": "unspezifischer Notfall"
                    },
                    "infectionInformation": "potentiell ansteckend",
                    "infectionStatus": true,
                    "transportNumber": "123456"
                }
            ],
            "unevaluatedProperties": false
        },
        "person.schema.json": {
            "title": "Eine Person",
            "description": "Eine Person",
            "required": [
                "name"
            ],
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "surname": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "address": {
                    "$ref": "#/$defs/address.schema.json"
                },
                "additionalInfo": {
                    "type": "string"
                }
            },
            "examples": [
                {
                    "name": "Mustermann",
                    "surname": "Hans",
                    "phone": "+49 30 123456",
                    "email": "hans.mustermann@example.com",
                    "address": {
                        "street": "Musterstrasse",
                        "houseNumber": "15b",
                        "postalCode": "12345",
                        "city": "Musterhausen",
                        "cityDistrict": "Musterberg",
                        "state": "Brandenburg",
                        "country": "DE"
                    },
                    "additionalInfo": "weitere Informationen"
                }
            ]
        }
    }
}
```


