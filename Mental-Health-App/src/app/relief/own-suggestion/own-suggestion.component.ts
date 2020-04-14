import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-own-suggestion',
  templateUrl: './own-suggestion.component.html',
  styleUrls: ['./own-suggestion.component.css']
})
export class OwnSuggestionComponent implements OnInit {
  public savedThemeIndex: string;
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
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
}
