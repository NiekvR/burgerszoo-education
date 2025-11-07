import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../../quiz.service';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-open-answer',
  templateUrl: './open-answer.component.html',
  styleUrls: ['./open-answer.component.scss']
})
export class OpenAnswerComponent {
  @Input() disabled = false;
  @Input() answer = '';
  @Input() result = false;
  @Input() correctAnswer: number | string;
  public correct = false;
  protected readonly faCheck = faCheck;
  protected readonly faTimes = faTimes;
  constructor(private quizService: QuizService) { }

  public onChange() {
    this.quizService.setCurrentIndex(this.answer);
  }
}
