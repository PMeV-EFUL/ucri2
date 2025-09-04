# Universal Control Room Interface Version 2 (UCRI2)

UCRI steht für Universal Control Room Interface - ein Protokoll für die Kommunikation zwischen zwei oder
mehreren Einsatzleitsystemen.

Nach einer erfolgreichen Einführung und eingehender Approbation im Feld wurden viele Erfahrungen gesammelt und Anforderungen identifiziert, die Weiterentwicklung des UCRI Protokolls auf einer neuen architektonischen Basis erforderten. UCRI2 ist eine komplett überarbeitete Version des Protokolls, die alle Anwendungsfälle der Vorgängerversionen (die letzte UCRI Version 1.1) unterstützt und Grundlage für flexible Weiterentwicklung des Protokolls darstellt.

<!-- toc -->

- [UCRI2 Ziele](#ucri2-ziele)
- [UCRI2 Systemarchitektur](#ucri2-systemarchitektur)
  * [Messaging](#messaging)
  * [Adapter-Komponente](#adapter-komponente)
  * [Vermittlungsebene](#vermittlungsebene)
  * [UCRI Gateway](#ucri-gateway)
  * [Anwendungsebene](#anwendungsebene)
- [UCRI2 Vermittlungsebene](#ucri2-vermittlungsebene)
- [UCRI2 Adressierungskonzept](#ucri2-adressierungskonzept)
  * [OID-Hierarchie](#oid-hierarchie)
  * [OID-Nomenklatur](#oid-nomenklatur)
- [UCRI Leitstellenmodul](#ucri-leitstellenmodul)
  * [Überblick](#uberblick)
  * [UCRM API Technologie](#ucrm-api-technologie)
    + [Protokoll](#protokoll)
    + [Empfehlungen zur technischen Umsetzung](#empfehlungen-zur-technischen-umsetzung)
      - [Polling bei Nachrichtenabfragen](#polling-bei-nachrichtenabfragen)
      - [Long Polling bei Nachrichtenabfragen](#long-polling-bei-nachrichtenabfragen)
  * [UCRM REST API](#ucrm-rest-api)
    + [Berechtigungskonzept](#berechtigungskonzept)
- [UCRI2 Kommunikationsprotokoll](#ucri2-kommunikationsprotokoll)
  * [Nachrichtenübermittlung](#nachrichtenubermittlung)
  * [KT-Register](#kt-register)
  * [E2E Verschlüsselung und Datenintegrität](#e2e-verschlusselung-und-datenintegritat)
    + [Verschlüsselung](#verschlusselung)
    + [Signaturverfahren](#signaturverfahren)
  * [Zustellung von Nachrichten](#zustellung-von-nachrichten)
  * [Validierung von Meldungen](#validierung-von-meldungen)
- [UCRI2 Anwendungen](#ucri2-anwendungen)

<!-- tocstop -->

# UCRI2 Ziele

Ziele für die Entwicklung von UCRI2 und die Unterschiede zu UCRI 1.x:

- Einfache, schnell zu implementierende API, schnelles PoC möglich
  - standardisierte maschinenlesbare Spezifikation
  - sichere Zustellung und Verarbeitung von Meldungen
- Trennung technischer und fachlicher Aspekte
  - Einfache Erweiterbarkeit
  - Technische Komponenten müssen bei fachlichen Erweiterungen nicht angepasst werden
  - Fachliche Erweiterungen können ohne Anpassungen der Infrastruktur erfolgen
- Routing im Kern des Konzeptes
  - Einfaches Zusammenspiel mehrerer Hersteller
  - Unterstützung zentraler als dezentraler Anbindungen
- Die RPC/REST basierte Architektur in eine Messaging basierte Architektur überführen
- Authentifizierung OAuth2 konform


# UCRI2 Systemarchitektur

## Messaging

Bei der Strukturierung der UCRI2-Schnittstelle wird der Architekturstil Messaging verwendet. Bei diesem Architekturstil kommunizieren verteilte unabhängige Systemkomponenten (im allgemeinen Kommunikationsteilnehmer genannt - KT) miteinander mit Hilfe von Nachrichten.

Messaging-Systeme trennen die fachliche Anwendung (gewöhnlich strukturiert nach Client-Server-Prinzip) von der Vermittlungsebene - also von technischen Aspekten der Nachrichtenübermittlung zwischen technischen Systemen der KT. Nachrichten können während der Übertragung umgewandelt werden, ohne dass Sender oder Empfänger von der Umwandlung wissen. Die Entkopplung ermöglicht es Integratoren, je nach Anforderung unterschiedliche Kommunikationstopologien zu unterstützen, von dezentralen P2P-Protokollen bis zu zentralisierten Broker-Architekturen.

Messaging-Systeme ermöglichen es den Komponenten, entkoppelt zu bleiben und sich auf ihre eigenen Aufgaben zu konzentrieren, während sie gleichzeitig in der Lage sind, mit anderen Komponenten im System zu kommunizieren und zusammenzuarbeiten. Es verringert die Anzahl der Abhängigkeiten zwischen den Komponenten, wodurch das System flexibler und leichter zu warten ist.

![Messaging](ucri-arch-overview.drawio.svg)

## Adapter-Komponente

Das andere wichtige Architekturmuster, das bei der Strukturierung der UCRI2-Schnittstelle Verwendung findet ist das Adapter-Muster. Bei diesem Muster erfolgt die Kommunikation zwischen dem technischen System der KT (Anwendungsebene) und der Vermittlungsebene mittels einer Adapter-Komponente (UCRI Control Room Module - UCRM). Der Adapter ermöglicht bidirektionale Kommunikation zwischen den Ebenen in einer standardisierten Form und ermöglicht die Komplexitätsreduzierung der angebundenen Schnittstellen.

Der Adapter kann auch zusätzliche Aufgaben übernehmen, wie z. B. Datentransformation oder Sicherheitsaufgaben wie Ende-zu-Ende-Verschlüsselung von übermittelten Nachrichten.

Die Adapter an der Seite von technischen Systemen der KT und optional der Broker (bei einer zentralen Broker-Architektur) kümmern sich somit um die technischen Aspekte der Kommunikation - also die Vermittlungsebene, während die fachlichen Systemkomponenten Clients und Server sich auf die eigentliche Anwendungslogik fokussieren - also die Anwendungsebene.

## Vermittlungsebene

Zentrale Aufgabe der Vermittlungsebene ist die Zustellung von Meldungen zwischen Sender und Empfänger. Außerdem müssen auf der Vermittlungsebene unterschiedliche querschnittliche Aufgaben übernommen werden. Hier sind nur einige Beispiele: KT-Authentifizierung und Autorisierung, Meldungsvalidierung, eventuell E2E-Verschlüsselung. Bei der P2P-Topologie kommunizieren die UCRM der zwei KT dabei direkt miteinander.

## UCRI Gateway

Die Systemkomponente Gateway stellt einen speziellen KT dar. Das Gateway wird am Übergang zu Gruppen von KT eingesetzt, die auf der Vermittlungsebene nicht direkt erreichbar sind und über eine proprietäres Leitstellenprotokoll angebunden werden können (Leitstellenverbunde). Das Gateway stellt eine Gateway-Funktion bereit zum Mapping zwischen externe Quell- bzw. Zieladressen und UCRI-internen KT-Adressen.

![UCRI Komponenten](ucri-components.drawio.svg)

Das Leitstellenmodul (UCRM) stellt die UCRM API bereit - die einzige Kommunikationsschnittstelle für direkt verbundene Kommunikationsteilnehmer wie Leitstellensysteme oder andere technische Knoten, sowie weitere externe Systeme.

Einzelne Aufgaben der Vermittlungsebene, die bei der P2P-Topologie durch die Kommunikation zwischen einzelnen UCRMs umgesetzt werden müssen, sind:
- Verwaltung der Kommunikationstopologie inkl. Adressierungskonzept und KT-Register
- Konzept Authentisierung, Autorisierung, Accounting
- E2E-Verschlüsselung
- Übermittlung von Nachrichten unter der Verwendung eines UCRI-Adressierungskonzepts inkl. Routing-Funktion
- Validierung von Anwendungsmeldungen

Die Vermittlungsebene ist frei von Fachlichkeit. Sie realisiert nur den Datentransport und sichert optional die Ende-zu-Ende-Verschlüsselung der Daten.

## Anwendungsebene

Eine UCRI2-Anwendung wird durch folgende Artefakte definiert:
- Ein Satz von standardisierten Nachrichten-Schemata (JSON, kanonisches Datenmodell)
- Ablaufmodell (definierte Abfolge von Nachrichten)
- Prozessdefinitionen (Festlegungen bezüglich Anwendungslogik, die bei der Implementierung in technischen KT-Systemen berücksichtigt werden müssen)

Wichtig ist das Prinzip der Trennung der UCRI2-Anwendungen untereinander und deren Unabhängigkeit von der Vermittlungsebene. Das erlaubt eine freie Weiterentwicklung jeder einzelnen Anwendung.

---




# UCRI2 Vermittlungsebene

Die Vermittlungsebene umfasst technische Aspekte der Nachrichtenübermittlung zwischen technischen Systemen der KT. Dabei können unterschiedliche Kommunikationstopologien unterstützt werden, von dezentralen Peer-To-Peer (P2P) Protokollen bis zu zentralisierten Broker-Architekturen.

Die aktuelle UCRI2 Version spezifiziert nur ein P2P-Protokoll für die Kommunikation zwischen den UCRM-Modulen.

Im Weiteren werden einzelne Aspekte der Nachrichtenübermittlung detailliert beschrieben:

- [Adressierungskonzept](addressing_concept.md)
- [UCRI Leitstellenmodul](ucrm_api.md)
- [Kommunikationsprotokoll](p2p_protocol.md)

---

[Vermittlungsebene](messaging.md)

# UCRI2 Adressierungskonzept

Für die Adressierung der einzelnen Kommunikationsteilnehmer (KT) auf der Vermittlungsebene werden eindeutige Kennungen in Form von Object Identifier (OID Spezifikationen ISO/IEC 9834, DIN 66334) verwendet.

## OID-Hierarchie

Adressierung von einzelnen KT ist hierarchisch organisiert und spiegelt die hierarchische Kommunikationsstruktur wider:

![OID-Hierarchie](ucri-oid-hierarchy.drawio.svg)

Diese Struktur ermöglicht Implementierung einer einfachen und einheitlichen Routing-Funktion, die in jeder Systemkomponente (Leitstellenmodul - UCRM, Vermittlungsplattform, Gateway) die Weiterleitung von übermittelten Nachrichten unterstützt (TODO Routing-Konzept).

Auch wenn die Bildung einer eigenen Adressierungsebene für Leitstellenmodule (CRM-Ebene im Bild) nicht zwingend notwendig ist, unterstützt diese Ebene das Implementieren einer uniformen Routing-Funktion. Zusätzlich bringt direkte OID-Adressierung der Leitstellenmodule folgende Vorteile:

- es ermöglicht Umsetzung nützlicher technischer Funktionen, z.B. Kommunikationsdurchstich Modul zu Modul unter Verwendung von einheitlichen Adressierungs- und Routing-Funktionen.
- es unterstützt Vereinheitlichung von Identity-Management für UCRI-Systemkomponenten.

Die Systemkomponente Gateway stellt einen speziellen KT dar. Das Gateway wird am Übergang zu externen Systemen eingesetzt und stellt eine Gateway-Funktion bereit zum Mapping zwischen externe Quell- bzw. Zieladressen und internen OID. Ein externes System bekommt dabei einen entsprechend reservierten OID-Bereich (Unterbaum) und das Gateway bekommt die Wurzel-OID-Adresse dieses Unterbaums.

## OID-Nomenklatur

OID-Nomenklatur soll Adressierung von KT über die staatliche Grenzen hinaus ermöglichen. Dabei steht jedem Land frei, ein eigenes Adressierungsschema unterhalb des Landes-OID-Unterbaums zu definieren. Wurzel-Adresse eines Landes-OID-Unterbaums ist wie folgt definiert:

- <Root-OID>.1.<Kennzahl des Landes> (Beispiel: 1.2.3.1.276 für Deutschland)

Auch jedes Bundesland in Deutschland ist frei, ein eigenes Adressierungsschema unterhalb des Bundesland-OID-Unterbaums zu definieren. Wurzel-Adresse eines Bundesland-OID-Unterbaums ist wie folgt definiert:

- <Root-OID>.1.276.<Kennzahl des Bundeslandes> (Beispiel: 1.2.3.1.276.5 für NRW)

Unterschiedliche Organisationen können auch unterschiedliche Adressierungsschemata verwenden. Wurzel-Adresse eines nPOLGA-OID-Unterbaums ist wie folgt definiert:

- <Root-OID>.1.276.5.<Kennzahl von POL/nPOLGA, etc.> (Beispiel: 1.2.3.1.276.5.1 für nPOLGA in NRW)

Die OID-Adresse der einzelnen Kommunikationsteilnehmer (KT) wird nach dem [amtlichen Gemeindeschlüssel (AGS)](https://de.wikipedia.org/wiki/Amtlicher_Gemeindeschl%C3%BCssel) gebildet:

| #                                                  | Ebene | Beispiel                                              |
|----------------------------------------------------|--|-------------------------------------------------------|
| 1                                                  | Root-OID | 1.2.3 - Festlegung in einem geschlossenen UCRI-System |
| 2                                                  | Satzart | 1 - Einzeladresse, 2 - Gruppe                         |
| 3                                                  | Kennzahl des Landes | 276 - Deutschland nach ISO 3166                       |
| 4                                                  | Kennzahl des Bundeslandes | 5 - für NRW nach AGS |
| 5                                                  | Kennzeichnung von POL/nPOL Gefahrenabwehr (KRITIS, etc.) | Polizeidienststellen, Gesundheitsämter, Veterinärämter, etc. Definition folgt. Annahme für Beispiel: 1 - nPOLGA, 99 - Test/Pilot |
| 6                                                  | Kennzahl des Regierungsbezirks | 1 - Regierungsbezirk Düsseldorf nach AGS |
| 7                                                  | Kennzahl des Landkreises oder der kreisfreien Stadt ("0" bei zentralen Einrichtungen auf der Regierungsbezirksebene) | 58 - Landkreis Mettmann nach AGS |
| 8                                                  | Gemeinde ("0" bei kreisfreien Städten) | 28 - Stadt Ratingen, Stadtbezirk Ratingen nach AGS |
| 9 | Leitstellenmodul | 1 - erstes Leitstellenmodul, fortlaufende Nummerierung von Leitstellenmodulen |
| 10 | Kommunikationsteilnehmer | 1 - z.B. ELS, fortlaufende Nummerierung von KT |

Beispiel OID Feuerwehr ELS in Ratingen: 1.2.3.1.276.5.1.1.58.28.1.1

Folgende OID wird zur Identifizierung der UCRI-Infrastruktur als Sender von technischen Quittungen (siehe UCRI2-App Technische Quittungen) festgelegt:

UCRI-Infrastruktur: 1.2.3.1.276.5.0.0.0.0.1.1

---

[Vermittlungsebene](messaging.md)
[Vermittlungsebene](messaging.md)

# UCRI Leitstellenmodul

## Überblick

Das UCRI Leitstellenmodul (UCRI Control Room Module, UCRM) stellt die API bereit - die einzige Kommunikationsschnittstelle für verbundene Kommunikationsteilnehmer wie zum Beispiel Einsatzleitstellensysteme, proprietäre Vermittlungsinstanzen (PVI), sowie andere technische Systeme:

![UCRI Leitstellenmodul](ucrm.drawio.svg)

## UCRM API Technologie

Das Ziel des UCRI-Systems ist eine Digitalisierung der menschlichen Kommunikation und impliziert (im Gegensatz zu etwa Steuerungsprozessen in M2M-Kommunikation) keine harten Echtzeit-Anforderungen. Aus diesem Grund wird für die Umsetzung der Kommunikationsschnittstelle UCRM API die technologische Variante REST API mit Polling festgelegt. REST API mit Polling von Nachrichten hat folgende Vorteile:

- einfach zu implementieren
- einfach zu konsumieren

Um die Auswirkung des Pollings auf die Systemreaktionszeit bei Meldungsaustausch (die maximale Zeit zwischen den Meldungssende- und Meldungsempfangszeitpunkten) zu minimieren, kann bei Meldungsaustausch ein [Long Polling](https://de.wikipedia.org/wiki/Long_Polling) vorgesehen werden.

### Protokoll

Wegen der Anforderung zur sicheren Nachrichtenzustellung muss eine technische Nachrichtenempfangsbestätigung in der UCRM API vereinbart werden.

Das Prinzip der sicheren Nachrichtenzustellung ist ein E2E-Prinzip, das auch die Empfangslogik bis zum Persistieren der Nachrichtendaten auf der Seite des KT-Systems einschließt. Um die Ausfälle in dieser Empfangslogik zu kompensieren wird ein zweistufiges Protokoll für Meldungsempfang vereinbart:

1. Meldungen abfragen - idempotent, kann mehrmals wiederholt werden mit dem gleichen Ergebnis.
2. Meldungsempfang bestätigen - idempotent, kann mehrmals wiederholt werden mit dem gleichen Ergebnis. Bestätigte Meldungen werden aus der Vermittlungsebene verworfen und stehen beim erneuter Meldungsabfrage nicht mehr zur Verfügung.

Zum Signalisieren der Nachrichtenzustellung werden technische Quittungen für eine gesendete Nachricht implementiert (positive sowie negative Zustellbestätigungen).

Ein Nachrichtensender bekommt folgende Quittungen:

1. Zustellbestätigung: nachdem der Empfänger die Entgegennahme einer Nachricht bestätigt hat
2. Benachrichtigung über fehlgeschlagene Zustellung: nachdem ein für die Nachrichtenzustellung vordefiniertes Timeout verstrichen ist, ohne dass der Empfänger die Entgegennahme einer Nachricht bestätigt hat

Die technischen Quittungen sind in Form eines JSON-Schemas auf der untergeordneten Seite beschrieben.

### Empfehlungen zur technischen Umsetzung

Der Client muss die Schnittstelle periodisch abfragen, um Nachrichten zu empfangen. Das klassische Polling-Intervall ist dabei ein Maß zwischen Systemreaktionszeit (die maximale Zeit zwischen den Sende- und Empfangszeitpunkten) und Systemauslastung. Ein Polling-Intervall in Sekundenbereich (3 - 5 Sekunden) scheint optimal zu sein. Um die Auswirkung des Pollings auf die Systemreaktionszeit bei Meldungsaustausch zu minimieren, wird Verwendung eines Long Polling empfohlen.

#### Polling bei Nachrichtenabfragen

Folgende Schleife ist bei Nachrichtenabfragen bei Polling zu empfehlen:

1. Nachrichten abfragen mit Angabe maximaler Nachrichtenzahl Nmax
2. Nachrichten verarbeiten
3. Nachrichtenempfang bestätigen
4. Ist die Anzahl von empfangenen Nachrichten gleich Nmax - sofort zum Schritt 1 übergehen
5. Konfigurierte Pause einlegen

Wichtig: bei Programmausfällen zwischen Schritten 2 und 3 kann es zum wiederholten Empfang von gleichen Nachrichten kommen. Die Client-Logik muss somit mit Nachrichtenduplikaten umgehen können, z.B. unter Berücksichtigung von eindeutigen Nachrichten-ID.

#### Long Polling bei Nachrichtenabfragen

Folgende Schleife ist bei Nachrichtenabfragen bei Long Polling zu empfehlen:

1. Nachrichten abfragen mit Angabe maximaler Nachrichtenzahl Nmax und maximaler Wartezeit Tmax
2. Nachrichten verarbeiten
3. Nachrichtenempfang bestätigen

Wichtig: bei Programmausfällen zwischen Schritten 2 und 3 kann es zum wiederholten Empfang von gleichen Nachrichten kommen. Die Client-Logik muss somit mit Nachrichtenduplikaten umgehen können, z.B. unter Berücksichtigung von eindeutigen Nachrichten-ID.

## UCRM REST API

UCRM API Design verwendet REST API Design Richtlinien erarbeitet bei [TM Forum](https://www.tmforum.org/).

UCRM API Spezifikation verwendet Standards erarbeitet bei der [OpenAPI Initiative](https://www.openapis.org/).

UCRM API ist in folgende fachliche Bereiche aufgeteilt:

- KT-Registry - Abfragen von Eigenschaften der registrierten Kommunikationsteilnehmer
- Messaging - Versenden und Empfangen von Nachrichten
- Info - Die Info API liefert Informationen über die Version und den Betreiber der Schnittstelle

### Berechtigungskonzept

Die UCRM API wird sowohl KT-seitig als auch für die Inter-CRM-Kommunikation verwendet.

Es wird ein einfaches Berechtigungskonzept verwendet, das folgende Rollen vorsieht:

- KT - für die Kommunikation von KT-Systemen zu UCRM
- UCRM - für Inter-CRM-Kommunikation

Die Rolle wird an die API-Implementierung mittels eines HTTP-Headers übergeben. 

[Vermittlungsebene](messaging.md)
[Vermittlungsebene](messaging.md)

# UCRI2 Kommunikationsprotokoll

UCRI2 unterscheidet zwei Kommunikationsdomäne, siehe Abbildung:

- Kommunikation zwischen einem Leitstellensystem (KT-System) und einem UCRI Leitstellenmodul (UCRM). Diese Kommunikation erfolgt typischerweise innerhalb einer durch einen Leitstellenbetreiber kontrollierten Infrastruktur.
- Kommunikation zwischen zwei UCRM. Die Inter-UCRM-Kommunikation kann über das öffentliche Internet stattfinden und braucht dementsprechend besondere Sicherheitsmaßnahmen.

![UCRI2 Kommunikationsdomäne](ucrm-protocol.drawio.svg)

Die Infrastruktur eines KTs sollte eine P-A-P-Struktur aufweisen, die aus Paketfilter als Trennung zu vertrauenswürdigen internen Systemen (Leitstelle), Application-Layer-Gateway (UCRM) und
Paketfilter als Trennung zu nicht vertrauenswürdigem Netz (Internet) besteht. Vgl. [Netzarchitektur und -design - BSI](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2023/09_NET_Netze_und_Kommunikation/NET_1_1_Netzarchitektur_und_design_Edition_2023.pdf?__blob=publicationFile&v=3).

Die UCRM API wird sowohl KT-seitig als auch für die Inter-CRM-Kommunikation verwendet.

UCRM API Implementierung verwendet OAuth2 zur sicheren Authentifizierung und Autorisierung von Clients. Dabei sind zwei Rollen definiert, die unterschiedliche Zugriffsrechte und Berechtigungen steuern, um eine fein granulare Zugriffskontrolle zu gewährleisten. Diese Rollen sind:
- KT: zur Anbindung von KT-Systemen und 
- UCRM: für Inter-CRM-Kommunikation

Zwischen zwei UCRM wird zusätzlich mTLS als Sicherung der beidseitigen Kommunikation verwendet. Der Paketfilter terminiert die mTLS-Verbindung und beinhaltet eine Liste von zugelassenen KT-Domainnamen (White Listing). Somit wird die Kommunikation auf eine geschlossene Gruppe der Teilnehmer beschränkt. Das Zertifikatsmanagement (sowohl Client- als auch Server-Zertifikate) wird an eine zentrale (z.B. eine öffentliche) Zertifizierungsstelle delegiert.

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


# UCRI2 Anwendungen

Detaillierte Beschreibung der UCRI2 Anwendungen befindet sich in dem Verzeichnis [docs/apps](../apps). Hierbei gibt das Dokument "UCRI2 App im Überblick" einen Überblick über die verschiedenen Apps und die PDF-Dateien in den Unterordnern beinhalten die detaillierte Dokumentation für verschiedenen Apps.
