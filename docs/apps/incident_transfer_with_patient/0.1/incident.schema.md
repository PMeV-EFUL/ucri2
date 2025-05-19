

# App-Nachricht incident - Ein Einsatz mit Patientendaten

<p>Ein Einsatz mit Patientendaten</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer_with_patient/0.1/incident.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#internalid">internalId</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#additionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#sentbydispatcherat">sentByDispatcherAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarks">protocolRemarks</a></td><td>Array (vom Typ Object)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#classifications">classifications</a></td><td>Array (vom Typ String)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#issue">issue</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#flashinglights">flashingLights</a></td><td>Boolean</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocation">missionLocation</a></td><td>Object</td><td>Ja</td></tr><tr><td colspan="2"><a href="#patients">patients</a></td><td>Array (vom Typ Object)</td><td>Ja</td></tr><tr><td colspan="2"><a href="#informers">informers</a></td><td>Array (vom Typ Object)</td><td>Nein</td></tr></tbody></table>


## Beispiel



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
                "healthInsuranceCompanyNumber": 101234567,
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


## sharedIncidentId


<table class="jssd-property-table">
  <tbody>
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




## internalId


<table class="jssd-property-table">
  <tbody>
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




## additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




## sentByDispatcherAt


<table class="jssd-property-table">
  <tbody>
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




## protocolRemarks


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

### Eigenschaften der Objekte im Array
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#protocolremarkssharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarkstimestamp">timestamp</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarksmessage">message</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarkstype">type</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#protocolremarkssilent">silent</a></td><td>Boolean</td><td>Nein</td></tr></tbody></table>


### protocolRemarks.sharedIncidentId


<table class="jssd-property-table">
  <tbody>
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




### protocolRemarks.timestamp


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




### protocolRemarks.message


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




### protocolRemarks.type


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




### protocolRemarks.silent


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





## classifications


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




## issue


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




## flashingLights


<table class="jssd-property-table">
  <tbody>
    <tr><th>Typ</th><td colspan="2">Boolean</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




## missionLocation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Einsatz-Zielort</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Ein Einsatz-Zielort. Mindestens eine Koordinate oder Adresse müssen vorhanden sein.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>

### Eigenschaften
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#missionlocationcoordinate">coordinate</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationobject">object</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationsuperiorobject">superiorObject</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationfloor">floor</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationroom">room</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationadditionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### missionLocation.coordinate


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">WGS84-Koordinate</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Eine WGS84-Koordinate. Obligat sind sowohl Breiten- als auch Längengrad.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



### missionLocation.coordinate.lat


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Breitengrad in Grad</td>
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




### missionLocation.coordinate.lon


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Längengrad in Grad</td>
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





### missionLocation.address


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Adresse</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Eine postalische Adresse. Obligat ist nur der Strassenname.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



### missionLocation.address.street


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Name der Strasse</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### missionLocation.address.houseNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Hausnummer</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### missionLocation.address.postalCode


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Postleitzahl</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### missionLocation.address.city


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Stadt</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### missionLocation.address.cityDistrict


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ortsteil</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### missionLocation.address.state


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Bundesland</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### missionLocation.address.country


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Land</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>





### missionLocation.object


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Einsatz-Zielobjekt</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Ein Einsatz-Zielobjekt. Obligat ist der Name des Objekts</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



### missionLocation.object.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Objektname</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### missionLocation.object.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Weitere Informationen zum Einsatzobjekt</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>





### missionLocation.superiorObject


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Einsatz-Zielobjekt</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Ein Einsatz-Zielobjekt. Obligat ist der Name des Objekts</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



### missionLocation.superiorObject.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Objektname</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### missionLocation.superiorObject.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Weitere Informationen zum Einsatzobjekt</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>





### missionLocation.floor


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Etage</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### missionLocation.room


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Zimmer</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### missionLocation.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Weitere Informationen zum Einsatz-Zielort</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>





## patients


<table class="jssd-property-table">
  <tbody>
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

