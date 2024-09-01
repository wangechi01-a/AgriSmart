import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../models/Article';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit{


  articles: Article[] = [
    { id: 1, title: 'Sustainable Farming Practices', summary: 'Learn the top strategies for sustainable agriculture.', documentUrl: 'assets/docs/sustainable-farming.pdf' },
    { id: 2, title: 'Effective Crop Rotation Techniques', summary: 'Explore methods for effective crop rotation.', documentUrl: 'assets/docs/crop-rotation.pdf' },
    { id: 3, title: 'Water Conservation Methods', summary: 'Strategies to save water in agriculture.', documentUrl: 'assets/docs/water-conservation.pdf' },
  ];

  constructor() {}

  ngOnInit(): void {}

}

