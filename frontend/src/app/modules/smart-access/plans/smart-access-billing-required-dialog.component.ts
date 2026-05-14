import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    standalone: true,
    selector: 'smart-access-billing-required-dialog',
    imports: [MatDialogModule, MatButtonModule, TranslocoModule],
    templateUrl: './smart-access-billing-required-dialog.component.html',
    styleUrl: './smart-access-billing-required-dialog.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class SmartAccessBillingRequiredDialogComponent {
    private _dialogRef = inject(MatDialogRef<SmartAccessBillingRequiredDialogComponent>);
    private _router = inject(Router);

    goToBillingDetails(): void {
        this._dialogRef.close();
        void this._router.navigate(['/settings', 'billing-details'], {
            queryParams: { returnUrl: '/smart-access/plans' },
        });
    }
}
