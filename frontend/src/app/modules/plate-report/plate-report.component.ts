import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthService } from 'app/core/auth/auth.service';
import { CountryDialCode, CountryService } from 'app/core/services/country.service';
import { SessionService } from 'app/core/services/session.service';
import { VerifikApiService } from 'app/core/verifik/verifik-api.service';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';
import { PaymentService } from '../add-credits/services/payment.service';
import { CreditsService } from '../add-credits/services/credits.service';
import { extractClientSettingsPayload, invoiceBillingDetailsComplete } from '../settings/utils/invoice-billing-complete';
import { BatchBrowserRunnerService } from '../smart-batch/batch-browser-runner.service';
import {
    BatchConfiguration,
    SmartBatch,
    SmartBatchEstimate,
    SmartBatchService,
} from '../smart-batch/smart-batch.service';
import { SmartReportService } from '../smart-batch/smart-report.service';
import { defaultSystemKey } from '../smart-batch/visita-guide/visita-guide.catalog';
import { SubscriptionService } from '../subscription-plans/subscription.service';
import { clearPlateReportDraft, readPlateReportDraft, writePlateReportDraft } from './plate-report.draft';
import {
    PlateReportChannel,
    isValidEmail,
    isValidPersonName,
    isValidPhoneDigits,
    isValidPlate,
    nationalPhone,
    normalizePersonName,
    normalizePlate,
} from './plate-report.validation';

type PlateReportPhase = 'form' | 'working' | 'payment' | 'ready';
type WorkingStep = 'account' | 'clone' | 'run' | 'pdf';

const VEHICLE_PRESET = defaultSystemKey('vehicle', 'co');
const POLL_MS = 2500;
const POLL_LIMIT_MS = 4 * 60 * 1000;

