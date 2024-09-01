import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,HttpClientModule, ReactiveFormsModule],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  
  products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 25.99, quantity: 10, imageUrl: 'assets/product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 15.49, quantity: 5, imageUrl: 'assets/product2.jpg' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 45.00, quantity: 8, imageUrl: 'assets/product3.jpg' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Optionally, fetch products from an API or service
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}
