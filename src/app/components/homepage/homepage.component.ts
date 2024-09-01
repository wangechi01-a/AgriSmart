import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  currentIndex = 0;
  slides = [
    { image: "/src/assets/carrot.jpeg"},
    { image: 'https://pixabay.com/photos/corn-maize-crop-grow-agriculture-2655525/' },
    { image: 'assets/' }
  ];

  ngOnInit() {
    // Optional: Start automatic slide transition
    setInterval(() => this.nextSlide(), 3000);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? this.currentIndex + 1 : 0;
  }

}
