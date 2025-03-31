

# Ersteinschätzung

<p>Ersteinschätzung</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/initialAssessment.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#rmi">rmi</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#rmc">rmc</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#pzc">pzc</a></td><td>Integer</td></tr><tr><td colspan="2"><a href="#additionalinformation">additionalInformation</a></td><td>String</td></tr></tbody></table>


## Example



```
{
    "rmi": 360,
    "rmc": 360543215,
    "pzc": 360401,
    "additionalInformation": "unspezifischer Notfall"
}
```



<hr />


## rmi


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




## rmc


<table class="jssd-property-table">
  <tbody>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




## pzc


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




## additionalInformation


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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/initialAssessment.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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
}
```


