import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentSidebarComponent } from '../../shared/student-sidebar/student-sidebar.component';

@Component({
  selector: 'app-student-dashbord-message',
  imports: [StudentSidebarComponent],
  templateUrl: './student-dashbord-message.component.html',
  styleUrl: './student-dashbord-message.component.scss'
})
export class StudentDashbordMessageComponent {

}
