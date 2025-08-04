# UCRI 2

Spezifikation UCRI 2

## Aufbau des Repositories

### api

OpenAPI Spec für CRM

### apps

Unterverzeichnisse für verschiedene UCRI-2-Anwendungen

### staging

Staging-Verzeichnis für die Erstellung von App-Schemata und deren Dokumentation. Für Details bitte die README.md im staging-Ordner konsultieren.

### reference-implementations

Testimplementierungen für UCRI-2-UCRMs und Testclients. Für Details bitte die README.md in den jeweiligen Ordnern konsultieren.

## Erstellung eines neuen Releases

```shell
git tag -a v1.0.4 -m "UCRI2 Release version 1.0.4"
git push --tags
```

Es wird autom. ein neues Release im Draft/Prerlease erstellt.
