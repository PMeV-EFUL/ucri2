

# App-Nachricht incident - Ein Einsatz mit Patientendaten

<p>Ein Einsatz mit Patientendaten</p>

<table>
<tbody>
<tr><th>$id</th><td>https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer/1.0/incident.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Eigenschaften

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#sharedincidentid">sharedIncidentId</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#internalid">internalId</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#additionalinformation">additionalInformation</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#sentbydispatcherat">sentByDispatcherAt</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#informers">informers</a></td><td>Array (vom Typ Object)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#protocolremarks">protocolRemarks</a></td><td>Array (vom Typ Object)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#starttimestamp">startTimestamp</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#classifications">classifications</a></td><td>Array (vom Typ String)</td><td>Nein</td></tr><tr><td colspan="2"><a href="#issue">issue</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#flashinglights">flashingLights</a></td><td>Boolean</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocation">missionLocation</a></td><td>Object</td><td>Ja</td></tr></tbody></table>


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
    "additionalInformation": "Zusatzinformationen",
    "sentByDispatcherAt": "2024-01-01T10:05:08Z",
    "startTimestamp": "2024-01-01T09:55:15Z",
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
            "additionalInformation": "Campus West"
        },
        "superiorObject": {
            "name": "Krankenhaus Musterstift",
            "additionalInformation": "Weitere Informationen"
        },
        "floor": "3. OG",
        "room": "412",
        "additionalInformation": "Weitere Informationen"
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




## internalId


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




## additionalInformation


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




## sentByDispatcherAt


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




## informers


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

### Eigenschaften der Objekte im Array
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#informersname">name</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#informerssurname">surname</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informersphone">phone</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informersemail">email</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informersaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#informersadditionalinformation">additionalInformation</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### informers.name


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




### informers.surname


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




### informers.phone


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




### informers.email


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




### informers.address


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



### informers.address.street


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




### informers.address.houseNumber


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




### informers.address.postalCode


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




### informers.address.city


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




### informers.address.cityDistrict


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




### informers.address.state


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




### informers.address.country


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




### informers.address.additionalInformation


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





### informers.additionalInformation


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





## protocolRemarks


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Titel</th>
      <td colspan="2">Protokollvermerke</td>
    </tr>
    <tr>
      <th>Beschreibung</th>
      <td colspan="2">Protokollvermerke, die mit dem Einsatz übertragen werden.</td>
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
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#protocolremarkstimestamp">timestamp</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarksmessage">message</a></td><td>String</td><td>Ja</td></tr><tr><td colspan="2"><a href="#protocolremarkscategory">category</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#protocolremarkssilent">silent</a></td><td>Boolean</td><td>Nein</td></tr></tbody></table>


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




### protocolRemarks.category


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





## startTimestamp


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




## classifications


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




## issue


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




## flashingLights


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




## missionLocation


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

### Eigenschaften
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Typ</th><th>Obligat?</th></tr></thead><tbody><tr><td colspan="2"><a href="#missionlocationcoordinate">coordinate</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationaddress">address</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationobject">object</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationsuperiorobject">superiorObject</a></td><td>Object</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationfloor">floor</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationroom">room</a></td><td>String</td><td>Nein</td></tr><tr><td colspan="2"><a href="#missionlocationadditionalinformation">additionalInformation</a></td><td>String</td><td>Nein</td></tr></tbody></table>


### missionLocation.coordinate


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



### missionLocation.coordinate.lat


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




### missionLocation.coordinate.lon


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





### missionLocation.address


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



### missionLocation.address.street


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




### missionLocation.address.houseNumber


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




### missionLocation.address.postalCode


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




### missionLocation.address.city


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




### missionLocation.address.cityDistrict


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




### missionLocation.address.state


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




### missionLocation.address.country


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




### missionLocation.address.additionalInformation


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





### missionLocation.object


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



### missionLocation.object.name


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




### missionLocation.object.additionalInformation


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





### missionLocation.superiorObject


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



### missionLocation.superiorObject.name


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




### missionLocation.superiorObject.additionalInformation


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





### missionLocation.floor


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




### missionLocation.room


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




### missionLocation.additionalInformation


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

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer/1.0/incident.schema.json",
    "unevaluatedProperties": false,
    "title": "App-Nachricht incident - Ein Einsatz mit Patientendaten",
    "description": "Ein Einsatz mit Patientendaten",
    "required": [
        "sharedIncidentId",
        "sentByDispatcherAt",
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
        "additionalInformation": {
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
            "description": "Protokollvermerke, die mit dem Einsatz übertragen werden.",
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
            "additionalInformation": "Zusatzinformationen",
            "sentByDispatcherAt": "2024-01-01T10:05:08Z",
            "startTimestamp": "2024-01-01T09:55:15Z",
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
                    "additionalInformation": "Campus West"
                },
                "superiorObject": {
                    "name": "Krankenhaus Musterstift",
                    "additionalInformation": "Weitere Informationen"
                },
                "floor": "3. OG",
                "room": "412",
                "additionalInformation": "Weitere Informationen"
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
                "additionalInformation": {
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
                    "additionalInformation": "weitere Informationen"
                }
            ],
            "unevaluatedProperties": false
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
                },
                "additionalInformation": {
                    "title": "Zusatzinformationen",
                    "description": "Zusätzliche Freitext-Informationen, welche nicht in anderen Feldern dargestellt werden können.",
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
                "additionalInformation": {
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
                        "additionalInformation": "Campus West"
                    },
                    "superiorObject": {
                        "name": "Krankenhaus Musterstift",
                        "additionalInformation": "Weitere Informationen"
                    },
                    "floor": "3. OG",
                    "room": "412",
                    "additionalInformation": "Weitere Informationen"
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
                "additionalInformation": {
                    "title": "Zusatzinformationen",
                    "description": "Zusätzliche Freitext-Informationen, welche nicht in anderen Feldern dargestellt werden können.",
                    "type": "string"
                }
            },
            "unevaluatedProperties": false,
            "examples": [
                {
                    "name": "Krankenhaus Musterstift",
                    "additionalInformation": "Weitere Informationen"
                }
            ]
        }
    }
}
```


