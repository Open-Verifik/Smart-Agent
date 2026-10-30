import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, Routes } from '@angular/router';
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
        canDeactivate: [visitaGuideLeaveGuard],
        loadComponent: () =>
            import('app/modules/smart-batch/visita-guide/visita-guide.component').then(
                (m) => m.VisitaGuideComponent
            ),
    },
    {
        path: 'guide/:step',
        canDeactivate: [visitaGuideLeaveGuard],
        loadComponent: () =>
            import('app/modules/smart-batch/visita-guide/visita-guide.component').then(
                (m) => m.VisitaGuideComponent
            ),
    },
    {
        path: 'workspace',
        component: SmartBatchComponent,
    },
    {
        path: 'create',
        component: CreateBatchConfigComponent,
    },
    {
        path: 'edit/:id',
        component: CreateBatchConfigComponent,
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
        loadComponent: () =>
            import('app/modules/smart-batch/quick-validate/quick-validate.component').then(
                (m) => m.QuickValidateComponent
            ),
    },
    {
        path: ':configId/batch/new',
        loadComponent: () =>
            import('app/modules/smart-batch/dashboard/create-batch/create-batch.component').then(
                (m) => m.CreateBatchComponent
            ),
    },
    {
        path: ':configId/batch/:batchId/inputs',
        loadComponent: () =>
            import('app/modules/smart-batch/dashboard/create-batch/create-batch.component').then(
                (m) => m.CreateBatchComponent
            ),
    },
    {
        path: ':configId/batch/:batchId/quick-validate',
        loadComponent: () =>
            import('app/modules/smart-batch/quick-validate/quick-validate.component').then(
                (m) => m.QuickValidateComponent
            ),
    },
    {
        path: ':configId/batch/:batchId/report',
        loadComponent: () =>
            import('app/modules/smart-batch/report-viewer/report-viewer.component').then(
                (m) => m.ReportViewerComponent
            ),
    },
    {
        path: ':configId/batch/:batchId',
        loadComponent: () =>
            import(
                'app/modules/smart-batch/dashboard/batch-processing/batch-processing.component'
            ).then((m) => m.BatchProcessingComponent),
    },
    {
        path: ':configId',
        loadComponent: () =>
            import('app/modules/smart-batch/dashboard/batch-dashboard.component').then(
                (m) => m.BatchDashboardComponent
            ),
    },
] as Routes;
