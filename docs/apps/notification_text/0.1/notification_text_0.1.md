---
pdf_options:
  format: a4
  margin: 30mm 20mm
  printBackground: true
  headerTemplate: |-
    <style>
      section {
        margin: 0 auto;
        font-family: system-ui;
        font-size: 11px;
      }
    </style>
    <section>
      Spezifikation UCRI2-App Einsatzbezogene Textnachricht (notification_text) Version 1.0
    </section>
  footerTemplate: |-
    <section>
      <div>
        Seite <span class="pageNumber"></span>
        von <span class="totalPages"></span>
      </div>
    </section>
---
# UCRI2-App Einsatzbezogene Textnachricht

<!-- toc -->

- [Überblick](#uberblick)
- [Ablaufbeschreibung](#ablaufbeschreibung)
- [Partielle Umsetzung](#partielle-umsetzung)
- [App-Nachrichten](#app-nachrichten)
    + [Verwendete Datentypen](#verwendete-datentypen)
      - [Wahrheitswerte - type: boolean](#wahrheitswerte---type-boolean)
      - [Zahlen - type: number und type:integer](#zahlen---type-number-und-typeinteger)
      - [Zeichenketten - type: string](#zeichenketten---type-string)
      - [Objekte - type: object](#objekte---type-object)
      - [Listen - type: array](#listen---type-array)
  * [App-Nachricht notification - Einsatzbezogene Textnachrichten](#app-nachricht-notification---einsatzbezogene-textnachrichten)
    + [Eigenschaften](#eigenschaften)
    + [Beispiel](#beispiel)
    + [sharedIncidentId](#sharedincidentid)
    + [notifications](#notifications)
      - [Eigenschaften der Objekte im Array](#eigenschaften-der-objekte-im-array)
      - [notifications.timestamp](#notificationstimestamp)
      - [notifications.message](#notificationsmessage)
      - [notifications.category](#notificationscategory)
      - [notifications.silent](#notificationssilent)
    + [Schema](#schema)

<!-- tocstop -->

# Überblick
Diese UCRI2-App ermöglicht es, parallel zu anderen einsatzbezogenen Apps einen dynamischen Austausch von Textnachrichten zu unterstützen. Einzige Voraussetzung hierbei ist, dass für einen Einsatz bereits eine Übergabenachricht mit einer sharedIncidentId übermittelt wurde und diese sharedIncidentId dann in der Nachricht genutzt wird.
Nachrichten, die bereits existierende App-Nachrichten nachbilden (z.b. Einsatzannahme/-Ablehnung oder Einsatzendnachrichten) sind **nicht** als einsatzbezogene Textnachrichten zu übermitteln.

# Ablaufbeschreibung

1. A->B: Einsatzbezogene Textnachricht übermitteln

Falls für gesendete Nachrichten eine technische Empfangsquittierung gewünscht ist, ist hierzu die entsprechende Funktion der UCRI2-Transportschicht zu nutzen.
Daher sind in dieser App keine eigenen Nachrichten zur technischen Empfangsquittierung definiert.

# Partielle Umsetzung
Für diese App ist keine partielle Umsetzung möglich. Teilnehmer, die Nachrichten versenden wollen, müssen auch den Empfang von Nachrichten unterstützten.

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
- **Längenbeschränkte Zeichenketten**: Über die Attribute "minLength" und "maxLength" kann die Länge der Zeichenkette beschränkt werden. Diese Attribute werden jedoch kaum verwendet, da davon ausgegangen wird, dass die an UCRI angeschlossenen Applikationen gebrauchstaugliche Feldlängen für Strings vorsehen. Vor allem aber für Zeichenketten, die als Freitext genutzt werden, sollte darauf geachtet werden, dass eine Zeichenlänge von 2000 Zeichen nicht überschritten wird, da davon auszugehen ist, dass die Zielsysteme zu lange Zeichenketten abschneiden.
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


## App-Nachricht notification - Einsatzbezogene Textnachrichten

<p>Einsatzbezogene Textnachrichten</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/notification_text/0.1/notification.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#notifications">notifications</a></td><td>Array (vom Typ Object)</td><td>Ja</td></tr></tbody></table>


### Beispiel



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "notifications": [
        {
            "timestamp": "2024-01-01T10:06:09Z",
            "message": "NEF wurde durch Einsatzkräfte vor Ort nachalarmiert",
            "category": "information",
            "silent": true
        }
    ]
}
```



<hr />


### sharedIncidentId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">globale Einsatz-UUID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">global eindeutige UUID des Einsatzes, auf den sich die Benachrichtigungen beziehem.</td>
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




### notifications


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Nachrichten</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Liste der einsatzbezogenen Nachrichten.</td>
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
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#notificationstimestamp">timestamp</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#notificationsmessage">message</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#notificationscategory">category</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#notificationssilent">silent</a></td><td>Boolean</td><td>Nein</td></tr></tbody></table>


#### notifications.timestamp


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Zeitstempel</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zeitpunkt an dem Benachrichtigung senderseitig hinzugefügt wurde</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




#### notifications.message


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Benachrichtigungstext</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Inhalt der Benachrichtigung</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### notifications.category


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Benachrichtigungskategorie</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Kategorie der Benachrichtigung. Aktuell ist diese Kategorie frei wählbar</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### notifications.silent


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Benachrichtigungs-Sichtbarkeit</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">true, falls die Benachrichtigung dem empfangenden Nutzer angezeigt werden soll, false, falls die Benachrichtigung nur als Protokollvermerk gespeichert, aber nicht angezeigt werden soll.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>










<hr />

### Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/notification_text/0.1/notification.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht notification - Einsatzbezogene Textnachrichten",
    "description": "Einsatzbezogene Textnachrichten",
    "required": [
        "sharedIncidentId",
        "notifications"
    ],
    "type": "object",
    "properties": {
        "sharedIncidentId": {
            "type": "string",
            "format": "uuid",
            "title": "globale Einsatz-UUID",
            "description": "global eindeutige UUID des Einsatzes, auf den sich die Benachrichtigungen beziehem."
        },
        "notifications": {
            "title": "Nachrichten",
            "description": "Liste der einsatzbezogenen Nachrichten.",
            "type": "array",
            "minItems": 1,
            "items": {
                "title": "Nachricht",
                "description": "Eine einsatzbezogene Nachricht.",
                "$ref": "#/$defs/notification.schema.json"
            }
        }
    },
    "examples": [
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "notifications": [
                {
                    "timestamp": "2024-01-01T10:06:09Z",
                    "message": "NEF wurde durch Einsatzkräfte vor Ort nachalarmiert",
                    "category": "information",
                    "silent": true
                }
            ]
        }
    ],
    "$defs": {
        "notification.schema.json": {
            "unevaluatedProperties": false,
            "title": "Einsatzbezogene Text-Benachrichtigung",
            "description": "Eine textbasierte, einsatzbezogene Benachrichtigung, die protokolliert werden sollte.",
            "required": [
                "timestamp",
                "message"
            ],
            "type": "object",
            "properties": {
                "timestamp": {
                    "type": "string",
                    "format": "date-time",
                    "title": "Zeitstempel",
                    "description": "Zeitpunkt an dem Benachrichtigung senderseitig hinzugefügt wurde"
                },
                "message": {
                    "title": "Benachrichtigungstext",
                    "description": "Inhalt der Benachrichtigung",
                    "type": "string"
                },
                "category": {
                    "title": "Benachrichtigungskategorie",
                    "description": "Kategorie der Benachrichtigung. Aktuell ist diese Kategorie frei wählbar",
                    "type": "string"
                },
                "silent": {
                    "title": "Benachrichtigungs-Sichtbarkeit",
                    "description": "true, falls die Benachrichtigung dem empfangenden Nutzer angezeigt werden soll, false, falls die Benachrichtigung nur als Protokollvermerk gespeichert, aber nicht angezeigt werden soll.",
                    "type": "boolean"
                }
            },
            "examples": [
                {
                    "timestamp": "2024-01-01T10:06:09Z",
                    "message": "NEF wurde durch Einsatzkräfte vor Ort nachalarmiert",
                    "category": "information",
                    "silent": true
                }
            ]
        }
    }
}
```

