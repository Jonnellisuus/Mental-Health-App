export class DayTrackingItem {
  question: string;
  answer: string;
  answerList: string[];

  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerList = ['Et ole vastannut', 'Mahtava', 'Hyvä', 'Huono', 'Kamala'];
  }
}
//
