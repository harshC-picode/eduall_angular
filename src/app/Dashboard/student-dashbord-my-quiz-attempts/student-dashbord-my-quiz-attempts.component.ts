import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentSidebarComponent } from '../../shared/student-sidebar/student-sidebar.component';

@Component({
  selector: 'app-student-dashbord-my-quiz-attempts',
  imports: [StudentSidebarComponent],
  templateUrl: './student-dashbord-my-quiz-attempts.component.html',
  styleUrl: './student-dashbord-my-quiz-attempts.component.scss'
})
export class StudentDashbordMyQuizAttemptsComponent {
sidebarActive = false;

toggleSidebar(): void {
  this.sidebarActive = !this.sidebarActive;
}

closeSidebar(): void {
  this.sidebarActive = false;
}
}
