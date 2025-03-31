

# Eine WGS84-Koordinate

<p>Eine WGS84-Koordinate.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/coordinate.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#lat">lat</a></td><td>Number</td></tr><tr><td colspan="2"><a href="#lon">lon</a></td><td>Number</td></tr></tbody></table>


## Example



```
{
    "lat": 65.453323,
    "lon": 14.542343
}
```



<hr />


## lat


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




## lon


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









<hr />

## Schema
```
{
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/building_blocks/0.1/coordinate.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
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
}
```


