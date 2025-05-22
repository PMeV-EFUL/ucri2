# UCRI2-App Patiententransport-Anforderung

<!-- toc -->
<!-- tocstop -->

# Überblick
Der Anwendungsfall für den geplanten Patiententransport wird genutzt, um Einsätze für geplante Patiententransporte an eine andere Leitstelle bzw. Organisation zu übergeben. Die Pickup Location stellt in diesem Use Case dabei den Ort dar, an dem der Patient abgeholt werden soll (zB Krankenhaus oder Wohnadresse des Patienten). Die Destination Location ist der Zielort des Transports.

Es ist entweder eine Abholzeit oder eine gewünschte Ankunftszeit zu setzen. Sind die Zeiten flexibel zu sehen, so soll dies textuell unter "AdditionalInfo" beschrieben werden und zusätzlich das Attribut isTimeFixed auf true gesetzt werden.

Nach technischer Bestätigung der Übergabe kann mit einer zusätzlichen Meldung (Acknowledgement) der tatsächliche Zieltermin des Patiententransports an die anfordernde Leitstelle gemeldet werden.
Wird die Transportanforderung abgelehnt, so kann ein Alternativ-Vorschlag (alternativeProposal) unterbreitet werden. In einem solchen Fall wäre ein erneuter Request (neue Übergabe des Einsatzes) vom anfordernden System zu erstellen.

## Schema-Beschreibung
1.  A->B: Einsatz mit Patient und Zieltermin übergeben
2.  B->A: Übergabe bestätigen oder ablehnen

# App-Nachrichten
<!-- include ../../general_schema_documentation.md -->
<!-- include incident.schema.md -->
<!-- include acknowledgement.schema.md -->
