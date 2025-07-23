import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardSidebarComponent } from '../../shared/dashboard-sidebar/dashboard-sidebar.component';
import { AdminNavComponent } from '../../shared/admin-nav/admin-nav.component';

@Component({
  selector: 'app-dashbord-courses',
  imports: [RouterLink,CommonModule,DashboardSidebarComponent,AdminNavComponent],
  templateUrl: './dashbord-courses.component.html',
  styleUrl: './dashbord-courses.component.scss'
})
export class DashbordCoursesComponent {
     sidebarVisible = false;

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  hideSidebar(): void {
    this.sidebarVisible = false;
  }
courses = [
  {
    image: 'assets/images/thumbs/dashbord-courses-img1.png',
    category: 'Finance',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Financial Accounting',
    ratingHtml: `
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star-half"></i></li>
    `,
    ratingSummary: '4.8/5 (1.5K Reviews)',
    instructorImage: 'assets/images/thumbs/enroll-student-img4.png',
    instructorName: 'Annette Black'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img2.png',
    category: 'Design',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Introduction to Animation',
    ratingHtml: `
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star-half"></i></li>
    `,
    ratingSummary: '4.8/5 (1.5K Reviews)',
    instructorImage: 'assets/images/thumbs/user-two-img5.png',
    instructorName: 'Jenny Wilson'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img3.png',
    category: 'Data & Tech',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Graphic Design',
    ratingHtml: `
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star-half"></i></li>
    `,
    ratingSummary: '4.8/5 (1.5K Reviews)',
    instructorImage: 'assets/images/thumbs/testimonial-five-img2.png',
    instructorName: 'Courtney Henry'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img4.png',
    category: 'Creative Arts',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'UI/UX Design Principles',
    ratingHtml: `
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star-half"></i></li>
    `,
    ratingSummary: '4.8/5 (1.5K Reviews)',
    instructorImage: 'assets/images/thumbs/savannah-nguyen.png',
    instructorName: 'Savannah Nguyen'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img5.png',
    category: 'Business',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Cybersecurity Essentials',
    ratingHtml: `
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star-half"></i></li>
    `,
    ratingSummary: '4.8/5 (1.5K Reviews)',
    instructorImage: 'assets/images/thumbs/user-two-img4.png',
    instructorName: 'Eleanor Pena'
  },
  {
    image: 'assets/images/thumbs/dashbord-courses-img6.png',
    category: 'Health',
    lessons: '25 Lessons',
    students: '2.6K Students',
    title: 'Nutrition and Healthy',
    ratingHtml: `
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star"></i></li>
      <li class="text-16 text-warning-400"><i class="ph-fill ph-star-half"></i></li>
    `,
    ratingSummary: '4.8/5 (1.5K Reviews)',
    instructorImage: 'assets/images/thumbs/reviewer-img2.png',
    instructorName: 'Arlene McCoy'
  }
];

}
