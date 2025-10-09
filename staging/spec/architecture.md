[Zu der Hauptseite](index.md)

# UCRI2 Systemarchitektur

## Messaging

Bei der Strukturierung der UCRI2-Schnittstelle wird der Architekturstil Messaging verwendet. Bei diesem Architekturstil kommunizieren verteilte unabhängige Systemkomponenten (im allgemeinen Kommunikationsteilnehmer genannt - KT) miteinander mit Hilfe von Nachrichten.

Messaging-Systeme trennen die fachliche Anwendung (gewöhnlich strukturiert nach Client-Server-Prinzip) von der Vermittlungsebene - also von technischen Aspekten der Nachrichtenübermittlung zwischen technischen Systemen der KT. Nachrichten können während der Übertragung umgewandelt werden, ohne dass Sender oder Empfänger von der Umwandlung wissen. Die Entkopplung ermöglicht es Integratoren, je nach Anforderung unterschiedliche Kommunikationstopologien zu unterstützen, von dezentralen P2P-Protokollen bis zu zentralisierten Broker-Architekturen.

Messaging-Systeme ermöglichen es den Komponenten, entkoppelt zu bleiben und sich auf ihre eigenen Aufgaben zu konzentrieren, während sie gleichzeitig in der Lage sind, mit anderen Komponenten im System zu kommunizieren und zusammenzuarbeiten. Es verringert die Anzahl der Abhängigkeiten zwischen den Komponenten, wodurch das System flexibler und leichter zu warten ist.

![Messaging](ucri-arch-overview.drawio.svg)

## Vermittlungsebene

Das andere wichtige Architekturmuster, das bei der Strukturierung der UCRI2-Schnittstelle Verwendung findet, ist das Adapter-Muster. Bei diesem Muster erfolgt die Kommunikation zwischen dem technischen System der KT (Anwendungsebene) und der Vermittlungsebene mittels einer Adapter-Komponente Leitstellenmodul (UCRI Control Room Module - UCRM). Der Adapter ermöglicht bidirektionale Kommunikation zwischen den Ebenen in einer standardisierten Form und ermöglicht die Komplexitätsreduzierung der angebundenen Schnittstellen.

Das UCRM stellt die UCRM Client API bereit - die einzige Kommunikationsschnittstelle für direkt verbundene Kommunikationsteilnehmer wie Leitstellensysteme oder andere technische Knoten, sowie weitere externe Systeme ([vgl. UCRI Gateway](#UCRI-Gateway)).

Der Adapter kann auch zusätzliche Aufgaben übernehmen, wie z. B. Datentransformation oder Sicherheitsaufgaben wie Ende-zu-Ende-Verschlüsselung von übermittelten Nachrichten.

Die untereinander kommunizierenden UCRM - Adapter an der Seite von technischen Systemen der KT und optional der Broker (bei einer zentralen Broker-Architektur) bilden die Vermittlungsebene und kümmern sich somit um die technischen Aspekte der Kommunikation - also die Vermittlungsebene, während die fachlichen Systemkomponenten Clients und Server sich auf die eigentliche Anwendungslogik fokussieren - also die Anwendungsebene.

Zentrale Aufgabe der Vermittlungsebene ist die Zustellung von Meldungen zwischen Sender und Empfänger. Außerdem werden auf der Vermittlungsebene unterschiedliche querschnittliche Aufgaben übernommen. Hier sind nur einige Beispiele: KT-Authentifizierung und Autorisierung, Meldungsvalidierung, eventuell E2E-Verschlüsselung. Bei der P2P-Topologie kommunizieren die UCRM der zwei KT dabei direkt miteinander, bei einer zentralen Architektur - über einen Messagebroker.


Einzelne Aufgaben der Vermittlungsebene, die bei der P2P-Topologie durch die Kommunikation zwischen einzelnen UCRMs umgesetzt werden, sind:
- Verwaltung der Kommunikationstopologie inkl. Adressierungskonzept, KT-Status-Monitoring und KT-Register
- Konzept Authentisierung, Autorisierung, Accounting
- Optional E2E-Verschlüsselung
- Übermittlung von Nachrichten unter der Verwendung des UCRI-Adressierungskonzepts inkl. Routing-Funktion
- Validierung von Anwendungsmeldungen

Die Vermittlungsebene ist frei von Fachlichkeit. Sie realisiert nur den Datentransport und sichert optional die Ende-zu-Ende-Verschlüsselung der Daten.

## Anwendungsebene

Eine UCRI2-Anwendung wird durch folgende Artefakte definiert:
- Ein Satz von standardisierten Nachrichten-Schemata (JSON, kanonisches Datenmodell)
- Ablaufmodell (definierte Abfolge von Nachrichten)
- Prozessdefinitionen (Festlegungen bezüglich Anwendungslogik, die bei der Implementierung in technischen KT-Systemen berücksichtigt werden müssen)

Wichtig ist das Prinzip der Trennung der UCRI2-Anwendungen untereinander und deren Unabhängigkeit von der Vermittlungsebene. Das erlaubt eine freie Weiterentwicklung jeder einzelnen Anwendung.

## UCRI Gateway

Die Systemkomponente Gateway stellt einen spezialisierten KT dar. Das Gateway wird am Übergang zu Gruppen von KT eingesetzt, die auf der Vermittlungsebene nicht direkt erreichbar sind und über eine proprietäres Leitstellenprotokoll angebunden werden können (Leitstellenverbunde). Das Gateway stellt eine Gateway-Funktion bereit zum Mapping zwischen externe Quell- bzw. Zieladressen und UCRI-internen KT-Adressen.

![UCRI Komponenten](ucri-components.drawio.svg)


---
[Zu der Hauptseite](index.md)
