import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceFeedComponent } from './advice-feed.component';

describe('AdviceFeedComponent', () => {
  let component: AdviceFeedComponent;
  let fixture: ComponentFixture<AdviceFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdviceFeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
