## Versionierung
Die Versionierung für die Vermittlungsebene (UCRI2-Transportschicht) und die UCRI2-Apps erfolgen voneinander getrennt.

Diese Spezifikation beschreibt die Version 2.0.0 der UCRI2-Transportschicht.

### Transportschicht-Versionierung
Die Transportschichtspezifikation umfasst dieses Dokument sowie die OpenAPI-Spezifikationen für die Client- und die P2P-Schnittstellen.

Die Versionsnummer für die Transportschichtspezifikation besteht aus drei numerischen Teilen:

`GEN.MAJOR.MINOR`

Für die drei Versionsbestandteile gelten folgende Festlegungen:
- `GEN`: Für UCRI2 auf 2 festgelegt
- `MAJOR`: Hauptversion der Transportschicht innerhalb der UCRI2-Versionierung. Eine Änderung dieser Version erfolgt, wenn Änderungen an den API-Endpunktdefinitionen erfolgen, die entweder bestehende Endpunkte bezüglich obligater Felder verändern oder neue obligate Felder hinzufügen.
- `MINOR`: Unterversion der Transportschicht. Eine Änderung dieser Version erfolgt, wenn neue optionale Felder zu bestehenden Endpunkte hinzugefügt oder neue optionale Endpunkte hinzugefügt werden.

Somit sind Änderungen an der `MINOR`-Version stets kompatibel, sodass Systeme mit übereinstimmenden `GEN.MAJOR`-Versionen untereinander kommunizieren können, auch wenn sie unterschiedliche `MINOR`-Versionen aufweisen.

**Transportschicht-Meldungen**

Die Transportschicht verwendet eine UCRI2-App "Transportschicht-Meldungen" (`transport_layer_messages`). Diese App beschreibt Nachrichten, die auf der Transportschicht erstellt und von verbundenen UCRM sowie Clients konsumiert werden.
Somit MUSS eine spezifische Version dieser App durch alle Clients sowie UCRM, welche die Version 2.0.0 der Transportschicht implementieren, ZWINGEND unterstützt werden.

Die hierfür zu unterstützende Version der Transportschicht-Meldungen-App ist 1.0.

### App-Versionierung
Die App-Versionierung erfolgt für jede App individuell. Die Versionsnummer einer App besteht aus zwei numerischen Teilen:

`MAJOR.MINOR`

Für die zwei Versionsbestandteile gelten folgende Festlegungen:
- `MAJOR`: Hauptversion der App. Eine Änderung dieser Version erfolgt, wenn neue obligate Nachrichten hinzugefügt werden oder in bestehenden Nachrichten obligate Felder hinzugefügt oder verändert werden.
- `MINOR`: Unterversion der App. Eine Änderung dieser Version erfolgt, wenn neue optionale Nachrichten hinzugefügt werden oder in bestehenden Nachrichten optionale Felder hinzugefügt werden.

Das UCRI2-Protokoll beinhaltet ein KT-Register (siehe [KT-Register](./p2p_protocol.md#kt-register)), in dem App-Versionen, die ein Kommunikationsteilnehmer unterstützt, publiziert werden. Obwohl die Änderungen an der `MINOR`-Version stets kompatibel sind, müssen auch `MINOR`-Varianten unter unterstützten Apps eines Teilnehmers explizit als angegeben werden.
