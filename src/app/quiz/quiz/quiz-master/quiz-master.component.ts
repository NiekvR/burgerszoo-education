import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {PublicQuiz} from '../../model/public-quiz';
import {QuizMasterService} from '../quiz-master.service';
import {NgIf} from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import {delay, of, switchMap, take} from 'rxjs';
import {QuizModule} from '../../quiz.module';
import {Question} from '../../model/question';
import {ParkJune2026} from '../../../../assets/data/controlled-quiz/park-june-2026';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {QuizAnswersComponent} from './quiz-answers/quiz-answers.component';
import {QuizAnswer} from '../../model/quiz-answer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz-master',
  standalone: true,
  imports: [
    NgIf,
    QRCodeModule,
    QuizModule,
    QuizAnswersComponent
  ],
  templateUrl: './quiz-master.component.html',
  styleUrl: './quiz-master.component.scss'
})
export class QuizMasterComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  public quiz = ParkJune2026;
  public quizId: string;
  public publicQuiz: PublicQuiz;
  public link: string;
  public go = false;
  public question: Question;
  public showTimer = true;
  public answers: QuizAnswer[];

  constructor(public quizMasterService: QuizMasterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.quizId = param.id;
      this.link = `https://burgers-zoo-academy.web.app/quiz/public/${param.id}`;
      this.quizMasterService.getQuizUpdates(param.id)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(publicQuiz => {
          this.publicQuiz = publicQuiz as PublicQuiz;
          this.question = this.quiz.questions[publicQuiz.question - 1];
        });
    });
  }

  public next() {
    this.quizMasterService.nextQuestion(this.quizId, this.publicQuiz);
    this.question = null;
    this.answers = null;
    this.showTimer = true;
  }

  public start() {
    this.go = true;
    this.quizMasterService.nextQuestion(this.quizId, this.publicQuiz);
  }

  public timeoutChange(timeout: number) {
    if (timeout === 0) {
      this.showTimer = false;
      of('Hello')
        .pipe(
          delay(3000),
          switchMap(() => this.quizMasterService.getAnswers(this.quizId, this.publicQuiz.question))
        ).subscribe(answers => this.answers = answers);
    }
  }

  public downloadData() {
    this.quizMasterService.getCompleteQuizAnswers(this.quizId)
      .pipe(take(1))
      .subscribe(answers => this.downloadCsv(answers));
  }

  private downloadCsv(data: any[]) {

    const headers = Object.keys(data[0]);

    const csv = [
      headers.join(','),
      ...data.map(row =>
        headers.map(h => row[h]).join(',')
      )
    ].join('\n');

    const blob = new Blob(
      [csv],
      { type: 'text/csv' }
    );

    const a = document.createElement('a');

    a.href = URL.createObjectURL(blob);

    a.download = 'export.csv';

    a.click();
  }
}
