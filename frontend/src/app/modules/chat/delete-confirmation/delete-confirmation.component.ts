import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-delete-confirmation',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
    templateUrl: './delete-confirmation.component.html',
})
export class DeleteConfirmationComponent {
    constructor(
        public dialogRef: MatDialogRef<DeleteConfirmationComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    confirm() {
        this.dialogRef.close(true);
    }

    close() {
        this.dialogRef.close(false);
    }
}
