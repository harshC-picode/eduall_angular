import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-course-list-view',
  imports: [RouterLink,BreadcrumbComponent],
  templateUrl: './course-list-view.component.html',
  styleUrl: './course-list-view.component.scss'
})
export class CourseListViewComponent {

}
