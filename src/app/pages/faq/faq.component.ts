import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-faq',
  imports: [CommonModule,SlickCarouselModule,BreadcrumbComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
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
}
