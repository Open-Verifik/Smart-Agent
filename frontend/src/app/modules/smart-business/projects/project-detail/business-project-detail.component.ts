import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DataRetentionService } from 'app/core/data-retention/data-retention.service';
import { RetentionPolicyFormComponent } from 'app/core/data-retention/retention-policy-form.component';
import type { RetentionPolicy } from 'app/core/data-retention/retention.model';
import {
    buildProjectRetentionOverride,
    defaultRetentionPolicy,
    faceImagesHeldUntilHold,
    getRetentionModeLabel,
    policyFromStored,
} from 'app/core/data-retention/retention.util';
import {
    isIncompleteSmartAccessWizard,
    resumeStepIndex,
} from 'app/modules/smart-access/projects/setup/smart-access-setup-draft.util';
import { environment } from 'environments/environment';
import { DateTime } from 'luxon';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SmartBusinessService } from '../../smart-business.service';
import type { BusinessProject, BusinessProjectFlow } from '../../smart-business.types';
import { BUSINESS_VERIFY_STYLES, StyleOption } from '../setup/business-setup.types';

interface SwatchEntry {
    key: string;
    labelKey: string;
    value: string;
}

@Component({
    selector: 'business-project-detail',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ClipboardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTooltipModule,
        TranslocoModule,
        RetentionPolicyFormComponent,
    ],
    templateUrl: './business-project-detail.component.html',
    styleUrls: ['./business-project-detail.component.scss'],
})
export class BusinessProjectDetailComponent implements OnInit, OnDestroy {
    private _route: ActivatedRoute;
    private _router: Router;
    private _businessService: SmartBusinessService;
    private _clipboard: Clipboard;
    private _snackBar: MatSnackBar;
    private _transloco: TranslocoService | null = null;
    private _retention: DataRetentionService | null = null;

    constructor(
        route?: ActivatedRoute,
        router?: Router,
        businessService?: SmartBusinessService,
        clipboard?: Clipboard,
        snackBar?: MatSnackBar,
        transloco?: TranslocoService,
        retention?: DataRetentionService
    ) {
        this._route = route || (inject(ActivatedRoute, { optional: true }) as any);
        this._router = router || (inject(Router, { optional: true }) as any);
        this._businessService =
            businessService || (inject(SmartBusinessService, { optional: true }) as any);
        this._clipboard = clipboard || (inject(Clipboard, { optional: true }) as any);
        this._snackBar = snackBar || (inject(MatSnackBar, { optional: true }) as any);
        try {
            this._transloco = transloco ?? inject(TranslocoService, { optional: true });
        } catch {
            this._transloco = null;
        }
        try {
            this._retention = retention ?? inject(DataRetentionService, { optional: true });
        } catch {
            this._retention = null;
        }
    }

    private _sectionSub?: Subscription;

    projectId = '';
    project = signal<BusinessProject | null>(null);
    loading = signal(true);
    errorKey = signal<string | null>(null);
    section = signal<string | null>(null);

    editingRetention = signal(false);
    savingRetention = signal(false);
    retentionOverrideEnabled = signal(false);
    retentionPolicy = signal<RetentionPolicy>(defaultRetentionPolicy());

    /** Saved project override, or the account default when this project does not override it. */
    effectivePolicy = computed(
        () => policyFromStored(this.project()?.dataRetention) ?? defaultRetentionPolicy()
    );

    /** True when the project stores its own retention object. */
    effectiveRetentionIsOverride = computed(
        () => policyFromStored(this.project()?.dataRetention) != null
    );

    effectiveDocMode = computed(() => this.effectivePolicy().types.documentImages.mode);
    effectiveFaceMode = computed(() => this.effectivePolicy().types.faceImages.mode);
    effectiveOcrMode = computed(() => this.effectivePolicy().types.ocrExtraction.mode);
    effectiveLivenessMode = computed(() => this.effectivePolicy().types.documentLiveness.mode);
    effectiveWebhookHoldHours = computed(() => this.effectivePolicy().webhookHoldHours);
    effectiveAllowManualDelete = computed(() => this.effectivePolicy().allowManualDelete);
    effectiveFaceHeldUntilHold = computed(() => faceImagesHeldUntilHold(this.effectivePolicy()));

