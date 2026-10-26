import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, computed, effect, inject, signal, untracked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthService } from 'app/core/auth/auth.service';
import { CountryDialCode, CountryService } from 'app/core/services/country.service';
import { SessionService } from 'app/core/services/session.service';
import { VerifikApiService } from 'app/core/verifik/verifik-api.service';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';
import { take } from 'rxjs/operators';
import {
    BoldConfirmData,
    BoldCurrency,
    BoldProduct,
    BoldQuote,
    PaymentService,
    PurchasePolicy,
} from '../add-credits/services/payment.service';
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
import { FleetAsset, SmartFleetService, savedReportsOf } from '../smart-fleet/smart-fleet.service';
import {
    clearPlateReportDraft,
    clearSavedPlateReport,
    readPlateReportDraft,
    readSavedPlateReport,
    writePlateReportDraft,
    writeSavedPlateReport,
} from './plate-report.draft';
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
type WorkingStep = 'account' | 'clone' | 'run' | 'pdf' | 'payment';

/** Where the customer stands with the Bold order they came back with. */
type BoldReturnState = 'approved' | 'pending' | 'abandoned' | 'failed' | 'unknown';

/** Same states as add-credits Bold return banner (`addCredits.bold.return.*`). */
type PlateBoldBannerState = BoldReturnState | 'confirming';

/** Currency choices on screen. Only pesos can be charged for now, so USD is shown but not selectable. */
interface CurrencyOption {
    code: BoldCurrency;
    labelKey: string;
    methodsKey: string;
    disabled: boolean;
}

const VEHICLE_PRESET = defaultSystemKey('vehicle', 'co');
const POLL_MS = 2500;
const POLL_LIMIT_MS = 4 * 60 * 1000;

/**
 * The report is a fixed-price product: the API charges its own peso price (35.000 COP), so the amount is
 * never sent from here.
 */
const REPORT_PRODUCT: BoldProduct = 'plate_report';

/** Bold's webhook can lag, and PSE settles in minutes, so the return trip asks a few times. */
const BOLD_CONFIRM_ATTEMPTS = 5;
/** When Bold's redirect URL already says approved, the webhook can still lag a few seconds. */
const BOLD_CONFIRM_ATTEMPTS_APPROVED_HINT = 18;
const BOLD_CONFIRM_RETRY_MS = 3000;
/** Credits can lag the Bold confirm response by a few seconds. */
const POST_PAYMENT_CREDIT_ATTEMPTS = 10;
const POST_PAYMENT_CREDIT_RETRY_MS = 2500;

/** Bold return paths whitelisted on the API (must match {@link PlateReportComponent._boldReturnPath}). */
const BOLD_RETURN_PATHS = ['/reporte-placa', '/informe-vehicular'] as const;
/** Poll while Bold's embedded success screen is open (webhook/confirm can beat the redirect). */
const BOLD_EMBEDDED_POLL_MS = 4000;
const BOLD_EMBEDDED_POLL_MAX = 90;

const CURRENCY_OPTIONS: CurrencyOption[] = [
    {
        code: 'COP',
        labelKey: 'plateReport.currencyCop',
        methodsKey: 'addCredits.purchaseDialog.bold.methodsCop',
        disabled: false,
    },
    {
        code: 'USD',
        labelKey: 'plateReport.currencyUsd',
        methodsKey: 'plateReport.currencyUsdSoon',
        disabled: true,
    },
];

const FLOW_STEPS = [
    { index: 0, labelKey: 'plateReport.stepData' },
    { index: 1, labelKey: 'plateReport.stepPay' },
    { index: 2, labelKey: 'plateReport.stepReport' },
] as const;

