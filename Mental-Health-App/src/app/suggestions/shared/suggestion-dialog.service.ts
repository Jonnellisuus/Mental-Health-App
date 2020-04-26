import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDeleteDialogComponent} from "../../mat-delete-dialog/mat-delete-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class SuggestionDialogService {

  constructor(private dialog : MatDialog) { }

  openSuggestionDialog() {
    return this.dialog.open(MatDeleteDialogComponent, {
      width: '60%',
      disableClose: true
    });
  }
}
