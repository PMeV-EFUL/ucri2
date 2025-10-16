## Versionierung
Die Versionierung für die Transportschicht und die UCRI2-Apps erfolgen voneinander getrennt.

Diese Spezifikation beschreibt die Version 2.0.0 der UCRI2-Transportschicht.

### Transportschicht-Versionierung
Die Transportschicht-Versionierung umfasst dieses Dokument sowie die OpenAPI-Spezifikationen für die Client- und die P2P-Schnittstellen. 

Die Versionsnummer besteht aus drei numerischen Teilen:

GEN.MAJOR.MINOR

Für die drei Versionsbestandteile gelten folgende Festlegungen:
- GEN: Für UCRI2 auf 2 festgelegt
- MAJOR: Hauptversion der Transportschicht innerhalb der UCRI2-Versionierung. Eine Änderung dieser Version erfolgt, wenn Änderungen an den Endpunktdefinitionen erfolgen, die entweder bestehende Endpunkte bezüglich obligater Felder verändern oder neue obligate Felder hinzufügen.
- MINOR: Unterversion der Transportschicht. Eine Änderung dieser Version erfolgt, wenn neue optionale Felder zu bestehenden Endpunkte hinzugefügt oder neue optionale Endpunkte hinzugefügt werden.

Somit sind Änderungen an der MINOR-Version aufwärtskompatibel, sodass Systeme mit übereinstimmenden GEN.MAJOR-Versionen untereinander kommunizieren können, auch wenn sie unterschiedliche MINOR-Versionen aufweisen.

#### Vorgabe der transport_layer_messages-App-Version
Da die transport_layer_messages-App Nachrichten beschreibt, die auf der Transportschicht erstellt und von verbundenen UCRM sowie Clients konsumiert werden, MUSS eine spezifischen Version dieser App durch alle Clients sowie UCRM, welche die Version 2.0.0 der Transportschicht implementieren, ZWINGEND unterstützt werden.

Die hierfür zu unterstützende Version der transport_layer_messages-App ist 1.0.

### App-Versionierung
Die App-Versionierung erfolgt für jede App individuell. Die Versionsnummer einer App besteht aus zwei numerischen Teilen:

MAJOR.MINOR

Für die drei Versionsbestandteile gelten folgende Festlegungen:
- MAJOR: Hauptversion der App. Eine Änderung dieser Version erfolgt, wenn neue obligate Nachrichten hinzugefügt werden oder in bestehenden Nachrichten obligate Felder hinzugefügt oder verändert werden.
- MINOR: Unterversion der App. Eine Änderung dieser Version erfolgt, wenn neue optionale Nachrichten hinzugefügt werden oder in bestehenden Nachrichten optionale Felder hinzugefügt werden.

Obwohl so Änderungen an der MINOR-Version aufwärtskompatibel sind, müssen auch MINOR-Veränderungen in den supportedApps eines Teilnehmers explizit als unterstützt gekennzeichnet werden.