# Der UCRI2 Staging-Bereich

In diesem Bereich werden die Quelldaten für die Schemata für die UCRI2-Apps gespeichert.
Auch die von den Benutzern erstellten Teile der App-Dokumentation werden hier abgelegt.
Außerdem enthält dieser Bereich ein node.js-Programm, welches die Quell-Schemata verarbeitet, die finalen App-Schemata generiert sowie die Dokumentation erstellt (im Markdown- und PDF-Format).

# TODOs
- Übersetzen der automatisch generierten Schema-Dokumentation (englische Begriffe eindeutschen, vgl. templates/schema.hbs und lib/renderer/*.js in /staging/bin/json-schema-static-docs-master). 
- Durchgehende Nutzung von title und description Properties in allen Schemata (inkl. Building Blocks, ggf aus UCRI1 übernehmen).
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