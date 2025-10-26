# Universal Control Room Interface Version 2 (UCRI2)

UCRI steht für Universal Control Room Interface - ein Protokoll für die Kommunikation zwischen zwei oder
mehreren Einsatzleitsystemen.

Nach der erfolgreichen Einführung und eingehenden Erprobung in der Praxis wurden Erfahrungen gesammelt und neue Anforderungen identifiziert. Diese machten eine Weiterentwicklung des UCRI-Protokolls auf einer neuen Architekturbasis erforderlich. UCRI2 ist eine vollständig überarbeitete Version, die alle Anwendungsfälle der Vorgängerversion (UCRI 1.1) unterstützt und die Grundlage für zukünftige, flexible Erweiterungen bildet.

Ziele für die Entwicklung von UCRI2 und die Unterschiede zu UCRI 1.x sind:

- Einfache, schnell zu implementierende API, schnelles PoC möglich
  - standardisierte maschinenlesbare Spezifikation
  - sichere Zustellung und Verarbeitung von Meldungen
- In verschiedenen Programmierumgebungen einfach zu konsumierende API
- Trennung technischer und fachlicher Aspekte
  - Einfache Erweiterbarkeit
  - Technische Komponenten müssen bei fachlichen Erweiterungen nicht angepasst werden
  - Fachliche Erweiterungen können ohne Anpassungen der Infrastruktur erfolgen
- Routing im Kern des Konzeptes
  - Einfaches Zusammenspiel mehrerer Hersteller
  - Unterstützung sowohl zentraler als dezentraler Architekturen
- Überführung einer RPC/REST basierter Architektur in eine Messaging basierte Architektur
- OAuth 2.0 konforme Authentifizierung

## Inhaltsverzeichnis
<!-- toc -->
- [Systemarchitektur](architecture.md)
- [Adressierungskonzept](addressing_concept.md)
- [Kommunikationsrotokoll](p2p_protocol.md)
- [Anwendungen](applications.md)
<!-- tocstop -->
