import { Injectable } from '@angular/core';
import {DayTrackingItem} from "../day-tracking/items/day-tracking-item";
import {DayTrackingSleepItem} from "../day-tracking/items/day-tracking-sleep-item";
import {DayTrackingExerciseItem} from "../day-tracking/items/day-tracking-exercise-item";
import {DayTrackingWeatherItem} from "../day-tracking/items/day-tracking-weather-item";

@Injectable({
  providedIn: 'root'
})
export class DayTrackingService {
  dayTrackingItemsList: Array<DayTrackingItem>;
  dayTrackingSleep: Array<DayTrackingSleepItem>;
  dayTrackingExercise: Array<DayTrackingExerciseItem>;
  dayTrackingWeather: Array<DayTrackingWeatherItem>;

  constructor() {
    this.dayTrackingItemsList = [new DayTrackingItem('Millainen päivä sinulla on ollut tänään?')];
    this.dayTrackingSleep = [new DayTrackingSleepItem('Monta tuntia nukuit?')];
    this.dayTrackingExercise = [new DayTrackingExerciseItem('Montako tuntia liikuit?')];
    this.dayTrackingWeather = [new DayTrackingWeatherItem('Millainen sää on tänään?')];
  }


  getQuestions(): Array<DayTrackingItem> {
    return this.dayTrackingItemsList;
  }

  getSleep(): Array<DayTrackingSleepItem> {
    return this.dayTrackingSleep;
  }

  getExercise(): Array<DayTrackingExerciseItem> {
    return this.dayTrackingExercise;
  }

  getWeather(): Array<DayTrackingWeatherItem> {
    return this.dayTrackingWeather;
  }

}
//
