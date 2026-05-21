import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

export const BIOMETRICS_CONFIRM_DIALOG_PANEL_CLASS = 'biometrics-confirm-dialog-panel';

export interface ConfirmDialogData {
    cancelLabel?: string;
    confirmLabel?: string;
    icon?: string;
    message: string;
    subtitle?: string;
    title: string;
    warning?: string;
}

@Component({
    selector: 'app-biometrics-confirm-dialog',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
    templateUrl: './biometrics-confirm-dialog.component.html',
    styleUrl: './biometrics-confirm-dialog.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class BiometricsConfirmDialogComponent {
    data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<BiometricsConfirmDialogComponent>);

    onConfirm(): void {
        this._dialogRef.close({ action: 'delete' });
    }

    onCancel(): void {
        this._dialogRef.close({ action: 'cancel' });
    }
}
