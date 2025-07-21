import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-student-sidebar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './student-sidebar.component.html',
  styleUrl: './student-sidebar.component.scss'
})
export class StudentSidebarComponent {

}
