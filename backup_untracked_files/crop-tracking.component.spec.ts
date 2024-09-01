import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropTrackingComponent } from './crop-tracking.component';

describe('CropTrackingComponent', () => {
  let component: CropTrackingComponent;
  let fixture: ComponentFixture<CropTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
