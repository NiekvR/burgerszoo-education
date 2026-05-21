import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {SharedModule} from '../../../../shared/shared.module';
import {QuizModule} from '../../../quiz.module';
import {BUSH_ANIMALS} from '../../../../../assets/data/bush-animals-quiz';
import {Question} from '../../../model/question';
import {ActivatedRoute} from '@angular/router';
import {PublicQuiz} from '../../../model/public-quiz';
import {QuizMasterService} from '../../quiz-master.service';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {ParkJune2026} from '../../../../../assets/data/controlled-quiz/park-june-2026';
import {QuizService} from '../../quiz.service';
import {DomSanitizer} from '@angular/platform-browser';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EcodisplaysComponent} from './ecodisplays/ecodisplays.component';

@Component({
  selector: 'app-controlled-quiz',
  standalone: true,
  imports: [
    NgIf,
    SharedModule,
    QuizModule,
    MatIconModule,
    EcodisplaysComponent
  ],
  templateUrl: './controlled-quiz.component.html',
  styleUrl: './controlled-quiz.component.scss'
})
export class ControlledQuizComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  public quiz = ParkJune2026;
  public quizId: string;

  public publicQuiz: PublicQuiz;
  public question: Question;
  public progress = 0;
  public timeout = false;
  public answer: number;
  public selectedEcodisplays: { string: boolean };

  constructor(private activatedRoute: ActivatedRoute, private quizMasterService: QuizMasterService,
              private quizService: QuizService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon(
      'butterfly',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/svg/butterfly_blue.svg'
      )
    );
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.quizId = param.id;
      this.quizMasterService.getQuizUpdates(param.id)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(publicQuiz => {
          this.quizService.setCurrentIndex(null);
          this.publicQuiz = publicQuiz as PublicQuiz;
          this.question = this.quiz.questions[publicQuiz.question - 1];
          this.progress = this.publicQuiz.question / this.quiz.questions.length * 100;
        });
    });

    this.quizService.getCurrentIndex()
      .subscribe(index => this.answer = index as number);
  }

  public timeoutChange(timeout: number) {
    this.timeout = timeout === 0;
    if (this.timeout) {
      this.question = null;
    }
  }

  public sendAnswer() {
    this.quizMasterService.sendAnswer({
      isSkilled: this.selectedEcodisplays[ this.question.ecodisplay ],
      quizId: this.quizId,
      question: this.publicQuiz.question,
      answer: this.answer
    }).subscribe(answer => this.question = null);
  }

  public setSelectedEcodisplays(selectedEcodisplays: { string: boolean}) {
    this.selectedEcodisplays = selectedEcodisplays;
  }

}
