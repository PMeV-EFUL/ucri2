# API Kommunikationsprotokoll

**Status**: 🤔 "vorgeschlagen"

**Autoren**:

## Kontext

### Ist-Zustand

Der Zustellkanal zwischen Kommunikationsteilnehmer (KT/Client) und UCRM ist Long Polling über `POST /messaging/receive`, die Bestätigung erfolgt über `POST /messaging/commit` ([`staging/spec/client_api.md:52-67`](../staging/spec/client_api.md), [`staging/spec/client_api.md:76-78`](../staging/spec/client_api.md)). Die maximale Antwortverzögerung (dMax) beträgt 30 Sekunden; ein Client kann sie über `maxDelay` (0–30 s) verkürzen bzw. Long Polling ganz deaktivieren.

Wichtig für die Einordnung: **Polling betrifft nur die letzte Meile UCRM → Client.** Die Vermittlungsebene zwischen den UCRMs arbeitet bereits heute rein Push-basiert — die P2P-API kennt weder `receive` noch `commit`, sondern ausschließlich `POST /messaging/send` vom sendenden zum empfangenden UCRM ([`staging/spec/p2p_api.md`](../staging/spec/p2p_api.md), [`api/crm/2.0.0/ucrm-p2p.yaml`](../api/crm/2.0.0/ucrm-p2p.yaml)).

Ein weiterer Präzedenzfall existiert innerhalb der Spezifikation: Für Verfügbarkeitsänderungen von KT wurde bereits bewusst ein Push-Mechanismus gewählt, weil das Registry-Polling zu langsam ist — die `participant_availability_update`-Nachricht MUSS „direkt und ohne Verzögerung" an alle entfernten UCRMs gesendet werden ([`staging/spec/p2p_api.md:22-25`](../staging/spec/p2p_api.md)).

### Ursprüngliche Begründung des Status quo

Das Ziel des UCRI2-Protokolls ist Digitalisierung der menschlichen Kommunikation und impliziert (im Gegensatz zu etwa Steuerungsprozessen in M2M-Kommunikation) keine harten Echtzeit-Anforderungen. REST API mit Polling von Nachrichten hat folgende Vorteile gegenüber Push-Protokollen wie WebSocket oder gRPC:

- einfaches Client/Server Modell
- einfach zu implementieren
- einfach zu konsumieren
- einfach zu skalieren

Um die Auswirkung des Pollings auf die Systemreaktionszeit bei Meldungsaustausch (die maximale Zeit zwischen den Meldungssende- und Meldungsempfangszeitpunkten) zu minimieren, wird bei Meldungsaustausch ein Long Polling eingesetzt.

### Änderungsdruck

Mittlerweile werden Anforderungen nach härteren Echtzeitbedingungen lauter, die sich aus der zunehmenden Adoption von UCRI2 in verschiedenen Anwendungsbereichen ergeben. Auch die Anzahl der potenziell angeschlossenen Systeme und somit die Anzahl der Nachrichten steigt. Daher wird die Einführung eines Push-Protokolls (WebSocket oder gRPC) diskutiert.

Verstärkt wird der Lastaspekt durch die Kopplung von Polling und Liveness-Erkennung: Ruft ein Client den Receive-Endpunkt 60 Sekunden lang nicht ab, MUSS das UCRM seinen Status auf `offline` setzen. „Um aus Sicht der Vermittlungsebene als verfügbar zu erscheinen, MUSS ein Client also eine permanente Abfrage von Nachrichten durchführen" ([`staging/spec/client_api.md:69-73`](../staging/spec/client_api.md)). Der Verfügbarkeits-Timeout ist bewusst auf das Doppelte von dMax gelegt. **Jede Alternative zum Long Polling muss den Verfügbarkeitsmechanismus mitlösen.**

### Zu bewahrende Zustellsemantik

Unabhängig vom Transport sind folgende Eigenschaften der Vermittlungsebene erhaltenswert und Teil des Vertrags gegenüber den Herstellern:

