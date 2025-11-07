import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bird } from './model/bird.model';
import { Status } from './model/status.enum';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchCardsService implements OnDestroy {

  private selectedBird$ = new BehaviorSubject<Bird>(null);
  private checkedBirds$ = new BehaviorSubject<string[]>(null);

  constructor() {
    this.checkedBirds$.next(this.getCheckedBirdsFromLocalStorage() || []);
  }

  ngOnDestroy() {
    this.selectedBird$.complete();
    this.selectedBird$ = null;
    this.checkedBirds$.complete();
    this.checkedBirds$ = null;
  }

  public getSelectedBird$(): Observable<Bird> {
    return this.selectedBird$.asObservable();
  }

  public setSelectedBird(bird: Bird) {
    this.selectedBird$.next(bird);
  }

  public getStatusText(status: Status): string {
    switch (status) {
      case Status.Easy:
        return 'Makkelijk te spotten.';
      case Status.Moderate:
        return 'Niet altijd te zien.';
      case Status.Challenge:
        return 'Best een uitdaging.';
      case Status.Hard:
        return 'Moeilijk te zien.';
    }
  }

  public getStatusColor(status: Status): string {
    switch (status) {
      case Status.Easy:
        return '#1E7E2E';
      case Status.Moderate:
        return '#ffc001';
      case Status.Challenge:
        return '#ff7403';
      case Status.Hard:
        return '#BA0718';
    }
  }

  public getCheckedBirdsFromLocalStorage(): string[] {
    return JSON.parse(localStorage.getItem('checkBirds'));
  }

  public saveCheckedBirdsToLocalStorage(id: string) {
    const checkedBirds = this.checkedBirds$.value;
    checkedBirds.push(id);
    localStorage.setItem('checkBirds', JSON.stringify(checkedBirds));
    this.checkedBirds$.next(checkedBirds);
  }

  public isBirdChecked(birdId: string): Observable<boolean> {
    return this.checkedBirds$.asObservable()
      .pipe(map(checkedBirds => checkedBirds.includes(birdId)));
  }
}
