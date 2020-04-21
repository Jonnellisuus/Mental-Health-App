export class DayTrackingSymptomItem {
  question: string;
  answer: string;
  answerListSymptom: string[];

  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerListSymptom = ['Koko päivän', 'suurimman osan päivästä', 'välillä', 'hetken', 'ei ollenkaan'];
  }
}
