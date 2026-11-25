import { Routes } from '@angular/router';
import { staffPermissionGuard } from 'app/core/permissions';

export default [
    { path: '', redirectTo: 'demos', pathMatch: 'full' },
    {
        path: 'plans',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'billingSubscriptions' } },
        loadComponent: () =>
            import('./plans/human-authn-plans.component').then((m) => m.HumanAuthnPlansComponent),
    },
    {
        path: 'projects',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'humanAuthn' } },
        loadChildren: () =>
            import('./projects/human-authn-projects.routes').then((m) => m.default),
    },
    {
        path: 'demos',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'humanAuthn' } },
        loadComponent: () =>
            import('./demos/human-authn-demos-hub.component').then(
                (m) => m.HumanAuthnDemosHubComponent
            ),
    },
    {
        path: 'history',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'humanAuthn' } },
        loadComponent: () =>
            import('./history/human-authn-history.component').then(
                (m) => m.HumanAuthnHistoryComponent
            ),
    },
] as Routes;
