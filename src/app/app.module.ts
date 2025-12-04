import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './routing.module';
import { QuizModule } from './quiz/quiz.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchCardsModule } from './search-cards/search-cards.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    QuizModule,
    FontAwesomeModule,
    SearchCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
