---
pdf_options:
  format: a4
  margin: 30mm 20mm
  printBackground: true
  headerTemplate: |-
    <style>
      section {
        margin: 0 auto;
        font-family: system-ui;
        font-size: 11px;
      }
    </style>
    <section>
      Spezifikation UCRI2-App Einsatzübergabe mit Patientendaten (incident_transfer_with_patient) Version 1.0
    </section>
  footerTemplate: |-
    <section>
      <div>
        Seite <span class="pageNumber"></span>
        von <span class="totalPages"></span>
      </div>
    </section>
---

# UCRI2-App Einsatzübergabe mit Patientendaten

<!-- toc -->
<!-- tocstop -->

# Überblick
Im Gegensatz zur Einsatzübergabe ohne Personendaten ist die Einsatzübergabe mit Patientendaten explizit dafür gedacht Einsätze zwischen Systemen übertragen zu können, die explizit mit Patientendaten arbeiten und mit den dafür spezifischen Zusatzinformationen von Patienten sinnvoll umgehen können. Typische Einsatzzwecke sind Einsatzübergaben an Rettungsdienstleitstellen.

<!-- include ../../general_incident_app_notes.md -->

Diese App sieht zwei Rollen vor, die der abgebenden Stelle (A) und der annehmenden Stelle (B).

# Ablaufbeschreibung

1. A->B: Einsatz übergeben
2. B->A: Einsatz annehmen oder ablehnen
3. B->A: (optional) Einsatzendemeldung senden (falls Einsatz angenommen wurde)

# Partielle Umsetzung
<!-- include ../../general_incident_partial_implementation_notes.md -->

# App-Nachrichten
<!-- include ../../general_schema_documentation.md -->
<!-- include incident.schema.md -->
<!-- include acknowledgement.schema.md -->
<!-- include completion.schema.md -->

