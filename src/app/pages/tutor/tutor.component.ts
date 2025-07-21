import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutor',
  imports: [RouterLink,BreadcrumbComponent,CommonModule],
  templateUrl: './tutor.component.html',
  styleUrl: './tutor.component.scss'
})
export class TutorComponent {
tutors = [
  {
    image: 'assets/images/thumbs/instructor-img1.png',
    name: 'Ronald Richards',
    university: 'Global University',
    rating: 4.7,
    reviews: '6.4k',
    price: '$155',
    location: 'New York'
  },
  {
    image: 'assets/images/thumbs/instructor-img2.png',
    name: 'Jacob Jones',
    university: 'LKS University',
    rating: 4.7,
    reviews: '6.4k',
    price: '$155',
    location: 'Phoenix'
  },
  {
    image: 'assets/images/thumbs/instructor-img3.png',
    name: 'Darlene Robertson',
    university: 'Notware',
    rating: 4.7,
    reviews: '6.4k',
    price: '$155',
    location: 'Chicago'
  },
  {
    image: 'assets/images/thumbs/instructor-img4.png',
    name: 'Esther Howard',
    university: 'Global University',
    rating: 4.7,
    reviews: '6.4k',
    price: '$155',
    location: 'Phoenix'
  },
  {
    image: 'assets/images/thumbs/instructor-img5.png',
    name: 'Wade Warren',
    university: 'GFC University',
    rating: 4.7,
    reviews: '6.4k',
    price: '$155',
    location: 'Phoenix'
  },
  {
    image: 'assets/images/thumbs/instructor-img6.png',
    name: 'Dianne Russell',
    university: 'GFC University',
    rating: 4.7,
    reviews: '6.4k',
    price: '$155',
    location: 'Phoenix'
  }
];


}
