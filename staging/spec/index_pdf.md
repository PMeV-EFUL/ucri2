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
<style>
body {
counter-reset: h1
}

h1 {
counter-reset: h2
}

h2 {
counter-reset: h3
}

h3 {
counter-reset: h4
}

h1:not(.header-title)::before {
counter-increment: h1;
content: counter(h1) ". "
}

h2:before {
counter-increment: h2;
content: counter(h1) "." counter(h2) ". "
}

h3:before {
counter-increment: h3;
content: counter(h1) "." counter(h2) "." counter(h3) ". "
}

h4:before {
counter-increment: h4;
content: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". "
}

ul {
counter-reset: section;
list-style-type: none;
}

ul li {
position: relative;
}

ul li::before {
counter-increment: section;
content: counters(section, ".") ". ";
}

ul ul li::before {
content: counters(section, ".") ". ";
}

ul ul {
counter-reset: section;
}
</style>

<div style="font-size:20px;">
<b> Spezifikation Universal Control Room Interface (UCRI2)<br/>Version 2.0.0 </b>
</div>

<div class="page-break"></div>

# Inhaltsverzeichnis
<!-- toc -->
<!-- tocstop -->

<div class="page-break"></div>

# Einleitung

UCRI steht für Universal Control Room Interface - ein Protokoll für die Kommunikation zwischen zwei oder
mehreren Einsatzleitsystemen.

Nach einer erfolgreichen Einführung und eingehender Approbation im Feld wurden viele Erfahrungen gesammelt und Anforderungen identifiziert, die Weiterentwicklung des UCRI Protokolls auf einer neuen architektonischen Basis erforderten. UCRI2 ist eine komplett überarbeitete Version des Protokolls, die alle Anwendungsfälle der Vorgängerversionen (die letzte UCRI Version 1.1) unterstützt und Grundlage für flexible Weiterentwicklung des Protokolls darstellt.



<!-- include goals.md -->
<!-- include architecture.md -->
<!-- include versioning.md -->
<!-- include messaging.md -->
<!-- include addressing_concept.md -->
<!-- include ucrm_api.md -->
<!-- include p2p_protocol.md -->
<!-- include applications.md -->
