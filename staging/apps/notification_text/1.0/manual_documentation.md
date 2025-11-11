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
      Spezifikation UCRI2-App Einsatzbezogene Textnachricht (notification_text) Version 1.0
    </section>
  footerTemplate: |-
    <section>
      <div>
        Seite <span class="pageNumber"></span>
        von <span class="totalPages"></span>
      </div>
    </section>
---

# UCRI2-App Einsatzbezogene Textnachricht

<!-- toc -->
<!-- tocstop -->

# Überblick
Diese UCRI2-App ermöglicht es, parallel zu anderen einsatzbezogenen Apps einen dynamischen Austausch von Textnachrichten zu unterstützen. Einzige Voraussetzung hierbei ist, dass für einen Einsatz bereits eine Übergabenachricht mit einer sharedIncidentId übermittelt wurde und diese sharedIncidentId dann in der Nachricht genutzt wird.
Nachrichten, die bereits existierende App-Nachrichten nachbilden (z.b. Einsatzannahme/-Ablehnung oder Einsatzendnachrichten) sind **nicht** als einsatzbezogene Textnachrichten zu übermitteln.
Die Nachrichten enthalten neben der sharedIncidentId eine Nachrichtenkategorie (Betreff), einen Nachrichtentext, einen Zeitstempel, sowie ein silent-Attribut, das angibt, ob die Nachricht in der empfangenden Leitstelle zwingend einem Disponenten vorzulegen ist.

# Ablaufbeschreibung

1. A->B: Einsatzbezogene Textnachricht übermitteln

<!-- include ../../general_incident_app_notes.md -->

# Partielle Umsetzung
Für diese App ist keine partielle Umsetzung möglich. Teilnehmer, die Nachrichten versenden wollen, müssen auch den Empfang von Nachrichten unterstützten.

# App-Nachrichten
<!-- include ../../general_schema_documentation.md -->
<!-- include notification.schema.md -->
