import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'identity-verification-info-modal',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
    template: `
        <div class="relative flex w-full flex-col">
            <!-- Close Button -->
            <button
                mat-icon-button
                type="button"
                (click)="close()"
                class="!absolute !top-0 !right-0 !text-slate-400 hover:!text-slate-600 dark:hover:!text-slate-200 transition-colors"
            >
                <mat-icon class="!text-[20px] !w-[20px] !h-[20px]">close</mat-icon>
            </button>

            <!-- Header -->
            <div class="flex flex-col items-center text-center mt-2 mb-6">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-verifikBrand-500 to-indigo-600 text-white shadow-md shadow-verifikBrand-500/20 mb-4">
                    <mat-icon class="!text-[28px] !w-[28px] !h-[28px]">verified_user</mat-icon>
                </div>
                <h2 class="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {{ 'accountEnv.identityVerificationModal.title' | transloco }}
                </h2>
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 max-w-[340px] leading-relaxed">
                    {{ 'accountEnv.identityVerificationModal.subtitle' | transloco }}
                </p>
            </div>

            <!-- Reasons List -->
            <div class="space-y-4 mb-8">
                <!-- Reason 1: Fraud Prevention -->
                <div class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-150">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-600 dark:text-red-400">
                        <mat-icon class="!text-[22px] !w-[22px] !h-[22px]">shield</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {{ 'accountEnv.identityVerificationModal.reason5_title' | transloco }}
                        </h3>
                        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-normal">
                            {{ 'accountEnv.identityVerificationModal.reason5_desc' | transloco }}
                        </p>
                    </div>
                </div>

                <!-- Reason 2: Account Responsibility -->
                <div class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-150">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <mat-icon class="!text-[22px] !w-[22px] !h-[22px]">assignment_ind</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {{ 'accountEnv.identityVerificationModal.reason1_title' | transloco }}
                        </h3>
                        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-normal">
                            {{ 'accountEnv.identityVerificationModal.reason1_desc' | transloco }}
                        </p>
                    </div>
                </div>

                <!-- Reason 3: Compliance & Records -->
                <div class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-150">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <mat-icon class="!text-[22px] !w-[22px] !h-[22px]">folder_shared</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {{ 'accountEnv.identityVerificationModal.reason2_title' | transloco }}
                        </h3>
                        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-normal">
                            {{ 'accountEnv.identityVerificationModal.reason2_desc' | transloco }}
                        </p>
                    </div>
                </div>

                <!-- Reason 4: Production Mode -->
                <div class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-150">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                        <mat-icon class="!text-[22px] !w-[22px] !h-[22px]">rocket_launch</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {{ 'accountEnv.identityVerificationModal.reason3_title' | transloco }}
                        </h3>
                        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-normal">
                            {{ 'accountEnv.identityVerificationModal.reason3_desc' | transloco }}
                        </p>
                    </div>
                </div>

                <!-- Reason 5: Credits & Recharge -->
                <div class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-150">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                        <mat-icon class="!text-[22px] !w-[22px] !h-[22px]">payments</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {{ 'accountEnv.identityVerificationModal.reason4_title' | transloco }}
                        </h3>
                        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-normal">
                            {{ 'accountEnv.identityVerificationModal.reason4_desc' | transloco }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Actions -->
            <div class="mt-2">
                <button
                    mat-flat-button
                    type="button"
                    class="w-full !rounded-xl !h-12 !text-sm !font-bold !bg-gradient-to-r !from-verifikBrand-600 !to-indigo-600 !text-white hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-150 shadow-md shadow-verifikBrand-500/20"
                    (click)="verify()"
                >
                    {{ 'accountEnv.identityVerificationModal.cta' | transloco }}
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
            }
        `,
    ],
})
export class IdentityVerificationInfoModalComponent {
    private _dialogRef = inject(MatDialogRef<IdentityVerificationInfoModalComponent, 'verify' | undefined>);

    close(): void {
        this._dialogRef.close();
    }

    verify(): void {
        this._dialogRef.close('verify');
    }
}
