import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardSidebarComponent } from '../../shared/dashboard-sidebar/dashboard-sidebar.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashbord-settings',
  imports: [RouterLink,DashboardSidebarComponent,CommonModule],
  templateUrl: './dashbord-settings.component.html',
  styleUrl: './dashbord-settings.component.scss'
})
export class DashbordSettingsComponent {
    sidebarActive = false;

toggleSidebar(): void {
  this.sidebarActive = !this.sidebarActive;
}

closeSidebar(): void {
  this.sidebarActive = false;
}
}
