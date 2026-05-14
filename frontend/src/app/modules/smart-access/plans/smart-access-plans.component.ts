import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FuseSplashScreenService } from '@fuse/services/splash-screen';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import {
    extractClientSettingsPayload,
    invoiceBillingDetailsComplete,
} from 'app/modules/settings/utils/invoice-billing-complete';
import { SubscriptionService } from 'app/modules/subscription-plans/subscription.service';
import { SmartAccessPlansService } from './smart-access-plans.service';
import { SmartAccessBillingRequiredDialogComponent } from './smart-access-billing-required-dialog.component';

/** Passed to API so Stripe success/cancel URLs use Smart Agent host and /smart-access/plans. */
const SMART_AGENT_CHECKOUT_SOURCE = 'smart_agent';

type PlanInterval = 'year' | 'month';
type PlansView = 'current' | 'change' | 'select' | 'lastCheck';

/**
 * Synthetic Enterprise card appended to both year and month catalogs so it shows
 * alongside paid tiers but behaves as a contact-sales CTA only.
 */
const ENTERPRISE_PLAN: any = {
    amount: 0.8,
    biometricBatches: 100,
    biometricsLimit: 0,
    code: 'Enterprise',
    codeShow: 'Enterprise',
    currency: 'usd',
    description: '-',
    emailsLimit: 200,
    interval: 'month',
    intervalCount: 1,
    maxAmount: 300,
    meteredAmount: 80,
    name: 'Enterprise',
    price: 0,
    requestsPerUnit: 1,
    smsLimit: 0,
    smsPrice: 0.06,
    status: 'active',
    trialDays: 0,
    visibleTo: null,
    whatsAppLimit: 0,
};

interface BillingInvoiceAddressPayload {
    address?: string;
    city?: string;
    province?: string;
    country?: string;
    postalCode?: string;
}

interface BillingInvoiceBusinessPayload {
    business_name?: string;
    business_email?: string;
}

interface BillingInvoicePersonPayload {
    person_name?: string;
    person_email?: string;
}

/**
 * `invoiceSettings` slice used to decide if billing is complete before checkout.
 * Matches the payload saved from billing details (`type`, not legacy `invoiceType`).
 */
interface BillingInvoiceSettingsPayload {
    invoiceType?: string;
    type?: string;
    address?: BillingInvoiceAddressPayload;
    business?: BillingInvoiceBusinessPayload | null;
    person?: BillingInvoicePersonPayload | null;
}

interface ClientSettingsBillingPayload {
    invoiceSettings?: BillingInvoiceSettingsPayload;
}

@Component({
    selector: 'smart-access-plans',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TranslocoModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSliderModule,
    ],
    styleUrls: ['./smart-access-plans.component.scss'],
    templateUrl: './smart-access-plans.component.html',
})
export class SmartAccessPlansComponent implements OnInit {
    private _activatedRoute = inject(ActivatedRoute);
    private _authGate = inject(AuthRequiredGateService);
    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _dialog = inject(MatDialog);
    private _accessPlansService = inject(SmartAccessPlansService);
    private _router = inject(Router);
    private _snackBar = inject(MatSnackBar);
    private _splashScreenService = inject(FuseSplashScreenService);
    private _subscriptionService = inject(SubscriptionService);
    private _translocoService = inject(TranslocoService);

    readonly termsAndConditionsUrl = 'https://docs.verifik.co/legal/terms-and-conditions';

    client: any;
    currentSubscription: any[] = [];
    currentView: PlansView = 'change';
    typePlan: PlanInterval = 'year';
    Allplans: { year: any[]; month: any[] } = { year: [], month: [] };
    plans: any[] = [];
    currentChangePlan2: any = null;
    sliderAmount: number | undefined;
    showSlide = true;
    showExtraBioInfo = false;
    subscribingToPlan = false;

    constructor() {
        const raw =
            localStorage.getItem('verifik_account') || localStorage.getItem('user');
        if (!raw || raw === 'undefined' || raw === 'null') {
            this.client = null;
            return;
        }
        try {
            this.client = JSON.parse(raw);
        } catch {
            this.client = null;
        }
    }

