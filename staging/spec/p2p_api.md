##  Peer-to-Peer-API (P2P-API)
Die P2P-API dient der Vernetzung innerhalb der Transportschicht, also von **UCRMs** untereinander.
Jedes beteiligtes UCRM bietet die API einerseits selbst an und verbindet sich andererseits mit den von entfernten UCRMs angebotenen APIs.
Im Folgenden werden die verschiedenen Endpunkte vorgestellt:

### Endpunkt /token - HTTP GET
Über den Token-Endpunkt werden JSON Web Token (JWT) abgerufen, die bei sämtlichen anderen Endpunkten zur Authorisierung genutzt werden. Hierzu werden eine Nutzerkennung sowie ein Geheimnis per HTTP-Header übergeben.
Hierbei sei angemerkt, dass gemäß RFC 7519 ein **exp**-Claim als NumericDate dargestellt wird (also als die Sekunden seit 1970-01-01T00:00:00Z UTC), vgl. RFC 7519 Kapitel 2.

### Endpunkt /info - HTTP GET
Über den Info-Endpunkt können allgemeine Informationen über das UCRM wie die genutzte UCRI2-Transportschicht-Version, UCRM-Hersteller, Produktversion und Betriebsstatus des UCRM abgerufen werden.

### Endpunkt /registry - HTTP GET
Über den Registry-Endpunkt können entfernte UCRMs Informationen über alle direkt an das angerufene UCRM angebundenen Kommunikationsteilnehmer (inklusive den UCRMs selbst) abrufen. Hierbei MUSS dass UCRM ausschliesslich die lokalen KT zurückgeben, nicht jedoch weitere über entfernte UCRMs angebundene KT.

Falls einzelne übertragenen KT-Registrierungsdatensätze fehlerhaft sind, MUSS das UCRM diese verwerfen.

Da die Umgebung dynamisch ist, d.h. neue KT können dazukommen, existierende KT können abgebaut werden, sollen KT-Register-Abfragen regelmäßig durchgeführt werden (mindestens 1 Mal pro Stunde, maximal alle 5 Minuten). Außerdem sollte ein UCRM beim Start die KT-Registrierungsdaten aller bekannten anderen UCRMs abrufen. Ein UCRM MUSS während dieser Phase den am Info-Endpunkt zurückgegebenen Status-Wert auf den Status 1 setzen (sowohl für die P2P- als auch für die Client-API).

#### Direkter Versand von Verfügbarkeits-Status-Nachrichten
Falls ein UCRM feststellt, dass sich der Verfügbarkeitsstatus eines Clients verändert hat, wird das KT-Registrierungs-**Status**-Feld aktualisierung (vgl. Unterkapitel "Client-API/Verfügbarkeitsstatus" ). Diese Änderung wird dann entfernten UCRMs erst dann bekannt, sobald diese den nächsten periodischen Abruf der KT-Registrierung durchführen.
Um die Statusveränderung direkt und ohne Verzögerung an alle entfernten UCRMs zu kommunizieren, MUSS das UCRM daher zusätzlich nach Feststellung der Statusänderung eine **participant_availability_update**-Nachricht (aus der **transport_layer_messages**-App) an alle entfernten UCRMs senden.

Falls ein UCRM eine solche **participant_availability_update**-Nachricht erhält, MUSS es den KT-Registrierungs-Status des genannten KT auf den übermittelten Wert anpassen. Die Nachricht selbst darf NICHT an die angebundenen Clients weitergegeben werden.

### Endpunkt /messaging/send - HTTP POST
Über den Messaging-Send-Endpunkt werden Nachrichten an entfernte UCRM weitergegeben. Hierbei gelten folgende Festlegungen:
1. Falls das entfernte UCRM die Nachrichtenannahme ablehnt und im **ack**-Feld nicht "none" angegeben war, MUSS das sendende UCRM dem KT, welcher die Nachricht ursprünglich gesendet hat, eine negative Zustellungs-Status-Nachricht übersenden, in deren **cause**-Feld der gemeldete Fehler mitübertragen wird.
2. Das empfangende UCRM MUSS prüfen, ob die Nachricht an einen der am UCRM angebundenen KT oder das UCRM selbst adressiert ist, falls dies nicht der Fall ist, MUSS die Nachricht abgelehnt werden. 
3. Das empfangende UCRM MUSS prüfen, ob die enthaltene Anwendungsnachricht (payload-Feld) eine bekannte Anwendung in einer bekannten Anwendungsversion referenziert und gemäß des Nachrichtenschemas gültig ist.
4. Das empfangende UCRM MUSS prüfen, ob der adressierte KT (destinations-Feld) den Empfang der Anwendungsnachricht gemäß dessen KT-Registrierungs-Eintrages unterstützt.

