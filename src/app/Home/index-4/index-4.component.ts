import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index-4',
  imports: [RouterLink,CommonModule,SlickCarouselModule],
  templateUrl: './index-4.component.html',
  styleUrl: './index-4.component.scss'
})
export class Index4Component {
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
}
