import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header3Component } from '../header3/header3.component';
import { Footer3Component } from '../footer3/footer3.component';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';

@Component({
  selector: 'app-layoutall3',
  imports: [RouterOutlet,Header3Component,Footer3Component],
  templateUrl: './layoutall3.component.html',
  styleUrl: './layoutall3.component.scss'
})
export class Layoutall3Component {

}
