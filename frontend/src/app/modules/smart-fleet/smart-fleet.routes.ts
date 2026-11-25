import { Routes } from '@angular/router';
import { staffPermissionGuard } from 'app/core/permissions';
import { FleetDashboardComponent } from './dashboard/fleet-dashboard.component';

export default [
    {
        path: '',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartFleetAssets' } },
        component: FleetDashboardComponent,
    },
    {
        path: 'assets',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartFleetAssets' } },
        loadComponent: () =>
            import('./assets/fleet-assets.component').then((m) => m.FleetAssetsComponent),
    },
    {
        path: 'assets/:id',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartFleetAssets' } },
        loadComponent: () =>
            import('./assets/fleet-asset-detail.component').then(
                (m) => m.FleetAssetDetailComponent
            ),
    },
    {
        path: 'watch-rules',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartFleetRules' } },
        loadComponent: () =>
            import('./watch-rules/fleet-watch-rules.component').then(
                (m) => m.FleetWatchRulesComponent
            ),
    },
    {
        path: 'alerts',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'smartFleetRules' } },
        loadComponent: () =>
            import('./alerts/fleet-alerts.component').then((m) => m.FleetAlertsComponent),
    },
    {
        path: 'plans',
        canActivate: [staffPermissionGuard],
        data: { permission: { resource: 'billingSubscriptions' } },
        loadComponent: () =>
            import('./plans/fleet-plans.component').then((m) => m.FleetPlansComponent),
    },
] as Routes;
