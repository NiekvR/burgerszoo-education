import {inject, Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  updateDoc,
  getDoc,
  doc,
  docData,
  setDoc,
  where,
  query,
  collectionData
} from '@angular/fire/firestore';
import {Result} from '../model/result';
import {from, Observable, switchMap} from 'rxjs';
import {PublicQuiz} from '../model/public-quiz';
import {map} from 'rxjs/operators';
import {DocumentData} from '@angular/fire/compat/firestore';
import {get} from '@angular/fire/database';
import {QuizAnswer} from '../model/quiz-answer';

@Injectable({
  providedIn: 'root'
})
export class QuizMasterService {
  private firestore = inject(Firestore);
  private path = 'public-quiz';
  private publicQuizCollection = collection(this.firestore, this.path);
  private quizAnswersCollection = collection(this.firestore, 'quiz-answers');

  constructor() { }

  public createQuiz(publicQuiz: PublicQuiz): Observable<string> {
    return from(addDoc(this.publicQuizCollection, publicQuiz))
      .pipe(
        switchMap(result => from(getDoc(result))),
        map(doc => doc.id));
  }

  public getQuizUpdates(pulicQuizId: string) {
    const docRef = doc(this.firestore, `${this.path}/${pulicQuizId}`);
    return docData(docRef);
  }

  public nextQuestion(id: string, publicQuiz: PublicQuiz): void {
    const docRef = doc(this.firestore, `${this.path}/${id}`);
    updateDoc(docRef, { question: publicQuiz.question + 1 });
  }

  public sendAnswer(answer: QuizAnswer): Observable<any> {
    return from(addDoc(this.quizAnswersCollection, answer));
  }

  public getAnswers(id: string, question: number): Observable<any[]> {
    const q = query(
      this.quizAnswersCollection,
      where('quizId', '==', id),
      where('question', '==', question)
    );

    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

  public getCompleteQuizAnswers(id: string): Observable<any[]> {
    const q = query(
      this.quizAnswersCollection,
      where('quizId', '==', id)
    );

    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }
}
