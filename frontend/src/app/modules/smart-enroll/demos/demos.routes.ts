import { Routes } from '@angular/router';
import { LEGACY_DEMO_REDIRECTS } from './demo-catalog';

const demoRoutes: Routes = [
    { path: '', loadComponent: () => import('./demos-hub.component').then((m) => m.DemosHubComponent) },
    {
        path: 'create-collection',
        loadComponent: () =>
            import('./pages/create-collection/create-collection-demo.component').then(
                (m) => m.CreateCollectionDemoComponent
            ),
    },
    {
        path: 'create-person',
        loadComponent: () =>
            import('./pages/create-person/create-person-demo.component').then(
                (m) => m.CreatePersonDemoComponent
            ),
    },
    {
        path: 'create-person-with-liveness',
        loadComponent: () =>
            import('./pages/create-person-with-liveness/create-person-with-liveness-demo.component').then(
                (m) => m.CreatePersonWithLivenessDemoComponent
            ),
    },
    {
        path: 'update-person',
        loadComponent: () =>
            import('./pages/update-person/update-person-demo.component').then(
                (m) => m.UpdatePersonDemoComponent
            ),
    },
    {
        path: 'delete-person',
        loadComponent: () =>
            import('./pages/delete-person/delete-person-demo.component').then(
                (m) => m.DeletePersonDemoComponent
            ),
    },
    {
        path: 'search-person',
        loadComponent: () =>
            import('./pages/search-person/search-person-demo.component').then(
                (m) => m.SearchPersonDemoComponent
            ),
    },
    {
        path: 'search-live-person',
        loadComponent: () =>
            import('./pages/search-live-person/search-live-person-demo.component').then(
                (m) => m.SearchLivePersonDemoComponent
            ),
    },
    {
        path: 'search-active-user',
        loadComponent: () =>
            import('./pages/search-active-user/search-active-user-demo.component').then(
                (m) => m.SearchActiveUserDemoComponent
            ),
    },
    {
        path: 'detect-face',
        loadComponent: () =>
            import('./pages/detect-face/detect-face-demo.component').then(
                (m) => m.DetectFaceDemoComponent
            ),
    },
    {
        path: 'search-crops',
        loadComponent: () =>
            import('./pages/search-crops/search-crops-demo.component').then(
                (m) => m.SearchCropsDemoComponent
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
        path: 'verify-face',
        loadComponent: () =>
            import('./pages/verify-face/verify-face-demo.component').then(
                (m) => m.VerifyFaceDemoComponent
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
