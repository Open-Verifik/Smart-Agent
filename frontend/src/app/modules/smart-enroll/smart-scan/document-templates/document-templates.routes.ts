import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () =>
            import('./document-templates-list.component').then(
                (m) => m.DocumentTemplatesListComponent
            ),
    },
    {
        path: 'new',
        loadComponent: () =>
            import('../document-type-wizard/document-type-wizard.component').then(
                (m) => m.DocumentTypeWizardComponent
            ),
    },
    {
        path: ':id',
        loadComponent: () =>
            import('../document-type-wizard/document-type-wizard.component').then(
                (m) => m.DocumentTypeWizardComponent
            ),
    },
] as Routes;

