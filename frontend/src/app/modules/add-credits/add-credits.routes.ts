import { Routes } from '@angular/router';

export const ADD_CREDITS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./add-credits.component').then((m) => m.AddCreditsComponent),
    },
];
