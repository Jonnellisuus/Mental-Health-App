export class DayTrackingExerciseItem {
  question: string;
  answer: string;
  answerListExercise: string[];

  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerListExercise = ['Et ole vastannut', 'Tunnin', '2 tuntia', '3 tuntia', '4 tuntia'];
  }
}
//
