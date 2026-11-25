import { Routes } from '@angular/router';
import { staffPermissionGuard } from 'app/core/permissions';

export default [
    {
        path: '',
        canActivate: [staffPermissionGuard],
        data: { permission: { any: [['smartBusinessProjects', 'read'], ['smartBusinessRecords', 'read']] } },
        loadComponent: () =>
            import('./project-list/business-project-list.component').then((m) => m.BusinessProjectListComponent),
    },
    {
        path: 'new/setup/:step',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartBusinessProjects', action: 'create' } },
        loadComponent: () =>
            import('./setup/business-setup-host.component').then((m) => m.BusinessSetupHostComponent),
    },
    {
        path: 'new/setup',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartBusinessProjects', action: 'create' } },
        loadComponent: () =>
            import('./setup/business-setup-host.component').then((m) => m.BusinessSetupHostComponent),
    },
    {
        path: ':projectId/records/:recordId/app-registration/:appRegistrationId',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartBusinessRecords', action: 'read' } },
        loadComponent: () =>
            import('./company-record-detail/company-record-detail.component').then(
                (m) => m.SmartBusinessCompanyRecordDetailComponent
            ),
    },
    {
        path: ':projectId/records/:recordId',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartBusinessRecords', action: 'read' } },
        loadComponent: () =>
            import('./company-record-detail/company-record-detail.component').then(
                (m) => m.SmartBusinessCompanyRecordDetailComponent
            ),
    },
    {
        path: ':projectId/records',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartBusinessRecords', action: 'read' } },
        loadComponent: () =>
            import('./project-records/business-project-records.component').then(
                (m) => m.BusinessProjectRecordsComponent
            ),
    },
    {
        path: ':projectId/setup/:step',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartBusinessProjects', action: 'update' } },
        loadComponent: () =>
            import('./setup/business-setup-host.component').then((m) => m.BusinessSetupHostComponent),
    },
    {
        path: ':projectId/setup',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartBusinessProjects', action: 'update' } },
        loadComponent: () =>
            import('./setup/business-setup-host.component').then((m) => m.BusinessSetupHostComponent),
    },
    {
        path: ':projectId',
        canActivate: [staffPermissionGuard],
        data: { permission: { any: [['smartBusinessProjects', 'read'], ['smartBusinessRecords', 'read']] } },
        loadComponent: () =>
            import('./project-detail/business-project-detail.component').then(
                (m) => m.BusinessProjectDetailComponent
            ),
    },
] as Routes;
