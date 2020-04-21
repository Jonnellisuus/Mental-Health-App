export class DayTrackingHappinessItem {
  question: string;
  answer: string;
  answerListHappiness: string[];

  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerListHappiness = ['En lainkaan', 'yritin, en jaksanut', 'hetken', 'paljon', 'koko päivän'];
  }
}
