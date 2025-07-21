import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, NgClass } from '@angular/common'; // ✅ Import NgClass here
import { CategoryDropdown2Component } from '../../shared/category-dropdown2/category-dropdown2.component';
import {  Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Select2Data } from 'ng-select2-component';


@Component({
  selector: 'app-header3',
  imports: [RouterLink,FormsModule,CategoryDropdown2Component,CommonModule],
  templateUrl: './header3.component.html',
  styleUrl: './header3.component.scss'
})
export class Header3Component {
//  dropdownOpen = false;
//   selectedCategory = 'Design';
//   categories = [
//     'Design', 'Development', 'Architecture',
//     'Life Style', 'Data Science', 'Marketing',
//     'Music', 'Typography', 'Finance', 'Motivation'
//   ];

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   selectCategory(category: string) {
//     this.selectedCategory = category;
//     this.dropdownOpen = false;
//   }
//   searchText: string = ''; 

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
