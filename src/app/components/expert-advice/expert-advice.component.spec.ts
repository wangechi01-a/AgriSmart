import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertAdviceComponent } from './expert-advice.component';

describe('ExpertAdviceComponent', () => {
  let component: ExpertAdviceComponent;
  let fixture: ComponentFixture<ExpertAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertAdviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
