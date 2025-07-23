import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentSidebarComponent } from '../../shared/student-sidebar/student-sidebar.component';

@Component({
  selector: 'app-student-dashbord',
  imports: [RouterLink,CommonModule,StudentSidebarComponent],
  templateUrl: './student-dashbord.component.html',
  styleUrl: './student-dashbord.component.scss'
})
export class StudentDashbordComponent {
  sidebarActive = false;

toggleSidebar(): void {
  this.sidebarActive = !this.sidebarActive;
}

closeSidebar(): void {
  this.sidebarActive = false;
}

courseList = [
  {
    image: 'assets/images/thumbs/dashbord-courses-img5.png',
    category: 'Business',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Cybersecurity Essentials',
    progress: 85,
    rating: 4.8,
    reviews: '1.5K Reviews',
    stars: [1, 1, 1, 1, 0.5],
    instructor: {
      name: 'Eleanor Pena',
      image: 'assets/images/thumbs/student-dashbord-img2.png'
    }
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img1.png',
    category: 'Finance',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Financial Accounting',
    progress: 85,
    rating: 4.8,
    reviews: '1.5K Reviews',
    stars: [1, 1, 1, 1, 0.5],
    instructor: {
      name: 'Annette Black',
      image: 'assets/images/thumbs/enroll-student-img4.png'
    }
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img3.png',
    category: 'Data & Tech',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Graphic Design',
    progress: 85,
    rating: 4.8,
    reviews: '1.5K Reviews',
    stars: [1, 1, 1, 1, 0.5],
    instructor: {
      name: 'Courtney Henry',
      image: 'assets/images/thumbs/testimonial-five-img2.png'
    }
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img4.png',
    category: 'Creative Arts',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'UI/UX Design Principles',
    progress: 85,
    rating: 4.8,
    reviews: '1.5K Reviews',
    stars: [1, 1, 1, 1, 0.5],
    instructor: {
      name: 'Savannah Nguyen',
      image: 'assets/images/thumbs/savannah-nguyen.png'
    }
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img2.png',
    category: 'Design',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Introduction to Animation',
    progress: 85,
    rating: 4.8,
    reviews: '1.5K Reviews',
    stars: [1, 1, 1, 1, 0.5],
    instructor: {
      name: 'Jenny Wilson',
      image: 'assets/images/thumbs/user-two-img5.png'
    }
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img6.png',
    category: 'Health',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Nutrition and Healthy',
    progress: 85,
    rating: 4.8,
    reviews: '1.5K Reviews',
    stars: [1, 1, 1, 1, 0.5],
    instructor: {
      name: 'Arlene McCoy',
      image: 'assets/images/thumbs/reviewer-img2.png'
    }
  }
];

}
