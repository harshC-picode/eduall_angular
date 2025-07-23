import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardSidebarComponent } from '../../shared/dashboard-sidebar/dashboard-sidebar.component';


@Component({
  selector: 'app-dashbord-wishlist',
  imports: [RouterLink,CommonModule,DashboardSidebarComponent],
  templateUrl: './dashbord-wishlist.component.html',
  styleUrl: './dashbord-wishlist.component.scss'
})
export class DashbordWishlistComponent {
    sidebarActive = false;

toggleSidebar(): void {
  this.sidebarActive = !this.sidebarActive;
}

closeSidebar(): void {
  this.sidebarActive = false;
}
courses = [
  {
    image: 'assets/images/thumbs/course-img1.png',
    duration: '9h 36m',
    title: 'Introduction to Digital Marketing',
    lessons: '20 Lessons',
    level: 'Beginner',
    rating: 4.7,
    ratingCount: '6.4k',
    instructorImage: 'assets/images/thumbs/dashbord-wishlist-img1.png',
    instructorName: 'Robert',
    price: 159,
    animationDuration: 600
  },
  {
    image: 'assets/images/thumbs/course-img2.png',
    duration: '25h 06m',
    title: 'Introduction to Python Programming',
    lessons: '20 Lessons',
    level: 'Beginner',
    rating: 4.7,
    ratingCount: '6.4k',
    instructorImage: 'assets/images/thumbs/dashbord-wishlist-img1.png',
    instructorName: 'Robert',
    price: 499,
    animationDuration: 700
  },
  {
    image: 'assets/images/thumbs/course-img3.png',
    duration: '9h 36m',
    title: 'Introduction to Photography Masterclass',
    lessons: '20 Lessons',
    level: 'Beginner',
    rating: 4.7,
    ratingCount: '6.4k',
    instructorImage: 'assets/images/thumbs/dashbord-wishlist-img1.png',
    instructorName: 'Robert',
    price: 457,
    animationDuration: 800
  },
  {
    image: 'assets/images/thumbs/course-img4.png',
    duration: '9h 36m',
    title: 'Spanish Language Mastery: Beginner to Fluent',
    lessons: '20 Lessons',
    level: 'Beginner',
    rating: 4.7,
    ratingCount: '6.4k',
    instructorImage: 'assets/images/thumbs/dashbord-wishlist-img1.png',
    instructorName: 'Robert',
    price: 148,
    animationDuration: 900
  },
  {
    image: 'assets/images/thumbs/course-img5.png',
    duration: '9h 36m',
    title: 'Financial Planning for Millennials',
    lessons: '20 Lessons',
    level: 'Beginner',
    rating: 4.7,
    ratingCount: '6.4k',
    instructorImage: 'assets/images/thumbs/dashbord-wishlist-img1.png',
    instructorName: 'Robert',
    price: 546,
    animationDuration: 600
  },
  {
    image: 'assets/images/thumbs/course-img6.png',
    duration: '9h 36m',
    title: 'Nutrition Essentials for Healthy Living',
    lessons: '20 Lessons',
    level: 'Beginner',
    rating: 4.7,
    ratingCount: '6.4k',
    instructorImage: 'assets/images/thumbs/dashbord-wishlist-img1.png',
    instructorName: 'Robert',
    price: 345,
    animationDuration: 700
  }
];

}
