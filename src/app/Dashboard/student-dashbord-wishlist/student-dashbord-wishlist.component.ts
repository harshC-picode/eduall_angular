import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentSidebarComponent } from '../../shared/student-sidebar/student-sidebar.component';

@Component({
  selector: 'app-student-dashbord-wishlist',
  imports: [RouterLink,CommonModule,StudentSidebarComponent],
  templateUrl: './student-dashbord-wishlist.component.html',
  styleUrl: './student-dashbord-wishlist.component.scss'
})
export class StudentDashbordWishlistComponent {
courseList = [
  {
    image: 'assets/images/thumbs/course-img1.png',
    duration: '9h 36m',
    title: 'Introduction to Digital Marketing',
    lessons: '20 Lessons',
    level: 'Beginner',
    rating: 4.7,
    reviews: '(6.4k)',
    instructor: {
      name: 'Robert',
      image: 'assets/images/thumbs/dashbord-wishlist-img1.png'
    },
    price: '$159',
    aosDuration: '600'
  },
  {
    image: 'assets/images/thumbs/course-img2.png',
    duration: '25h 06m',
    title: 'Introduction to Python Programming',
    lessons: '20 Lessons',
    level: 'Beginner',
    rating: 4.7,
    reviews: '(6.4k)',
    instructor: {
      name: 'Robert',
      image: 'assets/images/thumbs/dashbord-wishlist-img1.png'
    },
    price: '$499',
    aosDuration: '700'
  },
  {
    image: 'assets/images/thumbs/course-img3.png',
    duration: '9h 36m',
    title: 'Introduction to Photography Masterclass',
    lessons: '20 Lessons',
    level: 'Beginner',
    rating: 4.7,
    reviews: '(6.4k)',
    instructor: {
      name: 'Robert',
      image: 'assets/images/thumbs/dashbord-wishlist-img1.png'
    },
    price: '$457',
    aosDuration: '800'
  },
  {
    image: 'assets/images/thumbs/course-img4.png',
    duration: '9h 36m',
    title: 'Spanish Language Mastery: Beginner to Fluent',
    lessons: '20 Lessons',
    level: 'Beginner',
    rating: 4.7,
    reviews: '(6.4k)',
    instructor: {
      name: 'Robert',
      image: 'assets/images/thumbs/dashbord-wishlist-img1.png'
    },
    price: '$148',
    aosDuration: '900'
  },
  {
    image: 'assets/images/thumbs/course-img5.png',
    duration: '9h 36m',
    title: 'Financial Planning for Millennials',
    lessons: '20 Lessons',
    level: 'Beginner',
    rating: 4.7,
    reviews: '(6.4k)',
    instructor: {
      name: 'Robert',
      image: 'assets/images/thumbs/dashbord-wishlist-img1.png'
    },
    price: '$546',
    aosDuration: '600'
  },
  {
    image: 'assets/images/thumbs/course-img6.png',
    duration: '9h 36m',
    title: 'Nutrition Essentials for Healthy Living',
    lessons: '20 Lessons',
    level: 'Beginner',
    rating: 4.7,
    reviews: '(6.4k)',
    instructor: {
      name: 'Robert',
      image: 'assets/images/thumbs/dashbord-wishlist-img1.png'
    },
    price: '$345',
    aosDuration: '700'
  }
];

}
