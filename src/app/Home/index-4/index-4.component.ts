import { Component, Inject, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';
import { HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Select2, Select2Data } from 'ng-select2-component';
import { CategoryDropdownComponent } from '../../shared/category-dropdown/category-dropdown.component';

@Component({
  selector: 'app-index-4',
  standalone: true,
  imports: [RouterLink, CommonModule, SlickCarouselModule, Select2, CategoryDropdownComponent],
  templateUrl: './index-4.component.html',
  styleUrls: ['./index-4.component.scss'],  // fixed here (plural)
})
export class Index4Component implements OnDestroy {  // add OnDestroy interface

  isActiveProgress = false;
  private pathLength!: number;

  activeIndex: any | null = null;
  windowWidth = 0;
  isBrowser = false;

  selectedCategory = '';
  searchTerm = '';
  isHomePageActive = false;
  categoryDropdownVisible = false;
  isActive = false;

  isMobileMenuActive = false;
  activeDropdown: string | null = null;

  private routerSub!: Subscription;

  categories: Select2Data = [
    { value: '', label: 'Physics' },
    { value: '1', label: 'Math' },
    { value: '2', label: 'Biology' },
    { value: '3', label: 'English' },
    { value: '4', label: 'Higher Math' },
    { value: '5', label: 'Social Science' },
    { value: '6', label: 'Chemistry' }
  ];

  sliderConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  };

  tutors = [
    {
      name: 'Ronald Richards',
      university: 'Global University',
      image: 'assets/images/thumbs/instructor-img1.png',
      rating: 4.7,
      reviews: '6.4k',
      price: 155,
      location: 'New York'
    },
    {
      name: 'Jacob Jones',
      university: 'LKS University',
      image: 'assets/images/thumbs/instructor-img2.png',
      rating: 4.7,
      reviews: '6.4k',
      price: 155,
      location: 'Phoenix'
    },
    {
      name: 'Darlene Robertson',
      university: 'Notware',
      image: 'assets/images/thumbs/instructor-img3.png',
      rating: 4.7,
      reviews: '6.4k',
      price: 155,
      location: 'Chicago'
    },
    {
      name: 'Esther Howard',
      university: 'Global University',
      image: 'assets/images/thumbs/instructor-img4.png',
      rating: 4.7,
      reviews: '6.4k',
      price: 155,
      location: 'Phoenix'
    }
  ];

  reviewSliderConfig = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  parentReviews = [
    {
      image: 'assets/images/thumbs/testimonials-three-img1.png',
      name: 'Robiul Hasan',
      role: 'Front End Developer',
      comment: "I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!",
    },
    {
      image: 'assets/images/thumbs/testimonials-three-img4.png',
      name: 'Floyd Miles',
      role: 'Doctor',
      comment: "These programs changed my learning style. Highly structured and practical.",
    },
    {
      image: 'assets/images/thumbs/testimonials-three-img3.png',
      name: 'Nora Fatehi',
      role: 'Engineer',
      comment: "I've gained valuable teaching experience and got connected with passionate students.",
    }
  ];

  tutorReviews = [
    {
      image: 'assets/images/thumbs/testimonials-three-img2.png',
      name: 'Kathryn Murphy',
      role: 'Graphic Designer',
      comment: "EduAll gave me the flexibility to teach and mentor without boundaries. Love it!",
    },
    {
      image: 'assets/images/thumbs/testimonials-three-img3.png',
      name: 'Nora Fatehi',
      role: 'Engineer',
      comment: "I've gained valuable teaching experience and got connected with passionate students.",
    },
    {
      image: 'assets/images/thumbs/testimonials-three-img1.png',
      name: 'Robiul Hasan',
      role: 'Front End Developer',
      comment: "I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!",
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router    // add router injection
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

  toggleMobileMenu(): void {
    this.isMobileMenuActive = !this.isMobileMenuActive;

    if (this.isMobileMenuActive) {
      document.body.classList.add('scroll-hide-sm');
    } else {
      document.body.classList.remove('scroll-hide-sm');
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuActive = false;
    document.body.classList.remove('scroll-hide-sm');
    console.log('closed');
  }

  // Make sure to add @HostListener for window resize if you want responsive logic
  @HostListener('window:resize', [])
  onResize(): void {
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
