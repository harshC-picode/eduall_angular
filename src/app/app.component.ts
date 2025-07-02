import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports:[RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  async ngAfterViewInit(): Promise<void> {
    if (typeof window !== 'undefined') {
      const WOW = (await import('wowjs')).WOW;
      new WOW().init();
      console.log('WOW initialized ✅');
    }
  }
}
