import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { SubscriptionPlan, ClientSubscription } from '../subscription-plan.types';

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

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  formattedPlan: any = null;

  ngOnInit(): void {
    this._formatPlan();
  }

  ngOnChanges(): void {
    if (this.newPlan) {
      this._formatPlan();
    }
  }

  private _formatPlan(): void {
    if (!this.newPlan) return;

    const now = new Date();
    const intervalMonths = this.newPlan.interval === 'year' ? 12 : 1;
    const endDate = new Date(now);
    endDate.setMonth(endDate.getMonth() + (this.newPlan.intervalCount * intervalMonths));

    this.formattedPlan = {
      ...this.newPlan,
      startDate: now,
      endDate: endDate,
      amountByMonth: this.newPlan.amount / (this.newPlan.intervalCount * intervalMonths),
      benefits: this._formatBenefits(this.newPlan.changesInPrices || []),
    };
  }

  private _formatBenefits(changes: any[]): any[] {
    return changes
      .map((change) => {
        if (change.group || change.baseCategory) {
          return {
            key: change.group || change.baseCategory,
            value: change.discount ? `${change.discount}% off` : change.price ? `$${change.price}` : null,
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