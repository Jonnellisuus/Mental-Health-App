export class DayTrackingSleepItem {
  question: string;
  answer: string;
  answerListSleep: string[];

  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerListSleep = ['Et ole vielä vastannut', 'Tunnin', '2 tuntia', '3 tuntia', '4 tuntia'];
  }
}
