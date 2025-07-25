import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-course',
  imports: [RouterLink,CommonModule,BreadcrumbComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {

  courses = [
    {
      title: 'Introduction to Digital Marketing',
      image: 'assets/images/thumbs/course-img1.png',
      duration: '9h 36m',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img1.png',
      userName: 'AnikaZ',
      price: '$148',
      detailsLink: '/course-details',
      enrollLink: '/apply-admission'
    },
    {
      title: 'Introduction to Python Programming',
      image: 'assets/images/thumbs/course-img2.png',
      duration: '25h 06m',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img2.png',
      userName: 'Wade',
      price: '$499',
      detailsLink: 'course-details.html',
      enrollLink: 'apply-admission.html'
    },
    {
      title: 'Introduction to Photography Masterclass',
      image: 'assets/images/thumbs/course-img3.png',
      duration: '9h 36m',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img3.png',
      userName: 'Cody',
      price: '$457',
      detailsLink: 'course-details.html',
      enrollLink: 'apply-admission.html'
    },
    {
      title: 'Spanish Language Mastery: Beginner to Fluent',
      image: 'assets/images/thumbs/course-img4.png',
      duration: '9h 36m',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img4.png',
      userName: 'Dustin',
      price: '$148',
      detailsLink: 'course-details.html',
      enrollLink: 'apply-admission.html'
    },
    
  {
    title: 'Financial Planning for Millennials',
    image: 'assets/images/thumbs/course-img5.png',
    duration: '9h 36m',
    lessons: 20,
    level: 'Beginner',
    rating: 4.7,
    reviews: '6.4k',
    userImage: 'assets/images/thumbs/user-img5.png',
    userName: 'Bruce',
    price: '$546',
    detailsLink: 'course-details.html',
    enrollLink: 'apply-admission.html'
  },
  {
    title: 'Nutrition Essentials for Healthy Living',
    image: 'assets/images/thumbs/course-img6.png',
    duration: '9h 36m',
    lessons: 20,
    level: 'Beginner',
    rating: 4.7,
    reviews: '6.4k',
    userImage: 'assets/images/thumbs/user-img6.png',
    userName: 'Robert',
    price: '$345',
    detailsLink: 'course-details.html',
    enrollLink: 'apply-admission.html'
  },
  {
    title: 'Nutrition Essentials for Healthy Living',
    image: 'assets/images/thumbs/course-img7.png',
    duration: '9h 36m',
    lessons: 20,
    level: 'Beginner',
    rating: 4.7,
    reviews: '6.4k',
    userImage: 'assets/images/thumbs/user-img2.png',
    userName: 'Robert',
    price: '$345',
    detailsLink: 'course-details.html',
    enrollLink: 'apply-admission.html'
  },
  {
    title: 'Nutrition Essentials for Healthy Living',
    image: 'assets/images/thumbs/course-img9.png',
    duration: '9h 36m',
    lessons: 20,
    level: 'Beginner',
    rating: 4.7,
    reviews: '6.4k',
    userImage: 'assets/images/thumbs/user-img3.png',
    userName: 'Robert',
    price: '$345',
    detailsLink: 'course-details.html',
    enrollLink: 'apply-admission.html'
  },
  {
    title: 'Nutrition Essentials for Healthy Living',
    image: 'assets/images/thumbs/course-img8.png',
    duration: '9h 36m',
    lessons: 20,
    level: 'Beginner',
    rating: 4.7,
    reviews: '6.4k',
    userImage: 'assets/images/thumbs/user-img1.png',
    userName: 'Robert',
    price: '$345',
    detailsLink: 'course-details.html',
    enrollLink: 'apply-admission.html'
  }
];

  
}


