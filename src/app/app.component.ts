import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'burgerszoo-education';
  public isIntern = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.checkIfResults();
  }

  private checkIfResults() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url.includes('results')))
      .subscribe(isResults => this.isIntern = isResults);
  }
}
