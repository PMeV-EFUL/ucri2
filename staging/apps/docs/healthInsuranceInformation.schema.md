

# Informationen zum Versicherungsverhältnis

<p>Informationen zum Versicherungsverhältnis</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/healthInsuranceInformation.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#healthinsurancecompany">healthInsuranceCompany</a></td><td>String</td></tr><tr><td colspan="2"><a href="#healthinsurancecompanynumber">healthInsuranceCompanyNumber</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#insurancenumber">insuranceNumber</a></td><td>String</td></tr></tbody></table>


## Example



```
{
    "healthInsuranceCompany": "Musterkasse",
    "healthInsuranceCompanyNumber": 101234567,
    "insuranceNumber": "S123456789"
}
```



<hr />


## healthInsuranceCompany


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## healthInsuranceCompanyNumber


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




## insuranceNumber


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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/healthInsuranceInformation.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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
}
```


