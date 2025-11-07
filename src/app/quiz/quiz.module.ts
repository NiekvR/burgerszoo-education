import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';
import { SharedModule } from '../shared/shared.module';
import { QuestionComponent } from './quiz/question/question.component';
import { AnswerComponent } from './quiz/question/answer/answer.component';
import { PersonalInformationComponent } from './quiz/personal-information/personal-information.component';
import { ResultsComponent } from './quiz/results/results.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OpenAnswerComponent } from './quiz/question/open-answer/open-answer.component';
import { CountDownComponent } from './quiz/question/count-down/count-down.component';



@NgModule({
  declarations: [
    QuizComponent,
    QuestionComponent,
    AnswerComponent,
    PersonalInformationComponent,
    ResultsComponent,
    OpenAnswerComponent,
    CountDownComponent
  ],
  imports: [
    SharedModule,
    FontAwesomeModule
  ]
})
export class QuizModule { }
