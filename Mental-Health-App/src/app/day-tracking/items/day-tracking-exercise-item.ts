export class DayTrackingExerciseItem {
  question: string;
  answer: string;
  answerListExercise: string[];

  constructor(question: string) {
    this.question = question;
    this.answer = '';
    this.answerListExercise = ['En lainkaan', 'kevyesti', 'reippaasti', 'hikoillen', 'liikaa, uuvuksiin asti'];
  }
}
//
