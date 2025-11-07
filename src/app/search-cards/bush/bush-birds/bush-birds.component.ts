import { Component, OnInit } from '@angular/core';
import { Bird } from '../../model/bird.model';
import { BUSHBIRDS } from '../../../../assets/data/bush-birds';
import { SearchCardsService } from '../../search-cards.service';

@Component({
  selector: 'app-bush-birds',
  templateUrl: './bush-birds.component.html',
  styleUrls: ['./bush-birds.component.scss'],
  providers: [ SearchCardsService ]
})
export class BushBirdsComponent implements OnInit {
  public birds: Bird[] = BUSHBIRDS;
  public selectedBird: Bird;

  constructor(private searchCardsService: SearchCardsService) { }

  ngOnInit(): void {
    this.getSelectedBird();
  }

  public selectBird(bird: Bird) {
    this.searchCardsService.setSelectedBird(bird);
  }

  private getSelectedBird() {
    this.searchCardsService.getSelectedBird$()
      .subscribe(selectedBird => this.selectedBird = selectedBird);
  }
}
