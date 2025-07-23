import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InstructorSidebarComponent } from '../../shared/instructor-sidebar/instructor-sidebar.component';

@Component({
  selector: 'app-instructor-dashboard-my-courses',
  imports: [RouterLink,CommonModule,InstructorSidebarComponent],
  templateUrl: './instructor-dashboard-my-courses.component.html',
  styleUrl: './instructor-dashboard-my-courses.component.scss'
})
export class InstructorDashboardMyCoursesComponent {

  sidebarActive = false;

toggleSidebar(): void {
  console.log("clicked...");
  
  this.sidebarActive = !this.sidebarActive;
}

closeSidebar(): void {
  this.sidebarActive = false;
}
dashboardCourses = [
  {
    image: 'assets/images/thumbs/dashbord-courses-img1.png',
    category: 'Finance',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Financial Accounting',
    rating: 4.5,
    ratingText: '4.8/5 (1.5K Reviews)',
    instructor: {
      name: 'Jenny Wilson',
      image: 'assets/images/thumbs/instructor-dashboard-my-courses.png'
    },
    aosDuration: '600'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img2.png',
    category: 'Design',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Introduction to Animation',
    rating: 4.5,
    ratingText: '4.8/5 (1.5K Reviews)',
    instructor: {
      name: 'Jenny Wilson',
      image: 'assets/images/thumbs/instructor-dashboard-my-courses.png'
    },
    aosDuration: '800'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img3.png',
    category: 'Data & Tech',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Graphic Design',
    rating: 4.5,
    ratingText: '4.8/5 (1.5K Reviews)',
    instructor: {
      name: 'Jenny Wilson',
      image: 'assets/images/thumbs/instructor-dashboard-my-courses.png'
    },
    aosDuration: '1000'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img4.png',
    category: 'Creative Arts',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'UI/UX Design Principles',
    rating: 4.5,
    ratingText: '4.8/5 (1.5K Reviews)',
    instructor: {
      name: 'Jenny Wilson',
      image: 'assets/images/thumbs/instructor-dashboard-my-courses.png'
    },
    aosDuration: '1200'
  },

  {
    image: 'assets/images/thumbs/dashbord-courses-img5.png',
    category: 'Business',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Cybersecurity Essentials',
    rating: 4.8,
    ratingText: '4.8/5 (1.5K Reviews)',
    instructor: {
      name: 'Jenny Wilson',
      image: 'assets/images/thumbs/instructor-dashboard-my-courses.png'
    },
    aosDuration: 1400
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img6.png',
    category: 'Health',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Nutrition and Healthy',
    rating: 4.8,
    ratingText: '4.8/5 (1.5K Reviews)',
    instructor: {
      name: 'Jenny Wilson',
      image: 'assets/images/thumbs/instructor-dashboard-my-courses.png'
    },
    aosDuration: 1600
  }
];



}
