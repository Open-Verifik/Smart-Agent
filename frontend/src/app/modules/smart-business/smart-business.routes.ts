import { Routes } from '@angular/router';
import { staffPermissionGuard } from 'app/core/permissions';

export default [
    { path: '', redirectTo: 'projects', pathMatch: 'full' },
    { path: 'companies', redirectTo: 'projects', pathMatch: 'full' },
    {
        path: 'projects',
        loadChildren: () =>
            import('./projects/smart-business-projects.routes').then((m) => m.default),
    },
    {
        path: 'smart-scan',
        canActivate: [staffPermissionGuard],
        data: {
            scanTarget: 'business',
            scanBasePath: '/smart-business/smart-scan',
            permission: { resource: 'smartBusinessProjects' },
        },
        loadChildren: () =>
            import('../smart-enroll/smart-scan/smart-scan.routes').then((m) => m.default),
    },
    {
        path: 'document-templates',
        canActivate: [staffPermissionGuard],
        data: {
            scanTarget: 'business',
            basePath: '/smart-business/document-templates',
            scanBasePath: '/smart-business/smart-scan',
            permission: { resource: 'smartBusinessProjects' },
        },
        loadChildren: () =>
            import('../smart-enroll/smart-scan/document-templates/document-templates.routes').then(
                (m) => m.default
            ),
    },
    {
        path: 'plans',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'billingSubscriptions' } },
        loadComponent: () =>
            import('../smart-enroll/plans/smart-enroll-plans.component').then(
                (m) => m.SmartEnrollPlansComponent
            ),
    },
] as Routes;
