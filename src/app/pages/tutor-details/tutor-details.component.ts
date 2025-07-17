import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-tutor-details',
  imports: [RouterLink,BreadcrumbComponent],
  templateUrl: './tutor-details.component.html',
  styleUrl: './tutor-details.component.scss'
})
export class TutorDetailsComponent {

}
