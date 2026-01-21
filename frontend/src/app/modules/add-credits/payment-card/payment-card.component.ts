import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslocoModule } from '@jsverse/transloco';
import { PaymentCard } from '../services/credits.service';
import { DateTime } from 'luxon';

@Component({
    selector: 'app-payment-card',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, TranslocoModule],
    templateUrl: './payment-card.component.html',
    styleUrls: ['./payment-card.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PaymentCardComponent {
    @Input() card!: PaymentCard;
    @Input() isDefault: boolean = false;
    @Output() setDefault = new EventEmitter<string>();
    @Output() delete = new EventEmitter<string>();

    private _dialog = inject(MatDialog);

    getCardLogo(brand: string): string {
        const logos: Record<string, string> = {
            visa: 'https://cdn.verifik.co/assets/billing-svg/VisaLogo.svg',
            mastercard: 'https://cdn.verifik.co/assets/billing-svg/MasterCardLogo.svg',
            amex: 'https://cdn.verifik.co/assets/billing-svg/AmericanExpressLogo.svg',
        };
        return logos[brand.toLowerCase()] || '';
    }

    isExpired(expiresAt: string): boolean {
        const currentDate = DateTime.now();
        const targetDate = DateTime.fromFormat(expiresAt, 'yyyy-MM');
        return currentDate > targetDate;
    }

    onSetDefault(): void {
        if (!this.isDefault && !this.isExpired(this.card.expires_at)) {
            this.setDefault.emit(this.card._id);
        }
    }

    onDelete(): void {
        // Simple confirmation dialog
        const confirmed = confirm('Are you sure you want to delete this payment card?');
        if (confirmed) {
            this.delete.emit(this.card._id);
        }
    }

}
