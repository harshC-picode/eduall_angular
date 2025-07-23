import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardSidebarComponent } from '../../shared/dashboard-sidebar/dashboard-sidebar.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';
import { DonutChartComponent } from '../../shared/donut-chart/donut-chart.component';



@Component({
  selector: 'app-admin-dashbord',
  imports: [CommonModule,RouterLink,DashboardSidebarComponent,LineChartComponent,DonutChartComponent],
  templateUrl: './admin-dashbord.component.html',
  styleUrl: './admin-dashbord.component.scss'
})
export class AdminDashbordComponent {
    sidebarActive = false;

toggleSidebar(): void {
  this.sidebarActive = !this.sidebarActive;
}

closeSidebar(): void {
  this.sidebarActive = false;
}
// reviewers-data.ts
reviews= [
  {
    image: 'assets/images/thumbs/testi-img2.png',
    name: 'Kathryn Murphy',
    courses: 17,
    students: 2132,
    rating: '4.8(55K+ Students)'
  },
  {
    image: 'assets/images/thumbs/user-two-img5.png',
    name: 'Leslie Alexander',
    courses: 6,
    students: 234,
    rating: '4.8(55K+ Students)'
  },
  {
    image: 'assets/images/thumbs/user-two-img3.png',
    name: 'Savannah Nguyen',
    courses: 12,
    students: 113,
    rating: '4.8(55K+ Students)'
  },
  {
    image: 'assets/images/thumbs/user-two-img1.png',
    name: 'Ralph Edwards',
    courses: 13,
    students: 231,
    rating: '4.8(55K+ Students)'
  },
  {
    image: 'assets/images/thumbs/testimonial-five-img3.png',
    name: 'Jane Cooper',
    courses: 8,
    students: 190,
    rating: '4.8(55K+ Students)'
  },
  {
    image: 'assets/images/thumbs/reviewer-img4.png',
    name: 'Kristin Watson',
    courses: 1,
    students: 121,
    rating: '4.8(55K+ Students)'
  },
  {
    image: 'assets/images/thumbs/reviewer-img3.png',
    name: 'Wade Warren',
    courses: 5,
    students: 623,
    rating: '4.8(55K+ Students)'
  }
];
 courseData = [
  {
    image: 'assets/images/thumbs/dashboard-img1.png',
    title: 'Vuejs Courses',
    duration: '5 hr 45 min',
    lessons: 10,
    students: 193
  },
  {
    image: 'assets/images/thumbs/dashboard-img2.png',
    title: 'Swift Courses',
    duration: '5 hr 45 min',
    lessons: 16,
    students: 193
  },
  {
    image: 'assets/images/thumbs/dashboard-img3.png',
    title: 'Objective C Courses',
    duration: '5 hr 45 min',
    lessons: 5,
    students: 542
  },
  {
    image: 'assets/images/thumbs/dashboard-img4.png',
    title: 'NodeJS Courses',
    duration: '5 hr 45 min',
    lessons: 20,
    students: 321
  },
  {
    image: 'assets/images/thumbs/dashboard-img5.png',
    title: 'CSS3 Courses',
    duration: '5 hr 45 min',
    lessons: 12,
    students: 113
  },
  {
    image: 'assets/images/thumbs/dashboard-img6.png',
    title: 'Angular Courses',
    duration: '5 hr 45 min',
    lessons: 8,
    students: 4734
  },
  {
    image: 'assets/images/thumbs/dashboard-img7.png',
    title: 'Jango Courses',
    duration: '5 hr 45 min',
    lessons: 7,
    students: 472
  }
];
notificationItem = [
  {
    image: 'assets/images/thumbs/dashbord-notification-img1.png',
    message: 'Sarah just posted something new. Take a look!',
    time: 'a minute ago'
  },
  {
    image: 'assets/images/thumbs/dashbord-notification-img2.png',
    message: "Trending content: 'Hidden Gems of the City.' You won't want to miss it!",
    time: '3 hours ago'
  },
  {
    image: 'assets/images/thumbs/dashbord-notification-img3.png',
    message: "Trending content: 'Hidden Gems of the City.' You won't want to miss it!",
    time: '3 weeks ago'
  },
  {
    image: 'assets/images/thumbs/dashbord-notification-img4.png',
    message: "Someone commented on your recent post 'Exploring the Wilderness': 'Amazing photos!",
    time: '1 month ago'
  },
  {
    image: 'assets/images/thumbs/dashbord-notification-img5.png',
    message: "We've shared a fresh article: '10 Tips for Healthy Living.' Check it out!",
    time: '3 months ago'
  },
  {
    image: 'assets/images/thumbs/dashbord-notification-img6.png',
    message: "Great news! Your content 'Epic Road Trip' is now featured on the homepage.",
    time: '5 months ago'
  },
  {
    image: 'assets/images/thumbs/dashbord-notification-img7.png',
    message: "Join the discussion on our article 'Eco-Friendly Living.' Share your thoughts!",
    time: '7 months ago'
  }
];
 noticeItem= [
  {
    image: 'assets/images/thumbs/dashbord-notice-img1.png',
    title: 'Instructional Management Tools Software',
    time: 'a minute ago'
  },
  {
    image: 'assets/images/thumbs/dashbord-notice-img2.png',
    title: 'Software Maintenance and Support',
    time: '3 hours ago'
  },
  {
    image: 'assets/images/thumbs/dashbord-notice-img3.png',
    title: 'Cloud computing capabilities to conduct a Zero Trust Pilot project',
    time: '3 weeks ago'
  },
  {
    image: 'assets/images/thumbs/dashbord-notice-img4.png',
    title: 'Legal Library Software',
    time: '1 months ago'
  },
  {
    image: 'assets/images/thumbs/dashbord-notice-img5.png',
    title: 'Judiciary Cloud Services',
    time: '3 months ago'
  },
  {
    image: 'assets/images/thumbs/dashbord-notice-img6.png',
    title: 'CIPS Personnel Tracking System (PTS) Integration',
    time: '5 months ago'
  },
  {
    image: 'assets/images/thumbs/dashbord-notice-img7.png',
    title: 'Cloud Operations, Security, Management and Optimization at Speed of Commercial (COSMOS)',
    time: '7 months ago'
  }
];

projectRatings = [
  {
    title: 'Automation System',
    rating:4.5,
    totalReviews: 8
  },
  {
    title: 'Laboratory Expansion',
    rating:4.5,
    totalReviews: 13
  },
  {
    title: 'Cleanroom Upgrade',
    rating:4.5,
    totalReviews: 24
  },
  {
    title: 'Quality Control',
    rating:4.5,
    totalReviews: 30
  },
  {
    title: 'Analytical Equipment',
    rating:4.5,
    totalReviews: 11
  },
  {
    title: 'Vaccine Development',
    rating:4.5,
    totalReviews: 33
  },
  {
    title: 'Packaging Line',
    rating:4.5,
    totalReviews: 40
  },
  {
    title: 'IT Infrastructure',
    rating:4.5,
    totalReviews: 14
  },
  {
    title: 'Clinical Trials',
    rating:4.5,
    totalReviews: 36
  },
  {
    title: 'Clinical Trials',
    rating:4.5,
    totalReviews: 17
  },
  {
    title: 'Cold Chain',
    rating:4.5,
    totalReviews: 22
  },
  {
    title: 'IT Infrastructure',
    rating:4.5,
    totalReviews: 3
  }

];







}
