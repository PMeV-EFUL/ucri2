# UCRI2-App Stichwort-Katalog-Abfrage

<!-- toc -->

- [Überblick](#uberblick)
- [App-Nachrichten](#app-nachrichten)
    + [Verwendete Datentypen](#verwendete-datentypen)
      - [Wahrheitswerte - type: boolean](#wahrheitswerte---type-boolean)
      - [Zahlen - type: number und type:integer](#zahlen---type-number-und-typeinteger)
      - [Zeichenketten - type: string](#zeichenketten---type-string)
      - [Objekte - type: object](#objekte---type-object)
      - [Listen - type: array](#listen---type-array)
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
### Verwendete Datentypen
In diesem Kapitel werden die in den Nachrichten-Schemata verwendeten Datentypen beschrieben. Die beschriebenen Datentypen kommen nicht alle auch notwendigerweise in den Schemata vor.

#### Wahrheitswerte - type: boolean
Mit dem Typ boolean werden JSON-Wahrheitswerte beschrieben, die möglichen Ausprägungen sind **true** und **false**.

#### Zahlen - type: number und type:integer
Im JSON-Schema werden Ganzzahlen (type:integer) und Kommazahlen (type:number) separat beschrieben, wobei als Dezimalseparator ein Punkt zum Einsatz kommt.
Da in JSON selbst aber nur ein gemeinsamer Zahlentyp für Ganz- und Kommazahlen existiert, können Ganzzahlen auch mit einem Dezimalseparator angegeben werden, für den Nachkommateil gilt dann aber, dass dieser 0 sein muss (z.B. sind sowohl **1.0** als auch **1** gültige Ausprägungen für eine Ganzzahl).
Für beide Typen kann der gültige Zahlenbereich mit den Attributen "minimum","exlusiveMinimum","maximum" und "exclusiveMaximum" eingeschränkt werden).

#### Zeichenketten - type: string
Zeichenketten werden über den type: string abgebildet und immer im Unicode-Format dargestellt. Für Zeichenketten werden verschiedene Untertypen genutzt, die über die Attribute "format" und "enum" (im Falle von Enumerationen) festgelegt und im Folgenden beschrieben werden:
- **Längenbeschränkte Zeichenketten**: Über die Attribute "minLength" und "maxLength" kann die Länge der Zeichenkette beschränkt werden.
- **Enumerationen**: Mit dem Attribut "enum" kann eine Liste von gültigen Ausprägungen festgelegt werden.
- **Datumsangaben**: Mit dem Attribut "format:date" werden ISO8601-konforme tagesgenaue Datumsangaben dargestellt (z.B. "2025-12-01" für den 1.Dezember 2025). Mit dem Attribut "format:date-time" werden ISO8601-konforme Zeitstempel (z.B. "2018-11-13T20:20:39") dargestellt. Als Zeitzone ist hierbei UTC festgelegt.
- **UUIDs**: Mit dem Attribut "format:uuid" werden UUIDs dargestellt, z.B. ("550e8400-e29b-41d4-a716-446655440000").
- **Weitere formateingeschränkte Zeichenketten**: Über das Attribut "pattern" kann ein regulärer Ausdruck (regEx) festgelegt werden, welcher gültige Ausprägungen beschreibt. Um die Verständlichkeit der Spezifikation zu erhöhen, werden solche regulären Ausdrück immer im "description"-Attribut einer Eigenschaft beschrieben, z.B. würde für **pattern:"^[0-9]*$"** die "description" als Erklärung "Der Wert muss ausschliesslich aus Ziffern bestehen" vorhanden sein.

#### Objekte - type: object
JSON-Objekte werden über "type: object" beschrieben. Hierbei sind in jedem Falle nur die im "properties"-Attribut beschriebenen Objekteigenschaften gültig, weitere Eigenschaften sind nicht zulässig, dies wird über das Attribut "unevaluatedProperties": false festgelegt.

Die obligaten Eigenschaften sind als Liste im Attribut "required" hinterlegt, alle Eigenschaften, die nicht obligat sind, sind optional.

Die Anzahl an minimal vorhandenen Eigenschaften kann über das Attribut "minProperties" festgelegt werden.
#### Listen - type: array
JSON-Listen (arrays) werden über "type: array" beschrieben. Hierbei wird der Typ der Listenelemente über das Attribut "items" beschrieben. Gemischt typisierte Listen sind generell unzulässig. Im Attribut "minItems" kann die minimale Anzahl von Listenelementen beschränkt werden.


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
      <th>Titel</th>
      <td colspan="2">Stichwortkürzel-Katalogeinträge</td>
    </tr>
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
            "title": "Anfrage-UUID",
            "description": "global eindeutige UUID der Anfrage"
        },
        "catalogueVersion": {
            "type": "string",
            "title": "Katalogversion",
            "description": "die Versionskennung des Katalogs."
        },
        "catalogue": {
            "type": "array",
            "title": "Stichwortkürzel-Katalogeinträge",
            "description": "Stichwortkürzel-Katalogeinträge",
            "minItems": 1,
            "items": {
                "type": "object",
                "title": "Stichwortkürzel-Katalogeintrag",
                "description": "Stichwortkürzel-Katalogeintrag",
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
