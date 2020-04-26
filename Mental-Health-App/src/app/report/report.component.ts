import { Component, OnInit } from '@angular/core';
import {DayService} from "../services/day.service";
import {Day} from "../services/day";
import {Location} from "@angular/common";


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public savedThemeIndex: string;
  dayList: Day[];

  constructor(private dayService: DayService, private _location: Location) { }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
    var x = this.dayService.GetDayList();
    x.snapshotChanges().subscribe(item => {
      this.dayList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.dayList.push(y as Day);
      })
    })
  }

  onDelete(key : string) {
    this.dayService.deleteDayData(key);
  }

  returnPage() {
    this._location.back();
  }

}
