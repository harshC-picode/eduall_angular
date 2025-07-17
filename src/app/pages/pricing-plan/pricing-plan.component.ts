import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-pricing-plan',
  imports: [RouterLink,BreadcrumbComponent],
  templateUrl: './pricing-plan.component.html',
  styleUrl: './pricing-plan.component.scss'
})
export class PricingPlanComponent {

}
