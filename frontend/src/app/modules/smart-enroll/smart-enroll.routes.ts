import { Routes } from '@angular/router';

export default [
    { path: '', redirectTo: 'smart-scan', pathMatch: 'full' },
    {
        path: 'smart-scan',
        loadChildren: () =>
            import('./smart-scan/smart-scan.routes').then((m) => m.default),
    },
] as Routes;
