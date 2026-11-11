import { Routes } from '@angular/router';

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
        data: { scanTarget: 'business', scanBasePath: '/smart-business/smart-scan' },
        loadChildren: () =>
            import('../smart-enroll/smart-scan/smart-scan.routes').then((m) => m.default),
    },
    {
        path: 'document-templates',
        data: {
            scanTarget: 'business',
            basePath: '/smart-business/document-templates',
            scanBasePath: '/smart-business/smart-scan',
        },
        loadChildren: () =>
            import('../smart-enroll/smart-scan/document-templates/document-templates.routes').then(
                (m) => m.default
            ),
    },
    {
        path: 'plans',
        loadComponent: () =>
            import('../smart-enroll/plans/smart-enroll-plans.component').then(
                (m) => m.SmartEnrollPlansComponent
            ),
    },
] as Routes;
