import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-instructor-details',
  imports: [RouterLink,BreadcrumbComponent,CommonModule,SlickCarouselModule],
  templateUrl: './instructor-details.component.html',
  styleUrl: './instructor-details.component.scss'
})
export class InstructorDetailsComponent {
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
