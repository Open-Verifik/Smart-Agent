import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { SmartEnrollProjectsService } from '../smart-enroll-projects.service';
import type {
    EnrollClientRef,
    EnrollProject,
    EnrollProjectBranding,
    EnrollProjectFlow,
} from '../smart-enroll-projects.types';

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

interface DocumentCountryPreview {
    country: string;
    activeCategories: { documentCategory: string; templates: number }[];
}

interface DocumentsPreview {
    target: 'personal' | 'business';
    attemptLimit: number;
    verificationMethods: string[];
    screening: boolean;
    informationVerification: boolean;
    criminalHistoryVerification: boolean;
    criminalEndpoints: string[];
    countries: DocumentCountryPreview[];
}

interface SwatchEntry {
    key: keyof BrandingPreview;
    labelKey: string;
    value: string;
}

/**
 * Read-only Overview for a Smart Enroll project.
 *
 * Renders a brand-themed hero plus per-section preview cards (basic info,
 * sign-up form, documents, liveness, representatives for KYB, integrations
 * and brand palette). Each card has an "Edit" button that deep-links into the
 * matching wizard step at `/smart-enroll/projects/:id/setup/:step`.
 *
 * The legacy `?section=...` query-param panels are kept as a thin compatibility
 * layer for incoming links.
 */
