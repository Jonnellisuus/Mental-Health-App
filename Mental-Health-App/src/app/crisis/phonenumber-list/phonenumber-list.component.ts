import {Component, OnInit} from '@angular/core';
import {PhonenumberService} from '../shared/phonenumber.service';
import {Phonenumber} from '../shared/phonenumber'
import {DialogService} from "../shared/dialog.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-phonenumber-list',
  templateUrl: './phonenumber-list.component.html',
  styleUrls: ['./phonenumber-list.component.css']
})
export class PhonenumberListComponent implements OnInit {
  phonenumberList: Phonenumber[];

  constructor(private phonenumberService: PhonenumberService, private dialogService: DialogService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    var x = this.phonenumberService.getData();
    x.snapshotChanges().subscribe(item => {
      this.phonenumberList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.phonenumberList.push(y as Phonenumber);
      });
    });
  }

  onDelete(key : string) {
    //this.phonenumberService.deletePhonenumber(key);
    this.dialogService.openDeleteDialog().afterClosed().subscribe(res => {
      if(res == true){
        this.phonenumberService.deletePhonenumber(key);
        this.snackBar.open('Yhteystieto poistettu', 'Ok', {duration: 3000});
      }
    })
  }

  toCrisisPhone(): void {
    window.open('https://mieli.fi/fi/tukea-ja-apua/kriisipuhelin-keskusteluapua-numerossa-09-2525-0111');
  }

  toSekaisin(): void {
    window.open('https://sekasin247.fi/#sekasin-2');
  }

}
