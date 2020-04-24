import { Component, OnInit } from '@angular/core';
import { PhonenumberService } from './shared/phonenumber.service';

@Component({
  selector: 'app-crisis',
  templateUrl: './crisis.component.html',
  styleUrls: ['./crisis.component.css']
})
export class CrisisComponent implements OnInit {
  public savedThemeIndex: string;

  constructor(private phonenumberService : PhonenumberService) { }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
  }


}
