import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-find-tutors',
  imports: [RouterLink,BreadcrumbComponent],
  templateUrl: './find-tutors.component.html',
  styleUrl: './find-tutors.component.scss'
})
export class FindTutorsComponent {

}
