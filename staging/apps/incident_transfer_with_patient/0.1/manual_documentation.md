# UCRI2-App Einsatzübergabe mit Patientendaten

<!-- toc -->
<!-- tocstop -->

# Überblick
Im Gegensatz zur Einsatzübergabe ohne Personendaten ist die Einsatzübergabe mit Patientendaten explizit dafür gedacht Einsätze zwischen Systemen übertragen zu können, die explizit mit Patientendaten arbeiten und mit den dafür spezifischen Zusatzinformationen von Patienten sinnvoll umgehen können. Typische Einsatzzwecke sind Einsatzübergaben an Rettungsdienstleitstellen.

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

