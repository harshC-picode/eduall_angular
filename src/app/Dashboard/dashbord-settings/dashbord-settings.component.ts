import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardSidebarComponent } from '../../shared/dashboard-sidebar/dashboard-sidebar.component';
import { AdminNavComponent } from '../../shared/admin-nav/admin-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashbord-settings',
  imports: [RouterLink,DashboardSidebarComponent,AdminNavComponent,CommonModule],
  templateUrl: './dashbord-settings.component.html',
  styleUrl: './dashbord-settings.component.scss'
})
export class DashbordSettingsComponent {
sidebarVisible = false;

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  hideSidebar(): void {
    this.sidebarVisible = false;
  }
}
