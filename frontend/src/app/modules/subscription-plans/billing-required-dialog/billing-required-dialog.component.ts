import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'billing-required-dialog',
    standalone: true,
    imports: [CommonModule, MatIconModule, TranslocoModule],
    templateUrl: './billing-required-dialog.component.html',
    styleUrls: ['./billing-required-dialog.component.scss'],
})
export class BillingRequiredDialogComponent {
    @Input() isOpen = false;

    @Output() goToBilling = new EventEmitter<void>();

    onGoToBilling(): void {
        this.goToBilling.emit();
    }
}
