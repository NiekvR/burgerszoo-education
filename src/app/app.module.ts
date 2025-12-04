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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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
    SearchCardsModule,
    provideFirebaseApp(() => initializeApp(
      {
        apiKey: "AIzaSyCVcRYJzRm0TIrlTof1Ye55tXPiteBGNgU",
        authDomain: "burgerszoo--scavenger-hunt.firebaseapp.com",
        projectId: "burgerszoo--scavenger-hunt",
        storageBucket: "burgerszoo--scavenger-hunt.firebasestorage.app",
        messagingSenderId: "500088961747",
        appId: "1:500088961747:web:90c821f5d4cd9026767226"
      }
    )),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
