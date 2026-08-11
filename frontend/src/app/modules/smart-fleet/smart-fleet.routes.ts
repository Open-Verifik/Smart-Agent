import { Routes } from '@angular/router';
import { FleetDashboardComponent } from './dashboard/fleet-dashboard.component';

export default [
    {
        path: '',
        component: FleetDashboardComponent,
    },
    {
        path: 'assets',
        loadComponent: () =>
            import('./assets/fleet-assets.component').then((m) => m.FleetAssetsComponent),
    },
    {
        path: 'assets/:id',
        loadComponent: () =>
            import('./assets/fleet-asset-detail.component').then(
                (m) => m.FleetAssetDetailComponent
            ),
    },
    {
        path: 'watch-rules',
        loadComponent: () =>
            import('./watch-rules/fleet-watch-rules.component').then(
                (m) => m.FleetWatchRulesComponent
            ),
    },
    {
        path: 'alerts',
        loadComponent: () =>
            import('./alerts/fleet-alerts.component').then((m) => m.FleetAlertsComponent),
    },
] as Routes;
