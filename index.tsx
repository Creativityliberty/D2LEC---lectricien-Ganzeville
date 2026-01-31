import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './src/app.component';
import { provideRouter, withHashLocation, Routes } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';

import { HomeComponent } from './src/pages/home.component';
import { ServiceDetailComponent } from './src/pages/service-detail.component';
import { LocalLandingComponent } from './src/pages/local-landing.component';
import { ContactComponent } from './src/pages/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: 'zones-intervention/:city', component: LocalLandingComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation())
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