- **at-least-once**, Deduplizierung beim empfangenden KT anhand `messageId` ([`staging/spec/client_api.md:59`](../staging/spec/client_api.md))
- **FIFO-Ordnung pro Ziel-OID** mit monoton steigender, stabiler `sequenceId` ([`staging/spec/client_api.md:48`](../staging/spec/client_api.md))
- **kumulatives Ack**: Commit bestätigt alle Nachrichten mit `sequenceId <= referenzierter sequenceId` ([`staging/spec/client_api.md:76-78`](../staging/spec/client_api.md))
- **Idempotenz** von `receive` und `commit`; Retry eines Sendevorgangs unter gleicher `messageId` ([`staging/spec/client_api.md:40,43,80`](../staging/spec/client_api.md))
- Zustellquittierungen über die App `transport_layer_messages` (`ack`: `NONE`/`NACK`/`ALL`)

### Rahmenbedingungen

| Rahmenbedingung | Beleg |
| --- | --- |
| BSI-konforme P-A-P-Netzarchitektur (Paketfilter – Application-Layer-Gateway – Paketfilter), UCRM in der DMZ | [`staging/spec/architecture.md:65-66`](../staging/spec/architecture.md) |
| mTLS-Terminierung am Paketfilter zulässig, Domainnamen-Whitelisting; P2P über öffentliches Internet möglich | [`staging/spec/architecture.md:61,72-74`](../staging/spec/architecture.md) |
| Alle Verbindungen sind heute **client-initiiert / ausgehend** — kein inbound-Push in Richtung KT, damit NAT- und firewallfreundlich | Ableitung aus Client-API/P2P-API |
| Middleboxen mit aggressiven Idle-Timeouts müssen berücksichtigt werden; deshalb existiert der `maxDelay`-Escape-Hatch | [`staging/spec/client_api.md:67`](../staging/spec/client_api.md) |
| OAuth 2.0 Client Credentials auf Applikationsebene, TLS bzw. mTLS auf Transportebene | [`staging/spec/architecture.md:68,72-76`](../staging/spec/architecture.md) |
| Normative Festlegung per **OpenAPI 3.1**; Toolchain (Spectral-Linting, Bundling, `express-openapi-validator` mit automatischem Routing und Request-/Response-Validierung) hängt daran | [`staging/spec/apis.md:10-11`](../staging/spec/apis.md) |
| Wer eine API implementiert, MUSS sie **vollständig** unterstützen — keine Teilkonformität | [`staging/spec/apis.md:21-22`](../staging/spec/apis.md) |
| Multi-Hersteller-Umfeld, Designziel „Einfache, schnell zu implementierende API" und „Einfaches Zusammenspiel mehrerer Hersteller" | [`staging/spec/index.md:9,17`](../staging/spec/index.md) |
| Clients sind on-premise-Leitstellensysteme; **mobile Clients sind nicht im Scope** | [`staging/spec/architecture.md:27,60`](../staging/spec/architecture.md), [`staging/spec/addressing_concept.md:52`](../staging/spec/addressing_concept.md) |
| Versionierung `GEN.MAJOR.MINOR`: neue **optionale** Endpunkte = MINOR und damit rückwärtskompatibel; Änderung obligater Felder = MAJOR | [`staging/spec/versioning.md:15-18`](../staging/spec/versioning.md) |
| P2P-Vollvermaschung: jedes UCRM hält eine direkte Verbindung zu jedem Partner-UCRM (O(n²)), zzgl. Registry-Polling alle 5–60 min | [`staging/spec/p2p_protocol.md:12-13`](../staging/spec/p2p_protocol.md), [`staging/spec/p2p_api.md:18`](../staging/spec/p2p_api.md) |


### Bekannte Lücke

