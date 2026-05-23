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
    {
        path: 'collections',
        loadComponent: () =>
            import('./collections/collections-list.component').then((m) => m.CollectionsListComponent),
    },
    {
        path: 'people',
        loadComponent: () =>
            import('./people/people-list.component').then((m) => m.PeopleListComponent),
    },
    {
        path: 'api',
        loadComponent: () =>
            import('./biometrics-api/biometrics-api.component').then((m) => m.BiometricsApiComponent),
    },
    {
        path: 'usage-history',
        loadComponent: () =>
            import('./usage-history/usage-history.component').then((m) => m.SmartEnrollUsageHistoryComponent),
    },
    {
        path: 'demos',
        loadChildren: () => import('./demos/demos.routes').then((m) => m.default),
    },
] as Routes;
