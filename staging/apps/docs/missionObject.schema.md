

# Ein Einsatz-Zielobjekt

<p>Ein Einsatz-Zielobjekt</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/missionObject.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#name">name</a></td><td>String</td></tr><tr><td colspan="2"><a href="#additionalinfo">additionalInfo</a></td><td>String</td></tr></tbody></table>


## Example



```
{
    "name": "Krankenhaus Musterstift",
    "additionalInfo": "Weitere Informationen"
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/missionObject.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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
}
```


