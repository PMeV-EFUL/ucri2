[Vermittlungsebene](messaging.md)

# UCRI2 Kommunikationsprotokoll

UCRI2 unterscheidet zwei Kommunikationsdomäne, siehe Abbildung:

- Kommunikation zwischen einem Leitstellensystem (KT-System) und einem UCRI Leitstellenmodul (UCRM). Diese Kommunikation erfolgt typischerweise innerhalb einer durch einen Leitstellenbetreiber kontrollierten Infrastruktur.
- Kommunikation zwischen zwei UCRM. Die Inter-UCRM-Kommunikation kann über das öffentliche Internet stattfinden und braucht dementsprechend besondere Sicherheitsmaßnahmen.

![UCRI2 Kommunikationsdomäne](ucrm-protocol.drawio.svg)

Jegliche Kommunikation findet TLS verschlüsselt statt.

Die UCRM API wird sowohl KT-seitig als auch für die Inter-CRM-Kommunikation verwendet.

Zwischen zwei CRM wird mTLS als Sicherung der beidseitigen Kommunikation verwendet. Damit wird die Kommunikation auf eine geschlossene Gruppe der Teilnehmer beschränkt. Das Zertifikatsmanagement wird an eine zentrale (z.B. eine öffentliche) Zertifizierungsstelle delegiert.

Die Kommunikation zwischen einem KT-System und dem CRM-Module kann je nach lokalen Anforderungen wahlweise per TLS oder mTLS erfolgen.

## Nachrichtenübermittlung

Die ausgehenden Nachrichten übergibt das KT-System an das UCRM-Modul m.H.v. API-Endpunkt /send. Die Nachrichten werden dann durch UCRM gegen Empfänger-UCRM gepuscht. Dabei wird die gleiche Schnittstelle /send verwendet. Für das Handling von Nichtverfügbarkeit der Partner-UCRMs wird in UCRM ein Ausgangspuffer implementiert.

Die API /receive wird in der Inter-UCRM-Kommunikation nicht eingesetzt und auch nicht unterstützt - das UCRM liefert in diesem Fall einen Fehler (Not Autorized).

## KT-Register

Jeder UCRM baut einen lokalen Cache des KT-Registers durch regelmäßige Aufrufe der KT-Register API /registry an allen bekannten Partner-UCRM.

Die Umsetzung der UCRM API /registry berücksichtigt das UCRI-Rollenkonzept:

- Bei KT-Anfragen werden alle bekannten KT geliefert.
- Bei UCRM-Anfragen werden nur eigene KT geliefert.

Da die Umgebung dynamisch ist, d.h. neue KT können dazukommen, existierende KT können abgebaut werden, sollen KT-Register-Abfragen sowohl KT-seitig als auch in der Inter-UCRM-Kommunikation regelmäßig durchgeführt werden. Empfehlung: mindestens 1 Mal pro Stunde, maximal alle 5 Minuten.

## E2E Verschlüsselung und Datenintegrität

Als Richtlinie für die Auswahl kryptographischer Verfahren für die Verschlüsselung und Signieren von Nachrichten dient die BSI Technische Richtlinie (https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/TechnischeRichtlinien/TR02102/BSI-TR-02102.pdf?__blob=publicationFile&v=9).

