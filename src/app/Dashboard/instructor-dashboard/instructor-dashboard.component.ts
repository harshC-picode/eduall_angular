import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InstructorSidebarComponent } from '../../shared/instructor-sidebar/instructor-sidebar.component';


@Component({
  selector: 'app-instructor-dashboard',
  imports: [RouterLink,CommonModule,InstructorSidebarComponent],
  templateUrl: './instructor-dashboard.component.html',
  styleUrl: './instructor-dashboard.component.scss'
})
export class InstructorDashboardComponent {

 
dashboardCards = [
  {
    label: 'All Courses',
    value: 35,
    icon: 'assets/images/icons/dashbord-item1.png',
    iconBg: 'bg-main-600'
  },
  {
    label: 'Enrolled Courses',
    value: 15,
    icon: 'assets/images/icons/dashbord-item2.png',
    iconBg: 'bg-success-600'
  },
  {
    label: 'Active Courses',
    value: 11,
    icon: 'assets/images/icons/dashbord-item3.png',
    iconBg: 'bg-warning-700'
  },
  {
    label: 'Completed Courses',
    value: 4,
    icon: 'assets/images/icons/dashbord-item4.png',
    iconBg: 'bg-warning-700'
  },
  {
    label: 'Total Students',
    value: 4,
    icon: 'assets/images/icons/dashbord-item5.png',
    iconBg: 'bg-main-600'
  },
  {
    label: 'Total Earnings',
    value: '$56,542.00',
    icon: 'assets/images/icons/dashbord-item6.png',
    iconBg: 'bg-success-600'
  }
];

courseList =[
  {
    "category": "Finance",
    "categoryClass": "px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03",
    "image": "assets/images/thumbs/dashbord-courses-img1.png",
    "title": "Financial Accounting",
    "lessons": "25 Lessons",
    "students": "2.6K Students",
    "progress": "85%",
    "instructorImage": "assets/images/thumbs/instructor-dashboard-img2.png",
    "instructorName": "Annette Black",
    "rating": 4.8,
    "reviews": "1.5K Reviews",
    "dataAos": "fade-up",
    "dataAosDuration": "600"
  },
  {
    "category": "Design",
    "categoryClass": "px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03",
    "image": "assets/images/thumbs/dashbord-courses-img2.png",
    "title": "Introduction to Animation",
    "lessons": "25 Lessons",
    "students": "2.6K Students",
    "progress": "85%",
    "instructorImage": "assets/images/thumbs/instructor-dashboard-img2.png",
    "instructorName": "Jenny Wilson",
    "rating": 4.8,
    "reviews": "1.5K Reviews",
    "dataAos": "fade-up",
    "dataAosDuration": "800"
  },
  {
    "category": "Data & Tech",
    "categoryClass": "px-12 py-6 text-success-600 fw-medium text-16 bg-success-50 border-success-100 border rounded-10 mb-16 hover-bg-success-600 hover-text-white transition-03",
    "image": "assets/images/thumbs/dashbord-courses-img3.png",
    "title": "Graphic Design",
    "lessons": "25 Lessons",
    "students": "2.6K Students",
    "progress": "85%",
    "instructorImage": "assets/images/thumbs/instructor-dashboard-img2.png",
    "instructorName": "Courtney Henry",
    "rating": 4.8,
    "reviews": "1.5K Reviews",
    "dataAos": "fade-up",
    "dataAosDuration": "1000"
  },
  
  {
    "title": "UI/UX Design Principles",
    "category": "Creative Arts",
    "lessons": 25,
    "students": "2.6K",
    "completion": "85%",
    "rating": 4.8,
    "reviews": "1.5K",
    "instructor": "Savannah Nguyen",
    "image": "assets/images/thumbs/dashbord-courses-img4.png",
    "instructorImage": "assets/images/thumbs/instructor-dashboard-img2.png"
  },
  {
    "title": "Cybersecurity Essentials",
    "category": "Business",
    "lessons": 25,
    "students": "2.6K",
    "completion": "85%",
    "rating": 4.8,
    "reviews": "1.5K",
    "instructor": "Eleanor Pena",
    "image": "assets/images/thumbs/dashbord-courses-img5.png",
    "instructorImage": "assets/images/thumbs/instructor-dashboard-img2.png"
  },
  {
    "title": "Nutrition and Healthy",
    "category": "Health",
    "lessons": 25,
    "students": "2.6K",
    "completion": "85%",
    "rating": 4.8,
    "reviews": "1.5K",
    "instructor": "Arlene McCoy",
    "image": "assets/images/thumbs/dashbord-courses-img6.png",
    "instructorImage": "assets/images/thumbs/instructor-dashboard-img2.png"
  }


];
dataArray=[
  {
    "name": "Automation System",
    "ratingHtml": "<ul class=\"d-flex align-items-center gap-6\"><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star-half\"></i></li></ul>",
    "value": 8
  },
  {
    "name": "Laboratory Expansion",
    "ratingHtml": "<ul class=\"d-flex align-items-center gap-6\"><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star-half\"></i></li></ul>",
    "value": 13
  },
  {
    "name": "Cleanroom Upgrade",
    "ratingHtml": "<ul class=\"d-flex align-items-center gap-6\"><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star-half\"></i></li></ul>",
    "value": 24
  },
  {
    "name": "Quality Control",
    "ratingHtml": "<ul class=\"d-flex align-items-center gap-6\"><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star-half\"></i></li></ul>",
    "value": 30
  },
  {
    "name": "Analytical Equipment",
    "ratingHtml": "<ul class=\"d-flex align-items-center gap-6\"><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star-half\"></i></li></ul>",
    "value": 11
  },
  {
    "name": "Vaccine Development",
    "ratingHtml": "<ul class=\"d-flex align-items-center gap-6\"><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star-half\"></i></li></ul>",
    "value": 33
  },
  {
    "name": "Packaging Line",
    "ratingHtml": "<ul class=\"d-flex align-items-center gap-6\"><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star-half\"></i></li></ul>",
    "value": 40
  },
  {
    "name": "IT Infrastructure",
    "ratingHtml": "<ul class=\"d-flex align-items-center gap-6\"><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star-half\"></i></li></ul>",
    "value": 14
  },
  {
    "name": "Clinical Trials",
    "ratingHtml": "<ul class=\"d-flex align-items-center gap-6\"><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star-half\"></i></li></ul>",
    "value": 36
  },
  {
    "name": "Clinical Trials",
    "ratingHtml": "<ul class=\"d-flex align-items-center gap-6\"><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star-half\"></i></li></ul>",
    "value": 17
  },
  {
    "name": "Cold Chain",
    "ratingHtml": "<ul class=\"d-flex align-items-center gap-6\"><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star-half\"></i></li></ul>",
    "value": 22
  },
  {
    "name": "IT Infrastructure",
    "ratingHtml": "<ul class=\"d-flex align-items-center gap-6\"><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star\"></i></li><li class=\"text-20 text-warning-600\"><i class=\"ph-fill ph-star-half\"></i></li></ul>",
    "value": 3
  }
]




}
