

# Eine Adresse

<p>Eine Adresse</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/address.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#street">street</a></td><td>String</td></tr><tr><td colspan="2"><a href="#housenumber">houseNumber</a></td><td>String</td></tr><tr><td colspan="2"><a href="#postalcode">postalCode</a></td><td>String</td></tr><tr><td colspan="2"><a href="#city">city</a></td><td>String</td></tr><tr><td colspan="2"><a href="#citydistrict">cityDistrict</a></td><td>String</td></tr><tr><td colspan="2"><a href="#state">state</a></td><td>String</td></tr><tr><td colspan="2"><a href="#country">country</a></td><td>String</td></tr></tbody></table>


## Example



```
{
    "street": "Musterstrasse",
    "houseNumber": "15b",
    "postalCode": "12345",
    "city": "Musterhausen",
    "cityDistrict": "Musterberg",
    "state": "Brandenburg",
    "country": "DE"
}
```



<hr />


## street


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




## houseNumber


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## postalCode


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## city


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## cityDistrict


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## state


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## country


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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/address.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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
}
```


