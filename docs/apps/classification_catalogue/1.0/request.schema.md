

# App-Nachricht request - Eine Anfrage für den Stichwort-Katalog

<p>Eine Anfrage für den Stichwort-Katalog einer Partnerleitstelle</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/classification_catalogue/1.0/request.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#requestid">requestId</a></td><td>String</td><td>Ja</td></tr></tbody></table>


## Beispiel



```
{
    "requestId": "440e8400-e29b-41d4-a716-446655440000"
}
```



<hr />


## requestId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Anfrage-UUID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">global eindeutige UUID der Anfrage</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uuid</td>
    </tr>
  </tbody>
</table>









<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/classification_catalogue/1.0/request.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht request - Eine Anfrage für den Stichwort-Katalog",
    "description": "Eine Anfrage für den Stichwort-Katalog einer Partnerleitstelle",
    "required": [
        "requestId"
    ],
    "type": "object",
    "properties": {
        "requestId": {
            "type": "string",
            "format": "uuid",
            "title": "Anfrage-UUID",
            "description": "global eindeutige UUID der Anfrage"
        }
    },
    "examples": [
        {
            "requestId": "440e8400-e29b-41d4-a716-446655440000"
        }
    ],
    "$defs": {}
}
```


