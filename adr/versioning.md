# ADR: Versionierung von Transportschicht, Applikationen und Spezifikations-Bundle

| | |
| --- | --- |
| **Status** | 🤔 Vorgeschlagen |
| **Datum** | 2026-08-11 |
| **Betrifft** | UCRI2-Transportschicht, UCRI2-Apps, Gesamtspezifikation |


## Kontext

UCRI2 besteht aus zwei unabhängig entwickelten Artefaktklassen:

1. Der **Transportschicht** — bestehend aus der Spezifikationsschrift sowie den OpenAPI-Definitionen für Client- und P2P-Schnittstelle (`api/crm/2.0.0/`).
2. Den **UCRI2-Apps** — derzeit zehn fachliche Anwendungen, jede mit eigenem Satz JSON-Schemata unter `apps/<appId>/<version>/`.

Beide werden bewusst getrennt versioniert, damit sich Fachlichkeit und Transport unabhängig weiterentwickeln können. Diese Trennung ist richtig und wird beibehalten. Sie erzeugt jedoch drei Probleme, die die bisherige Regelung nicht löst.

### Problem 1: Die Versionsschemata sind nicht Semantic Versioning

Die Transportschicht nutzte `GEN.MAJOR.MINOR` mit `GEN` fest auf `2`. Das sieht wie SemVer aus, ist es aber nicht: Ein Breaking Change erhöhte die *zweite* Stelle. Ein Werkzeug oder ein Mensch, der SemVer-Konventionen anwendet, liest `2.1.0` als abwärtskompatibel zu `2.0.0` — nach der alten Regel war es das nicht. Diese stille Fehlinterpretation ist gefährlicher als ein offen abweichendes Schema.

Die Apps nutzten zweistelliges `MAJOR.MINOR`. Beide Schemata hatten **keine PATCH-Ebene**. Damit existierte für die häufigste aller Änderungsarten — Tippfehler, unklare `description`, fehlerhaftes `example` — kein legitimer Versionssprung. In der Praxis führt das zu genau zwei Ausweichverhalten, beide schlecht: entweder ein unnötiger `MINOR`-Bump, der Implementierern eine Vertragsänderung suggeriert, die es nicht gibt; oder eine stillschweigende Änderung unter gleichbleibender Versionsnummer, die Interoperabilitätstests unreproduzierbar macht.

### Problem 2: Die Breaking-Change-Definition ist unvollständig

Die MAJOR-Regeln nannten nur das *Hinzufügen und Verändern obligater* Felder. Nicht genannt, aber ebenso vertragsbrechend:

- Entfernen von Feldern, Nachrichten oder Endpunkten
- Verengen von Wertebereichen (Enum-Wert streichen, `maxLength` senken, `pattern` verschärfen)
- Nachträgliches Erklären eines optionalen Feldes zum obligaten Feld

Eine unvollständige Aufzählung in einer Norm wird als abschließend gelesen. Ein Hersteller, der einen Enum-Wert entfernt und dabei formal keine der genannten Bedingungen erfüllt, hätte sich regelkonform verhalten und dennoch Interoperabilität gebrochen.

### Problem 3: Es gibt keinen prüfbaren Gesamtstand

Die Aussage „System X ist UCRI2-2.0.0-konform" ist inhaltsleer, weil die eigentliche Kommunikation über die Apps läuft und die Transportschicht-Version über deren Stand nichts aussagt. Die einzige Verknüpfung war ein Fließtext-Satz, der `transport_layer_messages` auf `1.0` festlegte. Für die übrigen neun Apps existiert keinerlei Zuordnung.

Konsequenzen: Eine Ausschreibung kann den zu liefernden Funktionsumfang nicht eindeutig benennen. Ein Zertifizierer kann den Prüfumfang nicht bestimmen. Zwei Systeme können beide „UCRI2 2.0.0" implementieren und trotzdem inkompatibel sein.

## Entscheidung

### E1 — Transportschicht folgt Semantic Versioning 2.0.0

Schema `MAJOR.MINOR.PATCH`.

