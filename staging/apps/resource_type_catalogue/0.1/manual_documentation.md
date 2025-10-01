# UCRI2-App Einsatzmitteltyp-Katalog-Abfrage

<!-- toc -->
<!-- tocstop -->

# Überblick
Der Anwendungsfall Einsatzmitteltyp-Katalog-Abfrage ermöglicht es, die in einem Leitsystem eingesetzten Einsatzmitteltypen abzurufen.
Ebenso wie bei den Stichworten, sind Einsatzmitteltypen nicht einheitlich
definiert. Aus diesem Grund besteht auch hier die Anforderung für ein
Mapping.
Grundsätzlich werden folgende Regeln definiert:
1. Die aussendende Leitstelle überträgt immer den in ihrem System
   definierten Einsatzmitteltyp.
2. Die empfangende Leitstelle mapped den fremden Einsatzmitteltyp
   auf einen in ihrem System definierten Einsatzmitteltyp.
   
Das konkrete Mapping einzelner Einsatzmitteltypen kann nicht
automatisiert, sondern nur manuell im Rahmen der Stammdatenpflege
durch einen autorisierten Mitarbeiter jeder beteiligten Leitstelle erfolgen.
Um das Einsatzmitteltyp Mapping zu optimieren, definiert diese App eine Methode zur Abfrage aller definierten
Einsatzmitteltypen einer Partnerleitstelle. Hierbei muss ein
Einsatzmitteltyp mit Kürzel und Beschreibung (Langtext) übergeben
werden. Somit können typische
Übertragungsfehler beim Austausch der Einsatzmitteltypen außerhalb des
Systems (z.B. eMail- oder FAX-Kommunikation) vermieden werden und für
den autorisierten Mitarbeiter innerhalb des Web-Service (UI-gestützte)
Mapping-Funktionalitäten realisiert werden.
Auch wenn Einsatzmitteltypen mit der Zeit nicht so häufig wie Stichworte
geändert werden, kann nicht garantiert werden, dass zu jedem Zeitpunkt
für jeden Einsatzmitteltyp ein Mapping vorhanden ist. Daher sollen nicht
gemappte Einsatzmitteltypen grundsätzlich an das empfangende
Einsatzleitsystem durchgereicht werden. Der Einsatz soll im empfangenden
System mit dem Hinweis zur Anzeige gebracht werden, dass ein
unbekannter Einsatzmitteltyp angefordert wird, damit der Disponent nach
Klärung den richtigen Einsatzmitteltyp zuordnen kann. Einsätze dürfen auf
keinen Fall wegen unbekanntem Einsatzmitteltyp unberücksichtigt bleiben.

# Partielle Umsetzung
Ein Teilnehmer, der ausschliesslich Abfragen durchführen will, muss die Antwortnachricht (response) nicht unterstützen.

Ein Teilnehmer, der ausschliesslich Abfragen beantworten will, muss die Anfragenachricht (request) nicht unterstützen.


# App-Nachrichten
<!-- include ../../general_schema_documentation.md -->
<!-- include request.schema.md -->
<!-- include response.schema.md -->


