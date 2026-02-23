import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { LayoutComponent } from 'app/layout/layout.component';

export const appRoutes: Route[] = [
    // Bridge route for SSO authentication (no layout wrapper)
    {
        path: 'bridge',
        loadChildren: () => import('app/modules/bridge/bridge.routes').then((m) => m.default),
    },

    // Redirect empty path to '/chat'
    { path: '', pathMatch: 'full', redirectTo: 'chat' },

    // Chat routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver,
        },
        children: [
            {
                path: 'chat',
                loadChildren: () => import('app/modules/chat/chat.routes').then((m) => m.default),
            },
            {
                path: 'postman',
                loadChildren: () =>
                    import('app/modules/postman/postman.routes').then((m) => m.default),
            },
            {
                path: 'zelf-id',
                loadChildren: () =>
                    import('app/modules/zelf-id/zelf-id.routes').then((m) => m.default),
            },
            {
                path: 'history',
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
                path: 'subscription-plans',
                loadChildren: () =>
                    import('app/modules/subscription-plans/subscription-plans.routes').then(
                        (m) => m.default
                    ),
            },
            {
                path: 'add-credits',
                loadChildren: () =>
                    import('app/modules/add-credits/add-credits.routes').then((m) => m.default),
            },
            {
                path: 'smart-monitor',
                loadChildren: () =>
                    import('app/modules/smart-monitor/smart-monitor.routes').then((m) => m.default),
            },
        ],
    },

    // 404 & Catch all
    { path: '**', redirectTo: 'chat' },
];
