<!-- skip-start -->
[Zu der Hauptseite](index.md)
<!-- skip-end -->

# Systemarchitektur
Im Gegensatz zu UCRI Version 1, die 1:1-Kommunikation zwischen Leitstellen spezifiziert, ist UCRI 2 grundlegend für 
die n:m-Kommunikation verschiedener Teilnehmer entwickelt worden.

## Architekturstil Messaging

Bei der Strukturierung der UCRI2-Schnittstelle wird der Architekturstil Messaging verwendet. Bei diesem Architekturstil kommunizieren verteilte unabhängige Systemkomponenten (im allgemeinen Kommunikationsteilnehmer genannt - KT) miteinander mit Hilfe von Nachrichten.

Messaging-Systeme trennen die fachliche Anwendung (gewöhnlich strukturiert nach Client-Server-Prinzip) von der Vermittlungsebene - also von technischen Aspekten der Nachrichtenübermittlung zwischen technischen Systemen der KT. Nachrichten können während der Übertragung umgewandelt werden, ohne dass Sender oder Empfänger von der Umwandlung wissen. Die Entkopplung ermöglicht es Integratoren, je nach Anforderung unterschiedliche Kommunikationstopologien zu implementieren, von dezentralen P2P-Protokollen bis zu zentralisierten Broker-Architekturen:

![Messaging](ucri-arch-overview.drawio.svg)

Messaging-Systeme ermöglichen es den Komponenten, entkoppelt zu bleiben und sich auf ihre eigenen Aufgaben zu konzentrieren, während sie gleichzeitig in der Lage sind, mit anderen Komponenten im System zu kommunizieren und zusammenzuarbeiten. Es verringert die Anzahl der Abhängigkeiten zwischen den Komponenten, wodurch das System flexibler und leichter zu warten ist.

## Vermittlungsebene

Das andere wichtige Architekturmuster, das bei der Strukturierung der UCRI2-Schnittstelle Verwendung findet, ist das Adapter-Muster. Bei diesem Muster erfolgt die Kommunikation zwischen dem technischen System der KT (Anwendungsebene) und der Vermittlungsebene mittels einer Adapter-Komponente Leitstellenmodul (UCRI Control Room Module - UCRM). Der Adapter ermöglicht bidirektionale Kommunikation zwischen den Ebenen in einer standardisierten Form und ermöglicht die Komplexitätsreduzierung der angebundenen Schnittstellen.

