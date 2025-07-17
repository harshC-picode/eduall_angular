import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-cart',
  imports: [RouterLink,CommonModule,BreadcrumbComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
cartItems = [
  {
    name: 'Chuck 70 Hi Sneaker',
    image: 'assets/images/thumbs/cart-img1.png',
    size: '9',
    colorClass: 'bg-pen',
    price: '$11.70',
    quantity: 1,
    available: 72,
    total: '$66.70'
  },
  {
    name: 'Cotu Classic Sneaker',
    image: 'assets/images/thumbs/cart-img2.png',
    size: '9',
    colorClass: 'bg-watch',
    price: '$5.22',
    quantity: 1,
    available: 72,
    total: '$32.22'
  },
  {
    name: 'Zoom Freak 2',
    image: 'assets/images/thumbs/cart-img3.png',
    size: '9',
    colorClass: 'bg-black',
    price: '$6.48',
    quantity: 1,
    available: 72,
    total: '$18.48'
  },
  {
    name: 'Classic Sneaker',
    image: 'assets/images/thumbs/cart-img4.png',
    size: '9',
    colorClass: 'bg-table',
    price: '$17.84',
    quantity: 1,
    available: 72,
    total: '$96.84'
  }
];

}
