# UCRI2-App Einsatzübergabe ohne Patientendaten

<!-- toc -->

- [Überblick](#uberblick)
- [Aktoren](#aktoren)
- [Nutzen](#nutzen)
- [Auslöser](#ausloser)
- [Vorbedingungen](#vorbedingungen)
- [Ergebnis](#ergebnis)
- [Ablauf](#ablauf)
- [Erfolg](#erfolg)
- [Misserfolg](#misserfolg)
- [Erläuterungen](#erlauterungen)
- [App-Nachrichten](#app-nachrichten)
    + [Verwendete Datentypen](#verwendete-datentypen)
      - [Wahrheitswerte - type: boolean](#wahrheitswerte---type-boolean)
      - [Zahlen - type: number und type:integer](#zahlen---type-number-und-typeinteger)
      - [Zeichenketten - type: string](#zeichenketten---type-string)
      - [Objekte - type: object](#objekte---type-object)
      - [Listen - type: array](#listen---type-array)
  * [App-Nachricht acknowledgement - Bestätigung oder Ablehnung einer Einsatzübergabeanfrage](#app-nachricht-acknowledgement---bestatigung-oder-ablehnung-einer-einsatzubergabeanfrage)
    + [Eigenschaften](#eigenschaften)
    + [Beispiel](#beispiel)
    + [sharedIncidentId](#sharedincidentid)
    + [acknowledgedByDispatcherAt](#acknowledgedbydispatcherat)
    + [status](#status)
    + [cause](#cause)
    + [Schema](#schema)
  * [App-Nachricht completion - Einsatzendemeldung](#app-nachricht-completion---einsatzendemeldung)
    + [Eigenschaften](#eigenschaften-1)
    + [Beispiel](#beispiel-1)
    + [sharedIncidentId](#sharedincidentid-1)
    + [completedAt](#completedat)
    + [status](#status-1)
    + [additionalInformation](#additionalinformation)
    + [Schema](#schema-1)

<!-- tocstop -->

# Überblick
Anwendungsfall: Alarmübertragung an einen Alarmierungsservice für Einsatzkräfte (FW, RD, TNA, POL etc.)
Für die Alarmierung der Einsatzkräfte von Feuerwehr, Rettungsdienst, Katastrophenschutz usw. gibt es mehrere Möglichkeiten, die zum Teil in technischen Richtlinien reguliert sind und zum Teil unreguliert mit verfügbarer Technik betrieben werden. Im Gegensatz zu regulierten Verfahren, wie 5-Ton, POCSAG und TETRA, ist die Alarmierung über eine Anwendung (App) auf einem Smartphone momentan nicht reguliert. Dafür gibt es eine Vielzahl von Anbietern solcher Anwendungen auf dem Markt. Dabei kommen sowohl dienstliche als auch private Smartphones (“Bring your own device - BYOD”) zum Einsatz. Im Anwendungsfall geht es darum, über die L2MD-Schnittstelle mittels generischer Nachrichten vom Einsatzleitsystem aus die Alarmauslösung an beliebigen - die Schnittstelle unterstützenden - Alarm-Services zu initiieren und eine technische Quittung (“Alarm wird ausgelöst”), sowie - wenn vorhanden - auch eine quantifizierte Quittung (“Alarm hat x Endgeräte erreicht“) und ein qualifizierte Quittung (“Anzahl Komme / Komme nicht“) zu erhalten.
Der Anwendungsfall ist abgestimmt mit der PMeV-Handreichung APP-Alarmierung.

# Aktoren
* Anwender LS
* Einsatzleitsystem 
* Alarmierungsservice
* Mobiles Gerät
* Anwender MD

# Nutzen
Der Anwender des Einsatzleitsystems möchte eine Alarmierung, die im Rahmen der Bearbeitung eines eingehenden Notrufs erstellt wurde, über einen oder mehrere an die Leitstelle angebundene Alarmierungsservices aktivieren.
Ergebnis der erfolgreichen Ausführung des Anwendungsfalls ist, dass die Alarmierung durchgeführt und das Ergebnis dem Anwender dargestellt werden kann.

# Auslöser

Der Anwender des Einsatzleitsystem startet die Alarmierung.

# Vorbedingungen

Der Anwender LS hat im Einsatzleitsystem die zur Alarmauslösung erforderlichen Parameter hinterlegt, beispielsweise Einsatzstichwörter und Zuständigkeiten. Weiterhin sind für die Zuständigkeiten die Zugänge zum jeweils zugehörigen Alarmierungsservice hinterlegt.

# Ergebnis

Ein oder mehrere Alarmierungsservices wurden aktiviert, haben alarmiert und die Resultate der Alarmierung zurückgemeldet.

# Ablauf

![Alt Text](Abbildung Ablauf Einsatzkräfte alarmieren)
<img src="UCRI_L2MD_UC_EinsatzkräfteAlarmieren.drawio.svg">
Abbildung Ablauf Einsatzkräfte alarmieren

# Erfolg

Die Einsatzkräfte sind alarmiert und das Resultat der Alarmierung ist am Einsatzleitsystem zur Darstellung und weiteren Verarbeitung verfügbar.

# Misserfolg

Timeout: Ein oder mehrere Alarmierungsservices antworten nicht.
Fehlermeldung: Ein oder mehrere Alarmierungsservices melden über die Schnittstelle einen Fehler.

# Erläuterungen

- keine -

Falls für gesendete Nachrichten eine technische Empfangsquittierung gewünscht ist, ist hierzu die entsprechende Funktion der UCRI2-Transportschicht zu nutzen.
Daher sind in dieser App keine eigenen Nachrichten zur technischen Empfangsquittierung definiert.

# App-Nachrichten
### Verwendete Datentypen
In diesem Kapitel werden die in den Nachrichten-Schemata verwendeten Datentypen beschrieben. Die beschriebenen Datentypen kommen nicht alle auch notwendigerweise in den Schemata vor.

#### Wahrheitswerte - type: boolean
Mit dem Typ boolean werden JSON-Wahrheitswerte beschrieben, die möglichen Ausprägungen sind **true** und **false**.

#### Zahlen - type: number und type:integer
Im JSON-Schema werden Ganzzahlen (type:integer) und Kommazahlen (type:number) separat beschrieben, wobei als Dezimalseparator ein Punkt zum Einsatz kommt.
Da in JSON selbst aber nur ein gemeinsamer Zahlentyp für Ganz- und Kommazahlen existiert, können Ganzzahlen auch mit einem Dezimalseparator angegeben werden, für den Nachkommateil gilt dann aber, dass dieser 0 sein muss (z.B. sind sowohl **1.0** als auch **1** gültige Ausprägungen für eine Ganzzahl).
Für beide Typen kann der gültige Zahlenbereich mit den Attributen "minimum","exclusiveMinimum","maximum" und "exclusiveMaximum" eingeschränkt werden).

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
TODO HIER MÜSSEN NOCH DIE mobile_device_xyz-Nachrichten eingefügt werden


## App-Nachricht acknowledgement - Bestätigung oder Ablehnung einer Einsatzübergabeanfrage

<p>Bestätigung oder Ablehnung einer Einsatzübergabeanfrage</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer/0.1/acknowledgement.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedbydispatcherat">acknowledgedByDispatcherAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#status">status</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#cause">cause</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### Beispiel



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "acknowledgedByDispatcherAt": "2024-01-01T10:06:09",
    "status": "rejected",
    "cause": "Einsatzort ist unbekannt!"
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
      <td colspan="2">global eindeutige UUID des Einsatzes, der bestätigt oder abgelehnt wird.</td>
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




### acknowledgedByDispatcherAt


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Dispatcher-Zeitstempel</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zeitpunkt an dem die Annahme oder Ablehnung vom Disponenten ausgelöst wurde</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### status


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Annahme- oder Ablehnungsstatus</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Annahme- oder Ablehnungsstatus</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>accepted</li><li>rejected</li></ul></td>
    </tr>
  </tbody>
</table>




### cause


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Begründung für die Annahme oder Ablehnung</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Begründung für die Annahme oder Ablehnung</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>









<hr />

### Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer/0.1/acknowledgement.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht acknowledgement - Bestätigung oder Ablehnung einer Einsatzübergabeanfrage",
    "description": "Bestätigung oder Ablehnung einer Einsatzübergabeanfrage",
    "required": [
        "sharedIncidentId",
        "acknowledgedByDispatcherAt",
        "status"
    ],
    "type": "object",
    "properties": {
        "sharedIncidentId": {
            "type": "string",
            "format": "uuid",
            "title": "globale Einsatz-UUID",
            "description": "global eindeutige UUID des Einsatzes, der bestätigt oder abgelehnt wird."
        },
        "acknowledgedByDispatcherAt": {
            "type": "string",
            "format": "date-time",
            "title": "Dispatcher-Zeitstempel",
            "description": "Zeitpunkt an dem die Annahme oder Ablehnung vom Disponenten ausgelöst wurde"
        },
        "status": {
            "type": "string",
            "enum": [
                "accepted",
                "rejected"
            ],
            "title": "Annahme- oder Ablehnungsstatus",
            "description": "Annahme- oder Ablehnungsstatus"
        },
        "cause": {
            "type": "string",
            "title": "Begründung für die Annahme oder Ablehnung",
            "description": "Begründung für die Annahme oder Ablehnung"
        }
    },
    "examples": [
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "acknowledgedByDispatcherAt": "2024-01-01T10:06:09",
            "status": "rejected",
            "cause": "Einsatzort ist unbekannt!"
        }
    ],
    "$defs": {}
}
```





## App-Nachricht completion - Einsatzendemeldung

<p>Einsatzendemeldung</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer/0.1/completion.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#completedat">completedAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#status">status</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#additionalinformation">additionalInformation</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### Beispiel



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "completedAt": "2024-01-01T10:15:09",
    "status": "aborted",
    "additionalInformation": "Keine Person angetroffen"
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
      <td colspan="2">global eindeutige UUID des Einsatzes, der beendet wurde.</td>
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




### completedAt


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Beendigungs-Zeitstempel</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zeitpunkt an dem der Einsatz beendet wurde</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### status


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Beendigungsstatus</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zustand, in dem der Einsatz beendet wurde</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>completed_sucessfully</li><li>aborted</li></ul></td>
    </tr>
  </tbody>
</table>




### additionalInformation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Zusatzinformationen</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zusätzliche Freitext-Informationen, welche nicht in anderen Feldern dargestellt werden können.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>









<hr />

### Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer/0.1/completion.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht completion - Einsatzendemeldung",
    "description": "Einsatzendemeldung",
    "required": [
        "sharedIncidentId",
        "completedAt",
        "status"
    ],
    "type": "object",
    "properties": {
        "sharedIncidentId": {
            "type": "string",
            "format": "uuid",
            "title": "globale Einsatz-UUID",
            "description": "global eindeutige UUID des Einsatzes, der beendet wurde."
        },
        "completedAt": {
            "title": "Beendigungs-Zeitstempel",
            "type": "string",
            "format": "date-time",
            "description": "Zeitpunkt an dem der Einsatz beendet wurde"
        },
        "status": {
            "type": "string",
            "enum": [
                "completed_sucessfully",
                "aborted"
            ],
            "title": "Beendigungsstatus",
            "description": "Zustand, in dem der Einsatz beendet wurde"
        },
        "additionalInformation": {
            "title": "Zusatzinformationen",
            "description": "Zusätzliche Freitext-Informationen, welche nicht in anderen Feldern dargestellt werden können.",
            "type": "string"
        }
    },
    "examples": [
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "completedAt": "2024-01-01T10:15:09",
            "status": "aborted",
            "additionalInformation": "Keine Person angetroffen"
        }
    ],
    "$defs": {}
}
```


