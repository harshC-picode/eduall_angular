import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index-6',
  standalone: true,
  imports: [RouterLink,CommonModule,
    SlickCarouselModule],
  templateUrl: './index-6.component.html',
  styleUrl: './index-6.component.scss'
})
export class Index6Component {
sliderConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '#our-popular-tutors-six-prev',
    nextArrow: '#our-popular-tutors-six-next',
    infinite: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  };

  tutors = [
    { img: 'assets/images/thumbs/our-popular-tutors-six-img1.png', name: 'Albert Flores', role: 'English Expert' },
    { img: 'assets/images/thumbs/our-popular-tutors-six-img2.png', name: 'Albert Flores', role: 'English Expert' },
    { img: 'assets/images/thumbs/our-popular-tutors-six-img3.png', name: 'Albert Flores', role: 'English Expert' },
    { img: 'assets/images/thumbs/our-popular-tutors-six-img4.png', name: 'Albert Flores', role: 'English Expert' },
    { img: 'assets/images/thumbs/our-popular-tutors-six-img2.png', name: 'Albert Flores', role: 'English Expert' }
  ];

}
