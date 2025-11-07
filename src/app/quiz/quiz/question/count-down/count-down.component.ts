import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { map, takeWhile, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  @Input() seconds = 15;
  public timeout = false;
  @Output() timeChange = new EventEmitter<number>();

  public timeRemaining$: Observable<number>;
  public subscription: Subscription;

  ngOnInit() {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
    this.timeRemaining$ = timer(0, 1000).pipe(
      map(n => (this.seconds - n) * 1000),
      takeWhile(n => n >= 0),
    );
    this.subscription = this.timeRemaining$.subscribe(timeRemaining => {
      this.timeout = timeRemaining === 0;
      this.timeChange.emit(timeRemaining);
    });
  }
}
