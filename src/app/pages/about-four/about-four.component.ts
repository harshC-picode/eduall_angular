import { Component,AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf, CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

declare var $: any;

@Component({
  selector: 'app-about-four',
  imports:[RouterLink,SlickCarouselModule,NgForOf, CommonModule,BreadcrumbComponent],
  templateUrl: './about-four.component.html',
  styleUrls: ['./about-four.component.scss']
})
export class AboutFourComponent  {

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
 
  bgImage = 'assets/images/bg/gradient-bg-2.png';

  tutors = [
    {
      name: 'Ronald Richards',
      university: 'Global University',
      rating: 4.7,
      reviews: '6.4k',
      price: '$155',
      location: 'New York',
      img: 'assets/images/thumbs/instructor-img1.png'
    },
    {
      name: 'Jacob Jones',
      university: 'LKS University',
      rating: 4.7,
      reviews: '6.4k',
      price: '$155',
      location: 'Phoenix',
      img: 'assets/images/thumbs/instructor-img2.png'
    },
    {
      name: 'Darlene Robertson',
      university: 'Notware',
      rating: 4.7,
      reviews: '6.4k',
      price: '$155',
      location: 'Chicago',
      img: 'assets/images/thumbs/instructor-img3.png'
    },
    {
      name: 'Esther Howard',
      university: 'Global University',
      rating: 4.7,
      reviews: '6.4k',
      price: '$155',
      location: 'Phoenix',
      img: 'assets/images/thumbs/instructor-img4.png'
    },
    {
      name: 'Jacob Jones',
      university: 'LKS University',
      rating: 4.7,
      reviews: '6.4k',
      price: '$155',
      location: 'Phoenix',
      img: 'assets/images/thumbs/instructor-img2.png'
    },
    {
      name: 'Esther Howard',
      university: 'Global University',
      rating: 4.7,
      reviews: '6.4k',
      price: '$155',
      location: 'Phoenix',
      img: 'assets/images/thumbs/instructor-img4.png'
    }
  ];


  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  parentConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
  };

  tutorConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
  };

  parentTestimonials = [
    {
      name: 'Nora Fatehi',
      role: 'Engineer',
      image: 'assets/images/thumbs/testimonials-three-img3.png',
      rating: 5,
      text: `"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"`
    },
    {
      name: 'Floyd Miles',
      role: 'Doctor',
      image: 'assets/images/thumbs/testimonials-three-img4.png',
      rating: 5,
      text: `"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"`
    }
  ];

  tutorTestimonials = [
    {
      name: 'Kathryn Murphy',
      role: 'Graphic Designer',
      image: 'assets/images/thumbs/testimonials-three-img2.png',
      rating: 5,
      text: `"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"`
    },
    {
      name: 'Sarah L.',
      role: 'WP Developer',
      image: 'assets/images/thumbs/testimonials-three-img3.png',
      rating: 5,
      text: `"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"`
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
}
