import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledQuizComponent } from './controlled-quiz.component';

describe('ControlledQuizComponent', () => {
  let component: ControlledQuizComponent;
  let fixture: ComponentFixture<ControlledQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlledQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlledQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
