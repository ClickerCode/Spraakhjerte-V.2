# Preposisjonsspill

## Om

Dette er et lite preposisjonsspill for barn som vil lære. Tilgjengelig [her!][spillet]

## Administrasjon

### Legge til mer

-----

**For å legge til en ny bildepakke:**

1. Lag en ny mappe i `Bilder`-mappen med navnet på bildepakken
2. Legg inn bildene som hører til bildepakken i den nye mappen
3. I den nye mappen, så lager du en fil med navnet `oppgaver.json`
4. Filen `oppgaver.json` skal se ut som forklart under [Oppgavefil](#oppgavefil)
5. Navnet på den nye mappen må legges til i `bildepakker.json`
6. Åpne spillet, og prøv den nye bildepakken!

-----

**For å fjerne en bildepakke:**

1. Fjern navnet på mappen med bildepakken fra filen `bildepakker.json`
2. Åpne spillet, og bildepakken er vekk!

### *Oppgavefil

    [{
        "bilde": "bilde 1 sitt filnavn",
        "tekst": "Riktig svar til bilde 1"
    }, {
        "bilde": "bilde 2 sitt filnavn",
        "tekst": "Riktig svar til bilde 2"
    }]

## Utviklere

* [ClickerCode][0]
* [lbrustad (Lasse Brustad)][1]
* [kimkes][2]


[0]: https://github.com/ClickerCode
[1]: https://github.com/lbrustad
[2]: https://github.com/kimkes

[spillet]: https://clickercode.github.io/Spraakhjerte-V.2/?ref=github-repo
