import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crop-tracking',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crop-tracking.component.html',
  styleUrl: './crop-tracking.component.css'
})
export class CropTrackingComponent {
  cropForm!: FormGroup;
  crops: any[] = []; // to be replaced a backend service

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cropForm = this.fb.group({
      cropType: [''],
      plantingDate: [''],
      expectedHarvestDate: [''],
      growthStage: [''],
      healthStatus: [''],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.cropForm.valid) {
      this.crops.push(this.cropForm.value);
      this.cropForm.reset();
    }
  }
}
