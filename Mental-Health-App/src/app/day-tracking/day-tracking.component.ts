import { Component, OnInit } from '@angular/core';

import {DayTrackingItem} from './items/day-tracking-item';
import {DayTrackingService} from '../services/day-tracking.service';
import {DayTrackingSleepItem} from './items/day-tracking-sleep-item';
import {DayTrackingExerciseItem} from './items/day-tracking-exercise-item';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {DayService} from '../services/day.service';

import {DayTrackingEatItem} from './items/day-tracking-eat';
import {DayTrackingSymptomItem} from './items/day-tracking-symptom';
import {DayTrackingContactItem} from './items/day-tracking-contact';
import {DayTrackingHappinessItem} from './items/day-tracking-happiness';




@Component({
  selector: 'app-day-tracking',
  templateUrl: './day-tracking.component.html',
  styleUrls: ['./day-tracking.component.css']
})

export class DayTrackingComponent implements OnInit {

    constructor(private questionService: DayTrackingService,
                public snackBar: MatSnackBar,
                public router: Router,
                private dayApi: DayService
  ) {}

  public savedThemeIndex: string;
  dayTrackingItemsList: Array<DayTrackingItem>;
  dayTrackingSleep: Array<DayTrackingSleepItem>;
  dayTrackingExercise: Array<DayTrackingExerciseItem>;
  dayTrackingEat: Array<DayTrackingEatItem>;
  dayTrackingSymptom: Array<DayTrackingSymptomItem>;
  dayTrackingContact: Array<DayTrackingContactItem>;
  dayTrackingHappiness: Array<DayTrackingHappinessItem>;


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
GatherDay() {
  const mood = JSON.stringify(document.getElementById('mood').innerText);
  const sleepTime = JSON.stringify(document.getElementById('sleepTime').innerText);
  const exercise = JSON.stringify(document.getElementById('exercise').innerText);
  const eat = JSON.stringify(document.getElementById('eat').innerText);
  const symptom = JSON.stringify(document.getElementById('symptom').innerText);
  const contact = JSON.stringify(document.getElementById('contact').innerText);
  const happiness = JSON.stringify(document.getElementById('happiness').innerText);


  return {mood, sleepTime, exercise, eat, symptom, contact, happiness};
  }

  saveDayTracking() {
    this.dayApi.AddDay(this.GatherDay());
    this.snackBar.open('Päivän seuranta tallennettu', 'OK', {duration: 3000});

  }

}
