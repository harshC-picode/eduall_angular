import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InstructorSidebarComponent } from '../../shared/instructor-sidebar/instructor-sidebar.component';

@Component({
  selector: 'app-instructor-dashboard-enrolled-courses',
  imports: [RouterLink,CommonModule,InstructorSidebarComponent],
  templateUrl: './instructor-dashboard-enrolled-courses.component.html',
  styleUrl: './instructor-dashboard-enrolled-courses.component.scss'
})
export class InstructorDashboardEnrolledCoursesComponent {

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
    image: 'assets/images/thumbs/dashbord-courses-img5.png',
    category: 'Business',
    lessons: 25,
    students: '2.6K',
    title: 'Cybersecurity Essentials',
    progress: 89,
    progressLabel: '89%',
    rating: '4.8/5 (1.5K Reviews)',
    stars: ['ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star-half'],
    instructor: 'Eleanor Pena',
    instructorImg: 'assets/images/thumbs/student-dashbord-img2.png',
    aosDuration: '600'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img1.png',
    category: 'Finance',
    lessons: 25,
    students: '2.6K',
    title: 'Financial Accounting',
    progress: 85,
    progressLabel: '85%',
    rating: '4.8/5 (1.5K Reviews)',
    stars: ['ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star-half'],
    instructor: 'Annette Black',
    instructorImg: 'assets/images/thumbs/enroll-student-img4.png',
    aosDuration: '700'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img3.png',
    category: 'Data & Tech',
    lessons: 25,
    students: '2.6K',
    title: 'Graphic Design',
    progress: 85,
    progressLabel: '85%',
    rating: '4.8/5 (1.5K Reviews)',
    stars: ['ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star-half'],
    instructor: 'Courtney Henry',
    instructorImg: 'assets/images/thumbs/testimonial-five-img2.png',
    aosDuration: '800'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img4.png',
    category: 'Creative Arts',
    lessons: 25,
    students: '2.6K',
    title: 'UI/UX Design Principles',
    progress: null, // No progress section shown
    progressLabel: '',
    rating: '4.8/5 (1.5K Reviews)',
    stars: ['ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star-half'],
    instructor: 'Savannah Nguyen',
    instructorImg: 'assets/images/thumbs/savannah-nguyen.png',
    aosDuration: '900'
  },
  
  {
    image: 'assets/images/thumbs/dashbord-courses-img6.png',
    category: 'Health',
    lessons: 25,
    students: '2.6K',
    title: 'Nutrition and Healthy',
    progress: 80,
    progressLabel: '80%',
    rating: '4.8/5 (1.5K Reviews)',
    stars: ['ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star-half'],
    instructor: 'Arlene McCoy',
    instructorImg: 'assets/images/thumbs/reviewer-img2.png',
    aosDuration: '1100'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img2.png',
    category: 'Design',
    lessons: 25,
    students: '2.6K',
    title: 'Introduction to Animation',
    progress: null,
    progressLabel: '',
    rating: '4.8/5 (1.5K Reviews)',
    stars: ['ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star-half'],
    instructor: 'Jenny Wilson',
    instructorImg: 'assets/images/thumbs/user-two-img5.png',
    aosDuration: '1000'
  }


];

}
