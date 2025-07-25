import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index-6',
  standalone: true,
  imports: [RouterLink, CommonModule,
    SlickCarouselModule],
  templateUrl: './index-6.component.html',
  styleUrl: './index-6.component.scss'
})
export class Index6Component {
 
  sliderConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  tutors = [
    {
      name: 'Albert Flores',
      subject: 'English Expert',
      image: 'assets/images/thumbs/our-popular-tutors-six-img1.png'
    },
    {
      name: 'Albert Flores',
      subject: 'English Expert',
      image: 'assets/images/thumbs/our-popular-tutors-six-img2.png'
    },
    {
      name: 'Albert Flores',
      subject: 'English Expert',
      image: 'assets/images/thumbs/our-popular-tutors-six-img3.png'
    },
    {
      name: 'Albert Flores',
      subject: 'English Expert',
      image: 'assets/images/thumbs/our-popular-tutors-six-img4.png'
    },
    {
      name: 'Albert Flores',
      subject: 'English Expert',
      image: 'assets/images/thumbs/our-popular-tutors-six-img2.png'
    }
  ];

  
  sliderConfig2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: '#tastimonial-six-prev',
    nextArrow: '#tastimonial-six-next',
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1 } }
    ]
  };

  testimonials = [
    {
      rating: [1, 1, 1, 1, 0.5],
      quote: `I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed.`,
      img: 'assets/images/thumbs/testimonial-five-img2.png',
      name: 'Marvin McKinney',
      title: 'Ethical Hacker',
      shape: 'bg-main-200',
      shapeClass: 'triangle-shape'
    },
    {
      rating: [1, 1, 1, 1, 0.5],
      quote: `I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed.`,
      img: 'assets/images/thumbs/testimonials-six-img1.png',
      name: 'Marvin McKinney',
      title: 'Ethical Hacker',
      shape: 'bg-danger-200',
      shapeClass: 'triangle-shape shape-bg-red-light'
    },
    {
      rating: [1, 1, 1, 1, 0.5],
      quote: `I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed.`,
      img: 'assets/images/thumbs/testimonials-six-img2.png',
      name: 'Marvin McKinney',
      title: 'Ethical Hacker',
      shape: 'bg-success-200',
      shapeClass: 'triangle-shape shape-bg-green-light'
    },
    {
      rating: [1, 1, 1, 1, 0.5],
      quote: `I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed.`,
      img: 'assets/images/thumbs/testimonials-six-img1.png',
      name: 'Marvin McKinney',
      title: 'Ethical Hacker',
      shape: 'bg-danger-200',
      shapeClass: 'triangle-shape shape-bg-red-light'
    }
  ];
}


