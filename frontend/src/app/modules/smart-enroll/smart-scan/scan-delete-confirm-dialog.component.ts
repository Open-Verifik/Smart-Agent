import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@jsverse/transloco';

export interface ScanDeleteConfirmData {
    titleKey: string;
    messageKey: string;
    cancelKey: string;
    confirmKey: string;
}

@Component({
    standalone: true,
    selector: 'scan-delete-confirm-dialog',
    imports: [MatDialogModule, MatButtonModule, TranslocoModule],
    template: `
        <h2
            mat-dialog-title
            class="!m-0 !font-semibold !text-lg !leading-snug !tracking-tight text-stone-900 dark:text-white md:!text-xl"
        >
            {{ data.titleKey | transloco }}
        </h2>
        <mat-dialog-content>
            <p class="m-0 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{{ data.messageKey | transloco }}</p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button [mat-dialog-close]="false">{{ data.cancelKey | transloco }}</button>
            <button mat-flat-button color="warn" [mat-dialog-close]="true">{{ data.confirmKey | transloco }}</button>
        </mat-dialog-actions>
    `,
})
export class ScanDeleteConfirmDialogComponent {
    data = inject<ScanDeleteConfirmData>(MAT_DIALOG_DATA);
}