@Component({
    selector: 'project-detail',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ClipboardModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _clipboard = inject(Clipboard);
    private _transloco = inject(TranslocoService);

    private _sectionSub?: Subscription;

    project = signal<EnrollProject | null>(null);
    loading = signal(true);
    errorKey = signal<string | null>(null);
    section = signal<string | null>(null);

    flow = computed<EnrollProjectFlow | null>(() => {
        const flows = this.project()?.projectFlows;
        if (!flows?.length) return null;
        const active = flows.find((f) => f.status && f.status !== 'draft');
        return active ?? flows[0];
    });

    target = computed<'personal' | 'business'>(() => {
        const t = this.flow()?.target ?? this.project()?.target;
        return t === 'business' ? 'business' : 'personal';
    });

    /** Section 0 — Basic info. */
    basicPreview = computed(() => {
        const p = this.project();
        return {
            name: p?.name ?? '',
            contactEmail: p?.contactEmail ?? '',
            allowedCountries: p?.allowedCountries ?? [],
            privacyUrl: p?.privacyUrl ?? '',
            termsAndConditionsUrl: p?.termsAndConditionsUrl ?? '',
            dpo: p?.dataProtection ?? null,
        };
    });

    /** Section 1 — Sign-up form. */
    signUpPreview = computed(() => {
        const sf = (this.flow()?.signUpForm ?? {}) as Record<string, unknown>;
        const fullNameStyle = sf['fullNameStyle'] as 'separate' | 'together' | undefined;
        const businessBasicInfoStyle = sf['businessBasicInfoStyle'] as 'name' | 'name_number' | undefined;
        return {
            target: this.target(),
            fullName: !!sf['fullName'],
            fullNameStyle,
            businessBasicInfo: !!sf['businessBasicInfo'],
            businessBasicInfoStyle,
            email: !!sf['email'],
            emailGateway: (sf['emailGateway'] as string) ?? 'none',
            phone: !!sf['phone'],
            phoneGateway: (sf['phoneGateway'] as string) ?? 'none',
            countryCode: (sf['countryCode'] as string) ?? '',
            additionalFields: (sf['additionalFields'] as string[]) ?? [],
            address: !!sf['address'],
            showTermsAndConditions: !!sf['showTermsAndConditions'],
            showPrivacyNotice: !!sf['showPrivacyNotice'],
        };
    });

    /** Section 2 — Documents (or business verification for KYB). */
    documentsPreview = computed<DocumentsPreview>(() => {
        const f = this.flow();
        const target = this.target();
        const docs = ((target === 'business' ? f?.business : f?.documents) ?? {}) as Record<string, unknown>;
        const documentTypes = (docs['documentTypes'] as Record<string, unknown>[]) ?? [];
        return {
            target,
            attemptLimit: (docs['attemptLimit'] as number) ?? 3,
            verificationMethods: (docs['verificationMethods'] as string[]) ?? [],
            screening: !!docs['screening'],
            informationVerification: !!docs['informationVerification'],
            criminalHistoryVerification: !!docs['criminalHistoryVerification'],
            criminalEndpoints: (docs['criminalHistoryVerificationEndpoints'] as string[]) ?? [],
            countries: documentTypes.map((dt) => {
                const configurations = (dt['configurations'] as Record<string, unknown>[]) ?? [];
                return {
                    country: (dt['country'] as string) ?? '',
                    activeCategories: configurations
                        .filter((c) => !!c['active'])
                        .map((c) => {
                            const templates = (c['documentTemplates'] as Record<string, unknown>[]) ?? [];
                            return {
                                documentCategory: (c['documentCategory'] as string) ?? '',
                                templates: templates.filter((tpl) => !!tpl['promptTemplate']).length,
                            };
                        }),
                };
            }),
        };
    });

    /** Section 3 — Liveness. */
    livenessPreview = computed(() => {
        const liveness = (this.flow()?.liveness ?? {}) as Record<string, unknown>;
        const pct = (v?: number) => (typeof v === 'number' ? Math.round(v * 100) : 0);
        return {
            kycType: (liveness['kycType'] as 'traditional' | 'zero_knowledge') ?? 'traditional',
            attemptLimit: (liveness['attemptLimit'] as number) ?? 3,
            minScore: pct(liveness['minScore'] as number | undefined),
            compareMinScore: pct(liveness['compareMinScore'] as number | undefined),
            searchMinScore: pct(liveness['searchMinScore'] as number | undefined),
            searchMode: (liveness['searchMode'] as string) ?? 'FAST',
        };
    });

    /** Section 3 (business) — Representatives. */
    representativesPreview = computed(() => {
        if (this.target() !== 'business') return null;
        const r = (this.flow()?.representatives ?? {}) as Record<string, unknown>;
        return {
            minRepresentatives: (r['minRepresentatives'] as number) ?? 1,
            maxRepresentatives: (r['maxRepresentatives'] as number) ?? 1,
            notificationType: (r['notificationType'] as string) ?? 'email',
        };
    });

    /** Section 4 — Integrations. */
    integrationsPreview = computed(() => {
        const i = (this.flow()?.integrations ?? {}) as Record<string, unknown>;
        return {
            redirectUrl: (i['redirectUrl'] as string) ?? '',
            webhook: (i['webhook'] as string) ?? '',
            source: (i['source'] as string) ?? 'NONE',
            apiUrl: (i['apiUrl'] as string) ?? '',
        };
    });

    /** Section 5 — Branding. */
    brandingPreview = computed<BrandingPreview>(() => {
        const b = (this.project()?.branding ?? {}) as EnrollProjectBranding;
        return {
            logo: b.logo,
            image: b.image,
            titleColor: b.titleColor || '#0f172a',
            textColor: b.textColor || b.txtColor || '#475569',
            buttonColor: b.buttonColor || '#2563eb',
            buttonTextColor: b.buttonTextColor || b.buttonTxtColor || '#ffffff',
            backgroundColor: b.backgroundColor || b.bgColor || '#ffffff',
            imageBackgroundColor: b.imageBackgroundColor || '#ffffff',
        };
    });

    swatchEntries = computed<SwatchEntry[]>(() => {
        const b = this.brandingPreview();
        return [
            { key: 'titleColor', labelKey: 'smartEnrollProjects.setup.ui.colors.title', value: b.titleColor },
            { key: 'textColor', labelKey: 'smartEnrollProjects.setup.ui.colors.text', value: b.textColor },
            { key: 'buttonColor', labelKey: 'smartEnrollProjects.setup.ui.colors.button', value: b.buttonColor },
            { key: 'buttonTextColor', labelKey: 'smartEnrollProjects.setup.ui.colors.buttonText', value: b.buttonTextColor },
            { key: 'backgroundColor', labelKey: 'smartEnrollProjects.setup.ui.colors.background', value: b.backgroundColor },
            { key: 'imageBackgroundColor', labelKey: 'smartEnrollProjects.setup.ui.colors.imageBackground', value: b.imageBackgroundColor },
        ];
    });

    ngOnInit(): void {
        const id = this._route.snapshot.paramMap.get('projectId');
        if (!id) {
            this.goToList();
            return;
        }
        this._sectionSub = this._route.queryParamMap
            .pipe(map((q) => q.get('section')))
            .subscribe((s) => this.section.set(s));

        this._projectsService.getProject(id).subscribe({
            next: (p) => {
                this.project.set(p);
                this.loading.set(false);
                if (!p) this.errorKey.set('smartEnrollProjects.projectNotFound');
            },
            error: () => {
                this.errorKey.set('smartEnrollProjects.loadError');
                this.loading.set(false);
            },
        });
    }

    ngOnDestroy(): void {
        this._sectionSub?.unsubscribe();
    }

    goToList(): void {
        this._router.navigate(['/smart-enroll/projects']);
    }

    goToRecords(): void {
        const id = this.project()?._id;
        if (!id) return;
        this._router.navigate(['/smart-enroll/projects', id, 'records']);
    }

    goToStaff(): void {
        const id = this.project()?._id;
        if (!id) return;
        this._router.navigate(['/smart-enroll/projects', id, 'staff']);
    }

    openSetup(step: number = 0): void {
        const id = this.project()?._id;
        if (!id) return;
        this._router.navigate(['/smart-enroll/projects', id, 'setup', step]);
    }

    clearSection(): void {
        const id = this.project()?._id;
        if (!id) return;
        this._router.navigate(['/smart-enroll/projects', id], { queryParams: {} });
    }

    sectionTitleKey(): string {
        const s = this.section();
        const mapKeys: Record<string, string> = {
            signup: 'smartEnrollProjects.detail.sectionSignup',
            documents: 'smartEnrollProjects.detail.sectionDocuments',
            liveness: 'smartEnrollProjects.detail.sectionLiveness',
            api: 'smartEnrollProjects.detail.sectionApi',
        };
        return s ? mapKeys[s] ?? 'smartEnrollProjects.detailTitle' : 'smartEnrollProjects.detailTitle';
    }

    clientId(project: EnrollProject | null): string | null {
        if (!project?.client) return null;
        return typeof project.client === 'string' ? project.client : (project.client as EnrollClientRef)._id;
    }

    docsUrl(): string {
        const lang = this._transloco.getActiveLang();
        const useEn = lang === 'fr' || lang !== 'es';
        return useEn
            ? 'https://docs.verifik.co/services/smart-enroll'
            : 'https://docs.verifik.co/verifik-es/services/smart-enroll';
    }

    copyValue(value: string, event?: Event): void {
        event?.stopPropagation();
        if (value) this._clipboard.copy(value);
    }

    formatDate(date?: string): string {
        if (!date) return '—';
        return DateTime.fromISO(date).toFormat('MMM dd, yyyy HH:mm');
    }

    /** Tailwind class for the colored bar in the liveness card. */
    scoreBarClass(percent: number): string {
        if (percent >= 85) return 'bg-emerald-500';
        if (percent >= 70) return 'bg-amber-500';
        return 'bg-rose-500';
    }

    /**
     * Friendly label for a criminal-history endpoint identifier.
     * `local_api` is translated; `world_api_*` codes map to the agency's
     * proper-case name; anything else falls back to the raw code.
     */
    criminalEndpointLabel(value: string): string {
        if (value === 'local_api') {
            return this._transloco.translate('smartEnrollProjects.setup.documents.screening.localApi');
        }
        const map: Record<string, string> = {
            world_api_interpol: 'Interpol',
            world_api_fbi: 'FBI',
            world_api_dea: 'DEA',
            world_api_europol: 'Europol',
            world_api_ofac: 'OFAC',
            world_api_onu: 'ONU',
        };
        return map[value] ?? value;
    }
}
