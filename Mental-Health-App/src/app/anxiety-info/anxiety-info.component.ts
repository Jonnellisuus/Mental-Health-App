import { Component, OnInit } from '@angular/core';
// @ts-ignore
import data from '../../assets/data.json';
import {AnxietyInfoService} from "../services/anxiety-info.service";

@Component({
  selector: 'app-anxiety-info',
  templateUrl: './anxiety-info.component.html',
  styleUrls: ['./anxiety-info.component.css']
})
export class AnxietyInfoComponent implements OnInit {
  public savedThemeIndex: string;
  public infos = [];

  constructor(private _anxietyInfoService: AnxietyInfoService) {

  }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
    this._anxietyInfoService.getInfo()
      .subscribe(data => this.infos = data);
  }

  goMieli(): void {
    window.open('https://mieli.fi/fi');
  }

  goMtTalo(): void{
    window.open('https://www.mielenterveystalo.fi/aikuiset/itsehoito-ja-oppaat/itsehoito/tyokaluja_itsehoito/Pages/default.aspx ');
  }

  goInfoAndPractises() {
    window.open('https://www.mielenterveystalo.fi/aikuiset/itsehoito-ja-oppaat/itsehoito/ahdistuksen_omahoito/Pages/default.aspx');
  }

  goKaypa(): void {
    window.open('https://www.kaypahoito.fi/hoi50119#readmore');
  }

  goTerveystalo(): void {
    window.open('https://www.terveyskirjasto.fi/terveyskirjasto/tk.koti?p_artikkeli=dlk00404');
  }
}
