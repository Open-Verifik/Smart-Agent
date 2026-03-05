import { Routes } from '@angular/router';

export default [
    { path: '', redirectTo: 'smart-reduce', pathMatch: 'full' },
    {
        path: 'smart-reduce',
        loadComponent: () =>
            import('app/modules/smart-tools/smart-reduce/smart-reduce.component').then(
                (m) => m.SmartReduceComponent
            ),
    },
] as Routes;
