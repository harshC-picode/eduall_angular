import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InstructorSidebarComponent } from '../../shared/instructor-sidebar/instructor-sidebar.component';

@Component({
  selector: 'app-instructor-dashboard-message',
  imports: [InstructorSidebarComponent],
  templateUrl: './instructor-dashboard-message.component.html',
  styleUrl: './instructor-dashboard-message.component.scss'
})
export class InstructorDashboardMessageComponent {

}
