import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    inject,
    signal,
} from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { CountryService } from 'app/core/services/country.service';
import {
    ADDRESS_PATTERN,
    CITY_NAME_PATTERN,
    PERSON_NAME_PATTERN,
    STRICT_URL_PATTERN,
} from 'app/shared/validators/validation-patterns';
import { environment } from 'environments/environment';
import { Subject, takeUntil } from 'rxjs';

import {
    PROJECT_NAME_PREFIXES,
    luminanceOkForWhiteText,
    randomAddressLine,
    randomChoice,
    randomChoiceCity,
    randomDigits,
    randomPersonName,
    randomPostalCode,
    randomTokenHex,
    slugFromToken,
} from '../../smart-enroll/projects/setup/setup-dev-sample-core.util';
import { SetupBasicSetupComponent } from '../../smart-enroll/projects/setup/steps/basic-setup/basic-setup.component';
import { SetupUserInterfaceComponent } from '../../smart-enroll/projects/setup/steps/user-interface/user-interface.component';
import { SmartLinkLivePreviewComponent } from '../preview/smart-link-live-preview.component';
import { SMART_LINK_STYLE_DEFAULTS, SmartLinksService } from '../smart-links.service';
import type {
    EngineProjectOption,
    SmartLinkBranding,
    SmartLinkCompletionMode,
    SmartLinkDefaultMode,
    SmartLinkMode,
    SmartLinkProject,
    SmartLinkVerifyStyle,
} from '../smart-links.types';

const BASIC_KEYS = [
    'name',
    'allowedCountries',
    'contactEmail',
    'defaultLanguage',
    'privacyUrl',
    'termsAndConditionsUrl',
    'dataProtection.name',
    'dataProtection.email',
    'dataProtection.address',
    'dataProtection.city',
    'dataProtection.country',
    'dataProtection.postalCode',
];

const MODE_OPTIONS: SmartLinkMode[] = ['personal', 'business', 'humanId', 'access'];
const COMPLETION_OPTIONS: SmartLinkCompletionMode[] = ['receipt', 'redirect', 'postMessage'];

const optionalStrictUrlValidator: ValidatorFn = (control) => {
    const raw = `${control?.value ?? ''}`.trim();
    if (!raw) return null;
    return STRICT_URL_PATTERN.test(raw) ? null : { strictUrl: true };
};

