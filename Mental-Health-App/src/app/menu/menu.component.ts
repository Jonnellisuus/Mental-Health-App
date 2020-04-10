import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public savedIndex: string;

  constructor() { }

  ngOnInit(): void {
    this.savedIndex = localStorage.getItem('themeNbr');
    if (this.savedIndex == 'themeNbr1') {
      console.log("tulos mänöö seuraavaa");
    }
  }

  createNewData() {
    console.log('uutta raporttia tekemään');
  }

}
//
