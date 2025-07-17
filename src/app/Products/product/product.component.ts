import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-product',
  imports: [RouterLink,CommonModule,BreadcrumbComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
products = [
  {
    title: 'Nike Air Force',
    image: 'assets/images/thumbs/product-img1.png',
    price: '$95.25',
    rating: 4.7,
    label: '',
    labelClass: '',
  },
  {
    title: 'Athletic Sneaker',
    image: 'assets/images/thumbs/product-img2.png',
    price: '$95.25',
    rating: 4.7,
    label: 'Sale',
    labelClass: 'bg-main-two-600',
  },
  {
    title: 'Dressy Boots',
    image: 'assets/images/thumbs/product-img3.png',
    price: '$95.25',
    rating: 4.7,
    label: '',
    labelClass: '',
  },
  {
    title: 'Popular Loafers',
    image: 'assets/images/thumbs/product-img4.png',
    price: '$95.25',
    rating: 4.7,
    label: 'New',
    labelClass: 'bg-success-600',
  },
  {
    title: 'Oxfords leather',
    image: 'assets/images/thumbs/product-img5.png',
    price: '$95.25',
    rating: 4.7,
    label: 'New',
    labelClass: 'bg-success-600',
  },
  {
    title: 'Dressy Boots',
    image: 'assets/images/thumbs/product-img6.png',
    price: '$95.25',
    rating: 4.7,
    label: '',
    labelClass: ''
  },
  {
    title: 'Heeled Flats',
    image: 'assets/images/thumbs/product-img7.png',
    price: '$95.25',
    rating: 4.7,
    label: 'Sale',
    labelClass: 'bg-main-two-600'
  },
  {
    title: 'Pumps classic',
    image: 'assets/images/thumbs/product-img8.png',
    price: '$95.25',
    rating: 4.7,
    label: '',
    labelClass: ''
  },
  {
    title: 'Heels stilettos',
    image: 'assets/images/thumbs/product-img9.png',
    price: '$95.25',
    rating: 4.7,
    label: '',
    labelClass: ''
  },
  {
    title: 'Sandals various',
    image: 'assets/images/thumbs/product-img10.png',
    price: '$95.25',
    rating: 4.7,
    label: 'New',
    labelClass: 'bg-success-600'
  },
  {
    title: 'Heels Wedges',
    image: 'assets/images/thumbs/product-img11.png',
    price: '$95.25',
    rating: 4.7,
    label: '',
    labelClass: ''
  },
  {
    title: 'Mules flat sole',
    image: 'assets/images/thumbs/product-img12.png',
    price: '$95.25',
    rating: 4.7,
    label: 'Sale',
    labelClass: 'bg-main-two-600'
  }
];


}