Das asymmetrische kryptographische RSA-Verfahren RSASSA-PKCS1-v1_5 ([RFC 3447:  Public-Key Cryptography Standards (PKCS) #1: RSA Cryptography Specifications Version 2.1](https://www.rfc-editor.org/rfc/rfc3447#section-8.2)) wird sowohl zum Verschlüsseln als auch zum digitalen Signieren der Nachrichten verwendet.

Das Verfahren verwendet ein für jeden KT generiertes Schlüsselpaar, bestehend aus einem privaten Schlüssel und einem öffentlichen Schlüssel. Der private Schlüssel wird im Keystore des CRM gespeichert.

Die öffentlichen Schlüssel werden über KT-Register als Teil der verfügbaren KT-Daten in Form von JSON Web Key (JWK, [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)) ausgetauscht.

### Verschlüsselung

Da jegliche Kommunikation zwischen KT und UCRM und zwischen UCRMs TLS verschlüsselt stattfindet, kann es auf eine E2E-Veschlüsselung des Nachrichteninhaltes verzichtet werden. Um die strengeren Sicherheitsanforderungen vor allem bei der Kommunikation über das Internet zu erfüllen, kann es später jedoch sinnvoll sein, den Nachrichteninhalt zusätzlich Ende-Zu-Ende, d.h. zwischen dem Sender-UCRM und dem Empfänger-UCRM, zu verschlüsseln.

Für die Verschlüsselung wird dann das RSA-Verfahren RSASSA-PKCS1-v1_5 ([RFC 3447:  Public-Key Cryptography Standards (PKCS) #1: RSA Cryptography Specifications Version 2.1](https://www.rfc-editor.org/rfc/rfc3447#section-8.2)) verwendet.

Der Nachrichtensender (UCRM) verschlüsselt den Inhalt des Feldes payload aus dem Nachrichtenumschlag mit dem öffentlichen Schlüssel des Empfängers und das UCRM des Empfängers verwendet dann seinen privaten Schlüssel zum Entschlüsseln von Daten.

Das konkrete Verschlüsselungsverfahren wird bei Bedarf später spezifiziert.

### Signaturverfahren

Nachrichtensignatur stellt sicher, dass eine Nachricht während der Übertragung nicht verändert wurde und dass sie von der angegebenen Quelle stammt. Für das Signieren wird das Verfahren nach dem IETF Standard  JSON Web Signature (JWS, [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)) in Kombination mit dem RSA-Verfahren RSASSA-PKCS1-v1_5 verwendet.

Mit Hilfe eines Headers wird das Verschlüsselungsverfahren beschrieben:

```
{
  "typ": "UCRI_PLAIN",
  "alg": "RSA256"
}
```

Der Sender einer Nachricht erstellt zunächst einen Hash der Nachricht. Dabei werden die zu signierenden Daten als Konkatenation von Nachrichtenfeldern wie folgt erzeugt:

```
BASE64(description) ||  BASE64(messageId) ||  BASE64(sentDate) ||  BASE64(timeout) || BASE64(source) ||  BASE64(destination) etc.
```

Bei Array-Werten werden die einzelnen Elemente in der Reihenfolge wie folgt konkateniert:

```
BASE64(ARRAY_ELEMENT_1) || BASE64(ARRAY_ELEMENT_2) || etc.
```

Das Feld payload wird wie folgt berücksichtigt:

```
BASE64(schemaId) || BASE64(schemaVersion) || data
```

Als Hash-Funktion wird das Verfahren SHA3-256 verwendet ([Use of the SHA3 One-way Hash Functions in the Cryptographic Message Syntax (CMS)](https://datatracker.ietf.org/doc/html/draft-housley-lamps-cms-sha3-hash-00)).

Der Header wird mit dem errechneten Hash-Wert wie folgt konkateniert

```
BASE64(Header) || '.' || BASE64(Hash)
```

und mit dem privaten Schlüssel des Nachrichtensenders verschlüsselt. Das Ergebnis (digitale Signatur) wird in Form eines JSON Web Signature (JWS, [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)) im Feld signatur übertragen:

```
BASE64(Header) || ‘.' || BASE64(Hash) || '.’ || BASE64(Signatur)
```

Der Empfänger der Nachricht (UCRM) entschlüsselt die digitale Signatur mit dem öffentlichen Schlüssel des Senders und vergleicht den gewonnenen Hash mit dem selbst erstellten Hash der empfangenen Nachricht.

Wenn die Hashes übereinstimmen, kann der Empfänger sicher sein, dass die Nachricht nicht verändert wurde und dass sie tatsächlich vom angegebenen Absender stammt.

Das konkrete Verschlüsselungsverfahren samt entsprechende Konfigurationsparameter können auch aus der UCRM API Version abgeleitet werden.

## Zustellung von Nachrichten

![UCRI2 Zustellung von Nachrichten](ucri-send-receive.drawio.svg)

Für die Zustellung von Nachrichten können unterschieldiche Routing-Algorithmen umgesetzt werden:

- Routing durch Adressierungshierarchie
- Routing-Tabellen

## Validierung von Meldungen

Meldungen werden in UCRM m.H.v. Meldungs-Schemata validiert. Die Validierung erfolgt synchron beim Senden. KT-Register liefert Auskunft über die durch KT unterstützten Schemata.

---
[Vermittlungsebene](messaging.md)