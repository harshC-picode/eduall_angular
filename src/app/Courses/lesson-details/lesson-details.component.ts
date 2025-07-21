import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lesson-details',
  imports: [RouterLink,CommonModule],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.scss'
})
export class LessonDetailsComponent {
curriculum= [ {
    title: 'Introduction to Python',
    id: 'collapseOneTwo',
    expanded: true,
    lessons: [
      { title: 'What is Python?', duration: '30:25' },
      { title: 'Setting up your Python environment', duration: '30:25' },
      { title: 'Writing your first Python program', duration: '30:25' },
      { title: 'Understanding Python syntax and structure', duration: '30:25' }
    ]
  },
  {
    title: 'Core Python Programming',
    id: 'collapseTwoTwo',
    expanded: false,
    lessons: [
      { title: 'What is Python?', duration: '30:25' },
      { title: 'Setting up your Python environment', duration: '30:25' },
      { title: 'Writing your first Python program', duration: '30:25' },
      { title: 'Understanding Python syntax and structure', duration: '30:25' }
    ]
  },
  {
    title: 'Data Structures',
    id: 'collapseThreeTwo',
    expanded: false,
    lessons: [
      { title: 'What is Python?', duration: '30:25' },
      { title: 'Setting up your Python environment', duration: '30:25' },
      { title: 'Writing your first Python program', duration: '30:25' },
      { title: 'Understanding Python syntax and structure', duration: '30:25' }
    ]
  },
  {
    title: 'Advanced Python Concepts',
    id: 'collapseFourTwo',
    expanded: false,
    lessons: [
      { title: 'What is Python?', duration: '30:25' },
      { title: 'Setting up your Python environment', duration: '30:25' },
      { title: 'Writing your first Python program', duration: '30:25' },
      { title: 'Understanding Python syntax and structure', duration: '30:25' }
    ]
  },
  {
    title: 'Working with Libraries',
    id: 'collapseFiveTwo',
    expanded: false,
    lessons: [
      { title: 'What is Python?', duration: '30:25' },
      { title: 'Setting up your Python environment', duration: '30:25' },
      { title: 'Writing your first Python program', duration: '30:25' },
      { title: 'Understanding Python syntax and structure', duration: '30:25' }
    ]
  },
  {
    title: 'Project and Capstone',
    id: 'collapseSixTwo',
    expanded: false,
    lessons: [
      { title: 'What is Python?', duration: '30:25' },
      { title: 'Setting up your Python environment', duration: '30:25' },
      { title: 'Writing your first Python program', duration: '30:25' },
      { title: 'Understanding Python syntax and structure', duration: '30:25' }
    ]
  }
];

}
