import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, NgClass } from '@angular/common'; // ✅ Import NgClass here


@Component({
  selector: 'app-header3',
  imports: [RouterLink,FormsModule, NgIf, NgFor, NgClass],
  templateUrl: './header3.component.html',
  styleUrl: './header3.component.scss'
})
export class Header3Component {
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
