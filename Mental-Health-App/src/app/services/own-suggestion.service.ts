import { Injectable } from '@angular/core';
import {OwnSuggestionInterface} from "../relief/own-suggestion/own-suggestion-interface";
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class OwnSuggestionService {
  suggestionRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
  }

  getData(){
    this.suggestionRef = this.db.list('Suggestion');
    return this.suggestionRef;
  }

  /* Save data to Firebase */
  addSuggestion(ownSuggestion: OwnSuggestionInterface) {
    this.suggestionRef.push({
      suggestion_Name: ownSuggestion.suggestionName,
      input_Suggestion: ownSuggestion.inputSuggestion
    })
      .catch(error => {
        OwnSuggestionService.errorMsg(error);
      })
  }

  private static errorMsg(error) {
    console.log(error);}
}
