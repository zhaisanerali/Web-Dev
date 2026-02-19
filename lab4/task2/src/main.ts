import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // Заменили App на AppComponent

bootstrapApplication(AppComponent, appConfig) // И здесь тоже
  .catch((err) => console.error(err));