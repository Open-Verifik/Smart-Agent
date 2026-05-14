import { Routes } from '@angular/router';

export default [
    { path: '', redirectTo: 'projects', pathMatch: 'full' },
    {
        path: 'plans',
        loadComponent: () =>
            import('./plans/smart-access-plans.component').then((m) => m.SmartAccessPlansComponent),
    },
    {
        path: 'projects',
        loadChildren: () => import('./projects/smart-access-projects.routes').then((m) => m.default),
    },
] as Routes;
