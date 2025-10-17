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
      Spezifikation UCRI2-App Patientenübergabe - Übergabe 112 <-> 116117 (patient_transfer) Version 1.0
    </section>
  footerTemplate: |-
    <section>
      <div>
        Seite <span class="pageNumber"></span>
        von <span class="totalPages"></span>
      </div>
    </section>
---

# UCRI2-App Patientenübergabe - Übergabe 112 <-> 116117

<!-- toc -->
<!-- tocstop -->
# Überblick
Der Anwendungsfall Patientendatentransfer ist der Sonderfall der Einsatzübergabe zwischen einer 112-Leitstelle und einer 116117-Leitstelle. Hierbei ist die Richtung der Einsatzübergabe entscheidend - eine Übergabe von 116117 an 112 (Notfall-Eskalation) gleicht der regulären Einsatzübergabe und wird daher über den Use Case Einsatzübergabe (mit Patientendaten) abgebildet. Nur die Richtung von der 112 an die 116117 (Deeskalation eines nicht-Notfalls) besitzt spezifische Eigenschaften, die einen dedizierten Use case hierfür notwendig machen. Zusätzlich ist dieser Use Case für die Übergabe zwischen 116-117-Leitstellen anwendbar:

- Die Adressinformationen beschreiben keinen Einsatzort, sondern die Adresse des Patienten als Stammdateninformation

Wie bei der Einsatzübergabe wird auch der Patiententransfer durch die Empfänger-Leitstelle bestätigt oder abgelehnt.

Hinweis außerhalb der UCRI-Spezifikation: Neben den Datenanforderungen sind auch die Zeitrandbedingungen für die Einsatzübergabe gesondert zu betrachten. Bei der Einsatzübergabe zwischen 112-Leitstellen gelten die entsprechenden Hilfsfristen- und Reaktionszeiten gemäß der gesetzlichen Vorgaben. Bei der Einsatzübergabe von 112 in Richtung 116117 entfallen diese Reaktionszeiten.

<!-- include ../../general_incident_app_notes.md -->

Diese App sieht zwei Rollen vor, die der abgebenden Stelle (A) und der annehmenden Stelle (B).

# Ablaufbeschreibung

1. A->B: Einsatz übergeben
2. B->A: Einsatz annehmen oder ablehnen
3. B->A: (optional) Einsatzendemeldung (einsatzbezogene Textnachricht) senden (falls Einsatz angenommen wurde)

# Partielle Umsetzung
<!-- include ../../general_incident_partial_implementation_notes.md -->

# App-Nachrichten
<!-- include ../../general_schema_documentation.md -->
<!-- include incident.schema.md -->
<!-- include acknowledgement.schema.md -->
<!-- include completion.schema.md -->


