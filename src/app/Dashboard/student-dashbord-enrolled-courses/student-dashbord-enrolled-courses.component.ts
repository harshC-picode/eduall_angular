import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-dashbord-enrolled-courses',
  imports: [RouterLink,CommonModule],
  templateUrl: './student-dashbord-enrolled-courses.component.html',
  styleUrl: './student-dashbord-enrolled-courses.component.scss'
})
export class StudentDashbordEnrolledCoursesComponent {
courseList = [
  {
    image: 'assets/images/thumbs/dashbord-courses-img5.png',
    category: 'Business',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Cybersecurity Essentials',
    progressLabel: '100%',
    progressValue: 100,
    rating: 4.8,
    reviews: '1.5K Reviews',
    stars: [1, 1, 1, 1, 0.5],
    instructor: {
      name: 'Eleanor Pena',
      image: 'assets/images/thumbs/student-dashbord-img2.png'
    },
    aosDuration: 600
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img1.png',
    category: 'Finance',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Financial Accounting',
    progressLabel: '85%',
    progressValue: 85,
    rating: 4.8,
    reviews: '1.5K Reviews',
    stars: [1, 1, 1, 1, 0.5],
    instructor: {
      name: 'Annette Black',
      image: 'assets/images/thumbs/enroll-student-img4.png'
    },
    aosDuration: 700
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img3.png',
    category: 'Data & Tech',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Graphic Design',
    progressLabel: '85%',
    progressValue: 85,
    rating: 4.8,
    reviews: '1.5K Reviews',
    stars: [1, 1, 1, 1, 0.5],
    instructor: {
      name: 'Courtney Henry',
      image: 'assets/images/thumbs/testimonial-five-img2.png'
    },
    aosDuration: 800
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img4.png',
    category: 'Creative Arts',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'UI/UX Design Principles',
    progressLabel: null,  // no progress section in this one
    progressValue: null,
    rating: 4.8,
    reviews: '1.5K Reviews',
    stars: [1, 1, 1, 1, 0.5],
    instructor: {
      name: 'Savannah Nguyen',
      image: 'assets/images/thumbs/savannah-nguyen.png'
    },
    aosDuration: 900
  },
  
  {
    image: 'assets/images/thumbs/dashbord-courses-img6.png',
    category: 'Health',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Nutrition and Healthy',
    progressLabel: '100%',
    progressValue: 100,
    rating: 4.8,
    reviews: '1.5K Reviews',
    stars: [1, 1, 1, 1, 0.5],
    instructor: {
      name: 'Arlene McCoy',
      image: 'assets/images/thumbs/reviewer-img2.png'
    },
    aosDuration: '1100'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img2.png',
    category: 'Design',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Introduction to Animation',
    progressLabel: '',
    progressValue: null,
    rating: 4.8,
    reviews: '1.5K Reviews',
    stars: [1, 1, 1, 1, 0.5],
    instructor: {
      name: 'Jenny Wilson',
      image: 'assets/images/thumbs/user-two-img5.png'
    },
    aosDuration: '1000'
  }


];

}
