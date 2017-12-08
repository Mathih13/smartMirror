# SmartMirror Prosjekt
Prosjektet ‘SmartMirror’ er en IoT løsning som sikter på å gi tilleggsfunksjonalitet til vanlige speil. Funksjonaliteten og servicene SmartMirror skal inneholde vil i hovedsak være tjenester tilknyttet nyttig informasjon som en bruker skulle være interessert i, som kan være alt fra nyhetsartikler, sitater, vær og temperatur eller annen sensordata.

SmartMirrors fysiske oppbygning er et toveis-speil montert på en skjerm, som igjen er koblet opp mot en raspberry pi med ulike sensorer, installert med den nødvendige programvaren. Nåværende planlagte tillegg sensorer er bevegelsessensor og kamera. Disse skal sørge for ansiktsgjenkjenning via kamera og batteri- og strømsparing gjennom bevegelsessensor.


## Installasjon

Dette prosjektet installeres ved å først klone repository.

Deretter installerer man via NPM:

```
npm install
```

Og kjører via
```
npm start
```

Alternativ for mer info:

```
npm run dev
```

## License
MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

