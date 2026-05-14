import { Routes } from '@angular/router';

import { SmartAccessSetupSaveGuard } from './setup/smart-access-setup-save.guard';

export default [
    {
        path: '',
        loadComponent: () =>
            import('./project-list/access-project-list.component').then((m) => m.AccessProjectListComponent),
    },
    {
        path: 'new/setup/:step',
        loadComponent: () =>
            import('./setup/smart-access-setup-host.component').then((m) => m.SmartAccessSetupHostComponent),
        canDeactivate: [SmartAccessSetupSaveGuard],
    },
    {
        path: 'new/setup',
        loadComponent: () =>
            import('./setup/smart-access-setup-host.component').then((m) => m.SmartAccessSetupHostComponent),
        canDeactivate: [SmartAccessSetupSaveGuard],
    },
    {
        path: ':projectId/records/:loginId',
        loadComponent: () =>
            import('./access-login-detail/access-login-detail.component').then(
                (m) => m.AccessLoginDetailComponent
            ),
    },
    {
        path: ':projectId/records',
        loadComponent: () =>
            import('./project-records/access-project-records.component').then((m) => m.AccessProjectRecordsComponent),
    },
    {
        path: ':projectId/staff',
        loadComponent: () =>
            import('./project-staff/access-project-staff.component').then((m) => m.AccessProjectStaffComponent),
    },
    {
        path: ':projectId/setup/:step',
        loadComponent: () =>
            import('./setup/smart-access-setup-host.component').then((m) => m.SmartAccessSetupHostComponent),
        canDeactivate: [SmartAccessSetupSaveGuard],
    },
    {
        path: ':projectId/setup',
        loadComponent: () =>
            import('./setup/smart-access-setup-host.component').then((m) => m.SmartAccessSetupHostComponent),
        canDeactivate: [SmartAccessSetupSaveGuard],
    },
    {
        path: ':projectId',
        loadComponent: () =>
            import('./project-detail/access-project-detail.component').then((m) => m.AccessProjectDetailComponent),
    },
] as Routes;
