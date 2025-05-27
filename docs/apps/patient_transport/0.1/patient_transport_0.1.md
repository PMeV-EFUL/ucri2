# UCRI2-App Patiententransport-Anforderung

<!-- toc -->

- [Überblick](#uberblick)
  * [Schema-Beschreibung](#schema-beschreibung)
- [App-Nachrichten](#app-nachrichten)
    + [Verwendete Datentypen](#verwendete-datentypen)
      - [Wahrheitswerte - type: boolean](#wahrheitswerte---type-boolean)
      - [Zahlen - type: number und type:integer](#zahlen---type-number-und-typeinteger)
      - [Zeichenketten - type: string](#zeichenketten---type-string)
      - [Objekte - type: object](#objekte---type-object)
      - [Listen - type: array](#listen---type-array)
  * [App-Nachricht incident - Patiententransport](#app-nachricht-incident---patiententransport)
    + [Eigenschaften](#eigenschaften)
    + [Beispiel](#beispiel)
    + [sharedIncidentId](#sharedincidentid)
    + [internalId](#internalid)
    + [additionalInfo](#additionalinfo)
    + [sentByDispatcherAt](#sentbydispatcherat)
    + [protocolRemarks](#protocolremarks)
      - [Eigenschaften der Objekte im Array](#eigenschaften-der-objekte-im-array)
      - [protocolRemarks.sharedIncidentId](#protocolremarkssharedincidentid)
      - [protocolRemarks.timestamp](#protocolremarkstimestamp)
      - [protocolRemarks.message](#protocolremarksmessage)
      - [protocolRemarks.type](#protocolremarkstype)
      - [protocolRemarks.silent](#protocolremarkssilent)
    + [classifications](#classifications)
    + [issue](#issue)
    + [flashingLights](#flashinglights)
    + [plannedPickupTime](#plannedpickuptime)
    + [arrivalTime](#arrivaltime)
    + [pickupLocation](#pickuplocation)
      - [Eigenschaften](#eigenschaften-1)
      - [pickupLocation.coordinate](#pickuplocationcoordinate)
      - [pickupLocation.coordinate.lat](#pickuplocationcoordinatelat)
      - [pickupLocation.coordinate.lon](#pickuplocationcoordinatelon)
      - [pickupLocation.address](#pickuplocationaddress)
      - [pickupLocation.address.street](#pickuplocationaddressstreet)
      - [pickupLocation.address.houseNumber](#pickuplocationaddresshousenumber)
      - [pickupLocation.address.postalCode](#pickuplocationaddresspostalcode)
      - [pickupLocation.address.city](#pickuplocationaddresscity)
      - [pickupLocation.address.cityDistrict](#pickuplocationaddresscitydistrict)
      - [pickupLocation.address.state](#pickuplocationaddressstate)
      - [pickupLocation.address.country](#pickuplocationaddresscountry)
      - [pickupLocation.object](#pickuplocationobject)
      - [pickupLocation.object.name](#pickuplocationobjectname)
      - [pickupLocation.object.additionalInfo](#pickuplocationobjectadditionalinfo)
      - [pickupLocation.superiorObject](#pickuplocationsuperiorobject)
      - [pickupLocation.superiorObject.name](#pickuplocationsuperiorobjectname)
      - [pickupLocation.superiorObject.additionalInfo](#pickuplocationsuperiorobjectadditionalinfo)
      - [pickupLocation.floor](#pickuplocationfloor)
      - [pickupLocation.room](#pickuplocationroom)
      - [pickupLocation.additionalInfo](#pickuplocationadditionalinfo)
    + [destinationLocation](#destinationlocation)
      - [Eigenschaften](#eigenschaften-2)
      - [destinationLocation.coordinate](#destinationlocationcoordinate)
      - [destinationLocation.coordinate.lat](#destinationlocationcoordinatelat)
      - [destinationLocation.coordinate.lon](#destinationlocationcoordinatelon)
      - [destinationLocation.address](#destinationlocationaddress)
      - [destinationLocation.address.street](#destinationlocationaddressstreet)
      - [destinationLocation.address.houseNumber](#destinationlocationaddresshousenumber)
      - [destinationLocation.address.postalCode](#destinationlocationaddresspostalcode)
      - [destinationLocation.address.city](#destinationlocationaddresscity)
      - [destinationLocation.address.cityDistrict](#destinationlocationaddresscitydistrict)
      - [destinationLocation.address.state](#destinationlocationaddressstate)
      - [destinationLocation.address.country](#destinationlocationaddresscountry)
      - [destinationLocation.object](#destinationlocationobject)
      - [destinationLocation.object.name](#destinationlocationobjectname)
      - [destinationLocation.object.additionalInfo](#destinationlocationobjectadditionalinfo)
      - [destinationLocation.superiorObject](#destinationlocationsuperiorobject)
      - [destinationLocation.superiorObject.name](#destinationlocationsuperiorobjectname)
      - [destinationLocation.superiorObject.additionalInfo](#destinationlocationsuperiorobjectadditionalinfo)
      - [destinationLocation.floor](#destinationlocationfloor)
      - [destinationLocation.room](#destinationlocationroom)
      - [destinationLocation.additionalInfo](#destinationlocationadditionalinfo)
    + [patient](#patient)
      - [Eigenschaften](#eigenschaften-3)
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
    + [informer](#informer)
      - [Eigenschaften](#eigenschaften-4)
      - [informer.name](#informername)
      - [informer.surname](#informersurname)
      - [informer.phone](#informerphone)
      - [informer.email](#informeremail)
      - [informer.address](#informeraddress)
      - [informer.address.street](#informeraddressstreet)
      - [informer.address.houseNumber](#informeraddresshousenumber)
      - [informer.address.postalCode](#informeraddresspostalcode)
      - [informer.address.city](#informeraddresscity)
      - [informer.address.cityDistrict](#informeraddresscitydistrict)
      - [informer.address.state](#informeraddressstate)
      - [informer.address.country](#informeraddresscountry)
      - [informer.additionalInfo](#informeradditionalinfo)
    + [transportType](#transporttype)
    + [Schema](#schema)
  * [App-Nachricht acknowledgement - Bestätigung oder Ablehnung einer Patiententransportanfrage](#app-nachricht-acknowledgement---bestatigung-oder-ablehnung-einer-patiententransportanfrage)
    + [Eigenschaften](#eigenschaften-5)
    + [Beispiel](#beispiel-1)
    + [Beispiel](#beispiel-2)
    + [sharedIncidentId](#sharedincidentid-1)
    + [acknowledgedByDispatcherAt](#acknowledgedbydispatcherat)
    + [status](#status)
    + [plannedPickupTime](#plannedpickuptime-1)
    + [alternativeProposal](#alternativeproposal)
    + [Schema](#schema-1)

<!-- tocstop -->

# Überblick
Der Anwendungsfall für den geplanten Patiententransport wird genutzt, um Einsätze für geplante Patiententransporte an eine andere Leitstelle bzw. Organisation zu übergeben. Die Pickup Locaton stellt in diesem Use Case dabei den Ort dar, an dem der Patient abgeholt werden soll (zB Krankenhaus oder Wohnadresse des Patienten).
Es ist entweder eine Abholzeit oder eine gewünschte Ankunftszeit zu setzen. Sind die Zeiten flexibel zu sehen, so soll dies textuell unter "AdditionalInfo" beschrieben werden. Ebenso muss der Zielort (Transportziel) zwingend befüllt sein. 
Nach Bestätigung der Übergabe kann mit einer zusätzlichen Meldung (Acknowledgement) der tatsächliche Zieltermin des Patiententransports an die anfordernde Leitstelle gemeldet werden.
Wird die Transportanforderung abgelehnt, so kann ein Alternativ-Vorschlag (alternativeProposal) unterbreitet werden. In einem solchen Fall wäre ein erneuter Request (neue Übergabe des Einsatzes) vom anfordernden System zu erstellen.

## Schema-Beschreibung

1.  A->B: Einsatz mit Patient und Zieltermin übergeben
2.  B->A: Übergabe bestätigen
3.  B-> A: Zieltermin übermitteln (optional)
4. B->A: Übergabe ablehnen

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
- **Weitere formateingeschränkte Zeichenketten**: Über das Attribut "pattern" kann ein regulärer Ausdruck (regEx) festgelegt werden, welcher gültige Ausprägungen beschreibt. Um die Verständlichkeit der Spezifikation zu erhöhen, werden solche regulären Ausdrück immer im "description"-Attribut einer Eigenschaft beschrieben, z.B. würde für "pattern:'(0-9)+'" die "description" als Erklärung "Der Wert muss ausschliesslich aus Ziffern bestehen" vorhanden sein.

#### Objekte - type: object
JSON-Objekte werden über "type: object" beschrieben. Hierbei sind in jedem Falle nur die im "properties"-Attribut beschriebenen Objekteigenschaften gültig, weitere Eigenschaften sind nicht zulässig, dies wird über das Attribut "unevaluatedProperties": false festgelegt.

Die obligaten Eigenschaften sind als Liste im Attribut "required" hinterlegt, alle Eigenschaften, die nicht obligat sind, sind optional.

Die Anzahl an minimal vorhandenen Eigenschaften kann über das Attribut "minProperties" festgelegt werden.
#### Listen - type: array
JSON-Listen (arrays) werden über "type: array" beschrieben. Hierbei wird der Typ der Listenelemente über das Attribut "items" beschrieben. Gemischt typisierte Listen sind generell unzulässig. Im Attribut "minItems" kann die minimale Anzahl von Listenelementen beschränkt werden.


## App-Nachricht incident - Patiententransport

<p>Ein Patiententransport mit Patienten- und Transportinformationen</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transport/0.1/incident.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#internalid">internalId</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#additionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#sentbydispatcherat">sentByDispatcherAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarks">protocolRemarks</a></td><td>Array (vom Typ Object)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#classifications">classifications</a></td><td>Array (vom Typ String)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#issue">issue</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#flashinglights">flashingLights</a></td><td>Boolean</td><td>Nein</td></tr><tr><td colspan="2"><a href="#plannedpickuptime">plannedPickupTime</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#arrivaltime">arrivalTime</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#pickuplocation">pickupLocation</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#destinationlocation">destinationLocation</a></td><td>Object</td><td>Ja</td></tr><tr><td colspan="2"><a href="#patient">patient</a></td><td>Object</td><td>Ja</td></tr><tr><td colspan="2"><a href="#informer">informer</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#transporttype">transportType</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### Beispiel



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "internalId": "T123456",
    "classifications": [
        "KTP",
        "P2"
    ],
    "issue": "Krankentransport",
    "flashingLights": false,
    "additionalInfo": "Transport sollte zwischen 14:30 und 15:30 sein",
    "sentByDispatcherAt": "2024-01-01T10:05:08",
    "plannedPickupTime": "2024-01-01T14:30:00",
    "arrivalTime": "2024-01-01T15:15:00",
    "pickupLocation": {
        "coordinate": {
            "lat": 65.453323,
            "lon": 14.542343
        },
        "address": {
            "street": "Klinikstraße",
            "houseNumber": "5",
            "postalCode": "54321",
            "city": "Musterhausen",
            "cityDistrict": "Zentrum",
            "state": "Brandenburg",
            "country": "DE"
        },
        "object": {
            "name": "Station 3B",
            "additionalInfo": "Innere Medizin"
        },
        "superiorObject": {
            "name": "Krankenhaus Musterhausen",
            "additionalInfo": "Hauptgebäude"
        },
        "floor": "3. OG",
        "room": "315",
        "additionalInfo": "Bitte an der Pforte melden"
    },
    "destinationLocation": {
        "coordinate": {
            "lat": 65.443323,
            "lon": 14.552343
        },
        "address": {
            "street": "Pflegeweg",
            "houseNumber": "22",
            "postalCode": "54322",
            "city": "Musterhausen",
            "cityDistrict": "Nord",
            "state": "Brandenburg",
            "country": "DE"
        },
        "object": {
            "name": "Pflegeheim Sonnenblick",
            "additionalInfo": "Pflegestation 2"
        },
        "floor": "1. OG",
        "room": "107",
        "additionalInfo": "Code für Eingangstür: 1234"
    },
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
        "additionalInfo": "gehbehindert",
        "gender": "Male",
        "dateOfBirth": "1940-12-30",
        "age": 83,
        "healthInsuranceInformation": {
            "healthInsuranceCompany": "AOK Brandenburg",
            "healthInsuranceCompanyNumber": "101234567",
            "insuranceNumber": "S123456789"
        },
        "initialAssessment": {
            "rmi": 360,
            "rmc": 360543215,
            "pzc": 360401,
            "additionalInformation": "Patient ist stabil, benötigt Rollstuhl"
        },
        "infectionInformation": "Keine bekannten Infektionen",
        "infectionStatus": false,
        "transportNumber": "T-2024-0042"
    },
    "informer": {
        "name": "Doktor",
        "surname": "Julia",
        "phone": "+49 30 987654",
        "email": "j.doktor@krankenhaus-musterhausen.de"
    },
    "transportType": "liegend mit Beatmung"
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
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#protocolremarkssharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarkstimestamp">timestamp</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarksmessage">message</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarkstype">type</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#protocolremarkssilent">silent</a></td><td>Boolean</td><td>Nein</td></tr></tbody></table>


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




#### protocolRemarks.type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Benachrichtigungstyp</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Typ der Benachrichtigung. Aktuell ist dieser Typ frei wählbar</td>
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





### classifications


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Stichwortkürzel des Einsatzes</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Array (vom Typ String)</td></tr>
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




### issue


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Taktische Bewertung: Sachverhalt</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### flashingLights


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Blaulichtfahrt notwendig</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Boolean</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### plannedPickupTime


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Geplante Abholzeit des Patienten</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### arrivalTime


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Geplante Ankunftszeit am Zielort</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### pickupLocation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Einsatz-Zielort</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Abholort des Patienten</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>

#### Eigenschaften
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#pickuplocationcoordinate">coordinate</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#pickuplocationaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#pickuplocationobject">object</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#pickuplocationsuperiorobject">superiorObject</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#pickuplocationfloor">floor</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#pickuplocationroom">room</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#pickuplocationadditionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr></tbody></table>


#### pickupLocation.coordinate


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Koordinate</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Ortskoordinate.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



#### pickupLocation.coordinate.lat


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Breitengrad</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Breitengrad in Grad gemäß WGS84-Spezifikation</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
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




#### pickupLocation.coordinate.lon


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Längengrad</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Längengrad in Grad gemäß WGS84-Spezifikation</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
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





#### pickupLocation.address


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Adresse</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Adresse des Orts.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



#### pickupLocation.address.street


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




#### pickupLocation.address.houseNumber


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




#### pickupLocation.address.postalCode


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
      <td colspan="2">[0-9]+</td>
    </tr>
  </tbody>
</table>




#### pickupLocation.address.city


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




#### pickupLocation.address.cityDistrict


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




#### pickupLocation.address.state


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




#### pickupLocation.address.country


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
      <td colspan="2">[A-Z]{2}</td>
    </tr>
  </tbody>
</table>





#### pickupLocation.object


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Objekt</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Das Objekt.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



#### pickupLocation.object.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Objektname</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Name des Objekts.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




#### pickupLocation.object.additionalInfo


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





#### pickupLocation.superiorObject


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Übergeordnetes Objekt</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Das übergeordnete Objekt.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



#### pickupLocation.superiorObject.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Objektname</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Name des Objekts.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




#### pickupLocation.superiorObject.additionalInfo


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





#### pickupLocation.floor


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Etage</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Etage.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### pickupLocation.room


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Zimmernummer</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Zimmernummer.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### pickupLocation.additionalInfo


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





### destinationLocation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Einsatz-Zielort</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zielort des Patienten</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>

#### Eigenschaften
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#destinationlocationcoordinate">coordinate</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#destinationlocationaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#destinationlocationobject">object</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#destinationlocationsuperiorobject">superiorObject</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#destinationlocationfloor">floor</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#destinationlocationroom">room</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#destinationlocationadditionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr></tbody></table>


#### destinationLocation.coordinate


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Koordinate</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Ortskoordinate.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



#### destinationLocation.coordinate.lat


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Breitengrad</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Breitengrad in Grad gemäß WGS84-Spezifikation</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
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




#### destinationLocation.coordinate.lon


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Längengrad</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Längengrad in Grad gemäß WGS84-Spezifikation</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
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





#### destinationLocation.address


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Adresse</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Adresse des Orts.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



#### destinationLocation.address.street


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




#### destinationLocation.address.houseNumber


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




#### destinationLocation.address.postalCode


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
      <td colspan="2">[0-9]+</td>
    </tr>
  </tbody>
</table>




#### destinationLocation.address.city


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




#### destinationLocation.address.cityDistrict


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




#### destinationLocation.address.state


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




#### destinationLocation.address.country


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
      <td colspan="2">[A-Z]{2}</td>
    </tr>
  </tbody>
</table>





#### destinationLocation.object


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Objekt</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Das Objekt.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



#### destinationLocation.object.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Objektname</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Name des Objekts.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




#### destinationLocation.object.additionalInfo


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





#### destinationLocation.superiorObject


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Übergeordnetes Objekt</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Das übergeordnete Objekt.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



#### destinationLocation.superiorObject.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Objektname</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der Name des Objekts.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




#### destinationLocation.superiorObject.additionalInfo


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





#### destinationLocation.floor


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Etage</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Etage.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### destinationLocation.room


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Zimmernummer</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Die Zimmernummer.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### destinationLocation.additionalInfo


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





### patient


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Patient</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Der zu transportierende Patient</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>

#### Eigenschaften
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#patientname">name</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#patientsurname">surname</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientphone">phone</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientemail">email</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientadditionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientgender">gender</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientdateofbirth">dateOfBirth</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientage">age</a></td><td>Number</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patienthealthinsuranceinformation">healthInsuranceInformation</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientinitialassessment">initialAssessment</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientinfectioninformation">infectionInformation</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientinfectionstatus">infectionStatus</a></td><td>Boolean</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patienttransportnumber">transportNumber</a></td><td>String</td><td>Nein</td></tr></tbody></table>


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
      <td colspan="2">Nein</td>
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
      <td colspan="2">[0-9]+</td>
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
      <td colspan="2">[A-Z]{2}</td>
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
      <td colspan="2">(0-9)*</td>
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
      <td colspan="2">Eine Ersteinschätzung eines Patienten. Mindestens eine Eigenschaft (rmi, rmc, pzc oder additionalInformation) muss vorhanden sein. TODO numerische Codes besser als string (wegen führender Nullen)?</td>
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
      <td colspan="2">Der Rückmeldeindikator.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">999</td>
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
      <td colspan="2">Der Rückmeldecode.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
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
      <td colspan="2">Der Patientenzuweisungscode.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">999999</td>
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
      <td colspan="2">Zusätzliche Freitext-Informationen zur Ersteinschätzung, welche nicht in anderen Feldern dargestellt werden können. TODO der Name ist hier nicht sinnvoll, oder?</td>
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





### informer


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Person</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Person, die den Transport angefordert hat</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>

#### Eigenschaften
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#informername">name</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#informersurname">surname</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informerphone">phone</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informeremail">email</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informeraddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informeradditionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr></tbody></table>


#### informer.name


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




#### informer.surname


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




#### informer.phone


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
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




#### informer.email


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




#### informer.address


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



#### informer.address.street


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




#### informer.address.houseNumber


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




#### informer.address.postalCode


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
      <td colspan="2">[0-9]+</td>
    </tr>
  </tbody>
</table>




#### informer.address.city


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




#### informer.address.cityDistrict


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




#### informer.address.state


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




#### informer.address.country


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
      <td colspan="2">[A-Z]{2}</td>
    </tr>
  </tbody>
</table>





#### informer.additionalInfo


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





### transportType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Art der Patientenbeförderung (z.B. sitzend, liegend, Spezial- oder Intensivtransport)</td>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transport/0.1/incident.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht incident - Patiententransport",
    "description": "Ein Patiententransport mit Patienten- und Transportinformationen",
    "required": [
        "sharedIncidentId",
        "sentByDispatcherAt",
        "patient",
        "destinationLocation"
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
        "classifications": {
            "type": "array",
            "description": "Stichwortkürzel des Einsatzes",
            "minItems": 1,
            "items": {
                "type": "string"
            }
        },
        "issue": {
            "type": "string",
            "description": "Taktische Bewertung: Sachverhalt"
        },
        "flashingLights": {
            "type": "boolean",
            "description": "Blaulichtfahrt notwendig"
        },
        "plannedPickupTime": {
            "type": "string",
            "format": "date-time",
            "description": "Geplante Abholzeit des Patienten"
        },
        "arrivalTime": {
            "type": "string",
            "format": "date-time",
            "description": "Geplante Ankunftszeit am Zielort"
        },
        "pickupLocation": {
            "$ref": "#/$defs/location.schema.json",
            "description": "Abholort des Patienten"
        },
        "destinationLocation": {
            "$ref": "#/$defs/location.schema.json",
            "description": "Zielort des Patienten"
        },
        "patient": {
            "$ref": "#/$defs/patient.schema.json",
            "description": "Der zu transportierende Patient"
        },
        "informer": {
            "$ref": "#/$defs/person.schema.json",
            "description": "Person, die den Transport angefordert hat"
        },
        "transportType": {
            "type": "string",
            "description": "Art der Patientenbeförderung (z.B. sitzend, liegend, Spezial- oder Intensivtransport)"
        }
    },
    "examples": [
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "internalId": "T123456",
            "classifications": [
                "KTP",
                "P2"
            ],
            "issue": "Krankentransport",
            "flashingLights": false,
            "additionalInfo": "Transport sollte zwischen 14:30 und 15:30 sein",
            "sentByDispatcherAt": "2024-01-01T10:05:08",
            "plannedPickupTime": "2024-01-01T14:30:00",
            "arrivalTime": "2024-01-01T15:15:00",
            "pickupLocation": {
                "coordinate": {
                    "lat": 65.453323,
                    "lon": 14.542343
                },
                "address": {
                    "street": "Klinikstraße",
                    "houseNumber": "5",
                    "postalCode": "54321",
                    "city": "Musterhausen",
                    "cityDistrict": "Zentrum",
                    "state": "Brandenburg",
                    "country": "DE"
                },
                "object": {
                    "name": "Station 3B",
                    "additionalInfo": "Innere Medizin"
                },
                "superiorObject": {
                    "name": "Krankenhaus Musterhausen",
                    "additionalInfo": "Hauptgebäude"
                },
                "floor": "3. OG",
                "room": "315",
                "additionalInfo": "Bitte an der Pforte melden"
            },
            "destinationLocation": {
                "coordinate": {
                    "lat": 65.443323,
                    "lon": 14.552343
                },
                "address": {
                    "street": "Pflegeweg",
                    "houseNumber": "22",
                    "postalCode": "54322",
                    "city": "Musterhausen",
                    "cityDistrict": "Nord",
                    "state": "Brandenburg",
                    "country": "DE"
                },
                "object": {
                    "name": "Pflegeheim Sonnenblick",
                    "additionalInfo": "Pflegestation 2"
                },
                "floor": "1. OG",
                "room": "107",
                "additionalInfo": "Code für Eingangstür: 1234"
            },
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
                "additionalInfo": "gehbehindert",
                "gender": "Male",
                "dateOfBirth": "1940-12-30",
                "age": 83,
                "healthInsuranceInformation": {
                    "healthInsuranceCompany": "AOK Brandenburg",
                    "healthInsuranceCompanyNumber": "101234567",
                    "insuranceNumber": "S123456789"
                },
                "initialAssessment": {
                    "rmi": 360,
                    "rmc": 360543215,
                    "pzc": 360401,
                    "additionalInformation": "Patient ist stabil, benötigt Rollstuhl"
                },
                "infectionInformation": "Keine bekannten Infektionen",
                "infectionStatus": false,
                "transportNumber": "T-2024-0042"
            },
            "informer": {
                "name": "Doktor",
                "surname": "Julia",
                "phone": "+49 30 987654",
                "email": "j.doktor@krankenhaus-musterhausen.de"
            },
            "transportType": "liegend mit Beatmung"
        }
    ],
    "$defs": {
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
                "type": {
                    "title": "Benachrichtigungstyp",
                    "description": "Typ der Benachrichtigung. Aktuell ist dieser Typ frei wählbar",
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
                    "type": "information",
                    "silent": true
                }
            ]
        },
        "coordinate.schema.json": {
            "title": "WGS84-Koordinate",
            "description": "Eine WGS84-Koordinate. Obligat sind sowohl Breiten- als auch Längengrad.",
            "required": [
                "lat",
                "lon"
            ],
            "type": "object",
            "properties": {
                "lat": {
                    "title": "Breitengrad",
                    "description": "Breitengrad in Grad gemäß WGS84-Spezifikation",
                    "type": "number",
                    "minimum": -90,
                    "maximum": 90
                },
                "lon": {
                    "title": "Längengrad",
                    "description": "Längengrad in Grad gemäß WGS84-Spezifikation",
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
        },
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
                    "pattern": "[0-9]+"
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
                    "pattern": "[A-Z]{2}"
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
        "missionObject.schema.json": {
            "title": "Einsatz-Zielobjekt",
            "description": "Ein Einsatz-Zielobjekt. Obligat ist der Name des Objekts",
            "required": [
                "name"
            ],
            "type": "object",
            "properties": {
                "name": {
                    "title": "Objektname",
                    "description": "Der Name des Objekts.",
                    "type": "string"
                },
                "additionalInfo": {
                    "title": "Zusatzinformationen",
                    "description": "Zusätzliche Freitext-Informationen, welche nicht in anderen Feldern dargestellt werden können.",
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
        },
        "location.schema.json": {
            "title": "Einsatz-Zielort",
            "description": "Ein Einsatz-Zielort. Mindestens eine Koordinate oder Adresse müssen vorhanden sein.",
            "anyOf": [
                {
                    "required": [
                        "coordinate"
                    ]
                },
                {
                    "required": [
                        "address"
                    ]
                }
            ],
            "type": "object",
            "properties": {
                "coordinate": {
                    "$ref": "#/$defs/coordinate.schema.json",
                    "title": "Koordinate",
                    "description": "Die Ortskoordinate."
                },
                "address": {
                    "$ref": "#/$defs/address.schema.json",
                    "title": "Adresse",
                    "description": "Die Adresse des Orts."
                },
                "object": {
                    "$ref": "#/$defs/missionObject.schema.json",
                    "title": "Objekt",
                    "description": "Das Objekt."
                },
                "superiorObject": {
                    "$ref": "#/$defs/missionObject.schema.json",
                    "title": "Übergeordnetes Objekt",
                    "description": "Das übergeordnete Objekt."
                },
                "floor": {
                    "title": "Etage",
                    "description": "Die Etage.",
                    "type": "string"
                },
                "room": {
                    "title": "Zimmernummer",
                    "description": "Die Zimmernummer.",
                    "type": "string"
                },
                "additionalInfo": {
                    "title": "Zusatzinformationen",
                    "description": "Zusätzliche Freitext-Informationen, welche nicht in anderen Feldern dargestellt werden können.",
                    "type": "string"
                }
            },
            "unevaluatedProperties": false,
            "examples": [
                {
                    "coordinate": {
                        "lat": 65.453323,
                        "lon": 14.542343
                    },
                    "address": {
                        "street": "Musterstrasse",
                        "houseNumber": "15b",
                        "postalCode": "12345",
                        "city": "Musterhausen",
                        "cityDistrict": "Musterberg",
                        "state": "Brandenburg",
                        "country": "DE"
                    },
                    "object": {
                        "name": "Abteilung IV, Haus 3",
                        "additionalInfo": "Campus West"
                    },
                    "superiorObject": {
                        "name": "Krankenhaus Musterstift",
                        "additionalInfo": "Weitere Informationen"
                    },
                    "floor": "3. OG",
                    "room": "412",
                    "additionalInfo": "Weitere Informationen"
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
                    "pattern": "(0-9)*",
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
            "description": "Eine Ersteinschätzung eines Patienten. Mindestens eine Eigenschaft (rmi, rmc, pzc oder additionalInformation) muss vorhanden sein. TODO numerische Codes besser als string (wegen führender Nullen)?",
            "required": [],
            "type": "object",
            "minProperties": 1,
            "properties": {
                "rmi": {
                    "title": "Rückmeldeindikator",
                    "description": "Der Rückmeldeindikator.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 999
                },
                "rmc": {
                    "title": "Rückmeldecode",
                    "description": "Der Rückmeldecode.",
                    "type": "integer"
                },
                "pzc": {
                    "title": "Patientenzuweisungscode",
                    "description": "Der Patientenzuweisungscode.",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 999999
                },
                "additionalInformation": {
                    "type": "string",
                    "title": "Zusatzinformationen",
                    "description": "Zusätzliche Freitext-Informationen zur Ersteinschätzung, welche nicht in anderen Feldern dargestellt werden können. TODO der Name ist hier nicht sinnvoll, oder?"
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
                    "description": "Eine Ersteinschätzung eines Patienten. Mindestens eine Eigenschaft (rmi, rmc, pzc oder additionalInformation) muss vorhanden sein. TODO numerische Codes besser als string (wegen führender Nullen)?"
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
                        "rmi": 360,
                        "rmc": 360543215,
                        "pzc": 360401,
                        "additionalInformation": "unspezifischer Notfall"
                    },
                    "infectionInformation": "potentiell ansteckend",
                    "infectionStatus": true,
                    "transportNumber": "123456"
                }
            ],
            "unevaluatedProperties": false
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
        }
    }
}
```





## App-Nachricht acknowledgement - Bestätigung oder Ablehnung einer Patiententransportanfrage

<p>Bestätigung oder Ablehnung einer Patiententransportanfrage</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transport/0.1/acknowledgement.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedbydispatcherat">acknowledgedByDispatcherAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#status">status</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#plannedpickuptime">plannedPickupTime</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#alternativeproposal">alternativeProposal</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### Beispiel



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "acknowledgedByDispatcherAt": "2024-01-01T10:06:09",
    "status": "accepted",
    "plannedPickupTime": "2024-01-01T14:15:00"
}
```


### Beispiel



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "acknowledgedByDispatcherAt": "2024-01-01T10:06:09",
    "status": "rejected",
    "alternativeProposal": "Transport am nächsten Tag um 9:00 Uhr möglich"
}
```



<hr />


### sharedIncidentId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">global eindeutige UUID des Transports</td>
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




### plannedPickupTime


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Geplante Abholzeit des Patienten</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Format</th>
      <td colspan="2">date-time</td>
    </tr>
  </tbody>
</table>




### alternativeProposal


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Alternativer Vorschlag bei Ablehnung (z.B. anderer Zeitpunkt)</td>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transport/0.1/acknowledgement.schema.json",
    "title": "App-Nachricht acknowledgement - Bestätigung oder Ablehnung einer Patiententransportanfrage",
    "description": "Bestätigung oder Ablehnung einer Patiententransportanfrage",
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
            "description": "global eindeutige UUID des Transports"
        },
        "acknowledgedByDispatcherAt": {
            "type": "string",
            "format": "date-time",
            "description": "Zeitpunkt an dem die Annahme oder Ablehnung vom Disponenten ausgelöst wurde"
        },
        "status": {
            "type": "string",
            "enum": [
                "accepted",
                "rejected"
            ],
            "description": "Annahme- oder Ablehnungsstatus"
        },
        "plannedPickupTime": {
            "type": "string",
            "format": "date-time",
            "description": "Geplante Abholzeit des Patienten"
        },
        "alternativeProposal": {
            "type": "string",
            "description": "Alternativer Vorschlag bei Ablehnung (z.B. anderer Zeitpunkt)"
        }
    },
    "unevaluatedProperties": false,
    "examples": [
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "acknowledgedByDispatcherAt": "2024-01-01T10:06:09",
            "status": "accepted",
            "plannedPickupTime": "2024-01-01T14:15:00"
        },
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "acknowledgedByDispatcherAt": "2024-01-01T10:06:09",
            "status": "rejected",
            "alternativeProposal": "Transport am nächsten Tag um 9:00 Uhr möglich"
        }
    ]
}
```
