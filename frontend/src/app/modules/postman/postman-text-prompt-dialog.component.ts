import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslocoPipe } from '@jsverse/transloco';

export interface PostmanTextPromptData {
    titleKey: string;
    labelKey: string;
    initialValue: string;
    cancelKey: string;
    confirmKey: string;
}

@Component({
    standalone: true,
    selector: 'postman-text-prompt-dialog',
    imports: [MatDialogModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, TranslocoPipe],
    template: `
        <h2 mat-dialog-title>{{ data.titleKey | transloco }}</h2>
        <mat-dialog-content>
            <mat-form-field appearance="outline" class="w-full min-w-[280px] mt-2">
                <mat-label>{{ data.labelKey | transloco }}</mat-label>
                <input matInput [(ngModel)]="value" (keyup.enter)="confirm()" />
            </mat-form-field>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button mat-dialog-close>{{ data.cancelKey | transloco }}</button>
            <button mat-flat-button color="primary" (click)="confirm()">{{ data.confirmKey | transloco }}</button>
        </mat-dialog-actions>
    `,
})
export class PostmanTextPromptDialogComponent {
    data = inject<PostmanTextPromptData>(MAT_DIALOG_DATA);
    private _ref = inject(MatDialogRef<PostmanTextPromptDialogComponent, string | undefined>);
    value = this.data.initialValue ?? '';

    confirm() {
        this._ref.close(this.value?.trim() ?? '');
    }
}
