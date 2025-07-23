import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentSidebarComponent } from '../../shared/student-sidebar/student-sidebar.component';

@Component({
  selector: 'app-student-dashbord-settings',
  imports: [StudentSidebarComponent],
  templateUrl: './student-dashbord-settings.component.html',
  styleUrl: './student-dashbord-settings.component.scss'
})
export class StudentDashbordSettingsComponent {
sidebarActive = false;

toggleSidebar(): void {
  this.sidebarActive = !this.sidebarActive;
}

closeSidebar(): void {
  this.sidebarActive = false;
}
}
