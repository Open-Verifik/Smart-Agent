import { Routes } from '@angular/router';
import { HumanAuthnSetupSaveGuard } from './setup/human-authn-setup-save.guard';

export default [
    {
        path: '',
        loadComponent: () =>
            import('./human-authn-projects.component').then((m) => m.HumanAuthnProjectsComponent),
    },
    {
        path: 'new/setup/:step',
        loadComponent: () =>
            import('./setup/human-authn-setup-host.component').then((m) => m.HumanAuthnSetupHostComponent),
        canDeactivate: [HumanAuthnSetupSaveGuard],
    },
    {
        path: 'new/setup',
        loadComponent: () =>
            import('./setup/human-authn-setup-host.component').then((m) => m.HumanAuthnSetupHostComponent),
        canDeactivate: [HumanAuthnSetupSaveGuard],
    },
    {
        path: ':projectId/setup/:step',
        loadComponent: () =>
            import('./setup/human-authn-setup-host.component').then((m) => m.HumanAuthnSetupHostComponent),
        canDeactivate: [HumanAuthnSetupSaveGuard],
    },
    {
        path: ':projectId/setup',
        loadComponent: () =>
            import('./setup/human-authn-setup-host.component').then((m) => m.HumanAuthnSetupHostComponent),
        canDeactivate: [HumanAuthnSetupSaveGuard],
    },
] as Routes;
