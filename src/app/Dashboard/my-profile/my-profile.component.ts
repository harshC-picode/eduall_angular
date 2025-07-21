import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardSidebarComponent } from '../../shared/dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'app-my-profile',
  imports: [RouterLink,DashboardSidebarComponent],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {

}
