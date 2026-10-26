import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./plate-report.component').then((m) => m.PlateReportComponent),
    },
] as Routes;
