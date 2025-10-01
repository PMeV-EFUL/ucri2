# UCRI2-App Stichwort-Katalog-Abfrage

<!-- toc -->
<!-- tocstop -->

# Überblick
Der Anwendungsfall Stichwort-Katalog-Abfrage ermöglicht es, die in einem Leitsystem eingesetzten Einsatzstichworte abzurufen.
Da bundesweit kein einheitlicher Stichwortkatalog definiert ist, ist für einen
möglichst reibungslosen Einsatzdatenaustausch ein Mapping der
Stichworte essentiell.
Aus diesem Grund werden folgende Regeln definiert:
1. Die aussendende Leitstelle überträgt immer das in ihrem System
   definierte Stichwort.
2. Die empfangende Leitstelle mapped das fremde Stichwort auf ein in
   ihrem System definiertes Stichwort.


Das konkrete Mapping einzelner Stichwörter kann nicht automatisiert,
sondern nur manuell im Rahmen der Stammdatenpflege durch einen
(autorisierten) Mitarbeiter jeder beteiligten Leitstelle erfolgen.

Um das Stichwort Mapping zu optimieren, definiert diese App eine Methode zur Abfrage des gesamten Stichwortkatalogs
einer Partnerleitstelle. Hierbei muss ein Stichwort mit Kürzel und
Beschreibung (Langtext) übergeben werden.
Somit können typische Übertragungsfehler beim Austausch der
Stichwortkataloge außerhalb des Systems (z.B. eMail- oder FAX-Kommunikation) vermieden werden und für den autorisierten Mitarbeiter
innerhalb des Web-Service (UI-gestützte) Mapping-Funktionalitäten
realisiert werden.

Da Stichwortkataloge mit der Zeit geändert/aktualisiert werden, kann nicht
garantiert werden, dass zu jedem Zeitpunkt für jedes Stichwort ein
Mapping vorhanden ist. Daher sollen nicht gemappte Stichwörter
grundsätzlich an das empfangende Einsatzleitsystem durchgereicht
werden. Der Einsatz soll im empfangenden System mit dem Hinweis zur
Anzeige gebracht werden, dass das Stichwort dem System unbekannt ist,
damit der Disponent z. B. ein passendes vorhandenes Stichwort auswählt
oder die Klärung einleitet. Einsätze dürfen auf keinen Fall wegen
unbekannter Stichworte unberücksichtigt bleiben.


# Partielle Umsetzung
Ein Teilnehmer, der ausschliesslich Abfragen durchführen will, muss die Antwortnachricht (response) nicht unterstützen.

Ein Teilnehmer, der ausschliesslich Abfragen beantworten will, muss die Anfragenachricht (request) nicht unterstützen.


# App-Nachrichten
<!-- include ../../general_schema_documentation.md -->
<!-- include request.schema.md -->
<!-- include response.schema.md -->


