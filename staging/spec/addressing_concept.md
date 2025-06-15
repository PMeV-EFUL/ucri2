[Vermittlungsebene](messaging.md)

# UCRI2 Adressierungskonzept

Für die Adressierung der einzelnen Kommunikationsteilnehmer (KT) auf der Vermittlungsebene werden eindeutige Kennungen in Form von Object Identifier (OID Spezifikationen ISO/IEC 9834, DIN 66334) verwendet.

## OID-Hierarchie

Adressierung von einzelnen KT ist hierarchisch organisiert und spiegelt die hierarchische Kommunikationsstruktur wider:

![OID-Hierarchie](ucri-oid-hierarchy.drawio.svg)

Diese Struktur ermöglicht Implementierung einer einfachen und einheitlichen Routing-Funktion, die in jeder Systemkomponente (Leitstellenmodul - UCRM, Vermittlungsplattform, Gateway) die Weiterleitung von übermittelten Nachrichten unterstützt (TODO Routing-Konzept).

Auch wenn die Bildung einer eigenen Adressierungsebene für Leitstellenmodule (CRM-Ebene im Bild) nicht zwingend notwendig ist, unterstützt diese Ebene das Implementieren einer uniformen Routing-Funktion. Zusätzlich bringt direkte OID-Adressierung der Leitstellenmodule folgende Vorteile:

- es ermöglicht Umsetzung nützlicher technischer Funktionen, z.B. Kommunikationsdurchstich Modul zu Modul unter Verwendung von einheitlichen Adressierungs- und Routing-Funktionen.
- es unterstützt Vereinheitlichung von Identity-Management für UCRI-Systemkomponenten.

Die Systemkomponente Gateway stellt einen speziellen KT dar. Das Gateway wird am Übergang zu externen Systemen eingesetzt und stellt eine Gateway-Funktion bereit zum Mapping zwischen externe Quell- bzw. Zieladressen und internen OID. Ein externes System bekommt dabei einen entsprechend reservierten OID-Bereich (Unterbaum) und das Gateway bekommt die Wurzel-OID-Adresse dieses Unterbaums.

## OID-Nomenklatur

OID-Nomenklatur soll Adressierung von KT über die staatliche Grenzen hinaus ermöglichen. Dabei steht jedem Land frei, ein eigenes Adressierungsschema unterhalb des Landes-OID-Unterbaums zu definieren. Wurzel-Adresse eines Landes-OID-Unterbaums ist wie folgt definiert:

- <Root-OID>.1.<Kennzahl des Landes> (Beispiel: 1.2.3.1.276 für Deutschland)

Auch jedes Bundesland in Deutschland ist frei, ein eigenes Adressierungsschema unterhalb des Bundesland-OID-Unterbaums zu definieren. Wurzel-Adresse eines Bundesland-OID-Unterbaums ist wie folgt definiert:

- <Root-OID>.1.276.<Kennzahl des Bundeslandes> (Beispiel: 1.2.3.1.276.5 für NRW)

Unterschiedliche Organisationen können auch unterschiedliche Adressierungsschemata verwenden. Wurzel-Adresse eines nPOLGA-OID-Unterbaums ist wie folgt definiert:

- <Root-OID>.1.276.5.<Kennzahl von POL/nPOLGA, etc.> (Beispiel: 1.2.3.1.276.5.1 für nPOLGA in NRW)

Die OID-Adresse der einzelnen Kommunikationsteilnehmer (KT) wird nach dem [amtlichen Gemeindeschlüssel (AGS)](https://de.wikipedia.org/wiki/Amtlicher_Gemeindeschl%C3%BCssel) gebildet:

| #                                                  | Ebene | Beispiel                                              |
|----------------------------------------------------|--|-------------------------------------------------------|
| 1                                                  | Root-OID | 1.2.3 - Festlegung in einem geschlossenen UCRI-System |
| 2                                                  | Satzart | 1 - Einzeladresse, 2 - Gruppe                         |
| 3                                                  | Kennzahl des Landes | 276 - Deutschland nach ISO 3166                       |
| 4                                                  | Kennzahl des Bundeslandes | 5 - für NRW nach AGS |
| 5                                                  | Kennzeichnung von POL/nPOL Gefahrenabwehr (KRITIS, etc.) | Polizeidienststellen, Gesundheitsämter, Veterinärämter, etc. Definition folgt. Annahme für Beispiel: 1 - nPOLGA, 99 - Test/Pilot |
| 6                                                  | Kennzahl des Regierungsbezirks | 1 - Regierungsbezirk Düsseldorf nach AGS |
| 7                                                  | Kennzahl des Landkreises oder der kreisfreien Stadt ("0" bei zentralen Einrichtungen auf der Regierungsbezirksebene) | 58 - Landkreis Mettmann nach AGS |
| 8                                                  | Gemeinde ("0" bei kreisfreien Städten) | 28 - Stadt Ratingen, Stadtbezirk Ratingen nach AGS |
| 9 | Leitstellenmodul | 1 - erstes Leitstellenmodul, fortlaufende Nummerierung von Leitstellenmodulen |
| 10 | Kommunikationsteilnehmer | 1 - z.B. ELS, fortlaufende Nummerierung von KT |

Beispiel OID Feuerwehr ELS in Ratingen: 1.2.3.1.276.5.1.1.58.28.1.1

---

[Vermittlungsebene](messaging.md)