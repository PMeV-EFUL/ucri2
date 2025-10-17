## Vorwort

Ein Systemhersteller muss nicht alle UCRI 2 Anwendungen unterstützen. Die Mindestanforderung: Wenn eine Anwendung unterstützt wird, dann müssen alle Schemata dieser Anwendung unterstützt werden.

Die unterstützten Anwendungen werden über KT-Register bekanntgegeben. Es ist dabei wichtig zu beachten, dass dies jeweils für eingehende Nachrichten als auch für ausgehende Nachrichten getrennt betrachtet werden muss.

UCRI Anwendung verwendet JSON für Formatierung von Anwendungsnachrichten. Siehe JSON Schema Standardisierung: <https://json-schema.org/>.

Dieses Dokument gibt einen Überblick über die aktuell spezifizierten UCRI2-Apps (UCRI2-Anwendungen bzw. Use Cases). Detaillierte Informationen zu einzelnen Apps finden sich in den PDF-Dateien zu den jeweiligen Use Cases, die in den jeweiligen Kapiteln angegeben werden.

### Im Überblick werden folgende UCRI2 – Use Cases unterstützt

- Use Case Einsatzübergabe (ohne Personen)
- Use Case Einsatzübergabe (mit Patientendaten)
- Use Case Patientenübergabe 112 -> 116117
- Use Case Einsatzübergabe polizeilicher Einsatz
- Use Case Einsatzmittelanforderung
- Use Case Einsatzbezogener Nachrichtenaustausch
- Use Case Patiententransport
- Use Case Einsatzmitteltyp-Katalog-Abfrage
- Use Case Einsatzstichwort-Katalog-Abfrage

---

### Anmerkungen zum UCRI1 Use Case Kooperativer Einsatz

Beim Kooperative Einsatz in UCRI1 werden Einsatzdaten an die Nachbarleitstelle übergeben, ohne die Einsatzverantwortung vollständig mit abzugeben. Beide Leitstellen führen ihren Einsatz in Eigenverantwortung weiter und tauschen Nachrichten dazu aus. In UCRI2 wird dieser Ablauf durch 2 Use Cases nämlich Einsatzübergabe und Einsatzbezogener Nachrichtenaustausch abgebildet. Zusätzlich erlaubt dieses Vorgehen den Nachrichtenaustausch in allen anderen Kontexten mit anzuwenden. Dementsprechend wurde in UCRI2 auf einen separten Use Case Kooperativer Einsatz verzichtet.

---
# Unterschiedliche Arten der Einsatzübergabe

UCRI kennt unterschiedliche Formen (hier Use Cases) der Einsatzübergabe. Unter Einsatzübergabe wird generell die Weiterleitung eines Einsatzes inklusive Übergabe der Zuständigkeit für den Einsatz an den Empfänger verstanden.

Da es vor allem organisationsübergreifend unterschiedlichen Informationsbedarf bzw. auch Schutzbedarf der Daten gibt, wurden für die zu erwarteten unterschiedlichen Arten von Einsatzübergaben jeweils eigene Use Cases definiert. Dies ist insofern auch sinnvoll, da auf technischer Ebene von UCRI 2.0 die unterstützten Use Cases über eine Capability Abfrage technisch zur Verfügung gestellt werden können und der bilaterale Abstimmungsaufwand zwischen Kommunikationsteilnehmern damit auf ein Minimum reduziert werden kann.

Nachfolgende Tabelle skizziert die je nach Organisation zu erwartenden Use Cases, wobei die Auflistung nur beispielhaft, aber nicht abschließend ist.

| von/nach    | nach 110                           | nach 112 *)                      | nach 116117             |
|-------------|----------------------------------|---------------------------------|-------------------------|
| von 110     | - Einsatzübergabe (ohne Personen) | - Einsatzübergabe (ohne Personen) | -                       |
|             |                                  |                                 |                         |
|             | - Einsatzübergabe polizeilicher Einsatz |                                 |                         |
|             |                                  |                                 |                         |
|             | |                                 |                         |
| von 112 )*  | - Einsatzübergabe (ohne Personen) | - Einsatzübergabe mit Patientendaten | - Patientenübergabe     |
|             |                                  |                                 |                         |
|             |                                  | - Einsatzübergabe (ohne Personen) |                         |
|             |                                  |                                 |                         |
|             |                                  | - Einsatzmittelanforderung       |                         |
| von 116117  | -                                | - Einsatzübergabe mit Patientendaten | - Patientenübergabe     |



*) von / nach 112 steht hier stellvertretend auch für andere Einsatzzentralen, die im Anwendungsumfeld der Feuerwehr- und Rettungsdienstleitstellen arbeiten. Dazu zählen beispielsweise: Werkfeuerwehren, Waldbrandzentralen, Telenotarztsysteme, Krankentransportunternehmen, Hausnotrufzentralen und weitere.

---