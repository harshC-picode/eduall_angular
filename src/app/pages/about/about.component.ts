import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, BreadcrumbComponent, SlickCarouselModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  
  brandImages: string[] = [
    'assets/images/thumbs/brand-img1.png',
    'assets/images/thumbs/brand-img2.png',
    'assets/images/thumbs/brand-img3.png',
    'assets/images/thumbs/brand-img4.png',
    'assets/images/thumbs/brand-img5.png',
    'assets/images/thumbs/brand-img6.png',
    'assets/images/thumbs/brand-img7.png',
    'assets/images/thumbs/brand-img1.png',
    'assets/images/thumbs/brand-img2.png',
    'assets/images/thumbs/brand-img3.png'
  ];

  testimonials = [
    {
      image: 'assets/images/thumbs/testimonial-img1.png',
      message: `Enrolling in courses at EduAll was one of the best decisions I've made for my career.`,
      name: 'Kathryn Murphy',
      role: 'Software Developer'
    },
    {
      image: 'assets/images/thumbs/testimonial-img2.png',
      message: `Signing up for courses at EduAll was quite possibly one of the best choices I've made.`,
      name: 'John Doe',
      role: 'UX/UI Designer'
    }
  ];

  brandSlideConfig = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  };

  testimonialSliderConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 600
  };

  

  

  

  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }
}