- `MAJOR` bezeichnet Breaking Changes **und** zugleich die UCRI-Generation (aktuell `2`). Die alte `GEN`-Stelle geht darin auf.
- `MINOR` bezeichnet additive Änderungen (neue optionale Felder oder Endpunkte).
- `PATCH` bezeichnet Änderungen ohne Wirkung auf den Schnittstellenvertrag.
- Kompatibilität besteht bei übereinstimmender `MAJOR`-Version.
- Vorabfassungen tragen ein SemVer-Suffix (`2.1.0-rc.1`) und sind nicht Bestandteil eines freigegebenen Bundles.

Die aktuelle Version bleibt zahlenmäßig `2.0.0`. Nur die Semantik der Stellen wird präzisiert — es entsteht kein Migrationsbedarf für bestehende Implementierungen.

### E2 — Apps folgen Semantic Versioning 2.0.0, PATCH wird jedoch nicht auf der Leitung geführt

Schema `MAJOR.MINOR.PATCH` je App, mit vollständiger Breaking-Change-Definition (inklusive Entfernen, Verengen, Optional→Obligat).

Die `PATCH`-Stelle wird **nicht** geführt in Verzeichnisnamen, `$id`-URLs, dem Feld `appVersion` und im KT-Register. Dort gilt weiterhin die verkürzte Form `MAJOR.MINOR`. Die vollständige Version erscheint ausschließlich im Spezifikations-Bundle und in der Änderungshistorie.

Bestandsschutz: veröffentlichte zweistellige Versionen (`1.0`) gelten als `1.0.0`.

### E3 — Ein eigenständig versioniertes Spezifikations-Bundle (BOM)

Eine Transportschicht-Version plus ein Satz exakter App-Versionen bilden ein **Spezifikations-Bundle**, maschinenlesbar in `staging/spec/ucri2-bom.json`, strukturell festgelegt in `staging/spec/ucri2-bom.schema.json`.

- Die Bundle-Version ist **von der Transportschicht-Version entkoppelt** und folgt eigenständig SemVer.
- Bump-Regeln leiten sich aus den enthaltenen Artefakten ab: MAJOR bei enthaltenem MAJOR-Sprung oder App-Entfernung, MINOR bei MINOR-Sprung oder App-Aufnahme, PATCH bei ausschließlich PATCH-Sprüngen.
- **Exakte Pins, keine Ranges.** `1.2.0`, nicht `^1.2` oder `1.x`.
- Ein kalendarisches Label (`UCRI2 Release 2026.1`) dient der Kommunikation und trägt **keine** Kompatibilitätsaussage.
- Jeder App-Eintrag trägt `mandatory` (obligatorische vs. rollenabhängige Unterstützung) und `sourceRef` (Git-Tag/Commit).
- Apps außerhalb des Bundles dürfen unterstützt werden, sind aber nicht Teil der zugesicherten Interoperabilität.

## Begründung

### Warum SemVer und nicht ein UCRI-eigenes Schema

SemVer ist kein technisch überlegenes Schema, sondern ein *bekanntes*. Der Wert liegt darin, dass Implementierer, Beschaffer und Werkzeuge die Bedeutung ohne Lektüre der Spezifikation korrekt raten. Ein Eigenschema muss diesen Vorteil durch Dokumentation zurückerkaufen und scheitert daran erfahrungsgemäß. Die alte `GEN.MAJOR.MINOR`-Notation illustriert das: Sie war korrekt dokumentiert und wurde trotzdem zwangsläufig falsch gelesen, weil sie wie SemVer *aussah*.

### Warum die PATCH-Stelle bei Apps nicht auf die Leitung gehört

Hier stehen zwei Prinzipien gegeneinander.

*Für* eine dreistellige `appVersion` auf der Leitung spricht Konsistenz und die eindeutige Diagnostizierbarkeit des Gegenüberstands.

*Dagegen* sprechen drei Argumente, die wir für schwerer halten:

