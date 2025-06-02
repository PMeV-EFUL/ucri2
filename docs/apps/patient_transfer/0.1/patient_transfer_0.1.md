# UCRI2-App Patientenübergabe - Übergabe 112 -> 116117

<!-- toc -->

- [Überblick](#uberblick)
- [Ablaufbeschreibung](#ablaufbeschreibung)
- [App-Nachrichten](#app-nachrichten)
    + [Verwendete Datentypen](#verwendete-datentypen)
      - [Wahrheitswerte - type: boolean](#wahrheitswerte---type-boolean)
      - [Zahlen - type: number und type:integer](#zahlen---type-number-und-typeinteger)
      - [Zeichenketten - type: string](#zeichenketten---type-string)
      - [Objekte - type: object](#objekte---type-object)
      - [Listen - type: array](#listen---type-array)
  * [App-Nachricht incident - Eine Übergabe-Anfrage für einen Patienten](#app-nachricht-incident---eine-ubergabe-anfrage-fur-einen-patienten)
    + [Eigenschaften](#eigenschaften)
    + [Beispiel](#beispiel)
    + [sharedIncidentId](#sharedincidentid)
    + [internalId](#internalid)
    + [additionalInfo](#additionalinfo)
    + [sentByDispatcherAt](#sentbydispatcherat)
    + [informers](#informers)
      - [Eigenschaften der Objekte im Array](#eigenschaften-der-objekte-im-array)
      - [informers.name](#informersname)
      - [informers.surname](#informerssurname)
      - [informers.phone](#informersphone)
      - [informers.email](#informersemail)
      - [informers.address](#informersaddress)
      - [informers.address.street](#informersaddressstreet)
      - [informers.address.houseNumber](#informersaddresshousenumber)
      - [informers.address.postalCode](#informersaddresspostalcode)
      - [informers.address.city](#informersaddresscity)
      - [informers.address.cityDistrict](#informersaddresscitydistrict)
      - [informers.address.state](#informersaddressstate)
      - [informers.address.country](#informersaddresscountry)
      - [informers.additionalInfo](#informersadditionalinfo)
    + [protocolRemarks](#protocolremarks)
      - [Eigenschaften der Objekte im Array](#eigenschaften-der-objekte-im-array-1)
      - [protocolRemarks.sharedIncidentId](#protocolremarkssharedincidentid)
      - [protocolRemarks.timestamp](#protocolremarkstimestamp)
      - [protocolRemarks.message](#protocolremarksmessage)
      - [protocolRemarks.category](#protocolremarkscategory)
      - [protocolRemarks.silent](#protocolremarkssilent)
    + [issue](#issue)
    + [patient](#patient)
      - [Eigenschaften](#eigenschaften-1)
      - [patient.name](#patientname)
      - [patient.surname](#patientsurname)
      - [patient.phone](#patientphone)
      - [patient.email](#patientemail)
      - [patient.address](#patientaddress)
      - [patient.address.street](#patientaddressstreet)
      - [patient.address.houseNumber](#patientaddresshousenumber)
      - [patient.address.postalCode](#patientaddresspostalcode)
      - [patient.address.city](#patientaddresscity)
      - [patient.address.cityDistrict](#patientaddresscitydistrict)
      - [patient.address.state](#patientaddressstate)
      - [patient.address.country](#patientaddresscountry)
      - [patient.additionalInfo](#patientadditionalinfo)
      - [patient.gender](#patientgender)
      - [patient.dateOfBirth](#patientdateofbirth)
      - [patient.age](#patientage)
      - [patient.healthInsuranceInformation](#patienthealthinsuranceinformation)
      - [patient.healthInsuranceInformation.healthInsuranceCompany](#patienthealthinsuranceinformationhealthinsurancecompany)
      - [patient.healthInsuranceInformation.healthInsuranceCompanyNumber](#patienthealthinsuranceinformationhealthinsurancecompanynumber)
      - [patient.healthInsuranceInformation.insuranceNumber](#patienthealthinsuranceinformationinsurancenumber)
      - [patient.initialAssessment](#patientinitialassessment)
      - [patient.initialAssessment.rmi](#patientinitialassessmentrmi)
      - [patient.initialAssessment.rmc](#patientinitialassessmentrmc)
      - [patient.initialAssessment.pzc](#patientinitialassessmentpzc)
      - [patient.initialAssessment.additionalInformation](#patientinitialassessmentadditionalinformation)
      - [patient.infectionInformation](#patientinfectioninformation)
      - [patient.infectionStatus](#patientinfectionstatus)
      - [patient.transportNumber](#patienttransportnumber)
    + [Schema](#schema)
  * [App-Nachricht acknowledgement - Bestätigung oder Ablehnung einer Patientenübergabeanfrage](#app-nachricht-acknowledgement---bestatigung-oder-ablehnung-einer-patientenubergabeanfrage)
    + [Eigenschaften](#eigenschaften-2)
    + [Beispiel](#beispiel-1)
    + [sharedIncidentId](#sharedincidentid-1)
    + [acknowledgedByDispatcherAt](#acknowledgedbydispatcherat)
    + [status](#status)
    + [cause](#cause)
    + [Schema](#schema-1)
  * [App-Nachricht completion - Einsatzendemeldung](#app-nachricht-completion---einsatzendemeldung)
    + [Eigenschaften](#eigenschaften-3)
    + [Beispiel](#beispiel-2)
    + [sharedIncidentId](#sharedincidentid-2)
    + [completedAt](#completedat)
    + [status](#status-1)
    + [additionalInformation](#additionalinformation)
    + [Schema](#schema-2)

<!-- tocstop -->

# Überblick
Der Anwendungsfall Patientendatentransfer ist der Sonderfall der Einsatzübergabe zwischen einer 112-Leitstelle und einer 116117-Leitstelle. Hierbei ist die Richtung der Einsatzübergabe entscheidend - eine Übergabe von 116117 an 112 (Notfall-Eskalation) gleicht der regulären Einsatzübergabe und wird daher über den Use Case Einsatzübergabe (mit Patientendatenübermittlung) abgebildet. Nur die Richtung von der 112 an die 116117 (Deeskalation eines nicht-Notfalls) besitzt spezifische Eigenschaften, die einen dedizierten Use case hierfür notwendig machen:

-- Die Adressinformationen beschreiben keinen Einsatzort, sondern die Adresse des Patienten als Stammdateninformation

Wie bei der Einsatzübergabe wird auch der Patiententransfer durch die Empfänger-Leitstelle bestätigt oder abgelehnt.

# Ablaufbeschreibung

1. A->B: Einsatz übergeben
2. B->A: Einsatz annehmen oder ablehnen
3. B->A: (optional) Einsatzendemeldung senden (falls Einsatz angenommen wurde)

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


## App-Nachricht incident - Eine Übergabe-Anfrage für einen Patienten

<p>Eine Übergabe-Anfrage für einen Patienten, der telefonisch erreichbar ist</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transfer_new/0.1/incident.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#internalid">internalId</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#additionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#sentbydispatcherat">sentByDispatcherAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#informers">informers</a></td><td>Array (vom Typ Object)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#protocolremarks">protocolRemarks</a></td><td>Array (vom Typ Object)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#issue">issue</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patient">patient</a></td><td>Object</td><td>Ja</td></tr></tbody></table>


### Beispiel



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "internalId": "f123456",
    "issue": "consultation_needed",
    "additionalInfo": "Zusatzinformationen",
    "sentByDispatcherAt": "2024-01-01T10:05:08",
    "protocolRemarks": [
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "timestamp": "2024-01-01T10:06:09",
            "message": "Die Hausnummer des Patienten ist 15c, nicht 15b",
            "category": "information",
            "silent": false
        }
    ],
    "patient": {
        "name": "Mustermann",
        "surname": "Hans",
        "phone": "+49 30 123456",
        "email": "hans.mustermann@example.com",
        "address": {
            "street": "Musterstrasse",
            "houseNumber": "15b",
            "postalCode": "12345",
            "city": "Musterhausen",
            "cityDistrict": "Musterberg",
            "state": "Brandenburg",
            "country": "DE"
        },
        "additionalInfo": "weitere Informationen",
        "gender": "Male",
        "dateOfBirth": "19801230",
        "age": 55,
        "healthInsuranceInformation": {
            "healthInsuranceCompany": "Musterkasse",
            "healthInsuranceCompanyNumber": "101234567",
            "insuranceNumber": "S123456789"
        },
        "initialAssessment": {
            "rmi": "360",
            "rmc": "360543215",
            "pzc": "360401",
            "additionalInformation": "unspezifischer Notfall"
        },
        "infectionInformation": "potentiell ansteckend",
        "infectionStatus": true,
        "transportNumber": "123456"
    },
    "informers": [
        {
            "name": "Musterfrau",
            "surname": "Heike",
            "phone": "+49 30 234567",
            "email": "heike.musterfrau@example.com"
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
      <td colspan="2">global eindeutige UUID des Einsatzes</td>
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




### internalId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Sender-interne Einsatz-ID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Sender-interne ID des Einsatzes</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### additionalInfo


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




### sentByDispatcherAt


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Dispatcher-Übergabe-Zeitstempel</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zeitpunkt an dem die Übergabe vom Disponenten angestoßen wurde</td>
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




### informers


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Meldende</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Liste der Meldenden Personen</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Array (vom Typ Object)</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>

#### Eigenschaften der Objekte im Array
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#informersname">name</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#informerssurname">surname</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informersphone">phone</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informersemail">email</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informersaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informersadditionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr></tbody></table>


#### informers.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Nachname</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Nachname.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### informers.surname


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Vorname</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Vorname.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### informers.phone


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Telefonnummer</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Telefonnummer.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### informers.email


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Email-Adresse</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Email-Adresse.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### informers.address


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">MeldeAdresse</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Meldeadresse.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



#### informers.address.street


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Name der Strasse</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Strassenname. Falls möglich, sollten Abkürzungen vermieden werden und &#x27;Straße&#x27; mit einem &#x27;ß&#x27; geschrieben werden (also &#x27;Musterstraße&#x27; anstatt &#x27;Musterstrasse&#x27; oder &#x27;Musterstr.&#x27;). </td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




#### informers.address.houseNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Hausnummer</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Hausnummer. Falls möglich, sollte diese Angabe keine Leerzeichen enthalten (also &#x27;12a&#x27; anstatt &#x27;12 a&#x27;).</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### informers.address.postalCode


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Postleitzahl</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Postleitzahl als Zeichenkette aus mindestens einer Ziffer.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^[0-9]+$</td>
    </tr>
  </tbody>
</table>




#### informers.address.city


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Stadt</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Stadt oder Gemeinde. Ortsteilangaben dürfen nicht in diesem Feld mitkodiert werden, stattdessen ist &#x27;cityDistrict&#x27; zu nutzen!</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### informers.address.cityDistrict


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ortsteil</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Ortsteil einer Stadt oder Gemeinde. Insbesondere für Adressen, in denen als &#x27;city&#x27; eine Gemeinde angegeben wird, ist dieses Feld von hoher Bedeutung, da es die Eindeutigkeit der Adresse sicherstellt.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### informers.address.state


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Bundesland</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Das Bundesland.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### informers.address.country


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">ISO-Code des Landes</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Landesangabe in Form eines zweistelligen Ländercodes in Grossbuchstaben gemäß ISO 3166-1 alpha-2</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^[A-Z]{2}$</td>
    </tr>
  </tbody>
</table>





#### informers.additionalInfo


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
    
  </tbody>
</table>





### protocolRemarks


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Protokollvermerke</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Protokollvermerke, die mit dem Einsatz übertragen werden. Die sharedIncidentId jedes Vermerks muss mit der sharedIncidentId des Einsatzes übereinstimmen!</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Array (vom Typ Object)</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>

#### Eigenschaften der Objekte im Array
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#protocolremarkssharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarkstimestamp">timestamp</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarksmessage">message</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarkscategory">category</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#protocolremarkssilent">silent</a></td><td>Boolean</td><td>Nein</td></tr></tbody></table>


#### protocolRemarks.sharedIncidentId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">globale Einsatz-UUID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">global eindeutige UUID des Einsatzes, auf den sich diese Benachrichtigung bezieht.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Format</th>
      <td colspan="2">uuid</td>
    </tr>
  </tbody>
</table>




#### protocolRemarks.timestamp


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




#### protocolRemarks.message


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




#### protocolRemarks.category


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




#### protocolRemarks.silent


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





### issue


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Übergabegrund</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Übergabegrund</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>consultation_needed</li></ul></td>
    </tr>
  </tbody>
</table>




### patient


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Patient</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der/die Patient(in).</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>

#### Eigenschaften
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#patientname">name</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#patientsurname">surname</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientphone">phone</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#patientemail">email</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientadditionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientgender">gender</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientdateofbirth">dateOfBirth</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientage">age</a></td><td>Number</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patienthealthinsuranceinformation">healthInsuranceInformation</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientinitialassessment">initialAssessment</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientinfectioninformation">infectionInformation</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientinfectionstatus">infectionStatus</a></td><td>Boolean</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patienttransportnumber">transportNumber</a></td><td>String</td><td>Nein</td></tr></tbody></table>


#### patient.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Nachname</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Nachname.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




#### patient.surname


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Vorname</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Vorname.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### patient.phone


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Telefonnummer</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Telefonnummer.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




#### patient.email


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Email-Adresse</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Email-Adresse.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### patient.address


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">MeldeAdresse</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Meldeadresse.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



#### patient.address.street


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Name der Strasse</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Strassenname. Falls möglich, sollten Abkürzungen vermieden werden und &#x27;Straße&#x27; mit einem &#x27;ß&#x27; geschrieben werden (also &#x27;Musterstraße&#x27; anstatt &#x27;Musterstrasse&#x27; oder &#x27;Musterstr.&#x27;). </td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




#### patient.address.houseNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Hausnummer</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Hausnummer. Falls möglich, sollte diese Angabe keine Leerzeichen enthalten (also &#x27;12a&#x27; anstatt &#x27;12 a&#x27;).</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### patient.address.postalCode


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Postleitzahl</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Postleitzahl als Zeichenkette aus mindestens einer Ziffer.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^[0-9]+$</td>
    </tr>
  </tbody>
</table>




#### patient.address.city


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Stadt</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Stadt oder Gemeinde. Ortsteilangaben dürfen nicht in diesem Feld mitkodiert werden, stattdessen ist &#x27;cityDistrict&#x27; zu nutzen!</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### patient.address.cityDistrict


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ortsteil</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Ortsteil einer Stadt oder Gemeinde. Insbesondere für Adressen, in denen als &#x27;city&#x27; eine Gemeinde angegeben wird, ist dieses Feld von hoher Bedeutung, da es die Eindeutigkeit der Adresse sicherstellt.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### patient.address.state


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Bundesland</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Das Bundesland.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### patient.address.country


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">ISO-Code des Landes</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Landesangabe in Form eines zweistelligen Ländercodes in Grossbuchstaben gemäß ISO 3166-1 alpha-2</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Pattern</th>
      <td colspan="2">^[A-Z]{2}$</td>
    </tr>
  </tbody>
</table>





#### patient.additionalInfo


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




#### patient.gender


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Geschlecht</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Das Geschlecht.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>Male</li><li>Female</li><li>Diverse</li></ul></td>
    </tr>
  </tbody>
</table>




#### patient.dateOfBirth


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Geburtsdatum</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Das Geburtsdatum im ISO8601 Date-Format (tagesgenaue Datumsangabe ohne Zeitangabe)</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date</td>
    </tr>
  </tbody>
</table>




#### patient.age


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Alter</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Das Alter in Jahren.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### patient.healthInsuranceInformation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Informationen zum Versicherungsverhältnis</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Informationen zum Versicherungsverhältnis. Obligat sind Name und IK der Krankenversicherung sowie die Versichertennummer.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



#### patient.healthInsuranceInformation.healthInsuranceCompany


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Name der Krankenversicherung</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Name der Krankenversicherung.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### patient.healthInsuranceInformation.healthInsuranceCompanyNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">IK der Krankenversicherung</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Das Institutskennzeichen der Krankenversicherung als neunstellige Zeichenkette, die nur aus Ziffern besteht.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">9</td>
    </tr><tr>
      <th>Max Length</th>
      <td colspan="2">9</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^[0-9]*$</td>
    </tr>
  </tbody>
</table>




#### patient.healthInsuranceInformation.insuranceNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Versichertennummer (Alphanumerisch)</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Versichertennummer</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>





#### patient.initialAssessment


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ersteinschätzung</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Eine Ersteinschätzung eines Patienten. Mindestens eine Eigenschaft (rmi, rmc, pzc oder additionalInformation) muss vorhanden sein.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Min Properties</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>



#### patient.initialAssessment.rmi


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Rückmeldeindikator</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Rückmeldeindikator als dreistellige Zeichenkette, die nur aus Ziffern besteht.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">3</td>
    </tr><tr>
      <th>Max Length</th>
      <td colspan="2">3</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^[0-9]*$</td>
    </tr>
  </tbody>
</table>




#### patient.initialAssessment.rmc


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Rückmeldecode</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Rückmeldecode als mindestens einstellige Zeichenkette, die nur aus Ziffern besteht.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^[0-9]*$</td>
    </tr>
  </tbody>
</table>




#### patient.initialAssessment.pzc


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Patientenzuweisungscode</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Patientenzuweisungscode als sechsstellige Zeichenkette, die nur aus Ziffern besteht.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">6</td>
    </tr><tr>
      <th>Max Length</th>
      <td colspan="2">6</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^[0-9]*$</td>
    </tr>
  </tbody>
</table>




#### patient.initialAssessment.additionalInformation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Zusatzinformationen</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zusätzliche Freitext-Informationen zur Ersteinschätzung, welche nicht in anderen Feldern dargestellt werden können.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>





#### patient.infectionInformation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Infektiös (Freitext)</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Informationen, ob der Patient ansteckend ist (als Freitext).</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### patient.infectionStatus


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Infektiös (Wahrheitswert)</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Informationen, ob der Patient ansteckend ist (true/false).</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Boolean</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### patient.transportNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Transportnummer</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Transportnummer.</td>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transfer_new/0.1/incident.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht incident - Eine Übergabe-Anfrage für einen Patienten",
    "description": "Eine Übergabe-Anfrage für einen Patienten, der telefonisch erreichbar ist",
    "required": [
        "sharedIncidentId",
        "sentByDispatcherAt",
        "patient"
    ],
    "type": "object",
    "properties": {
        "sharedIncidentId": {
            "type": "string",
            "format": "uuid",
            "title": "globale Einsatz-UUID",
            "description": "global eindeutige UUID des Einsatzes"
        },
        "internalId": {
            "type": "string",
            "title": "Sender-interne Einsatz-ID",
            "description": "Sender-interne ID des Einsatzes"
        },
        "additionalInfo": {
            "title": "Zusatzinformationen",
            "description": "Zusätzliche Freitext-Informationen, welche nicht in anderen Feldern dargestellt werden können.",
            "type": "string"
        },
        "sentByDispatcherAt": {
            "type": "string",
            "format": "date-time",
            "title": "Dispatcher-Übergabe-Zeitstempel",
            "description": "Zeitpunkt an dem die Übergabe vom Disponenten angestoßen wurde"
        },
        "informers": {
            "title": "Meldende",
            "description": "Liste der Meldenden Personen",
            "type": "array",
            "minItems": 1,
            "items": {
                "title": "Meldende Person",
                "description": "Meldende Person",
                "$ref": "#/$defs/person.schema.json"
            }
        },
        "protocolRemarks": {
            "title": "Protokollvermerke",
            "description": "Protokollvermerke, die mit dem Einsatz übertragen werden. Die sharedIncidentId jedes Vermerks muss mit der sharedIncidentId des Einsatzes übereinstimmen!",
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "#/$defs/notification.schema.json",
                "title": "Protokollvermerk",
                "description": "Ein Protokollvermerk."
            }
        },
        "issue": {
            "title": "Übergabegrund",
            "type": "string",
            "enum": [
                "consultation_needed"
            ],
            "description": "Übergabegrund"
        },
        "patient": {
            "title": "Patient",
            "description": "Der/die Patient(in).",
            "$ref": "#/$defs/patient.schema.json",
            "type": "object",
            "required": [
                "name",
                "phone"
            ]
        }
    },
    "examples": [
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "internalId": "f123456",
            "issue": "consultation_needed",
            "additionalInfo": "Zusatzinformationen",
            "sentByDispatcherAt": "2024-01-01T10:05:08",
            "protocolRemarks": [
                {
                    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
                    "timestamp": "2024-01-01T10:06:09",
                    "message": "Die Hausnummer des Patienten ist 15c, nicht 15b",
                    "category": "information",
                    "silent": false
                }
            ],
            "patient": {
                "name": "Mustermann",
                "surname": "Hans",
                "phone": "+49 30 123456",
                "email": "hans.mustermann@example.com",
                "address": {
                    "street": "Musterstrasse",
                    "houseNumber": "15b",
                    "postalCode": "12345",
                    "city": "Musterhausen",
                    "cityDistrict": "Musterberg",
                    "state": "Brandenburg",
                    "country": "DE"
                },
                "additionalInfo": "weitere Informationen",
                "gender": "Male",
                "dateOfBirth": "19801230",
                "age": 55,
                "healthInsuranceInformation": {
                    "healthInsuranceCompany": "Musterkasse",
                    "healthInsuranceCompanyNumber": "101234567",
                    "insuranceNumber": "S123456789"
                },
                "initialAssessment": {
                    "rmi": "360",
                    "rmc": "360543215",
                    "pzc": "360401",
                    "additionalInformation": "unspezifischer Notfall"
                },
                "infectionInformation": "potentiell ansteckend",
                "infectionStatus": true,
                "transportNumber": "123456"
            },
            "informers": [
                {
                    "name": "Musterfrau",
                    "surname": "Heike",
                    "phone": "+49 30 234567",
                    "email": "heike.musterfrau@example.com"
                }
            ]
        }
    ],
    "$defs": {
        "address.schema.json": {
            "title": "Adresse",
            "description": "Eine postalische Adresse. Obligat ist nur der Strassenname, weitere Angaben sollten aber möglichst gemacht werden, um die Adresse eindeutig zu machen.",
            "required": [
                "street"
            ],
            "type": "object",
            "properties": {
                "street": {
                    "title": "Name der Strasse",
                    "description": "Der Strassenname. Falls möglich, sollten Abkürzungen vermieden werden und 'Straße' mit einem 'ß' geschrieben werden (also 'Musterstraße' anstatt 'Musterstrasse' oder 'Musterstr.'). ",
                    "type": "string"
                },
                "houseNumber": {
                    "title": "Hausnummer",
                    "description": "Die Hausnummer. Falls möglich, sollte diese Angabe keine Leerzeichen enthalten (also '12a' anstatt '12 a').",
                    "type": "string"
                },
                "postalCode": {
                    "title": "Postleitzahl",
                    "description": "Die Postleitzahl als Zeichenkette aus mindestens einer Ziffer.",
                    "type": "string",
                    "pattern": "^[0-9]+$"
                },
                "city": {
                    "title": "Stadt",
                    "description": "Die Stadt oder Gemeinde. Ortsteilangaben dürfen nicht in diesem Feld mitkodiert werden, stattdessen ist 'cityDistrict' zu nutzen!",
                    "type": "string"
                },
                "cityDistrict": {
                    "title": "Ortsteil",
                    "description": "Der Ortsteil einer Stadt oder Gemeinde. Insbesondere für Adressen, in denen als 'city' eine Gemeinde angegeben wird, ist dieses Feld von hoher Bedeutung, da es die Eindeutigkeit der Adresse sicherstellt.",
                    "type": "string"
                },
                "state": {
                    "title": "Bundesland",
                    "description": "Das Bundesland.",
                    "type": "string"
                },
                "country": {
                    "title": "ISO-Code des Landes",
                    "description": "Die Landesangabe in Form eines zweistelligen Ländercodes in Grossbuchstaben gemäß ISO 3166-1 alpha-2",
                    "type": "string",
                    "pattern": "^[A-Z]{2}$"
                }
            },
            "unevaluatedProperties": false,
            "examples": [
                {
                    "street": "Musterstrasse",
                    "houseNumber": "15b",
                    "postalCode": "12345",
                    "city": "Musterhausen",
                    "cityDistrict": "Musterberg",
                    "state": "Brandenburg",
                    "country": "DE"
                }
            ]
        },
        "person.schema.json": {
            "title": "Person",
            "description": "Eine Person. Obligat ist der Nachname.",
            "required": [
                "name"
            ],
            "type": "object",
            "properties": {
                "name": {
                    "title": "Nachname",
                    "description": "Der Nachname.",
                    "type": "string"
                },
                "surname": {
                    "title": "Vorname",
                    "description": "Der Vorname.",
                    "type": "string"
                },
                "phone": {
                    "title": "Telefonnummer",
                    "description": "Die Telefonnummer.",
                    "type": "string"
                },
                "email": {
                    "title": "Email-Adresse",
                    "description": "Die Email-Adresse.",
                    "type": "string"
                },
                "address": {
                    "$ref": "#/$defs/address.schema.json",
                    "title": "MeldeAdresse",
                    "description": "Die Meldeadresse."
                },
                "additionalInfo": {
                    "title": "Zusatzinformationen",
                    "description": "Zusätzliche Freitext-Informationen, welche nicht in anderen Feldern dargestellt werden können.",
                    "type": "string"
                }
            },
            "examples": [
                {
                    "name": "Mustermann",
                    "surname": "Hans",
                    "phone": "+49 30 123456",
                    "email": "hans.mustermann@example.com",
                    "address": {
                        "street": "Musterstrasse",
                        "houseNumber": "15b",
                        "postalCode": "12345",
                        "city": "Musterhausen",
                        "cityDistrict": "Musterberg",
                        "state": "Brandenburg",
                        "country": "DE"
                    },
                    "additionalInfo": "weitere Informationen"
                }
            ],
            "unevaluatedProperties": false
        },
        "notification.schema.json": {
            "unevaluatedProperties": false,
            "title": "Einsatzbezogene Text-Benachrichtigung",
            "description": "Eine textbasierte, einsatzbezogene Benachrichtigung, die protokolliert werden sollte.",
            "required": [
                "sharedIncidentId",
                "timestamp",
                "message"
            ],
            "type": "object",
            "properties": {
                "sharedIncidentId": {
                    "type": "string",
                    "format": "uuid",
                    "title": "globale Einsatz-UUID",
                    "description": "global eindeutige UUID des Einsatzes, auf den sich diese Benachrichtigung bezieht."
                },
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
                    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
                    "timestamp": "2024-01-01T10:06:09",
                    "message": "NEF wurde durch Einsatzkräfte vor Ort nachalarmiert",
                    "category": "information",
                    "silent": true
                }
            ]
        },
        "healthInsuranceInformation.schema.json": {
            "title": "Informationen zum Versicherungsverhältnis",
            "description": "Informationen zum Versicherungsverhältnis. Obligat sind Name und IK der Krankenversicherung sowie die Versichertennummer.",
            "required": [],
            "type": "object",
            "properties": {
                "healthInsuranceCompany": {
                    "title": "Name der Krankenversicherung",
                    "description": "Der Name der Krankenversicherung.",
                    "type": "string"
                },
                "healthInsuranceCompanyNumber": {
                    "title": "IK der Krankenversicherung",
                    "description": "Das Institutskennzeichen der Krankenversicherung als neunstellige Zeichenkette, die nur aus Ziffern besteht.",
                    "type": "string",
                    "pattern": "^[0-9]*$",
                    "minLength": 9,
                    "maxLength": 9
                },
                "insuranceNumber": {
                    "title": "Versichertennummer (Alphanumerisch)",
                    "description": "Die Versichertennummer",
                    "type": "string"
                }
            },
            "unevaluatedProperties": false,
            "examples": [
                {
                    "healthInsuranceCompany": "Musterkasse",
                    "healthInsuranceCompanyNumber": "101234567",
                    "insuranceNumber": "S123456789"
                }
            ]
        },
        "initialAssessment.schema.json": {
            "title": "Ersteinschätzung",
            "description": "Eine Ersteinschätzung eines Patienten. Mindestens eine Eigenschaft (rmi, rmc, pzc oder additionalInformation) muss vorhanden sein.",
            "required": [],
            "type": "object",
            "minProperties": 1,
            "properties": {
                "rmi": {
                    "title": "Rückmeldeindikator",
                    "description": "Der Rückmeldeindikator als dreistellige Zeichenkette, die nur aus Ziffern besteht.",
                    "type": "string",
                    "pattern": "^[0-9]*$",
                    "minLength": 3,
                    "maxLength": 3
                },
                "rmc": {
                    "title": "Rückmeldecode",
                    "description": "Der Rückmeldecode als mindestens einstellige Zeichenkette, die nur aus Ziffern besteht.",
                    "type": "string",
                    "pattern": "^[0-9]*$",
                    "minLength": 1
                },
                "pzc": {
                    "title": "Patientenzuweisungscode",
                    "description": "Der Patientenzuweisungscode als sechsstellige Zeichenkette, die nur aus Ziffern besteht.",
                    "type": "string",
                    "pattern": "^[0-9]*$",
                    "minLength": 6,
                    "maxLength": 6
                },
                "additionalInformation": {
                    "type": "string",
                    "title": "Zusatzinformationen",
                    "description": "Zusätzliche Freitext-Informationen zur Ersteinschätzung, welche nicht in anderen Feldern dargestellt werden können."
                }
            },
            "unevaluatedProperties": false,
            "examples": [
                {
                    "rmi": "360",
                    "rmc": "360543215",
                    "pzc": "360401",
                    "additionalInformation": "unspezifischer Notfall"
                }
            ]
        },
        "patient.schema.json": {
            "title": "Patient",
            "description": "Ein Patient. Dieser übernimmt alle Eigenschaften von einer Person und besitzt zusätzliche Eigenschaften. Obligat ist nur der Nachname.",
            "required": [
                "name"
            ],
            "type": "object",
            "properties": {
                "name": {
                    "title": "Nachname",
                    "description": "Der Nachname.",
                    "type": "string"
                },
                "surname": {
                    "title": "Vorname",
                    "description": "Der Vorname.",
                    "type": "string"
                },
                "phone": {
                    "title": "Telefonnummer",
                    "description": "Die Telefonnummer.",
                    "type": "string"
                },
                "email": {
                    "title": "Email-Adresse",
                    "description": "Die Email-Adresse.",
                    "type": "string"
                },
                "address": {
                    "$ref": "#/$defs/address.schema.json",
                    "title": "MeldeAdresse",
                    "description": "Die Meldeadresse."
                },
                "additionalInfo": {
                    "title": "Zusatzinformationen",
                    "description": "Zusätzliche Freitext-Informationen, welche nicht in anderen Feldern dargestellt werden können.",
                    "type": "string"
                },
                "gender": {
                    "title": "Geschlecht",
                    "description": "Das Geschlecht.",
                    "type": "string",
                    "enum": [
                        "Male",
                        "Female",
                        "Diverse"
                    ]
                },
                "dateOfBirth": {
                    "title": "Geburtsdatum",
                    "description": "Das Geburtsdatum im ISO8601 Date-Format (tagesgenaue Datumsangabe ohne Zeitangabe)",
                    "type": "string",
                    "format": "date"
                },
                "age": {
                    "title": "Alter",
                    "description": "Das Alter in Jahren.",
                    "type": "number",
                    "minimum": 0
                },
                "healthInsuranceInformation": {
                    "$ref": "#/$defs/healthInsuranceInformation.schema.json",
                    "title": "Informationen zum Versicherungsverhältnis",
                    "description": "Informationen zum Versicherungsverhältnis. Obligat sind Name und IK der Krankenversicherung sowie die Versichertennummer."
                },
                "initialAssessment": {
                    "$ref": "#/$defs/initialAssessment.schema.json",
                    "title": "Ersteinschätzung",
                    "description": "Eine Ersteinschätzung eines Patienten. Mindestens eine Eigenschaft (rmi, rmc, pzc oder additionalInformation) muss vorhanden sein."
                },
                "infectionInformation": {
                    "title": "Infektiös (Freitext)",
                    "description": "Informationen, ob der Patient ansteckend ist (als Freitext).",
                    "type": "string"
                },
                "infectionStatus": {
                    "title": "Infektiös (Wahrheitswert)",
                    "description": "Informationen, ob der Patient ansteckend ist (true/false).",
                    "type": "boolean"
                },
                "transportNumber": {
                    "title": "Transportnummer",
                    "description": "Die Transportnummer.",
                    "type": "string"
                }
            },
            "examples": [
                {
                    "name": "Mustermann",
                    "surname": "Hans",
                    "phone": "+49 30 123456",
                    "email": "hans.mustermann@example.com",
                    "address": {
                        "street": "Musterstrasse",
                        "houseNumber": "15b",
                        "postalCode": "12345",
                        "city": "Musterhausen",
                        "cityDistrict": "Musterberg",
                        "state": "Brandenburg",
                        "country": "DE"
                    },
                    "additionalInfo": "weitere Informationen",
                    "gender": "Male",
                    "dateOfBirth": "19801230",
                    "age": 55,
                    "healthInsuranceInformation": {
                        "healthInsuranceCompany": "Musterkasse",
                        "healthInsuranceCompanyNumber": "101234567",
                        "insuranceNumber": "S123456789"
                    },
                    "initialAssessment": {
                        "rmi": "360",
                        "rmc": "360543215",
                        "pzc": "360401",
                        "additionalInformation": "unspezifischer Notfall"
                    },
                    "infectionInformation": "potentiell ansteckend",
                    "infectionStatus": true,
                    "transportNumber": "123456"
                }
            ],
            "unevaluatedProperties": false
        }
    }
}
```





## App-Nachricht acknowledgement - Bestätigung oder Ablehnung einer Patientenübergabeanfrage

<p>Bestätigung oder Ablehnung einer Patientenübergabeanfrage</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transfer/0.1/acknowledgement.schema.json</td></tr>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transfer/0.1/acknowledgement.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht acknowledgement - Bestätigung oder Ablehnung einer Patientenübergabeanfrage",
    "description": "Bestätigung oder Ablehnung einer Patientenübergabeanfrage",
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
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transfer/0.1/completion.schema.json</td></tr>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transfer/0.1/completion.schema.json",
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
