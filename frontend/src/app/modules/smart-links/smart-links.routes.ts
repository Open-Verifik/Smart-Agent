import { Routes } from '@angular/router';
import { staffPermissionGuard } from 'app/core/permissions';

export default [
    { path: '', redirectTo: 'projects', pathMatch: 'full' },
    {
        path: 'projects',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartLinks', action: 'read' } },
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./project-list/smart-link-project-list.component').then(
                        (m) => m.SmartLinkProjectListComponent
                    ),
            },
            {
                path: 'new/setup/:step',
                loadComponent: () =>
                    import('./setup/smart-link-setup.component').then(
                        (m) => m.SmartLinkSetupComponent
                    ),
            },
            {
                path: 'new/setup',
                loadComponent: () =>
                    import('./setup/smart-link-setup.component').then(
                        (m) => m.SmartLinkSetupComponent
                    ),
            },
            {
                path: ':projectId/setup/:step',
                loadComponent: () =>
                    import('./setup/smart-link-setup.component').then(
                        (m) => m.SmartLinkSetupComponent
                    ),
            },
            {
                path: ':projectId/setup',
                loadComponent: () =>
                    import('./setup/smart-link-setup.component').then(
                        (m) => m.SmartLinkSetupComponent
                    ),
            },
            {
                path: ':projectId/sessions/:sessionId',
                loadComponent: () =>
                    import('./session-detail/smart-link-session-detail.component').then(
                        (m) => m.SmartLinkSessionDetailComponent
                    ),
            },
            {
                path: ':projectId/sessions',
                loadComponent: () =>
                    import('./sessions/smart-link-sessions.component').then(
                        (m) => m.SmartLinkSessionsComponent
                    ),
            },
            {
                path: ':projectId',
                loadComponent: () =>
                    import('./project-detail/smart-link-project-detail.component').then(
                        (m) => m.SmartLinkProjectDetailComponent
                    ),
            },
        ],
    },
] as Routes;
