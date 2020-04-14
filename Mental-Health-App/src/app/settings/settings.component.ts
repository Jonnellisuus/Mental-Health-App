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
    //console.log(this.themeIndex + ' teema valittuna');
  }

  changeTheme(themeNbr: string) {
    localStorage.clear();
    localStorage.setItem('themeNbr', themeNbr);
    this.themeIndex = localStorage.getItem('themeNbr');
    //this.refreshPage();
    //console.log("Ja uusi teema on " + themeNbr);
    return this.selectedTheme;
  }

  refreshPage() {
    window.location.reload();
  }

}
