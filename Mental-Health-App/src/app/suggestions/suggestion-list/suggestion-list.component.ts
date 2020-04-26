import { Component, OnInit } from '@angular/core';
import { SuggestionService} from "../shared/suggestion.service";
import {Suggestion} from "../shared/suggestion";
import {element} from "protractor";

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {
  suggestionList : Suggestion[];

  constructor(private suggestionService : SuggestionService) { }

  ngOnInit(): void {
    var x = this.suggestionService.getData();
    x.snapshotChanges().subscribe(item => {
      this.suggestionList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.suggestionList.push(y as Suggestion);
      })
    });
  }

  onDelete(key : string) {
    this.suggestionService.deleteSuggestion(key);
  }

}
