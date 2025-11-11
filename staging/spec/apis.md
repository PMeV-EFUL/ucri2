# API

In diesem Kapitel wird die konkrete Umsetzung der UCRI2-APIs beschrieben. Gemäß dem Rollenkonzept werden zwei APIs unterschieden, siehe Abbildung:
- Die **Client-API** wird vom **UCRM** angeboten und von **Clients** (Kommunikationsteilnehmern) konsumiert.
- Die **P2P-API** wird von **UCRMs** angeboten, welche eine Verbindung mit anderen **UCRMs** auf Basis einer Peer-to-Peer-Topologie herstellen wollen.

![UCRI Leitstellenmodul](ucrm.drawio.svg)

Für beide APIs gelten folgende allgemeinen Festlegungen, welche in den jeweiligen Unterkapiteln mit API-spezifischen Festlegungen ergänzt werden:
1. Das grundlegende API-Design verwendet REST API Design Richtlinien erarbeitet bei [TM Forum](https://www.tmforum.org/).
2. Die konkrete Ausgestaltung der APIs inklusive der zu verwendenden Endpunkte und Datenformate wird in den zu der Spezifikation gehörenden OpenAPI-Spezifikationen in Version 3.1.0 (festgelegt in [OpenAPI Initiative](https://www.openapis.org/)) festgelegt. Die OpenAPI-Spezifikationen sind strukturiert aufgebaut. Die übergeordneten API-Beschreibungen (`ucrm-client.yaml` sowie `ucrm-p2p.yaml`) verweisen jeweils auf die im Unterverzeichnis "schemas" vorhandenen `yaml`-Dateien mit den zu übertragenden Datenobjekten. Zusätzlich existieren noch inhaltsgleiche, gebündelte OpenAPI-Spezifikationen im JSON Format (`ucrm-client-bundled.json` sowie `ucrm-p2p-bundled.json`).
3. Beide APIs sind in folgende Funktionsbereiche aufgeteilt:
   - Authentifizierung per OAuth 2.0 Client Credential Grant Flow.
   - KT-Registry - Abfragen von Eigenschaften der registrierten Kommunikationsteilnehmer.
   - Messaging - Versenden und Empfangen von Nachrichten.
   - Info - Informationen über die Version und den Betreiber der Schnittstelle.
4. Die Datenübertragung erfolgt ausschliesslich per Transportverschlüsselung (TLS).
5. Die zur Übertragung von Fehlerzuständen genutzten Error-Objekte (vgl. `error.yaml`) werden im Unterkapitel [Fehlerbehandlung](./error_handling.md#fehlerbehandlung) für beide APIs gemeinsam dargestellt, da ein Großteil der genutzten Fehlercodes in beiden APIs vorkommt.
6. Die Generierung und Prüfung von Nachrichtensignaturen wird im Kapitel [Kommunikationsprotokoll](./p2p_protocol.md#kommunikationsprotokoll) im Unterkapitel [Datenintergrität](./p2p_protocol.md#datenintegrität) beschrieben.
7. Falls ein Request nicht der OpenAPI-Spezifikation entspricht, MUSS dieser vom UCRM zurückgewiesen werden (vgl. Kapitel [Fehlerbehandlung](./error_handling.md#fehlerbehandlung)).
8. Ein UCRM, welches die **Client-API** implementiert, MUSS diese vollständig unterstützen.
9. Ein UCRM, welches die **P2P-API** implementiert, MUSS diese vollständig unterstützen.
