import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoPipe } from '@jsverse/transloco';

export interface PostmanConfirmData {
    titleKey: string;
    messageKey: string;
    cancelKey: string;
    confirmKey: string;
}

@Component({
    standalone: true,
    selector: 'postman-confirm-dialog',
    imports: [MatDialogModule, MatButtonModule, TranslocoPipe],
    template: `
        <h2 mat-dialog-title>{{ data.titleKey | transloco }}</h2>
        <mat-dialog-content>
            <p class="text-sm text-slate-600 dark:text-slate-300 m-0">{{ data.messageKey | transloco }}</p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button [mat-dialog-close]="false">{{ data.cancelKey | transloco }}</button>
            <button mat-flat-button color="warn" [mat-dialog-close]="true">{{ data.confirmKey | transloco }}</button>
        </mat-dialog-actions>
    `,
})
export class PostmanConfirmDialogComponent {
    data = inject<PostmanConfirmData>(MAT_DIALOG_DATA);
}
