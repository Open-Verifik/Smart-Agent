import { Routes } from '@angular/router';
import { SmartBatchComponent } from './smart-batch.component';

export default [
    {
        path: '',
        component: SmartBatchComponent,
    },
    {
        path: 'create',
        loadComponent: () =>
            import('app/modules/smart-batch/create/create-batch-config.component').then(
                (m) => m.CreateBatchConfigComponent
            ),
    },
    {
        path: 'edit/:id',
        loadComponent: () =>
            import('app/modules/smart-batch/create/create-batch-config.component').then(
                (m) => m.CreateBatchConfigComponent
            ),
    },
    {
        path: ':configId',
        loadComponent: () =>
            import('app/modules/smart-batch/dashboard/batch-dashboard.component').then(
                (m) => m.BatchDashboardComponent
            ),
    },
    {
        path: ':configId/batch/new',
        loadComponent: () =>
            import('app/modules/smart-batch/dashboard/create-batch/create-batch.component').then(
                (m) => m.CreateBatchComponent
            ),
    },
] as Routes;
