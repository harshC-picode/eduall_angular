import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InstructorSidebarComponent } from '../../shared/instructor-sidebar/instructor-sidebar.component';

@Component({
  selector: 'app-instructor-dashboard-my-quiz-attempts',
  imports: [CommonModule,InstructorSidebarComponent],
  templateUrl: './instructor-dashboard-my-quiz-attempts.component.html',
  styleUrl: './instructor-dashboard-my-quiz-attempts.component.scss'
})
export class InstructorDashboardMyQuizAttemptsComponent {
quizResults = [
  {
    title: 'Financial Planning for Millennials',
    author: 'Brooklyn Simmons',
    date: 'January 20, 2025',
    questions: 4,
    correct: 7,
    wrong: 1,
    status: 'Pass',
    statusClass: 'text-success-500 bg-main-05'
  },
  {
    title: 'Photography for Beginners',
    author: 'Ralph Edwards',
    date: 'January 20, 2025',
    questions: 4,
    correct: 4,
    wrong: 8,
    status: 'Pass',
    statusClass: 'text-success-500 bg-main-05'
  },
  {
    title: 'Adobe Photoshop Essentials',
    author: 'Cameron Williamson',
    date: 'January 20, 2025',
    questions: 9,
    correct: 3,
    wrong: 1,
    status: 'Fail',
    statusClass: 'text-warning-600 bg-warning-5'
  },
  {
    title: 'Leadership and Management Essentials',
    author: 'Kristin Watson',
    date: 'January 20, 2025',
    questions: 6,
    correct: 1,
    wrong: 2,
    status: 'Pass',
    statusClass: 'text-success-500 bg-main-05'
  },
  {
    title: 'Web Development Bootcamp',
    author: 'Annette Black',
    date: 'January 20, 2025',
    questions: 4,
    correct: 1,
    wrong: 6,
    status: 'Pass',
    statusClass: 'text-success-500 bg-main-05'
  },
  {
    title: 'Digital Marketing Fundamentals',
    author: 'Courtney Henry',
    date: 'January 20, 2025',
    questions: 4,
    correct: 3,
    wrong: 2,
    status: 'Fail',
    statusClass: 'text-warning-600 bg-warning-5'
  },
  {
    title: 'Digital Marketing 101',
    author: 'Bessie Cooper',
    date: 'January 20, 2025',
    questions: 2,
    correct: 3,
    wrong: 5,
    status: 'Pass',
    statusClass: 'text-success-500 bg-main-05'
  },
  {
    title: 'Introduction to Python Programming',
    author: 'Albert Flores',
    date: 'January 20, 2025',
    questions: 6,
    correct: 3,
    wrong: 8,
    status: 'Fail',
    statusClass: 'text-warning-600 bg-warning-5'
  },
  {
    title: 'Social Media Strategy',
    author: 'Esther Howard',
    date: 'January 20, 2025',
    questions: 8,
    correct: 6,
    wrong: 9,
    status: 'Fail',
    statusClass: 'text-warning-600 bg-warning-5'
  },
  {
    title: 'Project Management Fundamentals',
    author: 'Jane Cooper',
    date: 'January 20, 2025',
    questions: 2,
    correct: 5,
    wrong: 7,
    status: 'Pass',
    statusClass: 'text-success-500 bg-main-05'
  },
  {
    title: 'Social Media Strategy',
    author: 'Jacob Jones',
    date: 'January 20, 2025',
    questions: 9,
    correct: 8,
    wrong: 6,
    status: 'Fail',
    statusClass: 'text-warning-600 bg-warning-5'
  },
  {
    title: 'Creative Writing Essentials',
    author: 'Cody Fisher',
    date: 'January 20, 2025',
    questions: 1,
    correct: 6,
    wrong: 5,
    status: 'Fail',
    statusClass: 'text-warning-600 bg-warning-5'
  }
];

}
