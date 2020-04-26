import { Component, OnInit } from '@angular/core';
import { PhonenumberService } from './shared/phonenumber.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-crisis',
  templateUrl: './crisis.component.html',
  styleUrls: ['./crisis.component.css']
})
export class CrisisComponent implements OnInit {
  public savedThemeIndex: string;

  constructor(private phonenumberService : PhonenumberService, private _location: Location) { }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
  }

  goBack() {
    this._location.back();
  }

}
