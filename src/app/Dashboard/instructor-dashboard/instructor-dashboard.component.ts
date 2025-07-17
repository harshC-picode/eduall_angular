import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-instructor-dashboard',
  imports: [RouterLink,CommonModule],
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

}
