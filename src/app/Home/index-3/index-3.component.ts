import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index3',
  standalone: true,
  templateUrl: './index-3.component.html',
  styleUrls: ['./index-3.component.scss'],
  imports: [CommonModule, RouterLink, SlickCarouselModule]
})
export class Index3Component {
  brandImages: string[] = [
    'assets/images/thumbs/brand-img1.png',
    'assets/images/thumbs/brand-img2.png',
    'assets/images/thumbs/brand-img3.png',
    'assets/images/thumbs/brand-img4.png',
    'assets/images/thumbs/brand-img5.png',
    'assets/images/thumbs/brand-img6.png',
    'assets/images/thumbs/brand-img7.png',
    'assets/images/thumbs/brand-img3.png',
    'assets/images/thumbs/brand-img4.png',
    'assets/images/thumbs/brand-img5.png',
  ];

  slides = [
    {
      bg: 'assets/images/thumbs/banner-three-img1.png',
      title: 'Empowering Minds, <span class="text-yellow-600">Shaping</span> Futures',
      desc: 'Welcome to EduAll, where learning knows no bounds...'
    },
    {
      bg: 'assets/images/thumbs/banner-three-img2.png',
      title: 'Engaging Personalities, <span class="text-yellow-600">Molding</span> Fates',
      desc: 'Whether you\'re a student, professional, or lifelong learner...'
    },
    {
      bg: 'assets/images/thumbs/banner-three-img3.png',
      title: 'Attracting Characters, <span class="text-yellow-600">Adornment</span> Fates',
      desc: 'A world of knowledge designed for everyone...'
    }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
  };

  brandConfig = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  };

  blogPosts = [
    {
      image: 'assets/images/thumbs/blog-two-img1.png',
      date: '21',
      month: 'DEC',
      title: 'Navigating the Job Market: Advice for Graduates',
      views: '1.6k',
      comments: '24',
      author: 'Admin'
    },
    {
      image: 'assets/images/thumbs/blog-two-img2.png',
      date: '21',
      month: 'DEC',
      title: 'The Importance of Diversity in Higher Education',
      views: '1.6k',
      comments: '24',
      author: 'Admin'
    },
    {
      image: 'assets/images/thumbs/blog-two-img3.png',
      date: '21',
      month: 'DEC',
      title: '10 Tips for Successful Online Learning',
      views: '1.6k',
      comments: '24',
      author: 'Admin'
    },
    {
      image: 'assets/images/thumbs/blog-two-img2.png',
      date: '21',
      month: 'DEC',
      title: 'The Importance of Diversity in Higher Education',
      views: '1.6k',
      comments: '24',
      author: 'Admin'
    }
  ];

  blogConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    prevArrow: '#blog-two-prev',
    nextArrow: '#blog-two-next',
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]

  };

  testimonials = [
    {
      image: 'assets/images/thumbs/testimonials-three-img2.png',
      text: `Attending [University Name] was one of the best decisions I've made. The`,
      name: 'Ronald Richards',
      role: 'Student'
    },
    {
      image: 'assets/images/thumbs/testimonials-three-img1.png',
      text: `"The faculty at are not only experts in their fields but teaching students."`,
      name: 'Brooklyn Simmons',
      role: 'Student'
    },
    {
      image: 'assets/images/thumbs/testimonials-three-img3.png',
      text: `As a faculty member at [University Name], I've had the privilege of working`,
      name: 'Courtney Henry',
      role: 'Student'
    },
    {
      image: 'assets/images/thumbs/testimonials-three-img3.png',
      text: `"The faculty at are not only experts in their fields but teaching students."`,
      name: 'Brooklyn Simmons',
      role: 'Student'
    }
  ];

  testimonialConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Disable arrows
    dots: false,
    infinite: true
  };



}
