

# Eine Übergabe-Anfrage für einen Patienten

<p>Eine Übergabe-Anfrage für einen Patienten, der telefonisch erreichbar ist</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transfer_new/0.1/incident.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th><th>Required</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Yes</td></tr><tr><td colspan="2"><a href="#internalid">internalId</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#issue">issue</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#additionalinfo">additionalInfo</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#sentbydispatcherat">sentByDispatcherAt</a></td><td>String</td><td>Yes</td></tr><tr><td colspan="2"><a href="#patient">patient</a></td><td>Object</td><td>Yes</td></tr><tr><td colspan="2"><a href="#informers">informers</a></td><td>Array</td><td>No</td></tr></tbody></table>


## Example



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "internalId": "f123456",
    "issue": "consultation_needed",
    "additionalInfo": "Zusatzinformationen",
    "sentByDispatcherAt": "2024-01-01T10:05:08",
    "patient": {
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
    },
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




## internalId


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




## issue


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Übergabegrund</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>consultation_needed</li></ul></td>
    </tr>
  </tbody>
</table>




## additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## sentByDispatcherAt


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




## patient


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Ein Patient</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Ein Patient</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th><th>Required</th></tr></thead><tbody><tr><td colspan="2"><a href="#patientname">name</a></td><td>String</td><td>Yes</td></tr><tr><td colspan="2"><a href="#patientsurname">surname</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#patientphone">phone</a></td><td>String</td><td>Yes</td></tr><tr><td colspan="2"><a href="#patientemail">email</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#patientaddress">address</a></td><td>Object</td><td>No</td></tr><tr><td colspan="2"><a href="#patientadditionalinfo">additionalInfo</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#patientgender">gender</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#patientdateofbirth">dateOfBirth</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#patientage">age</a></td><td>Number</td><td>No</td></tr><tr><td colspan="2"><a href="#patienthealthinsuranceinformation">healthInsuranceInformation</a></td><td>Object</td><td>No</td></tr><tr><td colspan="2"><a href="#patientinitialassessment">initialAssessment</a></td><td>Object</td><td>No</td></tr><tr><td colspan="2"><a href="#patientinfectioninformation">infectionInformation</a></td><td>String</td><td>No</td></tr><tr><td colspan="2"><a href="#patientinfectionstatus">infectionStatus</a></td><td>Boolean</td><td>No</td></tr><tr><td colspan="2"><a href="#patienttransportnumber">transportNumber</a></td><td>String</td><td>No</td></tr></tbody></table>


### patient.name


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




### patient.surname


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.phone


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




### patient.email


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.address


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



### patient.address.street


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




### patient.address.houseNumber


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.address.postalCode


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.address.city


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.address.cityDistrict


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.address.state


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.address.country


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





### patient.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.gender


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>Male</li><li>Female</li><li>Diverse</li></ul></td>
    </tr>
  </tbody>
</table>




### patient.dateOfBirth


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date</td>
    </tr>
  </tbody>
</table>




### patient.age


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.healthInsuranceInformation


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
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### patient.healthInsuranceInformation.healthInsuranceCompany


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.healthInsuranceInformation.healthInsuranceCompanyNumber


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">999999999</td>
    </tr>
  </tbody>
</table>




### patient.healthInsuranceInformation.insuranceNumber


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





### patient.initialAssessment


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
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### patient.initialAssessment.rmi


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">999</td>
    </tr>
  </tbody>
</table>




### patient.initialAssessment.rmc


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.initialAssessment.pzc


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">999999</td>
    </tr>
  </tbody>
</table>




### patient.initialAssessment.additionalInformation


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





### patient.infectionInformation


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.infectionStatus


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### patient.transportNumber


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





## informers


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



### informers.name


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### informers.surname


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### informers.phone


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### informers.email


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### informers.address


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



### informers.address.street


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




### informers.address.houseNumber


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### informers.address.postalCode


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### informers.address.city


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### informers.address.cityDistrict


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### informers.address.state


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### informers.address.country


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





### informers.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>










<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transfer_new/0.1/incident.schema.json",
    "title": "Eine Übergabe-Anfrage für einen Patienten",
    "description": "Eine Übergabe-Anfrage für einen Patienten, der telefonisch erreichbar ist",
    "required": [
        "sharedIncidentId",
        "sentByDispatcherAt",
        "patient"
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
        "issue": {
            "type": "string",
            "enum": [
                "consultation_needed"
            ],
            "description": "Übergabegrund"
        },
        "additionalInfo": {
            "type": "string"
        },
        "sentByDispatcherAt": {
            "type": "string",
            "format": "date-time",
            "description": "Zeitpunkt an dem die Übergabe vom Disponenten angestoßen wurde"
        },
        "patient": {
            "$ref": "#/$defs/patient.schema.json",
            "type": "object",
            "required": [
                "name",
                "phone"
            ]
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
            "issue": "consultation_needed",
            "additionalInfo": "Zusatzinformationen",
            "sentByDispatcherAt": "2024-01-01T10:05:08",
            "patient": {
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
            },
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


