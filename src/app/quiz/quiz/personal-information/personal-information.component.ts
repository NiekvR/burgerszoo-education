import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from '../../model/result';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {

  @Input() text: string;
  @Input() comment: string;

  @Output() commentChange = new EventEmitter<string>();

  constructor() { }

  public onChange() {
    this.commentChange.emit(this.comment);
  }
}
