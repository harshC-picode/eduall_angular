import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InstructorSidebarComponent } from '../../shared/instructor-sidebar/instructor-sidebar.component';

@Component({
  selector: 'app-instructor-dashboard-reviews',
  imports: [CommonModule,InstructorSidebarComponent],
  templateUrl: './instructor-dashboard-reviews.component.html',
  styleUrl: './instructor-dashboard-reviews.component.scss'
})
export class InstructorDashboardReviewsComponent {

  sidebarActive = false;

toggleSidebar(): void {
  console.log("clicked...");
  
  this.sidebarActive = !this.sidebarActive;
}

closeSidebar(): void {
  this.sidebarActive = false;
}
reviewData = [
  {
    title: 'Automation System',
    stars: [
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star-half'
    ],
    reviews: 3
  },
  {
    title: 'Laboratory Expansion',
    stars: [
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star-half'
    ],
    reviews: 3
  },
  {
    title: 'Cleanroom Upgrade',
    stars: [
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star-half'
    ],
    reviews: 3
  },
  {
    title: 'Quality Control',
    stars: [
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star-half'
    ],
    reviews: 3
  },
  {
    title: 'Analytical Equipment',
    stars: [
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star-half'
    ],
    reviews: 3
  },
  {
    title: 'Vaccine Development',
    stars: [
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star-half'
    ],
    reviews: 3
  },
  {
    title: 'Packaging Line',
    stars: [
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star-half'
    ],
    reviews: 3
  },
  {
    title: 'IT Infrastructure',
    stars: [
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star-half'
    ],
    reviews: 3
  },
  {
    title: 'Clinical Trials',
    stars: [
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star-half'
    ],
    reviews: 3
  },
  {
    title: 'Cold Chain',
    stars: [
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star',
      'ph-fill ph-star-half'
    ],
    reviews: 3
  }
];

}
