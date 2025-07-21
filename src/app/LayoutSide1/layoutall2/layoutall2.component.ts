import { Component } from '@angular/core';
import { Header2Component } from '../header2/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer2Component } from '../footer2/footer2.component';

@Component({
  selector: 'app-layoutall2',
  imports: [RouterOutlet,Footer2Component,Header2Component],
  templateUrl: './layoutall2.component.html',
  styleUrl: './layoutall2.component.scss'
})
export class Layoutall2Component {

}
