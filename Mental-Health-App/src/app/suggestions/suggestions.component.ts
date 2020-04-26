import { Component, OnInit } from '@angular/core';
import { SuggestionService } from './shared/suggestion.service';
import {Location} from "@angular/common";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  public savedThemeIndex: string;

  constructor(private suggestionService : SuggestionService, private _location: Location) { }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
  }

  returnPage() {
    this._location.back();
  }

}
