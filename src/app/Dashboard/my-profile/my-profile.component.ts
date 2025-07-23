import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardSidebarComponent } from '../../shared/dashboard-sidebar/dashboard-sidebar.component';
import { CommonModule } from '@angular/common';
import { AdminNavComponent } from '../../shared/admin-nav/admin-nav.component';

@Component({
  selector: 'app-my-profile',
  imports: [RouterLink,DashboardSidebarComponent,CommonModule,AdminNavComponent],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {
  sidebarVisible = false;

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  hideSidebar(): void {
    this.sidebarVisible = false;
  }
}