    effectiveIsCustomized = computed(() => {
        const policy = this.effectivePolicy();
        return (
            this.effectiveDocMode() !== policy.mode ||
            this.effectiveFaceMode() !== policy.mode ||
            this.effectiveOcrMode() !== policy.mode ||
            this.effectiveLivenessMode() !== policy.mode
        );
    });

    flow = computed<BusinessProjectFlow | null>(() => {
        const flows = this.project()?.projectFlows;
        if (!flows?.length) return null;
        return flows.find((f) => f.status === 'active') ?? flows[0];
    });

    styleId = computed<string>(() => {
        const os = this.flow()?.onboardingSettings as any;
        const raw =
            os?.verifyStyle ||
            (typeof os?.style === 'string' ? os.style.replace(/^style_/i, '') : '') ||
            'a';
        return String(raw).toLowerCase();
    });

    styleOption = computed<StyleOption>(() => {
        const id = this.styleId();
        return BUSINESS_VERIFY_STYLES.find((s) => s.id === id) ?? BUSINESS_VERIFY_STYLES[0];
    });

    styleLabel = computed<string>(() => {
        const id = this.styleId();
        const translated = this._transloco?.translate(`smartBusiness.styles.${id}_name`);
        if (translated && translated !== `smartBusiness.styles.${id}_name`) {
            return `${id.toUpperCase()} — ${translated}`;
        }
        const opt = this.styleOption();
        const lang = (this._transloco?.getActiveLang() || 'en').toLowerCase();
        const name = lang.startsWith('es') ? opt.nameEs : opt.nameEn;
        return `${id.toUpperCase()} — ${name}`;
    });

    incompleteWizard = computed(() => isIncompleteSmartAccessWizard(this.project(), 6));

    sectionTitleKey = computed<string>(() => {
        const s = this.section();
        const mapKeys: Record<string, string> = {
            api: 'smartBusiness.detail.sectionApi',
            intake: 'smartBusiness.setup.steps.company_intake',
            docs: 'smartBusiness.setup.steps.corporate_docs',
            reps: 'smartBusiness.setup.steps.representatives_policy',
        };
        return s
            ? (mapKeys[s] ?? 'smartBusiness.detail.overview')
            : 'smartBusiness.detail.overview';
    });

    liveVerificationUrl = computed<string>(() => {
        const p = this.project();
        if (!p?._id) return '';
        const base = (environment.kycBaseUrl || 'https://access.verifik.co').replace(/\/+$/, '');
        return `${base}/verify-business/${p._id}`;
    });

    brandPreview = computed(() => {
        const p = this.project();
        const b = p?.branding;
        const opt = this.styleOption();
        return {
            logo: b?.logo || null,
            titleColor: b?.titleColor || opt.ink || '#0e0f0c',
            textColor: b?.textColor || '#475569',
            buttonColor: b?.buttonColor || opt.buttonBg || '#9fe870',
            buttonTextColor: b?.buttonTextColor || opt.buttonText || '#163300',
            backgroundColor: b?.backgroundColor || opt.cardBg || '#ffffff',
            imageBackgroundColor: b?.imageBackgroundColor || '#f1f5f9',
        };
    });

    swatchEntries = computed<SwatchEntry[]>(() => {
        const b = this.brandPreview();
        return [
            {
                key: 'titleColor',
                labelKey: 'smartBusiness.detail.swatches.titleColor',
                value: b.titleColor,
            },
            {
                key: 'textColor',
                labelKey: 'smartBusiness.detail.swatches.textColor',
                value: b.textColor,
            },
            {
                key: 'buttonColor',
                labelKey: 'smartBusiness.detail.swatches.buttonColor',
                value: b.buttonColor,
            },
            {
                key: 'buttonTextColor',
                labelKey: 'smartBusiness.detail.swatches.buttonTextColor',
                value: b.buttonTextColor,
            },
            {
                key: 'backgroundColor',
                labelKey: 'smartBusiness.detail.swatches.backgroundColor',
                value: b.backgroundColor,
            },
            {
                key: 'imageBackgroundColor',
                labelKey: 'smartBusiness.detail.swatches.imageBackgroundColor',
                value: b.imageBackgroundColor,
            },
        ];
    });

