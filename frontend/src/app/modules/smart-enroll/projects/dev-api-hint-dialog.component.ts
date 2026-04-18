import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

export interface DevApiHintDialogData {
    title: string;
    body: string;
}

@Component({
    selector: 'dev-api-hint-dialog',
    standalone: true,
    imports: [ClipboardModule, CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule],
    templateUrl: './dev-api-hint-dialog.component.html',
    styleUrls: ['./dev-api-hint-dialog.component.scss'],
})
export class DevApiHintDialogComponent {
    data = inject<DevApiHintDialogData>(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<DevApiHintDialogComponent>);
    private _clipboard = inject(Clipboard);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);

    copy(): void {
        this._clipboard.copy(this.data.body);
        this._snackBar.open(
            this._transloco.translate('smartEnrollProjects.recordDetail.devView.apiHintCopy'),
            'OK',
            { duration: 2000 },
        );
    }

    close(): void {
        this._dialogRef.close();
    }
}
