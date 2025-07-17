import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-favorite-course',
  imports: [RouterLink,BreadcrumbComponent],
  templateUrl: './favorite-course.component.html',
  styleUrl: './favorite-course.component.scss'
})
export class FavoriteCourseComponent {

}
