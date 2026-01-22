import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { Subject } from 'rxjs';
import { PlanChangeDialogComponent } from './plan-change-dialog/plan-change-dialog.component';
import { ChangesInPrice, ClientSubscription, SubscriptionPlan } from './subscription-plan.types';
import { SubscriptionService } from './subscription.service';

@Component({
  selector: 'subscription-plans',
  standalone: true,
  imports: [CommonModule, TranslocoModule, PlanChangeDialogComponent],
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubscriptionPlansComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any> = new Subject<any>();

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
  
  // UI Version toggle (v1 = current design, v2 = privy-inspired)
  uiVersion: 'v1' | 'v2' = 'v1';

  // Dialog state
  showPlanChangeDialog = false;
  selectedPlanForChange: SubscriptionPlan | null = null;

  // Data
  servicesByCountry: any = {};
  countries: string[] = [];

  paygPlan: Partial<SubscriptionPlan> = {
    code: 'smartcheck_payg_plan',
    amount: 0,
    name: 'PAYG',
  };

  constructor(
    private _subscriptionService: SubscriptionService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._loadCurrentSubscription();
    this._checkBillingSetup();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // UI Version toggle
  toggleUiVersion(): void {
    this.uiVersion = this.uiVersion === 'v1' ? 'v2' : 'v1';
  }

  // Navigation
  navigateToAddCredits(): void {
    this._router.navigate(['/add-credits']);
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
    this.selectedInterval = interval;
    this._loadPlans();
  }

  // Actions
  upgradePlan(plan: SubscriptionPlan): void {
    if (plan.name === 'PAYG') {
      // Navigate to add credits page
      this.navigateToAddCredits();
      return;
    }

    // Open plan change dialog
    this.selectedPlanForChange = plan;
    this.showPlanChangeDialog = true;
  }

  confirmPlanChange(): void {
    if (!this.selectedPlanForChange) return;

    this.isLoading = true;
    this.showPlanChangeDialog = false;

    this._subscriptionService.changeMySubscription({ id: this.selectedPlanForChange._id }).subscribe({
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
    this._subscriptionService.cancelSubscription({ id: this.currentSubscription._id }).subscribe({
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

    return plan.interval === 'month' ? amount.toFixed(2) : (plan?.amount / paymentsPerYear || plan?.amountByMonth * paymentsPerYear).toFixed(2);
  }

  getAmountByYear(plan: Partial<SubscriptionPlan>): string {
    const amount = plan?.amount || plan?.amountByMonth;
    const intervalCount = plan?.intervalCount;
    const paymentsPerYear = 12 / intervalCount;

    return plan.interval === 'year' ? (plan?.amount || plan?.amountByMonth * paymentsPerYear).toFixed(2) : (amount * paymentsPerYear).toFixed(2);
  }

  isBoolean(value: any): boolean {
    return value === true || value === false;
  }

  private _loadCurrentSubscription(): void {
    this._subscriptionService.getMySubscription({ where_active: true, findOne: 1 }).subscribe({
      next: (response) => {
        if (response?.data) {
          this.currentSubscription = response.data;
          this._formatCurrentSubscription();
          this.currentView = 'current';
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

  private _loadPlans(): void {
    if (this.loadingPlans) return;

    this.loadingPlans = true;

    this._subscriptionService
      .getSubscriptions({
        select: 'amount visibleTo interval intervalCount changesInPrices name code',
        showClientAvailablePlans: 1,
        sort: 'amount',
        where_active: 1,
        where_interval: this.selectedInterval,
        where_isSmartcheck: 0,
      })
      .subscribe({
        next: (response) => {
          this._processPlans(response.data);
          this.loadingPlans = false;
        },
        error: (error) => {
          console.error('Error loading plans:', error);
          this.loadingPlans = false;
        },
      });
  }

  private _processPlans(plans: SubscriptionPlan[]): void {
    const processedPlans: SubscriptionPlan[] = [];
    const planIdMap: Record<string, boolean> = {};
    const currentAmount = this.currentSubscription?.subscriptionPlan?.amount || 0;

    // Format the results
    plans.forEach((plan) => {
      // Skip Enterprise plans - they don't have pricing and just show "Custom"
      if (plan.name.match(/enterprise/i) || plan.name.match(/custom/i)) {
        return;
      }

      plan.discount = plan.changesInPrices?.find((change) => change.group === 'apiRequest');
      
      // Determine if this plan is a downgrade compared to current subscription
      plan.isDowngrade = this.currentSubscription ? (plan.amount || 0) < currentAmount : false;

      if (!(plan._id in planIdMap)) {
        processedPlans.push(plan);
        planIdMap[plan._id] = true;
      }
    });

    // Add PAYG plan if no subscription
    if (!this.currentSubscription) {
      processedPlans.unshift({ ...this.paygPlan } as SubscriptionPlan);
    }

    // Sort by amount
    processedPlans.sort((a, b) => (a.amount || 0) - (b.amount || 0));

    this.plans = processedPlans;
  }

  private _formatCurrentSubscription(): void {
    if (!this.currentSubscription) return;

    const subscription = this.currentSubscription.subscriptionPlan;

    const changes = subscription.changesInPrices.map(this._convertChangeToDisplay).filter(Boolean);

    const middleIndex = Math.ceil(changes.length / 2);

    subscription.changesLeft = changes.slice(0, middleIndex);
    subscription.changesRight = changes.slice(middleIndex);

    this.currentSubscription.amountByMonth = subscription.amount / (subscription.intervalCount * 12);

    // Set interval for UI
    this.selectedInterval = subscription.interval as 'month' | 'year';
  }

  private _convertChangeToDisplay(change: ChangesInPrice) {
    if (change.group || change.baseCategory) {
      let value = '';

      if (change.discount) {
        value = `${change.discount}% off`;
      } else if (change.price > 0) {
        value = `$${change?.price.toFixed(2)}`;
      }

      return {
        key: change.group || change.baseCategory,
        value,
      };
    }

    if (change.addOn) {
      return {
        key: change.addOn,
        value: change.active || change.count || false,
      };
    }

    return null;
  }

  private _checkBillingSetup(): void {
    // Check billing configuration and payment methods
    this._subscriptionService.getBillingConfig({ findOne: true }).subscribe({
      next: (response) => {
        this.hasBillingSetup = !!(response?.data?.invoiceSettings?.invoiceType);
      },
      error: (error) => {
        console.error('Error loading billing config:', error);
      },
    });

    this._subscriptionService.getCards({}).subscribe({
      next: (response) => {
        this.hasPaymentMethod = response?.data?.some((card: any) => card.isDefault) || false;
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
}
