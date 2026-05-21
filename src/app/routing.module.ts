import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { ResultsComponent } from './quiz/quiz/results/results.component';
import { BushBirdsComponent } from './search-cards/bush/bush-birds/bush-birds.component';
import {QuizMasterComponent} from './quiz/quiz/quiz-master/quiz-master.component';
import {ControlledQuizComponent} from './quiz/quiz/quiz-master/controlled-quiz/controlled-quiz.component';
import {GenerateQuizComponent} from './quiz/quiz/quiz-master/generate-quiz/generate-quiz.component'; // CLI imports router

const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'search/bush/birds', component: BushBirdsComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'quiz-master', component: GenerateQuizComponent },
  { path: 'quiz-master/:id', component: QuizMasterComponent },
  { path: 'quiz/public/:id', component: ControlledQuizComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
