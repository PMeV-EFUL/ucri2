[Vermittlungsebene](messaging.md)

# UCRI2 Kommunikationsprotokoll

UCRI2 unterscheidet zwei Kommunikationsdomäne, siehe Abbildung:

- Kommunikation zwischen einem Leitstellensystem (KT-System) und einem UCRI Leitstellenmodul (UCRM). Diese Kommunikation findet anhand der [UCRM Client API](../../api/crm/) statt und erfolgt typischerweise innerhalb einer durch einen Leitstellenbetreiber kontrollierten Infrastruktur.
- Kommunikation zwischen zwei UCRM. Die Inter-UCRM-Kommunikation verwendet [UCRM P2P API](../../api/crm/). Diese Kommunikation kann über das öffentliche Internet stattfinden und braucht dementsprechend besondere Sicherheitsmaßnahmen.

![UCRI2 Kommunikationsdomäne](ucrm-protocol.drawio.svg)

Die Infrastruktur eines KTs sollte eine P-A-P-Struktur aufweisen, die aus Paketfilter als Trennung zu vertrauenswürdigen internen Systemen (Leitstelle), Application-Layer-Gateway (UCRM) und
Paketfilter als Trennung zu nicht vertrauenswürdigem Netz (Internet) besteht. Vgl. [Netzarchitektur und -design - BSI](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2023/09_NET_Netze_und_Kommunikation/NET_1_1_Netzarchitektur_und_design_Edition_2023.pdf?__blob=publicationFile&v=3).

UCRM API Implementierung verwendet in beiden Kommunikationsdomänen OAuth 2.0 mit Client Credentials Grant Type zur sicheren Authentifizierung und Autorisierung von Clients auf der Applikationsebene.

## Trust Konzept

Zwischen zwei UCRM wird mTLS als Sicherung der Inter-UCRM-Kommunikation verwendet. Sowohl Client als auch Server bauen eine gegenseitige Vertrauensbeziehung über digitale Zertifikate auf. Dabei kann der Paketfilter auf der Seite des nicht vertrauenswürdigen Netzes die mTLS-Verbindung terminieren. Dazu kann der Paketfilter eine Liste von zugelassenen Domainnamen beinhalten (White Listing) und somit die Kommunikation auf eine geschlossene Gruppe der Teilnehmer beschränken.

Die Kommunikation zwischen einem KT-System und dem UCRM-Modul kann je nach lokalen Sicherheitsanforderungen wahlweise per TLS oder mTLS erfolgen.

![UCRI2 Trust Konzept](ucri-trust.drawio.svg)

Die Vertrauensbeziehungen zwischen den Systemkomponenten bei der Client/Server-Kommunikation basieren dabei auf folgenden Mechanismen (siehe Abbildung):
1. Server-Authentifizierung. Die Vertrauensbeziehung zu UCRM als Server basiert auf dem Domainname (DNS) des Servers und wird durch Server-Zertifikat abgesichert. Der Domainname des Servers ist im Server-Zertifikat verankert.
2. Client-Authentifizierung. Die Vertrauensbeziehung zu KT oder UCRM in der Client-Rolle basiert auf der Object Identifier (OID) des Clients (siehe [Adressierungskonzept](./addressing_concept.md)) und wird durch Client-Zertifikat abgesichert. Die OID des Clients ist im Client-Zertifikat verankert.
3. Sowohl Client als auch Server haben eine Liste vertrauenswürdiger Zertifizierungsstellen (CAs), sogenannte Root-CAs, die als Vertrauensanker dienen. Die ausgestellten Zertifikate von Client und Server müssen von einer CA signiert sein, die jeweils in der vertrauenswürdigen Liste des Gegenübers enthalten ist.

*Anmerkung 1*: In den konkreten Kundensituationen können unterschiedliche Mechanismen des Zertifikatsmanagements umgesetzt werden - basierend sowohl auf zentraler Authority als auch auf spezifischen Vereinbarungen zwischen einzelnen KTs.

*Anmerkung 2*: Als ALternative kann das Vertrauen zwischen KT-Systemen und dem UCRM in einer durch einen Leitstellenbetreiber kontrollierten Infrastruktur durch das Bilden von einer Sicherheitszone auf der Netzwerkebene hergestellt werden.

Um den sichernen Ursprung und unverfälschten Inhalt von Applikationsmeldungen zu garantieren, können die Meldungen durch Sender-KT signiert werden. Zur Signaturvalidierung erstellt der KT ein kryptographisches Schlüsselpaar und stellt sein Public Key dem lokalen UCRM-Modul über sicheren Kanal bereit. Bei der Inter-UCRM-Kommunikation wird das KT Public Key an die fremden UCRM mittels UCRM P2P API übermittelt und steht anschließend den potentiellen Meldungsempfängern über die UCRM Client API zur Signaturvalidierung zur Verfügung.

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

Die öffentlichen Schlüssel werden über KT-Register als Teil der verfügbaren KT-Daten in Form von JSON Web Key (JWK, [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)) ausgetauscht.

### Verschlüsselung

Da jegliche Kommunikation zwischen KT und UCRM und zwischen UCRMs TLS verschlüsselt stattfindet, kann es auf eine E2E-Veschlüsselung des Nachrichteninhaltes verzichtet werden. Um die strengeren Sicherheitsanforderungen vor allem bei der Kommunikation über das Internet zu erfüllen, kann es später jedoch sinnvoll sein, den Nachrichteninhalt zusätzlich Ende-Zu-Ende, d.h. zwischen dem Sender-UCRM und dem Empfänger-UCRM oder sogar zwischen den KTs (in diesem Fall ohne Möglichkeit, die Meldungen durch UCRM validieren zu lassen), zu verschlüsseln.

