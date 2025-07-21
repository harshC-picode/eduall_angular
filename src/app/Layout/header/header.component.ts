import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, NgClass } from '@angular/common'; // ✅ Import NgClass here
import { CategoryDropdownComponent } from '../../shared/category-dropdown/category-dropdown.component';


declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule,CategoryDropdownComponent,RouterLinkActive], // ✅ Include NgClass here
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


   onSearch() {
    // Your search logic
    console.log('Searching for:', this.searchText);
    // You can route, filter, or emit here
  }
  dropdownOpen = false;
  selectedCategory = 'Design'; // default
  categories = [
    'Design', 'Development', 'Architecture',
    'Life Style', 'Data Science', 'Marketing',
    'Music', 'Typography', 'Finance', 'Motivation'
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.dropdownOpen = false; // close on select
  }
  searchText: string = ''; // To bind to input field

  
  
}
