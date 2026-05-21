import { Component } from '@angular/core';
import {PublicQuiz} from '../../../model/public-quiz';
import {QuizMasterService} from '../../quiz-master.service';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-generate-quiz',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './generate-quiz.component.html',
  styleUrl: './generate-quiz.component.scss'
})
export class GenerateQuizComponent {
  public generating = false;

  constructor(public quizMasterService: QuizMasterService, private router: Router) {
  }

  public generate() {
    this.generating = true;
    const publicQuiz: PublicQuiz = {
      name: 'Parkquiz juni 2026',
      quizId: '103',
      question: 0
    };
    this.quizMasterService.createQuiz(publicQuiz)
      .subscribe(quizId => this.router.navigate(['/quiz-master', quizId]));
  }
}
