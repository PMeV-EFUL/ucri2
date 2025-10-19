<!-- skip-start -->
[Vermittlungsebene](messaging.md)
<!-- skip-end -->

## Adressierungskonzept

Für die Adressierung der einzelnen Kommunikationsteilnehmer (KT) auf der Vermittlungsebene werden eindeutige Kennungen in Form von Object Identifier (OID Spezifikationen ISO/IEC 9834, DIN 66334) verwendet.
Für die Festlegung von OIDs gelten folgende Vorgaben:
1. Falls möglich, sollten offiziell zugeteilte OIDs zum Einsatz kommen. Diese können z.B. für das deutsche Gesundheitswesen beim Bundesinstitut für Arzneimittel und Medizinprodukte beantragt werden.
2. Falls keine offiziell vergebenen OIDs zum Einsatz kommen, dürfen selbst vergebene OIDs NIEMALS in einem Adressraum liegen, in dem auch offiziell zugeteilte OIDs vergeben werden, um Überschneidungen mit offiziell zugeteilten OIDs zu vermeiden.

Zusätzlich wird empfohlen, die genutzten OIDs dem Expertenforum UCRI zu melden, damit Adresskonflikte direkt bei der Vergabe vermieden werden können.

Die in den folgenden Unterkapiteln vorgestellten beispielhaften OID-Hierarchien und OID-Nomenklatur stellen nur eine Empfehlung dar. Falls von offiziellen Stellen vergebene OIDs zum Einsatz kommen, entsteht nicht zwangsläufig auch eine Hierarchie, wie sie in den Folgenden Unterkapiteln dargestellt wird.

### Beispielhafte OID-Hierarchie

Die Adressierung von einzelnen KT kann hierarchisch organisiert werden und spiegelt dann die hierarchische Kommunikationsstruktur wider:

![OID-Hierarchie](ucri-oid-hierarchy.drawio.svg)

Diese Struktur ermöglicht Implementierung einer einfachen und einheitlichen Routing-Funktion, die in jeder Systemkomponente (Leitstellenmodul - UCRM, evtl. Messagebroker, UCRI-Gateway) die Weiterleitung von übermittelten Nachrichten unterstützt (TODO Routing-Konzept).

Die Systemkomponente Gateway stellt einen speziellen KT dar. Das Gateway wird am Übergang zu externen Systemen eingesetzt und stellt eine Gateway-Funktion bereit zum Mapping zwischen externe Quell- bzw. Zieladressen und internen OID. Ein externes System bekommt dabei einen entsprechend reservierten OID-Bereich (Unterbaum) und das Gateway bekommt die Wurzel-OID-Adresse dieses Unterbaums.

### Beispielhafte OID-Nomenklatur

Alle Kommunikationsteilnehmer in einem UCRI-System bekommen eine in diesem System eindeutige OID zugewiesen, die sich in einem OID-Adressraum befindet. Dieser OID-Adressraum wird durch eine Wurzeladresse (im weiteren Verlauf als <Root-OID> bezeichnet) festgelegt.
Die Strukturierung des UCRI-OID-Adressierungsraums (UCRI-OID-Nomenklatur) ermöglicht Adressierung von KT über die staatlichen Grenzen hinaus. 

Dabei steht jedem Land frei, ein eigenes Adressierungsschema unterhalb des Landes-OID-Unterbaums zu definieren. Wurzeladresse eines Landes-OID-Unterbaums ist wie folgt definiert:

- \<Root-OID>.1.\<Kennzahl des Landes> (Beispiel: <Root-OID>.1.276 für Deutschland)

Auch jedes Bundesland in Deutschland ist frei, ein eigenes Adressierungsschema unterhalb des Bundesland-OID-Unterbaums zu definieren. Wurzel-Adresse eines Bundesland-OID-Unterbaums ist wie folgt definiert:

- \<Root-OID>.1.276.\<Kennzahl des Bundeslandes> (Beispiel: <Root-OID>.1.276.5 für NRW)

Unterschiedliche Organisationen können auch unterschiedliche Adressierungsschemata verwenden. Wurzel-Adresse eines nPOLGA-OID-Unterbaums ist wie folgt definiert:

- \<Root-OID>.1.276.5.\<Kennzahl von POL/nPOLGA, etc.> (Beispiel: <Root-OID>.1.276.5.1 für nPOLGA in NRW)

Die OID-Adresse der einzelnen Kommunikationsteilnehmer (KT) wird nach dem [amtlichen Gemeindeschlüssel (AGS)](https://de.wikipedia.org/wiki/Amtlicher_Gemeindeschl%C3%BCssel) gebildet:

| #                                                  | Ebene | Beispiel                                                                                                                         |
|----------------------------------------------------|--|----------------------------------------------------------------------------------------------------------------------------------|
| 1                                                  | Root-OID | 1.2.3 - Festlegung in einem geschlossenen UCRI-System                                                                            |
| 2                                                  | Satzart | 1 - Einzeladresse, 2 - Gruppe (aktuell werden in UCRI keine Gruppenadressen unterstützt)                                         |
| 3                                                  | Kennzahl des Landes | 276 - Deutschland nach ISO 3166                                                                                                  |
| 4                                                  | Kennzahl des Bundeslandes | 5 - für NRW nach AGS                                                                                                             |
| 5                                                  | Kennzeichnung von POL/nPOL Gefahrenabwehr (KRITIS, etc.) | Polizeidienststellen, Gesundheitsämter, Veterinärämter, etc. Definition folgt. Annahme für Beispiel: 1 - nPOLGA, 99 - Test/Pilot |
| 6                                                  | Kennzahl des Regierungsbezirks | 1 - Regierungsbezirk Düsseldorf nach AGS                                                                                         |
| 7                                                  | Kennzahl des Landkreises oder der kreisfreien Stadt ("0" bei zentralen Einrichtungen auf der Regierungsbezirksebene) | 58 - Landkreis Mettmann nach AGS                                                                                                 |
| 8                                                  | Gemeinde ("0" bei kreisfreien Städten) | 28 - Stadt Ratingen, Stadtbezirk Ratingen nach AGS                                                                               |
| 9 | Leitstellenmodul | 1 - erstes Leitstellenmodul, fortlaufende Nummerierung von Leitstellenmodulen                                                    |
| 10 | Kommunikationsteilnehmer | 1 - z.B. ELS, fortlaufende Nummerierung von KT                                                                                   |

Beispiel OID Feuerwehr ELS in Ratingen: <Root-OID>.1.276.5.1.1.58.28.1.1


<!-- skip-start -->
---
[Vermittlungsebene](messaging.md)
<!-- skip-end -->