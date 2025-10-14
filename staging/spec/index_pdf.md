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
      Spezifikation UCRI2 Version 2.0.0
    </section>
  footerTemplate: |-
    <section>
      <div>
        Seite <span class="pageNumber"></span>
        von <span class="totalPages"></span>
      </div>
    </section>
---

# Universal Control Room Interface Version 2 (UCRI2)

UCRI steht für Universal Control Room Interface - ein Protokoll für die Kommunikation zwischen zwei oder
mehreren Einsatzleitsystemen.

Nach einer erfolgreichen Einführung und eingehender Approbation im Feld wurden viele Erfahrungen gesammelt und Anforderungen identifiziert, die Weiterentwicklung des UCRI Protokolls auf einer neuen architektonischen Basis erforderten. UCRI2 ist eine komplett überarbeitete Version des Protokolls, die alle Anwendungsfälle der Vorgängerversionen (die letzte UCRI Version 1.1) unterstützt und Grundlage für flexible Weiterentwicklung des Protokolls darstellt.

<!-- toc -->
<!-- tocstop -->

<!-- include goals.md -->
<!-- include architecture.md -->
<!-- include messaging.md -->
<!-- include addressing_concept.md -->
<!-- include ucrm_api.md -->
<!-- include p2p_protocol.md -->
<!-- include applications.md -->
