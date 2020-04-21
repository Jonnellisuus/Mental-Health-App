import { Injectable } from '@angular/core';
import {Day} from './day';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class DayService {
  daysRef: AngularFireList<any>;
  dayRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.daysRef = db.list('days');
  }

  /*create day*/
  AddDay(day: Day) { console.log(this.daysRef),
      this.daysRef.push({
        mood: day.mood,
        sleep_time: day.sleep_time,
        weather: day.weather,
        exercise: day.exercise
      })
        .catch(error => {
          this.errorMgmt(error);
        })
    }
    GetDay(id: string){
      this.dayRef = this.db.object('raport-list' + id);

    }
    GetDayList(){
      this.daysRef = this.db.list('raport-list');
      return this.daysRef;
    }

    UpdateDay(id, day: Day) {
      this.dayRef.update({
        mood: day.mood,
        sleep: day.sleep_time,
        weather: day.weather,
        excercise: day.exercise
      })
        .catch(error => {
          this.errorMgmt(error);
        })
    }
    DeleteDay(id: string){
      this.dayRef = this.db.object('raport-list' + id);
      this.dayRef.remove()
        .catch(error =>{
          this.errorMgmt(error);
        })
    }

    //err management
  private errorMgmt(error) {
      console.log(error);}


}
