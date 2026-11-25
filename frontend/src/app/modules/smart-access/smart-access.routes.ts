import { Routes } from '@angular/router';
import { staffPermissionGuard } from 'app/core/permissions';

export default [
    { path: '', redirectTo: 'projects', pathMatch: 'full' },
    {
        path: 'plans',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'billingSubscriptions' } },
        loadComponent: () =>
            import('./plans/smart-access-plans.component').then((m) => m.SmartAccessPlansComponent),
    },
    {
        path: 'projects',
        loadChildren: () => import('./projects/smart-access-projects.routes').then((m) => m.default),
    },
] as Routes;
