import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-events-details',
  imports: [RouterLink,BreadcrumbComponent],
  templateUrl: './events-details.component.html',
  styleUrl: './events-details.component.scss'
})
export class EventsDetailsComponent {

}
