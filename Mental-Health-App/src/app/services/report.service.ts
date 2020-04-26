import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Day} from './day';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  /*dayList: AngularFireList<any>;
  selectedDay: Day = new Day();*/

  constructor(private firebase: AngularFireDatabase) { }

  /*getData() {
    this.dayList = this.firebase.list('days');
    return this.dayList;
  }*/
}
