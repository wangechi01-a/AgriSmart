import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-expert-advice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expert-advice.component.html',
  styleUrl: './expert-advice.component.css'
})
export class ExpertAdviceComponent {
  adviceList = [
    { id: 1, title: 'How to Manage Pests Effectively', summary: 'Tips on controlling pests in your crops.' },
    { id: 2, title: 'Optimal Fertilization Techniques', summary: 'Learn the best practices for fertilizing your crops.' },
    { id: 3, title: 'Improving Soil Quality', summary: 'Methods to enhance soil fertility for better crop yield.' }
  ];
  
  selectedAdvice: any = null;
  userData = { cropType: '', issues: '' };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const adviceId = this.route.snapshot.paramMap.get('id');
    if (adviceId) {
      this.selectedAdvice = this.adviceList.find(advice => advice.id === +adviceId);
    }
  }

  viewAdvice(advice: any): void {
    this.selectedAdvice = advice;
    this.router.navigate(['/expert-advice', advice.id]);
  }

  submitForm(): void {
    // Handle form submission, e.g., send user data to a server
    console.log('Form submitted:', this.userData);
    this.userData = { cropType: '', issues: '' }; // Reset form after submission
  }

}
