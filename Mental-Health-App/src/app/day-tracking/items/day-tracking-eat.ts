export class DayTrackingEatItem {
  question: string;
  answer: string;
  answerListEat: string[];

  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerListEat = ['0', '1-2', '2-3', '4-5', 'enemmän'];
  }
}
