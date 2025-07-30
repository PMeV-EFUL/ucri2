# UCRI2-App Technische Quittungen

<!-- toc -->
<!-- tocstop -->

## Überblick
Technische Quittung ist eine durch UCRI-Module (UCRM) automatisch generierte Meldung, die Kommunikationsteilnehmer (KT) über die Zustellung (positive sowie negative Zustellbestätigung) einer zuvor gesendeten Nachricht informiert.

Ein Nachrichtensender bekommt folgende Quittungen:

- Zustellbestätigung: nachdem der Empfänger die Entgegennahme einer Nachricht bestätigt hat
- Benachrichtigung über fehlgeschlagene Zustellung: mit Hinweisen zu Fehlerursache:
  - Timeout: nachdem ein für die Nachrichtenzustellung vordefiniertes Timeout verstrichen ist, ohne dass der Empfänger die Entgegennahme einer Nachricht bestätigt hat
  - KT-System vorübergehend abgemeldet: das KT-System des Empfängers ist vorübergehend abgemeldet, z.B. für eine Wartung. Diese Meldung ist in der aktuellen Protokollversion nicht implementiert

## Adressierung
Adressierung einer technischen Quittung ist wie folgt festgelegt:
- `source` - Empfänger der zuvor gesendeten Nachricht
- `destinations` - beinhaltet ein Element - Sender der zuvor gesendeten Nachricht