import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Answer } from '../../../model/answer';
import { map } from 'rxjs/operators';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer;
  @Input() left = false;
  @Input() index: number;
  @HostBinding('class.tile') tile = false;

  public selected = false;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.tile = !!this.answer.image;
    this.setSelected();
  }

  @HostListener('click')
  toggle() {
    this.quizService.setCurrentIndex(this.index);
  }

  private setSelected() {
    this.quizService.getCurrentIndex()
      .pipe(map(currentIndex => currentIndex === this.index))
      .subscribe(isSelected => this.selected = isSelected);
  }

}
