import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public savedThemeIndex: string;

  constructor() { }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
  }

  createNewData() {
    console.log('uutta raporttia tekemään');
  }

}
//
