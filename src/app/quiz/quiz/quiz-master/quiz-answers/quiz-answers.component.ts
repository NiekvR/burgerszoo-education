import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Question} from '../../../model/question';
import {QuizAnswer} from '../../../model/quiz-answer';

@Component({
  selector: 'app-quiz-answers',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './quiz-answers.component.html',
  styleUrl: './quiz-answers.component.scss'
})
export class QuizAnswersComponent implements OnChanges {
  @Input() question: Question;
  @Input() answer: QuizAnswer[];
  public totalAnswers: number;
  public results: number[];

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.answer && !!changes.answer.currentValue) {
      this.calculateResults(changes.answer.currentValue);
    }
  }

  private calculateResults(answers: QuizAnswer[]) {
    this.totalAnswers = answers.length;
    this.results = this.question
      .answers
      .map((answer, index) => this.calculateResultForAnswer(index, answers));
  }

  private calculateResultForAnswer(answerId: number, answers: QuizAnswer[]): number {
    return answers
      .filter((answer: QuizAnswer) => answer.answer === answerId + 1).length / answers.length * 100;
  }
}
