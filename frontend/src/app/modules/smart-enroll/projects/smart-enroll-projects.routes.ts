import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () =>
            import('./project-list/project-list.component').then((m) => m.ProjectListComponent),
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
        path: ':projectId',
        loadComponent: () =>
            import('./project-detail/project-detail.component').then((m) => m.ProjectDetailComponent),
    },
] as Routes;
