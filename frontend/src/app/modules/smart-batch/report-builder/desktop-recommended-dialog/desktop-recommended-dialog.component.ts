import { Clipboard } from '@angular/cdk/clipboard';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

export type DesktopRecommendedResult = 'back';

/**
 * Shown while the report designer is open on a small screen. The canvas, palette and property
 * panels need room, so the user is pointed to a larger device. It stays until the screen is bigger
 * or the user leaves the designer.
 */
@Component({
    selector: 'desktop-recommended-dialog',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
    template: `
        <div class="flex flex-col items-center px-6 pb-2 pt-7 text-center">
            <div
                class="relative mb-5 flex h-20 w-24 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300"
            >
                <mat-icon class="!h-12 !w-12 text-[48px] leading-[48px]">desktop_windows</mat-icon>
                <span
                    class="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow ring-1 ring-stone-200 dark:bg-gray-900 dark:ring-gray-700"
                >
                    <mat-icon class="!h-5 !w-5 text-[20px] leading-5 text-stone-500">smartphone</mat-icon>
                </span>
            </div>

            <h2 class="text-xl font-semibold text-stone-950 dark:text-white">
                {{ 'smartReport.desktopHint.title' | transloco }}
            </h2>
            <p class="mt-3 text-[15px] leading-relaxed text-stone-600 dark:text-stone-300">
                {{ 'smartReport.desktopHint.message' | transloco }}
            </p>

            <div
                class="mt-5 flex w-full items-start gap-3 rounded-xl bg-stone-100 px-4 py-3 text-left dark:bg-gray-800"
            >
                <mat-icon class="mt-0.5 shrink-0 text-amber-500">lightbulb</mat-icon>
                <div class="min-w-0">
                    <p class="text-sm font-semibold text-stone-800 dark:text-stone-100">
                        {{ 'smartReport.desktopHint.tipTitle' | transloco }}
                    </p>
                    <p class="text-sm text-stone-600 dark:text-stone-300">
                        {{ 'smartReport.desktopHint.tip' | transloco }}
                    </p>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-2 px-6 pb-6 pt-4">
            <button mat-flat-button color="primary" type="button" class="!h-12 !text-base" (click)="copyLink()">
                <mat-icon>link</mat-icon>
                {{ 'smartReport.desktopHint.copyLink' | transloco }}
            </button>
            <button mat-stroked-button type="button" class="!h-12 !text-base" (click)="back()">
                {{ 'smartReport.desktopHint.back' | transloco }}
            </button>
        </div>
    `,
})
export class DesktopRecommendedDialogComponent {
    private _ref = inject(MatDialogRef<DesktopRecommendedDialogComponent, DesktopRecommendedResult>);
    private _clipboard = inject(Clipboard);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);

    copyLink(): void {
        const copied = this._clipboard.copy(window.location.href);

        this._snack.open(
            this._transloco.translate(copied ? 'smartReport.desktopHint.linkCopied' : 'smartReport.desktopHint.copyFailed'),
            undefined,
            { duration: 2500 }
        );
    }

    back(): void {
        this._ref.close('back');
    }
}
