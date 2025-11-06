
# Kommunikationsprotokoll

Aus der Sicht einer Leitstelle (KT-System) ist UCRI2 eine Client/Server Kommunikation gegen die UCRI2-Systemkomponente 
Leitstellenmodul (UCRM). Ein KT-System (Client) baut eine Verbindung zum UCRM (Server) auf und konsumiert 
die sogenannte **UCRI2 Client-API**. Die UCRI2 Client-API ist somit die einzige Schnitstelle, gegen die eine 
Leitstellensoftware integriert werden muss, um mit anderen Leitstellen über UCRI2 kommunizieren zu können.

Je nach Organisation der Verbindung und des Datenflusses zwischen den einzelnen UCRM auf der Vermittlungsebene werden 
zwei Kommunikationstopologien unterschieden:
- **Peer-to-Peer Topologie**: Dabei kommunizieren alle UCRM direkt miteinander. Jedes UCRM muss eine direkte 
  Netzwerkverbindung zu jedem einzelnen Partner-UCRM aufbauen. Gleichzeitig bietet jedes UCRM eine Schnittstelle an - 
  die sogenannte **UCRI2 P2P-API**, die von anderen Partner-UCRM konsumiert wird.
- **Broker-Architektur**: Alle UCRM sind über eine individuelle Verbindung an eine zentrale Systemkomponente (Broker) 
  angeschlossen. Um untereinander Daten auszutauschen, brauchen einzelne UCRM keine direkten Netzwerkverbindungen 
  untereinander, die Kommunikation läuft immer über den Broker. Die Kommunikationsschnittstelle zwischen UCRM und 
  dem Broker ist spezifisch für die jeweilige Broker-Technologie und wird deswegen in dieser Spezifikation nicht betrachtet.

Die Kommunikationstopologien können auch kombiniert werden.

Je nach Rolle in der Gesamtkommunikation ergibt sich damit folgende Relevanz der vorliegenden Spezifikation für 
die beteiligten Systemkomponenten:
- Ein KT, der sich per UCRI2 mit anderen KT verbinden will, muss ausschliesslich die UCRI2 Client-API aus der 
  Consumer-Perspektive umsetzen.
- Ein UCRM muss die UCRI2 Client-API aus der Provider-Perspektive umsetzen. Außerdem muss ein UCRM, das an einem 
  Kommunikationssystem mit P2P-Topologie beteiligt ist, die UCRI2 P2P-API umsetzen (Provider- und Consumer-Perspektiven).
  Im Falle einer Broker-Architekur muss das UCRM ein entsprechendes Broker-Kommunikationsprotokoll implementieren 
  (nicht Teil dieser Spezifikation).

Im Folgenden werden einzelne Aspekte des UCRI2-Kommunikationsprotokols im Hinblick auf die P2P-Topologie betrachtet.
Hersteller von UCRM-Modulen für Broker-basierte Architekturen müssen die Inter-UCRM-Kommunikation unter Berücksichtigung 
von spezifischem Broker-Protokoll entsprechend umsetzen.

