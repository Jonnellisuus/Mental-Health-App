import { Component, OnInit } from '@angular/core';
import { SuggestionService} from "../shared/suggestion.service";
import {Suggestion} from "../shared/suggestion";
import {element} from "protractor";
import {MatDialog} from "@angular/material/dialog";
import {SuggestionDialogService} from "../shared/suggestion-dialog.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {
  public savedThemeIndex: string;
  suggestionList : Suggestion[];

  constructor(private suggestionService : SuggestionService,
              private dialog : MatDialog, private suggestionDialogService : SuggestionDialogService, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
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
    //this.suggestionService.deleteSuggestion(key);
    this.suggestionDialogService.openSuggestionDialog()
      .afterClosed().subscribe(res => {
      //console.log(res);
      if(res == true) {
        this.suggestionService.deleteSuggestion(key);
        this.snackBar.open('Keino poistettu', 'Ok', {duration: 3000});
      }
    })
  }

}
