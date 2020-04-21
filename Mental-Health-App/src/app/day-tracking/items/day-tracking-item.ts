export class DayTrackingItem {
  question: string;
  answer: string;
  answerList: string[];

  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerList = ['Vaikea', 'vaihteleva', 'ihan ok', 'parempi', 'oikein hyvä'];
  }
}
//
