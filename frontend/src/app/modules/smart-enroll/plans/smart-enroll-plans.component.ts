import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FuseSplashScreenService } from '@fuse/services/splash-screen';
import { SubscriptionService } from 'app/modules/subscription-plans/subscription.service';
import { SmartEnrollPlansService } from './smart-enroll-plans.service';
import { SmartEnrollBillingRequiredDialogComponent } from './smart-enroll-billing-required-dialog.component';
import { SmartEnrollVolumeConfirmDialogComponent } from './smart-enroll-volume-confirm-dialog.component';

/** Passed to API so Stripe success/cancel URLs use Smart Agent host and /smart-enroll/plans. */
const SMART_AGENT_CHECKOUT_SOURCE = 'smart_agent';

const CATALOG_PLAN_CODES: Record<'plus' | 'business' | 'free', string> = {
    plus: 'smart_enroll_plus',
    business: 'smart_enroll_business',
    free: 'smart_enroll_pyg',
};

/** Address block under `invoiceSettings` from GET /v2/client-settings. */
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
 * `invoiceSettings` slice used to decide if billing is complete before Smart Enroll checkout.
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
    selector: 'smart-enroll-plans',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TranslocoModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
    ],
    styleUrls: ['./smart-enroll-plans.component.scss'],
    templateUrl: './smart-enroll-plans.component.html',
})
export class SmartEnrollPlansComponent implements OnInit {
    private _activatedRoute = inject(ActivatedRoute);
    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _dialog = inject(MatDialog);
    private _enrollPlansService = inject(SmartEnrollPlansService);
    private _router = inject(Router);
    private _snackBar = inject(MatSnackBar);
    private _splashScreenService = inject(FuseSplashScreenService);
    private _subscriptionService = inject(SubscriptionService);
    private _translocoService = inject(TranslocoService);

    readonly termsAndConditionsUrl = 'https://docs.verifik.co/legal/terms-and-conditions';

    client: any;
    currentSubscription: any = [];
    currentView: string;
    plans: any;
    selectedPlan: any;
    servicesByCountry: any;
    subscribingToPlan = false;
    showExtraBioInfo = false;

    planSettings = {
        plus: {
            max: 1000,
            min: 300,
            notches: [] as number[],
            step: 100,
            value: 0,
        },
        business: {
            max: 2000,
            min: 1000,
            notches: [] as number[],
            step: 100,
            value: 0,
        },
    };

    sliderOptions: {
        max?: number;
        min?: number;
        notches?: number[];
        step?: number;
        value?: number;
    };

    constructor() {
        try {
            this.client = JSON.parse(localStorage.getItem('user') || 'null');
        } catch {
            this.client = null;
        }
    }

    ngOnInit(): void {
        this.subscribingToPlan = false;

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
                    console.error('Error confirming Smart Enroll checkout session:', error);
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
        this._prefetchClientInvoiceSettings();
        this._loadMySubscription();
        this._getSmartEnrollPlans();
    }

    private _setCurrentViewFromParams(): string {
        const viewParam = this._activatedRoute.snapshot.queryParams['view'];

        if (['current', 'change'].includes(viewParam)) return viewParam;
        return 'current';
    }

    /**
     * Billing UI saves `invoiceSettings.type` (business | person), not `invoiceType`.
     * Accept legacy `invoiceType` or the same shape as the billing-details save payload.
     */
    private _isInvoiceSettingsComplete(billingData: unknown): boolean {
        const inv = (billingData as ClientSettingsBillingPayload | null)?.invoiceSettings;
        if (!inv) return false;

        const t = (inv.invoiceType || '').trim();
        if (t) return true;

        const payerKind = inv.type;
        if (payerKind !== 'business' && payerKind !== 'person') return false;

        const a = inv.address;
        const hasAddress = Boolean(
            (a?.address || '').trim() &&
                (a?.city || '').trim() &&
                (a?.province || '').trim() &&
                (a?.country || '').trim() &&
                (a?.postalCode || '').trim()
        );
        if (!hasAddress) return false;

        if (payerKind === 'business') {
            return Boolean((inv.business?.business_name || '').trim() && (inv.business?.business_email || '').trim());
        }

        return Boolean((inv.person?.person_name || '').trim() && (inv.person?.person_email || '').trim());
    }

