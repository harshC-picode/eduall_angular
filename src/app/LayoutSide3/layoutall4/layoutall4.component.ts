import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header4Component } from '../header4/header4.component';
import { Footer4Component } from '../footer4/footer4.component';
import { Sidebar3Component } from '../sidebar3/sidebar3.component';

@Component({
  selector: 'app-layoutall4',
  imports: [RouterOutlet,Header4Component,Footer4Component,Sidebar3Component],
  templateUrl: './layoutall4.component.html',
  styleUrl: './layoutall4.component.scss'
})
export class Layoutall4Component {

}
