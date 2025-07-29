# UCRI2-App Transportschicht-Nachrichten

<!-- toc -->
<!-- tocstop -->

# Überblick
Diese UCRI2-App dient der Darstellung von Transportschicht-Nachrichten.
Diese App MUSS von allen UCRI2-Clients ZWINGEND umgesetzt werden.
UCRI2-Clients dürfen Nachrichten aus dieser App NIEMALS selbst versenden. Nachrichten aus der Transportschicht-Nachrichten-App dürfen ausschliesslich von UCRMS generiert werden.
Die Nachrichten sind wie folgt:
1. Zustellungsstatusberichte (message_delivery_status) dienen der Übermittlung des Zustellungsstatus von anderen App-Nachrichten.
   Um die Entstehung von Zyklen zu vermeiden, darf ein UCRM NIEMALS eine Zustellungs-Status-Nachricht erstellen, die auf eine andere Zustellungs-Status-Nachricht verweist!
 
# App-Nachrichten
<!-- include ../../general_schema_documentation.md -->
<!-- include message_delivery_status.schema.md -->



