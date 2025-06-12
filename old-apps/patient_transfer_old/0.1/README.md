# Patiententransfer
## Use Case

Der Anwendungsfall Patientendatentransfer ist der Sonderfall der Einsatzübergabe zwischen einer 112-Leitstelle und einer 116117-Leitstelle. Da die Datenanforderungen in beiden Organisationssarten sehr unterschiedlich sind, erfordern sie ein dezidiertes Mapping zwischen den 116117- und den 112-Einsatzdaten.

Wie bei der Einsatzübergabe wird auch der Patiententransfer durch die Empfänger-Leitstelle bestätigt oder abgelehnt.

Ausserhab der UCRI-Spezifikation: Neben den Datenanforderungen sind auch die Zeitbedngungen für die Einsatzübergabe gesondert zu betrachten. Bei der Einstzübergabe zwischen 112-Leitstellen gelten die entsprechenden Hilfsfristen- und Reaktionszeiten gemäß der gesetztlichen Vorgaben. Bei der  Einsatzübergabe von 112 in Richtung 116117 entfallen diese Reaktionszeiten.

## Schema-Beschreibung

1. A->B: Patient übergeben
2. B->A: Übergabe bestätigen
3. B->A: Übergabe ablehnen
