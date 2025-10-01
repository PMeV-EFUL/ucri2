# UCRI2-App Einsatzübergabe ohne Patientendaten

<!-- toc -->
<!-- tocstop -->

# Überblick
Bei der Einsatzübergabe entscheidet der Disponent einer Leitstelle (A), dass der Einsatz nicht in seinen Zuständigkeitsbereich fällt, sondern in den Zuständigkeitsbereich der Leitstelle (B). Die Leitstelle (B) kann sowohl aus organisatorischen Gründen - beispielsweise die Einsatzübergabe von einer Rettungsleitstelle an eine Polizeileitstelle als auch aus geografischen Gründen (Nachbarleitstelle) erfolgen. Dieser Use Case beschränkt sich bewusst auf die Kernelemente eines Einsatzes ohne jegliche strukturierte Datenobjekte für beteiligte Personen um mit den hier übermittelten Einsatzbasisdaten eine möglichst große Interoperabilität der am Markt befindlichen Systeme zu erreichen.
Die Einsatzübergabe via UCRI verfolgt das Ziel einer gesicherten Übergabe der Verantwortung/Zuständigkeit mit einer Datenübergabe ohne Medienbruch und mit minimalem Zeitverzug.
Dementsprechend wird die Übergabe durch einen Disponenten der empfangenen Leitstelle (B) bestätigt (oder abgelehnt) und ist als Transaktion erst mit Empfang dieser Quittung in der Leitstelle (A) für diese abgeschlossen.
UCRI regelt nicht, wie der Einsatz in der abgebenden Leitstelle (A) behandelt wird. Technisch und fachlich kann es durchaus möglich sein, dass der Einsatz dann auch in Leitstelle (A) noch für Nachdokumentationen offen bleibt.

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

