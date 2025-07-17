import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterLink, SlickCarouselModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

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

  features = [
    {
      title: 'Language Learning',
      description: 'Courses teaching English, Spanish, French, Mandarin etc.',
      icon: 'assets/images/icons/feature-icon1.png',
      duration: 400
    },
    {
      title: 'Creative Arts & Design',
      description: 'Courses on graphic design, digital art, photography, video editing',
      icon: 'assets/images/icons/feature-icon2.png',
      duration: 800
    },
    {
      title: 'Health & Fitness',
      description: 'Courses on nutrition, fitness training, yoga, meditation...',
      icon: 'assets/images/icons/feature-icon3.png',
      duration: 1200
    },
    {
      title: 'Business & Marketing',
      description: 'Courses on entrepreneurship, marketing, and leadership',
      icon: 'assets/images/icons/feature-icon4.png',
      duration: 1600
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

  featuresSlideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '#features-prev',
    nextArrow: '#features-next',
    dots: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
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
}
