

# App-Nachricht incident - Eine Übergabe-Anfrage für einen Patienten

<p>Eine Übergabe-Anfrage für einen Patienten, der telefonisch erreichbar ist</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/patient_transfer_new/0.1/incident.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#internalid">internalId</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#additionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#sentbydispatcherat">sentByDispatcherAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarks">protocolRemarks</a></td><td>Array (vom Typ Object)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#issue">issue</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patient">patient</a></td><td>Object</td><td>Ja</td></tr><tr><td colspan="2"><a href="#informers">informers</a></td><td>Array (vom Typ Object)</td><td>Nein</td></tr></tbody></table>


## Beispiel



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
            "type": "information",
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





## issue


<table class="jssd-property-table">
  <tbody>
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




## patient


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Patient</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Ein Patient. Dieser übernimmt alle Eigenschaften von einer Person. Obligat ist nur der Nachname.</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>

### Eigenschaften
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#patientname">name</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#patientsurname">surname</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientphone">phone</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#patientemail">email</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientadditionalinfo">additionalInfo</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientgender">gender</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientdateofbirth">dateOfBirth</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientage">age</a></td><td>Number</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patienthealthinsuranceinformation">healthInsuranceInformation</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientinitialassessment">initialAssessment</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientinfectioninformation">infectionInformation</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patientinfectionstatus">infectionStatus</a></td><td>Boolean</td><td>Nein</td></tr><tr><td colspan="2"><a href="#patienttransportnumber">transportNumber</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### patient.name


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Nachname</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### patient.surname


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Vorname</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patient.phone


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Telefonnummer</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Ja</td>
    </tr>
    
  </tbody>
</table>




### patient.email


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Email-Adresse</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patient.address


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



### patient.address.street


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




### patient.address.houseNumber


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




### patient.address.postalCode


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




### patient.address.city


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




### patient.address.cityDistrict


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




### patient.address.state


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




### patient.address.country


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





### patient.additionalInfo


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Weitere Informationen zur Person</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patient.gender


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Geschlecht</td>
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




### patient.dateOfBirth


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




### patient.age


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Alter in Jahren</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patient.healthInsuranceInformation


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



### patient.healthInsuranceInformation.healthInsuranceCompany


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Name der Krankenversicherung</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patient.healthInsuranceInformation.healthInsuranceCompanyNumber


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
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    <tr>
      <th>Maximum</th>
      <td colspan="2">999999999</td>
    </tr>
  </tbody>
</table>




### patient.healthInsuranceInformation.insuranceNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Versichertennummer (Alphanumerisch)</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>





### patient.initialAssessment


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



### patient.initialAssessment.rmi


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Rückmeldeindikator</td>
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




### patient.initialAssessment.rmc


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Rückmeldecode</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Integer</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patient.initialAssessment.pzc


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Patientenzuweisungscode</td>
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




### patient.initialAssessment.additionalInformation


<table class="jssd-property-table">
  <tbody>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>





### patient.infectionInformation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Informationen ob der Patient ansteckend ist (als Freitext)</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patient.infectionStatus


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Informationen ob der Patient ansteckend ist (true/false)</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">Boolean</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
  </tbody>
</table>




### patient.transportNumber


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Transportnummer</td>
    </tr>
    <tr><th>Typ</th><td colspan="2">String</td></tr>
    <tr>
      <th>Obligat?</th>
      <td colspan="2">Nein</td>
    </tr>
    
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
        "issue": {
            "type": "string",
            "enum": [
                "consultation_needed"
            ],
            "description": "Übergabegrund"
        },
        "patient": {
            "$ref": "#/$defs/patient.schema.json",
            "type": "object",
            "required": [
                "name",
                "phone"
            ]
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
            "issue": "consultation_needed",
            "additionalInfo": "Zusatzinformationen",
            "sentByDispatcherAt": "2024-01-01T10:05:08",
            "protocolRemarks": [
                {
                    "sharedIncidentId": "550e8400-e29b-41d4-a716-446655440000",
                    "timestamp": "2024-01-01T10:06:09",
                    "message": "Die Hausnummer des Patienten ist 15c, nicht 15b",
                    "type": "information",
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


