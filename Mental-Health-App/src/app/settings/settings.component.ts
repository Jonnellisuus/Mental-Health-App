import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public selectedTheme;
  public themeIndex: string;
  constructor() {

  }

  ngOnInit() {
    this.themeIndex = localStorage.getItem('themeNbr');
    console.log(this.themeIndex + ' teema valittuna');

    /*if (this.themeIndex == 'themeNbr1') {
      console.log("laitetaan ykkös teema");
    }
    else if (this.themeIndex == 'themeNbr2') {
      console.log("Tässä toka teema eli koira");
    }
    else if (this.themeIndex == 'themeNbr3') {
      console.log("viimenen eli kolmas teema");
    }
    else {
      console.log("ei pitä tulla tässä vaiheessa");
    }*/
  }

  changeTheme(themeNbr: string) {
    localStorage.clear();
    localStorage.setItem('themeNbr', themeNbr)
    this.themeIndex = localStorage.getItem('themeNbr');
    //console.log("Ja uusi teema on " + themeNbr);

    return this.selectedTheme;
  }

}
