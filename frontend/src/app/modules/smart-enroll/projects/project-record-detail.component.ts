import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { NgxPrintDirective } from 'ngx-print';
import { finalize, forkJoin, Subscription } from 'rxjs';
import { environment } from 'environments/environment';
import { WebhookEventsComponent } from '../../smart-monitor/webhooks/webhook-events.component';
import { ScanDeleteConfirmDialogComponent } from '../smart-scan/scan-delete-confirm-dialog.component';
import { DevApiHintDialogComponent } from './dev-api-hint-dialog.component';
import { buildDevApiHintBody, type DevApiHintI18n } from './dev-api-hint.util';
import {
    EnrollResendLinkDialogComponent,
    type EnrollResendLinkDialogResult,
} from './enroll-resend-link-dialog.component';
import {
    buildManualVerificationReasons,
    cleanOcrExtraction,
    compareMinScoreDisplayPercent,
    livenessMinScoreDisplayPercent,
    normalizeUnitScore,
    pickEnrollmentFaceMedia,
    scoreToPercent,
    showNameVerificationSection,
    type ManualVerificationReason,
    type StepId,
    type StepState,
} from './app-registration-record.utils';
import { APP_REGISTRATION_DETAIL_POPULATES, SmartEnrollProjectsService } from './smart-enroll-projects.service';
import type { AppRegistrationDetail, EnrollProject } from './smart-enroll-projects.types';

const STEP_ORDER: StepId[] = [
    'information',
    'email',
    'phone',
    'documents',
    'biometrics',
    'compare',
    'verdict',
];

const SKIP_INFO_KEYS = new Set([
    '_id',
    '__v',
    'criminalData',
    'inputMethod',
    'validationMethod',
    'webhook',
    'type',
]);

/** Shown only in the "Session & technical details" card, not in the signup grid */
const HIDDEN_INFORMATION_KEYS = new Set([
    'appRegistration',
    'client',
    'project',
    'projectFlow',
    'documentValidation',
    'emailValidation',
    'phoneValidation',
    'biometricValidation',
    'informationValidation',
    'status',
    'createdAt',
    'updatedAt',
    'ipAddress',
    'userAgent',
    'deviceId',
    'sessionId',
    'correlationId',
    'requestId',
    'firstNameMatchPercentage',
    'lastNameMatchPercentage',
    'fullNameMatchPercentage',
    'namesMatch',
]);

/** Name-match snapshot: gov/OCR vs signup — shown in Name match card only (see client-panel project-record) */
const NAME_MATCH_SNAPSHOT_KEYS = new Set([
    'firstNameMatchPercentage',
    'lastNameMatchPercentage',
    'fullNameMatchPercentage',
    'namesMatch',
]);

/** Stable order for technical rows sourced from `informationValidation` */
const TECHNICAL_METADATA_KEY_ORDER: string[] = [
    'status',
    'createdAt',
    'updatedAt',
    'ipAddress',
    'userAgent',
    'client',
    'project',
    'projectFlow',
    'appRegistration',
    'deviceId',
    'sessionId',
    'correlationId',
    'requestId',
];

/** Keys excluded from the CV personal block — email/phone have their own card, name is in the header,
 * and the facts strip already shows DOB / gender / nationality / country at the top. */
const RESUME_PERSONAL_EXCLUDE = new Set<string>([
    'email',
    'phone',
    'countryCode',
    'fullName',
    'firstName',
    'lastName',
    'middleName',
    'secondName',
    'dateOfBirth',
    'birthDate',
    'gender',
    'sex',
    'nationality',
    'country',
]);

/** Keys probed (in order) for the identity facts strip. */
const RESUME_FACT_KEYS: string[] = ['dateOfBirth', 'birthDate', 'gender', 'sex', 'nationality', 'country'];

/** OCR keys the resume excludes because they're already shown elsewhere (extracted name). */
const RESUME_DOCUMENT_OCR_EXCLUDE = new Set<string>([
    'First Name',
    'Last Name',
    'Full Name',
    'First Name MRZ',
    'Last Name MRZ',
    'Middle Name',
    'Second Last Name',
    'Second Last Name MRZ',
    'First Last Name MRZ',
    'Name 1',
    'Name 2',
    'Name 3',
]);

