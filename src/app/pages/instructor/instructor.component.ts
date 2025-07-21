import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructor',
  imports: [RouterLink,BreadcrumbComponent,CommonModule],
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.scss'
})
export class InstructorComponent {
instructorList = [
  {
    image: 'assets/images/thumbs/instructor-img4.png',
    name: 'Devon Lane',
    title: 'Web Developer',
    courseCount: '7 Course',
    students: '15k Students',
    rating: 4.6,
    reviews: '2.4k',
    socials: [
      { icon: 'ph-bold ph-facebook-logo', link: 'https://www.facebook.com' },
      { icon: 'ph-bold ph-twitter-logo', link: 'https://www.twitter.com' },
      { icon: 'ph-bold ph-instagram-logo', link: 'https://www.linkedin.com' }
    ]
  },
  {
    image: 'assets/images/thumbs/instructor-img2.png',
    name: 'John Doe',
    title: 'WordPress Expert',
    courseCount: '6 Course',
    students: '55k Students',
    rating: 4.6,
    reviews: '2.4k',
    socials: [
      { icon: 'ph-bold ph-facebook-logo', link: 'https://www.facebook.com' },
      { icon: 'ph-bold ph-twitter-logo', link: 'https://www.twitter.com' },
      { icon: 'ph-bold ph-instagram-logo', link: 'https://www.linkedin.com' }
    ]
  },
  {
    image: 'assets/images/thumbs/instructor-img3.png',
    name: 'Alexandar',
    title: 'UI/UX Designer',
    courseCount: '12 Course',
    students: '36k Students',
    rating: 4.6,
    reviews: '2.4k',
    socials: [
      { icon: 'ph-bold ph-facebook-logo', link: 'https://www.facebook.com' },
      { icon: 'ph-bold ph-twitter-logo', link: 'https://www.twitter.com' },
      { icon: 'ph-bold ph-instagram-logo', link: 'https://www.linkedin.com' }
    ]
  },
  {
    image: 'assets/images/thumbs/instructor-img1.png',
    name: 'Arlene McCoy',
    title: 'Web Development',
    courseCount: '6 Course',
    students: '55k Students',
    rating: 4.6,
    reviews: '2.4k',
    socials: [
      { icon: 'ph-bold ph-facebook-logo', link: 'https://www.facebook.com' },
      { icon: 'ph-bold ph-twitter-logo', link: 'https://www.twitter.com' },
      { icon: 'ph-bold ph-instagram-logo', link: 'https://www.linkedin.com' }
    ]
  },
  {
    image: 'assets/images/thumbs/instructor-img5.png',
    name: 'Albert Flores',
    title: 'Digital Marketing',
    courseCount: '12 Course',
    students: '26k Students',
    rating: 4.6,
    reviews: '2.4k',
    socials: [
      { icon: 'ph-bold ph-facebook-logo', link: 'https://www.facebook.com' },
      { icon: 'ph-bold ph-twitter-logo', link: 'https://www.twitter.com' },
      { icon: 'ph-bold ph-instagram-logo', link: 'https://www.linkedin.com' }
    ]
  },
  {
    image: 'assets/images/thumbs/instructor-img6.png',
    name: 'Kathryn Murphy',
    title: 'Graphic Design',
    courseCount: '5 Course',
    students: '9k Students',
    rating: 4.6,
    reviews: '2.4k',
    socials: [
      { icon: 'ph-bold ph-facebook-logo', link: 'https://www.facebook.com' },
      { icon: 'ph-bold ph-twitter-logo', link: 'https://www.twitter.com' },
      { icon: 'ph-bold ph-instagram-logo', link: 'https://www.linkedin.com' }
    ]
  }


];

}
