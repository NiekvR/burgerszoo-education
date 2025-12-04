import { Component, OnInit, ViewChild } from '@angular/core';
import { DESERT_ANIMALS, DESERT_ANIMALS_TEST, RAINFOREST } from '../../../assets/data/rainforest-quiz';
import { BUSH_ANIMALS, BUSH_ANIMALS_TEST } from '../../../assets/data/bush-animals-quiz';
import { QuizService } from './quiz.service';
import { Question } from '../model/question';
import { Result } from '../model/result';
import { tap } from 'rxjs/operators';
import { CountDownComponent } from './question/count-down/count-down.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [ QuizService ]
})
export class QuizComponent implements OnInit {
  @ViewChild(CountDownComponent) countDown: CountDownComponent;
  public quiz = RAINFOREST;

  public start = true;
  public timed = true;
  public round: number;
  public question: Question;
  public progress = 0;
  public personalInfo = false;
  public timeout = false;
  public result = {
    answers: {}
  } as Result;


  constructor(private quizService: QuizService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      console.log(param.id);
      if (param.id === '1203' || param.id === '1555') {
        this.quiz = DESERT_ANIMALS;
        this.result.quiz = '1203';
        if (param.id === '1555') {
          this.result.quiz = '1555';
          this.timed = false;
        }
      }
      if (param.id === '1533' || param.id === '1666') {
        this.quiz = BUSH_ANIMALS;
        this.result.quiz = '1533';
        if (param.id === '1666') {
          this.result.quiz = '1666';
          this.timed = false;
        }
      }
      if (param.id === '102' || param.id === '103') {
        this.quiz = BUSH_ANIMALS_TEST;
        this.result.quiz = '102';
        if (param.id === '103') {
          this.result.quiz = '103';
          this.timed = false;
        }
      }
      this.result.total = this.quiz.questions.length;
      this.result.score = 0;
    });
  }

  public startQuiz() {
    this.start = false;
    this.setQuestion();
    this.setResult();
  }

  public next() {
    this.quizService.nextRound();
  }

  public addPersonalInfo() {
    this.personalInfo = true;
    this.quizService.addQuizResults(this.result);
  }

  private setResult() {
    this.quizService.getCurrentIndex()
      .subscribe(answer => this.setResultAnswer(answer));
  }

  private setResultAnswer(answer: number | string) {
    if (typeof answer === 'string' && answer.length === 0 && this.result.answers[ this.round ] !== undefined) {
    } else {
      this.result.answers[ this.round ] = answer;
    }
  }

  private setQuestion() {
    this.quizService.getCurrentRound()
      .pipe(
        tap(() => this.isAnswerCorrectForThisRound() ? this.result.score++ : null),
        tap(round => this.round = round))
      .subscribe(round => {
        this.progress = ((round + 1) / (this.quiz.questions.length + 1)) * 100;
        this.question = this.quiz.questions[ round ];
        if (!this.question) {
          this.quizService.addQuizResults(this.result);
        }
        if (round !== 0 && this.timed) {
          this.countDown.ngOnInit();
        }
      });
  }

  private findIndexForCorrectAnswerOfQuestion(): number | string {
    return this.quiz.questions[ this.round ].answers.findIndex(answer => answer.correct);
  }

  private isAnswerCorrectForThisRound(): boolean {
    const question = this.quiz.questions[ this.round ];
    return this.round != null ?
        question.type === 'text' ?
          this.findIndexForCorrectAnswerOfQuestion() === this.result?.answers[ this.round ] :
            question.answer.toLowerCase().trim() === (this.result?.answers[ this.round ] as string).toLowerCase().trim()
          : false;
  }

  public timeoutChange(timeout: number) {
    this.timeout = timeout === 0;
    if (timeout) {
      this.quizService.setCurrentIndex('');
    }
  }
}