### Eigenschaften der Objekte im Array
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#patientsname">name</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#patientssurname">surname</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsphone">phone</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsemail">email</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsadditionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsgender">gender</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsdateofbirth">dateOfBirth</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsage">age</a></td><td>Number</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientshealthinsuranceinformation">healthInsuranceInformation</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsinitialassessment">initialAssessment</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsinfectioninformation">infectionInformation</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientsinfectionstatus">infectionStatus</a></td><td>Boolean</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientstransportnumber">transportNumber</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### patients.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Nachname</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### patients.surname


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Vorname</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### patients.phone


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Telefonnummer</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### patients.email


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Email-Adresse</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### patients.address


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Adresse</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Eine postalische Adresse. Obligat ist nur der Strassenname.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



### patients.address.street


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Name der Strasse</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### patients.address.houseNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Hausnummer</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patients.address.postalCode


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Postleitzahl</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patients.address.city


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Stadt</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patients.address.cityDistrict


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ortsteil</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patients.address.state


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Bundesland</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patients.address.country


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Land</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>





### patients.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Weitere Informationen zur Person</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### patients.gender


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Geschlecht</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>Male</li><li>Female</li><li>Diverse</li></ul></td>
    </tr>
  </tbody>
</table>




### patients.dateOfBirth


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




### patients.age


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Alter in Jahren</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### patients.healthInsuranceInformation


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



### patients.healthInsuranceInformation.healthInsuranceCompany


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Name der Krankenversicherung</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### patients.healthInsuranceInformation.healthInsuranceCompanyNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">IK der Krankenversicherung</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">TODO besser als String (aufgrund führender Nullen)? Internationale Differenzen berücksichtigen?</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">999999999</td>
    </tr>
  </tbody>
</table>




### patients.healthInsuranceInformation.insuranceNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Versichertennummer (Alphanumerisch)</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





### patients.initialAssessment


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
      <th>Min Properties</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>



### patients.initialAssessment.rmi


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Rückmeldeindikator</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">999</td>
    </tr>
  </tbody>
</table>




### patients.initialAssessment.rmc


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Rückmeldecode</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Integer</td></tr>
    
  </tbody>
</table>




### patients.initialAssessment.pzc


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Patientenzuweisungscode</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">999999</td>
    </tr>
  </tbody>
</table>




### patients.initialAssessment.additionalInformation


<table class="jssd-property-table">
  <tbody>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





### patients.infectionInformation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Informationen ob der Patient ansteckend ist (als Freitext)</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### patients.infectionStatus


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Informationen ob der Patient ansteckend ist (true/false)</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Boolean</td></tr>
    
  </tbody>
</table>




### patients.transportNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Transportnummer</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>





## informers


<table class="jssd-property-table">
  <tbody>
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

### Eigenschaften der Objekte im Array
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#informersname">name</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#informerssurname">surname</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informersphone">phone</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informersemail">email</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informersaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informersadditionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### informers.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Nachname</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### informers.surname


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Vorname</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### informers.phone


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Telefonnummer</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### informers.email


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Email-Adresse</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### informers.address


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Adresse</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Eine postalische Adresse. Obligat ist nur der Strassenname.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>



### informers.address.street


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Name der Strasse</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### informers.address.houseNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Hausnummer</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### informers.address.postalCode


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Postleitzahl</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### informers.address.city


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Stadt</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### informers.address.cityDistrict


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Ortsteil</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### informers.address.state


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Bundesland</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### informers.address.country


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Land</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>





### informers.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Weitere Informationen zur Person</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>










