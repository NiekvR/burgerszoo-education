import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { DESERT_ANIMALS, DESERT_ANIMALS_TEST, RAINFOREST } from '../../../../assets/data/rainforest-quiz';
import { Result, ResultAnswer } from '../../model/result';
import { faCheck, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public quiz = RAINFOREST;
  public results: Result[];
  public subResults: Result[];

  faCheck = faCheck;
  faTimes = faTimes;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getAllResults()
      .subscribe(results => {
        this.results = results;
        console.log(results);
        this.subResults = results.filter(result => !result.quiz);
      });
  }

  public getAnswers(result: Result): boolean[] {
    return Object.keys(result.answers)
      .map(questionId => result.answers[ questionId ] === this.findIndexForCorrectAnswerOfQuestion(+questionId));
  }

  public getAnswerIds(result: Result): number[] {
    return Object.keys(result.answers).map(answerId => +answerId);
  }

  public onChange(event: Event) {
    this.subResults = this.results.filter(result => result.quiz === (event.target as HTMLInputElement).value);
    if ((event.target as HTMLInputElement).value === '1203') {
      this.quiz = DESERT_ANIMALS;
    } else if ((event.target as HTMLInputElement).value === '101') {
      this.quiz = DESERT_ANIMALS_TEST;
    } else {
      this.quiz = RAINFOREST;
    }
  }

  private findIndexForCorrectAnswerOfQuestion(round: number): number {
    return this.quiz.questions[ round ].answers.findIndex(answer => answer.correct);
  }

  public isCorrect(answer: string | number, index: number): boolean {
    return this.quiz.questions[ index ].answer.trim().toLowerCase() === (answer as string).trim().toLowerCase();
  }
}