@Component({
    selector: 'plate-report',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './plate-report.component.html',
    styleUrl: './plate-report.component.scss',
})
export class PlateReportComponent implements OnInit {
    private _auth = inject(AuthService);
    private _verifik = inject(VerifikApiService);
    private _session = inject(SessionService);
    private _users = inject(UserService);
    private _countries = inject(CountryService);
    private _batches = inject(SmartBatchService);
    private _reports = inject(SmartReportService);
    private _runner = inject(BatchBrowserRunnerService);
    private _credits = inject(CreditsService);
    private _payment = inject(PaymentService);
    private _billing = inject(SubscriptionService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _transloco = inject(TranslocoService);

    private _left = false;
    private _configId = '';
    private _batchId = '';
    private _templateId = '';
    private _reportId = '';
    private _pdfBase64 = '';
    private _engine: 'pdfkit' | 'puppeteer' = 'puppeteer';
    private _paid = false;

    readonly countries: CountryDialCode[] = this._countries.countryDialCodes;
    readonly signedIn = signal(false);
    readonly phase = signal<PlateReportPhase>('form');
    readonly workingStep = signal<WorkingStep>('clone');
    readonly busy = signal(false);
    readonly channel = signal<PlateReportChannel>('email');
    readonly plate = signal('');
    readonly personName = signal('');
    readonly phone = signal('');
    readonly contact = signal('');
    readonly countryCode = signal('co');
    readonly fieldError = signal<string | null>(null);
    readonly errorKey = signal<string | null>(null);
    readonly errorDetail = signal('');
    readonly estimate = signal<SmartBatchEstimate | null>(null);
    readonly partial = signal(false);
    readonly emailSent = signal(false);
    readonly pendingNotice = signal(false);

    constructor() {
        inject(DestroyRef).onDestroy(() => {
            this._left = true;
        });
    }

    ngOnInit(): void {
        this.signedIn.set(this._session.isTokenValid());
        const draft = readPlateReportDraft();
        if (draft) {
            this.plate.set(draft.plate);
            if (draft.name) this.personName.set(draft.name);
            this.channel.set(draft.channel);
            if (draft.phone) {
                this.phone.set(draft.phone);
                this.contact.set(draft.channel === 'email' ? draft.contact : '');
            } else if (draft.channel === 'phone') {
                this.phone.set(draft.contact);
            } else {
                this.contact.set(draft.contact);
            }
            if (draft.countryCode) this.countryCode.set(draft.countryCode);
            this._configId = draft.configId ?? '';
            this._batchId = draft.batchId ?? '';
            this._templateId = draft.templateId ?? '';
            this._paid = draft.paid ?? false;
            this.pendingNotice.set(Boolean(draft.batchId));
        }

        const resume = this._route.snapshot.queryParamMap.get('continuar') === '1';
        const boldOrderId = this._route.snapshot.queryParamMap.get('bold-order-id');

        if (boldOrderId) {
            void this._handleBoldReturn(boldOrderId);
        } else if (resume && draft?.batchId && this.signedIn()) {
            void this.continueFromDraft();
        }
    }

    private async _handleBoldReturn(orderId: string): Promise<void> {
        this.phase.set('working');
        this.busy.set(true);
        try {
            const result = await firstValueFrom(this._payment.confirmBoldPurchase(orderId));
            const status = result?.data?.transaction?.status;
            if (status === 'approved' || result?.data?.finalized) {
                this._paid = true;
                this._remember();
                await firstValueFrom(this._auth.refreshSession());
                await this.startReport();
                return;
            }
            if (result?.data?.pending) {
                this.errorKey.set('plateReport.paymentPending');
                this.phase.set('payment');
                return;
            }
            this.errorKey.set('plateReport.paymentPending');
            this.phase.set('payment');
        } catch {
            this.phase.set('payment');
        } finally {
            this.busy.set(false);
        }
    }

    selectedCountry(): CountryDialCode {
        return this.countries.find((country) => country.countryCode === this.countryCode()) ?? this.countries[0];
    }

    async submitForm(): Promise<void> {
        if (this.busy()) return;
        this.fieldError.set(null);
        this.errorKey.set(null);

        const personName = normalizePersonName(this.personName());
        this.personName.set(personName);
        if (personName && !isValidPersonName(personName)) {
            this.fieldError.set('plateReport.nameInvalid');
            return;
        }

        const plate = normalizePlate(this.plate());
        this.plate.set(plate);
        if (!isValidPlate(plate)) {
            this.fieldError.set('plateReport.plateInvalid');
            return;
        }

        const country = this.selectedCountry();
        const rawPhone = this.phone().trim();
        const phone = nationalPhone(rawPhone, country.dialCode);
        this.phone.set(phone);
        if (!isValidPhoneDigits(phone)) {
            this.fieldError.set('plateReport.phoneInvalid');
            return;
        }

        this.channel.set('phone');
        this._remember();

        // If already paid, proceed directly to run report; otherwise create account and show payment first
        if (this._paid) {
            await this.startReport();
        } else {
            await this._prepareAndShowPayment();
        }
    }

    private async _prepareAndShowPayment(): Promise<void> {
        this.phase.set('working');
        this.busy.set(true);
        this.errorKey.set(null);
        try {
            await this._ensureBasicAccount();
            this.phase.set('payment');
        } catch (error) {
            this._showError('plateReport.genericError', error);
            this.phase.set('form');
        } finally {
            this.busy.set(false);
        }
    }

    statusKey(): string {
        const step = this.workingStep();
        if (step === 'account') return 'plateReport.workingAccount';
        if (step === 'run') return 'plateReport.workingRun';
        if (step === 'pdf') return 'plateReport.workingPdf';
        return 'plateReport.workingClone';
    }

    async pay(): Promise<void> {
        if (this.busy()) return;
        this.busy.set(true);
        this.errorKey.set(null);
        this._remember('after-payment');
        try {
            // Amount in USD for the Bold purchase (approx $6 USD ~ 24.000 COP) or COP directly
            // The backend /v2/credits/bold/checkout handles currency: 'COP' or amount in USD
            const response = await firstValueFrom(
                this._payment.createBoldCheckout({
                    amount: 6, // 6 USD ~ 24,000 COP
                    currency: 'COP',
                    origin: 'smart_agent',
                })
            );

            const config = response.data;
            if (config.mode === 'redirect') {
                this._payment.redirectToBoldCheckout(config);
                return;
            }

            await this._payment.loadBoldCheckoutScript();
            this._payment.openBoldCheckout(config);
            this.errorKey.set('plateReport.paymentPending');
        } catch (error) {
            console.error('Failed to open Bold checkout:', error);
            this._showError('plateReport.genericError', error);
        } finally {
            this.busy.set(false);
        }
    }

    async continueFromDraft(): Promise<void> {
        if (!this._batchId || !this._session.isTokenValid()) {
            this.phase.set('form');
            return;
        }
        await this.startReport();
    }

    async download(): Promise<void> {
        if (!this._pdfBase64) return;
        const blob = this._pdfBlob(this._pdfBase64);
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `reporte-${this.plate() || 'vehiculo'}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
    }

    async sendEmail(): Promise<void> {
        if (this.busy() || !this._reportId) return;
        const email = this.deliveryEmail();
        if (!email) {
            this.fieldError.set('plateReport.emailInvalid');
            return;
        }
        this.fieldError.set(null);
        this.busy.set(true);
        this.emailSent.set(false);
        try {
            const language = this._transloco.getActiveLang().startsWith('es') ? 'es' : 'en';
            const response = await firstValueFrom(
                this._reports.sendReportEmail(this._reportId, {
                    recipients: [email],
                    language,
                    rowIndex: 0,
                    subject: `Reporte vehicular ${this.plate()}`,
                    ...(this._pdfBase64 ? { pdfBase64: this._pdfBase64 } : {}),
                })
            );
            this.emailSent.set(Boolean(response.success));
            if (!response.success) this.errorKey.set('plateReport.emailFailed');
        } catch (error) {
            this._showError('plateReport.emailFailed', error);
        } finally {
            this.busy.set(false);
        }
    }

    reset(): void {
        clearPlateReportDraft();
        this.plate.set('');
        this.personName.set('');
        this.phone.set('');
        this.contact.set('');
        this._configId = '';
        this._batchId = '';
        this._templateId = '';
        this._reportId = '';
        this._pdfBase64 = '';
        this.estimate.set(null);
        this.partial.set(false);
        this.emailSent.set(false);
        this.pendingNotice.set(false);
        this.errorKey.set(null);
        this.fieldError.set(null);
        this.phase.set('form');
    }

    deliveryEmail(): string {
        const email = this.contact().trim();
        return isValidEmail(email) ? email : '';
    }

    private async startReport(): Promise<void> {
        if (this._left) return;
        this.phase.set('working');
        this.busy.set(true);
        this.errorKey.set(null);
        this.errorDetail.set('');
        this.pendingNotice.set(false);

        try {
            await this._ensureBasicAccount();

            if (!this._configId || !this._templateId) {
                this.workingStep.set('clone');
                const cloned = await firstValueFrom(this._batches.cloneSystemPreset(VEHICLE_PRESET));
                this._configId = cloned.data.batchConfiguration._id ?? cloned.data.batchConfiguration.id ?? '';
                this._templateId = environment.plateReportTemplateId || cloned.data.template?._id || '';
                this._engine = cloned.data.template?.pdfEngine === 'pdfkit' ? 'pdfkit' : 'puppeteer';
                if (!this._configId) throw new Error('missing config');
            }

            if (!this._batchId) {
                const created = await firstValueFrom(
                    this._batches.createSmartBatch({
                        batchConfiguration: this._configId,
                        name: `Reporte ${this.plate()}`,
                        rows: [{ plate: this.plate() }],
                    })
                );
                this._batchId = created.data._id ?? '';
                if (!this._batchId) throw new Error('missing batch');
            }

            this._remember();
            const existing = await firstValueFrom(this._batches.getSmartBatch(this._batchId));
            if (this._isTerminal(existing.data.status) && this._hasUsableRow(existing.data)) {
                await this._publish(existing.data);
                return;
            }

            this.workingStep.set('run');
            const quote = await firstValueFrom(this._batches.getBatchEstimate(this._batchId));
            this.estimate.set(quote.data);
            if (!quote.data.sufficientCredits && existing.data.status !== 'processing') {
                this._remember('after-payment');
                this.phase.set('payment');
                return;
            }

            if (!this._isTerminal(existing.data.status)) {
                if (existing.data.status !== 'processing') {
                    await firstValueFrom(this._batches.startSmartBatch(this._batchId));
                }
                const finished = await this._waitUntilDone();
                if (!this._hasUsableRow(finished)) {
                    this.errorKey.set('plateReport.failed');
                    this.phase.set('form');
                    return;
                }
                await this._publish(finished);
                return;
            }

            this.errorKey.set('plateReport.failed');
            this.phase.set('form');
        } catch (error) {
            const accountMessage = this._errorMessage(error);
            if (accountMessage === 'account' || accountMessage === 'Project_not_allowed') {
                this.errorKey.set('plateReport.accountFailed');
                this.errorDetail.set('');
                this.phase.set('form');
                return;
            }
            if (accountMessage === 'signUpForm_validation_not_passed') {
                this.errorKey.set('plateReport.verificationRequired');
                this.errorDetail.set('');
                this.phase.set('form');
                return;
            }
            const code = this._errorCode(error);
            if (code === 'insufficient_credits' || /credit/i.test(this._errorMessage(error))) {
                this._remember('after-payment');
                this.phase.set('payment');
                return;
            }
            this._showError('plateReport.genericError', error);
            this.phase.set('form');
        } finally {
            this.busy.set(false);
        }
    }

    private async _waitUntilDone(): Promise<SmartBatch> {
        const started = Date.now();
        let last: SmartBatch | null = null;

        const config = await this._configuration();
        const runInBrowser = config?.executor === 'browser';

        while (!this._left && Date.now() - started < POLL_LIMIT_MS) {
            const progress = await firstValueFrom(this._batches.getBatchProgress(this._batchId));
            if (runInBrowser && progress.data.status === 'processing' && !this._runner.running()) {
                const current = await firstValueFrom(this._batches.getSmartBatch(this._batchId));
                await this._runner.runBatch(current.data, config?.steps ?? [], () => undefined);
            }

            const loaded = await firstValueFrom(this._batches.getSmartBatch(this._batchId));
            last = loaded.data;
            if (this._isTerminal(last.status)) return last;
            await this._sleep(POLL_MS);
        }

        if (last && this._isTerminal(last.status)) return last;
        throw new Error('timeout');
    }

    private async _publish(batch: SmartBatch): Promise<void> {
        this.workingStep.set('pdf');
        this.partial.set((batch.partialRows ?? 0) > 0 || batch.rows?.some((row) => row.status === 'partial') === true);
        const templateId = await this._resolveTemplateId();
        const report = await firstValueFrom(
            this._reports.createReport({
                template: templateId,
                smartBatch: this._batchId,
                name: `Reporte ${this.plate()}`,
            })
        );
        this._reportId = report._id ?? '';
        const generated = await firstValueFrom(
            this._reports.generateReport(this._reportId, {
                engine: this._engine,
                rowIndex: 0,
            })
        );
        this._pdfBase64 = generated.pdf?.buffer ?? '';
        if (!this._pdfBase64 && this._reportId) {
            const blob = await firstValueFrom(this._reports.downloadReport(this._reportId, 0));
            this._pdfBase64 = await this._blobToBase64(blob);
        }
        if (!this._pdfBase64) throw new Error('pdf');
        clearPlateReportDraft();
        this.phase.set('ready');
    }

    private async _resolveTemplateId(): Promise<string> {
        if (this._templateId) return this._templateId;
        if (environment.plateReportTemplateId) {
            this._templateId = environment.plateReportTemplateId;
            return this._templateId;
        }
        const config = await this._configuration();
        const preferred = config?.preferredReportTemplate;
        const preferredId = typeof preferred === 'string' ? preferred : preferred?._id;
        if (preferredId) {
            this._templateId = preferredId;
            return preferredId;
        }
        const templates = await firstValueFrom(this._reports.getTemplates(this._configId));
        const template = templates[0];
        if (!template?._id) throw new Error('missing template');
        this._templateId = template._id;
        this._engine = template.pdfEngine === 'pdfkit' ? 'pdfkit' : 'puppeteer';
        return template._id;
    }

    private async _configuration(): Promise<BatchConfiguration | null> {
        if (!this._configId) return null;
        const response = await firstValueFrom(this._batches.getConfiguration(this._configId));
        return response.data;
    }

    /**
     * Opens the current session, or creates a basic account from the name, phone, and email.
     * The contact is stored as given. This step does not send or require a verification code.
     */
    private async _ensureBasicAccount(): Promise<void> {
        if (this._session.isTokenValid()) {
            this.signedIn.set(true);
            try {
                await firstValueFrom(this._users.updateClient({ name: this.personName() }));
            } catch {
                // The lookup can continue with the name captured on this form.
            }
            return;
        }

        this.workingStep.set('account');
        const country = this.selectedCountry();
        const rawPhone = this.phone().trim();
        const phone = rawPhone ? nationalPhone(rawPhone, country.dialCode) : '';
        const email = this.contact().trim();

        const registrationPayload: {
            projectFlow: string;
            fullName?: string;
            email?: string;
            phone?: string;
            countryCode?: string;
        } = {
            projectFlow: await this._onboardingFlowId(),
            fullName: this.personName() || undefined,
            ...(email ? { email } : {}),
            ...(phone ? { phone, countryCode: country.dialCode } : {}),
        };

        const created = await firstValueFrom(
            this._verifik.createAppRegistration(environment.plateReportProjectId, registrationPayload)
        );
        const data = created?.data ?? created;
        const registrationToken = data?.token || data?.accessToken;
        const registrationId = data?.appRegistration?._id || data?.appRegistration?.id;
        if (!registrationToken || !registrationId) throw new Error('account');

        const synced = await firstValueFrom(
            this._verifik.syncAppRegistration(registrationToken, registrationId, {
                step: 'skipKYC',
                status: 'COMPLETED_WITHOUT_KYC',
            })
        );
        const completedToken = synced?.data?.token || synced?.token;
        if (!completedToken) throw new Error('account');

        const login = await firstValueFrom(this._auth.simulateProjectLogin(completedToken, 'onboarding'));
        const sessionToken = login?.data?.accessToken || login?.accessToken || completedToken;

        this._auth.accessToken = sessionToken;
        try {
            await firstValueFrom(this._users.get());
        } catch {
            // The basic account exists even when the profile endpoint is not ready yet.
        }
        this.signedIn.set(this._session.isTokenValid());
    }

    /** App registration only accepts the onboarding flow, not the login flow. */
    private async _onboardingFlowId(): Promise<string> {
        try {
            const project = await firstValueFrom(this._verifik.getProject(environment.plateReportProjectId));
            const flows = project?.data?.projectFlows ?? project?.projectFlows ?? [];
            const onboarding = flows.find((flow: { type?: string; status?: string }) => flow.type === 'onboarding' && flow.status === 'active');
            if (onboarding?._id) return onboarding._id;
        } catch {
            // Fall back to the configured login flow. The API still resolves the onboarding flow.
        }
        return environment.plateReportFlowId;
    }

    private _remember(resume?: 'after-payment'): void {
        writePlateReportDraft({
            plate: this.plate(),
            name: this.personName(),
            channel: this.channel(),
            contact: this.contact().trim(),
            phone: this.phone().trim(),
            countryCode: this.countryCode(),
            configId: this._configId || undefined,
            batchId: this._batchId || undefined,
            templateId: this._templateId || undefined,
            paid: this._paid,
            resume,
        });
    }

    private _hasUsableRow(batch: SmartBatch): boolean {
        return (batch.rows ?? []).some(
            (row) => row.status === 'completed' || row.status === 'partial' || (row.results && Object.keys(row.results).length > 0)
        );
    }

    private _isTerminal(status: SmartBatch['status']): boolean {
        return status === 'completed' || status === 'failed' || status === 'cancelled';
    }

    private _showError(key: string, error: unknown): void {
        if (this._errorMessage(error) === 'timeout') {
            this.errorKey.set('plateReport.timeout');
            this.errorDetail.set('');
            return;
        }
        this.errorKey.set(key);
        this.errorDetail.set(this._errorMessage(error));
    }

    private _errorMessage(error: unknown): string {
        const body = (error as { error?: { message?: string }; message?: string })?.error;
        return body?.message || (error as { message?: string })?.message || '';
    }

    private _errorCode(error: unknown): string {
        return (error as { error?: { code?: string } })?.error?.code ?? '';
    }

    private _pdfBlob(buffer: string): Blob {
        const binary = atob(buffer);
        const bytes = new Uint8Array(binary.length);
        for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
        return new Blob([bytes], { type: 'application/pdf' });
    }

    private async _blobToBase64(blob: Blob): Promise<string> {
        const dataUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result ?? ''));
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(blob);
        });
        const comma = dataUrl.indexOf(',');
        return comma >= 0 ? dataUrl.slice(comma + 1) : '';
    }

    private _sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