    basicPreview = computed(() => {
        const p = this.project();
        return {
            name: p?.name || '',
            contactEmail: p?.contactEmail || '',
            defaultLanguage: (p?.defaultLanguage || 'en').toUpperCase(),
            allowedCountries: p?.allowedCountries || [],
            privacyUrl: p?.privacyUrl || '',
            termsAndConditionsUrl: p?.termsAndConditionsUrl || '',
            dpo: p?.dataProtection || null,
        };
    });

    intakePreview = computed(() => {
        const f = this.flow();
        const intake = f?.companyIntake;
        return {
            countryCode: intake?.countryCode || '',
            collectCommercialName: intake?.collectCommercialName !== false,
            collectAddress: intake?.collectAddress !== false,
            collectPhone: intake?.collectPhone !== false,
            phoneGateway: intake?.phoneGateway || 'whatsapp',
            collectEmail: intake?.collectEmail !== false,
            emailGateway: intake?.emailGateway || 'mailgun',
            allowedEntityTypes: intake?.allowedEntityTypes || ['SAS', 'SA', 'LTDA', 'LLC'],
        };
    });

    docsPreview = computed(() => {
        const f = this.flow();
        const docs = f?.corporateDocs;
        return {
            attemptLimit: docs?.attemptLimit ?? 3,
            screening: docs?.screening !== false,
            officialRegistryChecks: docs?.officialRegistryChecks || {
                dian: true,
                rues: true,
                sat: false,
                sanctionsList: true,
            },
            requiredDocuments: docs?.requiredDocuments || [],
        };
    });

    repsPreview = computed(() => {
        const f = this.flow();
        const reps = f?.representativesPolicy;
        return {
            minRepresentatives: reps?.minRepresentatives ?? 1,
            maxRepresentatives: reps?.maxRepresentatives ?? 5,
            uboOwnershipThreshold: reps?.uboOwnershipThreshold ?? 25,
            requireLiveness: reps?.requireLiveness !== false,
            requireDocumentScan: reps?.requireDocumentScan !== false,
            notificationChannel: reps?.notificationChannel || 'both',
            livenessMinScore: reps?.livenessMinScore ? Math.round(reps.livenessMinScore * 100) : 70,
            compareMinScore: reps?.compareMinScore ? Math.round(reps.compareMinScore * 100) : 75,
        };
    });

    integrationsPreview = computed(() => {
        const f = this.flow();
        const integ = f?.integrations;
        return {
            redirectUrl: integ?.redirectUrl || '',
            webhook: integ?.webhook || '',
            source: integ?.source || 'NONE',
            strategy: integ?.strategy || 'none',
        };
    });

    ngOnInit(): void {
        this.projectId = this._route.snapshot.paramMap.get('projectId') || '';
        if (!this.projectId) {
            this.returnToList();
            return;
        }

        this._sectionSub = this._route.queryParamMap
            .pipe(map((q) => q.get('section')))
            .subscribe((s) => this.section.set(s));

        this._loadProject();
    }

    ngOnDestroy(): void {
        this._sectionSub?.unsubscribe();
    }

    private _loadProject(): void {
        this.loading.set(true);
        this.errorKey.set(null);
        this._businessService.getProject(this.projectId).subscribe({
            next: (p) => {
                this.project.set(p);
                this.loading.set(false);
                if (!p) this.errorKey.set('smartBusiness.detail.projectNotFound');
            },
            error: () => {
                this.loading.set(false);
                this.errorKey.set('smartBusiness.detail.loadError');
            },
        });
    }

    openSetup(step = 0): void {
        void this._router.navigate(['/smart-business/projects', this.projectId, 'setup', step]);
    }

    continueSetup(): void {
        const step = resumeStepIndex(this.project(), 6);
        void this._router.navigate(['/smart-business/projects', this.projectId, 'setup', step]);
    }

