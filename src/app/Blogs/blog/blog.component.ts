import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-blog',
  imports: [RouterLink,CommonModule,BreadcrumbComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  blogs = [
    {
      image: 'assets/images/thumbs/blog-two-img1.png',
      day: '21',
      month: 'DEC',
      title: 'Navigating the Job Market: Advice for Graduates',
      author: 'By Admin',
      views: '1.6k',
      comments: '24',
    },
    {
      image: 'assets/images/thumbs/blog-two-img2.png',
      day: '21',
      month: 'DEC',
      title: 'The Importance of Diversity in Higher Education',
      author: 'By Admin',
      views: '1.6k',
      comments: '24',
    },
    {
      image: 'assets/images/thumbs/blog-two-img3.png',
      day: '21',
      month: 'DEC',
      title: '10 Tips for Successful Online Learning',
      author: 'By Admin',
      views: '1.6k',
      comments: '24',
    },
    {
      image: 'assets/images/thumbs/blog-two-img4.png',
      day: '21',
      month: 'DEC',
      title: 'How to Stay Motivated While Studying from Home',
      author: 'By Admin',
      views: '1.6k',
      comments: '24',
    },
    {
      image: 'assets/images/thumbs/blog-two-img5.png',
      day: '21',
      month: 'DEC',
      title: 'Mastering Python: Beginner to Advanced Tips',
      author: 'By Admin',
      views: '1.6k',
      comments: '24',
    },
    {
      image: 'assets/images/thumbs/blog-two-img6.png',
      day: '21',
      month: 'DEC',
      title: 'Balancing Work and Study: Strategies for Success',
      author: 'By Admin',
      views: '1.6k',
      comments: '24',
    },
    {
      image: 'assets/images/thumbs/blog-two-img7.png',
      day: '21',
      month: 'DEC',
      title: "The Importance of Lifelong Learning in Today's World",
      author: 'By Admin',
      views: '1.6k',
      comments: '24',
    },
    {
      image: 'assets/images/thumbs/blog-two-img8.png',
      day: '21',
      month: 'DEC',
      title: 'Effective Time Management for Students',
      author: 'By Admin',
      views: '1.6k',
      comments: '24',
    },
    {
      image: 'assets/images/thumbs/blog-two-img9.png',
      day: '21',
      month: 'DEC',
      title: 'The Benefits of Learning a New Language Online',
      author: 'By Admin',
      views: '1.6k',
      comments: '24',
    },
  ];
}


