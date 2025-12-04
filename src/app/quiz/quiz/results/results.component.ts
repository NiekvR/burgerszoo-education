import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { DESERT_ANIMALS, DESERT_ANIMALS_TEST, RAINFOREST } from '../../../../assets/data/rainforest-quiz';
import { Result, ResultAnswer } from '../../model/result';
import { faCheck, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';
import {BUSH_ANIMALS, BUSH_ANIMALS_TEST} from '../../../../assets/data/bush-animals-quiz';

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
    console.log((event.target as HTMLInputElement).value);
    this.subResults = this.results.filter(result => {
      if ((event.target as HTMLInputElement).value === '1203' ||
        (event.target as HTMLInputElement).value === '1555' ||
        (event.target as HTMLInputElement).value === '101') {
        return result.quiz === (event.target as HTMLInputElement).value;
      } else if ((event.target as HTMLInputElement).value === '1533') {
        return result.quiz === (event.target as HTMLInputElement).value || result.quiz === '1666';
      } else if ((event.target as HTMLInputElement).value === '102') {
        return result.quiz === (event.target as HTMLInputElement).value || result.quiz === '103';
      }
    });
    if ((event.target as HTMLInputElement).value === '1203' || (event.target as HTMLInputElement).value === '1555') {
      this.quiz = DESERT_ANIMALS;
    } else if ((event.target as HTMLInputElement).value === '101') {
      this.quiz = DESERT_ANIMALS_TEST;
    } else if ((event.target as HTMLInputElement).value === '1533') {
      this.quiz = BUSH_ANIMALS;
    } else if ((event.target as HTMLInputElement).value === '102') {
      this.quiz = BUSH_ANIMALS_TEST;
    } else {
      this.quiz = RAINFOREST;
    }
    console.log(this.results.filter(result => result.quiz !== '1555' && result.quiz !== '1203' && result.quiz !== '101'));
  }

  private findIndexForCorrectAnswerOfQuestion(round: number): number {
    return this.quiz.questions[ round ].answers.findIndex(answer => answer.correct);
  }

  public isCorrect(answer: string | number, index: number): boolean {
    return this.quiz.questions[ index ].answer.trim().toLowerCase() === (answer as string).trim().toLowerCase();
  }
}
