import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-contact',
  imports: [BreadcrumbComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
