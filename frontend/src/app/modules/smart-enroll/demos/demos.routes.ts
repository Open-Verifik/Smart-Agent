import { Routes } from '@angular/router';
import { LEGACY_DEMO_REDIRECTS } from './demo-catalog';

const demoRoutes: Routes = [
    { path: '', loadComponent: () => import('./demos-hub.component').then((m) => m.DemosHubComponent) },
    {
        path: 'detect-face',
        loadComponent: () =>
            import('./pages/detect-face/detect-face-demo.component').then(
                (m) => m.DetectFaceDemoComponent
            ),
    },
    {
        path: 'face-comparison',
        loadComponent: () =>
            import('./pages/face-comparison/face-comparison-demo.component').then(
                (m) => m.FaceComparisonDemoComponent
            ),
    },
    {
        path: 'face-comparison-liveness',
        loadComponent: () =>
            import('./pages/face-comparison-liveness/face-comparison-liveness-demo.component').then(
                (m) => m.FaceComparisonLivenessDemoComponent
            ),
    },
    {
        path: 'liveness',
        loadComponent: () =>
            import('./pages/liveness/liveness-demo.component').then((m) => m.LivenessDemoComponent),
    },
    {
        path: 'humanid-create',
        loadComponent: () =>
            import('./pages/humanid-create/humanid-create-demo.component').then(
                (m) => m.HumanidCreateDemoComponent
            ),
    },
    {
        path: 'humanid-create-qr',
        loadComponent: () =>
            import('./pages/humanid-create-qr/humanid-create-qr-demo.component').then(
                (m) => m.HumanidCreateQrDemoComponent
            ),
    },
    {
        path: 'humanid-decrypt',
        loadComponent: () =>
            import('./pages/humanid-decrypt/humanid-decrypt-demo.component').then(
                (m) => m.HumanidDecryptDemoComponent
            ),
    },
    {
        path: 'humanid-preview',
        loadComponent: () =>
            import('./pages/humanid-preview/humanid-preview-demo.component').then(
                (m) => m.HumanidPreviewDemoComponent
            ),
    },
    ...Object.entries(LEGACY_DEMO_REDIRECTS).map(([legacy, canonical]) => ({
        path: legacy,
        redirectTo: canonical,
        pathMatch: 'full' as const,
    })),
];

export default demoRoutes;
