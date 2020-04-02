export class DayTrackingWeatherItem {
  question: string;
  answer: string;
  answerListWeather: string[];

  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerListWeather = ['Et ole vastannut', 'Aurinkoinen', 'pilvinen', 'tuulinen', 'sateinen'];
  }
}
//
