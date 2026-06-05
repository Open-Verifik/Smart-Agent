import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { environment } from 'environments/environment';
import { Subscription } from 'rxjs';
import { smartAccessLoginFlow } from '../login-flow.util';
import type { AccessProject, SmartAccessLoginSettings, SmartAccessSecurity, SmartAccessFlowIntegrations } from '../smart-access-projects.types';
import { SmartAccessProjectsService } from '../smart-access-projects.service';
import { AccessSignInPreviewComponent } from '../setup/preview/access-sign-in-preview.component';
import { ProjectFlowOtpEmailEditorComponent } from 'app/core/project-flow-otp-email/project-flow-otp-email-editor.component';

interface BrandingPreview {
    logo?: string;
    image?: string;
    titleColor: string;
    textColor: string;
    buttonColor: string;
    buttonTextColor: string;
    backgroundColor: string;
    imageBackgroundColor: string;
}

interface SwatchEntry {
    labelKey: string;
    value: string;
}

interface LoginPreview {
    email: boolean;
    emailGateway: string;
    phone: boolean;
    phoneGateway: string;
    faceLiveness: boolean;
    livenessMinScorePct: number;
    searchMinScorePct: number;
    searchMode: string;
    allowPasskeys: boolean;
    showFaceLivenessRecommendation: boolean;
}

