import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-instructor-two',
  imports: [RouterLink,BreadcrumbComponent],
  templateUrl: './instructor-two.component.html',
  styleUrl: './instructor-two.component.scss'
})
export class InstructorTwoComponent {

}
