import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anxiety',
  templateUrl: './anxiety.component.html',
  styleUrls: ['./anxiety.component.css']
})
export class AnxietyComponent implements OnInit {
  public savedThemeIndex: string;
  anxietyHelps = ['1. Purista jääpalaa kädessäsi. Se puuduttaa ja kääntää tehokkaasti ajatukset muualle.',
  '2. Mene (jää)kylmään suihkuun tai vuorottele kylmän ja kuuman välillä.',
  '3.  Huuda kurkku suorana tyynyyn tai paikassa, missä kukaan ei sinua kuule, kuten autossa.',
  '4. Tee jotain, johon pystyt uppoamaan. Pelaa peliä, katso elokuvaa, kuuntele musiikkia ym.',
  '5. Tee jotakin käsilläsi: virkkaa, kudo, askartele, väritä aikuisten värityskirjaa ym.',
  '6. Harrasta liikuntaa - lähde kävelylle tai jumppaa olohuoneessa. Venyttele keskittyneesti.',
  '7. Puhu jollekulle: ystävälle, läheiselle, omahoitajalle... Kaikesta ei tarvitse selvitä yksin!',
  '8. Älä taistele ahdistusta vastaan- se taistelee takaisin. Ota vastaan ja rohkaise itseäsi “tämä menee ohi”, “olen ennenkin selvinnyt tästä”, “vaikkei tunnu mukavalta, tämä ei ole vaarallista”.',
  '9. Kiroilu vähentää stressiä. Tee sitä kuitenkin yksin. 😊',
  '10. Jos ei tee mieli käyttää mitään keinoja, listaa senkin hyvä ja huonot puolet. ']

  constructor() { }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
  }

}
