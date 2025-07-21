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


  courses = [
    {
      image: 'assets/images/thumbs/course-img1.png',
      userImage: 'assets/images/thumbs/user-two-img1.png',
      categories: [
        {
          name: 'Marketing',
          class: 'text-main-600 bg-main-25 hover-bg-main-600 hover-text-white'
        },
        {
          name: 'Beginner',
          class: 'text-main-three-600 bg-main-three-25 hover-bg-main-three-600 hover-text-white'
        }
      ],
      title: 'Introduction to Digital Marketing',
      lessons: 20,
      duration: '9h 36m',
      students: '1.5K',
      price: '$148',
      rating: 4,
      ratingCount: '6.4k',
      aos: { animation: 'fade-up', duration: 200 }
    },
    {
      image: 'assets/images/thumbs/course-img2.png',
      userImage: 'assets/images/thumbs/user-two-img2.png',
      categories: [
        {
          name: 'Python',
          class: 'text-main-600 bg-main-25 hover-bg-main-600 hover-text-white'
        },
        {
          name: 'Beginner',
          class: 'text-main-three-600 bg-main-three-25 hover-bg-main-three-600 hover-text-white'
        }
      ],
      title: 'Mastering Python : From Zero to Hero',
      lessons: 20,
      duration: '9h 36m',
      students: '1.5K',
      price: '$148',
      rating: 5,
      ratingCount: '6.4k',
      aos: { animation: 'fade-up', duration: 400 }
    },
    {
      image: 'assets/images/thumbs/course-img3.png',
      userImage: 'assets/images/thumbs/user-two-img3.png',
      categories: [
        {
          name: 'Graphic Design',
          class: 'text-main-600 bg-main-25 hover-bg-main-600 hover-text-white'
        },
        {
          name: 'Beginner',
          class: 'text-main-three-600 bg-main-three-25 hover-bg-main-three-600 hover-text-white'
        }
      ],
      title: "Beginner's Guide to Adobe Photoshop",
      lessons: 20,
      duration: '9h 36m',
      students: '1.5K',
      price: '$148',
      rating: 3,
      ratingCount: '6.4k',
      aos: { animation: 'fade-up', duration: 600 }
    },
    {
      image: 'assets/images/thumbs/course-img3.png',
      userImage: 'assets/images/thumbs/user-two-img3.png',
      categories: [
        {
          name: 'ART Design',
          class: 'text-main-600 bg-main-25 hover-bg-main-600 hover-text-white'
        },
        {
          name: 'Beginner',
          class: 'text-main-three-600 bg-main-three-25 hover-bg-main-three-600 hover-text-white'
        }
      ],
      title: 'The Art of Public Speaking online Course',
      lessons: 20,
      duration: '9h 36m',
      students: '1.5K',
      price: '$148',
      rating: 4,
      ratingCount: '6.4k',
      aos: { animation: 'fade-up', duration: 200 }
    }
  ];






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
