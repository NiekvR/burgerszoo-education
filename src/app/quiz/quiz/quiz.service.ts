import {inject, Injectable, OnDestroy} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Result } from '../model/result';
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class QuizService implements OnDestroy {
  private firestore = inject(Firestore);

  private resultsCollection = collection(this.firestore, 'result');

  private currentRound = new BehaviorSubject<number>(0);
  private currentIndex = new BehaviorSubject<number | string>(null);

  constructor() { }

  ngOnDestroy() {
    this.currentRound.complete();
    this.currentRound = null;
    this.currentIndex.complete();
    this.currentIndex = null;
  }

  public getCurrentRound(): Observable<number> {
    return this.currentRound.asObservable().pipe(filter(currentRound => currentRound != null));
  }

  public nextRound() {
    let round = this.currentRound.getValue();
    this.setCurrentRound(++round);
  }

  private setCurrentRound(round: number) {
    this.currentRound.next(round);
    this.currentIndex.next(null);
  }

  public getCurrentIndex(): Observable<number | string> {
    return this.currentIndex.asObservable().pipe(filter(currentIndex => currentIndex != null));
  }

  public setCurrentIndex(index: number | string, multiple: boolean = false) {
    this.currentIndex.next(index);
  }



  public addQuizResults(result: Result) {
    return addDoc(this.resultsCollection, result);
  }

  public getAllResults(): Observable<Result[]> {
    return collectionData(this.resultsCollection) as Observable<Result[]>
  }
}
