# UCRI 2 Apps Building Blocks
Die Building Blocks dienen als wiederverwendbare Grundlage für die App-Schemata.

## Basis-Building-Blocks
Die Building Blocks, deren Name auf "Base" endet, stellen "Basisklassen" dar, von denen weitere Blocks abgeleitet werden können. Diese Unterscheidung ist wichtig, da alle anderen Building-Blocks
per "unevalatedProperties":false so konfiguriert sind, dass keinerlei neuen Eigenschaften hinzugefügt werden können und dürfen.

# Liste der Basis-Building-Blocks

## incidentBase
Die Basis eines Einsatzobjekts mit Eigenschaften, die in jedem Einsatz vorkommen müssen.

## incidentExtendedBase (abgeleitet von incidentBase)
Die Basis eines erweiterten Einsatzobjekts mit Eigenschaften, die in allen erweiterten Einsätzen vorkommen.

## acknowledgementBase
Basis einer einsatzbezogenen Bestätigungsnachricht - kann als Basis für Bestätigungen dienen

## catalogueMessageBase
Basis einer Katalog-App-Nachricht - kommen für resource_type_catalogue und classification_catalogue-Apps zum Einsatz

## incidentCompletionBase
Basis einer Einsatzendenachricht

## patientBase (abgeleitet von personBase)
Basis eines Patienten. Dieser übernimmt alle Eigenschaften von einer Person. Obligat ist nur der Nachname

## personBase
Basis einer Person.

# Liste der Building Blocks

## address
Eine postalische Adresse. Obligat ist nur der Strassenname, weitere Angaben sollten aber möglichst gemacht werden, um die Adresse eindeutig zu machen.

## coordinate
Eine WGS84-Koordinate. Obligat sind sowohl Breiten- als auch Längengrad.

## eCallData
eCall-Daten gemäß der eCall-Spezifikation.

## healthInsuranceInformation
Informationen zum Versicherungsverhältnis. 

## initialAssessment
Eine Ersteinschätzung eines Patienten. Mindestens eine Eigenschaft (rmi, rmc, pzc oder additionalInformation) muss vorhanden sein.

## location
Ein Einsatz-Zielort. Mindestens eine Koordinate oder Adresse müssen vorhanden sein.

## missionObject
Ein Einsatz-Zielobjekt.

## notification
Eine textbasierte, einsatzbezogene Benachrichtigung, die protokolliert werden sollte.

## patient (abgeleitet von patientBase <- personBase)
in Patient. Dieser übernimmt alle Eigenschaften von einer Person und besitzt zusätzliche Eigenschaften. Obligat ist nur der Nachname.

## person (abgeleitet von personBase)
Eine Person.

## personPoliceRelevant (abgeleitet von personBase)
Eine polizeilich relevante Person.