const REPORT_TIMELINE = [
    { id: 'clone', labelKey: 'plateReport.timelinePrepare' },
    { id: 'run', labelKey: 'plateReport.timelineSources' },
    { id: 'pdf', labelKey: 'plateReport.timelinePdf' },
] as const;

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
    private _fleet = inject(SmartFleetService);
    private _dialog = inject(MatDialog);
    private _runner = inject(BatchBrowserRunnerService);
    private _credits = inject(CreditsService);
    private _payment = inject(PaymentService);
    private _billing = inject(SubscriptionService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _transloco = inject(TranslocoService);
    private _title = inject(Title);

    readonly brandTitle = environment.plateReportBrandTitle ?? '';

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
    /** The report on screen was already generated earlier, so nothing new was charged. */
    readonly reusedReport = signal(false);
    /** The report reference was stored on the account's vehicle. */
    readonly savedOnAccount = signal(false);
    /** The phone already has an account, so the client is asked to sign in instead of registering again. */
    readonly needsSignIn = signal(false);

    readonly currencyOptions = CURRENCY_OPTIONS;
    readonly flowSteps = FLOW_STEPS;
    readonly reportTimeline = REPORT_TIMELINE;
    /** Charge currency. Pesos are the only one enabled, and the one that unlocks PSE, Nequi and Bancolombia. */
    readonly currency = signal<BoldCurrency>('COP');
    /** Peso price of the report at today's rate; null until the quote resolves. */
    readonly quote = signal<BoldQuote | null>(null);
    readonly quoteLoading = signal(false);
    /** No USD/COP rate is available, and pesos are the only way to pay, so paying has to wait. */
    readonly fxUnavailable = signal(false);
    readonly policy = signal<PurchasePolicy | null>(null);
    /** First purchase from a Colombian account: the API only allows PSE and sends the client to a hosted link. */
    readonly pseOnly = computed(() => this.policy()?.restricted === true);
    /** A Bold order the customer came back with that has not settled yet. */
    readonly awaitingOrder = signal(false);
    /** Payment is settled; the client can generate or download the report without paying again. */
    readonly reportPaid = signal(false);
    /** Bold payment status banner (mirrors `/add-credits`). */
    readonly boldReturnState = signal<PlateBoldBannerState | null>(null);

    readonly totalLabel = computed(() => {
        const quote = this.quote();
        if (!quote || quote.currency !== 'COP') return '';

        return `${new Intl.NumberFormat('es-CO').format(quote.total)} COP`;
    });

    /** 0 datos, 1 pago, 2 reporte. Drives the step indicator above the card. */
    readonly flowStep = computed(() => {
        const phase = this.phase();
        const step = this.workingStep();
        if (phase === 'ready') return 2;
        if (phase === 'payment') return 1;
        if (phase === 'working') {
            if (step === 'account') return 0;
            if (step === 'payment') return 1;
            return 2;
        }
        return 0;
    });

    /** The three lookup beats shown while the PDF is being built. */
    readonly showReportTimeline = computed(() => {
        const step = this.workingStep();
        return this.phase() === 'working' && (step === 'clone' || step === 'run' || step === 'pdf');
    });

    private _orderId = '';
    private _boldReturnHandled = false;
    private _boldCheckoutWatchTimer?: ReturnType<typeof setInterval>;
    private _boldCheckoutPolls = 0;

    constructor() {
        const destroyRef = inject(DestroyRef);
        destroyRef.onDestroy(() => {
            this._left = true;
            this._stopBoldCheckoutWatch();
        });

        // The quote and the purchase policy need the account, which only exists once the payment step shows.
        effect(() => {
            if (this.phase() === 'payment') untracked(() => void this._loadPaymentInfo());
        });
    }

    selectCurrency(option: CurrencyOption): void {
        if (option.disabled || this.busy()) return;

        this.currency.set(option.code);
    }

    private async _loadPaymentInfo(): Promise<void> {
        this.fxUnavailable.set(false);
        this.quoteLoading.set(true);

        try {
            const policy = await firstValueFrom(this._payment.getPurchasePolicy());
            this.policy.set(policy.data ?? null);
        } catch {
            // A failed lookup leaves the default path: the API rejects a forbidden method anyway.
            this.policy.set(null);
        }

        try {
            const quote = await firstValueFrom(this._payment.getBoldProductQuote(REPORT_PRODUCT));
            this.quote.set(quote.data ?? null);
        } catch (error) {
            this.quote.set(null);
            if (this._errorMessage(error).includes('bold_fx_unavailable')) this.fxUnavailable.set(true);
        } finally {
            this.quoteLoading.set(false);
        }
    }

    ngOnInit(): void {
        this._title.setTitle(this._transloco.translate('plateReport.title'));
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
            this.reportPaid.set(this._paid);
            this.pendingNotice.set(Boolean(draft.batchId));
            if (draft.boldOrderId) this._orderId = draft.boldOrderId;
        }

        const resume = this._route.snapshot.queryParamMap.get('continuar') === '1';
        const handleBoldReturnFromQuery = (params: { get: (key: string) => string | null }): void => {
            const boldReturn = this._readBoldReturnQuery(params);
            if (boldReturn) {
                void this._handleBoldReturn(boldReturn.orderId, boldReturn.txHint);
            }
        };

        handleBoldReturnFromQuery(this._route.snapshot.queryParamMap);
        this._route.queryParamMap.pipe(take(1)).subscribe((params) => handleBoldReturnFromQuery(params));

        if (this._boldReturnHandled) {
            // Bold return flow owns the screen until confirm finishes.
        } else if (resume && this.signedIn()) {
            void this.continueAfterPayment();
        } else if (this.signedIn() && (this._paid || draft?.resume === 'after-payment')) {
            if (this._paid) {
                void this.continueAfterPayment();
            } else if (this._orderId) {
                this.phase.set('payment');
                this.awaitingOrder.set(true);
                this.boldReturnState.set('pending');
            } else {
                void this._reconcileOpenPaymentAndContinue();
            }
        }
    }

    /**
     * Bold sends the customer back with `bold-order-id`. Credits are granted by Bold's webhook or by the
     * confirm call, whichever comes first, so the order is asked about a few times before giving up.
     */
    dismissBoldReturnNotice(): void {
        this.boldReturnState.set(null);
        this.errorKey.set(null);
    }

    boldReturnIcon(state: PlateBoldBannerState): string {
        if (state === 'confirming') return 'hourglass_top';
        if (state === 'approved') return 'check_circle';
        if (state === 'pending') return 'schedule';
        if (state === 'abandoned') return 'remove_shopping_cart';
        if (state === 'unknown') return 'help_outline';
        return 'error_outline';
    }

    /** Keeps Bold return URLs on the same public path the customer opened (aliases share one flow). */
    private _boldReturnPath(): string {
        const path = this._router.url.split('?')[0];
        const match = BOLD_RETURN_PATHS.find(
            (prefix) => path === prefix || path.startsWith(`${prefix}/`)
        );

        return match ?? BOLD_RETURN_PATHS[0];
    }

    /**
     * Bold appends `bold-order-id` and often `bold-tx-status=approved` on the return URL
     * (see redirectionUrl in checkout config).
     */
    private _readBoldReturnQuery(
        params: { get: (key: string) => string | null }
    ): { orderId: string; txHint: BoldReturnState | null } | null {
        if (this._boldReturnHandled) return null;

        const orderId = params.get('bold-order-id')?.trim();
        if (!orderId) return null;

        this._boldReturnHandled = true;
        const txHint = this._parseBoldTxStatus(params.get('bold-tx-status'));

        this._orderId = orderId;
        this._remember('after-payment');
        void this._router.navigate([this._boldReturnPath()], { replaceUrl: true, queryParams: {} });

        return { orderId, txHint };
    }

    private _startBoldCheckoutWatch(orderId: string): void {
        this._stopBoldCheckoutWatch();
        this._boldCheckoutPolls = 0;
        this._boldCheckoutWatchTimer = setInterval(() => {
            void this._pollBoldCheckoutOnce(orderId);
        }, BOLD_EMBEDDED_POLL_MS);
    }

    private _stopBoldCheckoutWatch(): void {
        if (this._boldCheckoutWatchTimer) {
            clearInterval(this._boldCheckoutWatchTimer);
            this._boldCheckoutWatchTimer = undefined;
        }
        this._boldCheckoutPolls = 0;
    }

    /** Detects approval while the embedded «Completaste el pago» screen is still open. */
    private async _pollBoldCheckoutOnce(orderId: string): Promise<void> {
        if (this._left || this.busy()) return;
        if (this.phase() === 'ready') {
            this._stopBoldCheckoutWatch();
            return;
        }
        if (this._boldCheckoutPolls >= BOLD_EMBEDDED_POLL_MAX) {
            this._stopBoldCheckoutWatch();
            return;
        }
        this._boldCheckoutPolls += 1;

        const state = await this._confirmBoldOrder(orderId, 'approved');
        if (state === 'approved') {
            await this._handleBoldReturn(orderId, 'approved');
        }
    }

    private _parseBoldTxStatus(raw: string | null): BoldReturnState | null {
        if (!raw) return null;
        const value = raw.trim().toLowerCase();
        if (value === 'approved' || value === 'success' || value === 'paid') return 'approved';
        if (value === 'pending' || value === 'processing') return 'pending';
        if (value === 'failed' || value === 'rejected' || value === 'declined') return 'failed';
        return null;
    }

    private async _handleBoldReturn(orderId: string, txHint: BoldReturnState | null = null): Promise<void> {
        if (this.busy()) return;

        this._stopBoldCheckoutWatch();
        this._orderId = orderId;
        this.awaitingOrder.set(false);
        this.errorKey.set(null);
        this.boldReturnState.set('confirming');
        this.workingStep.set('payment');
        this.phase.set('working');
        this.busy.set(true);
        this._remember('after-payment');

        try {
            let state = await this._confirmBoldOrder(orderId, txHint);

            if (this._left) return;

            if (state === 'pending' && txHint === 'approved') {
                await this._waitForCreditsAfterPayment();
                state = await this._confirmBoldOrder(orderId, txHint);
            }

            if (state === 'approved' || (state === 'pending' && txHint === 'approved')) {
                await this._finishApprovedPayment(state === 'pending');
                return;
            }

            if (state === 'pending') {
                this.awaitingOrder.set(true);
                this.boldReturnState.set('pending');
                this._remember();
                void this._pollBoldOrderUntilSettled(orderId, txHint);
            } else {
                this._orderId = '';
                this.boldReturnState.set(state);
            }
            this.phase.set('payment');
        } catch (error) {
            console.error('[PlateReport] could not finish after the payment', error);
            if (txHint === 'approved') {
                await this._finishApprovedPayment(true);
                return;
            }
            this.boldReturnState.set('unknown');
            this._showError('plateReport.genericError', error);
            this.phase.set('payment');
        } finally {
            this.busy.set(false);
        }
    }

    /** Credits granted; generate the PDF or ask for the plate if the draft was lost. */
    private async _finishApprovedPayment(syncPending = false): Promise<void> {
        this._orderId = '';
        this._paid = true;
        this.reportPaid.set(true);
        this.boldReturnState.set(syncPending ? 'pending' : 'approved');
        this._remember();

        try {
            await firstValueFrom(this._auth.refreshSession());
        } catch {
            // Best-effort; batch may still run on existing token.
        }
        this._credits.refreshBalance();

        if (!normalizePlate(this.plate())) {
            this.phase.set('form');
            this.pendingNotice.set(true);
            this.boldReturnState.set('approved');
            return;
        }

        await this.startReport();
    }

    /** Whether the primary «Pagar» button should show (not while a settled/pending Bold trip is active). */
    canShowPayButton(): boolean {
        if (this.reportPaid()) return false;
        const banner = this.boldReturnState();
        if (!banner) return true;
        return banner === 'failed' || banner === 'abandoned';
    }

    orderIdForCheck(): boolean {
        return Boolean(this._orderId);
    }

    /** Hide the banner while the report runs; keep it for payment confirmation and checkout. */
    showBoldBanner(): boolean {
        const state = this.boldReturnState();
        if (!state) return false;
        if (this.phase() === 'working' && this.workingStep() !== 'payment') return false;
        return true;
    }

    /** Asks again for a payment that was still settling (PSE debits can take a few minutes). */
    async checkPayment(): Promise<void> {
        if (this.busy() || !this._orderId) return;

        await this._handleBoldReturn(this._orderId, null);
    }

    private async _confirmBoldOrder(orderId: string, txHint: BoldReturnState | null = null): Promise<BoldReturnState> {
        const maxAttempts = txHint === 'approved' ? BOLD_CONFIRM_ATTEMPTS_APPROVED_HINT : BOLD_CONFIRM_ATTEMPTS;

        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            let state: BoldReturnState;

            try {
                const response = await firstValueFrom(this._payment.confirmBoldPurchase(orderId));
                state = this._boldStateFromConfirm(response.data);
            } catch (error) {
                // Our own API could not be reached: never presented as a payment on its way.
                console.error('[PlateReport] could not confirm the Bold order', error);
                return 'unknown';
            }

            if (state !== 'pending' || attempt === maxAttempts) return state;

            await this._sleep(BOLD_CONFIRM_RETRY_MS);

            if (this._left) return state;
        }

        return 'pending';
    }

    /** An order written off for never being paid also reads as `failed`, so that flag is checked first. */
    private _boldStateFromConfirm(data?: BoldConfirmData): BoldReturnState {
        if (data?.abandoned) return 'abandoned';

        const status = data?.transaction?.status;

        if (status === 'approved' || status === 'failed' || status === 'pending') return status;

        return 'unknown';
    }

    selectedCountry(): CountryDialCode {
        return this.countries.find((country) => country.countryCode === this.countryCode()) ?? this.countries[0];
    }

    async submitForm(): Promise<void> {
        if (this.busy()) return;
        this.fieldError.set(null);
        this.errorKey.set(null);
        this.needsSignIn.set(false);

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

            // A plate already reported on this account is served from what was saved: no payment, no new lookup.
            if (await this._reuseSavedReport()) return;

            this.phase.set('payment');
        } catch (error) {
            if (this._handleAccountError(error)) return;

            this._showError('plateReport.genericError', error);
            this.phase.set('form');
        } finally {
            this.busy.set(false);
        }
    }

    /**
     * Turns the account errors the API returns into something the client can act on.
     * Returns true when the error was an account error and the form is shown again.
     */
    private _handleAccountError(error: unknown): boolean {
        const message = this._errorMessage(error).toLowerCase();
        const show = (key: string, signIn = false): true => {
            this.errorKey.set(key);
            this.errorDetail.set('');
            this.needsSignIn.set(signIn);
            this.phase.set('form');

            return true;
        };

        // The phone or email already belongs to an account: it has to be opened by signing in, not re-created.
        if (message.includes('is_registered_already')) return show('plateReport.accountExists', true);

        // The report project or its onboarding flow is not published, or has no plan: nothing the client can fix.
        if (
            message.includes('onboarding_flow_not_published') ||
            message.includes('project_not_found') ||
            message.includes('projectflow_not_found') ||
            message.includes('clientsmartenrollplan_not_found')
        ) {
            return show('plateReport.accountUnavailable');
        }

        if (message === 'account' || message === 'project_not_allowed') return show('plateReport.accountFailed');
        if (message === 'signupform_validation_not_passed') return show('plateReport.verificationRequired');

        return false;
    }

    /** For people who already have a Verifik account: sign in, then continue with the same data. */
    async signIn(): Promise<void> {
        if (this.busy()) return;

        const { AuthModalComponent } = await import('app/layout/common/auth-modal/auth-modal.component');

        this._dialog
            .open(AuthModalComponent, { panelClass: 'auth-modal-dialog', width: '400px', maxWidth: '100vw' })
            .afterClosed()
            .subscribe(() => {
                this.signedIn.set(this._session.isTokenValid());
                if (!this.signedIn()) return;

                this.needsSignIn.set(false);
                this.errorKey.set(null);
                void this.submitForm();
            });
    }

    statusKey(): string {
        const step = this.workingStep();
        if (step === 'account') return 'plateReport.workingAccount';
        if (step === 'payment') return 'plateReport.workingPayment';
        if (step === 'run') return 'plateReport.workingRun';
        if (step === 'pdf') return 'plateReport.workingPdf';
        return 'plateReport.workingClone';
    }

    timelineState(id: 'clone' | 'run' | 'pdf'): 'done' | 'current' | 'wait' {
        const order = ['clone', 'run', 'pdf'] as const;
        const current = order.indexOf(this.workingStep() as (typeof order)[number]);
        const index = order.indexOf(id);
        if (current < 0 || index > current) return 'wait';
        if (index < current) return 'done';
        return 'current';
    }

    /** Returns to the data step without clearing what the customer already typed. */
    backToForm(): void {
        if (this.busy()) return;
        this.errorKey.set(null);
        this.errorDetail.set('');
        this.phase.set('form');
    }

    /** Pesos are the only enabled currency, so the order is always made in COP. */
    canPay(): boolean {
        return !this.busy() && this.currency() === 'COP' && !this.fxUnavailable();
    }

    /**
     * Opens the Bold order for the report, charged in pesos at the API's fixed price. A first purchase from a
     * Colombian account comes back as a hosted PSE link to navigate to; any other order opens Bold's modal.
     * Either way Bold returns to this page with `bold-order-id`, handled in {@link _handleBoldReturn}.
     */
    async pay(): Promise<void> {
        if (!this.canPay()) return;

        this.busy.set(true);
        this.errorKey.set(null);
        this.errorDetail.set('');
        this._remember('after-payment');

        try {
            const response = await firstValueFrom(
                this._payment.createBoldCheckout({
                    product: REPORT_PRODUCT,
                    currency: 'COP',
                    origin: 'smart_agent',
                    returnPath: this._boldReturnPath(),
                })
            );

            const returnPath = this._boldReturnPath();
            let config = this._payment.alignBoldReturnUrl(response.data, returnPath);
            this._orderId = config.orderId;
            this._remember('after-payment');

            if (config.mode === 'redirect') {
                config = this._payment.alignBoldReturnUrl(config, returnPath);
                // Leaves the spinner up: the page is on its way to Bold.
                this._payment.redirectToBoldCheckout(config);
                return;
            }

            await this._payment.loadBoldCheckoutScript();
            this._payment.openBoldCheckout(config);
            this._startBoldCheckoutWatch(config.orderId);
        } catch (error) {
            console.error('[PlateReport] could not open the Bold checkout', error);
            this.errorKey.set(this._paymentErrorKey(error));
            this.errorDetail.set('');
        } finally {
            this.busy.set(false);
        }
    }

    /** Maps the API's purchase errors to text that makes sense for a single-report payment. */
    private _paymentErrorKey(error: unknown): string {
        const message = this._errorMessage(error);

        if (message.includes('bold_fx_unavailable')) {
            this.fxUnavailable.set(true);
            return 'plateReport.fxUnavailable';
        }
        if (message.includes('first_purchase_requires_pse')) return 'addCredits.purchaseDialog.errors.firstPurchaseRequiresPse';
        if (message.includes('duplicate_credit_purchase')) return 'plateReport.paymentDuplicate';
        if (message.includes('must be at least') || message.includes('credit_purchase_invalid_amount')) {
            return 'plateReport.paymentAmount';
        }
        if (
            message.includes('bold_not_configured') ||
            message.includes('bold_voucher_lookup_failed') ||
            message.includes('bold_payment_link') ||
            message.includes('bold_checkout')
        ) {
            return 'plateReport.paymentUnavailable';
        }

        return 'plateReport.paymentFailedToOpen';
    }

    async continueFromDraft(): Promise<void> {
        await this.continueAfterPayment();
    }

    /**
     * After a successful payment (or when returning from credits with a saved draft), run the batch
     * and land on the download / email screen.
     */
    async continueAfterPayment(): Promise<void> {
        if (this.busy()) return;
        if (!this._session.isTokenValid()) {
            this.phase.set('form');
            return;
        }

        if (this._paid) {
            await this.startReport();
            return;
        }

        if (this._orderId) {
            await this._handleBoldReturn(this._orderId);
            return;
        }

        const settled = await this._reconcileOpenPaymentAndContinue();
        if (!settled && this._batchId) {
            await this.startReport();
        }
    }

    private async _reconcileOpenPaymentAndContinue(): Promise<boolean> {
        try {
            const response = await firstValueFrom(this._payment.reconcileBoldOrders());
            const orders = response.data?.orders ?? [];
            const approved = orders.find((order) => order.state === 'approved');
            if (!approved?.orderId) return false;

            await this._handleBoldReturn(approved.orderId, 'approved');
            return true;
        } catch (error) {
            console.error('[PlateReport] could not reconcile Bold orders', error);
            return false;
        }
    }

    private async _pollBoldOrderUntilSettled(orderId: string, txHint: BoldReturnState | null = null): Promise<void> {
        const maxAttempts = txHint === 'approved' ? BOLD_CONFIRM_ATTEMPTS_APPROVED_HINT : BOLD_CONFIRM_ATTEMPTS;

        for (let attempt = 2; attempt <= maxAttempts; attempt++) {
            await this._sleep(BOLD_CONFIRM_RETRY_MS);
            if (this._left || this.phase() === 'ready' || !this.awaitingOrder()) return;

            const state = await this._confirmBoldOrder(orderId, txHint);
            if (state === 'approved') {
                this.awaitingOrder.set(false);
                await this._finishApprovedPayment(false);
                return;
            }
            if (state !== 'pending') {
                this.boldReturnState.set(state);
                return;
            }
        }

        if (txHint === 'approved' || this._paid) {
            await this._finishApprovedPayment(true);
        }
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
        this.reusedReport.set(false);
        this.savedOnAccount.set(false);
        this.needsSignIn.set(false);
        this.reportPaid.set(false);
        this.awaitingOrder.set(false);
        this.boldReturnState.set(null);
        this._paid = false;
        this._orderId = '';
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
        if (this.boldReturnState() === 'approved') {
            this.boldReturnState.set('confirming');
        }
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
            let quote = await firstValueFrom(this._batches.getBatchEstimate(this._batchId));
            this.estimate.set(quote.data);
            if (!quote.data.sufficientCredits && existing.data.status !== 'processing') {
                if (this._paid) {
                    const creditsReady = await this._waitForCreditsAfterPayment();
                    if (creditsReady) {
                        quote = await firstValueFrom(this._batches.getBatchEstimate(this._batchId));
                        this.estimate.set(quote.data);
                    }
                }
                if (!quote.data.sufficientCredits) {
                    this._remember('after-payment');
                    this.reportPaid.set(this._paid);
                    if (this._paid) {
                        this.boldReturnState.set('approved');
                    }
                    this.phase.set('payment');
                    return;
                }
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
            if (this._handleAccountError(error)) return;

            const code = this._errorCode(error);
            if (code === 'insufficient_credits' || /credit/i.test(this._errorMessage(error))) {
                this._remember('after-payment');
                this.reportPaid.set(this._paid);
                if (this._paid) {
                    this.boldReturnState.set('approved');
                }
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

        // Keep it before showing it: the client must be able to download it later without paying again.
        await this._saveGeneratedReport(this._reportId);

        this.reusedReport.set(false);
        clearPlateReportDraft();
        this.boldReturnState.set(null);
        this.phase.set('ready');
    }

    /**
     * Stores the report on the account's vehicle (same place Smart Fleet reads from) and keeps a local copy
     * of the reference. A failure here never blocks the PDF the client already paid for.
     */
    private async _saveGeneratedReport(reportId: string): Promise<void> {
        const plate = this.plate();
        this.savedOnAccount.set(false);
        if (!plate || !reportId) return;

        const entry = { reportId, rowIndex: 0, createdAt: new Date().toISOString() };

        writeSavedPlateReport({ plate, ...entry });

        try {
            const asset = (await this._findVehicle(plate)) ?? (await this._createVehicle(plate));
            if (!asset?._id) return;

            await firstValueFrom(this._fleet.saveAssetReport(asset, entry));
            this.savedOnAccount.set(true);
        } catch (error) {
            console.error('[PlateReport] could not save the report on the account', error);
        }
    }

    /** Returns true when a previously generated report for this plate was loaded. */
    private async _reuseSavedReport(): Promise<boolean> {
        const plate = this.plate();
        if (!plate || !this._session.isTokenValid()) return false;

        this.workingStep.set('pdf');

        let saved: { reportId: string; rowIndex: number } | null = null;

        try {
            const asset = await this._findVehicle(plate);
            saved = (asset ? savedReportsOf(asset)[0] : null) ?? readSavedPlateReport(plate);
        } catch (error) {
            console.error('[PlateReport] could not look for a saved report', error);
            saved = readSavedPlateReport(plate);
        }

        if (!saved) return false;

        try {
            const blob = await firstValueFrom(this._reports.downloadReport(saved.reportId, saved.rowIndex));
            const base64 = await this._blobToBase64(blob);
            if (!base64) throw new Error('pdf');

            this._reportId = saved.reportId;
            this._pdfBase64 = base64;
            this.reusedReport.set(true);
            this.savedOnAccount.set(true);
            clearPlateReportDraft();
            this.phase.set('ready');

            return true;
        } catch (error) {
            // The stored report is gone or unreadable, so a fresh one has to be generated.
            console.error('[PlateReport] saved report could not be loaded', error);
            clearSavedPlateReport(plate);

            return false;
        }
    }

    private async _findVehicle(plate: string): Promise<FleetAsset | null> {
        const response = await firstValueFrom(this._fleet.findAssets({ search: plate, perPage: 20 }));

        return (response.data ?? []).find((asset) => normalizePlate(asset.plate ?? '') === plate) ?? null;
    }

    private async _createVehicle(plate: string): Promise<FleetAsset | null> {
        // Not monitored: this is only the place the report lives. The backend keeps inactive vehicles
        // out of the plan's slot limit, so no recurring checks start and no slot is used.
        const vehicle: FleetAsset = { country: 'co', type: 'vehicle', plate, isActive: false };

        return (await firstValueFrom(this._fleet.createAsset(vehicle))).data ?? null;
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
     * Uses the current session (a Verifik account or one created here earlier), or creates a basic account
     * in the report project from the phone and name. The basic account has no verification code step.
     *
     * An existing session is never edited: its profile belongs to the account, not to this form.
     */
    private async _ensureBasicAccount(): Promise<void> {
        if (this._session.isTokenValid()) {
            this.signedIn.set(true);
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
            // The project flow requires a name; the form keeps it optional, so fall back to the phone.
            fullName: this.personName() || `Cliente ${phone || this.plate()}`,
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

    private async _waitForCreditsAfterPayment(): Promise<boolean> {
        for (let attempt = 1; attempt <= POST_PAYMENT_CREDIT_ATTEMPTS; attempt++) {
            try {
                await firstValueFrom(this._auth.refreshSession());
            } catch {
                // Session refresh is best-effort; the estimate call still runs.
            }
            this._credits.refreshBalance();
            if (this._batchId) {
                const quote = await firstValueFrom(this._batches.getBatchEstimate(this._batchId));
                if (quote.data.sufficientCredits) return true;
            }
            if (attempt < POST_PAYMENT_CREDIT_ATTEMPTS) await this._sleep(POST_PAYMENT_CREDIT_RETRY_MS);
            if (this._left) return false;
        }
        return false;
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
            boldOrderId: this._orderId || undefined,
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
