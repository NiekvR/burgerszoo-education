import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcodisplaysComponent } from './ecodisplays.component';

describe('EcodisplaysComponent', () => {
  let component: EcodisplaysComponent;
  let fixture: ComponentFixture<EcodisplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcodisplaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcodisplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
