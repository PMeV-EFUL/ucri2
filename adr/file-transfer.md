# API File Transfer

**Status**: 📝 in Vorbereitung

**Autoren**: Philipp von Kirschbaum


## Kontext

Aktuell können über die Transportschicht (Version 2.0) nur JSON-Nachrichten ausgetauscht werden.
Die einzige Möglichkeit eine Datei zu übermitteln ist eine Base64 Kodierung und die Einbettung in die JSON-Nachricht (33% Vergrößerung der Datei durch Base64).

Der Austausch von Dateien wird in Zukunft immer mehr an Relevanz gewinnen.
Anwendungsfälle sind u.a.:
- Rasterdaten (z.B. Drohnenbildern, Fahndungsbilder, ...) 
- Dokumente (z.B. Einsatzpläne, Einsatzinformationen, ...)

Durch eine Implementierung in die Transportschicht haben alle Apps einen einheitlichen Mechanismus um Dateien auszutauschen.

Eventuell braucht es dann zwischen Apps und Transportschicht eine Kompatibilitätsmatrix.

## Entscheidung

Was ist die Entscheidung?

## Konsequenzen

Welche Konsequenzen folgen aus der Entscheidung?
