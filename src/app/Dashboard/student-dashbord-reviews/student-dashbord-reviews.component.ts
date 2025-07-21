import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentSidebarComponent } from '../../shared/student-sidebar/student-sidebar.component';

@Component({
  selector: 'app-student-dashbord-reviews',
  imports: [CommonModule,StudentSidebarComponent],
  templateUrl: './student-dashbord-reviews.component.html',
  styleUrl: './student-dashbord-reviews.component.scss'
})
export class StudentDashbordReviewsComponent {
reviewList = [
  {
    courseName: 'Automation System',
    stars: ['full', 'full', 'full', 'full', 'half'],
    reviewCount: 3
  },
  {
    courseName: 'Laboratory Expansion',
    stars: ['full', 'full', 'full', 'full', 'half'],
    reviewCount: 3
  },
  {
    courseName: 'Cleanroom Upgrade',
    stars: ['full', 'full', 'full', 'full', 'half'],
    reviewCount: 3
  },
  {
    courseName: 'Quality Control',
    stars: ['full', 'full', 'full', 'full', 'half'],
    reviewCount: 3
  },
  {
    courseName: 'Analytical Equipment',
    stars: ['full', 'full', 'full', 'full', 'half'],
    reviewCount: 3
  },
  {
    courseName: 'Vaccine Development',
    stars: ['full', 'full', 'full', 'full', 'half'],
    reviewCount: 3
  },
  {
    courseName: 'Packaging Line',
    stars: ['full', 'full', 'full', 'full', 'half'],
    reviewCount: 3
  },
  {
    courseName: 'IT Infrastructure',
    stars: ['full', 'full', 'full', 'full', 'half'],
    reviewCount: 3
  },
  {
    courseName: 'Clinical Trials',
    stars: ['full', 'full', 'full', 'full', 'half'],
    reviewCount: 3
  },
  {
    courseName: 'Cold Chain',
    stars: ['full', 'full', 'full', 'full', 'half'],
    reviewCount: 3
  }
];

}
