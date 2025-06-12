# UCRI2-App Einsatzmittelanforderung

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
  * [App-Nachricht incident - Ein Einsatz mit Patientendaten](#app-nachricht-incident---ein-einsatz-mit-patientendaten)
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
    + [startTimestamp](#starttimestamp)
    + [classifications](#classifications)
    + [issue](#issue)
    + [flashingLights](#flashinglights)
    + [missionLocation](#missionlocation)
      - [Eigenschaften](#eigenschaften-1)
      - [missionLocation.coordinate](#missionlocationcoordinate)
      - [missionLocation.coordinate.lat](#missionlocationcoordinatelat)
      - [missionLocation.coordinate.lon](#missionlocationcoordinatelon)
      - [missionLocation.address](#missionlocationaddress)
      - [missionLocation.address.street](#missionlocationaddressstreet)
      - [missionLocation.address.houseNumber](#missionlocationaddresshousenumber)
      - [missionLocation.address.postalCode](#missionlocationaddresspostalcode)
      - [missionLocation.address.city](#missionlocationaddresscity)
      - [missionLocation.address.cityDistrict](#missionlocationaddresscitydistrict)
      - [missionLocation.address.state](#missionlocationaddressstate)
      - [missionLocation.address.country](#missionlocationaddresscountry)
      - [missionLocation.object](#missionlocationobject)
      - [missionLocation.object.name](#missionlocationobjectname)
      - [missionLocation.object.additionalInfo](#missionlocationobjectadditionalinfo)
      - [missionLocation.superiorObject](#missionlocationsuperiorobject)
      - [missionLocation.superiorObject.name](#missionlocationsuperiorobjectname)
      - [missionLocation.superiorObject.additionalInfo](#missionlocationsuperiorobjectadditionalinfo)
      - [missionLocation.floor](#missionlocationfloor)
      - [missionLocation.room](#missionlocationroom)
      - [missionLocation.additionalInfo](#missionlocationadditionalinfo)
    + [patients](#patients)
      - [Eigenschaften der Objekte im Array](#eigenschaften-der-objekte-im-array-2)
      - [patients.name](#patientsname)
      - [patients.surname](#patientssurname)
      - [patients.phone](#patientsphone)
      - [patients.email](#patientsemail)
      - [patients.address](#patientsaddress)
      - [patients.address.street](#patientsaddressstreet)
      - [patients.address.houseNumber](#patientsaddresshousenumber)
      - [patients.address.postalCode](#patientsaddresspostalcode)
      - [patients.address.city](#patientsaddresscity)
      - [patients.address.cityDistrict](#patientsaddresscitydistrict)
      - [patients.address.state](#patientsaddressstate)
      - [patients.address.country](#patientsaddresscountry)
      - [patients.additionalInfo](#patientsadditionalinfo)
      - [patients.gender](#patientsgender)
      - [patients.dateOfBirth](#patientsdateofbirth)
      - [patients.age](#patientsage)
      - [patients.healthInsuranceInformation](#patientshealthinsuranceinformation)
      - [patients.healthInsuranceInformation.healthInsuranceCompany](#patientshealthinsuranceinformationhealthinsurancecompany)
      - [patients.healthInsuranceInformation.healthInsuranceCompanyNumber](#patientshealthinsuranceinformationhealthinsurancecompanynumber)
      - [patients.healthInsuranceInformation.insuranceNumber](#patientshealthinsuranceinformationinsurancenumber)
      - [patients.initialAssessment](#patientsinitialassessment)
      - [patients.initialAssessment.rmi](#patientsinitialassessmentrmi)
      - [patients.initialAssessment.rmc](#patientsinitialassessmentrmc)
      - [patients.initialAssessment.pzc](#patientsinitialassessmentpzc)
      - [patients.initialAssessment.additionalInformation](#patientsinitialassessmentadditionalinformation)
      - [patients.infectionInformation](#patientsinfectioninformation)
      - [patients.infectionStatus](#patientsinfectionstatus)
      - [patients.transportNumber](#patientstransportnumber)
    + [requestedResources](#requestedresources)
      - [Eigenschaften der Objekte im Array](#eigenschaften-der-objekte-im-array-3)
      - [requestedResources.resourceRequestId](#requestedresourcesresourcerequestid)
      - [requestedResources.resourceType](#requestedresourcesresourcetype)
      - [requestedResources.resourceName](#requestedresourcesresourcename)
    + [Schema](#schema)
  * [Resource Request Acknowledgement](#resource-request-acknowledgement)
    + [Eigenschaften](#eigenschaften-2)
    + [Beispiel](#beispiel-1)
    + [Beispiel](#beispiel-2)
    + [resourceRequestId](#resourcerequestid)
    + [acknowledgementStatus](#acknowledgementstatus)
    + [acknowledgedAt](#acknowledgedat)
    + [comment](#comment)
    + [Schema](#schema-1)
  * [Resource Acknowledgement](#resource-acknowledgement)
    + [Eigenschaften](#eigenschaften-3)
    + [Beispiel](#beispiel-3)
    + [resourceRequestId](#resourcerequestid-1)
    + [acknowledgedResources](#acknowledgedresources)
      - [Eigenschaften der Objekte im Array](#eigenschaften-der-objekte-im-array-4)
      - [acknowledgedResources.resourceId](#acknowledgedresourcesresourceid)
      - [acknowledgedResources.resourceName](#acknowledgedresourcesresourcename)
      - [acknowledgedResources.resourceType](#acknowledgedresourcesresourcetype)
    + [acknowledgedAt](#acknowledgedat-1)
    + [comment](#comment-1)
    + [Schema](#schema-2)
  * [Resource Deployed](#resource-deployed)
    + [Eigenschaften](#eigenschaften-4)
    + [Beispiel](#beispiel-4)
    + [resourceRequestId](#resourcerequestid-2)
    + [resourceId](#resourceid)
    + [resourceName](#resourcename)
    + [resourceType](#resourcetype)
    + [deployedAt](#deployedat)
    + [comment](#comment-2)
    + [Schema](#schema-3)

<!-- tocstop -->

# Überblick
Der Use Case Einsatzmittelanforderung dient dazu, Einsatzmittel einer anderen Leitstelle als Unterstützung zur Einsatzbewältigung anzufordern. Beispiel: Leitstelle A bekommt einen Verkehrsunfall mit mehreren Verletzten im Grenzgebiet zu Leitstelle B gemeldet. Es werden 5 RTWs benötigt, Leitstelle A kann jedoch nur 4 RTWs im näheren Umfeld disponieren. Leitstelle A fordert bei Leitstelle B einen RTW zur Unterstützung an. Leitstelle B bestätigt die Unterstützung und entsendet entsprechende Einsatzmittel an A.

# Ablaufbeschreibung

1. A->B Einsatzmittelanforderung 
2. B->A Einsatzmittelanforderung vorläufig angenommen oder abgelehnt 
3. B->A Einsatzmittelbereitstellung 
4. B->A Bereitgestelltes EM ausgerückt 

Weitere Statusmeldungen werden nicht durch UCRI abgedeckt und können auf anderem Wege übernommen werden.

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


## App-Nachricht incident - Ein Einsatz mit Patientendaten

<p>Ein Einsatz mit Patientendaten</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/0.1/resource_request.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#internalid">internalId</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#additionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#sentbydispatcherat">sentByDispatcherAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#informers">informers</a></td><td>Array (vom Typ Object)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#protocolremarks">protocolRemarks</a></td><td>Array (vom Typ Object)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#starttimestamp">startTimestamp</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#classifications">classifications</a></td><td>Array (vom Typ String)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#issue">issue</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#flashinglights">flashingLights</a></td><td>Boolean</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocation">missionLocation</a></td><td>Object</td><td>Ja</td></tr><tr><td colspan="2"><a href="#patients">patients</a></td><td>Array (vom Typ Object)</td><td>Ja</td></tr><tr><td colspan="2"><a href="#requestedresources">requestedResources</a></td><td>Array (vom Typ Object)</td><td>Nein</td></tr></tbody></table>


### Beispiel



```
{
    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
    "internalId": "f123456",
    "classifications": [
        "A1",
        "F2"
    ],
    "issue": "Notfall",
    "flashingLights": true,
    "additionalInfo": "Zusatzinformationen",
    "sentByDispatcherAt": "2024-01-01T10:05:08",
    "startTimestamp": "2024-01-01T09:55:15",
    "missionLocation": {
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
    },
    "patients": [
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
    "informers": [
        {
            "name": "Musterfrau",
            "surname": "Heike",
            "phone": "+49 30 234567",
            "email": "heike.musterfrau@example.com"
        }
    ],
    "requestedResources": [
        {
            "resourceRequestId": "10002003",
            "resourceType": "KTW",
            "resourceName": "KTW-1"
        },
        {
            "resourceRequestId": "10002005",
            "resourceType": "RTW",
            "resourceName": "RTW-3"
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





### startTimestamp


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Einsatzbeginn-Zeitstempel</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Zeitpunkt des Einsatzbeginns</td>
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




### classifications


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Stichwortkürzel des Einsatzes</td>
    </tr>
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
      <th>Titel</th>
      <td colspan="2">Taktische Bewertung</td>
    </tr>
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
      <th>Titel</th>
      <td colspan="2">Sonderrechte</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Sonderrechte</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Boolean</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### missionLocation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Einsatzort</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Einsatzort</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>

#### Eigenschaften
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#missionlocationcoordinate">coordinate</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationobject">object</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationsuperiorobject">superiorObject</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationfloor">floor</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationroom">room</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationadditionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr></tbody></table>


#### missionLocation.coordinate


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



#### missionLocation.coordinate.lat


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




#### missionLocation.coordinate.lon


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





#### missionLocation.address


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



#### missionLocation.address.street


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




#### missionLocation.address.houseNumber


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




#### missionLocation.address.postalCode


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




#### missionLocation.address.city


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




#### missionLocation.address.cityDistrict


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




#### missionLocation.address.state


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




#### missionLocation.address.country


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





#### missionLocation.object


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



#### missionLocation.object.name


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




#### missionLocation.object.additionalInfo


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





#### missionLocation.superiorObject


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



#### missionLocation.superiorObject.name


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




#### missionLocation.superiorObject.additionalInfo


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





#### missionLocation.floor


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




#### missionLocation.room


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




#### missionLocation.additionalInfo


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





### patients


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Patienten</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">List der Patienten.</td>
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
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#patientsname">name</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#patientssurname">surname</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsphone">phone</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsemail">email</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsadditionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsgender">gender</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsdateofbirth">dateOfBirth</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsage">age</a></td><td>Number</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientshealthinsuranceinformation">healthInsuranceInformation</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsinitialassessment">initialAssessment</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsinfectioninformation">infectionInformation</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsinfectionstatus">infectionStatus</a></td><td>Boolean</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientstransportnumber">transportNumber</a></td><td>String</td><td>Nein</td></tr></tbody></table>


#### patients.name


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




#### patients.surname


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




#### patients.phone


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




#### patients.email


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




#### patients.address


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



#### patients.address.street


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




#### patients.address.houseNumber


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




#### patients.address.postalCode


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




#### patients.address.city


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




#### patients.address.cityDistrict


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




#### patients.address.state


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




#### patients.address.country


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





#### patients.additionalInfo


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




#### patients.gender


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
      <th>Enum</th>
      <td colspan="2"><ul><li>Male</li><li>Female</li><li>Diverse</li></ul></td>
    </tr>
  </tbody>
</table>




#### patients.dateOfBirth


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
      <th>Format</th>
      <td colspan="2">date</td>
    </tr>
  </tbody>
</table>




#### patients.age


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
    
  </tbody>
</table>




#### patients.healthInsuranceInformation


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
    
  </tbody>
</table>



#### patients.healthInsuranceInformation.healthInsuranceCompany


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
    
  </tbody>
</table>




#### patients.healthInsuranceInformation.healthInsuranceCompanyNumber


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




#### patients.healthInsuranceInformation.insuranceNumber


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
    
  </tbody>
</table>





#### patients.initialAssessment


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
      <th>Min Properties</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>



#### patients.initialAssessment.rmi


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




#### patients.initialAssessment.rmc


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
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr><tr>
      <th>Pattern</th>
      <td colspan="2">^[0-9]*$</td>
    </tr>
  </tbody>
</table>




#### patients.initialAssessment.pzc


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




#### patients.initialAssessment.additionalInformation


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
    
  </tbody>
</table>





#### patients.infectionInformation


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
    
  </tbody>
</table>




#### patients.infectionStatus


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
    
  </tbody>
</table>




#### patients.transportNumber


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
    
  </tbody>
</table>





### requestedResources


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Angeforderte Ressourcen</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Liste der angeforderten Ressourcen.</td>
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
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#requestedresourcesresourcerequestid">resourceRequestId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#requestedresourcesresourcetype">resourceType</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#requestedresourcesresourcename">resourceName</a></td><td>String</td><td>Ja</td></tr></tbody></table>


#### requestedResources.resourceRequestId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Resource Request ID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Eindeutige ID der Ressourcenanforderung.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### requestedResources.resourceType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ressourcentyp</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Typ der Ressource (description gemäß Ressourcentypkatalog).</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### requestedResources.resourceName


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ressourcenname</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Name der Ressource.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>










<hr />

### Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/0.1/resource_request.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht incident - Ein Einsatz mit Patientendaten",
    "description": "Ein Einsatz mit Patientendaten",
    "required": [
        "sharedIncidentId",
        "sentByDispatcherAt",
        "patients",
        "missionLocation"
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
        "startTimestamp": {
            "type": "string",
            "format": "date-time",
            "title": "Einsatzbeginn-Zeitstempel",
            "description": "Zeitpunkt des Einsatzbeginns"
        },
        "classifications": {
            "type": "array",
            "title": "Stichwortkürzel des Einsatzes",
            "description": "Stichwortkürzel des Einsatzes",
            "minItems": 1,
            "items": {
                "title": "Stichwortkürzel",
                "description": "Stichwortkürzel",
                "type": "string"
            }
        },
        "issue": {
            "type": "string",
            "title": "Taktische Bewertung",
            "description": "Taktische Bewertung: Sachverhalt"
        },
        "flashingLights": {
            "title": "Sonderrechte",
            "description": "Sonderrechte",
            "type": "boolean"
        },
        "missionLocation": {
            "title": "Einsatzort",
            "description": "Einsatzort",
            "$ref": "#/$defs/location.schema.json"
        },
        "patients": {
            "title": "Patienten",
            "description": "List der Patienten.",
            "type": "array",
            "minItems": 1,
            "items": {
                "title": "Patient",
                "description": "Ein(e) Patient(in).",
                "$ref": "#/$defs/patient.schema.json"
            }
        },
        "requestedResources": {
            "title": "Angeforderte Ressourcen",
            "description": "Liste der angeforderten Ressourcen.",
            "type": "array",
            "minItems": 1,
            "items": {
                "title": "Angeforderte Ressource",
                "description": "Eine angeforderte Ressource.",
                "type": "object",
                "required": [
                    "resourceRequestId",
                    "resourceType",
                    "resourceName"
                ],
                "properties": {
                    "resourceRequestId": {
                        "title": "Resource Request ID",
                        "description": "Eindeutige ID der Ressourcenanforderung.",
                        "type": "string"
                    },
                    "resourceType": {
                        "title": "Ressourcentyp",
                        "description": "Typ der Ressource (description gemäß Ressourcentypkatalog).",
                        "type": "string"
                    },
                    "resourceName": {
                        "title": "Ressourcenname",
                        "description": "Name der Ressource.",
                        "type": "string"
                    }
                }
            }
        }
    },
    "examples": [
        {
            "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
            "internalId": "f123456",
            "classifications": [
                "A1",
                "F2"
            ],
            "issue": "Notfall",
            "flashingLights": true,
            "additionalInfo": "Zusatzinformationen",
            "sentByDispatcherAt": "2024-01-01T10:05:08",
            "startTimestamp": "2024-01-01T09:55:15",
            "missionLocation": {
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
            },
            "patients": [
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
            "informers": [
                {
                    "name": "Musterfrau",
                    "surname": "Heike",
                    "phone": "+49 30 234567",
                    "email": "heike.musterfrau@example.com"
                }
            ],
            "requestedResources": [
                {
                    "resourceRequestId": "10002003",
                    "resourceType": "KTW",
                    "resourceName": "KTW-1"
                },
                {
                    "resourceRequestId": "10002005",
                    "resourceType": "RTW",
                    "resourceName": "RTW-3"
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





## Resource Request Acknowledgement

<p>Acknowledgement for a resource request, indicating whether the request is accepted or rejected as a whole.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/0.1/acknowledgement.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#resourcerequestid">resourceRequestId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgementstatus">acknowledgementStatus</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedat">acknowledgedAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#comment">comment</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### Beispiel



```
{
    "resourceRequestId": "10002003",
    "acknowledgementStatus": "accepted",
    "acknowledgedAt": "2025-06-11T10:15:00Z"
}
```


### Beispiel



```
{
    "resourceRequestId": "10002005",
    "acknowledgementStatus": "rejected",
    "acknowledgedAt": "2025-06-11T10:16:00Z",
    "comment": "Not enough resources available."
}
```



<hr />


### resourceRequestId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Resource Request ID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">The unique identifier of the resource request being acknowledged.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### acknowledgementStatus


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Acknowledgement Status</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Indicates if the resource request is accepted or rejected as a whole.</td>
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




### acknowledgedAt


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Acknowledged At</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Timestamp when the acknowledgement was issued.</td>
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




### comment


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Kommentar</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Optional comment or reason for rejection.</td>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/0.1/acknowledgement.schema.json",
    "title": "Resource Request Acknowledgement",
    "description": "Acknowledgement for a resource request, indicating whether the request is accepted or rejected as a whole.",
    "type": "object",
    "properties": {
        "resourceRequestId": {
            "title": "Resource Request ID",
            "description": "The unique identifier of the resource request being acknowledged.",
            "type": "string"
        },
        "acknowledgementStatus": {
            "title": "Acknowledgement Status",
            "description": "Indicates if the resource request is accepted or rejected as a whole.",
            "type": "string",
            "enum": [
                "accepted",
                "rejected"
            ]
        },
        "acknowledgedAt": {
            "title": "Acknowledged At",
            "description": "Timestamp when the acknowledgement was issued.",
            "type": "string",
            "format": "date-time"
        },
        "comment": {
            "title": "Kommentar",
            "description": "Optional comment or reason for rejection.",
            "type": "string"
        }
    },
    "required": [
        "resourceRequestId",
        "acknowledgementStatus",
        "acknowledgedAt"
    ],
    "examples": [
        {
            "resourceRequestId": "10002003",
            "acknowledgementStatus": "accepted",
            "acknowledgedAt": "2025-06-11T10:15:00Z"
        },
        {
            "resourceRequestId": "10002005",
            "acknowledgementStatus": "rejected",
            "acknowledgedAt": "2025-06-11T10:16:00Z",
            "comment": "Not enough resources available."
        }
    ]
}
```





## Resource Acknowledgement

<p>Acknowledgement specifying which specific resources are provided in response to a resource request.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/0.1/resource_acknowledgement.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#resourcerequestid">resourceRequestId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedresources">acknowledgedResources</a></td><td>Array (vom Typ Object)</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedat">acknowledgedAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#comment">comment</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### Beispiel



```
{
    "resourceRequestId": "10002003",
    "acknowledgedResources": [
        {
            "resourceId": "1234",
            "resourceName": "KTW-1",
            "resourceType": "KTW"
        },
        {
            "resourceId": "5674",
            "resourceName": "RTW-3",
            "resourceType": "RTW"
        }
    ],
    "acknowledgedAt": "2025-06-11T10:20:00Z"
}
```



<hr />


### resourceRequestId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Resource Request ID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">The unique identifier of the resource request being acknowledged.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### acknowledgedResources


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Acknowledged Resources</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">List of specific resources that are acknowledged/provided in response to the request.</td>
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
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#acknowledgedresourcesresourceid">resourceId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedresourcesresourcename">resourceName</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#acknowledgedresourcesresourcetype">resourceType</a></td><td>String</td><td>Ja</td></tr></tbody></table>


#### acknowledgedResources.resourceId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Resource ID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Unique identifier of the specific resource.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### acknowledgedResources.resourceName


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Resource Name</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Name of the specific resource.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




#### acknowledgedResources.resourceType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Resource Type</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Type of the resource (from resource type catalog).</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





### acknowledgedAt


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Acknowledged At</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Timestamp when the resource acknowledgement was issued.</td>
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




### comment


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Kommentar</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Optional comment or additional information.</td>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/0.1/resource_acknowledgement.schema.json",
    "title": "Resource Acknowledgement",
    "description": "Acknowledgement specifying which specific resources are provided in response to a resource request.",
    "type": "object",
    "properties": {
        "resourceRequestId": {
            "title": "Resource Request ID",
            "description": "The unique identifier of the resource request being acknowledged.",
            "type": "string"
        },
        "acknowledgedResources": {
            "title": "Acknowledged Resources",
            "description": "List of specific resources that are acknowledged/provided in response to the request.",
            "type": "array",
            "minItems": 1,
            "items": {
                "title": "Acknowledged Resource",
                "description": "Die bestätigten Ressourcen",
                "type": "object",
                "required": [
                    "resourceId",
                    "resourceName",
                    "resourceType"
                ],
                "properties": {
                    "resourceId": {
                        "title": "Resource ID",
                        "description": "Unique identifier of the specific resource.",
                        "type": "string"
                    },
                    "resourceName": {
                        "title": "Resource Name",
                        "description": "Name of the specific resource.",
                        "type": "string"
                    },
                    "resourceType": {
                        "title": "Resource Type",
                        "description": "Type of the resource (from resource type catalog).",
                        "type": "string"
                    }
                }
            }
        },
        "acknowledgedAt": {
            "title": "Acknowledged At",
            "description": "Timestamp when the resource acknowledgement was issued.",
            "type": "string",
            "format": "date-time"
        },
        "comment": {
            "title": "Kommentar",
            "description": "Optional comment or additional information.",
            "type": "string"
        }
    },
    "required": [
        "resourceRequestId",
        "acknowledgedResources",
        "acknowledgedAt"
    ],
    "examples": [
        {
            "resourceRequestId": "10002003",
            "acknowledgedResources": [
                {
                    "resourceId": "1234",
                    "resourceName": "KTW-1",
                    "resourceType": "KTW"
                },
                {
                    "resourceId": "5674",
                    "resourceName": "RTW-3",
                    "resourceType": "RTW"
                }
            ],
            "acknowledgedAt": "2025-06-11T10:20:00Z"
        }
    ]
}
```





## Resource Deployed

<p>Indicates which specific resource, originally requested, has been deployed (moved out) and at what time.</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/0.1/resource_deployed.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

### Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#resourcerequestid">resourceRequestId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#resourceid">resourceId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#resourcename">resourceName</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#resourcetype">resourceType</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#deployedat">deployedAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#comment">comment</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### Beispiel



```
{
    "resourceRequestId": "10002003",
    "resourceId": "1234",
    "resourceName": "KTW-1",
    "resourceType": "KTW",
    "deployedAt": "2025-06-11T10:30:00Z"
}
```



<hr />


### resourceRequestId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Resource Request ID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">The unique identifier of the original resource request.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### resourceId


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Resource ID</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Unique identifier of the deployed resource.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### resourceName


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Resource Name</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Name of the deployed resource.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### resourceType


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Resource Type</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Type of the deployed resource (from resource type catalog).</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### deployedAt


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Deployed At</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Timestamp when the resource was deployed (moved out).</td>
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




### comment


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Kommentar</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Optional comment or additional information.</td>
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
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/resource_request/0.1/resource_deployed.schema.json",
    "title": "Resource Deployed",
    "description": "Indicates which specific resource, originally requested, has been deployed (moved out) and at what time.",
    "type": "object",
    "properties": {
        "resourceRequestId": {
            "title": "Resource Request ID",
            "description": "The unique identifier of the original resource request.",
            "type": "string"
        },
        "resourceId": {
            "title": "Resource ID",
            "description": "Unique identifier of the deployed resource.",
            "type": "string"
        },
        "resourceName": {
            "title": "Resource Name",
            "description": "Name of the deployed resource.",
            "type": "string"
        },
        "resourceType": {
            "title": "Resource Type",
            "description": "Type of the deployed resource (from resource type catalog).",
            "type": "string"
        },
        "deployedAt": {
            "title": "Deployed At",
            "description": "Timestamp when the resource was deployed (moved out).",
            "type": "string",
            "format": "date-time"
        },
        "comment": {
            "title": "Kommentar",
            "description": "Optional comment or additional information.",
            "type": "string"
        }
    },
    "required": [
        "resourceRequestId",
        "resourceId",
        "resourceName",
        "resourceType",
        "deployedAt"
    ],
    "examples": [
        {
            "resourceRequestId": "10002003",
            "resourceId": "1234",
            "resourceName": "KTW-1",
            "resourceType": "KTW",
            "deployedAt": "2025-06-11T10:30:00Z"
        }
    ]
}
```
