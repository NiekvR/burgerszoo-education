import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Question } from '../../model/question';
import { OpenAnswerComponent } from './open-answer/open-answer.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnChanges {
  @ViewChild(OpenAnswerComponent) openAnswer: OpenAnswerComponent;
  @ViewChild('audio') audio: ElementRef;
  @Input() question: Question;
  @Input() answer: number | string;
  @Input() result = false;
  public timeout = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.question.firstChange && !!changes.question.currentValue) {
      this.openAnswer.answer = !!this.answer ? this.answer as string : '';
      if (!!changes.question.currentValue.sound) {
        this.audio.nativeElement.load();
      }
    }
  }
}
