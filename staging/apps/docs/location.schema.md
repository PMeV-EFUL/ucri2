

# Ein Einsatz-Zielort

<p>Ein Einsatz-Zielort</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/location.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#coordinate">coordinate</a></td><td>Object (of type <a href="coordinate.schema.html">Eine WGS84-Koordinate</a>)</td></tr><tr><td colspan="2"><a href="#address">address</a></td><td>Object (of type <a href="address.schema.html">Eine Adresse</a>)</td></tr><tr><td colspan="2"><a href="#object">object</a></td><td>Object (of type <a href="missionObject.schema.html">Ein Einsatz-Zielobjekt</a>)</td></tr><tr><td colspan="2"><a href="#superiorobject">superiorObject</a></td><td>Object (of type <a href="missionObject.schema.html">Ein Einsatz-Zielobjekt</a>)</td></tr><tr><td colspan="2"><a href="#floor">floor</a></td><td>String</td></tr><tr><td colspan="2"><a href="#room">room</a></td><td>String</td></tr><tr><td colspan="2"><a href="#additionalinfo">additionalInfo</a></td><td>String</td></tr><tr><td colspan="2" rowspan="2">Any of:</td><td></td></tr><tr><td></td></tr></tbody></table>


## Example



```
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
```



<hr />


## coordinate

  <p>Defined in <a href="coordinate.schema.html">coordinate.schema.html</a></p>

<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/coordinate.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">Eine WGS84-Koordinate</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Eine WGS84-Koordinate.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object (of type <a href="coordinate.schema.html">Eine WGS84-Koordinate</a>)</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#coordinatelat">lat</a></td><td>Number</td></tr><tr><td colspan="2"><a href="#coordinatelon">lon</a></td><td>Number</td></tr></tbody></table>



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



## object

  <p>Defined in <a href="missionObject.schema.html">missionObject.schema.html</a></p>

<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/missionObject.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">Ein Einsatz-Zielobjekt</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Ein Einsatz-Zielobjekt</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object (of type <a href="missionObject.schema.html">Ein Einsatz-Zielobjekt</a>)</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#objectname">name</a></td><td>String</td></tr><tr><td colspan="2"><a href="#objectadditionalinfo">additionalInfo</a></td><td>String</td></tr></tbody></table>



## superiorObject

  <p>Defined in <a href="missionObject.schema.html">missionObject.schema.html</a></p>

<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>$id</th>
      <td colspan="2">https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/missionObject.schema.json</td>
    </tr>
    <tr>
      <th>Title</th>
      <td colspan="2">Ein Einsatz-Zielobjekt</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Ein Einsatz-Zielobjekt</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object (of type <a href="missionObject.schema.html">Ein Einsatz-Zielobjekt</a>)</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#superiorobjectname">name</a></td><td>String</td></tr><tr><td colspan="2"><a href="#superiorobjectadditionalinfo">additionalInfo</a></td><td>String</td></tr></tbody></table>



## floor


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## room


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">String</td></tr>
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









<hr />

## Schema
```
{
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/location.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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
            "$ref": "coordinate.schema.json"
        },
        "address": {
            "$ref": "address.schema.json"
        },
        "object": {
            "$ref": "missionObject.schema.json"
        },
        "superiorObject": {
            "$ref": "missionObject.schema.json"
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
}
```