Für die Verschlüsselung wird dann das RSA-Verfahren RSASSA-PKCS1-v1_5 ([RFC 3447:  Public-Key Cryptography Standards (PKCS) #1: RSA Cryptography Specifications Version 2.1](https://www.rfc-editor.org/rfc/rfc3447#section-8.2)) verwendet.

Das konkrete Verschlüsselungsverfahren wird bei Bedarf später spezifiziert.

### Signaturverfahren
NEU von @PZernicke
Nachrichtensignaturen stellen sicher, dass eine Nachricht während der Übertragung nicht verändert wurde und dass sie von der angegebenen Quelle stammt. Hierzu sind zwei Schritte notwendig: Die Erzeugung eines eindeutigen Hash-Wertes für die Nachricht sowie die Signierung dieses Hashwertes durch das sendende System.
- Für das Hashing wird die Nachricht zuerst gemäß JSON Canonicalization Scheme (JCS, [RFC 8785: JSON Canonicalization Scheme (JCS)](https://datatracker.ietf.org/doc/html/rfc8785)) in eine kanonische Form gebracht und diese kanonische Form dann mit SHA3-256 gehasht.
- Für das Signieren und die Prüfung der Signatur wird das Verfahren nach dem IETF Standard  JSON Web Signature (JWS, [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)) in der Variante Compact JWS  in Kombination mit dem RSA-Verfahren RSASSA-PKCS1-v1_5 verwendet.
Diese Schritte werden in den folgenden Unterkapiteln genauer dargestellt.

#### Hashing der Nachrichten
Vor der Anwendung des JCS erstellt das signierende System eine Kopie der Nachricht, in der die folgenden Felder entfernt werden:
- "signature"
- "messageId"
- "sentDate"
- "timeout"
- "ack"

Somit werden diese Felder nicht beim Hashing berücksichtigt. Dies ist notwendig, da diese Felder vom UCRM gesetzt werden, falls sie nicht vom Client gesetzt wurden (mit Ausnahme des "signature"-Feldes).
Als Hashing-Algorithmus kommt SHA3-256 zum Einsatz ([Use of the SHA3 One-way Hash Functions in the Cryptographic Message Syntax (CMS)](https://datatracker.ietf.org/doc/html/draft-housley-lamps-cms-sha3-hash-00)).

#### Signierung der Nachrichten
Als JWS-Header kommt ein Header mit Angabe des RSA-256-Algorithmus zum Einsatz:

```
{
  "typ": "UCRI_PLAIN",
  "alg": "RS256"
}
```

Der berechnete Hashwert der Nachricht wird als JWS-Payload verwendet. Dieser wird 
 mit dem privaten Schlüssel des Nachrichtensenders signiert. Das Ergebnis (digitale Signatur) wird in Form einer JSON Web Signature (JWS, [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)) im Feld signatur übertragen:

```
BASE64(Header) || ‘.' || BASE64(Hash) || '.’ || BASE64(Signatur)
```

#### Prüfung der Signaturen
Um die übermittelte JWS zu prüfen, muss das empfangende System oder UCRM wiederum
- den Hashwert der empfangenen Nachricht berechnen
- die übermittelte Signatur auf Gültigkeit prüfen
- den signierten Hashwert (JWS-Payload) auf Gleichheit mit dem Hashwert der empfangenen Nachrichten prüfen

Die Ermittlung des Hashwertes erfolgt gemäß "Hashing der Nachrichten".

Die Signatur wird aus dem "signature"-Feld der Nachricht extrahiert und gegen den im KT-Register hinterlegten "key" (öffentlichen Schlüssel)  validiert.

ENDE NEU von @PZernicke

Nachrichtensignatur stellt sicher, dass eine Nachricht während der Übertragung nicht verändert wurde und dass sie von der angegebenen Quelle stammt. Für das Signieren wird das Verfahren nach dem IETF Standard  JSON Web Signature (JWS, [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)) in Kombination mit dem RSA-Verfahren RSASSA-PKCS1-v1_5 verwendet.

Mit Hilfe eines Headers wird das Verschlüsselungsverfahren beschrieben:

```
{
  "typ": "UCRI_PLAIN",
  "alg": "RSA256"
}
```

Die zu signierende Meldung ist ein JSON-Objekt. Es gibt im Allgemeinen zwei Schritte, um JSON zu signieren:
1. Serialisierung und Hashing
2. Signatur erstellen

#### Serialisierung und Hashing

Zuerst muss sichergestellt werden, dass das JSON-Objekt in einer standardisierten Form vorliegt (z.B. durch Canonicalization), damit die Signatur später exakt verifizierbar ist. Dazu wird der Standard [JCS / RFC 8785](https://www.rfc-editor.org/rfc/rfc8785) verwendet. Als Ergebnis entsteht eine kanonische serialisierte Form einer Meldung, die direkt gehasht werden kann.

Folgende Meldungsattribute werden bei der Serialisierung berücksichtigt: 

- source
- destinations
- payload

Als Hash-Funktion wird das Verfahren SHA3-256 verwendet ([Use of the SHA3 One-way Hash Functions in the Cryptographic Message Syntax (CMS)](https://datatracker.ietf.org/doc/html/draft-housley-lamps-cms-sha3-hash-00)).

#### Signatur erstellen

Der errechnete Hash-Wert wird mit dem privaten Schlüssel des Nachrichtensenders verschlüsselt. Das Ergebnis (digitale Signatur) wird als JSON Web Signature in Compact Serialization Form (JWS, [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)) im Feld signatur übertragen.

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