import { Routes } from '@angular/router';

export default [
    { path: '', redirectTo: 'smart-reduce', pathMatch: 'full' },
    {
        path: 'smart-reduce',
        loadComponent: () =>
            import('./smart-reduce/smart-reduce.component').then(
                (m) => m.SmartReduceComponent
            ),
    },
    {
        path: 'whatsapp-messages',
        loadComponent: () =>
            import('./communication/messages-list.component').then(
                (m) => m.MessagesListComponent
            ),
        data: { phoneGateway: 'whatsapp' },
    },
    {
        path: 'whatsapp-messages/new',
        loadComponent: () =>
            import('./communication/message-compose.component').then(
                (m) => m.MessageComposeComponent
            ),
        data: { phoneGateway: 'whatsapp' },
    },
    {
        path: 'whatsapp-messages/:id',
        loadComponent: () =>
            import('./communication/message-detail.component').then(
                (m) => m.MessageDetailComponent
            ),
        data: { phoneGateway: 'whatsapp' },
    },
    {
        path: 'sms-messages',
        loadComponent: () =>
            import('./communication/messages-list.component').then(
                (m) => m.MessagesListComponent
            ),
        data: { phoneGateway: 'sms' },
    },
    {
        path: 'sms-messages/new',
        loadComponent: () =>
            import('./communication/message-compose.component').then(
                (m) => m.MessageComposeComponent
            ),
        data: { phoneGateway: 'sms' },
    },
    {
        path: 'sms-messages/:id',
        loadComponent: () =>
            import('./communication/message-detail.component').then(
                (m) => m.MessageDetailComponent
            ),
        data: { phoneGateway: 'sms' },
    },
] as Routes;
