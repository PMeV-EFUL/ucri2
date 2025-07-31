# UCRI2-App Technische Quittungen

<!-- toc -->
<!-- tocstop -->

## Überblick
Technische Quittung ist eine durch UCRI-Infrastruktur (das sind UCRI-Module bei der Peer-To-Peer-Topologie, schließt bei einer zentralen Topologie auch zentrale Systemkomponenten ein) automatisch generierte Meldung, die Kommunikationsteilnehmer (KT) über die Zustellung (positive sowie negative Zustellbestätigung) einer zuvor gesendeten Nachricht informiert.

Ein Nachrichtensender bekommt folgende Quittungen:

- Zustellbestätigung: nachdem der Empfänger die Entgegennahme einer Nachricht bestätigt hat. Diese Quittung wird durch fremdes UCRM generiert.
- Benachrichtigung über fehlgeschlagene Zustellung: mit Hinweisen zu Fehlerursache:
  - Empfänger nicht gefunden. Diese Quittung kann sowohl durch eigenes als auch durch fremdes UCRM generiert werden.
  - Timeout: nachdem ein für die Nachrichtenzustellung vordefiniertes Timeout verstrichen ist, ohne dass der Empfänger die Entgegennahme einer Nachricht bestätigt hat. Diese Quittung wird durch eigenes UCRM generiert.
  - KT-System vorübergehend abgemeldet: das KT-System des Empfängers ist vorübergehend abgemeldet, z.B. für eine Wartung. Diese Quittung wird durch fremdes UCRM generiert. Diese Meldung ist in der aktuellen Protokollversion nicht implementiert.

## Adressierung
Adressierung einer technischen Quittung ist wie folgt festgelegt:
- `source` - eine spezielle OID, die die UCRI-Infrastruktur identifiziert, siehe UCRI2-Spezifikation, Adressierungskonzept
- `destinations` - beinhaltet ein Element - Sender der zuvor gesendeten Nachricht