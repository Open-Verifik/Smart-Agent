import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-add-card-dialog',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
    templateUrl: './add-card-dialog.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AddCardDialogComponent {
    private _dialogRef = inject(MatDialogRef<AddCardDialogComponent>);

    close(): void {
        this._dialogRef.close();
    }

    // TODO: Implement Stripe Elements integration
    // This will require:
    // 1. Loading Stripe.js
    // 2. Creating Stripe Elements
    // 3. Handling card token creation
    // 4. Calling PaymentService.addCard()
}
