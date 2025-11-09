# Universal Control Room Interface Version 2 (UCRI2)

UCRI steht für Universal Control Room Interface - ein Protokoll für die Kommunikation zwischen zwei oder
mehreren Einsatzleitsystemen.

Nach der erfolgreichen Einführung und eingehenden Erprobung in der Praxis wurden Erfahrungen gesammelt und neue Anforderungen identifiziert. Diese machten eine Weiterentwicklung des UCRI-Protokolls auf einer neuen Architekturbasis erforderlich. UCRI2 ist eine vollständig überarbeitete Version, die alle Anwendungsfälle der Vorgängerversion (UCRI 1.1) unterstützt und die Grundlage für zukünftige, flexible Erweiterungen bildet.

Die Ziele für die Entwicklung von UCRI2 sind:
- Einfache, schnell zu implementierende API
  - standardisierte maschinenlesbare Spezifikation
  - sichere Zustellung und Verarbeitung von Meldungen
- Trennung technischer und fachlicher Aspekte
  - Einfache Erweiterbarkeit
  - Technische Komponenten müssen bei fachlichen Erweiterungen nicht angepasst werden
  - Fachliche Erweiterungen können ohne Anpassungen der Infrastruktur erfolgen
- Messaging-basierte Architektur
  - Einfaches Zusammenspiel mehrerer Hersteller
  - Unterstützung zentraler als dezentraler Anbindungen
- Durchgängige Standardisierung
  - BSI-konformes Netzarchitektur und -design
  - JSON Schema Spezifikation für Nachrichtenvalidierung
  - OAuth 2.0 für Authentifizierung und Autorisierung
  - RFC 3447 – Kryptographische Verfahren
  - RFC 8785 – JSON Canonicalization Scheme (JCS)
  - RFC 7517 – JSON Web Key
  - …

Die vorliegende Spezifikation ist in folgende Kapiteln gegliedert:

**Systemarchitektur**

In diesem Kapitel wird UCRI2 als eine n:m-Kommunikationsarchitektur zwischen verschiedenen Kommunikationsteilnehmern 
unter Verwendung des Messaging-Architekturstils beschrieben. Die Trennung zwischen der fachlichen Anwendungsebene und 
der technischen Vermittlungsebene sowie ein umfassendes Sicherheitskonzept wird eingeführt.

**Kommunikationsprotokoll**

Das UCRI2-Kommunikationsprotokoll definiert zwei Schnittstellen: die Client-API für die Kommunikation zwischen eines
Leitstellensystems und der UCRI2-Infrastruktur sowie die P2P-API für die Kommunikation zwischen verteilten Komponenten
der UCRI2-Infrastruktur basierend auf Peer-to-Peer-Topologie. In diesem Kapitel werden Mechanismen für 
Nachrichtenübermittlung und -validierung sowie tur Gewährleistung der Datenintegrität durch kryptographische Verfahren ausführlich beschrieben.

**API**

Die UCRI2-APIs werden als REST-Services entworfen und in OpenAPI 3.1.0-Spezifikationen dokumentiert. 
In diesem Kapitel werden Gliederung der APIs in Funktionsbereiche, sowie Semantik der einzelnen API-Endpunkte beschrieben.

**Applikationen**

Die Beschreibung der UCRI2-Applikationen wird in Form von JSON-Schemata samt begleitender Dokumentation separat geliefert.

## Inhaltsverzeichnis
<!-- toc -->
- [Systemarchitektur](architecture.md)
- [Adressierungskonzept](addressing_concept.md)
- [Kommunikationsrotokoll](p2p_protocol.md)
- [Anwendungen](applications.md)
<!-- tocstop -->
