import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardSidebarComponent } from '../../shared/dashboard-sidebar/dashboard-sidebar.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashbord-message',
  imports: [RouterLink,DashboardSidebarComponent,CommonModule],
  templateUrl: './dashbord-message.component.html',
  styleUrl: './dashbord-message.component.scss'
})
export class DashbordMessageComponent {
    sidebarActive = false;

toggleSidebar(): void {
  this.sidebarActive = !this.sidebarActive;
}

closeSidebar(): void {
  this.sidebarActive = false;
}
}
