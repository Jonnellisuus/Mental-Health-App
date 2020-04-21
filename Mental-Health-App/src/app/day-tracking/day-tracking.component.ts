import { Component, OnInit } from '@angular/core';
import {DayTrackingItem} from "./items/day-tracking-item";
import {DayTrackingService} from "../services/day-tracking.service";
import {DayTrackingSleepItem} from "./items/day-tracking-sleep-item";
import {DayTrackingExerciseItem} from "./items/day-tracking-exercise-item";
import {DayTrackingEatItem} from "./items/day-tracking-eat";
import {DayTrackingSymptomItem} from "./items/day-tracking-symptom";
import {DayTrackingContactItem} from "./items/day-tracking-contact";
import {DayTrackingHappinessItem} from "./items/day-tracking-happiness";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-day-tracking',
  templateUrl: './day-tracking.component.html',
  styleUrls: ['./day-tracking.component.css']
})
export class DayTrackingComponent implements OnInit {
  public savedThemeIndex: string;
  dayTrackingItemsList: Array<DayTrackingItem>;
  dayTrackingSleep: Array<DayTrackingSleepItem>;
  dayTrackingExercise: Array<DayTrackingExerciseItem>;
  dayTrackingEat: Array<DayTrackingEatItem>;
  dayTrackingSymptom: Array<DayTrackingSymptomItem>;
  dayTrackingContact: Array<DayTrackingContactItem>;
  dayTrackingHappiness: Array<DayTrackingHappinessItem>;


  constructor(private questionService: DayTrackingService, public snackBar: MatSnackBar, public router: Router) {

  }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
    this.dayTrackingItemsList = this.questionService.getQuestions();
    this.dayTrackingSleep = this.questionService.getSleep();
    this.dayTrackingExercise = this.questionService.getExercise();
    this.dayTrackingEat = this.questionService.getEat();
    this.dayTrackingSymptom = this.questionService.getSymptom();
    this.dayTrackingContact = this.questionService.getContact();
    this.dayTrackingHappiness = this.questionService.getHappiness();
  }

  saveDayTracking(){
    this.snackBar.open('Päivän seuranta tallennettu', 'OK', {duration: 3000});
  }

  getSliderValue(event) {
    console.log(event.target.value);
  }
}
