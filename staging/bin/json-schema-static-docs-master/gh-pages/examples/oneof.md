---
title: One-of
description: Example schema to demonstrate the use of the oneOf keyword

---


# One-of

<p>Example schema to demonstrate the use of the oneOf keyword</p>

<table>
<tbody>
<tr><th>$id</th><td>oneof.yml</td></tr>
<tr><th>$schema</th><td>http://json-schema.org/draft-07/schema#</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td rowspan="2">justOne</td><td rowspan="2">One of:</td><td>Object</td></tr><tr><td>Object</td></tr></tbody></table>


## Example



```
{
    "justOne": {
        "propertyA": "With a string value"
    }
}
```


## Example



```
{
    "justOne": {
        "propertyB": 123,
        "propertyC": 456
    }
}
```



<hr />


## justOne


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Just One</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Property that demonstrates oneOf</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>Object</td></tr><tr><td>Object</td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>



### justOne.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">justOne option 0 with a single property</td>
    </tr>
    
    
  </tbody>
</table>



### justOne.0.propertyA


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Property A</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





### justOne.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">justOne option 1 with two properties</td>
    </tr>
    
    
  </tbody>
</table>



### justOne.1.propertyB


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Property B</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    
  </tbody>
</table>




### justOne.1.propertyC


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Property C</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Integer</td></tr>
    
  </tbody>
</table>











<hr />

## Schema
```
{
    "$id": "oneof.yml",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "One-of",
    "description": "Example schema to demonstrate the use of the oneOf keyword",
    "type": "object",
    "examples": [
        {
            "justOne": {
                "propertyA": "With a string value"
            }
        },
        {
            "justOne": {
                "propertyB": 123,
                "propertyC": 456
            }
        }
    ],
    "properties": {
        "justOne": {
            "title": "Just One",
            "description": "Property that demonstrates oneOf",
            "type": "object",
            "oneOf": [
                {
                    "title": "justOne option 0 with a single property",
                    "properties": {
                        "propertyA": {
                            "type": "string",
                            "title": "Property A"
                        }
                    },
                    "required": [
                        "propertyA"
                    ]
                },
                {
                    "title": "justOne option 1 with two properties",
                    "properties": {
                        "propertyB": {
                            "type": "integer",
                            "title": "Property B"
                        },
                        "propertyC": {
                            "type": "integer",
                            "title": "Property C"
                        }
                    },
                    "required": [
                        "propertyB",
                        "propertyC"
                    ]
                }
            ]
        }
    },
    "additionalProperties": false,
    "required": [
        "justOne"
    ]
}
```


