import { Component, OnInit } from '@angular/core';
import { SuggestionService } from './shared/suggestion.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  public savedThemeIndex: string;

  constructor(private suggestionService : SuggestionService) { }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
  }

}
