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
        path: 'document-type/new',
        loadComponent: () =>
            import('./document-type-wizard/document-type-wizard.component').then(
                (m) => m.DocumentTypeWizardComponent
            ),
    },
    {
        path: 'document-type/:id',
        loadComponent: () =>
            import('./document-type-wizard/document-type-wizard.component').then(
                (m) => m.DocumentTypeWizardComponent
            ),
    },
    {
        path: ':id',
        loadComponent: () =>
            import('./scan-detail/scan-detail.component').then((m) => m.ScanDetailComponent),
    },
] as Routes;
