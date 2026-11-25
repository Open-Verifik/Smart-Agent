import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, Routes } from '@angular/router';
import { staffPermissionGuard } from 'app/core/permissions';
import { CreateBatchConfigComponent } from './create/create-batch-config.component';
import { SmartBatchComponent } from './smart-batch.component';
import { visitaGuideLeaveGuard } from './visita-guide/visita-guide-leave.guard';

const redirectLegacyReportBuilder: CanActivateFn = (route: ActivatedRouteSnapshot) => {
    const router = inject(Router);
    const configId = route.paramMap.get('configId');
    const templateId = route.paramMap.get('templateId') ?? route.queryParamMap.get('templateId');

    return router.createUrlTree(['/smart-batch', 'guide', 'layout'], {
        queryParams: {
            ...route.queryParams,
            intent: 'template',
            ...(configId ? { configId } : {}),
            ...(templateId
                ? { templateId, templateChoice: 'mine' }
                : { templateChoice: 'scratch' }),
        },
    });
};

export default [
    {
        path: '',
        canActivate: [staffPermissionGuard],
        canDeactivate: [visitaGuideLeaveGuard],
        data: { permission: { resource: 'smartReportsTemplates' } },
        loadComponent: () =>
            import('app/modules/smart-batch/visita-guide/visita-guide.component').then(
                (m) => m.VisitaGuideComponent
            ),
    },
    {
        path: 'builder',
        canActivate: [staffPermissionGuard],
        canDeactivate: [visitaGuideLeaveGuard],
        data: { permission: { resource: 'smartReportsTemplates' } },
        loadComponent: () =>
            import('app/modules/smart-batch/visita-guide/visita-guide.component').then(
                (m) => m.VisitaGuideComponent
            ),
    },
    {
        path: 'builder/:step',
        canActivate: [staffPermissionGuard],
        canDeactivate: [visitaGuideLeaveGuard],
        data: { permission: { resource: 'smartReportsTemplates' } },
        loadComponent: () =>
            import('app/modules/smart-batch/visita-guide/visita-guide.component').then(
                (m) => m.VisitaGuideComponent
            ),
    },
    {
        path: 'templates',
        canActivate: [staffPermissionGuard],
        component: SmartBatchComponent,
        data: { defaultTab: 'templates', viewMode: 'templates', permission: { resource: 'smartReportsTemplates' } },
    },
    {
        path: 'batch',
        canActivate: [staffPermissionGuard],
        component: SmartBatchComponent,
        data: { defaultTab: 'configurations', viewMode: 'batch', permission: { resource: 'smartReportsBatch' } },
    },
    {
        path: 'guide/:step',
        canActivate: [staffPermissionGuard],
        canDeactivate: [visitaGuideLeaveGuard],
        data: { permission: { resource: 'smartReportsTemplates' } },
        loadComponent: () =>
            import('app/modules/smart-batch/visita-guide/visita-guide.component').then(
                (m) => m.VisitaGuideComponent
            ),
    },
    {
        path: 'workspace',
        canActivate: [staffPermissionGuard],
        component: SmartBatchComponent,
        data: { permission: { resource: 'smartReportsBatch' } },
    },
    {
        path: 'create',
        canActivate: [staffPermissionGuard],
        component: CreateBatchConfigComponent,
        data: { permission: { resource: 'smartReportsBatch', action: 'create' } },
    },
    {
        path: 'edit/:id',
        canActivate: [staffPermissionGuard],
        component: CreateBatchConfigComponent,
        data: { permission: { resource: 'smartReportsBatch', action: 'update' } },
    },
    {
        path: 'report-builder/:templateId',
        canActivate: [redirectLegacyReportBuilder],
        children: [],
    },
    {
        path: 'report-builder',
        canActivate: [redirectLegacyReportBuilder],
        children: [],
    },
    {
        path: ':configId/report-builder/:templateId',
        canActivate: [redirectLegacyReportBuilder],
        children: [],
    },
    {
        path: ':configId/report-builder',
        canActivate: [redirectLegacyReportBuilder],
        children: [],
    },
    {
        path: ':configId/quick-validate',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartReportsBatch', action: 'execute' } },
        loadComponent: () =>
            import('app/modules/smart-batch/quick-validate/quick-validate.component').then(
                (m) => m.QuickValidateComponent
            ),
    },
    {
        path: ':configId/batch/new',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartReportsBatch', action: 'execute' } },
        loadComponent: () =>
            import('app/modules/smart-batch/dashboard/create-batch/create-batch.component').then(
                (m) => m.CreateBatchComponent
            ),
    },
    {
        path: ':configId/batch/:batchId/inputs',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartReportsBatch', action: 'read' } },
        loadComponent: () =>
            import('app/modules/smart-batch/dashboard/create-batch/create-batch.component').then(
                (m) => m.CreateBatchComponent
            ),
    },
    {
        path: ':configId/batch/:batchId/quick-validate',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartReportsBatch', action: 'execute' } },
        loadComponent: () =>
            import('app/modules/smart-batch/quick-validate/quick-validate.component').then(
                (m) => m.QuickValidateComponent
            ),
    },
    {
        path: ':configId/batch/:batchId/report',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartReportsBatch', action: 'read' } },
        loadComponent: () =>
            import('app/modules/smart-batch/report-viewer/report-viewer.component').then(
                (m) => m.ReportViewerComponent
            ),
    },
    {
        path: ':configId/batch/:batchId',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartReportsBatch', action: 'read' } },
        loadComponent: () =>
            import(
                'app/modules/smart-batch/dashboard/batch-processing/batch-processing.component'
            ).then((m) => m.BatchProcessingComponent),
    },
    {
        path: ':configId',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartReportsBatch', action: 'read' } },
        loadComponent: () =>
            import('app/modules/smart-batch/dashboard/batch-dashboard.component').then(
                (m) => m.BatchDashboardComponent
            ),
    },
] as Routes;
