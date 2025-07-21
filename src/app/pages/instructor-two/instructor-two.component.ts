import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructor-two',
  imports: [RouterLink, BreadcrumbComponent, CommonModule],
  templateUrl: './instructor-two.component.html',
  styleUrl: './instructor-two.component.scss'
})
export class InstructorTwoComponent {
  instructors = [
    {
      image: 'assets/images/thumbs/instructor-img1.png',
      name: 'Esther Howard',
      profession: 'Web Developer',
      socialLinks: [
        'https://www.facebook.com',
        'https://www.twitter.com',
        'https://www.linkedin.com'
      ]
    },
    {
      image: 'assets/images/thumbs/instructor-img2.png',
      name: 'Jerome Bell',
      profession: 'UI Designer',
      socialLinks: [
        'https://www.facebook.com',
        'https://www.twitter.com',
        'https://www.linkedin.com'
      ]
    },
    {
      image: 'assets/images/thumbs/instructor-img3.png',
      name: 'Savannah Nguyen',
      profession: 'Digital Marketer',
      socialLinks: [
        'https://www.facebook.com',
        'https://www.twitter.com',
        'https://www.linkedin.com'
      ]
    },
    {
      image: 'assets/images/thumbs/instructor-img4.png',
      name: 'Jenny Wilson',
      profession: 'WordPress Expert',
      socialLinks: [
        'https://www.facebook.com',
        'https://www.twitter.com',
        'https://www.linkedin.com'
      ]
    },
    {
      image: 'assets/images/thumbs/instructor-img5.png',
      name: 'Cameron Williamson',
      profession: 'PHP Expert',
      socialLinks: [
        'https://www.facebook.com',
        'https://www.twitter.com',
        'https://www.linkedin.com'
      ]
    },
    {
      image: 'assets/images/thumbs/instructor-img6.png',
      name: 'Wade Warren',
      profession: 'Python Developer',
      socialLinks: [
        'https://www.facebook.com',
        'https://www.twitter.com',
        'https://www.linkedin.com'
      ]
    },
    {
      image: 'assets/images/thumbs/instructor-img1.png',
      name: 'Kathryn Murphy',
      profession: 'Java Expert',
      socialLinks: [
        'https://www.facebook.com',
        'https://www.twitter.com',
        'https://www.linkedin.com'
      ]
    },
    {
      image: 'assets/images/thumbs/instructor-img3.png',
      name: 'Devon Lane',
      profession: 'C++ Expert',
      socialLinks: [
        'https://www.facebook.com',
        'https://www.twitter.com',
        'https://www.linkedin.com'
      ]
    }
  ];

}
