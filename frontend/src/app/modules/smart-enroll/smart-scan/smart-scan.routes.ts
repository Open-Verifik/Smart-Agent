import { Routes } from '@angular/router';

export default [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: 'list',
        loadComponent: () =>
            import('./scan-list/scan-list.component').then((m) => m.ScanListComponent),
    },
    {
        path: 'new',
        loadComponent: () =>
            import('./scan-tool/scan-tool.component').then((m) => m.ScanToolComponent),
    },
    {
        path: ':id',
        loadComponent: () =>
            import('./scan-detail/scan-detail.component').then((m) => m.ScanDetailComponent),
    },
] as Routes;
