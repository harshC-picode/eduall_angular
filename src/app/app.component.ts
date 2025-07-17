

import {
  Component,
  AfterViewInit,
  NgZone,
  Inject,
  PLATFORM_ID,
  ApplicationRef,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

// Declare global JS libraries
declare var AOS: any;
declare var WOW: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(
    private appRef: ApplicationRef,
    private ngZone: NgZone,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Scroll to top on navigation
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      });
    }
  }

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;

    // AOS Init
    AOS.init({
      duration: 1000,
      once: true,
    });

    // WOW Init
    await this.initWOW();

    // Sync animations after each navigation (for lazy-loaded components)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.refresh(); // Re-initialize AOS
          if (typeof WOW === 'function') {
            const wow = new WOW({ live: false });
            wow.init();
          }
        }, 500);
      }
    });
  }

  private async initWOW() {
    try {
      const { WOW } = await import('wowjs');
      this.appRef.isStable.subscribe((isStable) => {
        if (isStable) {
          this.ngZone.runOutsideAngular(() => {
            this.waitForjQuery(() => {
              setTimeout(() => {
                const wowElements = document.querySelectorAll('.wow');
                if (wowElements.length > 0) {
                  const wow = new WOW({ live: false });
                  wow.init();
                  setTimeout(() => wow.sync(), 300);
                }
              }, 300);
            });
          });
        }
      });
    } catch (error) {
      console.error('❌ Error initializing WOW.js:', error);
    }
  }

  private waitForjQuery(callback: () => void) {
    let retries = 0;
    const maxRetries = 20;

    const check = () => {
      if (typeof (window as any).$ === 'function') {
        callback();
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(check, 100);
      } else {
        console.warn('❌ jQuery ($) not loaded in time.');
      }
    };

    check();
  }
}
