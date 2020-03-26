import { Component, OnInit } from '@angular/core';
import {DayTrackingItem} from "./items/day-tracking-item";
import {DayTrackingService} from "../services/day-tracking.service";
import {DayTrackingSleepItem} from "./items/day-tracking-sleep-item";
import {DayTrackingExerciseItem} from "./items/day-tracking-exercise-item";
import {DayTrackingWeatherItem} from "./items/day-tracking-weather-item";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-day-tracking',
  templateUrl: './day-tracking.component.html',
  styleUrls: ['./day-tracking.component.css']
})
export class DayTrackingComponent implements OnInit {
  dayTrackingItemsList: Array<DayTrackingItem>;
  dayTrackingSleep: Array<DayTrackingSleepItem>;
  dayTrackingExercise: Array<DayTrackingExerciseItem>;
  dayTrackingWeather: Array<DayTrackingWeatherItem>;


  constructor(private questionService: DayTrackingService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dayTrackingItemsList = this.questionService.getQuestions();
    this.dayTrackingSleep = this.questionService.getSleep();
    this.dayTrackingExercise = this.questionService.getExercise();
    this.dayTrackingWeather = this.questionService.getWeather();
  }

  saveDayTracking(){
    this.snackBar.open('Päivän seuranta tallennettu', 'OK', {duration: 3000});
  }
}
