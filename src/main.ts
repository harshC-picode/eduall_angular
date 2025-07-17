import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import WOW from 'wowjs';
import AOS from 'aos';


bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    new WOW.WOW().init(); // ✅ Initialize WOW.js after app boot
    AOS.init();
  })
  .catch((err) => console.error(err));
