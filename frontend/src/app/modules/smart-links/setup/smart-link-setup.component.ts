import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';

import { SmartLinkLivePreviewComponent } from '../preview/smart-link-live-preview.component';
import { SMART_LINK_STYLE_DEFAULTS, SmartLinksService } from '../smart-links.service';
import type {
    EngineProjectOption,
    SmartLinkCompletionMode,
    SmartLinkLinkedProjects,
    SmartLinkMode,
    SmartLinkProject,
    SmartLinkVerifyStyle,
} from '../smart-links.types';

const MODE_OPTIONS: SmartLinkMode[] = ['personal', 'business', 'humanId', 'access'];
const COMPLETION_OPTIONS: SmartLinkCompletionMode[] = ['receipt', 'redirect', 'postMessage'];
const STYLE_OPTIONS: SmartLinkVerifyStyle[] = ['a', 'b', 'c', 'd', 'e', 'f'];

@Component({
    selector: 'smart-link-setup',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ClipboardModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        TranslocoModule,
        SmartLinkLivePreviewComponent,
    ],
    templateUrl: './smart-link-setup.component.html',
    styleUrls: ['./smart-link-setup.component.scss'],
})
export class SmartLinkSetupComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _service = inject(SmartLinksService);
    private _clipboard = inject(Clipboard);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _authGate = inject(AuthRequiredGateService);

    readonly steps = [0, 1, 2, 3, 4];
    readonly modeOptions = MODE_OPTIONS;
    readonly completionOptions = COMPLETION_OPTIONS;
    readonly styleOptions = STYLE_OPTIONS;

    projectId = signal<string | null>(null);
    activeStep = signal(0);
    loading = signal(false);
    saving = signal(false);
    saveError = signal<string | null>(null);
    copiedKit = signal(false);

    draft: SmartLinkProject = this._service.createDefaultDraft();
    postMessageOriginsText = '';
    allowedCountriesText = 'All';

    engines = signal<Record<EngineProjectOption['category'], EngineProjectOption[]>>({
        smartEnroll: [],
        smartBusiness: [],
        humanAuthn: [],
        smartAccess: [],
    });

    flow = computed(() => this.draft.projectFlows![0]);

    aiPromptPreview = computed(() => this._service.buildAiPromptKit(this.draft));

    ngOnInit(): void {
        const hasToken = typeof localStorage !== 'undefined' && Boolean(localStorage.getItem('accessToken'));
        if (hasToken) {
            this._service.listCandidateEngineProjects().subscribe((grouped) => this.engines.set(grouped));
        }

        this._route.paramMap.subscribe((params) => {
            const rawId = params.get('projectId');
            const parsedStep = Math.max(0, Math.min(4, Number(params.get('step') ?? 0) || 0));
            this.activeStep.set(parsedStep);

            if (rawId && rawId !== 'new' && rawId !== this.projectId()) {
                this.projectId.set(rawId);
                this._loadExisting(rawId);
            } else if (!rawId) {
                this.projectId.set(null);
                this._syncTextBuffers();
            }
        });
    }

    goToStep(step: number): void {
        const clamped = Math.max(0, Math.min(4, step));
        this.activeStep.set(clamped);
        const id = this.projectId();
        const commands = id
            ? ['/smart-links/projects', id, 'setup', clamped]
            : ['/smart-links/projects/new/setup', clamped];
        void this._router.navigate(commands, { replaceUrl: true });
    }

    goBack(): void {
        const id = this.projectId();
        void this._router.navigate(id ? ['/smart-links/projects', id] : ['/smart-links/projects']);
    }

    get currentFlow() {
        return this.draft.projectFlows![0];
    }

    isModeEnabled(mode: SmartLinkMode): boolean {
        return this.currentFlow.routing.supportedModes.includes(mode);
    }

    toggleMode(mode: SmartLinkMode): void {
        const list = [...this.currentFlow.routing.supportedModes];
        const idx = list.indexOf(mode);
        if (idx >= 0) {
            if (list.length <= 1) return;
            list.splice(idx, 1);
        } else {
            list.push(mode);
        }
        this.currentFlow.routing.supportedModes = list;
    }

    suggestSlugFromName(): void {
        const clean = (this.draft.name || '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 48);
        this.currentFlow.slug = clean;
    }

    selectStyle(styleId: SmartLinkVerifyStyle): void {
        this.currentFlow.onboardingSettings.verifyStyle = styleId;
        const preset = SMART_LINK_STYLE_DEFAULTS[styleId];
        this.draft.branding = {
            ...this.draft.branding,
            ...preset,
        };
    }

    selectEngineProject(slot: keyof SmartLinkLinkedProjects, id: string | null): void {
        this.currentFlow.routing.linkedProjects[slot] =
            this.currentFlow.routing.linkedProjects[slot] === id ? null : id;
    }

    copyAiPrompt(): void {
        this._clipboard.copy(this._service.buildAiPromptKit(this.draft));
        this.copiedKit.set(true);
        setTimeout(() => this.copiedKit.set(false), 2000);
    }

    saveProject(): void {
        const hasToken = typeof localStorage !== 'undefined' && Boolean(localStorage.getItem('accessToken'));
        if (!hasToken) {
            this._authGate.runWithAuthOrDialog({
                onAuthenticated: () => {
                    this._service.listCandidateEngineProjects().subscribe((grouped) => this.engines.set(grouped));
                    this._performSave();
                },
                panelClass: 'auth-required-dialog',
            });
            return;
        }
        this._performSave();
    }

    private _performSave(): void {
        if (!this.draft.name?.trim()) {
            this.saveError.set(this._transloco.translate('smartLinks.setup.nameRequired'));
            this.goToStep(0);
            return;
        }

        this.currentFlow.completion.allowedPostMessageOrigins = this.postMessageOriginsText
            .split(/[\n,]/)
            .map((s) => s.trim())
            .filter(Boolean);
        const countries = this.allowedCountriesText
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean);
        this.currentFlow.security.allowedCountries = countries.length ? countries : ['All'];
        this.draft.allowedCountries = this.currentFlow.security.allowedCountries;

        this.saving.set(true);
        this.saveError.set(null);

        const existingId = this.projectId();
        const req$ = existingId
            ? this._service.updateSmartLinkProject(existingId, this.draft)
            : this._service.createSmartLinkProject(this.draft);

        req$.subscribe({
            next: (saved) => {
                this.saving.set(false);
                this._snack.open(this._transloco.translate('smartLinks.setup.savedToast'), 'OK', { duration: 2500 });
                const id = saved?._id || existingId;
                if (id) {
                    void this._router.navigate(['/smart-links/projects', id]);
                }
            },
            error: (err) => {
                this.saving.set(false);
                this.saveError.set(err?.error?.message || this._transloco.translate('smartLinks.setup.saveError'));
            },
        });
    }

    private _loadExisting(id: string): void {
        this.loading.set(true);
        this._service.getSmartLinkProject(id).subscribe({
            next: (proj) => {
                if (proj) {
                    const base = this._service.createDefaultDraft();
                    const existingFlow = this._service.extractSmartLinkFlow(proj);
                    const baseFlow = base.projectFlows![0];
                    this.draft = {
                        ...base,
                        ...proj,
                        branding: { ...base.branding, ...(proj.branding || {}) },
                        dataProtection: { ...base.dataProtection, ...(proj.dataProtection || {}) },
                        projectFlows: [
                            {
                                ...baseFlow,
                                ...(existingFlow || {}),
                                routing: {
                                    ...baseFlow.routing,
                                    ...(existingFlow?.routing || {}),
                                    linkedProjects: {
                                        ...baseFlow.routing.linkedProjects,
                                        ...(existingFlow?.routing?.linkedProjects || {}),
                                    },
                                    stepUpPolicy: {
                                        ...baseFlow.routing.stepUpPolicy,
                                        ...(existingFlow?.routing?.stepUpPolicy || {}),
                                    },
                                },
                                completion: {
                                    ...baseFlow.completion,
                                    ...(existingFlow?.completion || {}),
                                },
                                security: {
                                    ...baseFlow.security,
                                    ...(existingFlow?.security || {}),
                                },
                                integrations: {
                                    ...baseFlow.integrations,
                                    ...(existingFlow?.integrations || {}),
                                },
                                onboardingSettings: {
                                    ...baseFlow.onboardingSettings,
                                    ...(existingFlow?.onboardingSettings || {}),
                                },
                            },
                        ],
                    };
                    this._syncTextBuffers();
                }
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
            },
        });
    }

    private _syncTextBuffers(): void {
        this.postMessageOriginsText = (this.currentFlow.completion.allowedPostMessageOrigins || []).join(', ');
        this.allowedCountriesText = (this.currentFlow.security.allowedCountries || ['All']).join(', ');
    }
}