@Component({
    selector: 'smart-access-project-detail',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        ClipboardModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
        AccessSignInPreviewComponent,
        ProjectFlowOtpEmailEditorComponent,
    ],
    templateUrl: './access-project-detail.component.html',
    styleUrls: ['./access-project-detail.component.scss'],
})
export class AccessProjectDetailComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _projectsService = inject(SmartAccessProjectsService);
    private _clipboard = inject(Clipboard);
    private _transloco = inject(TranslocoService);
    private _fb = inject(FormBuilder);

    private _paramSub?: Subscription;

    project = signal<AccessProject | null>(null);
    loading = signal(true);
    errorKey = signal<string | null>(null);
    showOtpEmailEditor = signal(false);

    /** Reactive form used only to drive the sign-in preview widget. */
    previewForm = signal<FormGroup | null>(null);

    flow = computed(() => smartAccessLoginFlow(this.project()));

    loginActive = computed(() => {
        const f = this.flow();
        return !!f?.status && f.status !== 'draft';
    });

    liveUrl = computed(() => {
        const p = this.project();
        const base = `${environment.kycBaseUrl ?? ''}`.replace(/\/+$/, '');
        if (!p || !base) return '';
        return `${base}/sign-in/${p._id}`;
    });

    brandingPreview = computed<BrandingPreview>(() => {
        const b = (this.project()?.branding ?? {}) as Record<string, unknown>;
        return {
            logo: b['logo'] as string | undefined,
            image: b['image'] as string | undefined,
            titleColor: (b['titleColor'] as string) || '#0f172a',
            textColor: (b['textColor'] as string) || (b['txtColor'] as string) || '#475569',
            buttonColor: (b['buttonColor'] as string) || '#2563eb',
            buttonTextColor: (b['buttonTextColor'] as string) || (b['buttonTxtColor'] as string) || '#ffffff',
            backgroundColor: (b['backgroundColor'] as string) || (b['bgColor'] as string) || '#ffffff',
            imageBackgroundColor: (b['imageBackgroundColor'] as string) || '#ffffff',
        };
    });

    swatchEntries = computed<SwatchEntry[]>(() => {
        const b = this.brandingPreview();
        return [
            { labelKey: 'smartAccessProjects.detail.brand.titleColor', value: b.titleColor },
            { labelKey: 'smartAccessProjects.detail.brand.textColor', value: b.textColor },
            { labelKey: 'smartAccessProjects.detail.brand.buttonColor', value: b.buttonColor },
            { labelKey: 'smartAccessProjects.detail.brand.buttonTextColor', value: b.buttonTextColor },
            { labelKey: 'smartAccessProjects.detail.brand.backgroundColor', value: b.backgroundColor },
            { labelKey: 'smartAccessProjects.detail.brand.imageBackgroundColor', value: b.imageBackgroundColor },
        ];
    });

    loginPreview = computed<LoginPreview>(() => {
        const ls = (this.flow()?.loginSettings ?? {}) as SmartAccessLoginSettings;
        const pct = (v?: number) => (typeof v === 'number' ? Math.round(v * 100) : 0);
        return {
            email: !!ls.email,
            emailGateway: ls.emailGateway || 'none',
            phone: !!ls.phone,
            phoneGateway: ls.phoneGateway || 'none',
            faceLiveness: !!ls.faceLiveness,
            livenessMinScorePct: pct(ls.livenessMinScore),
            searchMinScorePct: pct(ls.searchMinScore),
            searchMode: ls.searchMode || 'FAST',
            allowPasskeys: !!ls.allowPasskeys,
            showFaceLivenessRecommendation: !!ls.showFaceLivenessRecommendation,
        };
    });

    securityPreview = computed<SmartAccessSecurity>(() => {
        const s = this.flow()?.security ?? {};
        return { source: s.source ?? null, apiUrl: s.apiUrl ?? '', strategy: s.strategy ?? 'whitelist' };
    });

    integrationsPreview = computed<SmartAccessFlowIntegrations>(() => {
        const i = this.flow()?.integrations ?? {};
        return { redirectUrl: i.redirectUrl ?? '', webhook: i.webhook ?? null };
    });

    otpEmailBranding = computed(() => {
        const b = this.brandingPreview();
        return {
            logo: b.logo,
            name: this.project()?.name,
            buttonColor: b.buttonColor,
            buttonTextColor: b.buttonTextColor,
        };
    });

    ngOnInit(): void {
        this._paramSub = this._route.paramMap.subscribe((pm) => {
            const id = pm.get('projectId');
            if (!id) {
                void this._router.navigate(['/smart-access/projects']);
                return;
            }
            this._projectsService.getProject(id).subscribe({
                next: (proj) => {
                    if (!proj) {
                        this.errorKey.set('smartAccessProjects.projectNotFound');
                    } else {
                        this.project.set(proj);
                        this.previewForm.set(this._buildPreviewForm(proj));
                    }
                    this.loading.set(false);
                },
                error: () => {
                    this.errorKey.set('smartAccessProjects.loadError');
                    this.loading.set(false);
                },
            });
        });
    }

    ngOnDestroy(): void {
        this._paramSub?.unsubscribe();
    }

    openSetup(step = 0): void {
        const id = this.project()?._id;
        if (!id) return;
        void this._router.navigate(['/smart-access/projects', id, 'setup', step]);
    }

    openRecords(): void {
        const id = this.project()?._id;
        if (!id) return;
        void this._router.navigate(['/smart-access/projects', id, 'records']);
    }

    openLive(): void {
        const url = this.liveUrl();
        if (!url || typeof window === 'undefined') return;
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    copyValue(value: string, event?: Event): void {
        event?.stopPropagation();
        if (value) this._clipboard.copy(value);
    }

    scoreBarClass(percent: number): string {
        if (percent >= 85) return 'bg-emerald-500';
        if (percent >= 70) return 'bg-amber-500';
        return 'bg-rose-500';
    }

    emptyOr(v: string | null | undefined): string {
        const s = `${v ?? ''}`.trim();
        return s || this._transloco.translate('smartAccessProjects.detail.noValue');
    }

    toggleOtpEmailEditor(): void {
        this.showOtpEmailEditor.update((v) => !v);
    }

    closeOtpEmailEditor(): void {
        this.showOtpEmailEditor.set(false);
    }

    onOtpEmailSaved(): void {
        const id = this.project()?._id;
        if (!id) return;
        this._projectsService.getProject(id).subscribe({
            next: (proj) => this.project.set(proj),
        });
    }

    /**
     * Build a minimal reactive form from project data so the sign-in preview
     * component can read login settings without needing the full setup wizard form.
     */
    private _buildPreviewForm(proj: AccessProject): FormGroup {
        const flow = smartAccessLoginFlow(proj);
        const ls = flow?.loginSettings ?? {};
        return this._fb.group({
            projectFlow: this._fb.group({
                loginSettings: this._fb.group({
                    email: [!!ls.email],
                    emailGateway: [ls.emailGateway || 'none'],
                    phone: [!!ls.phone],
                    phoneGateway: [ls.phoneGateway || 'none'],
                    faceLiveness: [!!ls.faceLiveness],
                    allowPasskeys: [!!ls.allowPasskeys],
                    livenessMinScore: [ls.livenessMinScore ?? 0.65],
                    searchMinScore: [ls.searchMinScore ?? 0.85],
                    searchMode: [ls.searchMode || 'FAST'],
                    showFaceLivenessRecommendation: [!!ls.showFaceLivenessRecommendation],
                }),
            }),
        });
    }
}
