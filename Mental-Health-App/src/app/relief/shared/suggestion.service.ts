import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Suggestion} from "./suggestion";

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  suggestionsList: AngularFireList<any>;
  selectedSuggestion: Suggestion = new Suggestion();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.suggestionsList = this.firebase.list('suggestions');
    return this.suggestionsList;
  }

  insertSuggestion(suggestion : Suggestion) {
    this.suggestionsList.push({
      suggestionName: suggestion.suggestionName,
      suggestionInfo: suggestion.suggestionInfo
    });
  }

  /*deleteSuggestion($key : string){
    this.suggestionsList.remove($key);
  }*/
}
