import { Component, Input, OnInit } from '@angular/core';
import { Bird } from '../model/bird.model';
import { SearchCardsService } from '../search-cards.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  @Input() cardData: Bird;
  public statusText: string;
  public statusColor: string;
  public checked = false;

  constructor(private searchCardsService: SearchCardsService) { }

  ngOnInit(): void {
    this.statusText = this.searchCardsService.getStatusText(this.cardData.status);
    this.statusColor = this.searchCardsService.getStatusColor(this.cardData.status);
    this.isBirdChecked();
  }

  public back() {
    this.searchCardsService.setSelectedBird(null);
  }

  public checkBird() {
    this.searchCardsService.saveCheckedBirdsToLocalStorage(this.cardData.id);
  }

  private isBirdChecked() {
    this.searchCardsService.isBirdChecked(this.cardData.id)
      .subscribe(checked => this.checked = checked);
  }
}
