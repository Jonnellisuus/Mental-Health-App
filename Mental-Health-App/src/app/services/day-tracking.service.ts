import { Injectable } from '@angular/core';
import {DayTrackingItem} from "../day-tracking/items/day-tracking-item";
import {DayTrackingSleepItem} from "../day-tracking/items/day-tracking-sleep-item";
import {DayTrackingExerciseItem} from "../day-tracking/items/day-tracking-exercise-item";
import {DayTrackingEatItem} from "../day-tracking/items/day-tracking-eat";
import {DayTrackingSymptomItem} from "../day-tracking/items/day-tracking-symptom";
import {DayTrackingContactItem} from "../day-tracking/items/day-tracking-contact";
import {DayTrackingHappinessItem} from "../day-tracking/items/day-tracking-happiness";

@Injectable({
  providedIn: 'root'
})
export class DayTrackingService {
  dayTrackingItemsList: Array<DayTrackingItem>;
  dayTrackingSleep: Array<DayTrackingSleepItem>;
  dayTrackingExercise: Array<DayTrackingExerciseItem>;
  dayTrackingEat: Array<DayTrackingEatItem>;
  dayTrackingSymptom: Array<DayTrackingSymptomItem>;
  dayTrackingContact: Array<DayTrackingContactItem>;
  dayTrackingHappiness: Array<DayTrackingHappinessItem>;

  constructor() {
    this.dayTrackingItemsList = [new DayTrackingItem('Minkälainen päivä on ollut tänään? ')];
    this.dayTrackingSleep = [new DayTrackingSleepItem('Miten nukuin viime yönä?')];
    this.dayTrackingExercise = [new DayTrackingExerciseItem('Liikuin tänään (ulkoilu, kotityöt, kaikki liikkumisen lajit)')];
    this.dayTrackingEat = [new DayTrackingEatItem('Söin tänään tai aion vielä syödä /kertaa')];
    this.dayTrackingSymptom = [new DayTrackingSymptomItem('Minulla on ollut oireita')];
    this.dayTrackingContact = [new DayTrackingContactItem('Olin yhteydessä ystäviin, läheisiin tai tukihenkilöihin ')];
    this.dayTrackingHappiness = [new DayTrackingHappinessItem('Tein asioita, jotka tuovat iloa, rytmiä ja merkityksellisyyttä elämääni')];
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

  getEat(): Array<DayTrackingEatItem> {
   return  this.dayTrackingEat;
  }

  getSymptom(): Array<DayTrackingSymptomItem> {
    return this.dayTrackingSymptom;
  }

  getContact(): Array<DayTrackingContactItem> {
    return this.dayTrackingContact;
  }

  getHappiness(): Array<DayTrackingHappinessItem> {
    return this.dayTrackingHappiness;
  }
}
