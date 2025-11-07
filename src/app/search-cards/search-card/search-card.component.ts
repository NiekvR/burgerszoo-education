import { Component, Input, OnInit } from '@angular/core';
import { Bird } from '../model/bird.model';
import { SearchCardsService } from '../search-cards.service';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {

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

  private isBirdChecked() {
    this.searchCardsService.isBirdChecked(this.cardData.id)
      .subscribe(checked => this.checked = checked);
  }

}