<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer_with_patient/0.1/incident.schema.json",
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
            "description": "global eindeutige UUID des Einsatzes"
        },
        "internalId": {
            "type": "string",
            "description": "Sender-interne ID des Einsatzes"
        },
        "additionalInfo": {
            "type": "string"
        },
        "sentByDispatcherAt": {
            "type": "string",
            "format": "date-time",
            "description": "Zeitpunkt an dem die Übergabe vom Disponenten angestoßen wurde"
        },
        "protocolRemarks": {
            "title": "Protokollvermerke",
            "description": "Protokollvermerke, die mit dem Einsatz übertragen werden. Die sharedIncidentId jedes Vermerks muss mit der sharedIncidentId des Einsatzes übereinstimmen!",
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "#/$defs/notification.schema.json"
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
            "type": "boolean"
        },
        "missionLocation": {
            "$ref": "#/$defs/location.schema.json"
        },
        "patients": {
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "#/$defs/patient.schema.json"
            }
        },
        "informers": {
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "#/$defs/person.schema.json"
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
                        "healthInsuranceCompanyNumber": 101234567,
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
                    "title": "Breitengrad in Grad",
                    "type": "number",
                    "minimum": -90,
                    "maximum": 90
                },
                "lon": {
                    "title": "Längengrad in Grad",
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
            "description": "Eine postalische Adresse. Obligat ist nur der Strassenname.",
            "required": [
                "street"
            ],
            "type": "object",
            "properties": {
                "street": {
                    "title": "Name der Strasse",
                    "type": "string"
                },
                "houseNumber": {
                    "title": "Hausnummer",
                    "type": "string"
                },
                "postalCode": {
                    "title": "Postleitzahl",
                    "type": "string"
                },
                "city": {
                    "title": "Stadt",
                    "type": "string"
                },
                "cityDistrict": {
                    "title": "Ortsteil",
                    "type": "string"
                },
                "state": {
                    "title": "Bundesland",
                    "type": "string"
                },
                "country": {
                    "title": "Land",
                    "type": "string"
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
                    "type": "string"
                },
                "additionalInfo": {
                    "title": "Weitere Informationen zum Einsatzobjekt",
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
                    "$ref": "#/$defs/coordinate.schema.json"
                },
                "address": {
                    "$ref": "#/$defs/address.schema.json"
                },
                "object": {
                    "$ref": "#/$defs/missionObject.schema.json"
                },
                "superiorObject": {
                    "$ref": "#/$defs/missionObject.schema.json"
                },
                "floor": {
                    "title": "Etage",
                    "type": "string"
                },
                "room": {
                    "title": "Zimmer",
                    "type": "string"
                },
                "additionalInfo": {
                    "title": "Weitere Informationen zum Einsatz-Zielort",
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
                    "type": "string"
                },
                "healthInsuranceCompanyNumber": {
                    "title": "IK der Krankenversicherung",
                    "description": "TODO besser als String (aufgrund führender Nullen)? Internationale Differenzen berücksichtigen?",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 999999999
                },
                "insuranceNumber": {
                    "title": "Versichertennummer (Alphanumerisch)",
                    "type": "string"
                }
            },
            "unevaluatedProperties": false,
            "examples": [
                {
                    "healthInsuranceCompany": "Musterkasse",
                    "healthInsuranceCompanyNumber": 101234567,
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
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 999
                },
                "rmc": {
                    "title": "Rückmeldecode",
                    "type": "integer"
                },
                "pzc": {
                    "title": "Patientenzuweisungscode",
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 999999
                },
                "additionalInformation": {
                    "type": "string"
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
            "description": "Ein Patient. Dieser übernimmt alle Eigenschaften von einer Person. Obligat ist nur der Nachname.",
            "required": [
                "name"
            ],
            "type": "object",
            "properties": {
                "name": {
                    "title": "Nachname",
                    "type": "string"
                },
                "surname": {
                    "title": "Vorname",
                    "type": "string"
                },
                "phone": {
                    "title": "Telefonnummer",
                    "type": "string"
                },
                "email": {
                    "title": "Email-Adresse",
                    "type": "string"
                },
                "address": {
                    "$ref": "#/$defs/address.schema.json"
                },
                "additionalInfo": {
                    "title": "Weitere Informationen zur Person",
                    "type": "string"
                },
                "gender": {
                    "title": "Geschlecht",
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
                    "title": "Alter in Jahren",
                    "type": "number",
                    "minimum": 0
                },
                "healthInsuranceInformation": {
                    "$ref": "#/$defs/healthInsuranceInformation.schema.json"
                },
                "initialAssessment": {
                    "$ref": "#/$defs/initialAssessment.schema.json"
                },
                "infectionInformation": {
                    "title": "Informationen ob der Patient ansteckend ist (als Freitext)",
                    "type": "string"
                },
                "infectionStatus": {
                    "title": "Informationen ob der Patient ansteckend ist (true/false)",
                    "type": "boolean"
                },
                "transportNumber": {
                    "title": "Transportnummer",
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
                        "healthInsuranceCompanyNumber": 101234567,
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
                    "type": "string"
                },
                "surname": {
                    "title": "Vorname",
                    "type": "string"
                },
                "phone": {
                    "title": "Telefonnummer",
                    "type": "string"
                },
                "email": {
                    "title": "Email-Adresse",
                    "type": "string"
                },
                "address": {
                    "$ref": "#/$defs/address.schema.json"
                },
                "additionalInfo": {
                    "title": "Weitere Informationen zur Person",
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


