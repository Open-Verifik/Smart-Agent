import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import type { AuthRequiredDialogData } from './auth-required-dialog.types';
import { DEFAULT_AUTH_REQUIRED_DIALOG_DATA } from './auth-required-dialog.types';

@Component({
    selector: 'auth-required-dialog',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
    template: `
        <div class="relative flex flex-col items-center px-8 pt-10 pb-8 w-full">
            <!-- Close -->
            <button
                mat-icon-button
                type="button"
                [attr.aria-label]="data.closeAriaKey | transloco"
                (click)="closeAsHome()"
                class="!absolute !top-3 !right-3 !text-slate-400 hover:!text-slate-600 dark:hover:!text-slate-200"
            >
                <mat-icon class="!text-[18px] !w-[18px] !h-[18px]">close</mat-icon>
            </button>

            <!-- Icon badge -->
            <div class="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
                <mat-icon class="!text-primary !text-[26px] !w-[26px] !h-[26px]">lock</mat-icon>
            </div>

            <!-- Title -->
            <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100 text-center m-0 mb-2 leading-snug">
                {{ data.titleKey | transloco }}
            </h2>

            <!-- Body -->
            <p class="text-sm text-slate-500 dark:text-slate-400 text-center leading-relaxed m-0 mb-7 max-w-[280px]">
                {{ data.bodyKey | transloco }}
            </p>

            <!-- Primary CTA -->
            <button
                mat-flat-button
                color="primary"
                type="button"
                class="w-full !rounded-lg !h-11 !text-sm !font-semibold mb-3"
                (click)="signIn()"
            >
                {{ data.signInKey | transloco }}
            </button>

            <!-- Secondary ghost link -->
            <button
                mat-button
                type="button"
                class="!text-slate-400 dark:!text-slate-500 !text-sm hover:!text-slate-600 dark:hover:!text-slate-300 !h-9"
                (click)="closeAsHome()"
            >
                {{ data.backHomeKey | transloco }}
            </button>
        </div>
    `,
})
export class AuthRequiredDialogComponent {
    readonly data: AuthRequiredDialogData = {
        ...DEFAULT_AUTH_REQUIRED_DIALOG_DATA,
        ...(inject(MAT_DIALOG_DATA, { optional: true }) ?? {}),
    };

    private _dialogRef = inject(MatDialogRef<AuthRequiredDialogComponent, 'signIn' | 'home' | undefined>);

    closeAsHome(): void {
        this._dialogRef.close('home');
    }

    signIn(): void {
        this._dialogRef.close('signIn');
    }
}
