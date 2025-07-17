import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashbord-quiz-attempts',
  imports: [RouterLink,CommonModule],
  templateUrl: './dashbord-quiz-attempts.component.html',
  styleUrl: './dashbord-quiz-attempts.component.scss'
})
export class DashbordQuizAttemptsComponent {
quizResults = [
  {
    title: 'Financial Planning for Millennials',
    author: 'Brooklyn Simmons',
    date: 'January 20, 2025',
    questions: 4,
    correct: 7,
    wrong: 1,
    status: 'Pass'
  },
  {
    title: 'Photography for Beginners',
    author: 'Ralph Edwards',
    date: 'January 20, 2025',
    questions: 4,
    correct: 4,
    wrong: 8,
    status: 'Pass'
  },
  {
    title: 'Adobe Photoshop Essentials',
    author: 'Cameron Williamson',
    date: 'January 20, 2025',
    questions: 9,
    correct: 3,
    wrong: 1,
    status: 'Fail'
  },
  {
    title: 'Leadership and Management Essentials',
    author: 'Kristin Watson',
    date: 'January 20, 2025',
    questions: 6,
    correct: 1,
    wrong: 2,
    status: 'Pass'
  },
  {
    title: 'Web Development Bootcamp',
    author: 'Annette Black',
    date: 'January 20, 2025',
    questions: 4,
    correct: 1,
    wrong: 6,
    status: 'Pass'
  },
  {
    title: 'Digital Marketing Fundamentals',
    author: 'Courtney Henry',
    date: 'January 20, 2025',
    questions: 4,
    correct: 3,
    wrong: 2,
    status: 'Fail'
  },
  {
    title: 'Digital Marketing 101',
    author: 'Bessie Cooper',
    date: 'January 20, 2025',
    questions: 2,
    correct: 3,
    wrong: 5,
    status: 'Pass'
  },
  {
    title: 'Introduction to Python Programming',
    author: 'Albert Flores',
    date: 'January 20, 2025',
    questions: 6,
    correct: 3,
    wrong: 8,
    status: 'Fail'
  },
  {
    title: 'Social Media Strategy',
    author: 'Esther Howard',
    date: 'January 20, 2025',
    questions: 8,
    correct: 6,
    wrong: 9,
    status: 'Fail'
  },
  {
    title: 'Project Management Fundamentals',
    author: 'Jane Cooper',
    date: 'January 20, 2025',
    questions: 2,
    correct: 5,
    wrong: 7,
    status: 'Pass'
  },
  {
    title: 'Social Media Strategy',
    author: 'Jacob Jones',
    date: 'January 20, 2025',
    questions: 9,
    correct: 8,
    wrong: 6,
    status: 'Fail'
  },
  {
    title: 'Creative Writing Essentials',
    author: 'Cody Fisher',
    date: 'January 20, 2025',
    questions: 1,
    correct: 6,
    wrong: 5,
    status: 'Fail'
  }
];


}