@Component({
    selector: 'project-record-detail',
    standalone: true,
    imports: [
        ClipboardModule,
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        NgxPrintDirective,
        TranslocoModule,
        WebhookEventsComponent,
    ],
    templateUrl: './project-record-detail.component.html',
    styleUrls: ['./project-record-detail.component.scss'],
})
export class ProjectRecordDetailComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _sanitizer = inject(DomSanitizer);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);
    private _dialog = inject(MatDialog);
    private _snackBar = inject(MatSnackBar);
    private _clipboard = inject(Clipboard);

    private readonly _resendForbiddenStatuses = new Set(['COMPLETED_WITHOUT_KYC', 'COMPLETED', 'FAILED']);
    readonly printSectionId = 'enrollment-print-section';

    private _sub: Subscription | null = null;
    private _observer: IntersectionObserver | null = null;

    projectId = '';
    recordId = '';
    loading = signal(true);
    errorKey = signal<string | null>(null);
    project = signal<EnrollProject | null>(null);
    record = signal<AppRegistrationDetail | null>(null);
    ocrDisplayKeys = signal<string[]>([]);
    ocrData = signal<Record<string, unknown>>({});
    activeStep = signal<StepId>('information');
    deleteLoading = signal(false);
    deleteErrorKey = signal<string | null>(null);
    exportLoading = signal(false);
    devView = signal(false);

    ngOnInit(): void {
        this.projectId = this._route.snapshot.paramMap.get('projectId') ?? '';
        this.recordId = this._route.snapshot.paramMap.get('recordId') ?? '';
        if (!this.projectId || !this.recordId) {
            this._router.navigate(['/smart-enroll/projects']);
            return;
        }

        this._sub = forkJoin({
            project: this._projectsService.getProject(this.projectId),
            record: this._projectsService.getAppRegistration(this.recordId),
        }).subscribe({
            next: ({ project, record }) => {
                if (!record) {
                    this.errorKey.set('smartEnrollProjects.recordDetail.loadError');
                    this.loading.set(false);
                    return;
                }
                const recProject = record.project as string | undefined;
                if (recProject && recProject !== this.projectId) {
                    this.errorKey.set('smartEnrollProjects.recordDetail.wrongProject');
                    this.loading.set(false);
                    return;
                }
                this.project.set(project);
                this.record.set(record);
                this._initOcr(record);
                this.loading.set(false);
                this._cdr.markForCheck();
                queueMicrotask(() => this._setupScrollSpy());
            },
            error: () => {
                this.errorKey.set('smartEnrollProjects.recordDetail.loadError');
                this.loading.set(false);
            },
        });
    }

    ngOnDestroy(): void {
        this._sub?.unsubscribe();
        this._observer?.disconnect();
    }

    goBack(): void {
        this._router.navigate(['/smart-enroll/projects', this.projectId, 'records']);
    }

    goProjects(): void {
        this._router.navigate(['/smart-enroll/projects']);
    }

    toggleDevView(): void {
        this.devView.update((v) => !v);
    }

    /**
     * Per-card payloads for the Dev view. The top-level `record` card hides the heavy nested
     * objects that already render in their own cards so the dump stays readable.
     */
    devSections(): { key: string; value: unknown }[] {
        const r = this.record();
        if (!r) return [];

        const nestedKeys = new Set<string>([
            'informationValidation',
            'emailValidation',
            'phoneValidation',
            'documentValidation',
            'documentFace',
            'failedDocumentValidations',
            'biometricValidation',
            'failedBiometricValidations',
            'face',
            'person',
            'compareFaceVerification',
            'projectFlow',
        ]);

        const rAny = r as unknown as Record<string, unknown>;
        const recordSummary: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(rAny)) {
            if (nestedKeys.has(key)) continue;
            recordSummary[key] = value;
        }

        const sections: { key: string; value: unknown }[] = [
            { key: 'record', value: recordSummary },
            { key: 'informationValidation', value: r.informationValidation ?? null },
            { key: 'emailValidation', value: r.emailValidation ?? null },
            { key: 'phoneValidation', value: r.phoneValidation ?? null },
            { key: 'documentValidation', value: r.documentValidation ?? null },
            { key: 'documentFace', value: r.documentFace ?? null },
            { key: 'failedDocumentValidations', value: r.failedDocumentValidations ?? [] },
            { key: 'biometricValidation', value: r.biometricValidation ?? null },
            { key: 'failedBiometricValidations', value: r.failedBiometricValidations ?? [] },
            { key: 'face', value: rAny['face'] ?? null },
            { key: 'person', value: rAny['person'] ?? null },
            { key: 'compareFaceVerification', value: r.compareFaceVerification ?? null },
            { key: 'projectFlow', value: r.projectFlow ?? null },
            { key: 'project', value: this.project() },
        ];

        return sections.filter((section) => section.value !== null && section.value !== undefined);
    }

    devSectionTitle(key: string): string {
        const tk = `smartEnrollProjects.recordDetail.devView.section.${key}`;
        const translated = this._transloco.translate(tk);
        if (!translated || translated === tk) return key;
        return translated;
    }

    copyJson(value: unknown): void {
        try {
            const text = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
            this._clipboard.copy(text);
            this._snackBar.open(
                this._transloco.translate('smartEnrollProjects.recordDetail.devView.copied'),
                'OK',
                { duration: 2000 }
            );
        } catch {
            // Stringification can throw on circular structures; surface a friendly notice instead.
            this._snackBar.open(
                this._transloco.translate('smartEnrollProjects.recordDetail.devView.copyError'),
                'OK',
                { duration: 2500 }
            );
        }
    }

    devApiHintDisabled(sectionKey: string, value: unknown): boolean {
        if (sectionKey === 'failedDocumentValidations' || sectionKey === 'failedBiometricValidations') {
            return !Array.isArray(value) || value.length === 0;
        }
        return false;
    }

    openDevApiHint(sectionKey: string, value: unknown): void {
        const r = this.record();
        if (!r?._id) return;

        const i18n: DevApiHintI18n = {
            headers: this._transloco.translate('smartEnrollProjects.recordDetail.devView.apiHintHeadersBlock'),
            populatesExplainer: this._transloco.translate(
                'smartEnrollProjects.recordDetail.devView.apiHintPopulatesExplainer',
            ),
            noDirectCompare: this._transloco.translate('smartEnrollProjects.recordDetail.devView.apiHintCompareNoDirect'),
            compareFallback: this._transloco.translate('smartEnrollProjects.recordDetail.devView.apiHintCompareFallback'),
            emptyList: this._transloco.translate('smartEnrollProjects.recordDetail.devView.apiHintEmptyList'),
            noId: this._transloco.translate('smartEnrollProjects.recordDetail.devView.apiHintNoId'),
            webhookNote: this._transloco.translate('smartEnrollProjects.recordDetail.devView.apiHintWebhookNote'),
        };

        const body = buildDevApiHintBody(sectionKey, value, {
            recordId: r._id,
            project: this.project(),
            apiBase: environment.apiUrl,
            populates: APP_REGISTRATION_DETAIL_POPULATES,
            i18n,
            moreUrlsLabel: (count: number) =>
                this._transloco.translate('smartEnrollProjects.recordDetail.devView.apiHintArrayMore', { count }),
        });

        const title = this._transloco.translate('smartEnrollProjects.recordDetail.devView.apiHintTitle', {
            section: this.devSectionTitle(sectionKey),
        });

        this._dialog.open(DevApiHintDialogComponent, {
            data: { title, body },
            width: '640px',
            maxWidth: '92vw',
            panelClass: 'dev-api-hint-dialog-panel',
        });
    }

    openWebhookEventsApiHint(): void {
        this.openDevApiHint('webhookEvents', null);
    }

    confirmDeleteRecord(): void {
        const r = this.record();
        if (!r?._id || this.deleteLoading()) return;

        this.deleteErrorKey.set(null);
        this._dialog
            .open(ScanDeleteConfirmDialogComponent, {
                width: '400px',
                data: {
                    titleKey: 'smartEnrollProjects.recordDetail.deleteEnrollmentTitle',
                    messageKey: 'smartEnrollProjects.recordDetail.deleteEnrollmentMessage',
                    cancelKey: 'smartEnrollProjects.recordDetail.deleteEnrollmentCancel',
                    confirmKey: 'smartEnrollProjects.recordDetail.deleteEnrollmentConfirm',
                },
            })
            .afterClosed()
            .subscribe((confirmed) => {
                if (!confirmed) return;
                this.deleteLoading.set(true);
                this._cdr.markForCheck();
                const isLogin = (r.projectFlow as { type?: string } | undefined)?.type === 'login';
                const req = isLogin
                    ? this._projectsService.deleteAppLogin(r._id)
                    : this._projectsService.deleteAppRegistration(r._id);
                req
                    .pipe(
                        finalize(() => {
                            this.deleteLoading.set(false);
                            this._cdr.markForCheck();
                        })
                    )
                    .subscribe({
                        next: () => this._router.navigate(['/smart-enroll/projects', this.projectId, 'records']),
                        error: () => {
                            this.deleteErrorKey.set('smartEnrollProjects.recordDetail.deleteEnrollmentError');
                        },
                    });
            });
    }

    canResendLink(): boolean {
        const r = this.record();
        if (!r?._id) return false;
        if (!r.status) return true;
        return !this._resendForbiddenStatuses.has(r.status);
    }

    openResendLinkDialog(): void {
        const r = this.record();
        if (!r?._id) return;
        this._dialog
            .open(EnrollResendLinkDialogComponent, {
                width: '500px',
                data: { record: r },
            })
            .afterClosed()
            .subscribe((result: EnrollResendLinkDialogResult | undefined) => {
                if (!result?.success) return;
                const key = result.emailSent
                    ? 'smartEnrollProjects.recordDetail.resendSuccessEmail'
                    : 'smartEnrollProjects.recordDetail.resendSuccessCopied';
                this._snackBar.open(this._transloco.translate(key), 'OK', { duration: 3000 });
            });
    }

    /**
     * Request the backend-rendered CV PDF and download it via a temporary blob URL.
     */
    downloadCv(): void {
        const r = this.record();
        if (!r?._id || this.exportLoading()) return;
        this.exportLoading.set(true);
        this._cdr.markForCheck();
        this._projectsService
            .exportAppRegistrationCV(r._id, this._currentLanguage())
            .pipe(
                finalize(() => {
                    this.exportLoading.set(false);
                    this._cdr.markForCheck();
                })
            )
            .subscribe({
                next: ({ blob, filename }) => {
                    const url = URL.createObjectURL(blob);
                    const anchor = document.createElement('a');
                    anchor.href = url;
                    anchor.download = filename;
                    document.body.appendChild(anchor);
                    anchor.click();
                    document.body.removeChild(anchor);
                    URL.revokeObjectURL(url);
                    this._snackBar.open(
                        this._transloco.translate('smartEnrollProjects.recordDetail.exportCvSuccess'),
                        'OK',
                        { duration: 3000 }
                    );
                },
                error: () => {
                    this._snackBar.open(
                        this._transloco.translate('smartEnrollProjects.recordDetail.exportCvError'),
                        'OK',
                        { duration: 4000 }
                    );
                },
            });
    }

    /**
     * Email the CV PDF to the registration's email (server-side default) or, when missing,
     * notify the user that no recipient is on file.
     */
    emailCv(): void {
        const r = this.record();
        if (!r?._id || this.exportLoading()) return;
        const iv = (r.informationValidation ?? {}) as Record<string, unknown>;
        const email = typeof iv['email'] === 'string' ? (iv['email'] as string) : '';
        if (!email) {
            this._snackBar.open(
                this._transloco.translate('smartEnrollProjects.recordDetail.resendNoEmail'),
                'OK',
                { duration: 3000 }
            );
            return;
        }
        this.exportLoading.set(true);
        this._cdr.markForCheck();
        this._projectsService
            .emailAppRegistrationCV(r._id, { recipients: [email], language: this._currentLanguage() })
            .pipe(
                finalize(() => {
                    this.exportLoading.set(false);
                    this._cdr.markForCheck();
                })
            )
            .subscribe({
                next: () => {
                    this._snackBar.open(
                        this._transloco.translate('smartEnrollProjects.recordDetail.exportCvEmailSuccess'),
                        'OK',
                        { duration: 3000 }
                    );
                },
                error: () => {
                    this._snackBar.open(
                        this._transloco.translate('smartEnrollProjects.recordDetail.exportCvEmailError'),
                        'OK',
                        { duration: 4000 }
                    );
                },
            });
    }

    private _currentLanguage(): string {
        const lang = this._transloco.getActiveLang();
        const supported = new Set(['en', 'es', 'fr', 'pt', 'ja', 'ko', 'zh']);
        return supported.has(lang) ? lang : 'en';
    }

    scrollToStep(step: StepId): void {
        const el = document.getElementById(`step-${step}`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    formatDate(iso?: string | null, short = false): string {
        if (!iso) return '—';
        const dt = DateTime.fromISO(iso);
        if (!dt.isValid) return iso;
        return short ? dt.toFormat('HH:mm') : dt.toFormat('MMM dd, yyyy HH:mm');
    }

    displayName(r: AppRegistrationDetail | null): string {
        if (!r) return '—';
        const iv = r.informationValidation as Record<string, unknown> | null | undefined;
        if (!iv) return r.email || r.phone || '—';
        const full = iv['fullName'];
        if (typeof full === 'string' && full.trim()) return full;
        const first = iv['firstName'];
        const last = iv['lastName'];
        const parts = [first, last].filter((x) => typeof x === 'string' && (x as string).trim());
        return parts.length ? parts.join(' ') : r.email || r.phone || '—';
    }

    informationRows(r: AppRegistrationDetail | null): { key: string; value: string }[] {
        const iv = r?.informationValidation as Record<string, unknown> | null | undefined;
        if (!iv) return [];
        const rows: { key: string; value: string }[] = [];
        for (const [key, raw] of Object.entries(iv)) {
            if (key.startsWith('$') || key.startsWith('_')) continue;
            if (SKIP_INFO_KEYS.has(key) || HIDDEN_INFORMATION_KEYS.has(key)) continue;
            if (raw == null || raw === '' || typeof raw === 'object' || typeof raw === 'function') continue;
            rows.push({ key, value: this._formatInformationValue(key, raw) });
        }
        return rows.sort((a, b) => a.key.localeCompare(b.key));
    }

    /**
     * IDs, IP, user agent, timestamps, and validation snapshot fields — separate from signup answers.
     */
    technicalMetadataRows(r: AppRegistrationDetail | null): { key: string; value: string }[] {
        if (!r) return [];
        const out: { key: string; value: string }[] = [];
        const iv = r.informationValidation as Record<string, unknown> | null | undefined;

        const pushScalar = (key: string, raw: unknown) => {
            if (raw == null || raw === '') return;
            if (typeof raw === 'object') return;
            out.push({ key, value: this._formatInformationValue(key, raw) });
        };

        const emitted = new Set<string>();

        const tryPushIv = (key: string) => {
            if (!iv || !Object.prototype.hasOwnProperty.call(iv, key)) return;
            const raw = iv[key];
            if (raw == null || raw === '' || typeof raw === 'object') return;
            out.push({ key, value: this._formatInformationValue(key, raw) });
            emitted.add(key);
        };

        if (iv) {
            for (const key of TECHNICAL_METADATA_KEY_ORDER) {
                tryPushIv(key);
            }
            for (const key of Object.keys(iv).sort()) {
                if (
                    emitted.has(key) ||
                    SKIP_INFO_KEYS.has(key) ||
                    NAME_MATCH_SNAPSHOT_KEYS.has(key) ||
                    !HIDDEN_INFORMATION_KEYS.has(key)
                ) {
                    continue;
                }
                tryPushIv(key);
            }
        }

        if (r._id) {
            pushScalar('registrationRecordId', r._id);
        }
        if (r.createdAt) {
            pushScalar('recordCreatedAt', r.createdAt);
        }
        if (r.updatedAt) {
            pushScalar('recordUpdatedAt', r.updatedAt);
        }
        if (r.status != null && r.status !== '') {
            const ivStatus = iv && typeof iv['status'] === 'string' ? iv['status'] : null;
            if (String(r.status) !== ivStatus) {
                pushScalar('registrationStatus', r.status);
            }
        }

        return out;
    }

    /** Long values that read better full-width in the 2-column grid */
    technicalRowFullWidth(key: string): boolean {
        return key === 'userAgent' || key === 'requestId' || key === 'correlationId';
    }

    /**
     * Uses Transloco when a key exists; otherwise a readable title from the property name
     * (avoids showing raw i18n paths when a locale omits a field).
     */
    fieldLabel(key: string): string {
        const tk = `smartEnrollProjects.recordDetail.field.${key}`;
        const translated = this._transloco.translate(tk);
        if (this._translationLooksMissing(tk, translated)) {
            return this._humanizeFieldKey(key);
        }
        return translated;
    }

    private _translationLooksMissing(translationKey: string, translated: string): boolean {
        if (!translated || translated.trim() === '') return true;
        if (translated === translationKey) return true;
        if (/smartenrollprojects\.recorddetail\.field\./i.test(translated)) return true;
        return false;
    }

    private _humanizeFieldKey(key: string): string {
        let s = key.replace(/_/g, ' ');
        s = s.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
        s = s.replace(/([a-zA-Z])([0-9])/g, '$1 $2');
        s = s.replace(/([0-9])([a-zA-Z])/g, '$1 $2');
        s = s.trim();
        if (!s) return key;
        return s.replace(/\b\w/g, (ch) => ch.toUpperCase());
    }

    private _formatInformationValue(key: string, raw: unknown): string {
        if (typeof raw === 'boolean') {
            return raw
                ? this._transloco.translate('smartEnrollProjects.recordDetail.boolYes')
                : this._transloco.translate('smartEnrollProjects.recordDetail.boolNo');
        }
        const s = String(raw);
        if (/Percentage$/i.test(key) && s !== '' && !Number.isNaN(Number(s))) {
            return `${s}%`;
        }
        const isDateKey =
            /At$/i.test(key) || key === 'dateOfBirth' || key === 'birthDate' || key === 'documentExpirationDate';
        if (isDateKey) {
            const dt = DateTime.fromISO(s);
            if (dt.isValid) return dt.toFormat('MMM dd, yyyy HH:mm');
        }
        return s;
    }

    sanitizeBase64(data: string): SafeUrl {
        const cleaned = (data || '').replace(/^data:.*;base64,/, '');
        return this._sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${cleaned}`);
    }

    trustHttpUrl(url: string | undefined | null): SafeUrl | string {
        if (!url) return '';
        return this._sanitizer.bypassSecurityTrustUrl(url);
    }

    /**
     * IdentityImage populates use `base64` (client-panel); some paths may expose `url`.
     * Falls back to `biometricValidation.face` when top-level `face` is missing.
     */
    enrollmentSelfieFace(r: AppRegistrationDetail | null): { base64?: string; url?: string } | null {
        return pickEnrollmentFaceMedia(r);
    }

    hasEnrollmentSelfie(r: AppRegistrationDetail | null): boolean {
        const f = this.enrollmentSelfieFace(r);
        return !!(f && (f.base64 || f.url));
    }

    enrollmentSelfieSrc(r: AppRegistrationDetail | null): SafeUrl | string {
        const f = this.enrollmentSelfieFace(r);
        if (!f) return '';
        if (f.base64) return this.sanitizeBase64(f.base64);
        if (f.url) return this.trustHttpUrl(f.url);
        return '';
    }

    hasDocumentFace(r: AppRegistrationDetail | null): boolean {
        const df = r?.documentFace as { base64?: string; url?: string } | null | undefined;
        return !!(df && (df.base64 || df.url));
    }

    documentFaceSrc(r: AppRegistrationDetail | null): SafeUrl | string {
        const df = r?.documentFace as { base64?: string; url?: string } | null | undefined;
        if (!df) return '';
        if (df.base64) return this.sanitizeBase64(df.base64);
        if (df.url) return this.trustHttpUrl(df.url);
        return '';
    }

    showNameMatch(): boolean {
        return showNameVerificationSection(this.project(), this.record());
    }

    /**
     * Name-match metrics for one source — same split as client-panel
     * (`documentValidation` = gov vs OCR/scan, `informationValidation` = gov vs form).
     */
    nameMatchColumn(
        r: AppRegistrationDetail | null,
        source: 'document' | 'information',
    ): {
        firstNameMatchPercentage: number | null;
        lastNameMatchPercentage: number | null;
        fullNameMatchPercentage: number | null;
        namesMatch: boolean | null;
    } {
        const obj =
            source === 'document'
                ? (r?.documentValidation as Record<string, unknown> | undefined)
                : (r?.informationValidation as Record<string, unknown> | undefined);

        const pickNum = (k: string): number | null => {
            if (!obj || !Object.prototype.hasOwnProperty.call(obj, k)) return null;
            const x = obj[k];
            if (x === undefined || x === null || x === '') return null;
            const n = Number(x);
            return Number.isFinite(n) ? n : null;
        };

        const pickBool = (k: string): boolean | null => {
            if (!obj || !Object.prototype.hasOwnProperty.call(obj, k)) return null;
            const raw = obj[k];
            if (raw === undefined || raw === null || raw === '') return null;
            if (typeof raw === 'boolean') return raw;
            if (raw === 'true') return true;
            if (raw === 'false') return false;
            return null;
        };

        return {
            firstNameMatchPercentage: pickNum('firstNameMatchPercentage'),
            lastNameMatchPercentage: pickNum('lastNameMatchPercentage'),
            fullNameMatchPercentage: pickNum('fullNameMatchPercentage'),
            namesMatch: pickBool('namesMatch'),
        };
    }

    /** True if this source has any name-match field (used to show a sub-column without the flow flag) */
    nameMatchColumnHasData(column: {
        firstNameMatchPercentage: number | null;
        lastNameMatchPercentage: number | null;
        fullNameMatchPercentage: number | null;
        namesMatch: boolean | null;
    }): boolean {
        return (
            column.firstNameMatchPercentage != null ||
            column.lastNameMatchPercentage != null ||
            column.fullNameMatchPercentage != null ||
            column.namesMatch != null
        );
    }

    /** When the flow enables name verification, show full grid (client-panel); else only if a column has data */
    showNameMatchPctRow(value: number | null): boolean {
        return value != null || this.showNameMatch();
    }

    /** Percent label: value, em dash when flow expects row but value missing, empty when no row */
    formatNameMatchPercent(value: number | null): string {
        if (value != null && Number.isFinite(value)) return `${value}%`;
        return this.showNameMatch() ? '—' : '';
    }

    /** Name match card: flow flag (client-panel) or snapshot on either column */
    showNameMatchCard(): boolean {
        if (this.showNameMatch()) return true;
        const r = this.record();
        const docCol = this.nameMatchColumn(r, 'document');
        const formCol = this.nameMatchColumn(r, 'information');
        return this.nameMatchColumnHasData(docCol) || this.nameMatchColumnHasData(formCol);
    }

    manualReasons(): ManualVerificationReason[] {
        return buildManualVerificationReasons(this.record());
    }

    stepIcon(step: StepId): string {
        const s = this.stepState(step);
        if (s === 'ok') return 'check_circle';
        if (s === 'error') return 'error';
        if (s === 'warn') return 'warning';
        return 'radio_button_unchecked';
    }

    stepState(step: StepId): StepState {
        const r = this.record();
        if (!r) return 'pending';

        switch (step) {
            case 'information':
                return r.informationValidation ? 'ok' : 'pending';
            case 'email': {
                if (!r.email && !r.emailValidation) return 'pending';
                const st = (r.emailValidation as { status?: string } | undefined)?.status;
                return st === 'validated' ? 'ok' : r.email || r.emailValidation ? 'warn' : 'pending';
            }
            case 'phone': {
                if (!r.phone && !r.phoneValidation) return 'pending';
                const st = (r.phoneValidation as { status?: string } | undefined)?.status;
                return st === 'validated' ? 'ok' : r.phone || r.phoneValidation ? 'warn' : 'pending';
            }
            case 'documents': {
                const failed = r.failedDocumentValidations?.length ?? 0;
                if (failed > 0) return 'error';
                return r.documentValidation ? 'ok' : 'pending';
            }
            case 'biometrics': {
                const failedB = r.failedBiometricValidations?.length ?? 0;
                if (failedB > 0) return 'error';
                if (!r.biometricValidation) return 'pending';
                return this.hasEnrollmentSelfie(r) ? 'ok' : 'warn';
            }
            case 'compare': {
                const cmp = r.compareFaceVerification as { result?: { score?: number } } | null | undefined;
                if (cmp?.result?.score != null || this.showNameMatchCard()) return 'ok';
                return 'pending';
            }
            case 'verdict': {
                const st = r.status || '';
                if (st === 'FAILED') return 'error';
                if (st === 'NEEDS_MANUAL_VERIFICATION') return 'warn';
                if (st === 'COMPLETED' || st === 'COMPLETED_WITHOUT_KYC') return 'ok';
                return 'pending';
            }
            default:
                return 'pending';
        }
    }

    statusPillClass(status?: string): string {
        switch (status) {
            case 'COMPLETED':
                return 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200';
            case 'COMPLETED_WITHOUT_KYC':
                return 'bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200';
            case 'FAILED':
                return 'bg-red-100 text-red-900 dark:bg-red-950/50 dark:text-red-200';
            case 'NEEDS_MANUAL_VERIFICATION':
                return 'bg-orange-100 text-orange-900 dark:bg-orange-950/50 dark:text-orange-200';
            default:
                return 'bg-stone-200 text-stone-800 dark:bg-gray-800 dark:text-stone-200';
        }
    }

    verdictTitleKey(status?: string): string {
        const base = 'smartEnrollProjects.recordDetail.verdict.';
        switch (status) {
            case 'COMPLETED':
                return `${base}completedTitle`;
            case 'COMPLETED_WITHOUT_KYC':
                return `${base}completedNoKycTitle`;
            case 'FAILED':
                return `${base}failedTitle`;
            case 'NEEDS_MANUAL_VERIFICATION':
                return `${base}manualTitle`;
            default:
                return `${base}inProgressTitle`;
        }
    }

    verdictSubtitleKey(status?: string): string {
        const base = 'smartEnrollProjects.recordDetail.verdict.';
        switch (status) {
            case 'COMPLETED':
                return `${base}completedSubtitle`;
            case 'COMPLETED_WITHOUT_KYC':
                return `${base}completedNoKycSubtitle`;
            case 'FAILED':
                return `${base}failedSubtitle`;
            case 'NEEDS_MANUAL_VERIFICATION':
                return `${base}manualSubtitle`;
            default:
                return `${base}inProgressSubtitle`;
        }
    }

    verdictPanelClass(status?: string): string {
        switch (status) {
            case 'COMPLETED':
                return 'record-verdict--ok';
            case 'COMPLETED_WITHOUT_KYC':
                return 'record-verdict--warn';
            case 'FAILED':
                return 'record-verdict--error';
            case 'NEEDS_MANUAL_VERIFICATION':
                return 'record-verdict--manual';
            default:
                return 'record-verdict--pending';
        }
    }

    resumeContactRows(r: AppRegistrationDetail | null): { key: 'email' | 'phone'; value: string; validated: boolean }[] {
        if (!r) return [];
        const rows: { key: 'email' | 'phone'; value: string; validated: boolean }[] = [];
        const iv = r.informationValidation as Record<string, unknown> | null | undefined;

        const email =
            r.email ??
            (iv && typeof iv['email'] === 'string' ? (iv['email'] as string) : undefined) ??
            (r.emailValidation as { email?: string } | undefined)?.email;
        if (email) {
            rows.push({
                key: 'email',
                value: email,
                validated: (r.emailValidation as { status?: string } | undefined)?.status === 'validated',
            });
        }

        const pv = r.phoneValidation as { phone?: string; countryCode?: string; status?: string } | undefined;
        const rawPhone =
            r.phone ??
            (iv && typeof iv['phone'] === 'string' ? (iv['phone'] as string) : undefined) ??
            pv?.phone;
        if (rawPhone) {
            const cc = pv?.countryCode ?? (iv && typeof iv['countryCode'] === 'string' ? (iv['countryCode'] as string) : '');
            const prettyPhone = cc ? `${cc} ${rawPhone}` : rawPhone;
            rows.push({
                key: 'phone',
                value: prettyPhone,
                validated: pv?.status === 'validated',
            });
        }

        return rows;
    }

    resumePersonalRows(r: AppRegistrationDetail | null): { key: string; value: string }[] {
        return this.informationRows(r).filter((row) => !RESUME_PERSONAL_EXCLUDE.has(row.key));
    }

    /**
     * Up to three concise identity facts shown under the name (DOB, gender, nationality...).
     * Drawn from `informationValidation`, formatted using the same helpers as the rest of the resume.
     */
    resumeFacts(r: AppRegistrationDetail | null): string[] {
        const iv = r?.informationValidation as Record<string, unknown> | null | undefined;
        if (!iv) return [];
        const facts: string[] = [];
        for (const key of RESUME_FACT_KEYS) {
            if (facts.length >= 3) break;
            const raw = iv[key];
            if (raw == null || raw === '' || typeof raw === 'object') continue;
            const formatted = this._formatInformationValue(key, raw);
            if (!formatted) continue;
            if (key === 'dateOfBirth' || key === 'birthDate') {
                facts.push(`DOB ${formatted.split(' ')[0]}`);
            } else {
                facts.push(formatted);
            }
        }
        return facts;
    }

    /**
     * All OCR display keys (the same `cleanOcrExtraction` order the live UI uses), minus the
     * name-related fields that are already shown above as the extracted name.
     */
    resumeDocumentFields(): { key: string; value: string }[] {
        const ocr = this.ocrData();
        const keys = this.ocrDisplayKeys();
        if (!ocr || keys.length === 0) return [];
        const rows: { key: string; value: string }[] = [];
        for (const key of keys) {
            if (RESUME_DOCUMENT_OCR_EXCLUDE.has(key)) continue;
            const raw = ocr[key];
            if (raw == null || raw === '') continue;
            rows.push({ key, value: String(raw) });
        }
        return rows;
    }

    resumeDocumentFullName(): string {
        const ocr = this.ocrData();
        if (!ocr) return '';
        const first = typeof ocr['First Name'] === 'string' ? (ocr['First Name'] as string) : '';
        const last = typeof ocr['Last Name'] === 'string' ? (ocr['Last Name'] as string) : '';
        const combined = `${first} ${last}`.trim();
        if (combined) return combined;
        const full = typeof ocr['Full Name'] === 'string' ? (ocr['Full Name'] as string) : '';
        return full;
    }

    documentFrontSrc(r: AppRegistrationDetail | null): SafeUrl | string {
        const dv = r?.documentValidation as { url?: string } | null | undefined;
        return dv?.url ? this.trustHttpUrl(dv.url) : '';
    }

    documentBackSrc(r: AppRegistrationDetail | null): SafeUrl | string {
        const dv = r?.documentValidation as { backUrl?: string } | null | undefined;
        return dv?.backUrl ? this.trustHttpUrl(dv.backUrl) : '';
    }

    hasDocumentScans(r: AppRegistrationDetail | null): boolean {
        const dv = r?.documentValidation as { url?: string; backUrl?: string } | null | undefined;
        return !!(dv?.url || dv?.backUrl) || this.hasDocumentFace(r);
    }

    printedOn(): string {
        return DateTime.now().toFormat('MMM dd, yyyy HH:mm');
    }

    /**
     * CSS variables driven by `project.branding`. Falls back to neutral defaults if a token is missing
     * or the color string is invalid. Returned as a Record so Angular's `[style]` binding applies it.
     */
    brandingVars(): Record<string, string> {
        const project = this.project();
        const branding = project?.branding ?? {};
        const out: Record<string, string> = {};
        const safeColor = (value?: string): string | null => {
            if (!value || typeof value !== 'string') return null;
            const trimmed = value.trim();
            if (!trimmed || /[<>"']/.test(trimmed)) return null;
            return trimmed;
        };
        const primary = safeColor(branding.bgColor) || safeColor(branding.titleColor);
        if (primary) out['--resume-primary'] = primary;
        const ink = safeColor(branding.titleColor);
        if (ink) out['--resume-ink'] = ink;
        return out;
    }

    /**
     * Logo URL or data-uri suitable for an `<img src>`. Returns empty string when absent.
     */
    projectLogo(): string {
        const project = this.project();
        const logo = project?.branding?.logo;
        if (!logo || typeof logo !== 'string') return '';
        const trimmed = logo.trim();
        if (!trimmed) return '';
        if (trimmed.startsWith('http') || trimmed.startsWith('data:')) return trimmed;
        return `data:image/png;base64,${trimmed.replace(/^data:.*;base64,/, '')}`;
    }

    compareScore(): number {
        const r = this.record();
        const score = (r?.compareFaceVerification as { result?: { score?: number } } | undefined)?.result?.score;
        return scoreToPercent(normalizeUnitScore(score));
    }

    compareMinScorePercent(): number | null {
        return compareMinScoreDisplayPercent(this.record());
    }

    livenessDisplayPercent(): number {
        const r = this.record();
        const fromPerson = (r?.person as { livenessScore?: number } | undefined)?.livenessScore;
        const fromBio = (r?.biometricValidation as { livenessScore?: number } | undefined)?.livenessScore;
        const v = fromPerson ?? fromBio;
        return v != null ? scoreToPercent(normalizeUnitScore(v)) : 0;
    }

    livenessMinScorePercent(): number | null {
        return livenessMinScoreDisplayPercent(this.record());
    }

    private _initOcr(r: AppRegistrationDetail): void {
        const dv = r.documentValidation as { OCRExtraction?: Record<string, unknown> } | null | undefined;
        const raw = dv?.OCRExtraction;
        if (!raw || typeof raw !== 'object') {
            this.ocrData.set({});
            this.ocrDisplayKeys.set([]);
            return;
        }
        const copy = { ...raw };
        const keys = cleanOcrExtraction(copy);
        this.ocrData.set(copy);
        this.ocrDisplayKeys.set(keys);
    }

    private _setupScrollSpy(): void {
        this._observer?.disconnect();

        this._observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                const id = visible[0]?.target?.id;
                if (!id?.startsWith('step-')) return;
                const step = id.replace('step-', '') as StepId;
                if (STEP_ORDER.includes(step)) {
                    this.activeStep.set(step);
                    this._cdr.markForCheck();
                }
            },
            { root: null, rootMargin: '-12% 0px -60% 0px', threshold: [0, 0.1, 0.25, 0.5, 1] }
        );

        STEP_ORDER.forEach((step) => {
            const el = document.getElementById(`step-${step}`);
            if (el) this._observer?.observe(el);
        });
    }
}
