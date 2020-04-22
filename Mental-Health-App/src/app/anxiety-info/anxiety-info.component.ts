import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anxiety-info',
  templateUrl: './anxiety-info.component.html',
  styleUrls: ['./anxiety-info.component.css']
})
export class AnxietyInfoComponent implements OnInit {
  public savedThemeIndex: string;

  constructor() { }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
  }

}
