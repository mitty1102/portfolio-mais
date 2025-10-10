import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app.component';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { MaterialModule } from './app/material.module';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes),
    importProvidersFrom(
      MaterialModule,
      RouterModule    
    ),
  ]
}).catch(err => console.error(err));
