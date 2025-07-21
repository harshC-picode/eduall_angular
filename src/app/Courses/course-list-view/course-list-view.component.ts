import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list-view',
  imports: [RouterLink, BreadcrumbComponent, CommonModule],
  templateUrl: './course-list-view.component.html',
  styleUrl: './course-list-view.component.scss'
})
export class CourseListViewComponent {

  courses = [
    {
      image: 'assets/images/thumbs/course-img1.png',
      duration: '9h 36m',
      title: 'Introduction to Digital Marketing',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img1.png',
      userName: 'AnikaZ',
      price: '$148',
    },
    {
      image: 'assets/images/thumbs/course-img2.png',
      duration: '25h 06m',
      title: 'Introduction to Python Programming',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img2.png',
      userName: 'Wade',
      price: '$499',
    },
    {
      image: 'assets/images/thumbs/course-img3.png',
      duration: '9h 36m',
      title: 'Introduction to Photography Masterclass',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img3.png',
      userName: 'Cody',
      price: '$457',
    },
    {
      image: 'assets/images/thumbs/course-img4.png',
      duration: '9h 36m',
      title: 'Spanish Language Mastery: Beginner to Fluent',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img4.png',
      userName: 'Dustin',
      price: '$148',
    },
    {
      image: 'assets/images/thumbs/course-img5.png',
      duration: '9h 36m',
      title: 'Financial Planning for Millennials',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img5.png',
      userName: 'Bruce',
      price: '$546',
    },

    {
      image: 'assets/images/thumbs/course-img6.png',
      duration: '9h 36m',
      title: 'Nutrition Essentials for Healthy Living',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img6.png',
      userName: 'Robert',
      price: '$345',
    },
    {
      image: 'assets/images/thumbs/course-img7.png',
      duration: '9h 36m',
      title: 'Nutrition Essentials for Healthy Living',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img2.png',
      userName: 'Robert',
      price: '$345',
    },
    {
      image: 'assets/images/thumbs/course-img9.png',
      duration: '9h 36m',
      title: 'Nutrition Essentials for Healthy Living',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img3.png',
      userName: 'Robert',
      price: '$345',
    },
    {
      image: 'assets/images/thumbs/course-img8.png',
      duration: '9h 36m',
      title: 'Nutrition Essentials for Healthy Living',
      lessons: 20,
      level: 'Beginner',
      rating: 4.7,
      reviews: '6.4k',
      userImage: 'assets/images/thumbs/user-img1.png',
      userName: 'Robert',
      price: '$345',
    }
  ];

}