Die REST APIs Client-API und P2P-API werden [im Kapitel API](./apis.md#api) detailliert beschrieben.

## Übermittlung von Nachrichten

Ein KT-System übergibt die ausgehenden Nachrichten an das UCRM-Modul mittels des Client-API-Endpunkts **/send**. Die Nachrichten werden dann durch das lokale UCRM mittels des P2P-API-Endpunktes
**/send** an das Empfänger-UCRM weitergesendet. Für das Handling von Nichtverfügbarkeit der Partner-UCRMs wird in dem lokalen UCRM ein Ausgangspuffer implementiert.

![UCRI2 Zustellung von Nachrichten](ucri-send-receive.drawio.svg)

## Validierung von Nachrichten

Nachrichten werden in UCRM mittels App-spezifischer Nachrichtenschemata validiert. Die Validierung erfolgt synchron beim Senden. Das KT-Register liefert Auskunft über die durch KT unterstützten
Applikationsschemata.

## KT-Register

Zur Verwaltung der KTs dient ein KT-Register mit Systeminformationen (Systemname, Betreiber, technischer Support, etc.), 
Systemstatus, sowie Informationen über die unterstützten UCRI2-Anwendungen eines Kommunikationsteilnehmers. 
Das KT-Register wird durch das UCRM bereitgestellt und aktuell gehalten. 
Über die Client-API steht das KT-Register den angeschlossenen KT-Systemen zur Verfügung.

Jedes UCRM baut einen lokalen Cache des KT-Registers durch regelmäßige Aufrufe des P2P-API-Endpunktes **/registry**
an allen bekannten Partner-UCRM auf. Dabei liefert ein UCRM nur eigene direkt angeschlossene KTs.

Ein angeschlossenes KT-System fragt das KT-Register über den Client-API-Endpunkt /registry ab. Dabei liefert ein UCRM
alle ihm bekannten (sowohl eigene, als auch über Inter-UCRM-Kommunikation ermittelten) KTs.

Jedes UCRM besitzt einen eigenen Eintrag im KT-Register.

## Datenintegrität

Die Kontrolle der Datenintegrität in Kommunikationssystemen ist von entscheidender Bedeutung, um sicherzustellen, dass 
die übertragenen Informationen vom richtigen Sender stammen und auf dem Übertragungsweg nicht manipuliert worden sind.
Durch kryptografische Verfahren wie die **Signierung** wird die Authentizität und Unveränderbarkeit der Daten sichergestellt, 
während die **Verschlüsselung** die Vertraulichkeit gewährleistet und den Inhalt vor unbefugtem Zugriff schützt.

Als Richtlinie für die Auswahl kryptografischer Verfahren für die Signierung und Verschlüsselung von Nachrichten dient die entsprechende technische Richtlinie des BSI (https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/TechnischeRichtlinien/TR02102/BSI-TR-02102.pdf?__blob=publicationFile&v=9).

Das asymmetrische kryptografische RSA-Verfahren RSASSA-PKCS1-v1_5 ([RFC 3447:  Public-Key Cryptography Standards (PKCS) #1: RSA Cryptography Specifications Version 2.1](https://www.rfc-editor.org/rfc/rfc3447#section-8.2)) wird sowohl zum Verschlüsseln als auch zum digitalen Signieren der Nachrichten verwendet.

Das Verfahren verwendet ein für jeden KT generiertes Schlüsselpaar, bestehend aus einem privaten Schlüssel und einem öffentlichen Schlüssel. Der private Schlüssel wird im Keystore des KT-Systems gespeichert.

Die öffentlichen Schlüssel werden über das KT-Register als Teil der verfügbaren KT-Daten in Form eines JSON Web Key (JWK, [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)) ausgetauscht und zur Verfügung gestellt.

### Signierung
Nachrichtensignaturen stellen sicher, dass eine Nachricht während der Übertragung nicht verändert wurde und dass sie von der angegebenen Quelle stammt. Hierzu sind zwei Schritte notwendig: Die Erzeugung eines eindeutigen Hash-Wertes für die Nachricht sowie die Signierung dieses Hashwertes durch das sendende System:
- Für das Hashing wird die Nachricht zuerst gemäß JSON Canonicalization Scheme (JCS, [RFC 8785: JSON Canonicalization Scheme (JCS)](https://datatracker.ietf.org/doc/html/rfc8785)) in eine kanonische Form gebracht und diese kanonische Form dann mit SHA3-256 gehasht.
- Für das Signieren und die Prüfung der Signatur wird das Verfahren nach dem IETF-Standard JSON Web Signature (JWS, [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)) in der Variante Compact JWS in Kombination mit dem RSA-Verfahren RSASSA-PKCS1-v1_5 verwendet.
  
Diese Schritte werden im Folgenden genauer dargestellt.

**Hashing der Nachrichten**

Vor der Anwendung des JCS erstellt das signierende System eine Kopie der Nachricht, in der nur die folgenden Felder enthalten sind:
- "source"
- "destinations"
- "payload"

Somit werden alle anderen Felder nicht beim Hashing berücksichtigt. Dies ist notwendig, da andere Felder freiwillig sind oder vom UCRM gesetzt werden, falls sie nicht vom Client gesetzt wurden.
Als Hashing-Algorithmus kommt SHA3-256 zum Einsatz ([Use of the SHA3 One-way Hash Functions in the Cryptographic Message Syntax (CMS)](https://datatracker.ietf.org/doc/html/draft-housley-lamps-cms-sha3-hash-00)).

**Signierung der Nachrichten**

Als JWS-Header kommt ein Header mit Angabe des RSA-256-Algorithmus zum Einsatz:

```
{
  "typ": "UCRI_PLAIN",
  "alg": "RS256"
}
```

Der berechnete Hashwert der Nachricht wird als JWS-Payload verwendet. Dieser wird
mit dem privaten Schlüssel des Nachrichtensenders signiert. Das Ergebnis (digitale Signatur) wird in Form einer JSON Web Signature (JWS, [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)) im Feld **signatur** übertragen:

```
BASE64(Header) || ‘.' || BASE64(Hash) || '.’ || BASE64(Signatur)
```

**Prüfung der Signaturen**

Um die übermittelte JWS zu prüfen, MUSS das empfangende System wiederum
- den Hashwert der empfangenen Nachricht berechnen
- die übermittelte Signatur auf Gültigkeit prüfen
- den signierten Hashwert (JWS-Payload) auf Gleichheit mit dem Hashwert der empfangenen Nachrichten prüfen

Die Ermittlung des Hashwertes erfolgt gemäß "Hashing der Nachrichten".

Die Signatur wird aus der empfangenen Nachricht extrahiert und gegen den im KT-Register hinterlegten öffentlichen Schlüssel des Senders validiert.

Das Signieren von Nachrichten ist optional. Das KT-Register beinhaltet im Feld **transmitsUnsignedMessages** Information, ob ein KT signierte oder 
nicht-signierte Meldungen sendet.

### Verschlüsselung

Da jegliche Kommunikation zwischen KT und UCRM und zwischen UCRMs TLS-verschlüsselt stattfindet, kann auf eine E2E-Verschlüsselung des Nachrichteninhaltes verzichtet werden.
Um die strengeren Sicherheitsanforderungen vor allem bei der Kommunikation über das Internet zu erfüllen, kann es später jedoch sinnvoll sein, den Nachrichteninhalt zusätzlich Ende-Zu-Ende, 
d.h. zwischen dem Sender-UCRM und dem Empfänger-UCRM oder sogar zwischen den KTs (in diesem Fall ohne Möglichkeit, die Meldungen durch die UCRM validieren zu lassen), zu verschlüsseln.

Für die Verschlüsselung wird dann das RSA-Verfahren RSASSA-PKCS1-v1_5 ([RFC 3447:  Public-Key Cryptography Standards (PKCS) #1: RSA Cryptography Specifications Version 2.1](https://www.rfc-editor.org/rfc/rfc3447#section-8.2)) verwendet.

Das konkrete Verschlüsselungsverfahren wird bei Bedarf in einer späteren Version des UCRI2-Standards spezifiziert.
