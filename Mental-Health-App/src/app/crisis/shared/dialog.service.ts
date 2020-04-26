import { Injectable } from '@angular/core';
import {MatDeleteDialogComponent} from "../../mat-delete-dialog/mat-delete-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDeleteDialog() {
    return this.dialog.open(MatDeleteDialogComponent, {
      width: '60%',
      disableClose: true
    });
  }
}
