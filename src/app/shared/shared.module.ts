import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProgressComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ProgressComponent
  ]
})
export class SharedModule { }
