import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentSidebarComponent } from '../../shared/student-sidebar/student-sidebar.component';

@Component({
  selector: 'app-student-dashbord-assignment',
  imports: [StudentSidebarComponent],
  templateUrl: './student-dashbord-assignment.component.html',
  styleUrl: './student-dashbord-assignment.component.scss'
})
export class StudentDashbordAssignmentComponent {
 sidebarActive = false;

toggleSidebar(): void {
  this.sidebarActive = !this.sidebarActive;
}

closeSidebar(): void {
  this.sidebarActive = false;
}
}
