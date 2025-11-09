# Systemintegration

Die UCRI2-Spezifikation bietet einen Standardrahmen für die Integration von Leitstellen-SW unterschiedlicher Hersteller.
Sie hilft damit, Kompatibilitätsprobleme zu überwinden und dadurch die Interoperabilität in komplexen IT-Landschaften sicherzustellen.
Gleichzeitig bleibt die Vermittlungsebene offen für nahtlose Integration von bestehenden Systemlösungen in neue Kommunikationssysteme.
Das ermöglicht, bereits vorhandene Infrastrukturen weiterzuverwenden und so Entwicklungskosten und -zeiten zu reduzieren. 
Dadurch wird eine nachhaltige und effiziente Systemlandschaft geschaffen, die sowohl Innovation als auch Kontinuität gewährleistet.

In diesem Kapitel werden Integrationsmuster und dazugehörige Integrationsszenarien dargestellt.

## Integrationsmuster

Das zentrale Element der UCRI2-Spezifikation ist UCRM - eine Systemkomponente, die durch folgende Schnittstellen beschrieben wird:
- Die **Client-API** wird vom **UCRM** angeboten und von **Clients** (Kommunikationsteilnehmern) konsumiert.
- Die **P2P-API** wird von **UCRMs** angeboten, welche eine Verbindung mit anderen **UCRMs** auf Basis einer Peer-to-Peer-Topologie herstellen wollen.

Je nach Systemlandschaft brauchen Systemintegratoren spezialisierte UCRM-Module, die unterschiedliche Integrationsszenarien unterstützen:

![UCRI2-Integrationsmuster](ucrm-patterns.drawio.svg)

**UCRI2-UCRM**

Das klassische UCRI2-UCRM-Modul ist eine universelle Komponente, die als Vermittler in einem Standard-UCRI2-Verbund eingesetzt wird. Das Modul verbindet eine oder mehrere über UCRI2 Client-API angebundenen Leitstellen mit anderen Leitstellen, die über ein fremdes UCRI2-UCRM-Modul angebunden sind. Zwischen UCRMs wird das UCRI2 P2P-Protokoll verwendet, um die Nachrichten zu übermitteln und abdere UCRI2-spezifiachen Daten auszutauschen.

**UCRI2-Adapter**

Der UCRI2-Adapter dient dazu, ein bestehendes Leitstellenkommunikationssystem in ein UCRI2-Verbund zu integrieren. Das Modul stellt dabei eine Schnittstelle bereit, die das bestehende System erwartet. Der UCRI2-Adapter fungiert dabei als Vermittler, der ein Fremdkommunikationsprotokoll inklusive Mapping zwischen Adressierungsschemata in das UCRI2 P2P-Protokoll übersetzt.

**UCRI2-Connector**

Der UCRI2-Connector verbindet eine über UCRI2 Client-API angebundene Leitstelle mit einem fremden Nachrichtenvermittlungssystem. Der UCRI2-Connector kapselt dabei spezifische fremde Protokolle, Datenflüsse und Kommunikationsmechanismen inklusive Mapping zwischen Adressierungsschemata, um Integrtion über ein bestehendes fremdes Vermittlungssystem zu ermöglichen.

**UCRI2-Hub**

Der UCRI2-Hub dient als eine zentrale Komponente, die als Vermittler zwischen mehreren über UCRI2 Client-API angebundenen Leitstellen fungiert. Alle Nachrichten fließen über diesen zentralen Punkt, wodurch die Kommunikation zwischen den Teilnehmern entkoppelt wird. Der UCRI2-Hub unterstützt keine Protokolle der Vermittlungsebene und kann somit nicht mit anderen UCRMs verbunden werden. 

## Integrationsszenarien

Im Folgenden werden unterschiedliche Integrationsszenarien unter Verwendung von spezialisierten UCRM-Modulen vorgestellt.

**Ein UCRI2-Hub als Vermittler**

Im einfachsten Fall werden Leitstellen über einen zentralen UCRI2-Hub verbunden. Die ELS-Software wird über UCRI2 Client-API an dieses Modul angebunden. Somit können entkoppelte ELS miteinander kommunizieren. Der UCRI2-Hub unterstützt keine Protokolle der Vermittlungsebene und kann somit nicht mit anderen UCRMs verbunden werden. 

![Ein UCRI2-Hub als Vermittler](ucri-hub.drawio.svg)

