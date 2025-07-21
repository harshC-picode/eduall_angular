import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [BreadcrumbComponent,CommonModule,RouterLink],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
events = [
  {
    image: 'assets/images/thumbs/event-img1.png',
    date: '21',
    month: 'DEC',
    time: '10:15 AM',
    title: 'Career Guidance Workshops for Students',
    location: '1901 Thornridge Cir. Shiloh',
    price: '$99'
  },
  {
    image: 'assets/images/thumbs/event-img2.png',
    date: '16',
    month: 'DEC',
    time: '11:00 AM',
    title: 'Intensive Coding Bootcamps for Beginners',
    location: '1901 Thornridge Cir. Shiloh',
    price: '$199'
  },
  {
    image: 'assets/images/thumbs/event-img3.png',
    date: '26',
    month: 'DEC',
    time: '12:15 PM',
    title: 'Interactive Science Fair and Competition',
    location: '1901 Thornridge Cir. Shiloh',
    price: '$68'
  },
  {
    image: 'assets/images/thumbs/event-img4.png',
    date: '08',
    month: 'DEC',
    time: '02:30 PM',
    title: 'Mathematics Olympiad for Young Mathematicians',
    location: '1901 Thornridge Cir. Shiloh',
    price: '$60'
  },
  {
    image: 'assets/images/thumbs/event-img5.png',
    date: '01',
    month: 'DEC',
    time: '09:00 AM',
    title: 'The Importance of Diversity in Higher Education',
    location: '1901 Thornridge Cir. Shiloh',
    price: '$45'
  },
  {
    image: 'assets/images/thumbs/event-img6.png',
    date: '13',
    month: 'DEC',
    time: '05:45 PM',
    title: 'Virtual Open House for New Students',
    location: '1901 Thornridge Cir. Shiloh',
    price: '$77'
  }
];

}