Die Spezifikation enthält **keine quantifizierten nicht-funktionalen Ziele**: weder Latenzziele (p50/p99), noch Angaben zu Teilnehmerzahl, Nachrichtenvolumen oder Verfügbarkeits-SLA. Die einzige harte Zahl ist dMax = 30 s. Eine rein datengetriebene Entscheidung ist auf dieser Basis nicht möglich; die hier getroffene Entscheidung ist deshalb bewusst so gewählt, dass sie ohne diese Zahlen risikoarm bleibt (siehe Abschnitt „Entscheidung").

## Anforderungen und Bewertungskriterien

| # | Kriterium | Erläuterung |
| --- | --- | --- |
| K1 | Zustelllatenz | Systemreaktionszeit zwischen Sende- und Empfangszeitpunkt, p50 und p99 |
| K2 | Ressourcen- und Verbindungslast | HTTP-Requests, offene Verbindungen und CPU-Last bei wachsender Teilnehmer- und Nachrichtenzahl |
| K3 | Implementierungsaufwand Hersteller | Aufwand für Leitstellensoftware-Hersteller (Client-API) und UCRM-Hersteller |
| K4 | Firewall-, ALG- und NAT-Tauglichkeit | Verträglichkeit mit P-A-P-Struktur, terminierenden Paketfiltern und Idle-Timeouts |
| K5 | Erhalt der Zustellsemantik | at-least-once, Ordering pro Ziel-OID, `sequenceId`, kumulatives Commit |
| K6 | Spezifizierbarkeit und Toolchain | Beschreibbarkeit in OpenAPI 3.1, Nutzbarkeit der bestehenden Validierungs- und Linting-Kette |
| K7 | Rückwärtskompatibilität | Einordnung nach `versioning.md`; Migrationszwang für Bestandsimplementierungen |
| K8 | Sicherheitsmodell | Wiederverwendbarkeit von OAuth 2.0 Client Credentials, TLS/mTLS, OID-basierter Autorisierung |
| K9 | Betrieb und Debugbarkeit | Nachvollziehbarkeit im Fehlerfall, Standard-Tooling, Logging an Proxies |
| K10 | Liveness | Ableitbarkeit des KT-Verfügbarkeitsstatus aus dem Kanal |

## Alternativen

### A0 — Status quo beibehalten, Long Polling optimieren

Kein neues Protokoll. Stattdessen Schließen der bestehenden Spezifikationslücken: Festlegung eines Defaultwerts für `maxMessages`, Empfehlungen zur Wahl von `maxDelay`, Batch-Commit über mehrere Ziel-OIDs in einem Aufruf (heute ist pro OID ein separater Commit-Aufruf nötig), normative Retry-/Backoff-Strategie im UCRM sowie Persistenzanforderungen an Ein- und Ausgangspuffer.

- **Pro:** kein Bruch, kein Zusatzaufwand für Hersteller, Toolchain bleibt vollständig erhalten (K3, K4, K6, K7 optimal). Reduziert bereits merklich die Request-Zahl (Batch-Commit, größere `maxMessages`).
- **Contra:** adressiert den in dieser ADR beschriebenen Latenz- und Skalierungsdruck nur inkrementell. Das erzwungene Dauer-Polling jedes Clients bleibt als Grundlast bestehen (K1, K2).
- **Versionierung:** PATCH/MINOR.

### A1 — WebSocket als optionaler zweiter Zustellkanal

Long Polling bleibt normative Pflicht-Baseline für jedes UCRM. Zusätzlich KANN ein UCRM einen WebSocket-Kanal anbieten, über den zugestellte Nachrichten gepusht und Commits gesendet werden. Ein Client KANN diesen nutzen, MUSS es aber nicht.

- **Pro:** Zustelllatenz nahe Netzwerk-RTT (K1); Wegfall der Poll-Grundlast für Nutzer des Kanals (K2); Verbindung bleibt client-initiiert, damit unverändert firewall- und NAT-freundlich (K4); Sicherheitsmodell unverändert übernehmbar (K8); voll rückwärtskompatibel, kein Migrationszwang (K7); Zustellsemantik unverändert übernehmbar (K5); Liveness aus der aktiven Verbindung ableitbar (K10).
- **Contra:** zwei parallele Zustellpfade im UCRM erhöhen Implementierungs- und Testaufwand der UCRM-Hersteller (K3); OpenAPI 3.1 kann WebSocket nicht beschreiben, ergänzende Spezifikationssprache erforderlich, Verlust der automatischen Validierung auf dem WS-Pfad (K6); HTTP-Upgrade-Fähigkeit der eingesetzten ALGs/Paketfilter ist je Betreiber zu verifizieren (K4).
- **Versionierung:** MINOR (neuer optionaler Endpunkt).

### A2 — WebSocket als verpflichtender Ersatz von `/messaging/receive`

Wie A1, jedoch Entfall des Long-Polling-Kanals.

- **Pro:** nur ein Zustellpfad, konzeptionell sauber; maximale Lastreduktion.
- **Contra:** bricht alle Bestandsimplementierungen; verstößt gegen das Designziel „einfach zu implementieren" im Multi-Hersteller-Umfeld; entfernt den robusten HTTP-Fallback in Umgebungen, in denen HTTP-Upgrade am ALG nicht möglich ist (K3, K4, K7).
- **Versionierung:** MAJOR.

### A3 — gRPC Server-Streaming

Zustellung über einen bidirektionalen bzw. Server-Streaming-RPC, wahlweise nur auf der P2P-API oder auch auf der Client-API.

- **Pro:** höchster Durchsatz und geringster Overhead durch binäre Kodierung und HTTP/2-Multiplexing (K1, K2); starke Codegenerierung.
- **Contra:** Bruch der OpenAPI-3.1-Bindung — Protobuf/IDL statt OpenAPI, Verlust von Spectral-Linting und `express-openapi-validator` (K6); HTTP/2 mit Trailern wird von terminierenden Paketfiltern und ALGs im BOS-Umfeld nicht durchgängig unterstützt (K4); höchste Einstiegshürde für Leitstellensoftware-Hersteller (K3); Debugbarkeit an Proxies deutlich schlechter (K9). Das JSON-Schema-basierte Anwendungsmodell der UCRI2-Apps müsste weiterhin als opaker String transportiert werden, der Typisierungsvorteil von Protobuf entfällt damit weitgehend.
- **Versionierung:** MAJOR.

### A4 — Server-Sent Events (SSE)

Unidirektionaler Push vom UCRM zum Client über einen langlebigen HTTP-Response-Stream; Commit weiterhin über den bestehenden REST-Endpunkt.

- **Pro:** reines HTTP/1.1, kein Upgrade-Handshake, damit ALG-freundlicher als WebSocket (K4); geringer Implementierungsaufwand, eingebaute Reconnect-Semantik mit `Last-Event-ID` (K3).
- **Contra:** unidirektional — Commits benötigen weiterhin separate HTTP-Requests, die Request-Last wird also nur teilweise reduziert (K2); ebenfalls nicht in OpenAPI 3.1 beschreibbar (K6); textbasiert und auf UTF-8 beschränkt; in der Praxis von Proxies teils gepuffert, was den Latenzvorteil zunichtemacht. Gegenüber Long Polling ist der Zugewinn gering, der Spezifikationsbruch aber vorhanden.
- **Versionierung:** MINOR.

### A5 — Webhooks / Reverse Push UCRM → Client

Das UCRM ruft einen vom KT bereitgestellten HTTP-Endpunkt auf.

- **Pro:** technisch trivial, bleibt vollständig in OpenAPI beschreibbar (K6).
- **Contra:** erfordert einen eingehend erreichbaren HTTP-Endpunkt beim KT und damit eine inbound-Öffnung in die vertrauenswürdige Leitstellenzone. Das widerspricht der P-A-P-Struktur nach BSI NET.1.1 und scheitert an NAT (K4). Zusätzlich müsste ein zweites Authentifizierungs- und Zertifikatsmodell in Gegenrichtung etabliert werden (K8), und die Ordering-/Commit-Semantik wäre neu zu konstruieren (K5).
- **Bewertung:** **verworfen.**

### A6 — Fremdprotokoll-Broker (Matrix, MQTT, AMQP)

Nutzung eines etablierten Messaging-Brokers als Vermittlungsebene.

- **Pro:** ausgereifte Zustell-, Persistenz- und Skalierungseigenschaften; Matrix ist im KV-Bereich bereits verpflichtend und über Connector bzw. Adapter im Scope.
- **Contra:** adressiert eine andere Fragestellung. Die UCRI2-Architektur behandelt Fremdprotokolle bewusst über das Adapter-Muster an der Vermittlungsebene, nicht als Ersatz der Client-API, siehe [`staging/spec/system_integration.md`](../staging/spec/system_integration.md). Ein Broker als Pflichtbestandteil würde eine zentrale Infrastruktur mit eigenem Betriebs- und Vertrauensmodell voraussetzen und die P2P-Souveränität der Betreiber aufgeben. Matrix selbst nutzt für die Zustellung an Clients ebenfalls Long Polling (`/sync`) und löst das Latenzproblem damit nicht grundsätzlich anders.
- **Bewertung:** **verworfen.**

## Vergleichsmatrix

Legende: `++` sehr gut, `+` gut, `o` neutral, `-` schlecht, `--` sehr schlecht.

| Kriterium | A0 Tuning | A1 WS optional | A2 WS Ersatz | A3 gRPC | A4 SSE | A5 Webhook | A6 Broker |
| --- | --- | --- | --- | --- | --- | --- | --- |
| K1 Latenz | o | ++ | ++ | ++ | + | ++ | + |
| K2 Last/Skalierung | o | ++ | ++ | ++ | + | + | ++ |
| K3 Aufwand Hersteller | ++ | o | -- | -- | + | + | -- |
| K4 Firewall/ALG/NAT | ++ | + | o | -- | + | -- | o |
| K5 Zustellsemantik | ++ | ++ | ++ | + | + | - | o |
| K6 Spezifikation/Toolchain | ++ | o | o | -- | o | ++ | -- |
| K7 Rückwärtskompatibilität | ++ | ++ | -- | -- | ++ | + | -- |
| K8 Sicherheitsmodell | ++ | ++ | ++ | + | ++ | -- | - |
| K9 Betrieb/Debugbarkeit | ++ | + | + | - | + | + | o |
| K10 Liveness | ++ | ++ | + | + | + | -- | o |

## Entscheidung

**Gewählt wird A1: WebSocket wird als optionaler zweiter Zustellkanal neben dem weiterhin verpflichtenden Long Polling eingeführt.**

Im Einzelnen wird festgelegt:

1. **Long Polling bleibt normative Baseline.** Jedes UCRM MUSS `POST /messaging/receive` und `POST /messaging/commit` unverändert und vollständig unterstützen. Jeder Client kann ausschließlich damit vollwertig am Verbund teilnehmen.
2. **Der WebSocket-Kanal ist optional.** Ein UCRM KANN ihn anbieten, ein Client KANN ihn nutzen. Bietet ein UCRM ihn an, MUSS er der noch zu erstellenden Detailspezifikation vollständig entsprechen — Teilkonformität ist gemäß [`staging/spec/apis.md:21-22`](../staging/spec/apis.md) unzulässig.
3. **Die fachliche Zustellsemantik bleibt identisch.** Es werden dieselbe Envelope-Struktur, dieselbe FIFO-Ordnung und `sequenceId`-Vergabe pro Ziel-OID, dasselbe kumulative Commit und dieselbe at-least-once-Garantie mit `messageId`-basierter Deduplizierung beim Empfänger verwendet. Der WebSocket-Kanal ist ein reiner Transportersatz, keine neue Semantik.
4. **Die Verbindung wird ausschließlich client-initiiert aufgebaut**, per HTTP-Upgrade auf demselben Host und Basispfad wie die übrige Client-API. Die Richtung des Verbindungsaufbaus und damit die Firewall- und NAT-Charakteristik der Gesamtarchitektur bleibt unverändert; es entsteht keine inbound-Öffnung in Richtung KT.
5. **Sicherheitsmodell unverändert:** Authentifizierung über das bestehende OAuth 2.0 Client-Credentials-Token, Transportsicherung über TLS bzw. mTLS, Autorisierung OID-basiert nach denselben Regeln wie bei `receive` und `commit` (Fehlercode 478 bei fehlender Berechtigung).
6. **Liveness:** Eine aktive WebSocket-Verbindung gilt als Verfügbarkeitsnachweis und ersetzt für den betreffenden KT das 60-Sekunden-Poll-Kriterium aus [`staging/spec/client_api.md:69-73`](../staging/spec/client_api.md). Zur Absicherung gegen Middlebox-Idle-Timeouts ist ein Keepalive (WebSocket Ping/Pong) in einem Intervall von höchstens 30 Sekunden vorzusehen, konsistent zum bisherigen dMax.
7. **Fähigkeitsanzeige und Fallback:** Ob ein UCRM den Kanal unterstützt, wird über `/info` bekanntgegeben, sodass Clients ihn zur Laufzeit entdecken können. Ein Client MUSS bei Nichtverfügbarkeit oder Verbindungsabbruch auf Long Polling zurückfallen können.
8. **Versionierung:** Die Erweiterung ist nach [`staging/spec/versioning.md:15-18`](../staging/spec/versioning.md) ein **MINOR-Release (2.0.x)**, da lediglich ein neuer optionaler Endpunkt hinzukommt. Bestehende Implementierungen bleiben ohne Änderung konform.
9. **A0 wird nicht verworfen, sondern vorgezogen umgesetzt.** Die dort genannten Optimierungen (Default für `maxMessages`, Batch-Commit, Retry-/Persistenznormierung) verbessern auch den Baseline-Pfad und sind unabhängig vom WebSocket-Kanal wertvoll.

### Begründung der Abwahl der Alternativen

- **A0 allein** genügt nicht: Das erzwungene Dauer-Polling jedes Clients bleibt als Grundlast bestehen und skaliert linear mit der Teilnehmerzahl. Der im Kontext beschriebene Latenz- und Volumendruck wird nur abgemildert, nicht behoben.
- **A2** wurde verworfen, weil der Verlust des HTTP-Fallbacks in Umgebungen mit terminierenden Paketfiltern ein Betriebsrisiko darstellt und der erzwungene Umstieg dem Designziel eines niederschwelligen Multi-Hersteller-Standards widerspricht. Der zusätzliche Nutzen gegenüber A1 beschränkt sich auf die Vermeidung eines zweiten Codepfads im UCRM.
- **A3** wurde verworfen, weil der Bruch der OpenAPI-Toolchain, die unsichere HTTP/2-Durchlässigkeit terminierender ALGs im BOS-Umfeld und die hohe Einstiegshürde für Hersteller die Effizienzvorteile nicht aufwiegen. Der Typisierungsvorteil von Protobuf greift zudem nicht, da UCRI2-Nutzlasten JSON-Schema-basiert und im Envelope als String eingebettet sind.
- **A4** wurde verworfen, weil der Zugewinn gegenüber Long Polling gering ist (Commits bleiben separate Requests, Proxy-Pufferung kann den Latenzvorteil aufheben), der Spezifikationsbruch gegenüber OpenAPI aber genauso eintritt wie bei A1.
- **A5** wurde verworfen, weil eine inbound-Öffnung in die vertrauenswürdige Leitstellenzone der BSI-konformen P-A-P-Netzarchitektur widerspricht und an NAT scheitert.
- **A6** ist keine Transport-, sondern eine Integrationsfrage und wird über das bestehende Adapter-/Connector-Muster behandelt.

## Konsequenzen

### Positiv

- Zustelllatenz für Nutzer des neuen Kanals sinkt auf Größenordnung der Netzwerk-Roundtrip-Zeit; die bisherige Worst-Case-Verzögerung von bis zu 30 Sekunden entfällt für diese Clients.
- Die HTTP-Request-Grundlast, die heute linear mit der Teilnehmerzahl wächst, entfällt für Clients, die den Kanal nutzen. Das entlastet UCRM, Reverse Proxies und Paketfilter.
- Kein Migrationszwang: Bestandsimplementierungen bleiben ohne Änderung konform. Hersteller können den Kanal nach eigenem Zeitplan adoptieren.
- Sicherheits-, Adressierungs- und Fehlerbehandlungsmodell bleiben unverändert; es entsteht keine zweite Vertrauensinfrastruktur.
- Die Architektur bleibt vollständig client-initiiert und damit firewall- und NAT-tauglich.
- Der Verfügbarkeitsstatus wird für WebSocket-Clients direkter und zuverlässiger ableitbar als über das indirekte Poll-Kriterium.

### Negativ und Aufwand

- UCRM-Hersteller müssen zwei Zustellpfade implementieren, pflegen und testen. Für Client-Hersteller bleibt der Aufwand optional.
- OpenAPI 3.1 kann WebSocket nicht beschreiben. Die Spezifikation benötigt ein ergänzendes Artefakt (z. B. AsyncAPI) und damit eine zweite Spezifikationssprache im Repository.
- Auf dem WebSocket-Pfad entfällt die automatische Request-/Response-Validierung durch `express-openapi-validator`. Validierung muss dort explizit implementiert werden — sowohl in der Referenzimplementierung als auch bei den Herstellern.
- Die Fähigkeit der eingesetzten Application-Layer-Gateways und Paketfilter zum HTTP-Upgrade ist je Betreiberumgebung zu verifizieren. Die Spezifikation muss deshalb den Fallback verpflichtend halten.
- Die Liveness-Logik im UCRM wird zweigleisig (Poll-Timeout **oder** aktive WS-Verbindung) und muss beide Fälle konsistent auf denselben `status` abbilden.
- Konformitäts- und Zertifizierungstests sowie die Referenzimplementierung und der Testclient sind zu erweitern.

### Risiken

- **Semantikdivergenz:** Die beiden Kanäle könnten im Detail auseinanderlaufen (z. B. bei Fehlercodes oder Commit-Verhalten). Gegenmaßnahme: Der WebSocket-Kanal wird normativ als Transportvariante *derselben* Operationen spezifiziert, nicht als eigenständiges Protokoll.
- **Reconnect und Resume:** Ohne normierte Wiederaufnahme nach Verbindungsabbruch droht Nachrichtenverlust oder unkontrollierte Duplizierung. Gegenmaßnahme: Reconnect-Regeln müssen die at-least-once-Garantie über den bestehenden `sequenceId`-/Commit-Mechanismus wiederherstellen; unbestätigte Nachrichten werden nach Reconnect erneut zugestellt.
- **Fragmentierung des Ökosystems:** Wenn nur ein Teil der UCRMs den Kanal anbietet, sinkt der Nutzen. Gegenmaßnahme: Beobachtung der Adoption; Überführung in eine Pflicht (MAJOR) bleibt eine spätere Option.

## Offene Punkte

Diese ADR entscheidet die Richtung, nicht die Detailausgestaltung. Vor Umsetzung sind zu klären:

1. Detailspezifikation des WebSocket-Kanals: Endpunktpfad, Frame-/Nachrichtenformat, Subscribe-Nachricht mit `destinations` und `maxMessages`-Äquivalent, Ack-Nachricht, Fehlerframes und Mapping der bestehenden UCRI-Fehlercodes.
2. Reconnect-, Resume- und Backpressure-Regeln inklusive Verhalten bei Überlauf des Empfangspuffers.
3. Auswahl und Einführung des ergänzenden Spezifikationsformats (AsyncAPI) sowie Anpassung der Build- und Linting-Kette.
4. Definition des Fähigkeitsflags in `/info` und der Discovery-/Fallback-Logik auf Clientseite.
5. Erhebung quantitativer nicht-funktionaler Ziele: Latenzziel (p50/p99), erwartete Teilnehmerzahl und Nachrichtenvolumen, Verfügbarkeitsanforderung. Ohne diese Zahlen bleibt die Wirksamkeit der Maßnahme nicht messbar.
6. Verifikation der HTTP-Upgrade-Fähigkeit typischer ALG-/Paketfilter-Konfigurationen im BOS-Umfeld.
7. Aus A0 vorzuziehen: Defaultwert für `maxMessages`, Batch-Commit über mehrere Ziel-OIDs, normative Retry-/Backoff-Strategie im UCRM, Persistenzanforderungen an Ein- und Ausgangspuffer.

### Beobachtete Nebenbefunde (nicht Gegenstand dieser ADR)

- [`staging/spec/client_api.md:71`](../staging/spec/client_api.md) nennt im Abschnitt zum Verfügbarkeitsstatus den „Messaging-Send"-Endpunkt; gemeint ist ausweislich Abschnittstitel und Referenzimplementierung der Messaging-Receive-Endpunkt.
- `reference-implementations/ucrm/express-js/services/messageBus.js:397` multipliziert die bereits in Millisekunden vorliegende Konstante `MAX_LONG_POLL_DELAY` erneut mit 1000.

## Referenzen

- [`staging/spec/client_api.md`](../staging/spec/client_api.md) — Client-API, Long Polling, Commit, Verfügbarkeitsstatus
- [`staging/spec/p2p_api.md`](../staging/spec/p2p_api.md), [`staging/spec/p2p_protocol.md`](../staging/spec/p2p_protocol.md) — P2P-Push, Vollvermaschung, Signaturverfahren
- [`staging/spec/architecture.md`](../staging/spec/architecture.md) — Ebenenmodell, Netzarchitektur, Trust- und Sicherheitskonzept
- [`staging/spec/apis.md`](../staging/spec/apis.md) — OpenAPI-3.1-Bindung, Vollständigkeitspflicht
- [`staging/spec/versioning.md`](../staging/spec/versioning.md) — Versionierungsregeln `GEN.MAJOR.MINOR`
- [`staging/spec/system_integration.md`](../staging/spec/system_integration.md) — Integrationsmuster, Matrix-Connector/-Adapter
- [`staging/spec/error_handling.md`](../staging/spec/error_handling.md) — Fehlercodes
- [`api/crm/2.0.0/`](../api/crm/2.0.0/) — OpenAPI-Spezifikationen Client-API und P2P-API
