import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardSidebarComponent } from '../../shared/dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'app-dashbord-message',
  imports: [RouterLink,DashboardSidebarComponent],
  templateUrl: './dashbord-message.component.html',
  styleUrl: './dashbord-message.component.scss'
})
export class DashbordMessageComponent {

}
