import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advice-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advice-feed.component.html',
  styleUrl: './advice-feed.component.css'
})
export class AdviceFeedComponent implements OnInit{

  adviceList = [
    {
      title: 'Maximizing Crop Yield',
      description: 'Learn how to maximize your crop yield with these expert tips.',
      image: 'assets/advice/crop-yield.jpg'
    },
    {
      title: 'Water Conservation Techniques',
      description: 'Discover effective water conservation methods for sustainable farming.',
      image: 'assets/advice/water-conservation.jpg'
    },
    {
      title: 'Soil Health Management',
      description: 'Explore the best practices for maintaining healthy and productive soil.',
      image: 'assets/advice/soil-health.jpg'
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
    // Logic to fetch and display personalized advice
  }
}
