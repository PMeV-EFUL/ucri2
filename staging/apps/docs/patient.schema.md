

# Ein Patient

<p>Ein Patient</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/patient.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#gender">gender</a></td><td>String</td></tr><tr><td colspan="2"><a href="#dateofbirth">dateOfBirth</a></td><td>String</td></tr><tr><td colspan="2"><a href="#age">age</a></td><td>Number</td></tr><tr><td colspan="2"><a href="#healthinsuranceinformation">healthInsuranceInformation</a></td><td>Object (of type <a href="healthInsuranceInformation.schema.html">Informationen zum Versicherungsverhältnis</a>)</td></tr><tr><td colspan="2"><a href="#initialassessment">initialAssessment</a></td><td>Object (of type <a href="initialAssessment.schema.html">Ersteinschätzung</a>)</td></tr><tr><td colspan="2"><a href="#infectioninformation">infectionInformation</a></td><td>String</td></tr><tr><td colspan="2"><a href="#infectionstatus">infectionStatus</a></td><td>Boolean</td></tr><tr><td colspan="2"><a href="#transportnumber">transportNumber</a></td><td>String</td></tr></tbody></table>


## Example



```
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
```



<hr />


## gender


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




## dateOfBirth


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




## age


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## healthInsuranceInformation

  <p>Defined in <a href="healthInsuranceInformation.schema.html">healthInsuranceInformation.schema.html</a></p>

<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/healthInsuranceInformation.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">Informationen zum Versicherungsverhältnis</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Informationen zum Versicherungsverhältnis</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object (of type <a href="healthInsuranceInformation.schema.html">Informationen zum Versicherungsverhältnis</a>)</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#healthinsuranceinformationhealthinsurancecompany">healthInsuranceCompany</a></td><td>String</td></tr><tr><td colspan="2"><a href="#healthinsuranceinformationhealthinsurancecompanynumber">healthInsuranceCompanyNumber</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#healthinsuranceinformationinsurancenumber">insuranceNumber</a></td><td>String</td></tr></tbody></table>



## initialAssessment

  <p>Defined in <a href="initialAssessment.schema.html">initialAssessment.schema.html</a></p>

<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/initialAssessment.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">Ersteinschätzung</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Ersteinschätzung</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object (of type <a href="initialAssessment.schema.html">Ersteinschätzung</a>)</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#initialassessmentrmi">rmi</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#initialassessmentrmc">rmc</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#initialassessmentpzc">pzc</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#initialassessmentadditionalinformation">additionalInformation</a></td><td>String</td></tr></tbody></table>



## infectionInformation


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## infectionStatus


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## transportNumber


<table class="jssd-property-table">
  <tbody>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/patient.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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
}
```


