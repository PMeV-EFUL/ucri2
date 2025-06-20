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

[Vermittlungsebene](messaging.md)