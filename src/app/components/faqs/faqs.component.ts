import { Component } from '@angular/core';
import { FAQ } from '../../models/Faqs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {

  faqs: FAQ[] = [
    { id: 1, question: 'What is AgriConnect?', answer: 'AgriConnect is a platform for farmers to manage crops, get expert advice, and engage in a marketplace.', isExpanded: false },
    { id: 2, question: 'How can I track my crops?', answer: 'You can use the Crop Tracking feature in the Farmer Dashboard to input and monitor your crop data.', isExpanded: false },
    { id: 3, question: 'What kind of recommendations will I get?', answer: 'You will receive personalized farming tips based on your crop data and farming practices.', isExpanded: false },
    // Add more FAQs as needed
  ];

  ngOnInit(): void {}

  toggleAnswer(id: number): void {
    const faq = this.faqs.find(f => f.id === id);
    if (faq) {
      faq.isExpanded = !faq.isExpanded;
    }
  }

}
