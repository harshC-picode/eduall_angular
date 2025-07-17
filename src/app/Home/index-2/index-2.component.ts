import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

declare var $: any;

@Component({
  selector: 'app-index-2',
  standalone: true,
  imports: [RouterLink, CommonModule, SlickCarouselModule],
  templateUrl: './index-2.component.html',
  styleUrls: ['./index-2.component.scss']
})
export class Index2Component {
  categories = [
    {
      icon: 'assets/images/icons/category-icon1.png',
      title: 'Arts & Design',
      description: 'Courses on nutrition, fitness training, yoga...',
      courseCount: 14,
      class: 'bg-main-25 text-main-600 hover-border-main-600'
    },
    {
      icon: 'assets/images/icons/category-icon2.png',
      title: 'ArtsDesign',
      description: 'Courses on nutrition, fitness training, yoga...',
      courseCount: 15,
      class: 'bg-main-two-25 text-main-two-600 hover-border-main-two-600'
    },
    {
      icon: 'assets/images/icons/category-icon3.png',
      title: 'Data Science',
      description: 'Courses on nutrition, fitness training, yoga...',
      courseCount: 14,
      class: 'bg-main-three-25 text-main-three-600 hover-border-main-three-600'
    },
    {
      icon: 'assets/images/icons/category-icon4.png',
      title: 'Business & Finance',
      description: 'Courses on nutrition, fitness training, yoga...',
      courseCount: 21,
      class: 'bg-main-two-25 text-main-two-600 hover-border-main-two-600'
    },
    {
      icon: 'assets/images/icons/category-icon3.png',
      title: 'Data Science',
      description: 'Courses on nutrition, fitness training, yoga...',
      courseCount: 14,
      class: 'bg-main-three-25 text-main-three-600 hover-border-main-three-600'
    },
    {
      icon: 'assets/images/icons/category-icon2.png',
      title: 'ArtsDesign',
      description: 'Courses on nutrition, fitness training, yoga...',
      courseCount: 15,
      class: 'bg-main-two-25 text-main-two-600 hover-border-main-two-600'
    }
  ];

  testimonials = [
    {
      name: 'John D.',
      role: 'Graphic Designer',
      image: 'assets/images/thumbs/testi-img1.png',
      message: `"I've taken several courses through, and each one has exceeded my expectations. I've gained valuable skills that have helped me advance in my career. Highly recommend!"`,
      rating: 4.5
    },
    {
      name: 'Sarah L.',
      role: 'UI/UX Designer',
      image: 'assets/images/thumbs/testi-img2.png',
      message: `"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."`,
      rating: 4.5
    },
    {
      name: 'John Doe',
      role: 'Front End Developer',
      image: 'assets/images/thumbs/user-two-img3.png',
      message: `"I was at first doubtful about web based learning, yet adjusted my viewpoint totally. The courses are very much planned to learn at my own speed is important."`,
      rating: 4.5
    }
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    dots: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  testimonialSlideConfig = {
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true, // ✅ Enable dots
  arrows: false, // ✅ Disable arrows
  autoplay: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};


  slickPrev(slick: any) {
    slick.slickPrev();
  }

  slickNext(slick: any) {
    slick.slickNext();
  }

  testimonialPrev(slick: any) {
    slick.slickPrev();
  }

  testimonialNext(slick: any) {
    slick.slickNext();
  }
}
