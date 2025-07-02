# UCRI2-App Einsatzübergabe polizeilicher Einsatz

<!-- toc -->
<!-- tocstop -->

# Überblick
Die Einsatzübergabe von polizeilichen Einsätzen wurde explizit als eigener Use Case mit aufgenommen, da bei der Bearbeitung von polizeilichen Einsätzen in der Regel beteiligte Personen mit den Rollen “Beschuldigter” und “Geschädigter” eine wichtige Rolle spielen. Systeme die diesen Use Case untertützen müssen daher auch explizit und strukturiert mit diesen Personendaten umgehen können. Beispiele für die Nutzung dieses Use Cases sind die Weitergabe von Einsätzen zwischen Polizeileitstellen, aber auch die Weitergabe von Einsatzinformationen an polizeiliche Vorgangsbearbeitungssysteme.

# Ablaufbeschreibung

1. A->B: Einsatz übergeben
2. B->A: Einsatz annehmen oder ablehnen
3. B->A: (optional) Einsatzendemeldung senden (falls Einsatz angenommen wurde)

<!-- include ../../general_incident_app_notes.md -->

# App-Nachrichten
<!-- include ../../general_schema_documentation.md -->
<!-- include incident.schema.md -->
<!-- include acknowledgement.schema.md -->
<!-- include completion.schema.md -->