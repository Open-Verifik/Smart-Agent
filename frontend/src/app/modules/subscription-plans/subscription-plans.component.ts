import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { environment } from 'environments/environment';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import type { BringBackOffer } from 'app/core/user/user.types';
import { UserService } from 'app/core/user/user.service';
import { Subject, catchError, forkJoin, of } from 'rxjs';
import { BillingRequiredDialogComponent } from './billing-required-dialog/billing-required-dialog.component';
import { PlanChangeDialogComponent } from './plan-change-dialog/plan-change-dialog.component';
import {
    extractClientSettingsPayload,
    invoiceBillingDetailsComplete,
} from '../settings/utils/invoice-billing-complete';
import {
    applyApiRequestDiscountToBasePrice,
    formatBenefitRowsFromChanges,
    hasOtherPlanWithApiDiscount,
} from './subscription-plan-benefits.util';
import {
    AppFeature,
    ClientSubscription,
    MonthlyUsageMetric,
    PlanZone,
    SubscriptionPlan,
} from './subscription-plan.types';
import { SubscriptionService } from './subscription.service';

const APP_FEATURES_CACHE_KEY = 'smartAgent_appFeatures';
const USAGE_BASELINE_MONTHS = 3;
/** Max samples across the slider range when computing plan zones (boundaries are then refined exactly). */
const PLAN_ZONE_SAMPLES = 400;
/** Zones narrower than this share of the track render without a text label (name stays in the tooltip). */
const PLAN_ZONE_MIN_LABEL_PERCENT = 9;

