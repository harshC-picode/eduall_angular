import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InstructorSidebarComponent } from '../../shared/instructor-sidebar/instructor-sidebar.component';

@Component({
  selector: 'app-instructor-dashboard-my-profile',
  imports: [InstructorSidebarComponent],
  templateUrl: './instructor-dashboard-my-profile.component.html',
  styleUrl: './instructor-dashboard-my-profile.component.scss'
})
export class InstructorDashboardMyProfileComponent {

}
