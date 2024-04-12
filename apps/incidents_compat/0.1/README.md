# UCRI 1 kompatible Einsatzübergabe (POC)

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
