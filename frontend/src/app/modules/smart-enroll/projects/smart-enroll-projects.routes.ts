import { Routes } from '@angular/router';

import { SetupSaveGuard } from './setup/setup-save.guard';

export default [
    {
        path: '',
        loadComponent: () =>
            import('./project-list/project-list.component').then((m) => m.ProjectListComponent),
    },
    {
        path: 'new/setup/:step',
        loadComponent: () => import('./setup/setup-host.component').then((m) => m.SetupHostComponent),
        canDeactivate: [SetupSaveGuard],
    },
    {
        path: 'new/setup',
        loadComponent: () => import('./setup/setup-host.component').then((m) => m.SetupHostComponent),
        canDeactivate: [SetupSaveGuard],
    },
    {
        path: ':projectId/records/:recordId',
        loadComponent: () =>
            import('./project-record-detail.component').then((m) => m.ProjectRecordDetailComponent),
    },
    {
        path: ':projectId/records',
        loadComponent: () =>
            import('./project-records/project-records.component').then(
                (m) => m.ProjectRecordsComponent
            ),
    },
    {
        path: ':projectId/staff',
        loadComponent: () =>
            import('./project-staff/project-staff.component').then((m) => m.ProjectStaffComponent),
    },
    {
        path: ':projectId/setup/:step',
        loadComponent: () => import('./setup/setup-host.component').then((m) => m.SetupHostComponent),
        canDeactivate: [SetupSaveGuard],
    },
    {
        path: ':projectId/setup',
        loadComponent: () => import('./setup/setup-host.component').then((m) => m.SetupHostComponent),
        canDeactivate: [SetupSaveGuard],
    },
    {
        path: ':projectId',
        loadComponent: () =>
            import('./project-detail/project-detail.component').then((m) => m.ProjectDetailComponent),
    },
] as Routes;