    /**
     * JWT-backed Verifik APIs use `ctx.state.user.clientId`; local `user` may use `id` or `_id`.
     */
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

    private _billingDataFromClientSettingsResponse(response: any): unknown {
        const raw = response?.data;
        if (raw == null) return null;
        if (Array.isArray(raw)) return raw[0] ?? null;
        if (raw.docs && Array.isArray(raw.docs)) return raw.docs[0] ?? null;
        return raw;
    }

    private _prefetchClientInvoiceSettings(): void {
        if (!this._hasVerifikAccessToken()) {
            this._splashScreenService.hide();
            return;
        }

        this._enrollPlansService
            .getClientSettings(this._clientSettingsQueryParams())
            .subscribe({
                next: () => {
                    this.subscribingToPlan = false;
                    this._splashScreenService.hide();
                    this._changeDetectorRef.markForCheck();
                },
                error: () => {
                    this._openSnackBar(
                        this._translocoService.translate('smartenroll.errors.redirect'),
                        'error'
                    );

                    this.subscribingToPlan = false;
                    this._splashScreenService.hide();
                },
                complete: () => {
                    this.subscribingToPlan = false;
                    this._splashScreenService.hide();
                },
            });
    }

    /**
     * Fresh read before checkout so returning from billing settings without full reload is respected.
     */
    private _ensureInvoiceSettings$(): Observable<boolean> {
        if (!this._hasVerifikAccessToken()) {
            return of(false);
        }

        return this._enrollPlansService
            .getClientSettings(this._clientSettingsQueryParams())
            .pipe(
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

    private _getSmartEnrollPlans(): void {
        this._enrollPlansService.getCatalogPlans({ sort: 'amount' }).subscribe({
            next: (response) => {
                this.plans = {};

                response.data.forEach((plan: any) => {
                    switch (plan.code) {
                        case 'smart_enroll_business':
                            this.plans['business'] = plan;
                            break;
                        case 'smart_enroll_plus':
                            this.plans['plus'] = plan;
                            break;
                        case 'smart_enroll_pyg':
                            this.plans['free'] = plan;
                            break;
                        default:
                            break;
                    }
                });
            },
            error: (error) => {
                console.error('SmartEnrollPlansComponent ~ _getSmartEnrollPlans ~ error:', error);
                this._openSnackBar(
                    this._translocoService.translate('smartenroll.errors.get_plans'),
                    'error'
                );
            },
        });
    }

    private _loadMySubscription(): void {
        this.currentSubscription = [];

        this._enrollPlansService
            .getClientEnrollPlans({
                sort: 'startDate',
                where_status: 'active',
                populates: ['plan'],
            })
            .subscribe({
                next: (response) => {
                    if (!response?.data || response.data.length === 0) {
                        this.currentView = 'change';
                        this._splashScreenService.hide();
                        this._changeDetectorRef.markForCheck();

                        return;
                    }

                    this.currentSubscription = [];

                    for (let index = 0; index < response.data.length; index++) {
                        const element = response.data[index];

                        const nameCut = element.name.split('Smart Enroll ');
                        const codeCut = element.code.split('smart_enroll_');

                        const name = nameCut.length > 2 ? nameCut[2] : nameCut[1];
                        const code = codeCut.length > 2 ? codeCut[2] : codeCut[1];

                        this.currentSubscription.push({
                            ...element,
                            nameShow: name === 'PYG' ? 'Free Forever' : name,
                            codeShow: code === 'pyg' ? 'Free' : code,
                        });
                    }

                    this.currentView = this._setCurrentViewFromParams();
                    this._splashScreenService.hide();
                    this._changeDetectorRef.markForCheck();
                },
                error: (error) => {
                    console.error('SmartEnrollPlansComponent ~ _loadMySubscription ~ error:', error);
                    this._openSnackBar(
                        this._translocoService.translate('smartenroll.errors.load_subscription'),
                        'error'
                    );
                },
            });
    }

    private _openSnackBar(message: string, _type: string, timer = 5000): void {
        this._snackBar.open(message, undefined, { duration: timer });
    }

    private _redirectToStripe(): void {
        this._splashScreenService.show();

        this._subscriptionService.createPortalSession({}).subscribe({
            next: (result) => {
                const url = result?.data?.url;

                if (url) window.location.href = url;

                this._splashScreenService.hide();
            },
            error: (error) => {
                console.error('SmartEnrollPlansComponent ~ _redirectToStripe ~ error:', error);
                this._openSnackBar(
                    this._translocoService.translate('smartenroll.errors.redirect'),
                    'error'
                );
                this._splashScreenService.hide();
            },
        });
    }

    private _setSliderValues(): void {
        if (!this.selectedPlan) return;

        if (this.selectedPlan === 'free') {
            this.sliderOptions = {};
            return;
        }

        this.sliderOptions = this.planSettings[this.selectedPlan as 'plus' | 'business'];

        if (this.sliderOptions?.notches?.length) return;

        const notchArray: number[] = [];

        let val = this.sliderOptions.min ?? 0;
        const max = this.sliderOptions.max ?? 0;

        while (val <= max) {
            notchArray.push(val);
            val += 100;
        }

        this.sliderOptions.notches = notchArray;
    }

    calculatePrice(plan: string): number {
        const thePlan = this.getPlan(plan);
        if (!thePlan) return 0;

        return thePlan.price + (thePlan.unitPrice || 0) * this.getAddedSmartEnrolls();
    }

    calculateSubscriptionPrice(subscription: any): number {
        const plan = subscription?.plan;

        if (!plan) return 0;

        if (subscription.code === 'smart_enroll_pyg') {
            return 0;
        }

        const baseIncluded = plan.biometricsLimit || 0;
        const total = subscription.biometricsLimit || 0;
        const volumeAboveBase = Math.max(0, total - baseIncluded);

        return (plan.price || 0) + (plan.unitPrice || 0) * volumeAboveBase;
    }

    capitalizeFirstLetter(str: string): string {
        return !str ? '' : str.charAt(0).toUpperCase() + str.slice(1);
    }

    changeView(data: string, plan: any): void {
        this.currentView = data;
        this.selectedPlan = plan;

        this._setSliderValues();

        if (data === 'select' && (plan === 'plus' || plan === 'business') && this.isActiveCatalogPlan(plan)) {
            this._syncSliderIndexFromActiveSubscription(plan);
        }

        this._changeDetectorRef.markForCheck();
    }

    /**
     * First active row without pending cancel, else first row.
     */
    getPrimaryActiveSubscription(): any | null {
        if (!this.currentSubscription?.length) return null;

        const notCancelled = this.currentSubscription.find((sub: any) => !sub.cancelAt);
        return notCancelled ?? this.currentSubscription[0];
    }

    isActiveCatalogPlan(planKey: 'plus' | 'business' | 'free'): boolean {
        const sub = this.getPrimaryActiveSubscription();
        if (!sub || sub.cancelAt) return false;

        return sub.code === CATALOG_PLAN_CODES[planKey];
    }

    get currentSubscribedEnrollments(): number | null {
        const sub = this.getPrimaryActiveSubscription();
        if (!sub || sub.cancelAt) return null;

        const v = sub.biometricsLimit;
        return typeof v === 'number' ? v : null;
    }

    selectedEnrollmentsCount(): number {
        if (!this.selectedPlan || this.selectedPlan === 'free') return 0;

        return this.getSliderAmount(this.selectedPlan);
    }

    isSameTierAsSelectedPlan(): boolean {
        if (!this.selectedPlan || this.selectedPlan === 'free') return false;

        return this.isActiveCatalogPlan(this.selectedPlan);
    }

    isSameTierVolumeUpdate(): boolean {
        if (!this.isSameTierAsSelectedPlan()) return false;

        const from = this.currentSubscribedEnrollments;
        if (from === null) return false;

        return this.selectedEnrollmentsCount() !== from;
    }

    showVolumeChangeSummary(): boolean {
        return this.isSameTierAsSelectedPlan() && this.currentSubscribedEnrollments !== null;
    }

    checkoutPrimaryActionKey(): string {
        if (this.selectedPlan === 'free') return 'smartenroll.plans.purchase_this_plan';

        const primary = this.getPrimaryActiveSubscription();
        const hasActive = !!primary && !primary.cancelAt;

        if (!hasActive) return 'smartenroll.plans.purchase_this_plan';

        if (this.isSameTierAsSelectedPlan()) {
            return this.isSameTierVolumeUpdate()
                ? 'smartenroll.plans.update_enrollment_volume'
                : 'smartenroll.plans.no_volume_change';
        }

        return 'smartenroll.plans.switch_plan';
    }

    isCheckoutActionDisabled(): boolean {
        if (this.subscribingToPlan) return true;

        if (!this.selectedPlan || this.selectedPlan === 'free') return false;

        if (this.isSameTierAsSelectedPlan() && !this.isSameTierVolumeUpdate()) return true;

        return false;
    }

    createOrUpdateSubscription(): void {
        if (this.subscribingToPlan || this.isCheckoutActionDisabled()) return;

        if (!this._hasVerifikAccessToken()) return;

        this._ensureInvoiceSettings$().subscribe((ok) => {
            if (!ok) {
                this._dialog.open(SmartEnrollBillingRequiredDialogComponent, { width: '420px' });
                return;
            }

            if (this.selectedPlan !== 'free' && this.isSameTierVolumeUpdate()) {
                const from = this.currentSubscribedEnrollments ?? 0;
                const to = this.selectedEnrollmentsCount();

                this._dialog
                    .open(SmartEnrollVolumeConfirmDialogComponent, {
                        width: '420px',
                        data: { from, to },
                    })
                    .afterClosed()
                    .subscribe((confirmed) => {
                        if (confirmed) this._submitSubscriptionChange();
                    });

                return;
            }

            this._submitSubscriptionChange();
        });
    }

    private _syncSliderIndexFromActiveSubscription(planKey: 'plus' | 'business'): void {
        const sub = this.getPrimaryActiveSubscription();
        if (!sub || sub.cancelAt) return;

        const catalog = this.plans?.[planKey];
        if (!catalog || sub.code !== catalog.code) return;

        const base = catalog.biometricsLimit ?? 0;
        const currentQty = sub.biometricsLimit ?? base;
        const added = currentQty - base;
        const step = 100;
        let index = Math.round(added / step);

        const notches = this.sliderOptions?.notches ?? [];
        if (!notches.length) return;

        const maxIdx = notches.length - 1;
        index = Math.max(0, Math.min(index, maxIdx));

        if (this.sliderOptions) this.sliderOptions.value = index;
    }

    private _submitSubscriptionChange(): void {
        this.subscribingToPlan = true;

        const plan = this.plans[this.selectedPlan];

        this._splashScreenService.show();

        const primary = this.getPrimaryActiveSubscription();
        const currentSubscriptionNotCancelled = !!primary && !primary.cancelAt;

        if (this.currentSubscription.length > 0 && currentSubscriptionNotCancelled) {
            const payload: any = {
                quantity: this.selectedPlan === 'free' ? 0 : this.getSliderAmount(this.selectedPlan),
                plan: plan.stripeProduct,
                source: SMART_AGENT_CHECKOUT_SOURCE,
            };

            if (primary?.code !== plan.code) {
                payload.defaultPrice = plan.stripePrice;
            }

            this._enrollPlansService.upgradeClientEnrollPlan(payload).subscribe({
                next: (result) => {
                    if (!result) {
                        this.subscribingToPlan = false;
                        this._splashScreenService.hide();
                        return;
                    }

                    const url = result?.data?.url;

                    if (url) {
                        window.location.href = url;
                        return;
                    }

                    this.ngOnInit();
                },
                error: () => {
                    this.subscribingToPlan = false;
                    this._splashScreenService.hide();
                },
            });
            return;
        }

        const payload = {
            quantity: this.selectedPlan === 'free' ? 0 : this.getSliderAmount(this.selectedPlan),
            plan: plan.stripeProduct,
            defaultPrice: plan.stripePrice,
            source: SMART_AGENT_CHECKOUT_SOURCE,
        };

        this._enrollPlansService.postClientEnrollPlan(payload).subscribe({
            next: (response) => {
                const url = response?.data?.url;

                if (url) window.location.href = url;
                else {
                    this.subscribingToPlan = false;
                    this._splashScreenService.hide();
                }
            },
            error: () => {
                this.subscribingToPlan = false;
                this._splashScreenService.hide();
            },
        });
    }

    creditCardLogo(company: string): string {
        const logos: Record<string, string> = {
            visa: 'https://cdn.verifik.co/assets/billing-svg/VisaLogo.svg',
            mastercard: 'https://cdn.verifik.co/assets/billing-svg/MasterCardLogo.svg',
            amex: 'https://cdn.verifik.co/assets/billing-svg/AmericanExpressLogo.svg',
            link: 'https://cdn.verifik.co/assets/billing-svg/StripeLinkLogo.svg',
        };

        return logos[company?.toLowerCase()] || '';
    }

    isLinkPayment(brand: string): boolean {
        return brand?.toLowerCase() === 'link';
    }

    getAddedSmartEnrolls(): number {
        return 100 * (this.sliderOptions?.value || 0);
    }

    getTrackFillPercentage(): number {
        if (!this.sliderOptions?.notches?.length) return 0;
        const maxIndex = this.sliderOptions.notches.length - 1;
        const currentValue = this.sliderOptions.value || 0;
        return (currentValue / maxIndex) * 100;
    }

    getPlan(plan: string): any {
        return this.plans?.[plan];
    }

    getSliderAmount(plan: string): number {
        return (this.getPlan(plan)?.biometricsLimit || 0) + this.getAddedSmartEnrolls();
    }

    goBack(direction: string | null = null): void {
        if (direction) {
            if (this.sliderOptions) this.sliderOptions.value = 0;

            this.currentView = direction;
            this.selectedPlan = null;
            this._changeDetectorRef.markForCheck();

            return;
        }

        this.selectedPlan = null;
        this.currentView = 'current';
    }

    goToStripeSubscriptions(): void {
        this._redirectToStripe();
    }

    purchaseEnterprise(): void {
        const url: Record<string, string> = {
            es: `https://api.whatsapp.com/send?phone=573208184565&text=%C2%A1Hola!%20estoy%20interesado%20en%20adquirir%20un%20plan%20enterprise%20por%20smartEnroll.`,
            en: `https://api.whatsapp.com/send?phone=573208184565&text=Hello!%20I%20am%20interested%20on%20adquiring%20enterprise%20plan%20for%20smartEnroll.`,
        };

        const lang = this._translocoService.getActiveLang();
        window.open(url[lang] || url['en'], '_blank');
    }

    getSmsWhatsappPricesUrl(): string {
        const currentLang = this._translocoService.getActiveLang();

        if (currentLang === 'en') {
            return 'https://docs.verifik.co/phone-validations/sms-and-whatsapp-prices';
        }

        return 'https://docs.verifik.co/verifik-es/planes-y-precios/precios-de-sms-whatsapp/';
    }

    getPlanColorClass(codeShow: string): string {
        if (!codeShow) return 'free';

        const code = codeShow.toLowerCase();

        if (code === 'free' || code === 'pyg') return 'free';
        if (code === 'plus') return 'plus';
        if (code === 'business') return 'business';

        return 'free';
    }
}
