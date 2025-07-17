import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-instructor-dashboard-announcements',
  imports: [RouterLink,CommonModule],
  templateUrl: './instructor-dashboard-announcements.component.html',
  styleUrl: './instructor-dashboard-announcements.component.scss'
})
export class InstructorDashboardAnnouncementsComponent {
tableData = [
  {
    title: 'Spring Concert Tickets On Sale Starting Today',
    course: 'Swift Courses',
    date: 'January 20, 2025',
    time: '02:30 pm'
  },
  {
    title: 'Make Up Test for Those Absent Last Week',
    course: 'Objective C Courses',
    date: 'January 20, 2025',
    time: '05:51 am'
  },
  {
    title: 'Bring Home Midterm Progress Reports Today',
    course: 'CSS3 Courses',
    date: 'January 20, 2025',
    time: '11:49 pm'
  },
  {
    title: 'Submit Nominations for Student Council President',
    course: 'Jango Courses',
    date: 'January 20, 2025',
    time: '07:40 am'
  },
  {
    title: 'Remember to Submit Community Service Forms',
    course: 'React Courses',
    date: 'January 20, 2025',
    time: '01:55 pm'
  },
  {
    title: 'Library Books Due One Week From Today',
    course: 'LaravelCourses',
    date: 'January 20, 2025',
    time: '04:15 am'
  },
  {
    title: 'Graduation Ticket Sales Start Monday at 9AM',
    course: 'PHP',
    date: 'January 20, 2025',
    time: '03:48 am'
  },
  {
    title: 'Sign Up Now for After School Tutoring Sessions',
    course: 'Angular Courses',
    date: 'January 20, 2025',
    time: '07:38 am'
  },
  {
    title: 'Mandatory Textbook Pickup After School Wednesday',
    course: 'Html',
    date: 'January 20, 2025',
    time: '01:09 am'
  },
  {
    title: 'Textbook Chapter to Read Before Next Class',
    course: 'Python Courses',
    date: 'January 20, 2025',
    time: '06:32 pm'
  },
  {
    title: 'Were You Absent Last Week? Makeup Work Available',
    course: 'Vuejs Courses',
    date: 'January 20, 2025',
    time: '12:23 pm'
  },
  {
    title: 'Bus Route Change Effective Monday Morning',
    course: 'NodeJS Courses',
    date: 'January 20, 2025',
    time: '01:08 pm'
  }
];

}