    ngOnInit(): void {
        this.subscribingToPlan = false;
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this._runPlansEntryAfterAuthGate(),
            panelClass: 'auth-required-dialog',
        });
    }

    private _runPlansEntryAfterAuthGate(): void {
        const sessionId = this._activatedRoute.snapshot.queryParamMap.get('session_id')?.trim();
        if (sessionId) {
            this._subscriptionService.confirmCheckoutSession(sessionId).subscribe({
                next: () => {
                    this._router.navigate([], {
                        queryParams: {},
                        queryParamsHandling: 'merge',
                        replaceUrl: true,
                    });
                    this._bootstrapPlansPage();
                },
                error: (error) => {
                    console.error('Error confirming Smart Access checkout session:', error);
                    this._snackBar.open(
                        this._translocoService.translate('subscriptionPlans.sessionConfirmError') ||
                            'Could not confirm subscription. Please try again.',
                        undefined,
                        { duration: 5000 }
                    );
                    this._bootstrapPlansPage();
                },
            });
            return;
        }

        this._bootstrapPlansPage();
    }

    private _bootstrapPlansPage(): void {
        this._splashScreenService.show();
        this._prefetchClientInvoiceSettings();
        this._loadMySubscription();
        this.updatePlan(true);
    }

    private _setCurrentViewFromParams(): PlansView {
        const viewParam = this._activatedRoute.snapshot.queryParams['view'];
        if (['current', 'change'].includes(viewParam)) return viewParam as PlansView;
        return 'current';
    }

    private _hasVerifikAccessToken(): boolean {
        return Boolean(localStorage.getItem('accessToken')?.length);
    }

    private _resolveStoredClientId(): string | undefined {
        const c = this.client;
        if (!c) return undefined;
        const id = c._id ?? c.id;
        return id != null ? String(id) : undefined;
    }

    private _clientSettingsQueryParams(): Record<string, string | boolean> {
        const params: Record<string, string | boolean> = { findOne: true };
        const cid = this._resolveStoredClientId();
        if (cid) params.where_client = cid;
        return params;
    }

    private _billingDataFromClientSettingsResponse(response: unknown): Record<string, unknown> | null {
        return extractClientSettingsPayload(response);
    }

    /**
     * Same completion rule as subscription plans: billing UI always saves `invoiceSettings.type`
     * plus address + payer block. Province/postal are not required in all locales; `verifik_account`
     * must be read here (not only legacy `user`) so `where_client` matches Settings.
     */
    private _isInvoiceSettingsComplete(billingData: unknown): boolean {
        const doc = billingData as ClientSettingsBillingPayload | null;
        const inv = doc?.invoiceSettings;
        return invoiceBillingDetailsComplete(inv);
    }

    private _prefetchClientInvoiceSettings(): void {
        if (!this._hasVerifikAccessToken()) return;

        this._accessPlansService.getClientSettings(this._clientSettingsQueryParams()).subscribe({
            next: () => {
                this.subscribingToPlan = false;
                this._changeDetectorRef.markForCheck();
            },
            error: () => {
                this._openSnackBar(
                    this._translocoService.translate('smartenroll.errors.redirect'),
                    'error'
                );
                this.subscribingToPlan = false;
            },
        });
    }

    /** Fresh read before checkout so returning from billing settings without full reload is respected. */
    private _ensureInvoiceSettings$(): Observable<boolean> {
        if (!this._hasVerifikAccessToken()) return of(false);

        return this._accessPlansService.getClientSettings(this._clientSettingsQueryParams()).pipe(
            map((response) => {
                const billingData = this._billingDataFromClientSettingsResponse(response);
                const ok = this._isInvoiceSettingsComplete(billingData);
                this._changeDetectorRef.markForCheck();
                return ok;
            }),
            catchError(() => {
                this._openSnackBar(
                    this._translocoService.translate('smartenroll.errors.redirect'),
                    'error'
                );
                return of(false);
            })
        );
    }

    /** Stripe recurring line items require quantity ≥ 1; free-tier UI sends 0 for biometricsLimit. */
    private _stripeCheckoutQuantity(plan: any): number {
        const raw = this.showSlide ? this.sliderAmount : plan?.biometricsLimit;
        return Math.max(1, Number(raw) || 1);
    }

    /** Maps GET /client-smart-access-plans payload into `currentSubscription` / `currentView`. */
    private _applyActiveSubscriptionsPayload(data: unknown[] | undefined | null): boolean {
        if (!data?.length) {
            this.currentSubscription = [];
            this.currentView = 'change';
            return false;
        }

        this.currentSubscription = data.map((element: any) => {
            const { name, code } = this._splitSubscriptionLabels(element);

            return {
                ...element,
                nameShow: name === 'PYG' ? 'Free Forever' : name,
                codeShow: code === 'pyg' ? 'Free' : code,
            };
        });

        this.currentView = this._setCurrentViewFromParams();
        return true;
    }

    private _loadMySubscription(): void {
        this.currentSubscription = [];

        this._accessPlansService
            .getClientAccessPlans({
                sort: 'startDate',
                where_status: 'active',
                populates: ['plan'],
            })
            .subscribe({
                next: (response) => {
                    this._applyActiveSubscriptionsPayload(response?.data);
                    this._splashScreenService.hide();
                    this._changeDetectorRef.markForCheck();
                },
                error: (error) => {
                    console.error('SmartAccessPlansComponent ~ _loadMySubscription ~ error:', error);
                    this._openSnackBar(
                        this._translocoService.translate('smartenroll.errors.load_subscription'),
                        'error'
                    );
                    this._splashScreenService.hide();
                    this._changeDetectorRef.markForCheck();
                },
            });
    }

    /**
     * After insert/upgrade APIs return without a Stripe Checkout URL, reload active subscription or show an error.
     * Treats empty `{}` bodies (missing `data`) as failure.
     */
    private _checkoutResponseMissingSessionData(response: unknown): boolean {
        const inner = response && typeof response === 'object' ? (response as { data?: unknown }).data : undefined;
        return inner === undefined || inner === null || typeof inner !== 'object';
    }

    private _reloadSubscriptionsAndFinalizeActivation(): void {
        this._accessPlansService
            .getClientAccessPlans({
                sort: 'startDate',
                where_status: 'active',
                populates: ['plan'],
            })
            .subscribe({
                next: (response) => {
                    const hasSubs = this._applyActiveSubscriptionsPayload(response?.data);
                    this.subscribingToPlan = false;
                    this._splashScreenService.hide();
                    if (hasSubs) {
                        this._openSnackBar(
                            this._translocoService.translate('smartaccess.plans.activation_success'),
                            'success'
                        );
                    } else {
                        this._openSnackBar(
                            this._translocoService.translate('smartaccess.plans.activation_checkout_failed'),
                            'error'
                        );
                    }
                    this.updatePlan(true);
                    this._changeDetectorRef.markForCheck();
                },
                error: (error) => {
                    console.error('SmartAccessPlansComponent ~ finalize activation ~ error:', error);
                    this.subscribingToPlan = false;
                    this._splashScreenService.hide();
                    this._openSnackBar(
                        this._translocoService.translate('smartaccess.plans.activation_checkout_failed'),
                        'error'
                    );
                    this._changeDetectorRef.markForCheck();
                },
            });
    }

    /** Empty API body or absent session object → user-visible failure without a silent no-op. */
    private _endActivationAttemptWithCheckoutFailed(): void {
        this.subscribingToPlan = false;
        this._splashScreenService.hide();
        this._openSnackBar(
            this._translocoService.translate('smartaccess.plans.activation_checkout_failed'),
            'error'
        );
        this._changeDetectorRef.markForCheck();
    }

    /** Insert/upgrade returned JSON but no Checkout URL — either recover via subscription reload or surface failure. */
    private _handleCheckoutResponseWithoutRedirect(response: unknown): void {
        if (!response || this._checkoutResponseMissingSessionData(response)) {
            this._endActivationAttemptWithCheckoutFailed();
            return;
        }
        this._reloadSubscriptionsAndFinalizeActivation();
    }

    /**
     * Both legacy (`Access X` / `access_x`) and current (`Smart Access X` / `smart_access_x`)
     * naming need to produce the same `nameShow` and `codeShow` so the UI stays consistent.
     */
    private _splitSubscriptionLabels(element: any): { name: string; code: string } {
        const rawName: string = element?.name ?? '';
        const rawCode: string = element?.code ?? '';

        const smartNameCut = rawName.split('Smart Access ');
        const legacyNameCut = rawName.split('Access ');
        const nameCut = smartNameCut.length > 1 ? smartNameCut : legacyNameCut;

        const smartCodeCut = rawCode.split('smart_access_');
        const legacyCodeCut = rawCode.split('access_');
        const codeCut = smartCodeCut.length > 1 ? smartCodeCut : legacyCodeCut;

        const name = nameCut.length > 2 ? nameCut[2] : nameCut[1] ?? rawName;
        const code = codeCut.length > 2 ? codeCut[2] : codeCut[1] ?? rawCode;

        return { name, code };
    }

    private _openSnackBar(message: string, _type: string, timer = 5000): void {
        this._snackBar.open(message, undefined, { duration: timer });
    }

    /**
     * Builds the year/month catalog buckets, sorts each tier list, computes the
     * sliderable `maxAmount`/`steps` per tier and appends the synthetic Enterprise card.
     * Mirrors the behaviour of `verifik-client-panel`'s `updatePlan`, but fixes the
     * inherited bug where the month loop indexed into the year array.
     */
    updatePlan(skipPlacement = false): void {
        if (!skipPlacement) this.currentView = 'select';

        this.Allplans = { year: [], month: [] };

        this._accessPlansService.getCatalogPlans({ where_status: 'active', sort: 'amount' }).subscribe({
            next: (response: any) => {
                (response?.data ?? []).forEach((plan: any) => {
                    const splitted = (plan.code ?? '').split('smart_');
                    const codeCut = (plan.code ?? '').split('access_');
                    const code = codeCut.length > 2 ? codeCut[2] : codeCut[1];

                    if (splitted.length === 2) {
                        this.Allplans.year.push({
                            ...plan,
                            name: this._extractPlanName(plan.name, 'Smart Access '),
                            codeShow: code === 'pyg' ? 'Free' : code,
                        });
                    }

                    if (splitted.length === 1) {
                        this.Allplans.month.push({
                            ...plan,
                            name: this._extractPlanName(plan.name, 'Access '),
                            codeShow: code === 'pyg' ? 'Free' : code,
                        });
                    }
                });

                this.Allplans.year.sort((a, b) => a.price - b.price);
                this.Allplans.month.sort((a, b) => a.price - b.price);

                this._populateSliderSteps(this.Allplans.year);
                this._populateSliderSteps(this.Allplans.month);

                this.Allplans.year.push({ ...ENTERPRISE_PLAN });
                this.Allplans.month.push({ ...ENTERPRISE_PLAN });

                this.plans = this.Allplans[this.typePlan];
                this._setDefaultSelectedPlan();
                this.activateQtyBar();
                this._changeDetectorRef.markForCheck();
            },
            error: (error) => {
                console.error('SmartAccessPlansComponent ~ updatePlan ~ error:', error);
                this._openSnackBar(
                    this._translocoService.translate('smartenroll.errors.get_plans'),
                    'error'
                );
            },
        });
    }

    private _extractPlanName(name: string | undefined, prefix: string): string {
        if (!name) return '';
        const tail = name.split(prefix)[1] ?? name;
        return tail.split('(sesiones)')[0].split('(Sessions)')[0].split('(Session)')[0].trim();
    }

    /**
     * Each tier's slider runs from its own `biometricsLimit` to the next tier's
     * `biometricsLimit` (or +1000 for the top tier), in 100-unit notches.
     */
    private _populateSliderSteps(tiers: any[]): void {
        for (let index = 0; index < tiers.length; index++) {
            const element = tiers[index];
            const isLast = index === tiers.length - 1;

            element.maxAmount = isLast
                ? element.biometricsLimit + 1000
                : tiers[index + 1].biometricsLimit;

            element.steps = this._generateNumberSeries(element.biometricsLimit, element.maxAmount, 100);
        }
    }

    private _generateNumberSeries(start: number, end: number, step: number): number[] {
        if (step <= 0) return [];

        const series: number[] = [];
        for (let i = start; i <= end; i += step) {
            series.push(i);
        }
        return series;
    }

    private _setDefaultSelectedPlan(): void {
        if (!this.plans?.length) {
            this.currentChangePlan2 = null;
            this.sliderAmount = undefined;
            return;
        }

        const pygIndex = this.plans.findIndex((element: any) => element.codeShow === 'Free');
        this.currentChangePlan2 = this.plans[pygIndex >= 0 ? pygIndex : 0];
        this.sliderAmount = this.currentChangePlan2?.biometricsLimit;
    }

    changeIntervalPlan(interval: PlanInterval): void {
        this.typePlan = interval;
        this.plans = this.Allplans[interval] ?? [];
        this._setDefaultSelectedPlan();
        this.activateQtyBar();
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Free tiers don't have a quantity slider — everything is included or pay-as-you-go.
     */
    activateQtyBar(): void {
        const code = this.currentChangePlan2?.code;
        if (code === 'access_pyg' || code === 'smart_access_pyg' || this.currentChangePlan2?.codeShow === 'Free') {
            this.showSlide = false;
            this.sliderAmount = undefined;
            return;
        }

        this.showSlide = true;
        this.sliderAmount = this.currentChangePlan2?.steps?.[0] ?? this.currentChangePlan2?.biometricsLimit;
    }

    changeView(data: PlansView, plan: any | null): void {
        this.currentView = data;
        if (plan) this.currentChangePlan2 = plan;
        this.activateQtyBar();
        this._changeDetectorRef.markForCheck();
    }

    goBack(view: PlansView): void {
        this.currentView = view;
        this._changeDetectorRef.markForCheck();
    }

    changeCurrentView(): void {
        this.currentView = 'change';
        this._changeDetectorRef.markForCheck();
        this.updatePlan(true);
    }

    /**
     * The active subscription whose code matches the currently inspected plan,
     * used to decide whether the lastCheck CTA labels "Activate" or shows
     * "Your plan" indicator.
     */
    matchesCurrentSubscription(plan: any): boolean {
        if (!this.currentSubscription?.length || !plan?.code) return false;
        return this.currentSubscription.some((sub: any) => sub.code === plan.code);
    }

    /** Current view's CTA — checkouts are gated by billing-details completeness. */
    activatePlan(plan: any): void {
        if (this.subscribingToPlan) return;

        if (plan?.codeShow === 'Enterprise' || plan?.code === 'Enterprise') {
            this.openWhatsapp();
            return;
        }

        if (!this._hasVerifikAccessToken()) return;

        this._ensureInvoiceSettings$().subscribe((ok) => {
            if (!ok) {
                this._dialog.open(SmartAccessBillingRequiredDialogComponent, {
                    width: '420px',
                    maxWidth: '95vw',
                    panelClass: 'smart-access-billing-required-dialog-pane',
                });
                return;
            }

            this._submitSubscriptionChange(plan);
        });
    }

    private _submitSubscriptionChange(plan: any): void {
        if (!plan) return;

        this.subscribingToPlan = true;
        this._splashScreenService.show();

        const primary = this.currentSubscription?.[0];
        const hasActive = !!primary;

        if (hasActive) {
            const payload: Record<string, unknown> = {
                plan: plan.stripeProduct,
                source: SMART_AGENT_CHECKOUT_SOURCE,
            };

            if (this.showSlide) {
                payload.quantity = this._stripeCheckoutQuantity(plan);
            }

            if (primary.code !== plan.code) {
                payload.defaultPrice = plan.stripePrice;
            }

            this._accessPlansService.upgradeClientAccessPlan(payload).subscribe({
                next: (result: any) => {
                    if (!result) {
                        this._endActivationAttemptWithCheckoutFailed();
                        return;
                    }

                    const url = result?.data?.url;
                    if (url) {
                        window.location.href = url;
                        return;
                    }

                    this._handleCheckoutResponseWithoutRedirect(result);
                },
                error: () => {
                    this._endActivationAttemptWithCheckoutFailed();
                },
            });
            return;
        }

        const payload: Record<string, unknown> = {
            plan: plan.stripeProduct,
            defaultPrice: plan.stripePrice,
            source: SMART_AGENT_CHECKOUT_SOURCE,
        };

        if (this.showSlide) {
            payload.quantity = this._stripeCheckoutQuantity(plan);
        }

        this._accessPlansService.postClientAccessPlan(payload).subscribe({
            next: (response: any) => {
                const url = response?.data?.url;
                if (url) {
                    window.location.href = url;
                    return;
                }

                this._handleCheckoutResponseWithoutRedirect(response);
            },
            error: () => {
                this._endActivationAttemptWithCheckoutFailed();
            },
        });
    }

    /** Stripe Customer Portal — manage / cancel current subscription. */
    cancelSubscription(): void {
        this._splashScreenService.show();

        this._subscriptionService.createPortalSession({}).subscribe({
            next: (result: any) => {
                const url = result?.data?.url;
                if (url) window.location.href = url;
                this._splashScreenService.hide();
            },
            error: (error) => {
                console.error('SmartAccessPlansComponent ~ cancelSubscription ~ error:', error);
                this._openSnackBar(
                    this._translocoService.translate('smartenroll.errors.redirect'),
                    'error'
                );
                this._splashScreenService.hide();
            },
        });
    }

    openWhatsapp(): void {
        const url: Record<string, string> = {
            es: 'https://api.whatsapp.com/send?phone=573208184565&text=%C2%A1Hola!%20estoy%20interesado%20en%20adquirir%20un%20plan%20enterprise%20de%20Smart%20Access.',
            en: 'https://api.whatsapp.com/send?phone=573208184565&text=Hello!%20I%20am%20interested%20in%20acquiring%20the%20Smart%20Access%20enterprise%20plan.',
        };

        const lang = this._translocoService.getActiveLang();
        window.open(url[lang] || url['en'], '_blank');
    }

    capitalizeFirstLetter(str: string): string {
        return !str ? '' : str.charAt(0).toUpperCase() + str.slice(1);
    }

    returnInteger(data: any): number {
        return Number.parseInt(data, 10) || 0;
    }

    creditCardLogo(brand: string): string {
        const logos: Record<string, string> = {
            visa: 'https://cdn.verifik.co/assets/billing-svg/VisaLogo.svg',
            mastercard: 'https://cdn.verifik.co/assets/billing-svg/MasterCardLogo.svg',
            amex: 'https://cdn.verifik.co/assets/billing-svg/AmericanExpressLogo.svg',
            link: 'https://cdn.verifik.co/assets/billing-svg/StripeLinkLogo.svg',
        };
        return logos[brand?.toLowerCase()] || '';
    }

    isLinkPayment(brand: string): boolean {
        return brand?.toLowerCase() === 'link';
    }

    getSmsWhatsappPricesUrl(): string {
        const lang = this._translocoService.getActiveLang();
        if (lang === 'en') {
            return 'https://docs.verifik.co/phone-validations/sms-and-whatsapp-prices';
        }
        return 'https://docs.verifik.co/verifik-es/planes-y-precios/precios-de-sms-whatsapp/';
    }

    getTermsAndConditionsUrl(): string {
        const lang = this._translocoService.getActiveLang();
        if (lang === 'en') {
            return 'https://docs.verifik.co/legal/terms-and-conditions';
        }
        return 'https://docs.verifik.co/docs-es/terminos-y-condiciones';
    }

    getPlanColorClass(codeShow: string): string {
        if (!codeShow) return 'free';
        const code = codeShow.toLowerCase();
        if (code === 'free' || code === 'pyg') return 'free';
        if (code === 'plus') return 'plus';
        if (code === 'business') return 'business';
        if (code === 'enterprise') return 'enterprise';
        return 'free';
    }

    /** Compute the `lastCheck` summary price using the current slider value when applicable. */
    computeAmount(plan: any): number {
        if (!plan) return 0;
        const qty = this.showSlide && this.sliderAmount != null ? this.sliderAmount : plan.biometricsLimit;
        return Math.round((plan.amount || 0) * (qty || 0));
    }
}
