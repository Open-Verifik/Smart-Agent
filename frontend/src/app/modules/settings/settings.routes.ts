import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

export default [
  // Redirect empty settings path to profile
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  // All panels use the same component, the :panel param determines which one to show
  { path: ':panel', component: SettingsComponent },
] as Routes;
