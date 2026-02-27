# UCRI2-App Einsatzübergabe ohne Patientendaten

<!-- toc -->
<!-- tocstop -->

# Überblick
Anwendungsfall: Alarmübertragung an einen Alarmierungsservice für Einsatzkräfte (FW, RD, TNA, POL etc.)
Für die Alarmierung der Einsatzkräfte von Feuerwehr, Rettungsdienst, Katastrophenschutz usw. gibt es mehrere Möglichkeiten, die zum Teil in technischen Richtlinien reguliert sind und zum Teil unreguliert mit verfügbarer Technik betrieben werden. Im Gegensatz zu regulierten Verfahren, wie 5-Ton, POCSAG und TETRA, ist die Alarmierung über eine Anwendung (App) auf einem Smartphone momentan nicht reguliert. Dafür gibt es eine Vielzahl von Anbietern solcher Anwendungen auf dem Markt. Dabei kommen sowohl dienstliche als auch private Smartphones (“Bring your own device - BYOD”) zum Einsatz. Im Anwendungsfall geht es darum, über die L2MD-Schnittstelle mittels generischer Nachrichten vom Einsatzleitsystem aus die Alarmauslösung an beliebigen - die Schnittstelle unterstützenden - Alarm-Services zu initiieren und eine technische Quittung (“Alarm wird ausgelöst”), sowie - wenn vorhanden - auch eine quantifizierte Quittung (“Alarm hat x Endgeräte erreicht“) und ein qualifizierte Quittung (“Anzahl Komme / Komme nicht“) zu erhalten.
Der Anwendungsfall ist abgestimmt mit der PMeV-Handreichung APP-Alarmierung.

# Aktoren
* Anwender LS
* Einsatzleitsystem 
* Alarmierungsservice
* Mobiles Gerät
* Anwender MD

# Nutzen
Der Anwender des Einsatzleitsystems möchte eine Alarmierung, die im Rahmen der Bearbeitung eines eingehenden Notrufs erstellt wurde, über einen oder mehrere an die Leitstelle angebundene Alarmierungsservices aktivieren.
Ergebnis der erfolgreichen Ausführung des Anwendungsfalls ist, dass die Alarmierung durchgeführt und das Ergebnis dem Anwender dargestellt werden kann.

# Auslöser

Der Anwender des Einsatzleitsystem startet die Alarmierung.

# Vorbedingungen

Der Anwender LS hat im Einsatzleitsystem die zur Alarmauslösung erforderlichen Parameter hinterlegt, beispielsweise Einsatzstichwörter und Zuständigkeiten. Weiterhin sind für die Zuständigkeiten die Zugänge zum jeweils zugehörigen Alarmierungsservice hinterlegt.

# Ergebnis

Ein oder mehrere Alarmierungsservices wurden aktiviert, haben alarmiert und die Resultate der Alarmierung zurückgemeldet.

# Ablauf

![Alt Text](Abbildung Ablauf Einsatzkräfte alarmieren)
<img src="UCRI_L2MD_UC_EinsatzkräfteAlarmieren.drawio.svg">
Abbildung Ablauf Einsatzkräfte alarmieren

# Erfolg

Die Einsatzkräfte sind alarmiert und das Resultat der Alarmierung ist am Einsatzleitsystem zur Darstellung und weiteren Verarbeitung verfügbar.

# Misserfolg

Timeout: Ein oder mehrere Alarmierungsservices antworten nicht.
Fehlermeldung: Ein oder mehrere Alarmierungsservices melden über die Schnittstelle einen Fehler.

# Erläuterungen

- keine -

<!-- include ../../general_incident_app_notes.md -->

# App-Nachrichten
<!-- include ../../general_schema_documentation.md -->
TODO HIER MÜSSEN NOCH DIE mobile_device_xyz-Nachrichten eingefügt werden
<!-- include acknowledgement.schema.md -->
<!-- include completion.schema.md -->

