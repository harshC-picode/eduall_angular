import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private eRef: ElementRef) {}

  searchText: string = '';
  dropdownOpen = false;
  searchTerm = '';
  selectedCategory = '';

  categories = [
    'Design',
    'Development',
    'Architecture',
    'Life Style',
    'Data Science',
    'Marketing',
    'Music',
    'Typography',
    'Finance',
    'Motivation'
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.dropdownOpen = false;
    this.searchTerm = '';
  }

  filteredCategories(): string[] {
    return this.categories.filter(cat =>
      cat.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }

  onSearch() {
    console.log('Search text:', this.searchText);
  }
}
