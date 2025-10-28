# Universal Control Room Interface Version 2 (UCRI2)

UCRI steht für Universal Control Room Interface - ein Protokoll für die Kommunikation zwischen zwei oder
mehreren Einsatzleitsystemen.

Nach der erfolgreichen Einführung und eingehenden Erprobung in der Praxis wurden Erfahrungen gesammelt und neue Anforderungen identifiziert. Diese machten eine Weiterentwicklung des UCRI-Protokolls auf einer neuen Architekturbasis erforderlich. UCRI2 ist eine vollständig überarbeitete Version, die alle Anwendungsfälle der Vorgängerversion (UCRI 1.1) unterstützt und die Grundlage für zukünftige, flexible Erweiterungen bildet.

Die Ziele für die Entwicklung von UCRI2 sind ~~und die Unterschiede zu UCRI 1.x sind~~:
- Einfache, schnell zu implementierende API
  - standardisierte maschinenlesbare Spezifikation
  - sichere Zustellung und Verarbeitung von Meldungen
- Trennung technischer und fachlicher Aspekte
  - Einfache Erweiterbarkeit
  - Technische Komponenten müssen bei fachlichen Erweiterungen nicht angepasst werden
  - Fachliche Erweiterungen können ohne Anpassungen der Infrastruktur erfolgen
- Messaging/Routing basierte Architektur
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

## Inhaltsverzeichnis
<!-- toc -->
- [Systemarchitektur](architecture.md)
- [Adressierungskonzept](addressing_concept.md)
- [Kommunikationsrotokoll](p2p_protocol.md)
- [Anwendungen](applications.md)
<!-- tocstop -->