@Component({
    selector: 'smart-link-setup',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ClipboardModule,
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        TranslocoModule,
        SetupBasicSetupComponent,
        SetupUserInterfaceComponent,
        SmartLinkLivePreviewComponent,
    ],
    templateUrl: './smart-link-setup.component.html',
    styleUrls: ['./smart-link-setup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartLinkSetupComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _fb = inject(FormBuilder);
    private _service = inject(SmartLinksService);
    private _clipboard = inject(Clipboard);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);
    private _countryService = inject(CountryService);
    private _authGate = inject(AuthRequiredGateService);

    private _unsub$ = new Subject<void>();
    private _loadedId: string | null = null;
    private _slugManuallyEdited = false;

    readonly devQuickFillEnabled = !environment.production;
    readonly modeOptions = MODE_OPTIONS;
    readonly completionOptions = COMPLETION_OPTIONS;
    readonly stepTitles = signal<string[]>([
        'smartLinks.setup.steps.s0',
        'smartLinks.setup.steps.s1',
        'smartLinks.setup.steps.s2',
        'smartLinks.setup.steps.s3',
        'smartLinks.setup.steps.s4',
    ]);

    form!: FormGroup;
    project: SmartLinkProject = this._service.createDefaultDraft();
    projectId = 'new';
    stepIndex = 0;

    loading = signal(true);
    saving = signal(false);
    saveError = signal<string | null>(null);
    kitTab = signal<'prompt' | 'mcp' | 'embed' | 'curl'>('prompt');
    copiedKit = signal(false);

    webhooksRefreshing = signal(false);
    webhookList: { _id: string; name?: string; url?: string }[] = [];

    engines = signal<Record<EngineProjectOption['category'], EngineProjectOption[]>>({
        smartEnroll: [],
        smartBusiness: [],
        humanAuthn: [],
        smartAccess: [],
    });

    get stepsLength(): number {
        return this.stepTitles().length;
    }

    get canNavigate(): boolean {
        return !this.loading() && !this.saving();
    }

    get hasFlowId(): boolean {
        const fid = `${this.form?.get('projectFlow._id')?.value ?? ''}`.trim();
        return Boolean(fid) || this.projectId !== 'new';
    }

    get publicHandleUrl(): string {
        const slug = `${this.form?.get('projectFlow.slug')?.value ?? ''}`.trim();
        const fallbackId = this.projectId !== 'new' ? this.projectId : '';
        return `${this._service.accessBaseUrl}/l/${slug || fallbackId || 'your-slug'}`;
    }

    get supportedModesList(): SmartLinkMode[] {
        const modes = this.form?.get('projectFlow.routing.supportedModes')?.value;
        return Array.isArray(modes) && modes.length > 0 ? modes : ['personal', 'business'];
    }

    get completionModeValue(): SmartLinkCompletionMode {
        return (this.form?.get('projectFlow.completion.mode')?.value as SmartLinkCompletionMode) || 'receipt';
    }

    get activeKitSnippet(): string {
        const snapshot = this.form ? this._buildPayload('active') : this.project;
        switch (this.kitTab()) {
            case 'prompt':
                return this._service.buildAiPromptKit(snapshot);
            case 'mcp':
                return this._service.buildMcpSnippet(snapshot);
            case 'embed':
                return this._service.buildEmbedSnippet(snapshot);
            case 'curl':
                return this._service.buildCurlSnippet(snapshot);
        }
    }

    ngOnInit(): void {
        if (this._hasAuthToken()) {
            this._loadReferenceData();
        }

        this._route.params.pipe(takeUntil(this._unsub$)).subscribe((params) => {
            const rawId = params['projectId'] || 'new';
            const parsedStep = Math.max(0, Math.min(4, Number(params['step'] ?? '0') || 0));
            this.projectId = rawId;
            this.stepIndex = parsedStep;

            if (rawId !== this._loadedId) {
                this._loadedId = rawId;
                if (rawId !== 'new') {
                    this._loadExisting(rawId);
                } else {
                    const draft = this._service.createDefaultDraft();
                    draft.contactEmail = '';
                    draft.privacyUrl = '';
                    draft.termsAndConditionsUrl = '';
                    draft.dataProtection = {
                        name: '',
                        email: '',
                        address: '',
                        address2: '',
                        city: '',
                        country: '',
                        postalCode: '',
                    };
                    this.project = draft;
                    this._initForm();
                    this.loading.set(false);
                }
            }
            this._cdr.markForCheck();
        });
    }

    ngOnDestroy(): void {
        this._unsub$.next();
        this._unsub$.complete();
    }

    brandingValue(): SmartLinkBranding {
        return (this.form?.get('branding')?.value as SmartLinkBranding) || SMART_LINK_STYLE_DEFAULTS.a;
    }

    isFormValidForStep = (idx: number): boolean => {
        if (!this.form) return false;
        if (idx === 0) {
            return BASIC_KEYS.every((key) => !this.form.get(key)?.invalid);
        }
        if (idx === 1) {
            const slugCtrl = this.form.get('projectFlow.slug');
            const modes = this.form.get('projectFlow.routing.supportedModes')?.value;
            return !slugCtrl?.invalid && Array.isArray(modes) && modes.length > 0;
        }
        if (idx === 2) {
            return (
                !this.form.get('projectFlow.security.defaultTokenTtlMinutes')?.invalid &&
                !this.form.get('projectFlow.security.defaultMaxUses')?.invalid
            );
        }
        if (idx === 3) {
            if (this.completionModeValue === 'redirect') {
                const urlCtrl = this.form.get('projectFlow.completion.redirectUrl');
                return Boolean(`${urlCtrl?.value ?? ''}`.trim()) && !urlCtrl?.invalid;
            }
            return true;
        }
        if (idx === 4) {
            return !this.form.get('branding')?.invalid;
        }
        return false;
    };

    navigateToStep(idx: number): void {
        if (!this.canNavigate) return;
        const clamped = Math.max(0, Math.min(4, idx));
        const commands =
            this.projectId && this.projectId !== 'new'
                ? ['/smart-links/projects', this.projectId, 'setup', clamped]
                : ['/smart-links/projects', 'new', 'setup', clamped];
        void this._router.navigate(commands);
    }

    previousStep(): void {
        if (this.stepIndex === 0) {
            this.returnToProjects();
            return;
        }
        this.navigateToStep(this.stepIndex - 1);
    }

    nextStep(): void {
        if (!this.form || this.saving()) return;
        if (!this.isFormValidForStep(this.stepIndex)) {
            this._markCurrentStepTouched(this.stepIndex);
            this._snack.open(
                this._t('smartLinks.setup.completeRequired'),
                this._t('close'),
                { duration: 3000 }
            );
            this._cdr.markForCheck();
            return;
        }

        const isLast = this.stepIndex >= this.stepsLength - 1;
        if (isLast) {
            this.saveAndFinish();
            return;
        }

        if (this._hasAuthToken() && (this.projectId === 'new' || this.form.dirty)) {
            this._persistAndNavigate(this.stepIndex + 1, false);
        } else {
            this.navigateToStep(this.stepIndex + 1);
        }
    }

    saveAndFinish(): void {
        if (!this.form || this.saving()) return;
        if (!this._hasAuthToken()) {
            this._authGate.runWithAuthOrDialog({
                onAuthenticated: () => {
                    this._loadReferenceData();
                    this._persistAndNavigate(this.stepIndex, true);
                },
                panelClass: 'auth-required-dialog',
            });
            return;
        }
        this._persistAndNavigate(this.stepIndex, true);
    }

    returnToProjects(): void {
        void this._router.navigate(['/smart-links/projects']);
    }

    openLiveSmartLink(): void {
        if (this.projectId === 'new' || typeof window === 'undefined') return;
        window.open(this.publicHandleUrl, '_blank', 'noopener,noreferrer');
    }

    isModeEnabled(mode: SmartLinkMode): boolean {
        return this.supportedModesList.includes(mode);
    }

    toggleMode(mode: SmartLinkMode, enabled: boolean): void {
        const ctrl = this.form.get('projectFlow.routing.supportedModes');
        if (!ctrl) return;
        const current = [...(Array.isArray(ctrl.value) ? ctrl.value : [])] as SmartLinkMode[];
        const idx = current.indexOf(mode);
        if (enabled && idx === -1) {
            current.push(mode);
        } else if (!enabled && idx >= 0) {
            if (current.length <= 1) return;
            current.splice(idx, 1);
        }
        ctrl.setValue(current);
        ctrl.markAsDirty();

        const defaultModeCtrl = this.form.get('projectFlow.routing.defaultMode');
        if (
            defaultModeCtrl &&
            defaultModeCtrl.value !== 'prompt' &&
            !current.includes(defaultModeCtrl.value as SmartLinkMode)
        ) {
            defaultModeCtrl.setValue('prompt');
        }
        this._cdr.markForCheck();
    }

    modeIcon(mode: SmartLinkMode): string {
        switch (mode) {
            case 'personal':
                return 'badge';
            case 'business':
                return 'domain';
            case 'humanId':
                return 'fingerprint';
            case 'access':
                return 'vpn_key';
        }
    }

    suggestSlugFromName(): void {
        const name = `${this.form?.get('name')?.value ?? ''}`.trim();
        const slug = this._slugify(name) || `hub-${randomTokenHex(3)}`;
        this._slugManuallyEdited = false;
        this.form.get('projectFlow.slug')?.setValue(slug);
        this.form.get('projectFlow.slug')?.markAsDirty();
        this._cdr.markForCheck();
    }

    onSlugEdited(): void {
        this._slugManuallyEdited = true;
    }

    selectCompletionMode(mode: SmartLinkCompletionMode): void {
        const group = this.form.get('projectFlow.completion') as FormGroup | null;
        if (!group) return;
        group.get('mode')?.setValue(mode);
        group.get('mode')?.markAsDirty();
        const redirectCtrl = group.get('redirectUrl');
        if (redirectCtrl) {
            redirectCtrl.setValidators(
                mode === 'redirect'
                    ? [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]
                    : [optionalStrictUrlValidator]
            );
            redirectCtrl.updateValueAndValidity({ emitEvent: false });
        }
        this._cdr.markForCheck();
    }

    reloadWebhooks(): void {
        this.webhooksRefreshing.set(true);
        this._service.listWebhooks().subscribe({
            next: (rows) => {
                this.webhookList = rows;
                this.webhooksRefreshing.set(false);
                this._cdr.markForCheck();
            },
            error: () => {
                this.webhooksRefreshing.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    copyKitSnippet(): void {
        this._clipboard.copy(this.activeKitSnippet);
        this.copiedKit.set(true);
        setTimeout(() => {
            this.copiedKit.set(false);
            this._cdr.markForCheck();
        }, 2000);
    }

    fillDevSampleWizard(): void {
        if (!this.devQuickFillEnabled || this.projectId !== 'new' || !this.form) return;
        if (this.loading() || this.saving()) return;

        const pool = this._countryService.ipCountries
            .map((c) => c.country)
            .filter((c) => c !== 'All');
        const token = randomTokenHex(4);
        const slugSuffix = slugFromToken(token).slice(0, 8);
        const sampleName = `${randomChoice(PROJECT_NAME_PREFIXES)} SmartLink ${slugSuffix}`;
        const sampleSlug = this._slugify(sampleName);
        const btn = SMART_LINK_STYLE_DEFAULTS.a.buttonColor;
        const btnText = luminanceOkForWhiteText(btn) ? '#ffffff' : '#163300';

        this._slugManuallyEdited = true;
        this.form.patchValue({
            name: sampleName,
            allowedCountries: ['All'],
            contactEmail: `compliance.${slugSuffix}@example.com`,
            defaultLanguage: 'en',
            privacyUrl: `https://example.com/privacy-${slugSuffix}`,
            termsAndConditionsUrl: `https://example.com/terms-${slugSuffix}`,
            dataProtection: {
                name: randomPersonName(),
                email: `dpo.${slugSuffix}@example.com`,
                address: randomAddressLine(),
                address2: `Suite ${100 + Number(randomDigits(2))}`,
                city: randomChoiceCity(),
                country: pool.length ? randomChoice(pool) : 'United States',
                postalCode: randomPostalCode(),
            },
            branding: {
                ...SMART_LINK_STYLE_DEFAULTS.a,
                buttonColor: btn,
                buttonTextColor: btnText,
            },
            projectFlow: {
                slug: sampleSlug,
            },
        });

        this._markControlTreeState(this.form, 'dirty');
        this._markControlTreeState(this.form, 'touched');
        this.form.updateValueAndValidity({ emitEvent: false });

        this._snack.open(
            this._t('smartLinks.setup.devQuickFillApplied'),
            this._t('close'),
            { duration: 3000 }
        );
        this._cdr.markForCheck();
    }

    private _hasAuthToken(): boolean {
        return typeof localStorage !== 'undefined' && Boolean(localStorage.getItem('accessToken'));
    }

    private _loadReferenceData(): void {
        this._service.listCandidateEngineProjects().subscribe((grouped) => {
            this.engines.set(grouped);
            this._cdr.markForCheck();
        });
        this.reloadWebhooks();
    }

    private _loadExisting(id: string): void {
        this.loading.set(true);
        this._service.getSmartLinkProject(id).subscribe({
            next: (proj) => {
                this.project = proj ?? this._service.createDefaultDraft();
                this._initForm();
                this.loading.set(false);
                this._cdr.markForCheck();
            },
            error: () => {
                this._snack.open(this._t('smartLinks.setup.saveError'), this._t('close'), { duration: 3000 });
                this.project = this._service.createDefaultDraft();
                this._initForm();
                this.loading.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    private _initForm(): void {
        const base = this._service.createDefaultDraft();
        const p = this.project || base;
        const baseFlow = base.projectFlows![0];
        const existingFlow = this._service.extractSmartLinkFlow(p) || baseFlow;

        const routing = existingFlow.routing || baseFlow.routing;
        const linked = routing.linkedProjects || baseFlow.routing.linkedProjects;
        const stepUp = routing.stepUpPolicy || baseFlow.routing.stepUpPolicy;
        const completion = existingFlow.completion || baseFlow.completion;
        const security = existingFlow.security || baseFlow.security;
        const integrations = existingFlow.integrations || baseFlow.integrations || {};
        const onboardingSettings = existingFlow.onboardingSettings || baseFlow.onboardingSettings;
        const styleId = (onboardingSettings.verifyStyle || 'a') as SmartLinkVerifyStyle;
        const stylePreset = SMART_LINK_STYLE_DEFAULTS[styleId] || SMART_LINK_STYLE_DEFAULTS.a;
        const branding = { ...stylePreset, ...(p.branding || {}) };
        const dp = p.dataProtection || base.dataProtection;

        this._slugManuallyEdited = Boolean(existingFlow.slug);

        this.form = this._fb.group({
            name: [p.name || '', [Validators.required, Validators.maxLength(60)]],
            allowedCountries: [p.allowedCountries?.length ? p.allowedCountries : ['All'], Validators.required],
            contactEmail: [
                p.contactEmail || '',
                [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],
            ],
            defaultLanguage: [p.defaultLanguage || 'en', Validators.required],
            privacyUrl: [p.privacyUrl || '', [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
            termsAndConditionsUrl: [
                p.termsAndConditionsUrl || '',
                [Validators.required, Validators.pattern(STRICT_URL_PATTERN)],
            ],
            target: [p.target || 'personal'],
            version: [p.version ?? 3],
            branding: this._fb.group({
                logo: [branding.logo || ''],
                image: [branding.image || ''],
                titleColor: [branding.titleColor || stylePreset.titleColor, Validators.required],
                textColor: [branding.textColor || stylePreset.textColor, Validators.required],
                buttonColor: [branding.buttonColor || stylePreset.buttonColor, Validators.required],
                buttonTextColor: [branding.buttonTextColor || stylePreset.buttonTextColor, Validators.required],
                backgroundColor: [branding.backgroundColor || stylePreset.backgroundColor, Validators.required],
                imageBackgroundColor: [
                    branding.imageBackgroundColor || stylePreset.imageBackgroundColor || '#ffffff',
                    Validators.required,
                ],
            }),
            dataProtection: this._fb.group({
                name: [dp.name || '', [Validators.required, Validators.pattern(PERSON_NAME_PATTERN)]],
                email: [
                    dp.email || '',
                    [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],
                ],
                address: [dp.address || '', [Validators.required, Validators.pattern(ADDRESS_PATTERN)]],
                address2: [dp.address2 || ''],
                city: [dp.city || '', [Validators.required, Validators.pattern(CITY_NAME_PATTERN)]],
                country: [dp.country || '', Validators.required],
                postalCode: [
                    dp.postalCode || '',
                    [Validators.required, Validators.pattern(/^[A-Za-z0-9\s\-]{3,12}$/)],
                ],
            }),
            projectFlow: this._fb.group({
                _id: [existingFlow._id || ''],
                type: ['smartlink'],
                target: ['personal'],
                status: [existingFlow.status || 'active'],
                version: [existingFlow.version ?? 3],
                slug: [existingFlow.slug || '', [Validators.pattern(/^[a-z0-9-]{0,64}$/)]],
                routing: this._fb.group({
                    supportedModes: [
                        routing.supportedModes?.length ? routing.supportedModes : ['personal', 'business'],
                    ],
                    defaultMode: [(routing.defaultMode || 'prompt') as SmartLinkDefaultMode],
                    autoDetectExisting: [routing.autoDetectExisting ?? true],
                    allowPasskeys: [routing.allowPasskeys ?? true],
                    linkedProjects: this._fb.group({
                        smartEnrollProject: [linked.smartEnrollProject ?? null],
                        smartBusinessProject: [linked.smartBusinessProject ?? null],
                        humanAuthnProject: [linked.humanAuthnProject ?? null],
                        smartAccessProject: [linked.smartAccessProject ?? null],
                    }),
                    stepUpPolicy: this._fb.group({
                        enabled: [Boolean(stepUp.enabled)],
                        requireFreshDocOnExpiry: [stepUp.requireFreshDocOnExpiry ?? true],
                        reverifyFaceAfterDays: [stepUp.reverifyFaceAfterDays ?? 90],
                        kybRecertifyAfterDays: [stepUp.kybRecertifyAfterDays ?? 365],
                    }),
                }),
                completion: this._fb.group({
                    mode: [completion.mode || 'receipt'],
                    redirectUrl: [
                        completion.redirectUrl || '',
                        completion.mode === 'redirect'
                            ? [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]
                            : [optionalStrictUrlValidator],
                    ],
                    allowedPostMessageOriginsText: [(completion.allowedPostMessageOrigins || []).join(', ')],
                    receiptMessage: [completion.receiptMessage || baseFlow.completion.receiptMessage],
                    allowPdfDownload: [completion.allowPdfDownload ?? true],
                }),
                security: this._fb.group({
                    requireSignedSession: [Boolean(security.requireSignedSession)],
                    defaultTokenTtlMinutes: [
                        security.defaultTokenTtlMinutes ?? 60,
                        [Validators.min(5), Validators.max(10080)],
                    ],
                    defaultMaxUses: [security.defaultMaxUses ?? 1, [Validators.min(0), Validators.max(1000)]],
                }),
                integrations: this._fb.group({
                    redirectUrl: [integrations.redirectUrl || completion.redirectUrl || ''],
                    webhook: [integrations.webhook ?? null],
                }),
                onboardingSettings: this._fb.group({
                    enrollmentClient: [onboardingSettings.enrollmentClient || 'v2'],
                    verifyStyle: [onboardingSettings.verifyStyle || 'a'],
                    flowOrder: [onboardingSettings.flowOrder === 'consent_first' ? 'consent_first' : ''],
                }),
            }),
        });

        this.form
            .get('name')
            ?.valueChanges.pipe(takeUntil(this._unsub$))
            .subscribe((val) => {
                if (!this._slugManuallyEdited && this.projectId === 'new') {
                    this.form.get('projectFlow.slug')?.setValue(this._slugify(`${val ?? ''}`), { emitEvent: false });
                }
                this._cdr.markForCheck();
            });

        this.form.valueChanges.pipe(takeUntil(this._unsub$)).subscribe(() => this._cdr.markForCheck());
    }

    private _buildPayload(forceStatus?: 'active' | 'draft'): SmartLinkProject {
        const raw = this.form.getRawValue() as Record<string, any>;
        const pf = raw['projectFlow'] || {};
        const completion = pf['completion'] || {};
        const originsText = `${completion['allowedPostMessageOriginsText'] ?? ''}`;
        const origins = originsText
            .split(/[\n,]/)
            .map((s) => s.trim())
            .filter(Boolean);
        const redirectUrl = `${completion['redirectUrl'] ?? ''}`.trim();
        const rawFlowOrder = `${pf['onboardingSettings']?.['flowOrder'] ?? ''}`.trim();

        return {
            ...(this.project?._id ? { _id: this.project._id } : {}),
            name: `${raw['name'] ?? ''}`.trim(),
            target: 'personal',
            status: forceStatus || this.project?.status || 'active',
            version: 3,
            contactEmail: `${raw['contactEmail'] ?? ''}`.trim(),
            defaultLanguage: raw['defaultLanguage'] || 'en',
            privacyUrl: `${raw['privacyUrl'] ?? ''}`.trim(),
            termsAndConditionsUrl: `${raw['termsAndConditionsUrl'] ?? ''}`.trim(),
            allowedCountries: raw['allowedCountries']?.length ? raw['allowedCountries'] : ['All'],
            dataProtection: raw['dataProtection'],
            branding: raw['branding'],
            projectFlows: [
                {
                    ...(pf['_id'] ? { _id: pf['_id'] } : {}),
                    type: 'smartlink',
                    target: 'personal',
                    status: forceStatus || pf['status'] || 'active',
                    version: 3,
                    slug: `${pf['slug'] ?? ''}`.trim(),
                    routing: pf['routing'],
                    completion: {
                        mode: completion['mode'] || 'receipt',
                        redirectUrl,
                        allowedPostMessageOrigins: origins,
                        receiptMessage: `${completion['receiptMessage'] ?? ''}`.trim(),
                        allowPdfDownload: Boolean(completion['allowPdfDownload']),
                    },
                    security: {
                        allowedCountries: raw['allowedCountries']?.length ? raw['allowedCountries'] : ['All'],
                        requireSignedSession: Boolean(pf['security']?.['requireSignedSession']),
                        defaultTokenTtlMinutes: Number(pf['security']?.['defaultTokenTtlMinutes']) || 60,
                        defaultMaxUses: Number(pf['security']?.['defaultMaxUses'] ?? 1),
                    },
                    integrations: {
                        redirectUrl: completion['mode'] === 'redirect' ? redirectUrl : '',
                        webhook: pf['integrations']?.['webhook'] || null,
                    },
                    onboardingSettings: {
                        enrollmentClient: pf['onboardingSettings']?.['enrollmentClient'] || 'v2',
                        verifyStyle: (pf['onboardingSettings']?.['verifyStyle'] || 'a') as SmartLinkVerifyStyle,
                        flowOrder: rawFlowOrder === 'consent_first' ? 'consent_first' : 'contact_first',
                    },
                },
            ],
        };
    }

    private _persistAndNavigate(targetStep: number, finishToDetail: boolean): void {
        this.saving.set(true);
        this.saveError.set(null);

        const payload = this._buildPayload(finishToDetail ? 'active' : undefined);
        const existingId = this.projectId !== 'new' ? this.projectId : '';
        const req$ = existingId
            ? this._service.updateSmartLinkProject(existingId, payload)
            : this._service.createSmartLinkProject(payload);

        req$.subscribe({
            next: (saved) => {
                this.saving.set(false);
                if (saved) {
                    const flow = this._service.extractSmartLinkFlow(saved);
                    const flowId = this._service.extractSmartLinkFlowId(saved);
                    if (flowId) {
                        this.form.get('projectFlow._id')?.setValue(flowId, { emitEvent: false });
                    }
                    const fallbackFlow =
                        payload.projectFlows?.[0] || this._service.createDefaultDraft().projectFlows![0];
                    this.project = flow
                        ? saved
                        : {
                              ...saved,
                              projectFlows: [
                                  {
                                      ...fallbackFlow,
                                      ...(flowId ? { _id: flowId } : {}),
                                  },
                              ],
                          };
                    if (saved._id) {
                        this.projectId = saved._id;
                        this._loadedId = saved._id;
                    }
                }
                this.form.markAsPristine();

                const id = saved?._id || existingId;
                if (finishToDetail) {
                    this._snack.open(this._t('smartLinks.setup.savedToast'), this._t('close'), { duration: 2500 });
                    if (id) {
                        void this._router.navigate(['/smart-links/projects', id]);
                    }
                } else if (id) {
                    void this._router.navigate(['/smart-links/projects', id, 'setup', targetStep]);
                }
                this._cdr.markForCheck();
            },
            error: (err) => {
                this.saving.set(false);
                const rawMsg = `${err?.error?.message || ''}`;
                const isDuplicate = err?.status === 409 || /E11000|duplicate/i.test(rawMsg);
                const msg = isDuplicate
                    ? this._t('smartLinks.setup.duplicateNameError')
                    : rawMsg || this._t('smartLinks.setup.saveError');
                this.saveError.set(msg);
                this._snack.open(msg, this._t('close'), { duration: 4000 });
                this._cdr.markForCheck();
            },
        });
    }

    private _markCurrentStepTouched(step: number): void {
        if (step === 0) {
            BASIC_KEYS.forEach((key) => {
                const ctrl = this.form.get(key);
                if (ctrl) this._markControlTreeState(ctrl, 'touched');
            });
            return;
        }
        this._markControlTreeState(this.form.get('projectFlow') || this.form, 'touched');
    }

    private _markControlTreeState(control: AbstractControl, state: 'dirty' | 'touched'): void {
        if (state === 'dirty') {
            control.markAsDirty({ onlySelf: true });
        } else {
            control.markAsTouched({ onlySelf: true });
        }
        if (control instanceof FormGroup) {
            Object.values(control.controls).forEach((c) => this._markControlTreeState(c, state));
            return;
        }
        if (control instanceof FormArray) {
            control.controls.forEach((c) => this._markControlTreeState(c, state));
        }
    }

    private _slugify(value: string): string {
        return value
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 48);
    }

    private _t(key: string): string {
        return this._transloco.translate(key) ?? key;
    }
}
