import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import {
    formatBenefitRowsFromChanges,
    hasOtherPlanWithApiDiscount,
} from '../subscription-plan-benefits.util';
import { ClientSubscription, SubscriptionPlan } from '../subscription-plan.types';

export type SubscriptionDialogContext = 'first' | 'upgrade' | 'downgrade' | 'planChange';

@Component({
    selector: 'plan-change-dialog',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    templateUrl: './plan-change-dialog.component.html',
    styleUrls: ['./plan-change-dialog.component.scss'],
})
export class PlanChangeDialogComponent implements OnInit {
    @Input() currentPlan: ClientSubscription | null = null;
    @Input() newPlan: SubscriptionPlan | null = null;
    @Input() allPlans: SubscriptionPlan[] | null = null;
    @Input() isOpen = false;
    @Input() requestsPerMonth = 0;

    @Output() confirm = new EventEmitter<void>();
    @Output() cancel = new EventEmitter<void>();
    @Output() comparePlans = new EventEmitter<void>();

    formattedPlan: any = null;

    readonly BASE_REQUEST_PRICE = 0.3;

    ngOnInit(): void {
        this._formatPlan();
    }

    ngOnChanges(): void {
        if (this.newPlan) {
            this._formatPlan();
        }
    }

    get hasMeaningfulBenefits(): boolean {
        return (this.formattedPlan?.benefits?.length ?? 0) > 0;
    }

    get hasBetterDiscountOptions(): boolean {
        return hasOtherPlanWithApiDiscount(this.allPlans, this.newPlan?._id);
    }

    /**
     * Drives copy for first-time subscribe vs upgrade vs downgrade vs same-tier/interval change.
     */
    get subscriptionDialogContext(): SubscriptionDialogContext {
        if (!this.currentPlan) {
            return 'first';
        }
        const cur = this.currentPlan.subscriptionPlan?.amount ?? 0;
        const next = this.newPlan?.amount ?? 0;
        if (next < cur) {
            return 'downgrade';
        }
        if (next > cur) {
            return 'upgrade';
        }
        return 'planChange';
    }

    get reviewPlanTranslocoKey(): string {
        const map: Record<SubscriptionDialogContext, string> = {
            first: 'subscriptionPlans.dialog.reviewPlanFirst',
            upgrade: 'subscriptionPlans.dialog.reviewPlanUpgrade',
            downgrade: 'subscriptionPlans.dialog.reviewPlanDowngrade',
            planChange: 'subscriptionPlans.dialog.reviewPlanPlanChange',
        };
        return map[this.subscriptionDialogContext];
    }

    get confirmActionTranslocoKey(): string {
        const map: Record<SubscriptionDialogContext, string> = {
            first: 'subscriptionPlans.dialog.confirmSubscribe',
            upgrade: 'subscriptionPlans.dialog.confirmUpgrade',
            downgrade: 'subscriptionPlans.dialog.confirmDowngrade',
            planChange: 'subscriptionPlans.dialog.confirmPlanChange',
        };
        return map[this.subscriptionDialogContext];
    }

    onCompareDiscountedPlans(): void {
        this.comparePlans.emit();
    }

    formatNumber(value: number): string {
        if (value >= 1000) {
            return (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + 'k';
        }
        return value.toString();
    }

    private _formatPlan(): void {
        if (!this.newPlan) return;

        const now = new Date();
        const intervalMonths = this.newPlan.interval === 'year' ? 12 : 1;
        const endDate = new Date(now);
        endDate.setMonth(endDate.getMonth() + this.newPlan.intervalCount * intervalMonths);

        const d = (this.newPlan as any).discount;
        const discount = d?.discount ?? 0;
        let effectiveCostPerReq = this.BASE_REQUEST_PRICE;
        if (discount) {
            if (d.type === 'amount') {
                effectiveCostPerReq = Math.max(0, this.BASE_REQUEST_PRICE - discount);
            } else {
                effectiveCostPerReq = Math.max(0, this.BASE_REQUEST_PRICE * (1 - discount / 100));
            }
        }
        const baseMonthly =
            this.newPlan.interval === 'year'
                ? this.newPlan.amount / (this.newPlan.intervalCount * 12)
                : this.newPlan.amount || 0;
        const includedRequests =
            effectiveCostPerReq > 0 ? Math.floor(baseMonthly / effectiveCostPerReq) : Infinity;
        const extraRequests = Math.max(0, this.requestsPerMonth - includedRequests);
        const requestAddOn = extraRequests * effectiveCostPerReq;

        this.formattedPlan = {
            ...this.newPlan,
            startDate: now,
            endDate: endDate,
            amountByMonth: baseMonthly,
            requestsPerMonth: this.requestsPerMonth,
            requestAddOn,
            estimatedTotal: baseMonthly + requestAddOn,
            hasUsageAddon: this.requestsPerMonth > 0 && requestAddOn > 0,
            benefits: formatBenefitRowsFromChanges(this.newPlan.changesInPrices || []),
        };
    }

    onConfirm(): void {
        this.confirm.emit();
    }

    onCancel(): void {
        this.cancel.emit();
    }

    onBackdropClick(event: MouseEvent): void {
        if ((event.target as HTMLElement).classList.contains('dialog-backdrop')) {
            this.onCancel();
        }
    }
}
