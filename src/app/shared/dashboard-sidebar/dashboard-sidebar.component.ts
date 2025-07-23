import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss'
})



export class DashboardSidebarComponent implements OnChanges {
  @Input() sidebarVisible: boolean = false;
  @Output() closeSidebar = new EventEmitter();

  @ViewChild('sidebar', { static: true }) sidebarRef!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
  if (changes['sidebarVisible'] && this.sidebarRef) {
    const el = this.sidebarRef.nativeElement as HTMLElement;

    if (this.sidebarVisible) {
      el.style.transform = 'translateX(0px)';
    } else {
      el.style.transform = 'translateX(-100%)';
    }
  }
}

}
