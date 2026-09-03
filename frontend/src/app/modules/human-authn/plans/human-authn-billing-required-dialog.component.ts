import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    standalone: true,
    selector: 'human-authn-billing-required-dialog',
    imports: [MatDialogModule, MatButtonModule, TranslocoModule],
    template: `
        <h2 mat-dialog-title class="!m-0 !font-semibold !text-lg text-gray-900">
            {{ 'humanAuthnPlans.billingRequiredTitle' | transloco }}
        </h2>
        <mat-dialog-content>
            <p class="m-0 text-sm leading-relaxed text-gray-600">
                {{ 'humanAuthnPlans.billingRequiredMessage' | transloco }}
            </p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button [mat-dialog-close]="false">
                {{ 'humanAuthnPlans.billingRequiredCancel' | transloco }}
            </button>
            <button mat-flat-button color="primary" type="button" (click)="goToBillingDetails()">
                {{ 'humanAuthnPlans.billingRequiredGoSettings' | transloco }}
            </button>
        </mat-dialog-actions>
    `,
})
export class HumanAuthnBillingRequiredDialogComponent {
    private _dialogRef = inject(MatDialogRef<HumanAuthnBillingRequiredDialogComponent>);
    private _router = inject(Router);

    goToBillingDetails(): void {
        this._dialogRef.close();
        void this._router.navigate(['/settings', 'billing-details'], {
            queryParams: { returnUrl: '/human-authn/plans' },
        });
    }
}
