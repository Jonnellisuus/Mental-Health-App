import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from '@angular/common';
import { SuggestionService } from "../shared/suggestion.service";

@Component({
  selector: 'app-own-suggestion',
  templateUrl: './own-suggestion.component.html',
  styleUrls: ['./own-suggestion.component.css']
})
export class OwnSuggestionComponent implements OnInit {
  public savedThemeIndex: string;
  //profileForm: FormGroup;

  constructor(public suggestionService : SuggestionService, public snackBar: MatSnackBar, private _location: Location) { }

  ngOnInit(): void {
    this.ResetForm();
    this.savedThemeIndex = localStorage.getItem('themeNbr');
  }

  onSubmit(suggestionForm : NgForm) {
    console.log('submittiin')
    this.suggestionService.insertSuggestion(suggestionForm.value);
    this._location.back();
    this.snackBar.open('Uusi apukeino tallennettu', 'Ok', {duration: 3000});
  }

  returnPage() {
    this._location.back();
  }

  ResetForm(suggestionForm? : NgForm) {
    if(suggestionForm != null)
      suggestionForm.reset();
    this.suggestionService.selectedSuggestion = {
      $key : null,
      suggestionName : null,
      suggestionInfo : null
    }
  }


  /*ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
    this.profileForm = this.fb.group({
        suggestionName: ['', [Validators.required, Validators.minLength(1)]],
        inputSuggestion: ['', [Validators.required, Validators.minLength(1)]]
      },
    );
  }

  get suggestionName() {
    return this.profileForm.get('suggestionName');
  }

  get inputSuggestion() {
    return this.profileForm.get('inputSuggestion');
  }

  onSave(contactForm: FormGroupDirective) {
    this.snackBar.open('Ehdotus tallennettu', 'OK', {duration: 3000});
  }

  backClicked() {
    this._location.back();
  }*/
}
