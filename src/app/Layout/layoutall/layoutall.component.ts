import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';


// import {HeaderComponent } from 

@Component({
  selector: 'app-layoutall',
  imports: [CommonModule,HeaderComponent,FooterComponent,RouterOutlet],
  templateUrl: './layoutall.component.html',
  styleUrl: './layoutall.component.scss'
})
export class LayoutallComponent {

}
