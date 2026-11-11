import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () =>
            import('./project-list/business-project-list.component').then((m) => m.BusinessProjectListComponent),
    },
    {
        path: 'new/setup/:step',
        loadComponent: () =>
            import('./setup/business-setup-host.component').then((m) => m.BusinessSetupHostComponent),
    },
    {
        path: 'new/setup',
        loadComponent: () =>
            import('./setup/business-setup-host.component').then((m) => m.BusinessSetupHostComponent),
    },
    {
        path: ':projectId/records/:recordId/app-registration/:appRegistrationId',
        loadComponent: () =>
            import('./company-record-detail/company-record-detail.component').then(
                (m) => m.SmartBusinessCompanyRecordDetailComponent
            ),
    },
    {
        path: ':projectId/records/:recordId',
        loadComponent: () =>
            import('./company-record-detail/company-record-detail.component').then(
                (m) => m.SmartBusinessCompanyRecordDetailComponent
            ),
    },
    {
        path: ':projectId/records',
        loadComponent: () =>
            import('./project-records/business-project-records.component').then(
                (m) => m.BusinessProjectRecordsComponent
            ),
    },
    {
        path: ':projectId/setup/:step',
        loadComponent: () =>
            import('./setup/business-setup-host.component').then((m) => m.BusinessSetupHostComponent),
    },
    {
        path: ':projectId/setup',
        loadComponent: () =>
            import('./setup/business-setup-host.component').then((m) => m.BusinessSetupHostComponent),
    },
    {
        path: ':projectId',
        loadComponent: () =>
            import('./project-detail/business-project-detail.component').then(
                (m) => m.BusinessProjectDetailComponent
            ),
    },
] as Routes;
