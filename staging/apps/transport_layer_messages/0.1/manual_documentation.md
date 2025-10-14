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
      Spezifikation UCRI2-App Transportschicht-Nachrichten (transport_layer_messages) Version 1.0
    </section>
  footerTemplate: |-
    <section>
      <div>
        Seite <span class="pageNumber"></span>
        von <span class="totalPages"></span>
      </div>
    </section>
---

# UCRI2-App Transportschicht-Nachrichten

<!-- toc -->
<!-- tocstop -->

# Überblick
Diese UCRI2-App dient der Darstellung von Transportschicht-Nachrichten.
Diese App MUSS von allen UCRI2-Clients ZWINGEND umgesetzt werden.
UCRI2-Clients dürfen Nachrichten aus dieser App NIEMALS selbst versenden. Nachrichten aus der Transportschicht-Nachrichten-App dürfen ausschliesslich von UCRMS generiert werden.
Die Nachrichten sind wie folgt:
1. Zustellungsstatusberichte (message_delivery_status) dienen der Übermittlung des Zustellungsstatus von anderen App-Nachrichten.
   Um die Entstehung von Zyklen zu vermeiden, darf ein UCRM NIEMALS eine Zustellungs-Status-Nachricht erstellen, die auf eine andere Zustellungs-Status-Nachricht verweist!
2. Teilnehmer-Verfügbarkeits-Updates (participant_availability_update) dienen der Übermittlung eines geänderten Verfügbarkeitsstatus zwischen gekoppelten UCRMS. Diese Nachrichten dürfen NIEMALS an UCRI2-Clients weitergegeben werden.  

# Partielle Umsetzung
Ein UCRI2-Client muss nur die Zustellungsstatusberichte (message_delivery_status) unterstützen.

Ein UCRI2-UCRM muss alle Nachrichten unterstützen.

# App-Nachrichten
<!-- include ../../general_schema_documentation.md -->
<!-- include message_delivery_status.schema.md -->



