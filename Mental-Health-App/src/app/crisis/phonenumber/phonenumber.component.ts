import { Component, OnInit } from '@angular/core';
import { PhonenumberService } from '../shared/phonenumber.service';
import {NgForm} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.css']
})
export class PhonenumberComponent implements OnInit {

  constructor(public phonenumberService : PhonenumberService, private _location: Location, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    //this.ResetForm();
  }

  onSubmit(phonenumberForm : NgForm) {
    this.phonenumberService.insertPhonenumber(phonenumberForm.value);
    this.router.navigate(['/crisis']);
    this.snackBar.open('Yhteystieto tallennettu', 'Ok');
  }

  returnPage() {
    this._location.back();
  }

  ResetForm(phonenumberForm? : NgForm) {
    if(phonenumberForm != null)
    phonenumberForm.reset();
    this.phonenumberService.selectedPhonenumber = {
      $key : null,
      name : null,
      info : null,
      pNumber : null
    }
  }

}
