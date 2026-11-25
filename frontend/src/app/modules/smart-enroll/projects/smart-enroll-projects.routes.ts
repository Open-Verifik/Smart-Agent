import { Routes } from '@angular/router';
import { staffPermissionGuard } from 'app/core/permissions';

import { SetupSaveGuard } from './setup/setup-save.guard';

export default [
    {
        path: '',
        canActivate: [staffPermissionGuard],
        data: { permission: { any: [['smartEnrollProjects', 'read'], ['smartEnrollRecords', 'read']] } },
        loadComponent: () =>
            import('./project-list/project-list.component').then((m) => m.ProjectListComponent),
    },
    {
        path: 'new/setup/:step',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartEnrollProjects', action: 'create' } },
        loadComponent: () => import('./setup/setup-host.component').then((m) => m.SetupHostComponent),
        canDeactivate: [SetupSaveGuard],
    },
    {
        path: 'new/setup',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartEnrollProjects', action: 'create' } },
        loadComponent: () => import('./setup/setup-host.component').then((m) => m.SetupHostComponent),
        canDeactivate: [SetupSaveGuard],
    },
    {
        path: ':projectId/records/:recordId',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartEnrollRecords', action: 'read' } },
        loadComponent: () =>
            import('./project-record-detail.component').then((m) => m.ProjectRecordDetailComponent),
    },
    {
        path: ':projectId/records',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartEnrollRecords', action: 'read' } },
        loadComponent: () =>
            import('./project-records/project-records.component').then(
                (m) => m.ProjectRecordsComponent
            ),
    },
    {
        path: ':projectId/staff',
        canActivate: [staffPermissionGuard],
        data: { permission: { any: [['team', 'read'], ['smartEnrollProjects', 'update']] } },
        loadComponent: () =>
            import('./project-staff/project-staff.component').then((m) => m.ProjectStaffComponent),
    },
    {
        path: ':projectId/setup/:step',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartEnrollProjects', action: 'update' } },
        loadComponent: () => import('./setup/setup-host.component').then((m) => m.SetupHostComponent),
        canDeactivate: [SetupSaveGuard],
    },
    {
        path: ':projectId/setup',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartEnrollProjects', action: 'update' } },
        loadComponent: () => import('./setup/setup-host.component').then((m) => m.SetupHostComponent),
        canDeactivate: [SetupSaveGuard],
    },
    {
        path: ':projectId',
        canActivate: [staffPermissionGuard],
        data: { permission: { any: [['smartEnrollProjects', 'read'], ['smartEnrollRecords', 'read']] } },
        loadComponent: () =>
            import('./project-detail/project-detail.component').then((m) => m.ProjectDetailComponent),
    },
] as Routes;
