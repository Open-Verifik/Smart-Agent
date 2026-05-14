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
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    ADDRESS_PATTERN,
    CITY_NAME_PATTERN,
    PERSON_NAME_PATTERN,
    STRICT_URL_PATTERN,
} from 'app/shared/validators/validation-patterns';
import { FuseConfirmationDialogComponent } from '@fuse/services/confirmation/dialog/dialog.component';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { environment } from 'environments/environment';
import { Observable, Subject, catchError, finalize, of, takeUntil, throwError } from 'rxjs';

import type { SmartAccessSecurity } from '../smart-access-projects.types';
import type { AccessProjectLike } from '../smart-access-setup.service';
import { SmartAccessSetupService } from '../smart-access-setup.service';
import { SetupBasicSetupComponent } from '../../../smart-enroll/projects/setup/steps/basic-setup/basic-setup.component';
import { SetupUserInterfaceComponent } from '../../../smart-enroll/projects/setup/steps/user-interface/user-interface.component';
import { AccessWhitelistStepComponent } from './steps/access-whitelist-step.component';
import { AccessLoginMethodsStepComponent } from './steps/access-login-methods-step.component';

/** Step-local form control paths validated before save/navigate. */
const BASIC_KEYS = [
    'name',
    'allowedCountries',
    'contactEmail',
    'privacyUrl',
    'termsAndConditionsUrl',
    'dataProtection.name',
    'dataProtection.email',
    'dataProtection.address',
    'dataProtection.city',
    'dataProtection.country',
    'dataProtection.postalCode',
];

/** Login-methods step: primitive toggles nested under loginSettings only. */
const LOGIN_SETTINGS_PREFIX = 'projectFlow.loginSettings';

const LOGIN_SETTINGS_KEYS = [
    `${LOGIN_SETTINGS_PREFIX}.email`,
    `${LOGIN_SETTINGS_PREFIX}.phone`,
    `${LOGIN_SETTINGS_PREFIX}.faceLiveness`,
    `${LOGIN_SETTINGS_PREFIX}.showFaceLivenessRecommendation`,
    `${LOGIN_SETTINGS_PREFIX}.searchMode`,
    `${LOGIN_SETTINGS_PREFIX}.livenessMinScore`,
    `${LOGIN_SETTINGS_PREFIX}.searchMinScore`,
];

const CONNECT_KEYS = [
    'projectFlow.integrations.redirectUrl',
    'projectFlow.integrations.webhook',
    'projectFlow.security.source',
    'projectFlow.security.strategy',
    'projectFlow.security.apiUrl',
    'projectFlow.security.apiTestType',
    'projectFlow.security.apiTestValue',
];

const BRANDING_KEYS = [
    'branding.backgroundColor',
    'branding.buttonColor',
    'branding.buttonTextColor',
    'branding.logo',
    'branding.imageBackgroundColor',
    'branding.image',
    'branding.titleColor',
    'branding.textColor',
];

const optionalStrictUrlValidator: ValidatorFn = (control) => {
    const raw = `${control?.value ?? ''}`.trim();
    if (!raw) return null;
    return STRICT_URL_PATTERN.test(raw) ? null : { strictUrl: true };
};

