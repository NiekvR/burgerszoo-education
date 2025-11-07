import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements OnDestroy {

  private currentRound = new BehaviorSubject<number>(0);
  private currentIndex = new BehaviorSubject<number | string>(null);

  constructor(private db: AngularFirestore) { }

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
    this.db.collection<Result>('result')
      .add(result);
  }

  public getAllResults(): Observable<Result[]> {
    return this.db.collection<Result>('result').snapshotChanges().pipe(
      map(list => list.map(a => {
        const item = a.payload.doc.data() as Result;
        item.id = a.payload.doc.id;
        return item;
      })));
  }
}
