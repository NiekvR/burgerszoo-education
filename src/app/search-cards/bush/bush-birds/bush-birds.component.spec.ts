import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BushBirdsComponent } from './bush-birds.component';

describe('BushBirdsComponent', () => {
  let component: BushBirdsComponent;
  let fixture: ComponentFixture<BushBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BushBirdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BushBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
