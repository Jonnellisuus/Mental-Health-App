import { Component, OnInit } from '@angular/core';
import {DayTrackingItem} from './items/day-tracking-item';
import {DayTrackingService} from '../services/day-tracking.service';
import {DayTrackingSleepItem} from './items/day-tracking-sleep-item';
import {DayTrackingExerciseItem} from './items/day-tracking-exercise-item';
import {DayTrackingWeatherItem} from './items/day-tracking-weather-item';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {DayService} from '../services/day.service';




@Component({
  selector: 'app-day-tracking',
  templateUrl: './day-tracking.component.html',
  styleUrls: ['./day-tracking.component.css']
})

export class DayTrackingComponent implements OnInit {
  private dayForm: any;

    constructor(private questionService: DayTrackingService,
                public snackBar: MatSnackBar,
                public router: Router,
                private dayApi: DayService
  ) {}

  public savedThemeIndex: string;
  dayTrackingItemsList: Array<DayTrackingItem>;
  dayTrackingSleep: Array<DayTrackingSleepItem>;
  dayTrackingExercise: Array<DayTrackingExerciseItem>;
  dayTrackingWeather: Array<DayTrackingWeatherItem>;

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
    this.dayTrackingItemsList = this.questionService.getQuestions();
    this.dayTrackingSleep = this.questionService.getSleep();
    this.dayTrackingExercise = this.questionService.getExercise();
    this.dayTrackingWeather = this.questionService.getWeather();

  }
GatherDay() {
  const mood = JSON.stringify(document.getElementById('mood').innerText);
  const sleepTime = JSON.stringify(document.getElementById('sleep').innerText);
  const exercise = JSON.stringify(document.getElementById('exercise').innerText);
  const weather = JSON.stringify(document.getElementById('weather').innerText);
  return {mood, sleepTime, exercise, weather};
  }

  saveDayTracking() {
    console.log();
    this.GatherDay();
    // console.log(this.dayForm.values);
    this.dayApi.AddDay(this.GatherDay());
    this.snackBar.open('Päivän seuranta tallennettu', 'OK', {duration: 3000});

  }
}
