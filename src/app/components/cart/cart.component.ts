import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { CartItem } from '../../models/CartItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: CartItem[] = [];
  total: number = 0;

  ngOnInit(): void {
    // to load cart items from a service or localStorage
    this.cartItems = [
      { product: { id: 1, name: 'Tomatoes', price: 1.99, imageUrl: 'tomatoes.jpg' }, quantity: 2 },
      { product: { id: 2, name: 'Carrots', price: 0.99, imageUrl: 'carrots.jpg' }, quantity: 3 },
    ];
    this.calculateTotal();
  }

  removeFromCart(product: Product): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== product.id);
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

}