@Component({
    selector: 'subscription-plans',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        RouterModule,
        MatIconModule,
        MatSnackBarModule,
        MatTooltipModule,
        PlanChangeDialogComponent,
        BillingRequiredDialogComponent,
    ],
    templateUrl: './subscription-plans.component.html',
    styleUrls: ['./subscription-plans.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SubscriptionPlansComponent implements OnInit, OnDestroy {
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    @ViewChild('plansExploreAnchor') plansExploreAnchor?: ElementRef<HTMLElement>;

    // State
    currentSubscription: ClientSubscription | null = null;
    plans: SubscriptionPlan[] = [];
    loadingPlans = false;
    currentView: 'current' | 'explore' = 'current';
    selectedInterval: 'month' | 'year' = 'month';

    // UI state
    isLoading = false;
    hasBillingSetup = false;
    hasPaymentMethod = false;

    /** Active bring-back offer from session (2x recharge / 3x recharge+subscription). */
    bringBackOffer: BringBackOffer | null = null;

    // Request estimator (single source of truth: requestsPerMonth)
    requestsPerMonth = 2000;
    requestsPerYear = 24000;
    readonly BASE_REQUEST_PRICE = 0.3;
    /** Higher-tier dominates lower when gap exceeds this USD buffer (paired with dominanceMarginFraction). */
    readonly PLAN_VISIBILITY_DOMINANCE_MARGIN_MIN_USD = 100;
    readonly PLAN_VISIBILITY_DOMINANCE_MARGIN_FRACTION = 0.18;
    readonly MONTHLY_SLIDER_MAX = 20000;
    readonly MONTHLY_SLIDER_STEP = 1;
    readonly YEARLY_SLIDER_MAX = 500000;
    readonly YEARLY_SLIDER_STEP = 1;

    /** Average monthly requests over the last complete months with traffic; null when there is no history. */
    usageBaselinePerMonth: number | null = null;
    usageBaselineMonths = 0;
    private _volumeTouchedByUser = false;
    private _planZonesCache: { key: string; zones: PlanZone[] } | null = null;

    // Estimator mode: pick exact requests, or invert from a target monthly budget
    estimatorMode: 'requests' | 'budget' = 'requests';
    targetMonthlyBudget: number | null = null;
    budgetReferencePlanId = '';

    // Dialog state
    showPlanChangeDialog = false;
    showBillingRequiredModal = false;
    selectedPlanForChange: SubscriptionPlan | null = null;
    selectedPlanRequests = 0;
    selectedPlanCostDeltaVsBest = 0;
    selectedPlanRecommendedName: string | null = null;
    selectedFeatureForModal: AppFeature | null = null;

    // Data
    servicesByCountry: any = {};
    countries: string[] = [];

    // API breakdown view
    showApiBreakdown = false;
    appFeatures: AppFeature[] = [];
    loadingFeatures = false;
    apiBreakdownSearchQuery = '';
    apiBreakdownCountryFilter = '';
    apiBreakdownCategoryFilter = '';

    // My-list features (current user prices) for current plan view
    myListFeatures: AppFeature[] = [];
    loadingMyListFeatures = false;
    myListSearchQuery = '';
    myListCountryFilter = '';
    myListCategoryFilter = '';

    constructor(
        private _subscriptionService: SubscriptionService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _translocoService: TranslocoService,
        private _snackBar: MatSnackBar,
        private _authGate: AuthRequiredGateService,
        private _userService: UserService
    ) {}

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this._bootstrapSubscriptionPlansAfterAuth(),
            panelClass: 'auth-required-dialog',
        });
    }

    private _bootstrapSubscriptionPlansAfterAuth(): void {
        this._loadBringBackOffer();
        this._loadUsageBaseline();
        this._loadCurrentSubscription();
        this._checkBillingSetup();
        this._confirmSessionIfPresent();
    }

    private _loadBringBackOffer(): void {
        this._userService
            .get()
            .pipe(
                catchError((err) => {
                    console.error('Failed to load session for bring-back offer:', err);
                    return of(null);
                }),
            )
            .subscribe((user) => {
                const offer = user?.bringBackOffer;
                this.bringBackOffer =
                    offer?.kind === 'bring_back' && offer.eligible ? offer : null;
            });
    }

    /**
     * Seeds the estimator with the client's real average monthly volume over the last
     * complete months that had traffic. Keeps the static default when there is no history
     * or the user already moved the estimator.
     */
    private _loadUsageBaseline(): void {
        const months = this._lastCompleteMonths(USAGE_BASELINE_MONTHS);
        const years = Array.from(new Set(months.map((m) => m.year)));

        forkJoin(
            years.map((year) =>
                this._subscriptionService
                    .getMonthlyUsage(year)
                    .pipe(catchError(() => of([] as MonthlyUsageMetric[])))
            )
        ).subscribe((responses) => {
            const rows = responses.flatMap((r) => (Array.isArray(r) ? r : (r?.data ?? [])));
            const totals = months
                .map(
                    (m) =>
                        rows.find((row) => row._id?.year === m.year && row._id?.month === m.month)
                            ?.total ?? 0
                )
                .filter((total) => total > 0);

            if (!totals.length) return;

            this.usageBaselinePerMonth = Math.round(
                totals.reduce((sum, total) => sum + total, 0) / totals.length
            );
            this.usageBaselineMonths = totals.length;

            if (!this._volumeTouchedByUser) this._applyUsageBaseline();
        });
    }

    /** Previous `count` calendar months (UTC), most recent first, excluding the current month. */
    private _lastCompleteMonths(count: number): { year: number; month: number }[] {
        const now = new Date();

        return Array.from({ length: count }, (_, i) => {
            const date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - (i + 1), 1));

            return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1 };
        });
    }

    private _applyUsageBaseline(): void {
        if (this.usageBaselinePerMonth == null) return;

        this.requestsPerMonth = this.usageBaselinePerMonth;
        this.requestsPerYear = this.usageBaselinePerMonth * 12;
        this._syncBudgetFromRequests();
    }

    resetToUsageBaseline(): void {
        this._volumeTouchedByUser = false;
        this._applyUsageBaseline();
    }

    get isAtUsageBaseline(): boolean {
        return this.usageBaselinePerMonth != null && this.requestsPerMonth === this.usageBaselinePerMonth;
    }

    get showBringBackPromoBanner(): boolean {
        return Boolean(this.bringBackOffer?.eligible);
    }

    get bringBackPromoExampleCredits(): number {
        const multiplier = this.bringBackOffer?.multiplier || 2;

        return Math.round(400 * multiplier);
    }

    /**
     * Basic / Plus / Business (and common locale aliases) qualify for first-month promo badge.
     */
    isBringBackPromoPlan(plan: SubscriptionPlan): boolean {
        if (!this.showBringBackPromoBanner) {
            return false;
        }

        const name = (plan.name || '').toLowerCase();

        return (
            /\bbasic\b/.test(name) ||
            name.includes('básico') ||
            /\bplus\b/.test(name) ||
            /\bbusiness\b/.test(name) ||
            name.includes('empresarial') ||
            /\bsmart\s*basic\b/.test(name) ||
            /\bsmart\s*plus\b/.test(name) ||
            /\bsmart\s*business\b/.test(name)
        );
    }

    bringBackFirstMonthCredits(plan: SubscriptionPlan): number {
        const amount = Number(plan.amount) || 0;
        const multiplier = this.bringBackOffer?.multiplier || 2;

        return Math.round(amount * multiplier);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    goToBillingDetails(): void {
        this.showBillingRequiredModal = false;
        this._router.navigate(['/settings', 'billing-details'], {
            queryParams: { returnUrl: '/subscription-plans' },
        });
    }

    // View switching
    switchToExplore(): void {
        this.currentView = 'explore';
        this._loadPlans();
    }

    switchToCurrent(): void {
        this.currentView = 'current';
    }

    // Interval switching
    changeInterval(interval: 'month' | 'year'): void {
        if (interval === 'year' && this.selectedInterval === 'month') {
            this.requestsPerYear = this.requestsPerMonth * 12;
        } else if (interval === 'month' && this.selectedInterval === 'year') {
            this.requestsPerMonth = Math.round(this.requestsPerYear / 12);
        }
        this.selectedInterval = interval;
        this._loadPlans();
    }

    // Actions
    upgradePlan(plan: SubscriptionPlan): void {
        // Open plan change dialog
        const best = this.requestsPerMonth > 0 ? this.recommendedPlan : null;

        this.selectedPlanRequests = this.getStripeCheckoutQuantityFromEstimator(plan);
        this.selectedPlanForChange = plan;
        this.selectedPlanRecommendedName = best?.name ?? null;
        this.selectedPlanCostDeltaVsBest =
            best && best._id !== plan._id
                ? Math.round(this.getEstimatedTotal(plan) - this.getEstimatedTotal(best))
                : 0;
        this.showPlanChangeDialog = true;
    }

    confirmPlanChange(): void {
        if (!this.selectedPlanForChange) return;

        this.isLoading = true;
        this.showPlanChangeDialog = false;

        this._subscriptionService
            .changeMySubscription({
                id: this.selectedPlanForChange._id,
                requestsPerMonth: this.selectedPlanRequests,
            })
            .subscribe({
                next: (response) => {
                    this.isLoading = false;
                    if (response?.data?.url) {
                        window.open(response.data.url, '_self');
                    }
                },
                error: (error) => {
                    console.error('Error changing subscription:', error);
                    this.isLoading = false;
                },
            });
    }

    cancelPlanChange(): void {
        this.showPlanChangeDialog = false;
        this.selectedPlanForChange = null;
    }

    showApiBreakdownView(): void {
        this.showApiBreakdown = true;
        this._loadApiFeatures();
        if (this.plans.length === 0) {
            this._loadPlans();
        }
    }

    hideApiBreakdownView(): void {
        this.showApiBreakdown = false;
    }

    openPostmanForFeature(feature: AppFeature): void {
        if (!feature?.code) return;
        const baseUrl = window.location.origin;
        const postmanUrl = `${baseUrl}/postman?code=${encodeURIComponent(feature.code)}`;
        window.open(postmanUrl, '_blank');
    }

    showEndpointUrlToast(feature: AppFeature): void {
        // Deprecated: replaced by Privy modal
        this.openFeatureModal(feature);
    }
    
    openFeatureModal(feature: AppFeature): void {
        this.selectedFeatureForModal = feature;
    }

    closeFeatureModal(): void {
        this.selectedFeatureForModal = null;
    }

    getFullEndpointUrl(url?: string): string {
        if (!url) return 'N/A';
        return url.startsWith('http')
            ? url
            : `${environment.apiUrl.replace(/\/$/, '')}/${url.replace(/^\//, '')}`;
    }

    copyUrlToClipboard(url?: string): void {
        const fullUrl = this.getFullEndpointUrl(url);
        if (!fullUrl || fullUrl === 'N/A') return;
        navigator.clipboard.writeText(fullUrl).then(() => {
            this._snackBar.open('URL copied to clipboard!', undefined, { duration: 2000 });
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    /**
     * Catalog / my-list base price per feature (smartCheck vs standard); no plan discount applied.
     */
    getCatalogBasePriceForApi(feature: AppFeature, plan: SubscriptionPlan): number {
        const isSmartCheckPlan = Boolean(plan.isSmartcheck);
        return isSmartCheckPlan && feature.smartCheckPrice != null
            ? feature.smartCheckPrice
            : (feature.price ?? 0);
    }

    getEffectivePriceForApi(feature: AppFeature, plan: SubscriptionPlan): number {
        return this.getCatalogBasePriceForApi(feature, plan);
    }

    /**
     * Public catalog row × plan column: apply each plan's apiRequest discount from changesInPrices.
     */
    getCompareTablePriceForApi(feature: AppFeature, plan: SubscriptionPlan): number {
        return applyApiRequestDiscountToBasePrice(
            this.getCatalogBasePriceForApi(feature, plan),
            plan.discount
        );
    }

    private _loadApiFeatures(): void {
        const cached =
            typeof sessionStorage !== 'undefined' && sessionStorage.getItem(APP_FEATURES_CACHE_KEY);
        if (cached) {
            try {
                const parsed = JSON.parse(cached) as AppFeature[];
                if (Array.isArray(parsed) && parsed.length > 0) {
                    this.appFeatures = parsed.filter((f) => f.group === 'apiRequest');
                    return;
                }
            } catch {
                // Invalid cache, fall through to fetch
            }
        }

        this.loadingFeatures = true;
        this._subscriptionService.getPublicAppFeatures().subscribe({
            next: (response) => {
                const raw = response?.data as any;
                const list = Array.isArray(raw) ? raw : (raw?.docs ?? []);
                if (list.length > 0) {
                    try {
                        sessionStorage.setItem(APP_FEATURES_CACHE_KEY, JSON.stringify(list));
                    } catch {
                        // Ignore storage errors
                    }
                }
                this.appFeatures = list.filter((f: AppFeature) => f.group === 'apiRequest');
                this.loadingFeatures = false;
            },
            error: (error) => {
                console.error('Error loading app features:', error);
                this.loadingFeatures = false;
            },
        });
    }

    manageBilling(): void {
        this._subscriptionService.createPortalSession().subscribe({
            next: (response) => {
                if (response?.data?.url) {
                    window.open(response.data.url, '_self');
                }
            },
            error: (error) => {
                console.error('Error creating portal session:', error);
            },
        });
    }

    cancelSubscription(): void {
        if (!this.currentSubscription) return;

        // TODO: Implement cancel dialog
        this._subscriptionService
            .cancelSubscription({ id: this.currentSubscription._id })
            .subscribe({
                next: () => {
                    this._loadCurrentSubscription();
                },
                error: (error) => {
                    console.error('Error canceling subscription:', error);
                },
            });
    }

    // Helpers
    getAmountByMonth(plan: Partial<SubscriptionPlan>): string {
        const amount = plan?.amount || plan?.amountByMonth;
        const intervalCount = plan?.intervalCount;
        const paymentsPerYear = 12 / intervalCount;

        return plan.interval === 'month'
            ? amount.toFixed(2)
            : (plan?.amount / paymentsPerYear || plan?.amountByMonth * paymentsPerYear).toFixed(2);
    }

    getAmountByYear(plan: Partial<SubscriptionPlan>): string {
        const amount = plan?.amount || plan?.amountByMonth;
        const intervalCount = plan?.intervalCount;
        const paymentsPerYear = 12 / intervalCount;

        return plan.interval === 'year'
            ? (plan?.amount || plan?.amountByMonth * paymentsPerYear).toFixed(2)
            : (amount * paymentsPerYear).toFixed(2);
    }

    isBoolean(value: any): boolean {
        return value === true || value === false;
    }

    onSliderChange(event: Event): void {
        const value = Number((event.target as HTMLInputElement).value);
        this._volumeTouchedByUser = true;
        this._setRequestsFromInterval(value);
        this._syncBudgetFromRequests();
    }

    /**
     * Direct numeric input for requests. Clamps to [0, sliderMax] and keeps
     * monthly/yearly buckets in sync. Triggered by both modes' inputs.
     */
    onRequestsInput(rawValue: string | number): void {
        const parsed = Math.max(0, Math.min(this.sliderMax, Math.round(Number(rawValue) || 0)));
        this._volumeTouchedByUser = true;
        this._setRequestsFromInterval(parsed);
        this._syncBudgetFromRequests();
    }

    /**
     * User typed a target monthly $ amount: pick the plan + R that get closest
     * to that target, then set reference + `requestsPerMonth` (not a static ref plan).
     * Tie-break: same error => higher R (more API volume for the same spend).
     */
    onBudgetInput(rawValue: string | number): void {
        const target = Math.max(0, Number(rawValue) || 0);
        this._volumeTouchedByUser = true;
        this.targetMonthlyBudget = target;
        this._autoPickReferenceAndRequestsForTarget(target);
    }

    onReferencePlanChange(planId: string): void {
        this.budgetReferencePlanId = planId;
        if (this.estimatorMode === 'budget' && this.targetMonthlyBudget != null) {
            const plan = this.plans.find((p) => p._id === planId);
            if (plan) {
                const r = this._findBestRForTargetPlan(plan, this.targetMonthlyBudget);
                this.requestsPerMonth = r;
                this.requestsPerYear = r * 12;
            }
        }
    }

    setEstimatorMode(mode: 'requests' | 'budget'): void {
        this.estimatorMode = mode;
        if (mode === 'budget') {
            // Seed budget from current reference plan total so the UI doesn't jump
            const plan = this._getReferencePlan();
            this.targetMonthlyBudget = plan
                ? Math.round(this.getEstimatedTotal(plan))
                : null;
        }
    }

    /**
     * Honest "closest achievable" copy: when the user types a target budget,
     * the discrete cost-per-request grid usually can't hit it exactly. Returns
     * the rounded delta (positive = over budget, negative = under).
     */
    getBudgetDelta(): number | null {
        if (this.estimatorMode !== 'budget' || this.targetMonthlyBudget == null) return null;
        const plan = this._getReferencePlan();
        if (!plan) return null;
        const achieved = this.getEstimatedTotal(plan);
        return Math.round((achieved - this.targetMonthlyBudget) * 100) / 100;
    }

    /** Exact monthly total achievable for the budget reference plan. */
    getBudgetAchievedTotal(): number {
        const plan = this._getReferencePlan();
        return plan ? this.getEstimatedTotal(plan) : 0;
    }

    get budgetReferencePlan(): SubscriptionPlan | null {
        return this._getReferencePlan();
    }

    private _setRequestsFromInterval(value: number): void {
        if (this.selectedInterval === 'year') {
            this.requestsPerYear = value;
            this.requestsPerMonth = Math.round(value / 12);
        } else {
            this.requestsPerMonth = value;
            this.requestsPerYear = value * 12;
        }
    }

    private _syncBudgetFromRequests(): void {
        if (this.estimatorMode !== 'budget') return;
        const plan = this._getReferencePlan();
        if (!plan) return;
        this.targetMonthlyBudget = Math.round(this.getEstimatedTotal(plan));
    }

    private _getReferencePlan(): SubscriptionPlan | null {
        const candidates = this.plans.filter((p) => p._id);
        if (!candidates.length) return null;
        const byId = candidates.find((p) => p._id === this.budgetReferencePlanId);
        if (byId) return byId;
        const bestId = this.getBestValuePlanId();
        return candidates.find((p) => p._id === bestId) || candidates[0];
    }

    /**
     * Total monthly price for a plan at an explicit R (ignores `requestsPerMonth` on the component).
     */
    private _getEstimatedTotalForR(plan: SubscriptionPlan, r: number): number {
        const base = this.getBaseMonthlyAmount(plan);
        const inc = this.getIncludedRequests(plan);
        const ppr = this.getEffectiveCostPerRequest(plan);
        const useInc = isFinite(inc) ? inc : 0;
        const extra = Math.max(0, r - useInc);
        return base + extra * ppr;
    }

    /**
     * Integer R in [0, cap] that minimizes |f(R) - target| for this plan.
     * Ties: prefer larger R (more included usage / volume for the same error).
     */
    private _findBestRForTargetPlan(plan: SubscriptionPlan, target: number): number {
        const cap = this.monthlyVolumeMax;
        let bestR = 0;
        let bestErr = Infinity;
        for (let r = 0; r <= cap; r++) {
            const total = this._getEstimatedTotalForR(plan, r);
            const err = Math.abs(total - target);
            if (err < bestErr) {
                bestErr = err;
                bestR = r;
            } else if (err === bestErr && r > bestR) {
                bestR = r;
            }
        }
        return bestR;
    }

    /**
     * Among visible plans, pick the one that can get closest to `target` monthly
     * (using its own optimal R), then set `budgetReferencePlanId` and requests.
     * Tie on error: pick the pair with the larger R (e.g. $1000 → Business at ~6.7k
     * over Plus at 5k when both can hit the target exactly).
     */
    private _autoPickReferenceAndRequestsForTarget(target: number): void {
        const list = this.visiblePlans.filter((p) => p._id);
        if (!list.length) return;

        let bestPlan: SubscriptionPlan | null = null;
        let bestR = 0;
        let bestErr = Infinity;

        for (const plan of list) {
            const r = this._findBestRForTargetPlan(plan, target);
            const total = this._getEstimatedTotalForR(plan, r);
            const err = Math.abs(total - target);
            if (err < bestErr) {
                bestErr = err;
                bestR = r;
                bestPlan = plan;
            } else if (err === bestErr && r > bestR) {
                bestR = r;
                bestPlan = plan;
            }
        }

        if (bestPlan?._id) {
            this.budgetReferencePlanId = bestPlan._id;
            this.requestsPerMonth = bestR;
            this.requestsPerYear = bestR * 12;
        }
    }

    get sliderValue(): number {
        return this.selectedInterval === 'year' ? this.requestsPerYear : this.requestsPerMonth;
    }

    get sliderMax(): number {
        return this.selectedInterval === 'year'
            ? Math.max(this.YEARLY_SLIDER_MAX, this.monthlyVolumeMax * 12)
            : this.monthlyVolumeMax;
    }

    /** Monthly slider ceiling; grows so a high-volume client's real usage sits mid-track instead of clamped. */
    get monthlyVolumeMax(): number {
        const baseline = this.usageBaselinePerMonth ?? 0;
        const stretched = Math.ceil((baseline * 1.5) / 1000) * 1000;

        return Math.max(this.MONTHLY_SLIDER_MAX, stretched);
    }

    /** Monthly-equivalent span of the slider track, used to position plan zones. */
    private get _zoneTrackMax(): number {
        return this.selectedInterval === 'year' ? Math.round(this.sliderMax / 12) : this.sliderMax;
    }

    get sliderStep(): number {
        return this.selectedInterval === 'year'
            ? this.YEARLY_SLIDER_STEP
            : this.MONTHLY_SLIDER_STEP;
    }

    /**
     * Contiguous monthly-volume ranges across the slider track where each plan is the
     * recommended one (same rules as `getBestValuePlanId`). Sampled, then each boundary
     * is refined by binary search so "good until" figures are exact.
     */
    get planZones(): PlanZone[] {
        const max = this._zoneTrackMax;
        const key = `${this.selectedInterval}|${max}|${this.currentSubscription?.subscriptionPlan?.code ?? ''}|${this.plans.map((p) => p._id).join(',')}`;
        if (this._planZonesCache?.key === key) return this._planZonesCache.zones;

        const zones = this._computePlanZones(max);
        this._planZonesCache = { key, zones };

        return zones;
    }

    private _computePlanZones(max: number): PlanZone[] {
        if (!this.visiblePlans.length || max <= 0) return [];

        const step = Math.max(1, Math.ceil(max / PLAN_ZONE_SAMPLES));
        const zones: PlanZone[] = [];
        let from = 1;
        let bestId = this._bestPlanIdAt(from);

        for (let r = from + step; r <= max + step - 1; r += step) {
            const probe = Math.min(r, max);
            const probeId = this._bestPlanIdAt(probe);
            if (probeId === bestId) continue;

            const boundary = this._firstVolumeWithDifferentBest(probe - step, probe, bestId);
            zones.push(this._toZone(bestId, from, boundary - 1));
            from = boundary;
            bestId = this._bestPlanIdAt(from);
        }

        zones.push(this._toZone(bestId, from, max));

        return zones.filter((zone) => zone.planId && zone.to >= zone.from);
    }

    /** Smallest R in (lo, hi] whose recommended plan is not `bestId`; assumes it differs at `hi`. */
    private _firstVolumeWithDifferentBest(lo: number, hi: number, bestId: string): number {
        let low = lo;
        let high = hi;

        while (high - low > 1) {
            const mid = Math.floor((low + high) / 2);
            if (this._bestPlanIdAt(mid) === bestId) low = mid;
            else high = mid;
        }

        return high;
    }

    private _toZone(planId: string, from: number, to: number): PlanZone {
        const plan = this.plans.find((p) => p._id === planId);

        return { planId, name: plan?.name ?? '', from, to };
    }

    /** Left offset and width of a zone on the slider track, in percent. */
    getZoneStyle(zone: PlanZone): { left: string; width: string } {
        const max = this._zoneTrackMax || 1;
        const left = ((zone.from - 1) / max) * 100;
        const width = ((zone.to - zone.from + 1) / max) * 100;

        return { left: `${left}%`, width: `${width}%` };
    }

    showZoneLabel(zone: PlanZone): boolean {
        const max = this._zoneTrackMax || 1;

        return ((zone.to - zone.from + 1) / max) * 100 >= PLAN_ZONE_MIN_LABEL_PERCENT;
    }

    isActiveZone(zone: PlanZone): boolean {
        return this.requestsPerMonth >= zone.from && this.requestsPerMonth <= zone.to;
    }

    /** Snap the estimator to the first volume where this zone's plan becomes the recommendation. */
    selectZone(zone: PlanZone): void {
        this._volumeTouchedByUser = true;
        this.requestsPerMonth = zone.from;
        this.requestsPerYear = zone.from * 12;
        this._syncBudgetFromRequests();
    }

    /** Volume in the slider's display unit (per month or per year). */
    toDisplayVolume(monthlyRequests: number): number {
        return this.selectedInterval === 'year' ? monthlyRequests * 12 : monthlyRequests;
    }

    get recommendedPlan(): SubscriptionPlan | null {
        const id = this.getBestValuePlanId();

        return this.plans.find((p) => p._id === id) ?? null;
    }

    /** Cheapest plan other than the recommended one at the current volume. */
    get runnerUpPlan(): SubscriptionPlan | null {
        const best = this.recommendedPlan;
        if (!best) return null;

        const others = this.visiblePlans.filter((p) => p._id !== best._id);
        if (!others.length) return null;

        return others.reduce((cheapest, plan) =>
            this.getEstimatedTotal(plan) < this.getEstimatedTotal(cheapest) ? plan : cheapest
        );
    }

    /** Savings of the recommended plan vs the runner-up, in the display unit. Null when not positive. */
    get recommendedSavings(): number | null {
        const best = this.recommendedPlan;
        const runnerUp = this.runnerUpPlan;
        if (!best || !runnerUp) return null;

        const savings = this.getDisplayEstimatedTotal(runnerUp) - this.getDisplayEstimatedTotal(best);

        return savings >= 1 ? savings : null;
    }

    /** Zone after the one containing the current volume, i.e. what takes over once usage grows. */
    get nextZone(): PlanZone | null {
        const zones = this.planZones;
        const index = zones.findIndex((zone) => this.isActiveZone(zone));

        return index >= 0 && index < zones.length - 1 ? zones[index + 1] : null;
    }

    get activeZone(): PlanZone | null {
        return this.planZones.find((zone) => this.isActiveZone(zone)) ?? null;
    }

    /** Extra cost of a plan vs the recommended one at the current volume, in the display unit. */
    getCostDeltaVsBest(plan: SubscriptionPlan): number {
        const best = this.recommendedPlan;
        if (!best || best._id === plan._id) return 0;

        return Math.round(this.getDisplayEstimatedTotal(plan) - this.getDisplayEstimatedTotal(best));
    }

    isRecommendedPlan(plan: SubscriptionPlan): boolean {
        return Boolean(plan._id) && plan._id === this.getBestValuePlanId() && this.requestsPerMonth > 0;
    }

    /** Included requests per month for a plan, or null when the plan has no prepaid volume. */
    getIncludedRequestsDisplay(plan: SubscriptionPlan): number | null {
        const included = this.getIncludedRequests(plan);

        return Number.isFinite(included) && included > 0 ? included : null;
    }

    getEffectiveCostPerRequest(plan: SubscriptionPlan): number {
        return applyApiRequestDiscountToBasePrice(this.BASE_REQUEST_PRICE, plan.discount);
    }

    /**
     * What each request really costs on this plan at the estimated volume (monthly total / requests).
     * Falls back to the plan rate when no volume is set.
     */
    getAverageCostPerRequest(plan: SubscriptionPlan): number {
        if (this.requestsPerMonth <= 0) return this.getEffectiveCostPerRequest(plan);

        return this.getEstimatedTotal(plan) / this.requestsPerMonth;
    }

    /** Whole-percent discount of the plan rate vs the base request price. */
    getRateDiscountPercent(plan: SubscriptionPlan): number {
        const percent = Math.round((1 - this.getEffectiveCostPerRequest(plan) / this.BASE_REQUEST_PRICE) * 100);

        return percent > 0 ? percent : 0;
    }

    getBaseMonthlyAmount(plan: SubscriptionPlan): number {
        if (!plan.amount) return 0;
        return plan.interval === 'year' ? plan.amount / 12 : plan.amount;
    }

    getIncludedRequests(plan: SubscriptionPlan): number {
        const baseMonthly = this.getBaseMonthlyAmount(plan);
        const pricePerReq = this.getEffectiveCostPerRequest(plan);
        if (pricePerReq <= 0) return Infinity;
        return Math.floor(baseMonthly / pricePerReq);
    }

    /**
     * Maps estimator volume to Stripe checkout `requestsPerMonth` (line_items quantity).
     * When slider is at 0, uses prepaid volume aligned with the sticker base (~monthly_amount / discounted $/request), never zero.
     */
    getStripeCheckoutQuantityFromEstimator(plan: SubscriptionPlan): number {
        if (this.requestsPerMonth > 0) {
            return Math.round(this.requestsPerMonth);
        }

        const included = this.getIncludedRequests(plan);
        if (Number.isFinite(included) && included >= 1) {
            return Math.round(included);
        }

        const lim = plan.limit;
        const fromLimit =
            typeof lim === 'number' && Number.isFinite(lim) ? Math.round(lim) : 1;
        return Math.max(1, fromLimit);
    }

    getExtraRequests(plan: SubscriptionPlan): number {
        return Math.max(0, this.requestsPerMonth - this.getIncludedRequests(plan));
    }

    getMonthlyRequestSpend(plan: SubscriptionPlan): number {
        const extraRequests = this.getExtraRequests(plan);
        return extraRequests * this.getEffectiveCostPerRequest(plan);
    }

    getRequestAddOn(plan: SubscriptionPlan): number {
        return this.getMonthlyRequestSpend(plan);
    }

    getEstimatedTotal(plan: SubscriptionPlan): number {
        const base = this.getBaseMonthlyAmount(plan);
        return base + this.getRequestAddOn(plan);
    }

    getBestValuePlanId(): string {
        return this._bestPlanIdAt(this.requestsPerMonth);
    }

    /**
     * Recommended plan at monthly volume `r`: cheapest competitive plan, preferring plans with an
     * API discount (and skipping starter tiers from 400 req/mo) when there is any volume.
     */
    private _bestPlanIdAt(r: number): string {
        const candidatesPool = this.visiblePlans.filter((p) => this._isPlanCompetitiveAt(p, r));
        if (!candidatesPool.length) return '';

        const cheapest = (list: SubscriptionPlan[]): string =>
            list.reduce((best, plan) =>
                this._getEstimatedTotalForR(plan, r) < this._getEstimatedTotalForR(best, r) ? plan : best
            )._id;

        if (r > 0) {
            let candidates = candidatesPool.filter((p) => p.discount?.discount);
            if (candidates.length && r >= 400) {
                candidates = candidates.filter((p) => !this._isStarterPlan(p));
            }
            if (candidates.length) return cheapest(candidates);
        }

        return cheapest(candidatesPool);
    }

    /**
     * Whether a plan is competitive at the user's current request volume.
     * Current subscription always counts as competitive; otherwise the plan must beat the dominance check
     * (no other tier is significantly cheaper at the same R) and not be a starter SKU at high volume.
     */
    isPlanCompetitive(plan: SubscriptionPlan): boolean {
        return this._isPlanCompetitiveAt(plan, this.requestsPerMonth);
    }

    private _isPlanCompetitiveAt(plan: SubscriptionPlan, r: number): boolean {
        const isCurrent = plan.code === this.currentSubscription?.subscriptionPlan?.code;
        if (isCurrent) return true;
        if (!plan._id) return false;

        if (this._isStarterPlan(plan) && r >= 2000) return false;
        return !this._isDominatedCompetitivelyByAnyPlan(plan, r);
    }

    private _dominanceMarginUsd(dominatorsTotal: number): number {
        return Math.max(
            this.PLAN_VISIBILITY_DOMINANCE_MARGIN_MIN_USD,
            dominatorsTotal * this.PLAN_VISIBILITY_DOMINANCE_MARGIN_FRACTION
        );
    }

    private _isDominatedCompetitivelyByAnyPlan(plan: SubscriptionPlan, r: number): boolean {
        const paidPlans = this.plans.filter((p) => p._id);
        if (!paidPlans.length) return false;

        const planTotal = this._getEstimatedTotalForR(plan, r);

        for (const rival of paidPlans) {
            if (rival._id === plan._id) continue;

            const rivalTotal = this._getEstimatedTotalForR(rival, r);
            if (planTotal > rivalTotal + this._dominanceMarginUsd(rivalTotal)) return true;
        }

        return false;
    }

    private _isStarterPlan(plan: SubscriptionPlan): boolean {
        return /starter/i.test(plan.name) || (plan.amount ?? 0) <= 49;
    }

    /** All paid plans, regardless of competitiveness. Dominated tiers render de-emphasized but selectable. */
    get visiblePlans(): SubscriptionPlan[] {
        return this.plans.filter((p) => p._id);
    }

    /** Plans shown in API breakdown table (Smart plans only) */
    get apiBreakdownPlans(): SubscriptionPlan[] {
        return this.visiblePlans.filter((p) => /smart/i.test(p.name));
    }

    /** Unique countries from app features for filter dropdown */
    get apiBreakdownCountries(): string[] {
        const set = new Set<string>();
        this.appFeatures.forEach((f) => {
            const c = f.country?.trim();
            if (c) set.add(c);
        });
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }

    /** Unique baseCategories from app features for filter dropdown */
    get apiBreakdownCategories(): string[] {
        const set = new Set<string>();
        this.appFeatures.forEach((f) => {
            const c = f.baseCategory?.trim();
            if (c) set.add(c);
        });
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }

    /** API features filtered by search, country, and category */
    get filteredAppFeatures(): AppFeature[] {
        let list = this.appFeatures;

        const q = (this.apiBreakdownSearchQuery || '').trim().toLowerCase();
        if (q) {
            list = list.filter((f) => {
                const displayName = this.getFeatureDisplayName(f).toLowerCase();
                const name = (f.name || '').toLowerCase();
                const code = (f.code || '').toLowerCase();
                const url = (f.url || '').toLowerCase();
                return (
                    displayName.includes(q) ||
                    name.includes(q) ||
                    code.includes(q) ||
                    url.includes(q)
                );
            });
        }

        if (this.apiBreakdownCountryFilter) {
            list = list.filter((f) => (f.country || '').trim() === this.apiBreakdownCountryFilter);
        }

        if (this.apiBreakdownCategoryFilter) {
            list = list.filter(
                (f) => (f.baseCategory || '').trim() === this.apiBreakdownCategoryFilter
            );
        }

        return list;
    }

    /** Filtered features grouped by baseCategory for display */
    get groupedFilteredFeatures(): { category: string; features: AppFeature[] }[] {
        const features = this.filteredAppFeatures;
        const map = new Map<string, AppFeature[]>();
        features.forEach((f) => {
            const cat = (f.baseCategory || '').trim() || '_uncategorized';
            if (!map.has(cat)) map.set(cat, []);
            map.get(cat)!.push(f);
        });
        const categories = Array.from(map.keys()).sort((a, b) => {
            if (a === '_uncategorized') return 1;
            if (b === '_uncategorized') return -1;
            return a.localeCompare(b);
        });
        return categories.map((category) => ({
            category: category === '_uncategorized' ? '' : category,
            features: map.get(category)!,
        }));
    }

    /** Unique countries from my-list features for filter dropdown */
    get myListCountries(): string[] {
        const set = new Set<string>();
        this.myListFeatures.forEach((f) => {
            const c = f.country?.trim();
            if (c) set.add(c);
        });
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }

    /** Unique baseCategories from my-list features for filter dropdown */
    get myListCategories(): string[] {
        const set = new Set<string>();
        this.myListFeatures.forEach((f) => {
            const c = f.baseCategory?.trim();
            if (c) set.add(c);
        });
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }

    /** My-list features filtered by search, country, and category */
    get filteredMyListFeatures(): AppFeature[] {
        let list = this.myListFeatures;

        const q = (this.myListSearchQuery || '').trim().toLowerCase();
        if (q) {
            list = list.filter((f) => {
                const displayName = this.getFeatureDisplayName(f).toLowerCase();
                const name = (f.name || '').toLowerCase();
                const code = (f.code || '').toLowerCase();
                const url = (f.url || '').toLowerCase();
                return (
                    displayName.includes(q) ||
                    name.includes(q) ||
                    code.includes(q) ||
                    url.includes(q)
                );
            });
        }

        if (this.myListCountryFilter) {
            list = list.filter((f) => (f.country || '').trim() === this.myListCountryFilter);
        }

        if (this.myListCategoryFilter) {
            list = list.filter((f) => (f.baseCategory || '').trim() === this.myListCategoryFilter);
        }

        return list;
    }

    /** My-list features grouped by baseCategory for current plan view */
    get groupedMyListFeatures(): { category: string; features: AppFeature[] }[] {
        const features = this.filteredMyListFeatures;
        const map = new Map<string, AppFeature[]>();
        features.forEach((f) => {
            const cat = (f.baseCategory || '').trim() || '_uncategorized';
            if (!map.has(cat)) map.set(cat, []);
            map.get(cat)!.push(f);
        });
        const categories = Array.from(map.keys()).sort((a, b) => {
            if (a === '_uncategorized') return 1;
            if (b === '_uncategorized') return -1;
            return a.localeCompare(b);
        });
        return categories.map((category) => ({
            category: category === '_uncategorized' ? '' : category,
            features: map.get(category)!,
        }));
    }

    /** Add-on cost in the display unit (monthly or yearly) */
    getDisplayRequestAddOn(plan: SubscriptionPlan): number {
        const monthlyAddOn = this.getRequestAddOn(plan);
        return this.selectedInterval === 'year' ? monthlyAddOn * 12 : monthlyAddOn;
    }

    /** Estimated total in the display unit (monthly or yearly) */
    getDisplayEstimatedTotal(plan: SubscriptionPlan): number {
        const monthlyTotal = this.getEstimatedTotal(plan);
        return this.selectedInterval === 'year' ? monthlyTotal * 12 : monthlyTotal;
    }

    formatNumber(value: number): string {
        if (value >= 1000) {
            return (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + 'k';
        }
        return value.toString();
    }

    private _loadCurrentSubscription(): void {
        this._subscriptionService
            .getMySubscription({
                where_active: true,
                findOne: 1,
            })
            .subscribe({
                next: (response) => {
                    if (response?.data) {
                        this.currentSubscription = response.data;
                        this._formatCurrentSubscription();
                        this.currentView = 'current';
                        this._loadMyListFeatures();
                        this._prefetchPlansIfNeededForDiscountCta();
                    } else {
                        this.currentView = 'explore';
                        this._loadPlans();
                    }
                },
                error: (error) => {
                    console.error('Error loading subscription:', error);
                    this.currentView = 'explore';
                    this._loadPlans();
                },
            });
    }

    private _loadMyListFeatures(): void {
        this.loadingMyListFeatures = true;
        this._subscriptionService.getMyListAppFeatures().subscribe({
            next: (response) => {
                const raw = response?.data as any;
                const list = Array.isArray(raw) ? raw : (raw?.docs ?? []);
                this.myListFeatures = list.filter((f: AppFeature) => f.group === 'apiRequest');
                this.loadingMyListFeatures = false;
            },
            error: (error) => {
                console.error('Error loading my-list features:', error);
                this.myListFeatures = [];
                this.loadingMyListFeatures = false;
            },
        });
    }

    private _loadPlans(): void {
        if (this.loadingPlans) return;

        this.loadingPlans = true;

        this._subscriptionService
            .getPricingTableDisplay({ lang: this._getCurrentLang() })
            .subscribe({
                next: (response) => {
                    const plans = response?.data?.plans ?? [];
                    const filtered = plans.filter(
                        (p) => p.interval === this.selectedInterval
                    );
                    this._processPlans(filtered);
                    this.loadingPlans = false;
                },
                error: (error) => {
                    console.error('Error loading plans:', error);
                    this.loadingPlans = false;
                },
            });
    }

    private _getCurrentLang(): string {
        const lang = (typeof navigator !== 'undefined' && navigator.language) || 'en';
        return lang.startsWith('es') ? 'es' : lang.startsWith('fr') ? 'fr' : 'en';
    }

    private _processPlans(plans: SubscriptionPlan[]): void {
        const processedPlans: SubscriptionPlan[] = [];
        const planIdMap: Record<string, boolean> = {};
        const currentAmount = this.currentSubscription?.subscriptionPlan?.amount || 0;

        // Format the results
        plans.forEach((plan) => {
            // Use displayName from pricing table overrides when available
            const planWithDisplay = plan as SubscriptionPlan & { displayName?: string };

            if (planWithDisplay.displayName) {
                plan.name = planWithDisplay.displayName;
            }

            plan.discount = plan.changesInPrices?.find((change) => change.group === 'apiRequest');

            // Determine if this plan is a downgrade compared to current subscription
            plan.isDowngrade = this.currentSubscription
                ? (plan.amount || 0) < currentAmount
                : false;

            if (!(plan._id in planIdMap)) {
                processedPlans.push(plan);
                planIdMap[plan._id] = true;
            }
        });

        // Sort by amount
        processedPlans.sort((a, b) => (a.amount || 0) - (b.amount || 0));

        this.plans = processedPlans;

        // Initialise budget reference plan (best value first time, otherwise keep)
        if (!this.budgetReferencePlanId || !this.plans.some((p) => p._id === this.budgetReferencePlanId)) {
            this.budgetReferencePlanId = this.getBestValuePlanId();
        }
    }

    private _formatCurrentSubscription(): void {
        if (!this.currentSubscription) return;

        const subscription = this.currentSubscription.subscriptionPlan;

        const rows = formatBenefitRowsFromChanges(subscription.changesInPrices || []);
        const changes = rows.map((r) => ({
            key: r.key,
            value: r.value,
        }));

        const middleIndex = Math.ceil(changes.length / 2);

        subscription.changesLeft = changes.slice(0, middleIndex);
        subscription.changesRight = changes.slice(middleIndex);

        this.currentSubscription.amountByMonth =
            (this.currentSubscription.amount || subscription.amount) /
            (subscription.intervalCount * 12);

        // Set interval for UI
        this.selectedInterval = subscription.interval as 'month' | 'year';
    }

    private _sessionConfirmHandled = false;

    private _confirmSessionIfPresent(): void {
        const sessionId = this._route.snapshot.queryParamMap.get('session_id')?.trim();
        if (!sessionId || this._sessionConfirmHandled) return;

        this._sessionConfirmHandled = true;
        this._clearSessionIdFromUrl();

        this._subscriptionService.confirmCheckoutSession(sessionId).subscribe({
            next: () => {
                this._showSessionConfirmSuccessToast();
                this._loadCurrentSubscription();
            },
            error: (error) => {
                console.error('Error confirming checkout session:', error);
                this._handleSessionConfirmError(error);
            },
        });
    }

    private _clearSessionIdFromUrl(): void {
        void this._router.navigate([], {
            queryParams: { session_id: null },
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }

    private _showSessionConfirmSuccessToast(): void {
        this._snackBar.open(
            this._translocoService.translate('subscriptionPlans.sessionConfirmSuccess') ||
                'Subscription activated successfully.',
            undefined,
            { duration: 5000 }
        );
    }

    private _showSessionConfirmErrorToast(): void {
        this._snackBar.open(
            this._translocoService.translate('subscriptionPlans.sessionConfirmError') ||
                'Could not confirm subscription. Please try again.',
            undefined,
            { duration: 5000 }
        );
    }

    private _handleSessionConfirmError(error?: unknown): void {
        const isWrongAccount = this._isSessionClientMismatchError(error);

        this._subscriptionService
            .getMySubscription({ where_active: true, findOne: 1 })
            .subscribe({
                next: (response) => {
                    if (response?.data) {
                        this.currentSubscription = response.data;
                        this._formatCurrentSubscription();
                        this.currentView = 'current';
                        this._loadMyListFeatures();
                        this._showSessionConfirmSuccessToast();
                        return;
                    }
                    if (isWrongAccount) {
                        this._showSessionConfirmWrongAccountToast();
                        return;
                    }
                    this._showSessionConfirmErrorToast();
                },
                error: () => {
                    if (isWrongAccount) {
                        this._showSessionConfirmWrongAccountToast();
                        return;
                    }
                    this._showSessionConfirmErrorToast();
                },
            });
    }

    private _isSessionClientMismatchError(error?: unknown): boolean {
        const body = (error as { error?: { message?: string } })?.error;
        return body?.message === 'session_client_mismatch';
    }

    private _showSessionConfirmWrongAccountToast(): void {
        this._snackBar.open(
            this._translocoService.translate('subscriptionPlans.sessionConfirmWrongAccount') ||
                'This checkout belongs to a different account. Sign in with the account that started checkout, or start a new subscription.',
            undefined,
            { duration: 8000 }
        );
    }

    private _checkBillingSetup(): void {
        // Check billing configuration and payment methods
        this._subscriptionService.getBillingConfig({ findOne: true }).subscribe({
            next: (response) => {
                const cs = extractClientSettingsPayload(response);
                const inv = cs?.invoiceSettings;
                this.hasBillingSetup = invoiceBillingDetailsComplete(inv);
                if (!this.hasBillingSetup) {
                    this.showBillingRequiredModal = true;
                }
            },
            error: (error) => {
                console.error('Error loading billing config:', error);
            },
        });

        this._subscriptionService.getCards({}).subscribe({
            next: (response) => {
                this.hasPaymentMethod =
                    response?.data?.some((card: any) => card.isDefault) || false;
            },
            error: (error) => {
                console.error('Error loading cards:', error);
            },
        });
    }

    // TrackBy function for ngFor
    trackByPlan(index: number, plan: SubscriptionPlan): string {
        return plan._id || plan.code || index.toString();
    }

    trackByZone(index: number, zone: PlanZone): string {
        return `${zone.planId}-${zone.from}`;
    }

    trackByFeature(index: number, feature: AppFeature): string {
        return feature._id || feature.code || index.toString();
    }

    trackByGroup(index: number, group: { category: string; features: AppFeature[] }): string {
        return group.category || `group-${index}`;
    }

    getFeatureDisplayName(feature: AppFeature): string {
        const key = `appFeatures.${feature.code}.title`;
        const translated = this._translocoService.translate(key);
        return translated !== key ? translated : feature.name;
    }

    getCategoryDisplayName(category: string): string {
        if (!category) return '';
        const key = `pricing.categories.${category}`;
        const translated = this._translocoService.translate(key);
        return translated !== key ? translated : category.replace(/_/g, ' ');
    }

    getCountryDisplayName(country: string): string {
        if (!country) return '';
        if (country.toLowerCase() === 'world') return 'Global';
        return country;
    }

    get currentPlanHasIncludedBenefits(): boolean {
        const sp = this.currentSubscription?.subscriptionPlan;
        if (!sp) return false;
        return !!(sp.changesLeft?.length || sp.changesRight?.length);
    }

    get showCurrentPlanIncludedFallback(): boolean {
        return !!this.currentSubscription && !this.currentPlanHasIncludedBenefits;
    }

    get hasOtherPlansWithApiDiscountForCurrent(): boolean {
        return hasOtherPlanWithApiDiscount(
            this.plans,
            this.currentSubscription?.subscriptionPlan?._id
        );
    }

    compareDiscountedPlansFromDialog(): void {
        this.cancelPlanChange();
        this.switchToExplore();
        this._scrollPlansExploreIntoView();
    }

    compareDiscountedPlansFromCurrentCard(): void {
        this.switchToExplore();
        this._scrollPlansExploreIntoView();
    }

    private _scrollPlansExploreIntoView(): void {
        setTimeout(() => {
            this.plansExploreAnchor?.nativeElement?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }, 280);
    }

    private _prefetchPlansIfNeededForDiscountCta(): void {
        if (!this.currentSubscription?.subscriptionPlan) return;
        const sp = this.currentSubscription.subscriptionPlan;
        const hasRows =
            (sp.changesLeft?.length || 0) + (sp.changesRight?.length || 0) > 0;
        if (hasRows || this.plans.length > 0) return;
        this._loadPlans();
    }
}
