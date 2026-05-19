import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'home-sandbox-mode-info-modal',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
    template: `
        <div class="flex max-w-lg flex-col">
            <div class="flex items-start justify-between gap-4 border-b border-slate-200 px-6 pb-4 pt-6 dark:border-slate-700">
                <div class="flex min-w-0 items-start gap-3">
                    <div
                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300"
                    >
                        <mat-icon>science</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <h2 class="text-lg font-semibold text-slate-900 dark:text-white">
                            {{ 'home.sandbox.modalTitle' | transloco }}
                        </h2>
                    </div>
                </div>
                <button mat-icon-button type="button" (click)="close()" class="!-mr-2 shrink-0">
                    <mat-icon>close</mat-icon>
                </button>
            </div>
            <div class="space-y-4 px-6 py-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                <p>{{ 'home.sandbox.modalIntro' | transloco }}</p>
                <ul class="list-disc space-y-2 pl-5">
                    <li>{{ 'home.sandbox.modalBullet1' | transloco }}</li>
                    <li>{{ 'home.sandbox.modalBullet2' | transloco }}</li>
                    <li>{{ 'home.sandbox.modalBullet3' | transloco }}</li>
                </ul>
                <p class="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs dark:border-slate-600 dark:bg-slate-800/60">
                    {{ 'home.sandbox.modalFooter' | transloco }}
                </p>
            </div>
            <div class="flex justify-end border-t border-slate-200 px-6 py-4 dark:border-slate-700">
                <button mat-flat-button color="primary" type="button" (click)="close()">
                    {{ 'home.sandbox.modalClose' | transloco }}
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
})
export class SandboxModeInfoModalComponent {
    private _dialogRef = inject(MatDialogRef<SandboxModeInfoModalComponent>);

    close(): void {
        this._dialogRef.close();
    }
}
