import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subscription } from 'rxjs';
import { DateTime } from 'luxon';

import { RetentionPolicyFormComponent } from 'app/core/data-retention/retention-policy-form.component';
import type { RetentionPolicy } from 'app/core/data-retention/retention.model';
import {
    buildProjectRetentionOverride,
    defaultRetentionPolicy,
    faceImagesHeldUntilHold,
    getRetentionModeLabel,
    policyFromStored,
} from 'app/core/data-retention/retention.util';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import {
    isIncompleteSmartAccessWizard,
    resumeStepIndex,
} from 'app/modules/smart-access/projects/setup/smart-access-setup-draft.util';
import type {
    HumanAuthnProject,
    HumanAuthnProjectFlow,
} from '../human-authn-projects.service';
import { HumanAuthnProjectsService } from '../human-authn-projects.service';

export interface HumanAuthnSwatchEntry {
    key: string;
    labelKey: string;
    value: string;
}

@Component({
    selector: 'human-authn-project-detail',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTooltipModule,
        TranslocoModule,
        RetentionPolicyFormComponent,
    ],
    templateUrl: './human-authn-project-detail.component.html',
    styleUrls: ['./human-authn-project-detail.component.scss'],
})
export class HumanAuthnProjectDetailComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _projectsService = inject(HumanAuthnProjectsService);
    private _clipboard = inject(Clipboard);
    private _transloco = inject(TranslocoService);
    private _snackBar = inject(MatSnackBar);
    private _authGate = inject(AuthRequiredGateService);

    private _paramSub?: Subscription;

    project = signal<HumanAuthnProject | null>(null);
    loading = signal(true);
    errorKey = signal<string | null>(null);

    incompleteWizard = computed(() => isIncompleteSmartAccessWizard(this.project(), 7));

    flow = computed<HumanAuthnProjectFlow | null>(() => {
        const flows = this.project()?.projectFlows;
        if (!flows?.length) return null;
        const haFlows = flows.filter((f) => f.type === 'humanAuthn');
        if (!haFlows.length) return null;
        const active = haFlows.find((f) => f.status && f.status !== 'draft');
        return active ?? haFlows[0];
    });

    isActive = computed(() => {
        const f = this.flow();
        return !!f?.status && f.status !== 'draft';
    });

    // --- Branding Preview ---
    brandingPreview = computed(() => {
        const b = (this.project()?.branding ?? {}) as Record<string, unknown>;
        return {
            logo: b['logo'] as string | undefined,
            image: b['image'] as string | undefined,
            titleColor: (b['titleColor'] as string) || '#18181b',
            textColor: (b['textColor'] as string) || '#52525b',
            buttonColor: (b['buttonColor'] as string) || '#3f3f46',
            buttonTextColor: (b['buttonTextColor'] as string) || '#ffffff',
            backgroundColor: (b['backgroundColor'] as string) || '#ffffff',
            imageBackgroundColor: (b['imageBackgroundColor'] as string) || '#f4f4f5',
        };
    });

    swatchEntries = computed<HumanAuthnSwatchEntry[]>(() => {
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

    // --- Section 0: Basic Setup Preview ---
    basicPreview = computed(() => {
        const p = this.project();
        return {
            name: p?.name ?? '',
            contactEmail: p?.contactEmail ?? '',
            defaultLanguage: p?.defaultLanguage ?? 'en',
            allowedCountries: p?.allowedCountries ?? [],
            privacyUrl: p?.privacyUrl ?? '',
            termsAndConditionsUrl: p?.termsAndConditionsUrl ?? '',
            dpo: p?.dataProtection ?? null,
        };
    });

    // --- Section 1: Sign-up Form Preview ---
    signUpPreview = computed(() => {
        const sf = this.flow()?.signUpForm ?? {};
        return {
            fullName: sf.fullName !== false,
            fullNameStyle: sf.fullNameStyle || 'together',
            email: !!sf.email,
            emailGateway: sf.emailGateway || 'none',
            phone: !!sf.phone,
            phoneGateway: sf.phoneGateway || 'none',
            countryCode: sf.countryCode || '',
            additionalFields: sf.additionalFields || [],
            showPrivacyNotice: !!sf.showPrivacyNotice,
            showTermsAndConditions: !!sf.showTermsAndConditions,
        };
    });

    // --- Section 2: Documents Preview ---
    documentsPreview = computed(() => {
        const f = this.flow();
        const docs = f?.documents ?? {};
        const step = f?.steps?.document ?? 'skip';
        return {
            step,
            isEnabled: step !== 'skip',
            isMandatory: step === 'mandatory',
            attemptLimit: docs.attemptLimit ?? 3,
            verificationMethods: docs.verificationMethods || [],
            documentTypes: docs.documentTypes || [],
            criminalHistoryVerification: !!docs.criminalHistoryVerification,
            criminalHistoryVerificationEndpoints: docs.criminalHistoryVerificationEndpoints || [],
            informationVerification: !!docs.informationVerification,
            screening: !!docs.screening,
            colombianBarcodeValidation: !!docs.colombianBarcodeValidation,
        };
    });

    // --- Section 3: HumanAuthn Biometrics Protocol Preview ---
    humanAuthnPreview = computed(() => {
        const ha = this.flow()?.humanAuthn ?? {};
        const score = typeof ha.compareMinScore === 'number' ? Math.round(ha.compareMinScore * 100) : 85;
        return {
            mode: ha.mode || 'standard',
            tolerance: ha.tolerance || 'REGULAR',
            compareMinScore: score,
            livenessAtCreation: !!ha.livenessAtCreation,
            outputFormat: ha.outputFormat || 'string',
            verifierKey: ha.verifierKey || '',
            publicDataKeys: ha.publicDataKeys || ['fullName'],
        };
    });

    // --- Section 4: Storage Preview ---
    storagePreview = computed(() => {
        const s = this.flow()?.storage ?? {};
        return {
            provider: s.provider || 'ipfs',
        };
    });

    // --- Section 5: Integrations Preview ---
    integrationsPreview = computed(() => {
        const integ = this.flow()?.integrations ?? {};
        let webhookName = '';
        if (typeof integ.webhook === 'object' && integ.webhook !== null) {
            webhookName = integ.webhook.name || integ.webhook._id || '';
        } else if (typeof integ.webhook === 'string') {
            webhookName = integ.webhook;
        }
        return {
            redirectUrl: integ.redirectUrl || '',
            webhook: webhookName,
        };
    });

    editingRetention = signal(false);
    savingRetention = signal(false);
    retentionOverrideEnabled = signal(false);
    retentionPolicy = signal<RetentionPolicy>(defaultRetentionPolicy());

    /** Saved override, or the account default when this project does not set one. */
    effectivePolicy = computed(() => policyFromStored(this.project()?.dataRetention) ?? defaultRetentionPolicy());
    effectiveRetentionIsOverride = computed(() => policyFromStored(this.project()?.dataRetention) != null);
    effectiveDocMode = computed(() => this.effectivePolicy().types.documentImages.mode);
    /** Face images follow the saved mode. `none` keeps the selfie until the hold, so comparison still runs. */
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

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this._loadProjectFromRoute(),
            panelClass: 'auth-required-dialog',
        });
    }

    ngOnDestroy(): void {
        this._paramSub?.unsubscribe();
    }

    private _loadProjectFromRoute(): void {
        this._paramSub = this._route.paramMap.subscribe((params) => {
            const id = params.get('projectId');
            if (!id) {
                this._router.navigate(['/human-authn/projects']);
                return;
            }
            this.loading.set(true);
            this.errorKey.set(null);
            this._projectsService.getProject(id).subscribe({
                next: (project) => {
                    if (!project) {
                        this.errorKey.set('humanAuthnProjects.loadError');
                    } else {
                        this.project.set(project);
                    }
                    this.loading.set(false);
                },
                error: () => {
                    this.errorKey.set('humanAuthnProjects.loadError');
                    this.loading.set(false);
                    this._snackBar.open(this._transloco.translate('humanAuthnProjects.loadError'), undefined, {
                        duration: 4000,
                    });
                },
            });
        });
    }

    openSetup(step = 0): void {
        const id = this.project()?._id;
        if (!id) return;
        this._router.navigate(['/human-authn/projects', id, 'setup', String(step)]);
    }

    continueSetup(): void {
        const p = this.project();
        if (!p?._id) return;
        const step = resumeStepIndex(p, 7);
        this.openSetup(step);
    }

    openRecords(): void {
        this._router.navigate(['/human-authn/history']);
    }

    copyValue(value: string, event?: Event): void {
        event?.stopPropagation();
        if (!value) return;
        this._clipboard.copy(value);
        this._snackBar.open(this._transloco.translate('smartEnrollProjects.detail.copied'), 'OK', {
            duration: 2000,
        });
    }

    formatDate(dateStr?: string): string {
        if (!dateStr) return '—';
        return DateTime.fromISO(dateStr).toFormat('MMM dd, yyyy HH:mm');
    }

    scoreBarClass(score: number): string {
        if (score >= 85) return 'bg-emerald-500';
        if (score >= 70) return 'bg-amber-500';
        return 'bg-rose-500';
    }

    /** Opens the override editor. Face images keep their saved mode. */
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

    /** Label for a retention mode. */
    getRetentionModeLabel(mode?: string | null): string {
        return getRetentionModeLabel(this._transloco.translate.bind(this._transloco), mode);
    }

    /**
     * Saves the project override, or clears it.
     * Face images are whatever the form says. They are not forced to `none`.
     */
    saveRetention(): void {
        const project = this.project();
        if (!project?._id || this.savingRetention()) return;
        this.savingRetention.set(true);
        const payload = this.retentionOverrideEnabled() ? buildProjectRetentionOverride(this.retentionPolicy()) : null;

        this._projectsService.updateProject(project._id, { dataRetention: payload }).subscribe({
            next: (res) => {
                const updated = res?.data;
                if (updated) {
                    this.project.set({
                        ...this.project()!,
                        ...updated,
                        dataRetention: payload as HumanAuthnProject['dataRetention'],
                    });
                }
                this.savingRetention.set(false);
                this.editingRetention.set(false);
                this._snackBar.open(this._transloco.translate('smartEnrollProjects.detail.retention.savedSuccess'), undefined, {
                    duration: 3000,
                });
            },
            error: () => {
                this.savingRetention.set(false);
                this._snackBar.open(this._transloco.translate('smartEnrollProjects.detail.retention.saveError'), undefined, {
                    duration: 4000,
                });
            },
        });
    }
}
