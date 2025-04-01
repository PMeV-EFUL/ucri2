

# Ein Einsatz mit Patientendaten

<p>Ein Einsatz mit Patientendaten</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer_with_patient/0.1/incident.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td></tr><tr><td colspan="2"><a href="#internalid">internalId</a></td><td>String</td></tr><tr><td colspan="2"><a href="#classifications">classifications</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#issue">issue</a></td><td>String</td></tr><tr><td colspan="2"><a href="#incidentflashinglights">IncidentFlashingLights</a></td><td>Boolean</td></tr><tr><td colspan="2"><a href="#additionalinfo">additionalInfo</a></td><td>String</td></tr><tr><td colspan="2"><a href="#sentbydispatcherat">sentByDispatcherAt</a></td><td>String</td></tr><tr><td colspan="2"><a href="#missionlocation">missionLocation</a></td><td></td></tr><tr><td colspan="2"><a href="#patients">patients</a></td><td>Array</td></tr><tr><td colspan="2"><a href="#informers">informers</a></td><td>Array</td></tr></tbody></table>


## Example



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "internalId": "f123456",
    "classifications": [
        "A1",
        "F2"
    ],
    "issue": "Notfall",
    "IncidentFlashingLights": true,
    "additionalInfo": "Zusatzinformationen",
    "sentByDispatcherAt": "2024-01-01T10:05:08",
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




## classifications


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




## issue


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




## IncidentFlashingLights


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
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




## missionLocation

  <p>Defined in <a href="https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/patient.schema.json">patient.schema.json</a></p>

<table class="jssd-property-table">
  <tbody>
    
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## patients

  <p>Defined in <a href="https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/patient.schema.json">patient.schema.json</a></p>

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




## informers

  <p>Defined in <a href="https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/person.schema.json">person.schema.json</a></p>

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









<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer_with_patient/0.1/incident.schema.json",
    "title": "Ein Einsatz mit Patientendaten",
    "description": "Ein Einsatz mit Patientendaten",
    "required": [
        "sharedIncidentId",
        "sentByDispatcherAt",
        "patients"
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
        "IncidentFlashingLights": {
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
            "$ref": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/patient.schema.json"
        },
        "patients": {
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/patient.schema.json"
            }
        },
        "informers": {
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/person.schema.json"
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
            "IncidentFlashingLights": true,
            "additionalInfo": "Zusatzinformationen",
            "sentByDispatcherAt": "2024-01-01T10:05:08",
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
        "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/address.schema.json": {
            "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/address.schema.json",
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
        "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/personBase.schema.json": {
            "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/personBase.schema.json",
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
                    "$ref": "address.schema.json"
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
        },
        "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/healthInsuranceInformation.schema.json": {
            "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/healthInsuranceInformation.schema.json",
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
        "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/initialAssessment.schema.json": {
            "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/initialAssessment.schema.json",
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
        "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/patient.schema.json": {
            "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/patient.schema.json",
            "title": "Ein Patient",
            "description": "Ein Patient",
            "$ref": "personBase.schema.json",
            "required": [
                "name"
            ],
            "type": "object",
            "properties": {
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
                    "$ref": "healthInsuranceInformation.schema.json"
                },
                "initialAssessment": {
                    "$ref": "initialAssessment.schema.json"
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
            "unevaluatedProperties": false,
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
            ]
        },
        "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/person.schema.json": {
            "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/person.schema.json",
            "$ref": "personBase.schema.json",
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


