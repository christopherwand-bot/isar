# ISAR – første nettsideutkast

Norsk, responsiv nettside med tekstlogo, fire BMA ICE-modeller, modellvisninger og tilbudsutkast. Marineblå #0b2537, isblå #b4e8f2, hvit og Arial/systemfonter. Ingen eksterne kodeavhengigheter, analyseverktøy eller informasjonskapsler.

## Kjør

Node 22 eller nyere. Kjør `npm start`, åpne http://localhost:3000. PORT leses fra miljøet. `public/index.html` kan også åpnes direkte i nettleser.

## GitHub og Railway

Opprett et eget repository, for eksempel `isar`, og legg prosjektfilene i roten. I Railway: New Project > Deploy from GitHub repo > velg repository. Dockerfile er inkludert; serveren bruker Railways PORT. Helsekontroll: `/health`. Ingen hemmeligheter kreves for utkastet.

## Status og gjenstående arbeid før lansering

- Dette er en forhåndsvisning. Kildekode: christopherwand-bot/isar. Tilbudsskjemaet sender foreløpig ikke e-post.
- BMAs bildelenker er hentet fra respektive produktsider. Bildene kunne ikke lastes ned eller kontrolleres i arbeidsmiljøet. Nettsiden bruker nå BMAs bildevisningsadresser. Bildet for ICE 36/3500 er bekreftet lastet i nettleseren (540 piksler bredt). De andre bildene og hele layouten er fortsatt ikke visuelt verifisert. Nettsiden viser en ærlig feilmelding hvis bildene ikke lastes. Last ned godkjente bildefiler, kontroller modelltilhørighet, og legg dem lokalt før lansering. Brukeren har bekreftet tillatelse til bruk.
- Skjemaet laster ned forespørselen lokalt som tekst. Det sender eller lagrer ingen opplysninger på serveren. Koble til en reell e-postleverandør med serverbasert validering og misbruksbegrensning før tilbud kan mottas. Ikke vis falsk kvittering.
- Legg til korrekt selskapsnavn, organisasjonsnummer, adresse, e-post, telefon og personverninformasjon.
- Avklar service, levering, garantier, strømkrav og temperaturkapasitet ved relevante utetemperaturer med BMA.
- ISAR er arbeidsnavn. Selskapsnavn, domene og varemerke er ikke klarert.
- Produsentsidene alene dokumenterer ikke produksjonslandet for hele hengeren. Det er derfor ikke påstått «produsert i Tyskland». Tysk leverandør og tyske chassis-komponenter er grunnlaget for merkevareretningen; dokumenter konkrete opprinnelsesutsagn før bruk.
- Fjern noindex først ved godkjent lansering. Ingen påstand om eksklusivt agentur.

## Kilder

Produktdata avlest 22.09.2026:
- https://www.bmatrailer.com/p/tiefkuehlanhaenger-kuehlanhaenger-20-bma-ice-25-1500-237x141x172-1500kg
- https://www.bmatrailer.com/p/tiefkuehlanhaenger-kuehlanhaenger-20-bma-ice-30-3000-287x156x181-3000kg
- https://www.bmatrailer.com/p/tiefkuehlanhaenger-kuehlanhaenger-20-bma-ice-36-3000-361x171x181-3000kg
- https://www.bmatrailer.com/p/tiefkuehlanhaenger-kuehlanhaenger-20-bma-ice-36-3500-361x171x181-3500kg
- https://www.bmatrailer.com/p/fahrtkuehlung-fuer-kuehlanhaenger-und-tiefkuehlanhaenger-bma-kuehli-und-bma-ice

Modellruter bruker URL-fragmenter i dette utkastet. Før SEO-lansering bør egne forhåndsrendrede URL-er opprettes per modell. Pris: alltid på forespørsel. Nyttelast er omtrentlig og påvirkes av ekstrautstyr.
