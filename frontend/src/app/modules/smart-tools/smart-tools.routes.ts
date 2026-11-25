import { Routes } from '@angular/router';
import { staffPermissionGuard } from 'app/core/permissions';

export default [
    { path: '', redirectTo: 'smart-reduce', pathMatch: 'full' },
    {
        path: 'smart-reduce',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartTools' } },
        loadComponent: () =>
            import('./smart-reduce/smart-reduce.component').then(
                (m) => m.SmartReduceComponent
            ),
    },
    {
        path: 'whatsapp-messages',
        canActivate: [staffPermissionGuard],
        loadComponent: () =>
            import('./communication/messages-list.component').then(
                (m) => m.MessagesListComponent
            ),
        data: { phoneGateway: 'whatsapp', permission: { resource: 'smartTools' } },
    },
    {
        path: 'whatsapp-messages/new',
        canActivate: [staffPermissionGuard],
        loadComponent: () =>
            import('./communication/message-compose.component').then(
                (m) => m.MessageComposeComponent
            ),
        data: { phoneGateway: 'whatsapp', permission: { resource: 'smartTools', action: 'execute' } },
    },
    {
        path: 'whatsapp-messages/:id',
        canActivate: [staffPermissionGuard],
        loadComponent: () =>
            import('./communication/message-detail.component').then(
                (m) => m.MessageDetailComponent
            ),
        data: { phoneGateway: 'whatsapp', permission: { resource: 'smartTools' } },
    },
    {
        path: 'sms-messages',
        canActivate: [staffPermissionGuard],
        loadComponent: () =>
            import('./communication/messages-list.component').then(
                (m) => m.MessagesListComponent
            ),
        data: { phoneGateway: 'sms', permission: { resource: 'smartTools' } },
    },
    {
        path: 'sms-messages/new',
        canActivate: [staffPermissionGuard],
        loadComponent: () =>
            import('./communication/message-compose.component').then(
                (m) => m.MessageComposeComponent
            ),
        data: { phoneGateway: 'sms', permission: { resource: 'smartTools', action: 'execute' } },
    },
    {
        path: 'sms-messages/:id',
        canActivate: [staffPermissionGuard],
        loadComponent: () =>
            import('./communication/message-detail.component').then(
                (m) => m.MessageDetailComponent
            ),
        data: { phoneGateway: 'sms', permission: { resource: 'smartTools' } },
    },
] as Routes;
