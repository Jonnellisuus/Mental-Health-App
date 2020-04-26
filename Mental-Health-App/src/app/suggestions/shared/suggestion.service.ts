import { Injectable } from '@angular/core';
import { Suggestion} from "./suggestion";
import { AngularFireDatabase, AngularFireList} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  suggestionList: AngularFireList<any>;
  selectedSuggestion: Suggestion = new Suggestion();

  constructor(private firebase : AngularFireDatabase) { }

  getData() {
    this.suggestionList = this.firebase.list('suggestions');
    return this.suggestionList;
  }

  insertSuggestion(suggestion : Suggestion) {
    this.suggestionList.push({
      name : suggestion.name,
      info : suggestion.info
    });
  }

  deleteSuggestion($key : string) {
    this.suggestionList.remove($key);
  }
}
