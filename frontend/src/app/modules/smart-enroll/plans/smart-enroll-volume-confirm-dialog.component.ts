import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@jsverse/transloco';

export interface SmartEnrollVolumeConfirmData {
    from: number;
    to: number;
}

@Component({
    standalone: true,
    selector: 'smart-enroll-volume-confirm-dialog',
    imports: [MatDialogModule, MatButtonModule, TranslocoModule],
    template: `
        <h2 mat-dialog-title class="!m-0 !font-semibold !text-lg text-gray-900">
            {{ 'smartenroll.plans.confirm_volume_update_title' | transloco }}
        </h2>
        <mat-dialog-content>
            <p class="m-0 text-sm leading-relaxed text-gray-600">
                {{ 'smartenroll.plans.confirm_volume_update_message' | transloco: { from: data.from, to: data.to } }}
            </p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button [mat-dialog-close]="false">
                {{ 'smartenroll.plans.confirm_volume_update_cancel' | transloco }}
            </button>
            <button mat-flat-button color="primary" [mat-dialog-close]="true">
                {{ 'smartenroll.plans.confirm_volume_update_confirm' | transloco }}
            </button>
        </mat-dialog-actions>
    `,
})
export class SmartEnrollVolumeConfirmDialogComponent {
    data = inject<SmartEnrollVolumeConfirmData>(MAT_DIALOG_DATA);
}
