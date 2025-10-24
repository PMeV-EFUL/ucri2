# UCRI2 APIs


## Festlegungen
In diesem Kapitel wird die konkrete Umsetzung der UCRI2-APIs beschrieben. Gemäß dem Rollenkonzept werden zwei APIs unterschieden:
- Die **Client-API** wird vom **UCRM** angeboten und von **Clients** (Kommunikationsteilnehmern) konsumiert.
- Die **P2P-API** wird von **UCRMs** angeboten, welche eine Verbindung mit anderen **UCRMs** herstellen wollen, falls dies durch die Kommunikationstopologie so vorgesehen ist.

Für beide APIs gelten folgende allgemeinen Festlegungen, welche in den jeweiligen Unterkapiteln mit API-spezifischen Festlegungen ergänzt werden:
1. Das grundlegende API-Design verwendet REST API Design Richtlinien erarbeitet bei [TM Forum](https://www.tmforum.org/).
2. Die konkrete Ausgestaltung der APIs inklusive der zu verwendenden Endpunkte und Datenformate wird in den zu der Spezifikation gehörenden OPENAPI-Spezifikationen in Version 3.1.0 (festgelegt in [OpenAPI Initiative](https://www.openapis.org/)) festgelegt (ucrm-client.yaml sowie ucrm-p2p.yaml). Die Spezifikationen verweisen jeweils auf die im Unterverzeichnis "schemas" vorhandenen yaml-Dateien mit den zu übertragenden Datenobjekten. Zusätzlich existieren noch inhaltsgleiche, gebündelte OPENAPI-Spezifikationen im JSON Format (ucrm-client-bundled.json sowie ucrm-p2p-bundled.json).
3. Beide APIs sind in folgende Funktionsbereiche aufgeteilt:
    1. Authentifizierung per OAUTH Client Credential Grant type.
    2. KT-Registry - Abfragen von Eigenschaften der registrierten Kommunikationsteilnehmer.
    3. Messaging - Versenden und Empfangen von Nachrichten.
    4. Info - Informationen über die Version und den Betreiber der Schnittstelle.
4. Die Datenübertragung erfolgt ausschliesslich per Transportverschlüsselung (TLS).
5. Die zur Übertragung von Fehlerzuständen genutzten Error-Objekte (vgl. error.yaml) werden im Unterkapitel "Fehlerbehandlung" für beide APIs gemeinsam dargestellt, da ein Großteil der genutzten Fehlercodes in beiden APIs vorkommt.
6. Die Generierung von Nachrichtensignaturen wird im Unterkapitel "Signierung von Nachrichten" beschrieben.
7. Falls ein Request nicht der OPENAPI-Spezifikation entspricht, MUSS dieser vom UCRM zurückgewiesen werden (vgl. Kapitel "Fehlerbehandlung").
8. Ein UCRM MUSS die **Client-API** vollständig unterstützen.
9. Ein UCRM, welches die **P2P-API** implementiert, MUSS diese vollständig unterstützen.

## Überblick

### Beteiligte Komponenten

![UCRI Leitstellenmodul](ucrm.drawio.svg)

### Long Polling

Um die Auswirkung des Pollings auf die Systemreaktionszeit bei Meldungsaustausch (die maximale Zeit zwischen den Meldungssende- und Meldungsempfangszeitpunkten) zu minimieren, wird beim Meldungsaustausch ein [Long Polling](https://de.wikipedia.org/wiki/Long_Polling) verwendet.

### Berechtigungskonzept

Die UCRM API wird sowohl KT-seitig als auch für die Inter-CRM-Kommunikation verwendet.

Es wird ein einfaches Berechtigungskonzept verwendet, das folgende Rollen vorsieht:

- KT - für die Kommunikation von KT-Systemen zu UCRM
- UCRM - für Inter-CRM-Kommunikation

Die Rolle wird an die API-Implementierung mittels eines HTTP-Headers übergeben.