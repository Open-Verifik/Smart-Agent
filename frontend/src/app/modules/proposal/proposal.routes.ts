import { Route } from '@angular/router';

export default [
    {
        path: ':token',
        loadComponent: () =>
            import('./proposal-viewer.component').then((m) => m.ProposalViewerComponent),
    },
] as Route[];
