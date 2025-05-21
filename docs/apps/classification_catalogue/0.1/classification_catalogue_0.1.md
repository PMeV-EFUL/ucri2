# UCRI2-App Stichwort-Katalog-Abfrage

<!-- toc -->

- [Überblick](#uberblick)
- [App-Nachrichten](#app-nachrichten)
  * [App-Nachricht request - Eine Anfrage für den Stichwort-Katalog](#app-nachricht-request---eine-anfrage-fur-den-stichwort-katalog)
    + [Eigenschaften](#eigenschaften)
    + [Beispiel](#beispiel)
    + [requestId](#requestid)
    + [Schema](#schema)
  * [App-Nachricht response - Eine Antwort auf eine den Stichwort-Katalog-Anfrage](#app-nachricht-response---eine-antwort-auf-eine-den-stichwort-katalog-anfrage)
    + [Eigenschaften](#eigenschaften-1)
    + [Beispiel](#beispiel-1)
    + [requestId](#requestid-1)
    + [catalogueVersion](#catalogueversion)
    + [catalogue](#catalogue)
      - [Eigenschaften der Objekte im Array](#eigenschaften-der-objekte-im-array)
      - [catalogue.abbreviation](#catalogueabbreviation)
      - [catalogue.description](#cataloguedescription)
      - [catalogue.classificationGroup](#catalogueclassificationgroup)
    + [Schema](#schema-1)

<!-- tocstop -->

# Überblick
Der Anwendungsfall Stichwort-Katalog-Abfrage ermöglicht es, die in einem Leitsystem eingesetzten Einsatzstichworte abzurufen.
Da bundesweit kein einheitlicher Stichwortkatalog definiert ist, ist für einen
möglichst reibungslosen Einsatzdatenaustausch ein Mapping der
Stichworte essentiell.
Aus diesem Grund werden folgende Regeln definiert:
1. Die aussendende Leitstelle überträgt immer das in ihrem System
   definierte Stichwort.
2. Die empfangende Leitstelle mapped das fremde Stichwort auf ein in
   ihrem System definiertes Stichwort.


Das konkrete Mapping einzelner Stichwörter kann nicht automatisiert,
sondern nur manuell im Rahmen der Stammdatenpflege durch einen
(autorisierten) Mitarbeiter jeder beteiligten Leitstelle erfolgen.

Um das Stichwort Mapping zu optimieren, definiert diese App eine Methode zur Abfrage des gesamten Stichwortkatalogs
einer Partnerleitstelle. Hierbei muss ein Stichwort mit Kürzel und
Beschreibung (Langtext) übergeben werden.
Somit können typische Übertragungsfehler beim Austausch der
Stichwortkataloge außerhalb des Systems (z.B. eMail- oder FAX-Kommunikation) vermieden werden und für den autorisierten Mitarbeiter
innerhalb des Web-Service (UI-gestützte) Mapping-Funktionalitäten
realisiert werden.

Da Stichwortkataloge mit der Zeit geändert/aktualisiert werden, kann nicht
garantiert werden, dass zu jedem Zeitpunkt für jedes Stichwort ein
Mapping vorhanden ist. Daher sollen nicht gemappte Stichwörter
grundsätzlich an das empfangende Einsatzleitsystem durchgereicht
werden. Der Einsatz soll im empfangenden System mit dem Hinweis zur
Anzeige gebracht werden, dass das Stichwort dem System unbekannt ist,
damit der Disponent z. B. ein passendes vorhandenes Stichwort auswählt
oder die Klärung einleitet. Einsätze dürfen auf keinen Fall wegen
unbekannter Stichworte unberücksichtigt bleiben.

# App-Nachrichten


## App-Nachricht request - Eine Anfrage für den Stichwort-Katalog

<p>Eine Anfrage für den Stichwort-Katalog einer Partnerleitstelle</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/classification_catalogue/0.1/request.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#requestid">requestId</a></td><td>String</td><td>Ja</td></tr></tbody></table>


### Beispiel



```
{
    "requestId": "440e8400-e29b-41d4-a716-446655440000"
}
```



<hr />


### requestId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">global eindeutige requestId der Anfrage</td>
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

### Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/classification_catalogue/0.1/request.schema.json",
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
            "description": "global eindeutige requestId der Anfrage"
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





## App-Nachricht response - Eine Antwort auf eine den Stichwort-Katalog-Anfrage

<p>Eine Antwort auf eine den Stichwort-Katalog-Anfrage</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/classification_catalogue/0.1/response.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#requestid">requestId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#catalogueversion">catalogueVersion</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#catalogue">catalogue</a></td><td>Array (vom Typ Object)</td><td>Ja</td></tr></tbody></table>


### Beispiel



```
{
    "requestId": "440e8400-e29b-41d4-a716-446655440000",
    "catalogueVersion": "1.0-20250101",
    "catalogue": [
        {
            "abbreviation": "B1",
            "description": "kleiner Brand",
            "classificationGroup": "fw sofort"
        },
        {
            "abbreviation": "B2",
            "description": "großer Brand",
            "classificationGroup": "fw sofort"
        }
    ]
}
```



<hr />


### requestId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">global eindeutige requestId der Anfrage</td>
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




### catalogueVersion


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Katalogversion</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">die Versionskennung des Katalogs.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### catalogue


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Stichwortkürzel-Katalogeinträge</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Array (vom Typ Object)</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>

#### Eigenschaften der Objekte im Array
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#catalogueabbreviation">abbreviation</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#cataloguedescription">description</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#catalogueclassificationgroup">classificationGroup</a></td><td>String</td><td>Ja</td></tr></tbody></table>


#### catalogue.abbreviation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Stichwort-Kürzel</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Das Stichwortkürzel</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### catalogue.description


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Beschreibung</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Beschreibung zum Stichwort</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### catalogue.classificationGroup


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Stichwortgruppe</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Name der Stichwortgruppe der das Stichwort zugehört</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>










<hr />

### Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/classification_catalogue/0.1/response.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht response - Eine Antwort auf eine den Stichwort-Katalog-Anfrage",
    "description": "Eine Antwort auf eine den Stichwort-Katalog-Anfrage",
    "required": [
        "requestId",
        "catalogueVersion",
        "catalogue"
    ],
    "type": "object",
    "properties": {
        "requestId": {
            "type": "string",
            "format": "uuid",
            "description": "global eindeutige requestId der Anfrage"
        },
        "catalogueVersion": {
            "type": "string",
            "title": "Katalogversion",
            "description": "die Versionskennung des Katalogs."
        },
        "catalogue": {
            "type": "array",
            "description": "Stichwortkürzel-Katalogeinträge",
            "minItems": 1,
            "items": {
                "type": "object",
                "required": [
                    "abbreviation",
                    "description",
                    "classificationGroup"
                ],
                "properties": {
                    "abbreviation": {
                        "type": "string",
                        "title": "Stichwort-Kürzel",
                        "description": "Das Stichwortkürzel"
                    },
                    "description": {
                        "type": "string",
                        "title": "Beschreibung",
                        "description": "Beschreibung zum Stichwort"
                    },
                    "classificationGroup": {
                        "type": "string",
                        "title": "Stichwortgruppe",
                        "description": "Name der Stichwortgruppe der das Stichwort zugehört"
                    }
                }
            }
        }
    },
    "examples": [
        {
            "requestId": "440e8400-e29b-41d4-a716-446655440000",
            "catalogueVersion": "1.0-20250101",
            "catalogue": [
                {
                    "abbreviation": "B1",
                    "description": "kleiner Brand",
                    "classificationGroup": "fw sofort"
                },
                {
                    "abbreviation": "B2",
                    "description": "großer Brand",
                    "classificationGroup": "fw sofort"
                }
            ]
        }
    ],
    "$defs": {}
}
```
