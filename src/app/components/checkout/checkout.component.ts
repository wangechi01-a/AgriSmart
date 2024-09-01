import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  name!: string;
  address!: string;
  paymentMethod!: string

  onSubmit(): void {
    // Handle form submission and process payment
    console.log('Order confirmed');
    console.log(`Name: ${this.name}`);
    console.log(`Address: ${this.address}`);
    console.log(`Payment Method: ${this.paymentMethod}`);
  }

}
