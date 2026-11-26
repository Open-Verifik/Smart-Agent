import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { staffPermissionGuard } from 'app/core/permissions';
import { LayoutComponent } from 'app/layout/layout.component';

export const appRoutes: Route[] = [
    // Bridge route for SSO authentication (no layout wrapper)
    {
        path: 'bridge',
        loadChildren: () => import('app/modules/bridge/bridge.routes').then((m) => m.default),
    },

    {
        path: 'proposal',
        loadChildren: () => import('app/modules/proposal/proposal.routes').then((m) => m.default),
    },

    {
        path: 'pay/return',
        loadComponent: () =>
            import('app/modules/payment-return/payment-return.component').then(
                (m) => m.PaymentReturnComponent
            ),
    },

    /** Standalone plate report (no Verifik shell — for public / white-label domains). */
    {
        path: 'reporte-placa',
        loadChildren: () =>
            import('app/modules/plate-report/plate-report.routes').then((m) => m.default),
    },
    {
        path: 'informe-vehicular',
        loadChildren: () =>
            import('app/modules/plate-report/plate-report.routes').then((m) => m.default),
    },

    /** Public smartREPORT landing and blog (no Verifik shell). */
    {
        path: 'smartreport',
        loadChildren: () =>
            import('app/modules/smartreport/smartreport.routes').then((m) => m.default),
    },

    // Redirect empty path to '/home'
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    // Chat routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver,
        },
        children: [
            {
                path: 'access-restricted',
                loadComponent: () =>
                    import('app/modules/access-restricted/access-restricted.component').then(
                        (m) => m.AccessRestrictedComponent
                    ),
            },
            {
                path: 'home',
                canActivate: [staffPermissionGuard],
                data: { permission: { resource: 'home' } },
                loadChildren: () =>
                    import('app/modules/home/home.routes').then((m) => m.default),
            },
            {
                path: 'chat',
                canActivate: [staffPermissionGuard],
                data: { permission: { resource: 'smartCheckPlayground' } },
                loadChildren: () => import('app/modules/chat/chat.routes').then((m) => m.default),
            },
            {
                path: 'postman',
                canActivate: [staffPermissionGuard],
                data: { permission: { resource: 'smartCheckPlayground' } },
                loadChildren: () =>
                    import('app/modules/postman/postman.routes').then((m) => m.default),
            },
            {
                path: 'check-list',
                canActivate: [staffPermissionGuard],
                data: { permission: { resource: 'smartCheckLists' } },
                loadChildren: () =>
                    import('app/modules/check-list/check-list.routes').then((m) => m.default),
            },
            {
                path: 'zelf-id',
                canActivate: [staffPermissionGuard],
                data: { permission: { resource: 'humanAuthn' } },
                loadChildren: () =>
                    import('app/modules/zelf-id/zelf-id.routes').then((m) => m.default),
            },
            {
                path: 'history',
                canActivate: [staffPermissionGuard],
                data: { permission: { resource: 'smartCheckHistory' } },
                loadChildren: () =>
                    import('app/modules/history/history.routes').then((m) => m.default),
            },
            {
                path: 'settings',
                loadChildren: () =>
                    import('app/modules/settings/settings.routes').then((m) => m.default),
            },
            {
                path: 'smart-batch',
                loadChildren: () =>
                    import('app/modules/smart-batch/smart-batch.routes').then((m) => m.default),
            },
            {
                path: 'smart-reports',
                loadChildren: () =>
                    import('app/modules/smart-batch/smart-batch.routes').then((m) => m.default),
            },
            {
                path: 'smart-fleet',
                loadChildren: () =>
                    import('app/modules/smart-fleet/smart-fleet.routes').then((m) => m.default),
            },
            {
                path: 'subscription-plans',
                canActivate: [staffPermissionGuard],
                data: { permission: { resource: 'billingSubscriptions' } },
                loadChildren: () =>
                    import('app/modules/subscription-plans/subscription-plans.routes').then(
                        (m) => m.default
                    ),
            },
            {
                path: 'add-credits',
                canActivate: [staffPermissionGuard],
                data: { permission: { resource: 'billingCredits' } },
                loadChildren: () =>
                    import('app/modules/add-credits/add-credits.routes').then(
                        (m) => m.ADD_CREDITS_ROUTES
                    ),
            },
            {
                path: 'smart-access',
                loadChildren: () =>
                    import('app/modules/smart-access/smart-access.routes').then((m) => m.default),
            },
            {
                path: 'smart-links',
                loadChildren: () =>
                    import('./modules/smart-links/smart-links.routes').then((m) => m.default),
            },
            {
                path: 'smart-enroll',
                loadChildren: () =>
                    import('./modules/smart-enroll/smart-enroll.routes').then((m) => m.default),
            },
            {
                path: 'smart-business',
                loadChildren: () =>
                    import('./modules/smart-business/smart-business.routes').then((m) => m.default),
            },
            {
                path: 'human-authn',
                loadChildren: () =>
                    import('./modules/human-authn/human-authn.routes').then((m) => m.default),
            },
            {
                path: 'smart-monitor',
                loadChildren: () =>
                    import('app/modules/smart-monitor/smart-monitor.routes').then((m) => m.default),
            },
            {
                path: 'smart-tools',
                loadChildren: () =>
                    import('app/modules/smart-tools/smart-tools.routes').then((m) => m.default),
            },
        ],
    },

    // 404 & Catch all
    { path: '**', redirectTo: 'home' },
];
