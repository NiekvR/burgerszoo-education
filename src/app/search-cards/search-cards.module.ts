import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCardComponent } from './search-card/search-card.component';
import { BushBirdsComponent } from './bush/bush-birds/bush-birds.component';
import { CardDetailComponent } from './card-detail/card-detail.component';



@NgModule({
  declarations: [SearchCardComponent, BushBirdsComponent, CardDetailComponent],
  imports: [
    CommonModule
  ]
})
export class SearchCardsModule { }
