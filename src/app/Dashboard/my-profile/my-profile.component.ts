import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardSidebarComponent } from '../../shared/dashboard-sidebar/dashboard-sidebar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-my-profile',
  imports: [RouterLink,DashboardSidebarComponent,CommonModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {
    sidebarActive = false;

toggleSidebar(): void {
  this.sidebarActive = !this.sidebarActive;
}

closeSidebar(): void {
  this.sidebarActive = false;
}
}
