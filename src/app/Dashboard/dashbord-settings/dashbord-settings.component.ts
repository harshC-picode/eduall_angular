import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardSidebarComponent } from '../../shared/dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'app-dashbord-settings',
  imports: [RouterLink,DashboardSidebarComponent],
  templateUrl: './dashbord-settings.component.html',
  styleUrl: './dashbord-settings.component.scss'
})
export class DashbordSettingsComponent {

}
