import { Routes } from '@angular/router';

export default [
    { path: '', redirectTo: 'smart-scan', pathMatch: 'full' },
    {
        path: 'smart-scan',
        loadChildren: () =>
            import('./smart-scan/smart-scan.routes').then((m) => m.default),
    },
    {
        path: 'plans',
        loadComponent: () =>
            import('./plans/smart-enroll-plans.component').then((m) => m.SmartEnrollPlansComponent),
    },
    {
        path: 'projects',
        loadChildren: () =>
            import('./projects/smart-enroll-projects.routes').then((m) => m.default),
    },
] as Routes;
