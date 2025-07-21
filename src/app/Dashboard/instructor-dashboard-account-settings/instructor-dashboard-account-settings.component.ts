import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InstructorSidebarComponent } from '../../shared/instructor-sidebar/instructor-sidebar.component';

@Component({
  selector: 'app-instructor-dashboard-account-settings',
  imports: [InstructorSidebarComponent],
  templateUrl: './instructor-dashboard-account-settings.component.html',
  styleUrl: './instructor-dashboard-account-settings.component.scss'
})
export class InstructorDashboardAccountSettingsComponent {

}
