import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-instructor-dashboard-assignment',
  imports: [RouterLink,CommonModule],
  templateUrl: './instructor-dashboard-assignment.component.html',
  styleUrl: './instructor-dashboard-assignment.component.scss'
})
export class InstructorDashboardAssignmentComponent {
quizList=[
  {
    "title": "Notating Scales and Piano Keys (Treble)",
    "course": "Excel for Beginners",
    "questions": 36,
    "attempts": 4
  },
  {
    "title": "Treble Clef Intervals - 4ths and 5ths",
    "course": "Introduction to Python Programming",
    "questions": 37,
    "attempts": 4
  },
  {
    "title": "Duple Rhythm Counting",
    "course": "Photography Basics",
    "questions": 35,
    "attempts": 9
  },
  {
    "title": "Missing the Major Scales (Flats)",
    "course": "Entrepreneurship 101",
    "questions": 41,
    "attempts": 6
  },
  {
    "title": "Half Step Highlights",
    "course": "Leadership and Management Essentials",
    "questions": 43,
    "attempts": 4
  },
  {
    "title": "Arpeggio Activity (Treble)",
    "course": "Creative Writing Workshop",
    "questions": 39,
    "attempts": 4
  },
  {
    "title": "Piano Keys and Notes on the Staff",
    "course": "Digital Marketing 101",
    "questions": 44,
    "attempts": 2
  },
  {
    "title": "Correct Rhythms",
    "course": "Adobe Photoshop Essentials",
    "questions": 45,
    "attempts": 6
  },
  {
    "title": "Missing the Major Scales 2 (Sharps)",
    "course": "Introduction to Python",
    "questions": 34,
    "attempts": 2
  },
  {
    "title": "Short Composition",
    "course": "Public Speaking Mastery",
    "questions": 42,
    "attempts": 9
  },
  {
    "title": "Match the Key Signature",
    "course": "Web Development Bootcamp",
    "questions": 38,
    "attempts": 1
  }
]

}
