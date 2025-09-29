import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// this main.ts creates the angular application using the app component as the root component
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
