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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';
import { BillingRequiredDialogComponent } from './billing-required-dialog/billing-required-dialog.component';
import { PlanChangeDialogComponent } from './plan-change-dialog/plan-change-dialog.component';
import {
    applyApiRequestDiscountToBasePrice,
    formatBenefitRowsFromChanges,
    hasOtherPlanWithApiDiscount,
} from './subscription-plan-benefits.util';
import { AppFeature, ClientSubscription, SubscriptionPlan } from './subscription-plan.types';
import { SubscriptionService } from './subscription.service';

const APP_FEATURES_CACHE_KEY = 'smartAgent_appFeatures';

@Component({
    selector: 'subscription-plans',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        PlanChangeDialogComponent,
        BillingRequiredDialogComponent,
        MatSnackBarModule,
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

    // Request estimator (single source of truth: requestsPerMonth)
    requestsPerMonth = 2000;
    requestsPerYear = 24000;
    readonly BASE_REQUEST_PRICE = 0.3;
    readonly MONTHLY_SLIDER_MAX = 20000;
    readonly MONTHLY_SLIDER_STEP = 1;
    readonly YEARLY_SLIDER_MAX = 500000;
    readonly YEARLY_SLIDER_STEP = 1;

    // Estimator mode: pick exact requests, or invert from a target monthly budget
    estimatorMode: 'requests' | 'budget' = 'requests';
    targetMonthlyBudget: number | null = null;
    budgetReferencePlanId = '';

    // Dialog state
    showPlanChangeDialog = false;
    showBillingRequiredModal = false;
    selectedPlanForChange: SubscriptionPlan | null = null;
    selectedPlanRequests = 0;
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
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this._loadCurrentSubscription();
        this._checkBillingSetup();
        this._confirmSessionIfPresent();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // Navigation
    navigateToAddCredits(): void {
        this._router.navigate(['/add-credits']);
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
        this.selectedPlanRequests = this.requestsPerMonth;
        this.selectedPlanForChange = plan;
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
        this._setRequestsFromInterval(value);
        this._syncBudgetFromRequests();
    }

    /**
     * Direct numeric input for requests. Clamps to [0, sliderMax] and keeps
     * monthly/yearly buckets in sync. Triggered by both modes' inputs.
     */
    onRequestsInput(rawValue: string | number): void {
        const parsed = Math.max(0, Math.min(this.sliderMax, Math.round(Number(rawValue) || 0)));
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
        const cap = this.MONTHLY_SLIDER_MAX;
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
        return this.selectedInterval === 'year' ? this.YEARLY_SLIDER_MAX : this.MONTHLY_SLIDER_MAX;
    }

    get sliderStep(): number {
        return this.selectedInterval === 'year'
            ? this.YEARLY_SLIDER_STEP
            : this.MONTHLY_SLIDER_STEP;
    }

    get sliderTicks(): string[] {
        const segments = 4;
        return Array.from({ length: segments + 1 }, (_, i) =>
            this.formatNumber(Math.round((this.sliderMax / segments) * i))
        );
    }

    getEffectiveCostPerRequest(plan: SubscriptionPlan): number {
        return applyApiRequestDiscountToBasePrice(this.BASE_REQUEST_PRICE, plan.discount);
    }

    getDiscountDisplayText(plan: SubscriptionPlan): string {
        const d = plan.discount;
        if (!d?.discount) return '';
        if (d.type === 'amount') {
            return `$${d.discount.toFixed(2)} ${this._translocoService.translate('subscriptionPlans.off')}`;
        }
        return `${d.discount}% ${this._translocoService.translate('subscriptionPlans.off')}`;
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

    getTotalMonthlyCost(plan: SubscriptionPlan): number {
        const baseCost = this.getBaseMonthlyAmount(plan);
        return baseCost + this.getMonthlyRequestSpend(plan);
    }

    getBestValuePlanId(): string {
        const paidPlans = this.plans.filter((p) => p._id);
        if (!paidPlans.length) return '';

        if (this.requestsPerMonth > 0) {
            let candidates = paidPlans.filter((p) => p.discount?.discount);
            if (candidates.length) {
                if (this.requestsPerMonth >= 400) {
                    candidates = candidates.filter((p) => !this._isStarterPlan(p));
                }
                if (candidates.length) {
                    return candidates.reduce((best, plan) =>
                        this.getTotalMonthlyCost(plan) < this.getTotalMonthlyCost(best)
                            ? plan
                            : best
                    )._id;
                }
            }
        }

        return paidPlans.reduce((best, plan) =>
            this.getTotalMonthlyCost(plan) < this.getTotalMonthlyCost(best) ? plan : best
        )._id;
    }

    isPlanVisibleForRequestVolume(plan: SubscriptionPlan): boolean {
        const isCurrent = plan.code === this.currentSubscription?.subscriptionPlan?.code;
        if (isCurrent) return true;
        if (this.requestsPerMonth < 2000) return true;
        if (this._isStarterPlan(plan) && this.requestsPerMonth >= 2000) return false;
        if (this._isBasicPlan(plan) && this.requestsPerMonth >= 3000) return false;
        return true;
    }

    private _isStarterPlan(plan: SubscriptionPlan): boolean {
        return /starter/i.test(plan.name) || (plan.amount ?? 0) <= 49;
    }

    private _isBasicPlan(plan: SubscriptionPlan): boolean {
        return /basic/i.test(plan.name) || ((plan.amount ?? 0) >= 99 && (plan.amount ?? 0) <= 149);
    }

    get visiblePlans(): SubscriptionPlan[] {
        return this.plans.filter((p) => this.isPlanVisibleForRequestVolume(p));
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

    private _confirmSessionIfPresent(): void {
        const sessionId = this._route.snapshot.queryParamMap.get('session_id');
        if (!sessionId?.trim()) return;

        this._subscriptionService.confirmCheckoutSession(sessionId).subscribe({
            next: () => {
                this._router.navigate([], {
                    queryParams: {},
                    queryParamsHandling: 'merge',
                    replaceUrl: true,
                });
                this._loadCurrentSubscription();
            },
            error: (error) => {
                console.error('Error confirming checkout session:', error);
                this._snackBar.open(
                    this._translocoService.translate('subscriptionPlans.sessionConfirmError') ||
                        'Could not confirm subscription. Please try again.',
                    undefined,
                    { duration: 5000 }
                );
            },
        });
    }

    private _checkBillingSetup(): void {
        // Check billing configuration and payment methods
        this._subscriptionService.getBillingConfig({ findOne: true }).subscribe({
            next: (response) => {
                const inv = response?.data?.invoiceSettings;
                this.hasBillingSetup = !!(
                    inv &&
                    inv.type &&
                    (inv.person || inv.business) &&
                    inv.address
                );
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
