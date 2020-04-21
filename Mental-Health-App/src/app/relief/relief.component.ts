import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relief',
  templateUrl: './relief.component.html',
  styleUrls: ['./relief.component.css']
})
export class ReliefComponent implements OnInit {
  public savedThemeIndex: string;

  constructor() {
  }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
  }

}

