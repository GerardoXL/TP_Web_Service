import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import 'zone.js' // soluciona el error de no mostrar al momento de hacer peticiones

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
