import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardSidebarComponent } from '../../shared/dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'app-dashbord-reviews',
  imports: [RouterLink,CommonModule,DashboardSidebarComponent],
  templateUrl: './dashbord-reviews.component.html',
  styleUrl: './dashbord-reviews.component.scss'
})
export class DashbordReviewsComponent {
projects = [
  {
    title: 'Automation System',
    rating: 4.5,
    reviews: 3
  },
  {
    title: 'Laboratory Expansion',
    rating: 4.5,
    reviews: 3
  },
  {
    title: 'Cleanroom Upgrade',
    rating: 4.5,
    reviews: 3
  },
  {
    title: 'Quality Control',
    rating: 4.5,
    reviews: 3
  },
  {
    title: 'Analytical Equipment',
    rating: 4.5,
    reviews: 3
  },
  {
    title: 'Vaccine Development',
    rating: 4.5,
    reviews: 3
  },
  {
    title: 'Packaging Line',
    rating: 4.5,
    reviews: 3
  },
  {
    title: 'IT Infrastructure',
    rating: 4.5,
    reviews: 3
  },
  {
    title: 'Clinical Trials',
    rating: 4.5,
    reviews: 3
  },
  {
    title: 'Cold Chain',
    rating: 4.5,
    reviews: 3
  },
  {
    title: 'IT Infrastructure',
    rating: 4.5,
    reviews: 3
  }
];

}
