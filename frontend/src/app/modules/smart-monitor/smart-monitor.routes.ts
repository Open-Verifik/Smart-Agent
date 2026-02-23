import { Routes } from '@angular/router';

export default [
    {
        path: '',
        redirectTo: 'status-check',
        pathMatch: 'full',
    },
    {
        path: 'status-check',
        loadComponent: () =>
            import('app/modules/status-check/status-check.component').then(
                (m) => m.StatusCheckComponent
            ),
    },
    {
        path: 'incidents',
        loadComponent: () =>
            import('app/modules/smart-monitor/incidents/incidents.component').then(
                (m) => m.IncidentsComponent
            ),
    },
    {
        path: 'incidents/:id',
        loadComponent: () =>
            import(
                'app/modules/smart-monitor/incidents/incident-detail/incident-detail.component'
            ).then((m) => m.IncidentDetailComponent),
    },
] as Routes;
