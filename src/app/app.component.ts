import {
  Component,
  AfterViewInit,
  NgZone,
  Inject,
  PLATFORM_ID,
  ApplicationRef,
} from '@angular/core';
import { HostListener, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd, NavigationStart } from '@angular/router';

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
  @ViewChild('progressPath') progressPath!: ElementRef<SVGPathElement>;

  private pathLength = 307; // Based on your circle's stroke circumference



  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateProgress();
  }

  updateProgress() {
  if (!this.progressPath?.nativeElement) {
    // Progress path not yet available, so skip the update
    return;
  }

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollTop / scrollHeight;
  const offset = this.pathLength * (1 - progress);

  this.progressPath.nativeElement.style.strokeDashoffset = offset.toString();
}


  // updateProgress() {
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //   const progress = scrollTop / scrollHeight;
  //   const offset = this.pathLength * (1 - progress);
  //   this.progressPath.nativeElement.style.strokeDashoffset = offset.toString();
  // }

  scrollToTop() {
    console.log("top clicked");
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  isLoading = true;

  constructor(
    private appRef: ApplicationRef,
    private ngZone: NgZone,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
        }

        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        }
      });
    }
  }

  async ngAfterViewInit(): Promise<void> {
    // ✅ Only run logic on browser (optional if SSR)
    if (!isPlatformBrowser(this.platformId)) return;

    // ✅ Check if #progressPath is available before using it
    if (this.progressPath?.nativeElement) {
      const path = this.progressPath.nativeElement;
      path.style.strokeDasharray = this.pathLength.toString();
      path.style.strokeDashoffset = this.pathLength.toString();
      this.updateProgress();
    } else {
      console.warn('⚠️ #progressPath element not found');
    }

    // 🌐 AOS Init
    AOS.init({ duration: 1000, once: true });

    // 🔄 WOW Init
    await this.initWOW();

    // ⏳ Refresh animations on route change
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.refresh();

          const elements = Array.from(document.querySelectorAll('.wow')).filter((el) => {
            try {
              return el && window.getComputedStyle(el);
            } catch {
              return false;
            }
          });

          if (typeof WOW === 'function' && elements.length > 0) {
            try {
              const wow = new WOW({ live: false });
              wow.init();
              setTimeout(() => wow.sync(), 300);
            } catch (e) {
              console.warn('WOW.js failed to init on route:', e);
            }
          } else {
            console.warn('WOW.js skipped — elements not ready or unsupported browser.');
          }
        }, 500);
      }
    });


    // 🧹 Hide preloader
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }


  private async initWOW() {
    try {
      // Lazy-load WOW.js

        if (typeof window !== 'undefined') {
      // Force a safe getComputedStyle to prevent WOW.js shim error
      const nativeGetComputedStyle = window.getComputedStyle;
      (window as any).getComputedStyle = function(element: Element, pseudoElt?: string | null) {
        // Use native if available, else safe fallback
        if (nativeGetComputedStyle) {
          return nativeGetComputedStyle(element, pseudoElt);
        }
        return {
          getPropertyValue: (_prop: string) => null,
        };
      };
    }
      const { WOW } = await import('wowjs');

      this.appRef.isStable.subscribe((isStable) => {
        if (isStable && typeof WOW === 'function') {
          this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              // Make sure at least one element with .wow exists and won't cause undefined errors
              const elements = document.querySelectorAll('.wow');

              if (
                elements.length > 0 &&
                typeof window.getComputedStyle === 'function'
              ) {
                try {
                  const wow = new WOW({ live: false });
                  wow.init();
                } catch (wowError) {
                  console.warn('❌ WOW.js failed to init safely:', wowError);
                }
              } else {
                console.warn('WOW.js: No .wow elements or computedStyle unavailable');
              }
            }, 200); // Give time for DOM to render
          });
        }
      });
    } catch (e) {
      console.error('❌ WOW import failed:', e);
    }
  }



  // private waitForjQuery(callback: () => void) {
  //   let retries = 0;
  //   const maxRetries = 20;

  //   const check = () => {
  //     if (typeof (window as any).$ === 'function') {
  //       callback();
  //     } else if (retries < maxRetries) {
  //       retries++;
  //       setTimeout(check, 100);
  //     } else {
  //       console.warn('❌ jQuery ($) not loaded in time.');
  //     }
  //   };

  //   check();
  // }
}
