import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InstructorSidebarComponent } from '../../shared/instructor-sidebar/instructor-sidebar.component';

@Component({
  selector: 'app-instructor-dashboard-quiz-attempts',
  imports: [CommonModule,InstructorSidebarComponent],
  templateUrl: './instructor-dashboard-quiz-attempts.component.html',
  styleUrl: './instructor-dashboard-quiz-attempts.component.scss'
})
export class InstructorDashboardQuizAttemptsComponent {

  sidebarActive = false;

toggleSidebar(): void {
  console.log("clicked...");
  
  this.sidebarActive = !this.sidebarActive;
}

closeSidebar(): void {
  this.sidebarActive = false;
}
quizResults = [
  {
    title: "Financial Planning for Millennials",
    instructor: "Brooklyn Simmons",
    date: "January 20, 2025",
    questions: 4,
    correct: 7,
    wrong: 1,
    status: "Pass"
  },
  {
    title: "Photography for Beginners",
    instructor: "Ralph Edwards",
    date: "January 20, 2025",
    questions: 4,
    correct: 4,
    wrong: 8,
    status: "Pass"
  },
  {
    title: "Adobe Photoshop Essentials",
    instructor: "Cameron Williamson",
    date: "January 20, 2025",
    questions: 9,
    correct: 3,
    wrong: 1,
    status: "Fail"
  },
  {
    title: "Leadership and Management Essentials",
    instructor: "Kristin Watson",
    date: "January 20, 2025",
    questions: 6,
    correct: 1,
    wrong: 2,
    status: "Pass"
  },
  {
    title: "Web Development Bootcamp",
    instructor: "Annette Black",
    date: "January 20, 2025",
    questions: 4,
    correct: 1,
    wrong: 6,
    status: "Pass"
  },
  {
    title: "Digital Marketing Fundamentals",
    instructor: "Courtney Henry",
    date: "January 20, 2025",
    questions: 4,
    correct: 3,
    wrong: 2,
    status: "Fail"
  },
  {
    title: "Digital Marketing 101",
    instructor: "Bessie Cooper",
    date: "January 20, 2025",
    questions: 2,
    correct: 3,
    wrong: 5,
    status: "Pass"
  },
  {
    title: "Introduction to Python Programming",
    instructor: "Albert Flores",
    date: "January 20, 2025",
    questions: 6,
    correct: 3,
    wrong: 8,
    status: "Fail"
  },
  {
    title: "Social Media Strategy",
    instructor: "Esther Howard",
    date: "January 20, 2025",
    questions: 8,
    correct: 6,
    wrong: 9,
    status: "Fail"
  },
  {
    title: "Project Management Fundamentals",
    instructor: "Jane Cooper",
    date: "January 20, 2025",
    questions: 2,
    correct: 5,
    wrong: 7,
    status: "Pass"
  },
  {
    title: "Social Media Strategy",
    instructor: "Jacob Jones",
    date: "January 20, 2025",
    questions: 9,
    correct: 8,
    wrong: 6,
    status: "Fail"
  },
  {
    title: "Creative Writing Essentials",
    instructor: "Cody Fisher",
    date: "January 20, 2025",
    questions: 1,
    correct: 6,
    wrong: 5,
    status: "Fail"
  }
];

}
