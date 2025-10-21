<!-- skip-start -->
[Zu der Hauptseite](index.md)
<!-- skip-end -->

# UCRI2 Systemarchitektur
Im Gegensatz zu UCRI Version 1 ist UCRI 2 grundlegend für die n:m-Kommunikation verschiedener Teilnehmer entwickelt worden.

## Messaging

Bei der Strukturierung der UCRI2-Schnittstelle wird der Architekturstil Messaging verwendet. Bei diesem Architekturstil kommunizieren verteilte unabhängige Systemkomponenten (im allgemeinen Kommunikationsteilnehmer genannt - KT) miteinander mit Hilfe von Nachrichten.

Messaging-Systeme trennen die fachliche Anwendung (gewöhnlich strukturiert nach Client-Server-Prinzip) von der Vermittlungsebene - also von technischen Aspekten der Nachrichtenübermittlung zwischen technischen Systemen der KT. Nachrichten können während der Übertragung umgewandelt werden, ohne dass Sender oder Empfänger von der Umwandlung wissen. Die Entkopplung ermöglicht es Integratoren, je nach Anforderung unterschiedliche Kommunikationstopologien zu unterstützen, von dezentralen P2P-Protokollen bis zu zentralisierten Broker-Architekturen.

Messaging-Systeme ermöglichen es den Komponenten, entkoppelt zu bleiben und sich auf ihre eigenen Aufgaben zu konzentrieren, während sie gleichzeitig in der Lage sind, mit anderen Komponenten im System zu kommunizieren und zusammenzuarbeiten. Es verringert die Anzahl der Abhängigkeiten zwischen den Komponenten, wodurch das System flexibler und leichter zu warten ist.

![Messaging](ucri-arch-overview.drawio.svg)

## Vermittlungsebene

Das andere wichtige Architekturmuster, das bei der Strukturierung der UCRI2-Schnittstelle Verwendung findet, ist das Adapter-Muster. Bei diesem Muster erfolgt die Kommunikation zwischen dem technischen System der KT (Anwendungsebene) und der Vermittlungsebene mittels einer Adapter-Komponente Leitstellenmodul (UCRI Control Room Module - UCRM). Der Adapter ermöglicht bidirektionale Kommunikation zwischen den Ebenen in einer standardisierten Form und ermöglicht die Komplexitätsreduzierung der angebundenen Schnittstellen.

Das UCRM stellt die UCRM Client API bereit - die einzige Kommunikationsschnittstelle für direkt verbundene Kommunikationsteilnehmer wie Leitstellensysteme oder andere technische Knoten, sowie weitere externe Systeme ([vgl. UCRI Gateway](#UCRI-Gateway)).

Die untereinander kommunizierenden UCRM-Adapter bilden die Vermittlungsebene und kümmern sich somit um die technischen Aspekte der Kommunikation. Während sich die KTs auf die eigentliche Anwendungslogik fokussieren - also die Anwendungsebene.

Zentrale Aufgabe der Vermittlungsebene ist die Zustellung von Meldungen zwischen Sender und Empfänger. Außerdem werden auf der Vermittlungsebene unterschiedliche querschnittliche Aufgaben übernommen.

Verschiedene UCRMs kommunizieren mittels P2P-Protokoll miteinander.

Einzelne Aufgaben der Vermittlungsebene sind:
- Verwaltung der Kommunikationstopologie inkl. Adressierungskonzept, KT-Status-Monitoring und KT-Register
- Konzept Authentisierung, Autorisierung, Accounting
- Übermittlung von Nachrichten unter der Verwendung des UCRI-Adressierungskonzepts inkl. Routing-Funktion
- Validierung von Anwendungsmeldungen

Die Vermittlungsebene ist frei von Fachlichkeit. Sie realisiert nur den Datentransport und sichert die Integrität der Daten.

## Anwendungsebene
Die UCRI2-Anwendungsebene ist komplett getrennt von der Vermittlungsebene.
Die Anwendungsebene ist dabei in mehrere unabhängige Bereiche, sogenannte UCRI2-Apps, aufgeteilt.
Das erlaubt die freie Weiterentwicklung jeder einzelnen App.

Eine UCRI2-App wird durch folgende Artefakte definiert:
- Ein Satz von standardisierten Nachrichten-Schemata (JSON, kanonisches Datenmodell)
- Ablaufmodell (definierte Abfolge von Nachrichten)
!!!TODO
- Prozessdefinitionen (Festlegungen bezüglich Anwendungslogik, die bei der Implementierung in technischen KT-Systemen berücksichtigt werden müssen)
!!!

## Rollen der beteiligten Komponenten
In UCRI2 existieren demnach zwei unterschiedlichen Rollen:
- Ein teilnehmendes System nimmt hierbei die **Client-Rolle** ein und konsumiert die UCRI2 Client API, die vom UCRM angeboten wird.
- Ein UCRM nimmt dagegen die **UCRM-Rolle** ein und bietet für Clients die UCRI2 Client API an. Zur Verbindung mit anderen UCRMs wird eine andere API genutzt: die UCRI2 Peer-to-Peer-API (P2P-API).

Folglich ist für eine UCRI2-konforme Umsetzung relevant, welche Rolle umgesetzt werden soll:
- Ein KT, der sich per UCRI2 mit anderen KT verbinden will, muss ausschliesslich die UCRI2 Client API aus der Consumer-Perspektive umsetzen.
- Ein UCRM muss die UCRI2 Client API aus der Provider-Perspektive umsetzen und kann die UCRI2 P2P-API umsetzen, falls eine Koppelung mit anderen UCRMs gewünscht wird.

## UCRI Gateway

Die Systemkomponente Gateway stellt einen spezialisierten KT dar. Das Gateway wird am Übergang zu Gruppen von KT eingesetzt, die auf der Vermittlungsebene nicht direkt erreichbar sind und über eine proprietäres Leitstellenprotokoll angebunden werden können (Leitstellenverbunde). Das Gateway stellt eine Gateway-Funktion bereit zum Mapping zwischen externe Quell- bzw. Zieladressen und UCRI-internen KT-Adressen.

![UCRI Komponenten](ucri-components.drawio.svg)



<!-- skip-start -->
---
[Zu der Hauptseite](index.md)
<!-- skip-end -->