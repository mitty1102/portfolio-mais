import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { Component } from '@angular/core';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'web-pages', component: ProjectsComponent},
  { path: '**', redirectTo: '' }
];
