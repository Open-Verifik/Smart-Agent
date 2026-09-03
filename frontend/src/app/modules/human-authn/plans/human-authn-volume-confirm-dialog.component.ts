import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslocoModule } from '@jsverse/transloco';

export interface HumanAuthnVolumeConfirmData {
    quantity: number;
    monthlyTotal: number;
}

@Component({
    standalone: true,
    selector: 'human-authn-volume-confirm-dialog',
    imports: [MatDialogModule, MatButtonModule, TranslocoModule],
    template: `
        <h2 mat-dialog-title class="!m-0 !font-semibold !text-lg text-gray-900">
            {{ 'humanAuthnPlans.volumeConfirmTitle' | transloco }}
        </h2>
        <mat-dialog-content>
            <p class="m-0 text-sm leading-relaxed text-gray-600">
                {{
                    'humanAuthnPlans.volumeConfirmMessage'
                        | transloco: { quantity: data.quantity, total: data.monthlyTotal }
                }}
            </p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button [mat-dialog-close]="false">
                {{ 'humanAuthnPlans.volumeConfirmCancel' | transloco }}
            </button>
            <button mat-flat-button color="primary" [mat-dialog-close]="true">
                {{ 'humanAuthnPlans.volumeConfirmContinue' | transloco }}
            </button>
        </mat-dialog-actions>
    `,
})
export class HumanAuthnVolumeConfirmDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<HumanAuthnVolumeConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: HumanAuthnVolumeConfirmData
    ) {}
}