Das UCRM stellt die UCRM Client-API bereit - die einzige Kommunikationsschnittstelle für direkt verbundene Kommunikationsteilnehmer wie Leitstellensysteme oder andere technische Knoten, sowie weitere externe Systeme (vgl. [UCRI Gateway](#UCRI-Gateway)).

Die untereinander direkt oder über einen Broker kommunizierenden UCRM-Adapter bilden die Vermittlungsebene und kümmern sich somit um die technischen Aspekte der Kommunikation. Während sich die KTs auf die eigentliche Anwendungslogik fokussieren - also die Anwendungsebene.

Zentrale Aufgabe der Vermittlungsebene ist die Zustellung von Meldungen zwischen Sender und Empfänger. Außerdem werden auf der Vermittlungsebene unterschiedliche querschnittliche Aufgaben übernommen.

Einzelne Aufgaben der Vermittlungsebene sind:
- Verwaltung der Kommunikationstopologie inkl. Adressierungskonzept, KT-Status-Monitoring und KT-Register
- Konzept Authentisierung, Autorisierung, Accounting
- Übermittlung von Nachrichten unter der Verwendung des UCRI-Adressierungskonzepts inkl. Routing-Funktion
- Validierung von Anwendungsmeldungen

Die Vermittlungsebene ist frei von Fachlichkeit. Sie realisiert nur den Datentransport und sichert die Integrität der Daten.

## Anwendungsebene
Die UCRI2-Anwendungsebene ist grundsätzlich getrennt von der Vermittlungsebene.
Die Anwendungsebene ist dabei in mehrere unabhängige Applikationen, sogenannte UCRI2-Apps, aufgeteilt. 

Eine UCRI2-Applikation wird durch folgende Artefakte definiert:
- Ein Satz von standardisierten Nachrichten-Schemata (JSON, kanonisches Datenmodell)
- Ablaufmodell (definierte Abfolge von Nachrichten)
~~!!!TODO~~
- Prozessdefinitionen (Festlegungen bezüglich Anwendungslogik, die bei der Implementierung in technischen KT-Systemen berücksichtigt werden müssen)
~~!!!~~

Einzelne Applikationen werden separat und unabhängig von der Spezifikation der Vermittlungsebene (Transportschichtspezifikation)
versioniert. Siehe [UCRI2 Versionierung](./versioning.md) Das erlaubt freie Weiterentwicklung jeder einzelnen App.

## Sicherheitskonzept

Einzelne Sicherheitsaspekte werden im Folgenden im Hinblick auf eine P2P-Architektur betrachtet. Spezifika einer jeweiligen
Broker-Architektur (nicht in Scope der vorliegenden Spezifikaiton) sind bei der Gestaltung der Inter-UCRM-Kommunikation 
zu berücksichtigen.

UCRI2 unterscheidet zwei Kommunikationsdomäne, siehe Abbildung:

- Kommunikation zwischen einem Leitstellensystem (KT-System) und einem UCRI Leitstellenmodul (UCRM). Diese Kommunikation findet anhand der UCRM Client-API statt und erfolgt typischerweise innerhalb einer durch einen Leitstellenbetreiber kontrollierten Infrastruktur.
- Kommunikation zwischen zwei UCRM. Die Inter-UCRM-Kommunikation in einer P2P-Architektur verwendet UCRM P2P-API. Bei einer Broker-Architektur (nicht abgebildet) findet Inter-UCRM-Kommunikation über das Broker-spezifische Protokoll statt. Die Inter-UCRM-Kommunikation kann über das öffentliche Internet stattfinden und braucht dementsprechend besondere Sicherheitsmaßnahmen.

![UCRI2 Kommunikationsdomäne](ucrm-protocol.drawio.svg)

Die Infrastruktur eines KTs sollte eine P-A-P-Struktur aufweisen, die aus Paketfilter als Trennung zu vertrauenswürdigen internen Systemen (Leitstelle), Application-Layer-Gateway (UCRM) und
Paketfilter als Trennung zu nicht vertrauenswürdigem Netz (Internet) besteht. Vgl. [Netzarchitektur und -design - BSI](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2023/09_NET_Netze_und_Kommunikation/NET_1_1_Netzarchitektur_und_design_Edition_2023.pdf?__blob=publicationFile&v=3).

UCRM API Implementierung verwendet in beiden Kommunikationsdomänen OAuth 2.0 mit Client Credentials Grant Type zur sicheren Authentifizierung und Autorisierung von Clients auf der Applikationsebene.

**Trust Konzept**

Bei einer P2P-Architektur wird mTLS als Sicherung der Inter-UCRM-Kommunikation zwischen zwei UCRM verwendet. Sowohl Client als auch Server bauen eine gegenseitige Vertrauensbeziehung über digitale Zertifikate auf. Dabei kann der Paketfilter auf der Seite des nicht vertrauenswürdigen Netzes die mTLS-Verbindung terminieren. Im Paketfilter kann eine Liste von zugelassenen Domainnamen implementiert (White Listing) und somit die Kommunikation auf eine geschlossene Gruppe der Teilnehmer beschränkt werden. Auch im Falle einer Broker-Architekur (nicht abgebildet) sollen entsprechende Mechanismen zur Herrstellung der gegenseitigen Vertrauensbeziehung implementiert werden.

Die Kommunikation zwischen einem KT-System und dem UCRM-Modul kann je nach lokalen Sicherheitsanforderungen wahlweise per TLS oder mTLS erfolgen.

Die Vertrauensbeziehungen zwischen den Systemkomponenten bei der Client/Server-Kommunikation basieren dabei auf folgenden Mechanismen (siehe Abbildung):
1. Server-Authentifizierung. Die Vertrauensbeziehung zu UCRM als Server basiert auf dem Domainname (DNS) des Servers und wird durch Server-Zertifikat abgesichert. Der Domainname des Servers ist im Server-Zertifikat verankert.
2. Client-Authentifizierung. Die Vertrauensbeziehung zu KT oder UCRM in der Client-Rolle basiert auf der Object Identifier (OID) des Clients (siehe [Adressierungskonzept](./addressing_concept.md)) und wird durch Client-Zertifikat abgesichert. Die OID des Clients ist im Client-Zertifikat verankert.
3. Sowohl Client als auch Server haben eine Liste vertrauenswürdiger Zertifizierungsstellen (CAs), sogenannte Root-CAs, die als Vertrauensanker dienen. Die ausgestellten Zertifikate von Client und Server müssen von einer CA signiert sein, die jeweils in der vertrauenswürdigen Liste des Gegenübers enthalten ist.

![UCRI2 Trust Konzept](ucri-trust.drawio.svg)

*Anmerkung 1*: In den konkreten Kundensituationen können unterschiedliche Mechanismen des Zertifikatsmanagements umgesetzt werden - basierend sowohl auf zentraler Authority als auch auf spezifischen Vereinbarungen zwischen einzelnen KTs.

*Anmerkung 2*: Als Alternative kann das Vertrauen zwischen KT-Systemen und dem UCRM in einer durch einen Leitstellenbetreiber kontrollierten Infrastruktur durch das Bilden von einer Sicherheitszone auf der Netzwerkebene hergestellt werden.

Um den sichernen Ursprung und unverfälschten Inhalt von Applikationsmeldungen zu garantieren, können die Meldungen durch Sender-KT signiert werden. Zur Signaturvalidierung erstellt der KT ein kryptographisches Schlüsselpaar und stellt sein Public Key dem lokalen UCRM-Modul über sicheren Kanal bereit. Bei der Inter-UCRM-Kommunikation wird das KT Public Key an die fremden UCRM mittels UCRM P2P-API übermittelt und steht anschließend den potentiellen Meldungsempfängern über die UCRM Client API zur Signaturvalidierung zur Verfügung. Das Signieren von Nachrichten ist im Kapitel [Kommunikationsprotokoll](./p2p_protocol.md) detailliert beschrieben.

<!-- skip-start -->
---
[Zu der Hauptseite](index.md)
<!-- skip-end -->