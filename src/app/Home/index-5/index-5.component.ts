import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-index-5',
  imports: [RouterLink, CommonModule, SlickCarouselModule],
  templateUrl: './index-5.component.html',
  styleUrl: './index-5.component.scss'
})
export class Index5Component {
  marqueeSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 5000, // total scroll duration
    autoplaySpeed: 0, // immediate scroll start
    cssEase: 'linear', // no easing, for smooth scroll
    arrows: false,
    dots: false,
    variableWidth: true // allows smooth flow of varied width items
  };

  marqueeLogos = [
    'assets/images/logo/marquee-img-1.png',
    'assets/images/logo/marquee-img-2.png',
    'assets/images/logo/marquee-img-6.png',
    'assets/images/logo/marquee-img-3.png',
    'assets/images/logo/marquee-img-3.png'
  ];
  tutorSlideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '#our-popular-prev',
    nextArrow: '#our-popular-next',
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  tutors = [
    {
      name: 'Albert Flores',
      subject: 'English Expert',
      image: 'assets/images/thumbs/our-popular-img-1.png'
    },
    {
      name: 'Theresa Webb',
      subject: 'Data And Science',
      image: 'assets/images/thumbs/our-popular-img-2.png'
    },
    {
      name: 'Jacob Jones',
      subject: 'Social Science',
      image: 'assets/images/thumbs/our-popular-img-3.png'
    },
    {
      name: 'Cody Fisher',
      subject: 'IT Specialist',
      image: 'assets/images/thumbs/our-popular-img-4.png'
    },
    {
      name: 'Albert Flores',
      subject: 'English Expert',
      image: 'assets/images/thumbs/our-popular-img-1.png'
    },
    {
      name: 'Theresa Webb',
      subject: 'Data And Science',
      image: 'assets/images/thumbs/our-popular-img-2.png'
    }
  ];
  // testimonialSliderConfig = {
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   dots: false,
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // };

  // testimonials = [
  //   {
  //     stars: ['ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star-half'],
  //     message: `"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."`,
  //     image: 'assets/images/thumbs/testimonial-five-img1.png',
  //     name: 'Jane Cooper',
  //     title: 'President of Sales',
  //     aos: 'zoom-in',
  //     duration: '400'
  //   },
  //   {
  //     stars: ['ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star-half'],
  //     message: `"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."`,
  //     image: 'assets/images/thumbs/testimonial-five-img2.png',
  //     name: 'Jane Cooper',
  //     title: 'President of Sales',
  //     aos: 'zoom-in',
  //     duration: '800'
  //   },
  //   {
  //     stars: ['ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star-half'],
  //     message: `"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."`,
  //     image: 'assets/images/thumbs/testimonial-five-img3.png',
  //     name: 'Jane Cooper',
  //     title: 'President of Sales',
  //     aos: 'zoom-in',
  //     duration: '1200'
  //   },
  //   {
  //     stars: ['ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star', 'ph-fill ph-star-half'],
  //     message: `"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."`,
  //     image: 'assets/images/thumbs/testimonial-five-img2.png',
  //     name: 'Jane Cooper',
  //     title: 'President of Sales',
  //     aos: 'zoom-in',
  //     duration: '400'
  //   }
  // ];



  testimonials = [
    {
      stars: [1,1,1,1,0.5],
      text: `"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."`,
      name: 'Jane Cooper',
      title: 'President of Sales',
      img: 'assets/images/thumbs/testimonial-five-img1.png'
    },
    {
      stars: [1,1,1,1,0.5],
      text: `"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."`,
      name: 'Jane Cooper',
      title: 'President of Sales',
      img: 'assets/images/thumbs/testimonial-five-img2.png'
    },
    {
      stars: [1,1,1,1,0.5],
      text: `"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."`,
      name: 'Jane Cooper',
      title: 'President of Sales',
      img: 'assets/images/thumbs/testimonial-five-img3.png'
    },
    {
      stars: [1,1,1,1,0.5],
      text: `"I was initially skeptical about online learning, but changed my perspective completely. The courses are well-designed, and the flexibility to learn at my own pace is invaluable."`,
      name: 'Jane Cooper',
      title: 'President of Sales',
      img: 'assets/images/thumbs/testimonial-five-img2.png'
    }
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: false,
    adaptiveHeight: false,
     responsive: [
    {
      breakpoint: 992,   // below 992px width
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,   // below 576px width (optional)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };
}

