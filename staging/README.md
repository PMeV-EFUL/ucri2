# Der UCRI2 Staging-Bereich

In diesem Bereich werden die Quelldaten für die Schemata für die UCRI2-Apps gespeichert.
Auch die von den Benutzern erstellten Teile der App-Dokumentation werden hier abgelegt.
Außerdem enthält dieser Bereich ein node.js-Programm, welches die Quell-Schemata verarbeitet, die finalen App-Schemata generiert sowie die Dokumentation erstellt (im Markdown- und PDF-Format).

# TODOs
- Durchgehende Nutzung von title und description Properties in allen Schemata (inkl. Building Blocks, ggf aus UCRI1 übernehmen). Bisher haben alle Building blocks zumindest schon mal einen Titel.
- Prüfen von TODOs innerhalb der BB-Schemata (hauptsächlich Punkte, wo wir entscheiden müssen, ob Zahlenwerte mit führenden Nullen als number oder string modelliert werden)
- Autogenerierte Docs haben unzureichende Unterstützung für anyOf i.V.m. required (Nutzung in Location)
- Arrays, die keine Objekte enthalten haben eine überflüssige Detail-Tabelle zu enthaltenen Eigenschaften
- Weitere Apps hinzufügen (aktuell existieren nur incident_transfer_with_patient und patient_transfer)
- PDFs schicker machen (z.B. header und footer per markdown-frontmatter, vgl. https://www.npmjs.com/package/md-to-pdf), Code hierfür im Processor STEP 5 einfügen)
- Überlegen, wie wir die Migration von UCRI1 erleichtern können (Mapping-Tabellen UCRI1->UCRI2-Properties?)

# Verzeichnisstruktur der Quelldaten
Innerhalb dieses Bereiches existieren die folgenden Ordner:

- bin: Enthält das node.js-Programm zum Verarbeiten der Daten (Processor)
- apps: Enthält die Quell-Schemata und die manuellen Anteile der Dokumentation. Für jede App existiert ein Unterordner, in diesem jeweils ein Unterordner für jede App-Version. In diesem Ordner liegen pro App-Nachricht ein JSON-Schema ([schemaName].schema.json) und die Datei manual_documentation.md, welche den manuellen Teil der Dokumentation enthält.
- apps/building_blocks: Dieser Ordner stellt KEINE UCRI2-App dar. Stattdessen enthält er die gemeinsam genutzten Basis-Schemata für die eigentlichen UCRI2-Apps.

# Verzeichnisstruktur der Zieldaten
Außerhalb dieses Bereiches (auf der Root-Ebene des Repository) befinden sich die Zielordner für den Processor:
- apps: Enthält die finalen Nachrichten-Schemata der UCRI2-Apps
- docs/apps: Enthält die generierte Dokumentation für die UCRI2-Apps (Einzelne .md-Dateien für jede Nachricht und ein Paar aus .md und .pdf-Dateien für die App selbst)

**Hinweis: Die Dateien in diesen Verzeichnissen dürfen nicht selbst bearbeitet werden, stattdessen ist der Processor (s.u.) zu nutzen!**

# Allgemeine Abläufe zum Hinzufügen oder Ändern von Schemata und/oder Apps
Die Dateien in den Ziel-Verzeichnissen

- /apps
- /docs

**DÜRFEN NIEMALS DIREKT BEARBEITET WERDEN**. Stattdessen werden die Quelldateien angepasst und der Processor (s.u.) genutzt!


## Building Blocks erweitern
Die Building-Block-Schemata in staging/apps/building_blocks können direkt geändert oder auch neue building blocks hinzugefügt werden. Beim Hinzufügen sollte ein existierender building block als Vorlage verwendet werden.
Bei den Building Blocks existieren zwei Arten von Schemata:
- *Base-Schemata: Diese dienen als Grundlage für die Ableitung von anderen Schemata (z.B. ist jeder Patient eine Person) und dürfen NICHT außerhalb der Building Blocks referenziert werden. Diese Schemata dürfen KEINE "unevaluatedProperties": false Eigenschaft haben, damit von diesen Schemata abgeleitet werden kann!
- alle anderen Schemata: Diese sind die eigentlichen Building Blocks und MÜSSEN immer "unevaluatedProperties": false enthalten, damit sichergestellt ist, dass keine weiteren Eigenschaften, die nicht im Schema definiert sind, hinzugefügt werden können.

Falls in Zukunft von einem Building-Block-Schema ein anderes Building-Block-Schema abgeleitet werden soll, ist zu prüfen, ob für dieses bereits ein *Base-Schema existiert. Falls dem noch nicht so ist, muss zuerst das *Base-Schema erstellt und das bestehende Schema von diesem per $ref abgeleitet werden (vgl. Person und PersonBase).
Hierbei ist auch zu beachten, dass das abgeleitete Schema unbedingt eine examples-Eigenschaft besitzen sollte (diese kann aus dem *Base-Schema kopiert werden).
Danach kann dann von dem neuen *Base-Schema ein neuer abgeleiteter Building Block erstellt werden (bei dem dann wiederum "unevaluatedProperties": false gesetzt werden muss!)

**Nach einer Änderung muss der Processor (s.u.) ausgeführt werden, um die Änderung zu prüfen und die app-Schemata sowie die Dokumentation mit den Änderungen zu aktualisieren.**

## Eine App anpassen
Die App-Schemata unter staging/apps/APPNAME können direkt geändert oder auch neue Nachrichten-Schemata hinzugefügt werden.
Falls der nicht aus den Schemata generierte erste Teil der Dokumentation angepasst werden soll, ist die staging/apps/APPNAME/VERSION/documentation_manual.md anzupassen.

** Nach einer Änderung muss der Processor (s.u.) ausgeführt werden, um die Änderung zu prüfen und die app-Schemata sowie die Dokumentation mit den Änderungen zu aktualisieren.**

## Eine App hinzufügen
Beim Hinzufügen sollte eine neues Verzeichnis unter staging/apps erstellt werden. Es sollte eine existierende app als Vorlage verwendet werden.

# Regelungen für die JSON-Schemata
Die JSON-Schemata müssen folgenden Bedingungen genügen:
- jedes Schema muss gegen die Metaschema-Version https://json-schema.org/draft/2020-12/schema implementiert sein
- jedes Schema muss eine id besitzen, die den direkten Abruf aus dem Repository ermöglicht, z.B. https://github.com/PMeV-EFUL/ucri2/raw/refs/heads/main/apps/incident_transfer_with_patient/0.1/acknowledgement.schema.json . Hierbei ist der Pfad zum jeweiligen Zieldaten-Verzeichnis zu nutzen! Da Referenzen auf die building-Blocks durch den Processor abgeändert werden, tauchen deren $ids in den finalen Schemata zwar nicht mehr auf, sollten aber dennoch der Konsistenz halber analog aufgebaut sein (obwohl für die building blocks keine finalen Versionen unter /apps existieren)
- jedes Schema (und auch jedes Subschema) muss einen 
- jedes Schema muss mindestens ein example enthalten
- jedes Schema muss per "unevaluatedProperties": false festlegen, dass keine zusätzlichen Properties erlaubt sind. Ausgenommen sind Schemata, welche als Elternschema für andere Schemata dienen sollen (vgl. PersonBase und Person in den building-blocks).
- die Schemata sollten möglichst einfach gehalten sein, um Probleme mit nachgelagerten Libraries zu vermeiden, die diese nutzen (siehe auch die Hinweise zum Processor, dieser passt die Schemata dieshingehend teilweise automatisch an).

# Nutzung des Processors
Der processor benötigt node.js zum Ausführen. Vor der ersten Nutzung müssen per "npm install" die Abhängigkeiten heruntergeladen werden.

Dann kann der Processor mit "npm start" gestartet werden. Falls zum Abschluss des Durchlaufs "processing finished sucessfully." ausgegeben wird, war die Verarbeitung erfolgreich. Ansonsten sind die Konsolenausgaben auf Fehler zu prüfen.

Hinweis: Das Fehlerhandling des Processors in Version 1.0 ist aktuell noch nicht vollständig!

Der Processor muss ausgeführt werden, wenn Änderungen an den Quelldaten (oder dem Processor selbst) durchgeführt wurden.

# Verhalten des Processors
Der Processor durchläuft für jede UCRI2-App (und auch die Building Blocks) in jeder vorliegenden Version die folgenden Schritte:
1. Laden und der Quell-Schemata: Hierbei werden die Quell-Schemata geladen und gegen die Hyperjump-Library validiert.
2. Validieren der enthaltenen Examples: Die enhaltenen Examples werden gegen die Schemata validiert, um sicherzustellen, dass diese korrekt sind.
3. Bundling und Post-Processing der Schemata zur Erstellung der finalen Schemata in /apps (nicht für Building-Blocks): Pro Nachricht werden Die Schemata eine Datei gebundelt (mit der hyperjump-Library). Nach dem Bundling werden die Folgenden zusätzlichen Schritte durchlaufen: 
- die lokalen Referenzen (auf die Building-Blocks-Schemata) werden so umgestellt, dass diese nicht auf die Schema-ID (eine URL) verweisen, sondern nach dem Schema "#/$defs/SchemaName" aufgebaut sind. So können Probleme bei der späteren Verarbeitung (u.a. der Dokumentations-Generierung) vermieden werden, da manche Implementierungen fehlerhafter
Weise davon ausgehen, dass $refs, die auf eine URL verweisen, externe Referenzen darstellen.
- Falls die referenzierten Schemata ihrerseits auf der Hauptebene $refs aufweisen, werden die referenzierten Schemata direkt in das referenzierende Schema übernommen. Dieser Ansatz wird z.B. bei dem Patient-Schema verwendet, um es vom Person-Schema abzuleiten. 

**Hinweis**: Aktuell ist im Processor nur eine einstufige Ersetzung implementiert, ergo werden auch nur einstufige Ableitungen unterstützt! 
4. Generierung der Schema-Dokumentation pro Nachricht (nicht für Building-Blocks): Aus den finalen Schemata werden mit der json-schema-static-docs-Library (die in einer angepassten Version direkt im Repository liegt) .md-Dateien für jede Nachricht erzeugt.
5. Generierung der finalen Schema-Dokumentation (nicht für Building-Blocks): Aus den einzelnen Dokumentationsbestandteilen wird eine finale .md-Datei pro App erstellt und diese wiederum in PDF konvertiert. Beide Dateien werden in /docs/apps/APPNAME/APPVERSION geschrieben. Die Folgenden Bestandteile werden zusammengefügt:
- Der Inhalt der manual_documentation.md (diese sollte einen Überblick über die App und die beteiligten Nachrichten enthalten, außerdem MUSS "<!-- toc --><!-- tocstop -->" enhalten sein, damit das Inhaltsverzeichnis generiert wird)
- Eine Zeile als Einleitung der autogenerierten Nachrichten-Dokumentationen (aktuell "# App-Nachrichten")
- Der Inhalt der einzelnen Nachrichten-Dokumentationen
Außerdem wird ein Inhaltsverzeichnis erzeugt (mittels der markdown-toc library)