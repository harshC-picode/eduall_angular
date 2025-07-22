import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  ViewChild,
  PLATFORM_ID,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationStart } from '@angular/router'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor, NgClass, CommonModule, isPlatformBrowser } from '@angular/common'; 

import { MobileSidebarComponent } from '../../shared/mobile-sidebar/mobile-sidebar.component';

import { Select2, Select2Data } from 'ng-select2-component';
import { Subscription } from 'rxjs'; 
import { CategoryDropdown2Component } from '../../shared/category-dropdown2/category-dropdown2.component';

declare var $: any;

@Component({
  selector: 'app-header4',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CategoryDropdown2Component,
    MobileSidebarComponent,
    RouterLinkActive,
    NgClass,
    NgFor,
    NgIf
  ],
  templateUrl: './header4.component.html',
  styleUrl: './header4.component.scss'
})
export class Header4Component implements OnDestroy { 

  isActiveProgress: boolean = false;
  private pathLength!: number;

  activeIndex: any | null = null;
  windowWidth: number = 0;
  isBrowser: boolean = false;

  selectedCategory: string = '';
  searchTerm: string = '';
  isHomePageActive: boolean = false;
  categoryDropdownVisible = false;
  isActive = false;

  isMobileMenuActive: boolean = false;
  activeDropdown: string | null = null;

  private routerSub!: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.windowWidth = window.innerWidth;
    }

    
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.closeMobileMenu();
      }
    });
  }

 
  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;

    if (this.isMobileMenuActive) {
      document.body.classList.add('scroll-hide-sm');
    } else {
      document.body.classList.remove('scroll-hide-sm');
    }
  }

  closeMobileMenu() {
    this.isMobileMenuActive = false;
    document.body.classList.remove('scroll-hide-sm');
    console.log("closed");
  }

  onResize() {
    this.windowWidth = window.innerWidth;
  }

  toggleSubmenu(index: string) {
    if (this.windowWidth < 992) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }

  isParentActive(routes: string[]): boolean {
    const currentUrl = this.router.url;
    return routes.some(route => route !== '/' ? currentUrl.startsWith(route) : currentUrl === route);
  }

  toggleDropdown(menu: string): void {
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }
}