@Component({
    selector: 'smart-access-setup-host',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        TranslocoModule,
        SetupBasicSetupComponent,
        AccessLoginMethodsStepComponent,
        AccessWhitelistStepComponent,
        SetupUserInterfaceComponent,
    ],
    templateUrl: './smart-access-setup-host.component.html',
    styleUrls: ['./smart-access-setup-host.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartAccessSetupHostComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _fb = inject(FormBuilder);
    private _setup = inject(SmartAccessSetupService);
    private _cdr = inject(ChangeDetectorRef);
    private _confirm = inject(FuseConfirmationService);
    private _transloco = inject(TranslocoService);
    private _snack = inject(MatSnackBar);

    private _unsub$ = new Subject<void>();

    /** Login flow `_id` for shell row (from form or hydrated project). */
    get loginFlowShellId(): string {
        const fromForm = `${this.form?.get('projectFlow')?.get('_id')?.value ?? ''}`.trim();
        if (fromForm) return fromForm;
        const fromProject =
            `${this.project?.projectFlows?.find((f: { type?: string }) => f.type === 'login')?._id ?? ''}`.trim();
        return fromProject;
    }

    form!: FormGroup;
    readonly stepTitles = signal<string[]>([
        'smartAccessProjects.setup.steps.basic',
        'smartAccessProjects.setup.steps.login_methods',
        'smartAccessProjects.setup.steps.connect',
        'smartAccessProjects.setup.steps.customize',
    ]);

    loading = signal(true);
    saving = signal(false);
    projectId = '';
    stepIndex = 0;
    project: AccessProjectLike = {} as AccessProjectLike;

    get stepsLength(): number {
        return 4;
    }

    get canNavigate(): boolean {
        return !this.loading() && !this.saving();
    }

    ngOnInit(): void {
        this._route.params.pipe(takeUntil(this._unsub$)).subscribe((params) => {
            const id = params['projectId'] || 'new';
            const step = params['step'] ?? '0';
            this.projectId = id;
            this.stepIndex = Number(step) || 0;
            this._setup.projectIdObs = id;
            this._setup.stepIndexObs = this.stepIndex;
            this._cdr.markForCheck();
        });

        const idSnap = this._route.snapshot.params['projectId'] || 'new';
        const stepSnap = this._route.snapshot.params['step'] ?? '0';
        this.projectId = idSnap;
        this.stepIndex = Number(stepSnap) || 0;

        if (idSnap !== 'new') {
            this._loadProject(idSnap);
        } else {
            const shell = this._setup.getDefaultProjectShell();
            this.project = shell as AccessProjectLike;
            this._initForm();
            this.loading.set(false);
            this._cdr.markForCheck();
        }
    }

    ngOnDestroy(): void {
        this._unsub$.next();
        this._unsub$.complete();
    }

    isFormValidForStep = (idx: number): boolean => {
        if (!this.form) return false;
        if (idx === 0) return BASIC_KEYS.every((k) => !this.form.get(k)?.invalid);
        if (idx === 1) return LOGIN_SETTINGS_KEYS.every((k) => !this.form.get(k)?.invalid);
        if (idx === 2) return this._connectStepValid();
        if (idx === 3) return BRANDING_KEYS.every((k) => !this.form.get(k)?.invalid);
        return false;
    };

    confirmNavigation(): MatDialogRef<FuseConfirmationDialogComponent> {
        return this._confirm.open({
            title: this._t('smartAccessProjects.setup.unsaved_changes'),
            message: this._t('smartAccessProjects.setup.unsaved_changes_message'),
            actions: {
                confirm: {
                    show: true,
                    label: this._t('smartAccessProjects.setup.exit_without_saving'),
                },
                cancel: { show: true, label: this._t('cancel') },
            },
        });
    }

    saveProject(): Observable<{ data: AccessProjectLike }> {
        if (this.saving() || !this.isFormValidForStep(this.stepIndex)) return of();
        this.saving.set(true);

        const body = this._buildPayload();
        const call = this.project?._id
            ? this._setup.updateProject(this.project._id, body as any)
            : this._setup.createProject(body as any);

        return call.pipe(finalize(() => this.saving.set(false)), catchError((err) => throwError(() => err)));
    }

    assignProjectAfterCreate(id: string, hydrated?: AccessProjectLike | null): void {
        this.projectId = id;
        if (this.project) this.project._id = id;
        if (hydrated) {
            this.project = hydrated;
            const login = hydrated.projectFlows?.find((f: { type?: string }) => f.type === 'login');
            const fid = `${(login as { _id?: string })?._id ?? ''}`.trim();
            if (fid && this.form)
                this.form.get('projectFlow')?.patchValue({ _id: fid }, { emitEvent: false });
        }
        this._setup.projectIdObs = id;
    }

    returnToProjects(): void {
        this._router.navigate(['/smart-access/projects']);
    }

    previewProject(): void {
        const baseRaw =
            environment.production && environment.kycBaseUrl
                ? environment.kycBaseUrl
                : (environment as { sandBoxKYCBaseUrl?: string }).sandBoxKYCBaseUrl ??
                  environment.kycBaseUrl ??
                  '';
        const baseUrl = `${baseRaw}`.replace(/\/+$/, '');
        if (!baseUrl || this.projectId === 'new') return;
        window.open(`${baseUrl}/sign-in/${this.projectId}`, '_blank');
    }

    previousStep(): void {
        if (this.stepIndex === 0) {
            this.returnToProjects();
            return;
        }
        this._router.navigate(['/smart-access/projects', this.projectId, 'setup', this.stepIndex - 1]);
    }

    nextStep(): void {
        if (!this.isFormValidForStep(this.stepIndex)) return;
        const isLast = this.stepIndex >= this.stepsLength - 1;
        if (!isLast) {
            void this._router.navigate(['/smart-access/projects', this.projectId, 'setup', this.stepIndex + 1]);
            return;
        }
        void this._router.navigate(['/smart-access/projects', this.projectId]);
    }

    private _connectStepValid(): boolean {
        const controlsOk = CONNECT_KEYS.every((k) => !this.form.get(k)?.invalid);
        const source = this.form.get('projectFlow.security.source')?.value as string | null;
        if (source === 'API') {
            const url = this.form.get('projectFlow.security.apiUrl')?.value?.trim?.() ?? '';
            const tester = this.form.get('projectFlow.security.apiTestValue')?.value?.trim?.() ?? '';
            return controlsOk && url.length > 0 && tester.length > 0;
        }
        return controlsOk;
    }

    private _loadProject(id: string): void {
        this.loading.set(true);
        this._setup.requestProject(id).subscribe({
            next: (res) => {
                const proj = res?.data as AccessProjectLike | null;
                this.project = proj ?? (this._setup.getDefaultProjectShell() as AccessProjectLike);
                this._initForm();
                this.loading.set(false);
                this._cdr.markForCheck();
            },
            error: () => {
                this._snack.open(this._t('smartAccessProjects.setup.api_error'), this._t('close'), { duration: 3000 });
                this.project = this._setup.getDefaultProjectShell() as AccessProjectLike;
                this._initForm();
                this.loading.set(false);
            },
        });
    }

    private _loginFlow(raw: AccessProjectLike) {
        return raw?.projectFlows?.find((f) => f.type === 'login');
    }

    private _initForm(): void {
        const p = this.project ?? (this._setup.getDefaultProjectShell() as AccessProjectLike);
        const flow = this._loginFlow(p) ?? this._setup.defaultLoginFlow();

        const defaultBranding = this._setup.defaultBranding;

        this.form = this._fb.group({
            allowedCountries: [p?.allowedCountries || [], Validators.required],
            contactEmail: [
                p?.contactEmail || '',
                [
                    Validators.required,
                    Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
                ],
            ],
            name: [p?.name || '', [Validators.required, Validators.maxLength(60)]],
            privacyUrl: [p?.privacyUrl || '', [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
            target: [(p?.target || 'personal') as string],
            termsAndConditionsUrl: [
                p?.termsAndConditionsUrl || '',
                [Validators.required, Validators.pattern(STRICT_URL_PATTERN)],
            ],
            version: [p?.version ?? 3],
            branding: this._fb.group({
                backgroundColor: [(p?.branding?.backgroundColor || defaultBranding.backgroundColor)!, Validators.required],
                buttonColor: [(p?.branding?.buttonColor || defaultBranding.buttonColor)!, Validators.required],
                buttonTextColor: [(p?.branding?.buttonTextColor || defaultBranding.buttonTextColor)!, Validators.required],
                image: [p?.branding?.image ?? defaultBranding.image],
                imageBackgroundColor: [
                    (p?.branding?.imageBackgroundColor || defaultBranding.imageBackgroundColor)!,
                    Validators.required,
                ],
                logo: [p?.branding?.logo ?? defaultBranding.logo, Validators.required],
                textColor: [(p?.branding?.textColor || defaultBranding.textColor)!, Validators.required],
                titleColor: [p?.branding?.titleColor || defaultBranding.titleColor],
            }),
            dataProtection: this._fb.group({
                address: [(p?.dataProtection?.address || '')!, [Validators.required, Validators.pattern(ADDRESS_PATTERN)]],
                address2: [p?.dataProtection?.address2 || ''],
                city: [(p?.dataProtection?.city || '')!, [Validators.required, Validators.pattern(CITY_NAME_PATTERN)]],
                country: [(p?.dataProtection?.country || '')!, Validators.required],
                email: [
                    (p?.dataProtection?.email || '')!,
                    [
                        Validators.required,
                        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
                    ],
                ],
                name: [(p?.dataProtection?.name || '')!, [Validators.required, Validators.pattern(PERSON_NAME_PATTERN)]],
                postalCode: [
                    (p?.dataProtection?.postalCode || '')!,
                    [Validators.required, Validators.pattern(/^[A-Za-z0-9\s\-]{3,12}$/)],
                ],
            }),
            projectFlow: this._fb.group({
                _id: [(flow as { _id?: string })?._id || ''],
                status: [(flow.status as string) || 'draft'],
                type: ['login'],
                version: [(flow.version as number) || 3],
                loginSettings: this._fb.group({
                    email: [!!flow.loginSettings?.email],
                    emailGateway: [flow.loginSettings?.emailGateway ?? 'mailgun'],
                    faceLiveness: [!!flow.loginSettings?.faceLiveness],
                    phone: [!!flow.loginSettings?.phone],
                    phoneGateway: [flow.loginSettings?.phoneGateway ?? 'none'],
                    livenessMinScore: [
                        flow.loginSettings?.livenessMinScore ?? 0.65,
                        [Validators.min(0.52), Validators.max(0.89)],
                    ],
                    searchMinScore: [
                        flow.loginSettings?.searchMinScore ?? 0.85,
                        [Validators.min(0.71), Validators.max(0.95)],
                    ],
                    searchMode: [flow.loginSettings?.searchMode || 'FAST'],
                    showFaceLivenessRecommendation: [!!flow.loginSettings?.showFaceLivenessRecommendation],
                }),
                integrations: this._fb.group({
                    redirectUrl: [
                        flow.integrations?.redirectUrl || '',
                        [optionalStrictUrlValidator],
                    ],
                    webhook: [(flow.integrations?.webhook as string | null) ?? null],
                }),
                security: this._fb.group({
                    apiTestType: [(flow.security as SmartAccessSecurity)?.apiTestType || 'email'],
                    apiTestValue: [(flow.security as SmartAccessSecurity)?.apiTestValue || ''],
                    apiUrl: [
                        (flow.security as SmartAccessSecurity)?.apiUrl || '',
                        [Validators.pattern(STRICT_URL_PATTERN)],
                    ],
                    source: [(flow.security as SmartAccessSecurity)?.source ?? null],
                    strategy: [(flow.security as SmartAccessSecurity)?.strategy || 'whitelist'],
                }),
            }),
        });

        const sec = this.form.get('projectFlow.security') as FormGroup;
        sec
            ?.get('source')
            ?.valueChanges.pipe(takeUntil(this._unsub$))
            .subscribe((src: string | null) => this._adjustSecurityValidators(src ?? null));
        this._adjustSecurityValidators(sec?.get('source')?.value ?? null);
    }

    private _adjustSecurityValidators(source: string | null): void {
        const g = this.form.get('projectFlow.security') as FormGroup;
        const url = g.get('apiUrl');
        const tester = g.get('apiTestValue');

        const requireApi = source === 'API';

        if (requireApi) {
            url?.setValidators([Validators.required, Validators.pattern(STRICT_URL_PATTERN)]);
            tester?.setValidators([Validators.required]);
        } else {
            url?.setValidators([Validators.pattern(STRICT_URL_PATTERN)]);
            tester?.clearValidators();
        }

        url?.updateValueAndValidity({ emitEvent: false });
        tester?.updateValueAndValidity({ emitEvent: false });
    }

    private _buildPayload(): Partial<AccessProjectLike> & { projectFlow?: Record<string, unknown>; projectFlowType: 'login' } {
        const raw = this.form.getRawValue() as Record<string, unknown>;

        const dataProtection = raw['dataProtection'] as Record<string, unknown>;
        const branding = raw['branding'] as Record<string, unknown>;

        const baseSlice: Record<string, unknown> = {
            target: 'personal',
            version: 3,
            name: raw['name'],
            allowedCountries: raw['allowedCountries'],
            contactEmail: raw['contactEmail'],
            privacyUrl: raw['privacyUrl'],
            termsAndConditionsUrl: raw['termsAndConditionsUrl'],
        };

        if (this.stepIndex === 0) {
            return {
                ...baseSlice,
                dataProtection: dataProtection as unknown as AccessProjectLike['dataProtection'],
                projectFlowType: 'login',
            };
        }

        const pf = raw['projectFlow'] as Record<string, unknown>;
        const loginSettings = pf['loginSettings'];
        const integrations = pf['integrations'];
        const security = pf['security'];

        let projectFlow: Record<string, unknown> = {
            ...(pf['_id'] ? { _id: pf['_id'] } : {}),
            status: pf['status'] || 'draft',
            type: 'login',
            version: 3,
        };

        if (this.stepIndex === 1) {
            projectFlow = { ...projectFlow, loginSettings };
        } else if (this.stepIndex === 2) {
            projectFlow = { ...projectFlow, integrations, security };
        } else if (this.stepIndex === 3) {
            return { branding, projectFlowType: 'login' };
        }

        return { ...baseSlice, branding, projectFlow, projectFlowType: 'login' };
    }

    trackStep(_i: number, titleKey: string): string {
        return titleKey;
    }

    navigateToStep(i: number): void {
        if (i >= 2 && !this.loginFlowShellId && i > this.stepIndex) return;
        void this._router.navigate(['/smart-access/projects', this.projectId, 'setup', i]);
    }

    private _t(key: string): string {
        return this._transloco.translate(key) ?? key;
    }
}
