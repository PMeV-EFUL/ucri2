## Versionierung
Die Versionierung für die Vermittlungsebene (UCRI2-Transportschicht) und die UCRI2-Apps erfolgen voneinander getrennt.
Beide Versionierungen folgen den Regeln von [Semantic Versioning 2.0.0](https://semver.org/lang/de/).

Zusätzlich werden eine Transportschicht-Version und ein Satz konkreter App-Versionen zu einem
[UCRI2-Spezifikations-Bundle](#spezifikations-bundle-bom) zusammengefasst, welches ebenfalls eigenständig versioniert wird.

Diese Spezifikation beschreibt die Version 2.0.0 der UCRI2-Transportschicht.

### Transportschicht-Versionierung
Die Transportschichtspezifikation umfasst dieses Dokument sowie die OpenAPI-Spezifikationen für die Client- und die P2P-Schnittstellen.

Die Versionsnummer für die Transportschichtspezifikation besteht aus drei numerischen Teilen:

`MAJOR.MINOR.PATCH`

Für die drei Versionsbestandteile gelten folgende Festlegungen:
- `MAJOR`: Hauptversion der Transportschicht. Eine Änderung dieser Version erfolgt, wenn Änderungen an den API-Endpunktdefinitionen erfolgen, die die Kompatibilität brechen. Hierzu zählen insbesondere: Verändern bestehender Endpunkte bezüglich obligater Felder, Hinzufügen neuer obligater Felder, Entfernen von Endpunkten oder Feldern sowie das Verengen bestehender Wertebereiche (z.B. Entfernen eines Enum-Wertes, Verkleinern einer zulässigen Länge). Die `MAJOR`-Version bezeichnet zugleich die UCRI-Generation und ist für UCRI2 auf `2` festgelegt.
- `MINOR`: Unterversion der Transportschicht. Eine Änderung dieser Version erfolgt, wenn neue optionale Felder zu bestehenden Endpunkten hinzugefügt oder neue optionale Endpunkte hinzugefügt werden.
- `PATCH`: Korrekturversion der Transportschicht. Eine Änderung dieser Version erfolgt bei Änderungen ohne Auswirkung auf den Schnittstellenvertrag, also insbesondere bei redaktionellen Korrekturen, Präzisierungen von Beschreibungstexten sowie Korrekturen von Beispielen.

Somit sind Änderungen an der `MINOR`- und der `PATCH`-Version stets kompatibel, sodass Systeme mit übereinstimmender `MAJOR`-Version untereinander kommunizieren können, auch wenn sie unterschiedliche `MINOR`- oder `PATCH`-Versionen aufweisen.

**Hinweis zur bisherigen Notation**: In früheren Entwurfsfassungen wurde die Notation `GEN.MAJOR.MINOR` verwendet, bei der die erste Stelle (`GEN`) ausschließlich die UCRI-Generation bezeichnete. Diese Notation ist entfallen. Die Bedeutung der Stellen ist unverändert geblieben, die Generationsangabe geht in der `MAJOR`-Stelle auf. Die Versionsbezeichnung `2.0.0` ist in beiden Notationen identisch.

**Vorabversionen**

Für Fassungen, die sich noch in Abstimmung befinden und noch nicht zur Implementierung freigegeben sind, wird gemäß Semantic Versioning ein Vorabversions-Suffix verwendet, z.B. `2.1.0-rc.1`. Vorabversionen sind nicht Bestandteil eines freigegebenen Spezifikations-Bundles.

**Transportschicht-Meldungen**

Die Transportschicht verwendet eine UCRI2-App "Transportschicht-Meldungen" (`transport_layer_messages`). Diese App beschreibt Nachrichten, die auf der Transportschicht erstellt und von verbundenen UCRM sowie Clients konsumiert werden.
Somit MUSS eine spezifische Version dieser App durch alle Clients sowie UCRM, welche die Version 2.0.0 der Transportschicht implementieren, ZWINGEND unterstützt werden.

Die hierfür zu unterstützende Version wird im [Spezifikations-Bundle](#spezifikations-bundle-bom) festgelegt und ist dort als obligatorisch gekennzeichnet.

### App-Versionierung
Die App-Versionierung erfolgt für jede App individuell. Die Versionsnummer einer App besteht aus drei numerischen Teilen:

`MAJOR.MINOR.PATCH`

Für die drei Versionsbestandteile gelten folgende Festlegungen:
- `MAJOR`: Hauptversion der App. Eine Änderung dieser Version erfolgt bei allen Änderungen, die die Kompatibilität brechen. Hierzu zählen insbesondere: Hinzufügen neuer obligater Nachrichten, Hinzufügen oder Verändern obligater Felder in bestehenden Nachrichten, Entfernen von Nachrichten oder Feldern, das nachträgliche Erklären eines optionalen Feldes zu einem obligaten Feld sowie das Verengen bestehender Wertebereiche (z.B. Entfernen eines Enum-Wertes, Verkleinern einer zulässigen Länge, Verschärfen eines Musters).
- `MINOR`: Unterversion der App. Eine Änderung dieser Version erfolgt, wenn neue optionale Nachrichten hinzugefügt werden, in bestehenden Nachrichten optionale Felder hinzugefügt werden oder bestehende Wertebereiche erweitert werden.
- `PATCH`: Korrekturversion der App. Eine Änderung dieser Version erfolgt bei Änderungen ohne Auswirkung auf den Nachrichtenvertrag, also insbesondere bei redaktionellen Korrekturen, Präzisierungen von Titeln und Beschreibungen sowie Korrekturen von Beispielen.

**Führung der `PATCH`-Stelle**

Die `PATCH`-Stelle ist per Definition nicht interoperabilitätsrelevant. Sie wird daher NICHT geführt in:
- den Verzeichnisnamen der App-Schemata und der App-Dokumentation,
- den `$id`-Werten der JSON-Schemata,
- dem Feld `appVersion` der übertragenen Nachrichten,
- den im KT-Register publizierten App-Versionen.

An diesen Stellen wird eine App-Version stets in der verkürzten Form `MAJOR.MINOR` angegeben. Die vollständige Versionsangabe inklusive `PATCH`-Stelle wird ausschließlich im [Spezifikations-Bundle](#spezifikations-bundle-bom) sowie in der Änderungshistorie der jeweiligen App geführt. Das Spezifikations-Bundle führt zu jedem App-Eintrag zusätzlich eine eindeutige Quellreferenz (`sourceRef`), über die der exakte Schemastand auch bei gleichbleibender `MAJOR.MINOR`-Angabe eindeutig aufgelöst werden kann.

**Bestandsschutz**

Bereits veröffentlichte App-Versionen mit zweistelliger Angabe (z.B. `1.0`) gelten als `MAJOR.MINOR.0` (also `1.0.0`) im Sinne dieser Festlegungen.

**Publikation im KT-Register**

Das UCRI2-Protokoll beinhaltet ein KT-Register (siehe [KT-Register](./p2p_protocol.md#kt-register)), in dem App-Versionen, die ein Kommunikationsteilnehmer unterstützt, publiziert werden. Obwohl die Änderungen an der `MINOR`-Version stets kompatibel sind, müssen auch `MINOR`-Varianten unter den unterstützten Apps eines Teilnehmers explizit angegeben werden.

### Spezifikations-Bundle (BOM)
Eine Transportschicht-Version allein beschreibt noch keinen vollständig interoperablen Systemstand, da die inhaltliche Kommunikation über die UCRI2-Apps erfolgt, welche unabhängig von der Transportschicht versioniert werden. Um einen prüfbaren und ausschreibungsfähigen Bezugspunkt zu schaffen, fasst UCRI2 eine Transportschicht-Version und einen Satz konkreter App-Versionen zu einem **Spezifikations-Bundle** zusammen.

Das Spezifikations-Bundle ist nach dem Vorbild einer Bill of Materials (BOM) aufgebaut und wird maschinenlesbar in der Datei [ucri2-bom.json](https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/staging/spec/ucri2-bom.json) geführt. Die zugehörige Struktur ist in [ucri2-bom.schema.json](https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/staging/spec/ucri2-bom.schema.json) festgelegt.

**Abgrenzung zur Transportschicht-Version**

Die Bundle-Version ist von der Transportschicht-Version entkoppelt und wird eigenständig gezählt. Dies ist erforderlich, damit ein neuer App-Zusammenstellungsstand veröffentlicht werden kann, ohne die Transportschicht-Version zu verändern, obwohl an dieser keine Änderung erfolgt ist.

**Aufbau der Bundle-Version**

Die Bundle-Version folgt dem Schema `MAJOR.MINOR.PATCH` gemäß Semantic Versioning. Sie leitet sich aus den enthaltenen Artefakten ab:
- `MAJOR`: Die Bundle-Hauptversion wird erhöht, wenn die enthaltene Transportschicht-Version oder die Version mindestens einer enthaltenen App eine `MAJOR`-Erhöhung erfährt oder wenn eine App aus dem Bundle entfernt wird.
- `MINOR`: Die Bundle-Unterversion wird erhöht, wenn die enthaltene Transportschicht-Version oder die Version mindestens einer enthaltenen App eine `MINOR`-Erhöhung erfährt oder wenn eine App neu in das Bundle aufgenommen wird.
- `PATCH`: Die Bundle-Korrekturversion wird erhöht, wenn ausschließlich `PATCH`-Erhöhungen enthaltener Artefakte vorliegen.

Ergänzend führt jedes Bundle ein kalendarisches Label (`calendarLabel`, z.B. `UCRI2 Release 2026.1`). Dieses Label dient ausschließlich der Kommunikation, insbesondere gegenüber Beschaffung und Betrieb, und trägt KEINE Kompatibilitätsaussage. Maßgeblich für alle technischen Festlegungen ist stets die Bundle-Version.

**Exakte Versionsangaben**

Alle Versionsangaben in einem Spezifikations-Bundle MÜSSEN exakt angegeben werden. Versionsbereiche oder Platzhalter (z.B. `1.x` oder `^1.2`) sind NICHT zulässig. Nur so bleibt die Aussage "interoperabel gemäß UCRI2-Bundle X" eindeutig prüfbar.

**Verbindlichkeit einzelner Einträge**

Jeder App-Eintrag im Bundle ist über das Feld `mandatory` als obligatorisch oder optional gekennzeichnet:
- `mandatory: true`: Ein System, welches dieses Bundle implementiert, MUSS die App in der angegebenen Version unterstützen. Dies betrifft insbesondere die App "Transportschicht-Meldungen" (`transport_layer_messages`).
- `mandatory: false`: Die App ist Bestandteil des Bundles, ihre Unterstützung ist jedoch von der jeweiligen fachlichen Rolle des Systems abhängig. Welche Apps ein System tatsächlich unterstützt, wird über das KT-Register publiziert.

**Apps außerhalb des Bundles**

Kommunikationsteilnehmer DÜRFEN weitere Apps oder weitere Versionen der enthaltenen Apps unterstützen und im KT-Register publizieren. Eine solche Unterstützung ist jedoch nicht Bestandteil der durch das Bundle zugesicherten Interoperabilität.

**Aktuelles Spezifikations-Bundle**

Bundle-Version: `1.0.0` (`UCRI2 Release 2026.1`), Transportschicht-Version: `2.0.0`

| App-ID | App-Version | Obligatorisch |
| --- | --- | --- |
| `transport_layer_messages` | 1.0.0 | ja |
| `classification_catalogue` | 1.0.0 | nein |
| `incident_transfer` | 1.0.0 | nein |
| `incident_transfer_police` | 1.0.0 | nein |
| `incident_transfer_with_patient` | 1.0.0 | nein |
| `notification_text` | 1.0.0 | nein |
| `patient_transfer` | 1.0.0 | nein |
| `patient_transport` | 1.0.0 | nein |
| `resource_request` | 1.0.0 | nein |
| `resource_type_catalogue` | 1.0.0 | nein |

Die Tabelle gibt den Inhalt der Datei [ucri2-bom.json](https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/staging/spec/ucri2-bom.json) in lesbarer Form wieder. Im Konfliktfall ist die Datei maßgeblich.
