# UCRI2-App Einsatzmittelanforderung

<!-- toc -->
<!-- tocstop -->
# Überblick
Der Use Case Einsatzmittelanforderung dient dazu, Einsatzmittel einer anderen Leitstelle als Unterstützung zur Einsatzbewältigung anzufordern. Beispiel: Leitstelle A bekommt einen Verkehrsunfall mit mehreren Verletzten im Grenzgebiet zu Leitstelle B gemeldet. Es werden 5 RTWs benötigt, Leitstelle A kann jedoch nur 4 RTWs im näheren Umfeld disponieren. Leitstelle A fordert bei Leitstelle B einen RTW zur Unterstützung an. Leitstelle B bestätigt die Unterstützung und entsendet entsprechende Einsatzmittel an A.

# Ablaufbeschreibung

1. A->B Einsatzmittelanforderung 
2. B->A Einsatzmittelanforderung vorläufig angenommen oder abgelehnt 
3. B->A Einsatzmittelbereitstellung 
4. B->A Bereitgestelltes EM ausgerückt 

Weitere Statusmeldungen werden nicht durch UCRI abgedeckt und können auf anderem Wege übernommen werden.

# App-Nachrichten
<!-- include ../../general_schema_documentation.md -->
<!-- include resource_request.schema.md -->
<!-- include acknowledgement.schema.md -->
<!-- include resource_acknowledgement.schema.md -->
<!-- include resource_deployed.schema.md -->