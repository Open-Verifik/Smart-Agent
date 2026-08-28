import { Routes } from '@angular/router';

export default [
    { path: '', redirectTo: 'demos', pathMatch: 'full' },
    {
        path: 'demos',
        loadComponent: () =>
            import('./demos/human-authn-demos-hub.component').then(
                (m) => m.HumanAuthnDemosHubComponent
            ),
    },
    {
        path: 'history',
        loadComponent: () =>
            import('./history/human-authn-history.component').then(
                (m) => m.HumanAuthnHistoryComponent
            ),
    },
] as Routes;