1. **Semantik.** `appVersion` und das KT-Register dienen der Aushandlung von Interoperabilität. Eine PATCH-Version ist definitionsgemäß interoperabilitätsneutral. Sie dort zu führen, bläht den Aushandlungsraum ohne Informationsgewinn auf.
2. **Registerpflege.** Jede redaktionelle Korrektur würde eine Aktualisierung sämtlicher KT-Register-Einträge aller Teilnehmer auslösen. Das ist Aufwand ohne Gegenwert und wird in der Praxis unterlassen, wodurch das Register unzuverlässig wird.
3. **Migrationskosten.** Die `$id`-URLs der Schemata enthalten die Version. Eine Umstellung auf dreistellige Verzeichnisse bräche alle bereits ausgelieferten Schema-Referenzen — ein Bruch, dessen einziger Ertrag kosmetische Konsistenz wäre.

Der Preis dieser Entscheidung ist real und wird ausdrücklich benannt: **Ohne Gegenmaßnahme wäre die PATCH-Stelle rein dekorativ.** Wenn die BOM `1.2.3` pinnt, die `$id` aber auf `1.2` zeigt, ist nicht auflösbar, welcher Schemastand gemeint ist. Genau deshalb führt jeder BOM-Eintrag zusätzlich `sourceRef` als Git-Tag oder Commit-Hash. Damit ist der exakte Stand eindeutig abrufbar, ohne die URL-Struktur anzutasten. Die PATCH-Stelle bleibt fachlich aussagekräftig (sie signalisiert „hier hat sich redaktionell etwas geändert"), die technische Auflösung übernimmt `sourceRef`.

### Warum die Bundle-Version von der Transportschicht-Version entkoppelt ist

Dies ist die folgenreichste Einzelentscheidung dieser ADR.

Die naheliegende Alternative — die Transportschicht-Version benennt zugleich das Bundle — wurde verworfen, weil sie einen Zustand nicht abbilden kann, der eintreten *wird*: Eine App erhält einen Breaking Change, die Transportschicht bleibt unverändert. Bei gekoppelter Versionierung müsste dann die Transportschicht-Version erhöht werden, obwohl sich an ihr nichts geändert hat. Das ist eine Falschaussage gegenüber jedem Implementierer, der aufgrund des MAJOR-Sprungs seine Transportimplementierung prüft und nichts findet. Umgekehrt entstünde Druck, notwendige App-Breaking-Changes zu vermeiden oder zu verschleiern, um den Transportschicht-Bump zu umgehen — eine Anreizstruktur, die direkt zu schlechteren Schemata führt.

Der Preis der Entkopplung sind zwei Versionsnummern statt einer und damit Erklärungsbedarf. Dieser wird durch das CalVer-Label abgefedert.

### Warum exakte Pins statt Versionsbereiche

Ein Bundle ist ein Interoperabilitäts-Zeugnis, kein Dependency-Manifest einer Anwendung. Der Zweck ist die Beantwortung der Frage: „Gegen welchen exakten Stand wurde geprüft?" Ein Range wie `^1.2` verschiebt diese Frage auf den Auflösungszeitpunkt und macht die Aussage „interoperabel gemäß Bundle X" damit unprüfbar — zwei zum selben Bundle konforme Systeme könnten unterschiedliche Schemastände auflösen. Vorbild ist die Jakarta-EE-Platform-Spezifikation und die Maven-BOM-Praxis, nicht die npm-Range-Praxis.

### Warum CalVer nur als Label

CalVer (`2026.1`) trägt keine Kompatibilitätsinformation. Als primäres Schema wäre es daher untauglich. Es hat jedoch einen realen Nutzen in der Kommunikation mit Beschaffung, Betrieb und Gremien, die in Jahrgängen und Releasezyklen denken und mit `3.1.0` nichts anfangen können. Beides parallel zu führen kostet fast nichts, solange die Normativität eindeutig zugeordnet ist: Maßgeblich ist immer die Bundle-Version.

## Betrachtete Alternativen

| Alternative | Verworfen, weil |
| --- | --- |
| Bisheriges Schema beibehalten | Löst keines der drei Probleme; die SemVer-Ähnlichkeit ohne SemVer-Semantik ist aktiv irreführend. |
| SemVer, aber ohne BOM | Der interoperable Gesamtstand bliebe unbestimmbar. Ausschreibung und Zertifizierung hätten keinen Bezugspunkt. |
| Transportschicht-Version benennt das Bundle | Erzwingt Falschaussagen über die Transportschicht und schafft Anreize gegen notwendige App-Breaking-Changes (siehe oben). |
| Bundle mit Versionsbereichen (`^1.2`) | Macht die Konformitätsaussage unprüfbar. |
| CalVer als primäres Bundle-Schema | Trägt keine Kompatibilitätsaussage. |
| Dreistellige App-Version auch in Verzeichnissen und `$id` | Bricht alle ausgelieferten Schema-Referenzen; Ertrag ist rein kosmetisch. |
| Monorepo-Einheitsversion für alles | Gibt die bewusste Entkopplung von Fachlichkeit und Transport auf — das zentrale Architekturprinzip von UCRI2. |

## Konsequenzen

### Positiv

- Versionsnummern sind ohne Spezifikationslektüre korrekt interpretierbar.
- Redaktionelle Korrekturen haben einen legitimen Versionssprung; Spezifikationspflege wird dadurch billiger und damit wahrscheinlicher.
- Die Breaking-Change-Definition ist abschließend und schließt die zuvor offenen Lücken.
- „UCRI2-konform" wird zu einer prüfbaren, ausschreibungsfähigen Aussage.
- Apps und Transportschicht können sich weiterhin unabhängig entwickeln, ohne dass der Gesamtstand unbestimmt wird.

### Negativ / Kosten

- Drei Versionsnummern (Transportschicht, App, Bundle) statt zwei. Höherer Erklärungsaufwand.
- Die BOM ist ein zusätzliches zu pflegendes Artefakt. Ohne automatisierte Prüfung driftet sie gegenüber dem tatsächlichen Stand von `staging/apps/` ab. **Diese Prüfung ist noch nicht implementiert** (siehe Offene Punkte).
- Die App-PATCH-Stelle ist ohne Kenntnis der `sourceRef`-Mechanik verwirrend, weil sie in den sichtbaren Pfaden nicht auftaucht.
- Die Bundle-Bump-Regeln sind mechanisch, aber manuell anzuwenden.

### Neutral

- Bestehende Implementierungen sind nicht betroffen: `2.0.0` bleibt `2.0.0`, App-`1.0` bleibt als `1.0` adressierbar.

## Offene Punkte

1. **Format-Constraints in den OpenAPI-Schemata.** `appRef.yaml` (`appVersion`) und `info.yaml` (`apiVersion`) definieren freie Strings ohne `pattern`; die Beispiele zeigen noch veraltete Werte (`'0.1'`). Eine Ergänzung ist wünschenswert, ist aber selbst eine Änderung an der Transportschicht und nach E1 versionswirksam. Reihenfolge und Zielversion sind zu entscheiden.
2. **Automatisierte BOM-Validierung.** Der Processor (`staging/bin/processApplicationSchemata.js`) sollte die BOM gegen ihr Schema und gegen die tatsächlich vorhandenen App-Verzeichnisse prüfen. Ohne diesen Schritt ist Drift nur eine Frage der Zeit.
3. **Nicht-Idempotenz des Processors.** Ein Lauf ohne Quelländerung erzeugt Diffs (wechselnde `$defs`-Reihenfolge in sechs App-Schemata; anwachsende Leerzeilen am Ende aller generierten `.md`-Dateien). Dies ist unabhängig von dieser ADR, untergräbt aber die Nachvollziehbarkeit generierter Artefakte und damit indirekt die Verlässlichkeit der `sourceRef`-Auflösung.
4. **Änderungshistorie je App.** E2 verweist auf eine Änderungshistorie als Ort der vollständigen Versionsangabe. Ein Format hierfür ist noch nicht festgelegt.

## Referenzen

- [Semantic Versioning 2.0.0](https://semver.org/lang/de/)
- `staging/spec/versioning.md` — normative Fassung der hier begründeten Regeln
- `staging/spec/ucri2-bom.json`, `staging/spec/ucri2-bom.schema.json` — Spezifikations-Bundle
- `staging/spec/p2p_protocol.md#kt-register` — KT-Register
