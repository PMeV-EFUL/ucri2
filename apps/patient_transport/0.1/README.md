# Patiententransport
## Use Case

Der Anwendungsfall für den geplanten Patiententransport wird genutzt, um Einsätze für geplante Patiententransporte an eine andere Leitstelle zu übergeben.
Es ist entweder eine Abholzeit oder eine gewünschte Ankunftszeit zu setzen. Ankunftszeiten (Arrival Time) können fix oder mit größerem Zeitfenster angefordert werden.
Nach Bestätigung der Übergabe kann mit einer zusätzlichen Meldung der tatsächliche Zieltermin des Patiententransports an die anfordernde Leitstelle gemeldet werden.

Wie bei der Einsatzübergabe wird auch der Patiententransport durch die Empfänger-Leitstelle bestätigt oder abgelehnt.

Das Datum für den Zieltermin wird ISO8601 kompatibel erwartet "2012-04-23T18:25:43.511Z".


## Schema-Beschreibung

1.  A->B: Einsatz mit Patient und Zieltermin übergeben
2.  B->A: Übergabe bestätigen
2.1 B-> A: Zieltermin übermitteln (optional)
3.  B->A: Übergabe ablehnen
