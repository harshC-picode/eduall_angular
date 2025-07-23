
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-admin-nav',
  imports: [RouterLink],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.scss'
})




export class AdminNavComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  onMenuClick() {
    this.toggleSidebar.emit();
  }
}
