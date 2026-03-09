import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { ClientSubscription, SubscriptionPlan } from '../subscription-plan.types';

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
    @Input() isOpen = false;
    @Input() requestsPerMonth = 0;

    @Output() confirm = new EventEmitter<void>();
    @Output() cancel = new EventEmitter<void>();

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
            benefits: this._formatBenefits(this.newPlan.changesInPrices || []),
        };
    }

    private _formatBenefits(changes: any[]): any[] {
        return changes
            .map((change) => {
                if (change.group || change.baseCategory) {
                    return {
                        key: change.group || change.baseCategory,
                        value:
                            change.discount !== undefined && change.discount !== null
                                ? change.type === 'amount'
                                    ? `$${change.discount.toFixed(2)} off`
                                    : `${change.discount}% off`
                                : change.price
                                  ? `$${change.price}`
                                  : null,
                    };
                }
                if (change.addOn) {
                    return {
                        key: change.addOn,
                        value: change.active || change.count || null,
                    };
                }
                return null;
            })
            .filter(Boolean);
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
