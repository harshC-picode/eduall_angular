import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-blog-classic',
  imports: [RouterLink,BreadcrumbComponent],
  templateUrl: './blog-classic.component.html',
  styleUrl: './blog-classic.component.scss'
})
export class BlogClassicComponent {

}
