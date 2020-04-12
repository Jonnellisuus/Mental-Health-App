import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relief-out',
  templateUrl: './relief-out.component.html',
  styleUrls: ['./relief-out.component.css']
})
export class ReliefOutComponent implements OnInit {
  public savedThemeIndex: string;

  constructor() { }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
  }

}
