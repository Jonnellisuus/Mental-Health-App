import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../shared/suggestion.service';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Location} from "@angular/common";

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  public savedThemeIndex: string;

  constructor(public suggestionService : SuggestionService, private router : Router, private snackBar : MatSnackBar, private _location: Location) { }

  ngOnInit(): void {
    this.suggestionService.getData();
    this.resetForm();

    this.savedThemeIndex = localStorage.getItem('themeNbr');
  }

  onSubmit(suggestionForm : NgForm) {
    this.suggestionService.insertSuggestion(suggestionForm.value);
    this._location.back();
    this.snackBar.open('Yhteystieto tallennettu', 'Ok', {duration: 3000});
    //this.resetForm(suggestionForm);
  }

  returnPage() {
    this._location.back();
  }

  resetForm(suggestionForm? : NgForm) {
    //suggestionForm.reset();
    this.suggestionService.selectedSuggestion = {
      $key : null,
      name : '',
      info : ''
    }
  }

}
