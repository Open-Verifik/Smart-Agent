import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

export interface LayoutTextDialogData {
    titleKey: string;
    placeholderKey: string;
    value: string;
    maxLength: number;
}

@Component({
    selector: 'layout-text-dialog',
    standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule],
    template: `
        <div class="flex items-center justify-between px-5 pt-4">
            <h2 class="text-base font-medium text-stone-800 dark:text-stone-100">
                {{ data.titleKey | transloco }}
            </h2>
            <button type="button" mat-icon-button mat-dialog-close [attr.aria-label]="'visitaGuide.cancel' | transloco">
                <mat-icon>close</mat-icon>
            </button>
        </div>
        <mat-dialog-content class="!pt-2">
            <textarea
                class="min-h-52 w-full resize-y rounded-lg border border-stone-200 bg-slate-50 px-3 py-3 text-sm leading-relaxed text-stone-800 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-100"
                rows="10"
                [placeholder]="data.placeholderKey | transloco"
                [maxlength]="data.maxLength"
                [(ngModel)]="draft"
            ></textarea>
            <p class="mt-2 text-right text-[11px] text-stone-400">{{ draft.length }} / {{ data.maxLength }}</p>
        </mat-dialog-content>
        <mat-dialog-actions align="end" class="!px-5 !pb-4">
            <button mat-button mat-dialog-close type="button">
                {{ 'visitaGuide.cancel' | transloco }}
            </button>
            <button mat-flat-button color="primary" type="button" (click)="save()">
                {{ 'visitaGuide.layoutSaveText' | transloco }}
            </button>
        </mat-dialog-actions>
    `,
})
export class LayoutTextDialogComponent {
    private _dialogRef = inject(MatDialogRef<LayoutTextDialogComponent, string | undefined>);
    data = inject<LayoutTextDialogData>(MAT_DIALOG_DATA);

    draft = this.data.value ?? '';

    save(): void {
        this._dialogRef.close(this.draft);
    }
}
