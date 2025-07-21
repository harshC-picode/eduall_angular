import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InstructorSidebarComponent } from '../../shared/instructor-sidebar/instructor-sidebar.component';

@Component({
  selector: 'app-instructor-dashboard-order-history',
  imports: [CommonModule,InstructorSidebarComponent],
  templateUrl: './instructor-dashboard-order-history.component.html',
  styleUrl: './instructor-dashboard-order-history.component.scss'
})
export class InstructorDashboardOrderHistoryComponent {
transactions = [
  {
    id: '#40922',
    course: 'PHP',
    date: 'January 20, 2025',
    amount: '$ 92.93',
    status: 'Success',
    statusClass: 'text-success-600 bg-success-50'
  },
  {
    id: '#40922',
    course: 'React Courses',
    date: 'January 20, 2025',
    amount: '$ 92.93',
    status: 'Processing',
    statusClass: 'text-main-600 bg-main-05'
  },
  {
    id: '#73920',
    course: 'Angular Courses',
    date: 'January 20, 2025',
    amount: '$ 832',
    status: 'Cancelled',
    statusClass: 'text-danger-300 bg-danger-50'
  },
  {
    id: '#50924',
    course: 'Vuejs Courses',
    date: 'January 20, 2025',
    amount: '$ 837.92',
    status: 'Success',
    statusClass: 'text-success-600 bg-success-50'
  },
  {
    id: '#63508',
    course: 'Objective C Courses',
    date: 'January 20, 2025',
    amount: '$ 74.03',
    status: 'Success',
    statusClass: 'text-success-600 bg-success-50'
  },
  {
    id: '#91829',
    course: 'React Courses',
    date: 'January 20, 2025',
    amount: '$ 73.02',
    status: 'On Hold',
    statusClass: 'text-warning-600 bg-warning-5'
  },
  {
    id: '#50929',
    course: 'Python Courses',
    date: 'January 20, 2025',
    amount: '$ 91.83',
    status: 'Success',
    statusClass: 'text-success-600 bg-success-50'
  },
  {
    id: '#57394',
    course: 'Jango Courses',
    date: 'January 20, 2025',
    amount: '$ 4500',
    status: 'Processing',
    statusClass: 'text-main-600 bg-main-05'
  },
  {
    id: '#89281',
    course: 'CSS3 Courses',
    date: 'January 20, 2025',
    amount: '$ 802',
    status: 'Cancelled',
    statusClass: 'text-danger-300 bg-danger-50'
  },
  {
    id: '#29202',
    course: 'Swift Courses',
    date: 'January 20, 2025',
    amount: '$ 783.83',
    status: 'On Hold',
    statusClass: 'text-warning-600 bg-warning-5'
  },
  {
    id: '#49463',
    course: 'Java Courses',
    date: 'January 20, 2025',
    amount: '$ 839',
    status: 'Processing',
    statusClass: 'text-main-600 bg-main-05'
  },
  {
    id: '#84744',
    course: 'LaravelCourses',
    date: 'January 20, 2025',
    amount: '$ 45.99',
    status: 'Cancelled',
    statusClass: 'text-danger-300 bg-danger-50'
  }
];

}
