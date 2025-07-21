import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Select2, Select2Data } from 'ng-select2-component';

@Component({
  selector: 'app-category-dropdown',
  standalone: true,
  imports: [CommonModule, Select2],
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.scss']
})
export class CategoryDropdownComponent {
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  categories: Select2Data = [
    { value: '', label: 'Categories' },
    { value: '1', label: 'Design' },
    { value: '2', label: 'Development' },
    { value: '3', label: 'Architecture' },
    { value: '4', label: 'Life Style' },
    { value: '5', label: 'Data Science' },
    { value: '6', label: 'Marketing' },
    { value: '7', label: 'Music' },
    { value: '8', label: 'Typography' },
    { value: '9', label: 'Finance' },
    { value: '10', label: 'Motivation' }
  ];
}
