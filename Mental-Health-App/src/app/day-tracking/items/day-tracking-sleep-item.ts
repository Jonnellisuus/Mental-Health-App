export class DayTrackingSleepItem {
  question: string;
  answer: string;
  answerListSleep: string[];

  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerListSleep = ['En ollenkaan', 'pätkittäin', 'riittävästi', ' hyvin', 'liikaa'];
  }
}
//
