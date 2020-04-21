export class DayTrackingContactItem {
  question: string;
  answer: string;
  answerListContact: string[];

  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerListContact = ['En lainkaan, en halunnut', 'ajattelin olla', 'hetken aikaa', 'useita kertoja', 'koko päivän'];
  }
}
