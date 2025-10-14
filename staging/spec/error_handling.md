# Fehlerbehandlung
Falls als Antwort auf eine Anfrage ein Fehler zurückgegeben wird, enthält dieser IMMER einen numerischen, UCRI2-spezifischen Fehlercode. Dieser Fehlercode ermöglicht es, die Fehlerursache zusätzlich zur groben Fehlereinteilung per HTTP-Statuscode genauer festzustellen.
Für jeden Fehlercode wird eine feste Fehlercode-ID vergeben, z.B. für den Fehlercode 460 die Fehlercode-ID REQUEST_INVALID_PER_CLIENT_TRANSPORT_SPEC (s.u.).

Andere als die unten genannten Fehlercodes dürfen NICHT zurückgegeben werden.

Falls dies nicht explizit angegeben ist, können alle Fehlercodes sowohl von der Client- als auch von der P2P-Schnittstelle zurückgegeben werden.

Zusätzlich vom Fehlercode wird IMMER eine menschenlesbare Fehlermeldung im reason-Feld mitübergeben. Die zusätzliche Übermittlung einer detaillierten Fehlerursache im message-Feld ist dagegen freiwillig. 

Für jeden Fehlercode wird an dieser Stelle dargestellt, in welchen Situationen dieser Fehlercode zurückgegeben wird. Die Fehlercodes sind dabei nach den HTTP-Statuscodes geordnet, in deren Kontext sie auftreten. Fehlercodes dürfen NUR im Kontext des aufgeführten HTTP-Statuscodes übertragen werden. Eine Ausnahme bildet hierbei die Übertragung eines NAK-Zustellfehlers im Rahmen der message_delivery_status-Nachricht in der transport_layer_messages-App, wo der Fehlercode, der von einem entfernten UCRM über das P2P-Schnittstelle gemeldet wurde an den Client weitergeleitet wird.

## Fehlercodes für Antworten mit HTTP-Statuscode 400
### Fehlercode 460 (REQUEST_INVALID_PER_CLIENT_TRANSPORT_SPEC)
Dieser Fehlercode wird NUR von der Client-Schnittstelle zurückgegeben, falls der Request zwar valide JSON-Daten enthält, diese aber das Client-Transportschicht-Schema für diesen Request verletzen. Der Fehlercode kommt NICHT zum Einsatz, wenn ein enthaltener App-Payload das App-Schema verletzt (vgl. REQUEST_PAYLOAD_INVALID_PER_APP_SPEC).
### Fehlercode 461 (REQUEST_PAYLOAD_UNKNOWN_APPID)
Dieser Fehlercode wird zurückgegeben, falls die angegebene AppId dem UCRM unbekannt ist.
### Fehlercode 462 (REQUEST_PAYLOAD_UNKNOWN_APPVERSION)
Dieser Fehlercode wird zurückgegeben, falls dem UCRM zwar die AppId bekannt ist, aber die angegebene AppVersion unbekannt ist.
### Fehlercode 463 (REQUEST_PAYLOAD_UNKNOWN_SCHEMAID)
Dieser Fehlercode wird zurückgegeben, falls dem UCRM zwar die AppId und AppVersion bekannt ist, aber die angegebene SchemaId (also der Nachrichtentyp) unbekannt ist.
### Fehlercode 464 (REQUEST_PAYLOAD_INVALID_PER_APP_SPEC)
Dieser Fehlercode wird zurückgegeben, falls der Request-Payload im data-Feld das zugehörige App-Schema verletzt.
### Fehlercode 465 (REQUEST_PAYLOAD_INVALID_JSON)
Dieser Fehlercode wird zurückgegeben, falls es sich bei den übergebenen Daten nicht um gültiges JSON handelt.
### Fehlercode 466 (REQUEST_PAYLOAD_UNSUPPORTED_APPID_OR_APPVERSION)
Dieser Fehlercode wird zurückgegeben, falls die appId und appVersion dem UCRM zwar bekannt, aber nicht in den supportedApps der destination als unterstützt aufgeführt sind. 
### Fehlercode 468 (REQUEST_PAYLOAD_UNSUPPORTED_MESSAGE)
Dieser Fehlercode wird zurückgegeben, falls die appId und appVersion dem UCRM bekannt und auch in den supportedApps der destination als unterstützt aufgeführt sind, die schemaId (also der Nachrichtentyp) aber im entsprechenden supportedApps-Eintrag in der liste der unsupportedMessages aufgeführt ist.
### Fehlercode 467 (REQUEST_PAYLOAD_FORBIDDEN_APPID)
Dieser Fehlercode wird NUR von der Client-Schnittstelle zurückgegeben, falls die gesendete Nachricht zur transport_layer_messages-App gehört (Nachrichten dieser App dürfen nur durch UCRMs versendet werden).
### Fehlercode 470 (REQUEST_UNKNOWN_DESTINATION_ID)
Dieser Fehlercode wird zurückgegeben, wenn die angegebene destination dem UCRM nicht bekannt ist.
### Fehlercode 478 (REQUEST_OID_FORBIDDEN)
Dieser Fehlercode wird zurückgegeben, falls der durch das übergebene OAuth-Token identifizierte Benutzer keinen Zugriff auf die angegebene OID hat. Bei der angegebene OID handelt es sich um die OID:
- im sender-Feld (für den /messaging/sent-Endpunkt)
- im destinations-Feld (für den /messaging/receive-Endpunkt)
- im destination-Feld (für den /messaging/commit-Endpunkt)
### Fehlercode 479 (REQUEST_WRONG_SIGNATURE)
Dieser Fehlercode wird NUR von der P2P-Schnittstelle zurückgegeben, falls es sich bei der gesendeten Nachricht um eine signierte Nachricht aus der transport_layer_messages-App handelt (und das sendende UCRM nicht per transmitsUnsignedMessages in seinem KT-Registrierungseintrag festgelegt hat, dass dieses seine Nachrichten nicht signiert).
Auf der Client-Schnittstelle und generell für von Clients gesendete Nachrichten findet KEINE Signaturprüfung in der Transportschicht statt.
### Fehlercode 480 (REQUEST_INVALID_PER_P2P_TRANSPORT_SPEC)
Dieser Fehlercode wird NUR von der P2P-Schnittstelle zurückgegeben, falls der Request zwar valide JSON-Daten enthält, diese aber das P2P-Transportschicht-Schema für diesen Request verletzen. Der Fehlercode kommt NICHT zum Einsatz, wenn ein enthaltener App-Payload das App-Schema verletzt (vgl. REQUEST_PAYLOAD_INVALID_PER_APP_SPEC).

## Fehlercodes für Antworten mit HTTP-Statuscode 401

### Fehlercode 475 (REQUEST_UNAUTHORIZED)
Dieser Fehlercode wird zurückgegeben, falls das übergebene OAuth-Token fehlt, ungültig oder expired ist. Außerdem wird der Fehlercode durch den /token-Endpunkt zurückgegeben, falls die übergebenen Zugangsdaten nicht korrekt sind.

##  Fehlercodes für Antworten mit HTTP-Statuscode 500

### Fehlercode 491 (REQUEST_INTERNAL_ERROR)
Dieser Fehlercode wird zurückgegeben, falls ein interner Fehler aufgetreten ist.

