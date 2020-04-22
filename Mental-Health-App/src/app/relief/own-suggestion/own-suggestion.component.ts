import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Location} from '@angular/common';
import {OwnSuggestionService} from "../../services/own-suggestion.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-own-suggestion',
  templateUrl: './own-suggestion.component.html',
  styleUrls: ['./own-suggestion.component.css']
})
export class OwnSuggestionComponent implements OnInit {
  public savedThemeIndex: string;
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar, private _location: Location,
             private suggestionService: OwnSuggestionService) { }

  ngOnInit(): void {
    this.suggestionService.getData();
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

  onSave(suggestionForm: NgForm) {
    this.suggestionService.addSuggestion(suggestionForm.value); /* Save data to Firebase */
    this.snackBar.open('Ehdotus tallennettu', 'OK', {duration: 3000});
  }

  backClicked() {
    this._location.back();
  }
}
