import { Routes } from '@angular/router';
import { staffPermissionGuard } from 'app/core/permissions';

export default [
    {
        path: '',
        redirectTo: 'status-check',
        pathMatch: 'full',
    },
    {
        path: 'status-check',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartMonitorStatus' } },
        loadComponent: () =>
            import('app/modules/status-check/status-check.component').then(
                (m) => m.StatusCheckComponent
            ),
    },
    {
        path: 'incidents',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartMonitorStatus' } },
        loadComponent: () =>
            import('app/modules/smart-monitor/incidents/incidents.component').then(
                (m) => m.IncidentsComponent
            ),
    },
    {
        path: 'incidents/:id',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartMonitorStatus' } },
        loadComponent: () =>
            import(
                'app/modules/smart-monitor/incidents/incident-detail/incident-detail.component'
            ).then((m) => m.IncidentDetailComponent),
    },
    {
        path: 'webhooks',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartMonitorWebhooks' } },
        loadComponent: () =>
            import('app/modules/smart-monitor/webhooks/webhooks-list.component').then(
                (m) => m.WebhooksListComponent
            ),
    },
    {
        path: 'webhooks/:id',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartMonitorWebhooks' } },
        loadComponent: () =>
            import('app/modules/smart-monitor/webhooks/webhook-detail.component').then(
                (m) => m.WebhookDetailComponent
            ),
    },
] as Routes;
