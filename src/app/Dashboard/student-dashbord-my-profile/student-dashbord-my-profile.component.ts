import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentSidebarComponent } from '../../shared/student-sidebar/student-sidebar.component';

@Component({
  selector: 'app-student-dashbord-my-profile',
  imports: [StudentSidebarComponent],
  templateUrl: './student-dashbord-my-profile.component.html',
  styleUrl: './student-dashbord-my-profile.component.scss'
})
export class StudentDashbordMyProfileComponent {

}
