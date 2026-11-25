import { Routes } from '@angular/router';
import { staffPermissionGuard } from 'app/core/permissions';

import { SmartAccessSetupSaveGuard } from './setup/smart-access-setup-save.guard';

export default [
    {
        path: '',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartAccess', action: 'read' } },
        loadComponent: () =>
            import('./project-list/access-project-list.component').then((m) => m.AccessProjectListComponent),
    },
    {
        path: 'new',
        redirectTo: 'new/setup/0',
        pathMatch: 'full',
    },
    {
        path: 'new/setup/:step',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartAccess', action: 'create' } },
        loadComponent: () =>
            import('./setup/smart-access-setup-host.component').then((m) => m.SmartAccessSetupHostComponent),
        canDeactivate: [SmartAccessSetupSaveGuard],
    },
    {
        path: 'new/setup',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartAccess', action: 'create' } },
        loadComponent: () =>
            import('./setup/smart-access-setup-host.component').then((m) => m.SmartAccessSetupHostComponent),
        canDeactivate: [SmartAccessSetupSaveGuard],
    },
    {
        path: ':projectId/records/:loginId',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartAccess', action: 'read' } },
        loadComponent: () =>
            import('./access-login-detail/access-login-detail.component').then(
                (m) => m.AccessLoginDetailComponent
            ),
    },
    {
        path: ':projectId/records',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartAccess', action: 'read' } },
        loadComponent: () =>
            import('./project-records/access-project-records.component').then((m) => m.AccessProjectRecordsComponent),
    },
    {
        path: ':projectId/staff',
        canActivate: [staffPermissionGuard],
        data: { permission: { any: [['team', 'read'], ['smartAccess', 'update']] } },
        loadComponent: () =>
            import('./project-staff/access-project-staff.component').then((m) => m.AccessProjectStaffComponent),
    },
    {
        path: ':projectId/setup/:step',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartAccess', action: 'update' } },
        loadComponent: () =>
            import('./setup/smart-access-setup-host.component').then((m) => m.SmartAccessSetupHostComponent),
        canDeactivate: [SmartAccessSetupSaveGuard],
    },
    {
        path: ':projectId/setup',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartAccess', action: 'update' } },
        loadComponent: () =>
            import('./setup/smart-access-setup-host.component').then((m) => m.SmartAccessSetupHostComponent),
        canDeactivate: [SmartAccessSetupSaveGuard],
    },
    {
        path: ':projectId',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartAccess', action: 'read' } },
        loadComponent: () =>
            import('./project-detail/access-project-detail.component').then((m) => m.AccessProjectDetailComponent),
    },
] as Routes;
