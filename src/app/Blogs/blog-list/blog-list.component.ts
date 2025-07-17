import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-blog-list',
  imports: [RouterLink,CommonModule,BreadcrumbComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
blogs=[
  {
    image: 'assets/images/thumbs/blog-two-img1.png',
    day: '21',
    month: 'DEC',
    author: 'Admin',
    comments: 24,
    title: 'Navigating the Job Market: Advice for Graduates',
    link: 'blog-details.html'
  },
  {
    image: 'assets/images/thumbs/blog-two-img2.png',
    day: '21',
    month: 'DEC',
    author: 'Admin',
    comments: 24,
    title: 'The Importance of Diversity in Higher Education',
    link: 'blog-details.html'
  },
  {
    image: 'assets/images/thumbs/blog-two-img3.png',
    day: '21',
    month: 'DEC',
    author: 'Admin',
    comments: 24,
    title: '10 Tips for Successful Online Learning',
    link: 'blog-details.html'
  },
  {
    image: 'assets/images/thumbs/blog-two-img4.png',
    day: '21',
    month: 'DEC',
    author: 'Admin',
    comments: 24,
    title: 'How to Stay Motivated While Studying from Home',
    link: 'blog-details.html'
  },
  {
    image: 'assets/images/thumbs/blog-two-img5.png',
    day: '21',
    month: 'DEC',
    author: 'Admin',
    comments: 24,
    title: 'Mastering Python: Beginner to Advanced Tips',
    link: 'blog-details.html'
  },
  {
    image: 'assets/images/thumbs/blog-two-img6.png',
    day: '21',
    month: 'DEC',
    author: 'Admin',
    comments: 24,
    title: 'Balancing Work and Study: Strategies for Success',
    link: 'blog-details.html'
  },
  {
    image: 'assets/images/thumbs/blog-two-img7.png',
    day: '21',
    month: 'DEC',
    author: 'Admin',
    comments: 24,
    title: "The Importance of Lifelong Learning in Today's World",
    link: 'blog-details.html'
  },
  {
    image: 'assets/images/thumbs/blog-two-img8.png',
    day: '21',
    month: 'DEC',
    author: 'Admin',
    comments: 24,
    title: 'Effective Time Management for Students',
    link: 'blog-details.html'
  },
  {
    image: 'assets/images/thumbs/blog-two-img9.png',
    day: '21',
    month: 'DEC',
    author: 'Admin',
    comments: 24,
    title: 'The Benefits of Learning a New Language Online',
    link: 'blog-details.html'
  },
  {
    image: 'assets/images/thumbs/blog-two-img2.png',
    day: '21',
    month: 'DEC',
    author: 'Admin',
    comments: 24,
    title: 'The Importance of Diversity in Higher Education',
    link: 'blog-details.html'
  }
];

}