    openRecords(): void {
        void this._router.navigate(['/smart-business/projects', this.projectId, 'records']);
    }

    returnToList(): void {
        void this._router.navigate(['/smart-business/projects']);
    }

    openSection(section: string): void {
        void this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { section },
            queryParamsHandling: 'merge',
        });
    }

    clearSection(): void {
        void this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { section: null },
            queryParamsHandling: 'merge',
        });
    }

    copyValue(value: string, event?: Event): void {
        event?.stopPropagation();
        if (value) {
            this._clipboard.copy(value);
            const msg = this._transloco?.translate('smartBusiness.detail.linkCopied') || 'Copied';
            this._snackBar.open(msg, undefined, { duration: 2500 });
        }
    }

    copyLiveUrl(event?: Event): void {
        event?.stopPropagation();
        const url = this.liveVerificationUrl();
        if (url) {
            this._clipboard.copy(url);
            const msg = this._transloco?.translate('smartBusiness.detail.linkCopied') || 'Copied';
            this._snackBar.open(msg, undefined, { duration: 2500 });
        }
    }

    openLiveVerification(event?: Event): void {
        event?.stopPropagation();
        const url = this.liveVerificationUrl();
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }

    formatDate(date?: string): string {
        if (!date) return '';
        try {
            const dt = DateTime.fromISO(date);
            if (!dt.isValid) return '';
            const lang = (this._transloco?.getActiveLang() || 'en').toLowerCase();
            return dt.setLocale(lang).toFormat('DDD');
        } catch {
            return date;
        }
    }

    /** Opens the override editor from the saved project policy. */
    startEditingRetention(): void {
        const saved = policyFromStored(this.project()?.dataRetention);
        this.retentionOverrideEnabled.set(saved != null);
        this.retentionPolicy.set(saved ?? defaultRetentionPolicy());
        this.editingRetention.set(true);
    }

    /** Closes the editor without writing. */
    cancelEditingRetention(): void {
        this.editingRetention.set(false);
    }

    /** Stores the shared form's latest policy. */
    onRetentionPolicyChange(policy: RetentionPolicy): void {
        this.retentionPolicy.set(policy);
    }

    /** Label for a retention mode. Empty means the account default. */
    getRetentionModeLabel(mode?: string | null): string {
        const translateFn = this._transloco
            ? this._transloco.translate.bind(this._transloco)
            : (key: string) => key;
        return getRetentionModeLabel(translateFn, mode);
    }

    /**
     * Saves the project override, or clears it.
     * The body includes only enforced types and a 24–72 hour webhook hold.
     */
    saveRetention(): void {
        const id = this.project()?._id;
        if (!id || this.savingRetention()) return;

        this.savingRetention.set(true);
        const payload = this.retentionOverrideEnabled()
            ? buildProjectRetentionOverride(this.retentionPolicy())
            : null;

        this._businessService.updateProject(id, { dataRetention: payload }).subscribe({
            next: (res) => {
                this.savingRetention.set(false);
                this.editingRetention.set(false);
                this._retention?.forgetProjectRetention(id);
                this._applySavedProject(id, res?.data);
                const msg =
                    this._transloco?.translate(
                        'smartEnrollProjects.detail.retention.savedSuccess'
                    ) || 'Data retention policy saved';
                this._snackBar?.open(msg, undefined, { duration: 3000 });
            },
            error: () => {
                this.savingRetention.set(false);
                const msg =
                    this._transloco?.translate('smartEnrollProjects.detail.retention.saveError') ||
                    'Failed to save data retention policy';
                this._snackBar?.open(msg, undefined, { duration: 4000 });
            },
        });
    }

    /** Keeps project flows if the update response omits them, then reloads. */
    private _applySavedProject(id: string, data: BusinessProject | undefined): void {
        if (data) {
            const currentFlows = this.project()?.projectFlows;
            this.project.set({
                ...data,
                projectFlows: data.projectFlows?.length ? data.projectFlows : currentFlows,
            });
        }
        this._businessService.getProject(id).subscribe({
            next: (project) => {
                if (project) this.project.set(project);
            },
            error: () => {},
        });
    }
}