**Der Standard-UCRI2-Verbund**

In einem Standard-UCRI2-Verbund werden Leitstellen über klassische UCRI2-UCRM-Module verbunden. Typischerweise wird in der Infrastruktur einer Leitstelle ein UCRI2-UCRM-Modul etabliert. Die ELS-Software wird über UCRI2 Client-API an dieses Modul angebunden. Die UCRI2-UCRM-Module unterschiedlicher Kommunikationsteilnehmer werden über UCRI2 P2P-API miteinander verbunden. 

![Standard-UCRI2-Verbund](ucri-standard-group.drawio.svg)

**Anbindung an Verbund mit PVI**

In diesem Szenario wird ein bestehendes Leitstellenkommunikationssystem in ein UCRI2-Verbund aufgenommen. Die Anbindung erfolgt über einen PVI-Adapter - einen spezialisierten UCRI2-Adapter, der die Kommunikationsschnittstelle einer proprietären Vermittlungsinstanz unterstützt. Auf der anderen Seite spricht der PVI-Adapter das UCRI2 P2P-Protokoll und kann somit in die P2P-Topologie des Verbundes aufgenommen werden. Der PVI-Adapter übersetzt das PVI-Kommunikationsprotokoll in das UCRI2 P2P-Protokoll inklusive Mapping zwischen Adressierungsschemata.

![Anbindung an Verbund mit PVI](ucri-pvi-integration.drawio.svg)

**Verbund mit Anbindung an KV-Verbund ohne KV-Adapter**

Ein wichtiger Anwendungsfall für die UCRI2-Spezifikaiton ist Kommunikation zwischen 110/112- und KV-Leitstellen.

Die Ausgangssituation für dieses Integrationsszenario ist ein bestehendes Standard-UCRI2-Verbund und eine Anforderung eine bestimmte Leitstelle aus dem Verbund mit einer KV-Leitstelle zu verbinden. Dabei soll aktuelle Entwicklung berücksichtigt werden, wonach die KVs über eine normierte Vermittlungsarchitektur auf Basis einer [Matrix-Infrastruktur](https://matrix.org/) kommunizieren müssen.

Für die Integration zwischen Leitstellen wird auf beiden Seiten ein Matrix-Connector - ein UCRI2-Connector zur Anbindung an eine Matrix-Infrastruktur eingesetzt. Sowohl ELS als auch KV-Software verwenden dabei die UCRI2 Client-API des eigenen Matrix-Connectors. Die Nachrichtenübermittlung erfolgt dabei über Matrix-Protokoll. Der Matrix-Connector unterstützt das Mapping zwischen UCRI2- und Matrix-Adressierungsschemata.

Ein Problem dieses Integrationsschemas ist, dass jede Leitstelle, die mit KVs integriert werden soll, braucht außer UCRM-Modul zusätzlich einen eigenen Matrix-Connector. Die Lösung dieses Problems besteht in der Anbindung des gesamten UCRI2-Verbundes an die Matrix-Infrastruktur, siehe nächstes Integrationsszenario.

![Verbund mit Anbindung an KV-Verbund ohne KV-Adapter](ucri-matrix-integration-wo-adapter.drawio.svg)

**Verbund mit Anbindung an KV-Verbund mit KV-Adapter**

In diesem Szenarion wird der Gesamt-UCRI2-Verbund an die Matrix-Infrastruktur mit Hilfe eines Matrix-Adapters angebunden. Somit können alle an dem Verbund beteiligten ELS mit KVs kommunizieren ohne einen eigenen Matrix-Connector einsetzen zu müssen.

Der Matrix-Adapter unterstützt das UCRI2 P2P-Protokoll und wird als Teil eines bestehenden UCRI2 P2P-Netzes etabliert. Auf der anderen Seite unterstützt der Matrix-Adapter das Matrix-Protokoll und kann somit mit UCRI2 Matrix-Connectors anderer Teilnehmer einer Matrix-Infrastruktur kommunizieren. Auf dieser Weise werden UCRI2-Domäne, die auf unterschiedlichen Vermittlungstechnologien basieren, zu einem übergeordneten UCRI2-Kommunikationsverbund organisiert, in dem alle Teilnehmer untereinander transparent mit Hilfe von standardisierten UCRI2-Anwendungen kommunizieren können.

![Verbund mit Anbindung an KV-Verbund mit KV-Adapter](ucri-matrix-integration-with-adapter.drawio.svg)