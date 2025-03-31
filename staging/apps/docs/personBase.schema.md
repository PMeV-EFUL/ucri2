

# Eine Person

<p>Eine Person</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/personBase.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#name">name</a></td><td>String</td></tr><tr><td colspan="2"><a href="#surname">surname</a></td><td>String</td></tr><tr><td colspan="2"><a href="#phone">phone</a></td><td>String</td></tr><tr><td colspan="2"><a href="#email">email</a></td><td>String</td></tr><tr><td colspan="2"><a href="#address">address</a></td><td>Object (of type <a href="address.schema.html">Eine Adresse</a>)</td></tr><tr><td colspan="2"><a href="#additionalinfo">additionalInfo</a></td><td>String</td></tr></tbody></table>


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
    "additionalInfo": "weitere Informationen"
}
```



<hr />


## name


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>




## surname


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## phone


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## email


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## address

  <p>Defined in <a href="address.schema.html">address.schema.html</a></p>

<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/address.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">Eine Adresse</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Eine Adresse</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object (of type <a href="address.schema.html">Eine Adresse</a>)</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#addressstreet">street</a></td><td>String</td></tr><tr><td colspan="2"><a href="#addresshousenumber">houseNumber</a></td><td>String</td></tr><tr><td colspan="2"><a href="#addresspostalcode">postalCode</a></td><td>String</td></tr><tr><td colspan="2"><a href="#addresscity">city</a></td><td>String</td></tr><tr><td colspan="2"><a href="#addresscitydistrict">cityDistrict</a></td><td>String</td></tr><tr><td colspan="2"><a href="#addressstate">state</a></td><td>String</td></tr><tr><td colspan="2"><a href="#addresscountry">country</a></td><td>String</td></tr></tbody></table>



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









<hr />

## Schema
```
{
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/personBase.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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
}
```


