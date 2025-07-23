import { Component,Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-instructor-sidebar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './instructor-sidebar.component.html',
  styleUrl: './instructor-sidebar.component.scss'
})
export class InstructorSidebarComponent {
 @Input() active: boolean = false;
}
