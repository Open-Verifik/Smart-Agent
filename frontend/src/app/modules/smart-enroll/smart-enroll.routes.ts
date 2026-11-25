import { Routes } from '@angular/router';
import { staffPermissionGuard } from 'app/core/permissions';

export default [
    { path: '', redirectTo: 'smart-scan', pathMatch: 'full' },
    {
        path: 'smart-scan',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartEnrollScan' } },
        loadChildren: () =>
            import('./smart-scan/smart-scan.routes').then((m) => m.default),
    },
    {
        path: 'document-templates',
        canActivate: [staffPermissionGuard],
        data: {
            scanTarget: 'personal',
            basePath: '/smart-enroll/document-templates',
            scanBasePath: '/smart-enroll/smart-scan',
            permission: { resource: 'smartEnrollScan' },
        },
        loadChildren: () =>
            import('./smart-scan/document-templates/document-templates.routes').then(
                (m) => m.default
            ),
    },
    {
        path: 'plans',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'billingSubscriptions' } },
        loadComponent: () =>
            import('./plans/smart-enroll-plans.component').then((m) => m.SmartEnrollPlansComponent),
    },
    {
        path: 'projects',
        loadChildren: () =>
            import('./projects/smart-enroll-projects.routes').then((m) => m.default),
    },
    {
        path: 'collections',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartEnrollBiometrics' } },
        loadComponent: () =>
            import('./collections/collections-list.component').then((m) => m.CollectionsListComponent),
    },
    {
        path: 'people',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartEnrollBiometrics' } },
        loadComponent: () =>
            import('./people/people-list.component').then((m) => m.PeopleListComponent),
    },
    {
        path: 'api',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartEnrollBiometrics' } },
        loadComponent: () =>
            import('./biometrics-api/biometrics-api.component').then((m) => m.BiometricsApiComponent),
    },
    {
        path: 'usage-history',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartEnrollBiometrics' } },
        loadComponent: () =>
            import('./usage-history/usage-history.component').then((m) => m.SmartEnrollUsageHistoryComponent),
    },
    {
        path: 'demos',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartEnrollBiometrics' } },
        loadChildren: () => import('./demos/demos.routes').then((m) => m.default),
    },
] as Routes;
