import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-tuition-jobs',
  imports: [RouterLink,BreadcrumbComponent],
  templateUrl: './tuition-jobs.component.html',
  styleUrl: './tuition-jobs.component.scss'
})
export class TuitionJobsComponent {

}
