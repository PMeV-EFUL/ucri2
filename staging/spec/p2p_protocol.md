
# UCRI2 Peer-2-Peer Kommunikationsprotokoll

## Nachrichtenübermittlung

Die ausgehenden Nachrichten übergibt das KT-System an das UCRM-Modul m.H.v. Client API-Endpunkt /send. Die Nachrichten werden dann durch lokales UCRM mittels P2P API-Endpunkt /send gegen Empfänger-UCRM gepuscht. Für das Handling von Nichtverfügbarkeit der Partner-UCRMs wird in dem lokalen UCRM ein Ausgangspuffer implementiert.

## KT-Register

Jeder UCRM baut einen lokalen Cache des KT-Registers durch regelmäßige Aufrufe der KT-Register API /registry an allen bekannten Partner-UCRM.

Die Umsetzung des UCRM API-Endpunktes /registry unterscheidet sich in beiden UCRM API:

- Der Client API-Endpunkt /registry liefert alle bekannten KT.
- Der P2P API-Endpunkt /registry liefert nur eigene KT.

Da die Umgebung dynamisch ist, d.h. neue KT können dazukommen, existierende KT können abgebaut werden, sollen KT-Register-Abfragen sowohl KT-seitig als auch in der Inter-UCRM-Kommunikation regelmäßig durchgeführt werden. Empfehlung: mindestens 1 Mal pro Stunde, maximal alle 5 Minuten.


## E2E Verschlüsselung und Datenintegrität

Als Richtlinie für die Auswahl kryptographischer Verfahren für die Verschlüsselung und Signieren von Nachrichten dient die BSI Technische Richtlinie (https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/TechnischeRichtlinien/TR02102/BSI-TR-02102.pdf?__blob=publicationFile&v=9).

Das asymmetrische kryptographische RSA-Verfahren RSASSA-PKCS1-v1_5 ([RFC 3447:  Public-Key Cryptography Standards (PKCS) #1: RSA Cryptography Specifications Version 2.1](https://www.rfc-editor.org/rfc/rfc3447#section-8.2)) wird sowohl zum Verschlüsseln als auch zum digitalen Signieren der Nachrichten verwendet.

Das Verfahren verwendet ein für jeden KT generiertes Schlüsselpaar, bestehend aus einem privaten Schlüssel und einem öffentlichen Schlüssel. Der private Schlüssel wird im Keystore des KT-Systems gespeichert.

Die öffentlichen Schlüssel werden über das KT-Register als Teil der verfügbaren KT-Daten in Form von JSON Web Key (JWK, [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)) ausgetauscht.

### Verschlüsselung

Da jegliche Kommunikation zwischen KT und UCRM und zwischen UCRMs TLS verschlüsselt stattfindet, kann es auf eine E2E-Veschlüsselung des Nachrichteninhaltes verzichtet werden. Um die strengeren Sicherheitsanforderungen vor allem bei der Kommunikation über das Internet zu erfüllen, kann es später jedoch sinnvoll sein, den Nachrichteninhalt zusätzlich Ende-Zu-Ende, d.h. zwischen dem Sender-UCRM und dem Empfänger-UCRM oder sogar zwischen den KTs (in diesem Fall ohne Möglichkeit, die Meldungen durch UCRM validieren zu lassen), zu verschlüsseln.

Für die Verschlüsselung wird dann das RSA-Verfahren RSASSA-PKCS1-v1_5 ([RFC 3447:  Public-Key Cryptography Standards (PKCS) #1: RSA Cryptography Specifications Version 2.1](https://www.rfc-editor.org/rfc/rfc3447#section-8.2)) verwendet.

Das konkrete Verschlüsselungsverfahren wird bei Bedarf später spezifiziert.

## Zustellung von Nachrichten

![UCRI2 Zustellung von Nachrichten](ucri-send-receive.drawio.svg)

Für die Zustellung von Nachrichten können unterschieldiche Routing-Algorithmen umgesetzt werden:

- Routing durch Adressierungshierarchie
- Routing-Tabellen

## Validierung von Meldungen

Meldungen werden in UCRM m.H.v. Meldungs-Schemata validiert. Die Validierung erfolgt synchron beim Senden. KT-Register liefert Auskunft über die durch KT unterstützten Schemata.

### Berechtigungskonzept

Die UCRM API wird sowohl KT-seitig als auch für die Inter-CRM-Kommunikation verwendet.

Es wird ein einfaches Berechtigungskonzept verwendet, das folgende Rollen vorsieht:

- KT - für die Kommunikation von KT-Systemen zu UCRM
- UCRM - für Inter-CRM-Kommunikation

Die Rolle wird an die API-Implementierung mittels eines HTTP-Headers übergeben.
