# UCRI 1 kompatible Einsatzübergabe (POC)
## Use case Einsatzübergabe

Bei der Einsatzübergabe entscheidet der Disponent einer Leitstelle (A), dass der Einsatz nicht in seinen Zuständigkeitsbereich fällt, sondern in den Zuständigkeitsbereich der Leitstelle (B). Die Leitstelle (B) kann sowohl aus organisatorischen Gründen - beispielsweise die Einsatzübergabe von einer Rettungsleitstelle an eine Polizeileitstelle als auch aus geografischen Gründen (Nachbarleitstelle) erfolgen. 

Die Einsatzübergabe via UCRI verfolgt das Ziel einer gesicherten Übergabe der Verantwortung/Zuständigkeit mit einer Datenübergabe ohne Medienbruch und mit minimalem Zeitverzug.

Dementsprechend wird die Übergabe durch einen Disponenten der empfangenen Leitstelle (B) bestätigt (oder abgeleht) und ist als Transaktion erst mit Empfang dieser Quittung in der Leitstelle (A) für diese abgeschlossen.

UCRI regelt nicht, wie der Einsatz in der abgebenden Leitstelle (A) behandelt wird. Technisch und fachlich kann es durchaus möglich sein, dass der Einsatz dann auch in Leitstelle (A) noch weiter bearbeitet wird. 

## Schema-Beschreibung

Die Schemata sind angelehnt an die UCRI-1 Spezifikation, um
eine Migration zu vereinfachen.

Quelle: [UCRI1](https://github.com/PMeV-EFUL/UCRI1/blob/main/UCRI-1_0_0.yaml)

Schemata (partiell) konvertiert via:

```bash
yq -p yaml -o json UCRI-1_0_0.yaml  > UCRI1.json
```

## Bisher umgsetzte Requests

- POST /incidents
- PUT /incidents/{sharedIncidentId}/acknowledgements/retrieved
- PUT /incidents/{sharedIncidentId}/acknowledgements/confirm

## Anmerkungen

Unterscheidung retreived/confirm via status:

```json
 "enum": [
    "ELSAccepted",
    "ELSRejected",
    "ControlStationAccepted",
    "ControlStationRejected"
```
