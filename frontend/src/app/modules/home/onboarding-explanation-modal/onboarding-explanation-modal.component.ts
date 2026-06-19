import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { AccountEnvironmentService } from '../../../core/account/account-environment.service';

export interface OnboardingExplanationData {
    taskId: string;
    status: string;
}

interface TaskTechnicalInfo {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    endpoint: string;
    icon: string;
    gradient: string;
}

@Component({
    selector: 'app-onboarding-explanation-modal',
    standalone: true,
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        TranslocoModule,
    ],
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
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md shadow-verifikBrand-500/20 mb-4"
                     [ngClass]="techInfo?.gradient || 'bg-gradient-to-tr from-verifikBrand-500 to-indigo-600'">
                    <mat-icon class="!text-[28px] !w-[28px] !h-[28px]">{{ techInfo?.icon || 'help' }}</mat-icon>
                </div>
                <h2 class="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {{ 'home.onboarding.tasks.' + data.taskId | transloco }}
                </h2>
                <!-- Subtitle with Reward & Status -->
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 max-w-[340px] leading-relaxed flex items-center gap-1.5 justify-center">
                    <span class="font-bold text-emerald-600 dark:text-emerald-400">{{ 'home.onboarding.explanationModal.reward' | transloco }}</span>
                    <span class="text-slate-300 dark:text-slate-700">•</span>
                    <span>{{ 'home.onboarding.statusLabels.' + data.status | transloco }}</span>
                </p>
            </div>

            <!-- Reasons List (Information Blocks) -->
            <div class="space-y-4 mb-8">
                <!-- Item 1: Description -->
                <div class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-150">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <mat-icon class="!text-[22px] !w-[22px] !h-[22px]">description</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {{ 'home.onboarding.explanationModal.sectionDescription' | transloco }}
                        </h3>
                        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-normal"
                           [innerHTML]="'home.onboarding.explanations.' + data.taskId + '.description' | transloco">
                        </p>
                    </div>
                </div>

                <!-- Item 2: How to Complete -->
                <div class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-150">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <mat-icon class="!text-[22px] !w-[22px] !h-[22px]">assignment_turned_in</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {{ 'home.onboarding.explanationModal.sectionHowTo' | transloco }}
                        </h3>
                        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-normal"
                           [innerHTML]="'home.onboarding.explanations.' + data.taskId + '.requirement' | transloco">
                        </p>
                    </div>
                </div>

                <!-- Item 3: API Reference (if applicable) -->
                @if (techInfo && showApiReference()) {
                    <div class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-150">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                            <mat-icon class="!text-[22px] !w-[22px] !h-[22px]">code</mat-icon>
                        </div>
                        <div class="min-w-0 flex-1">
                            <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                {{ 'home.onboarding.explanationModal.sectionApiReference' | transloco }}
                            </h3>
                            <div class="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-slate-600 dark:text-slate-400 overflow-hidden">
                                <span class="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider shrink-0"
                                      [ngClass]="{
                                          'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400': techInfo.method === 'POST',
                                          'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400': techInfo.method === 'GET',
                                          'bg-amber-500/10 text-amber-600 dark:text-amber-400': techInfo.method === 'PUT',
                                          'bg-rose-500/10 text-rose-600 dark:text-rose-400': techInfo.method === 'DELETE'
                                      }">
                                    {{ techInfo.method }}
                                </span>
                                <span class="select-all overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">{{ techInfo.endpoint }}</span>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <!-- Actions -->
            <div class="mt-2">
                @if (data.status !== 'COMPLETED') {
                    <button
                        mat-flat-button
                        type="button"
                        class="w-full !rounded-xl !h-12 !text-sm !font-bold !bg-gradient-to-r !from-verifikBrand-600 !to-indigo-600 !text-white hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-150 shadow-md shadow-verifikBrand-500/20"
                        (click)="goToTask()"
                    >
                        {{ (data.taskId === 'complete_kyc' ? 'home.onboarding.explanationModal.verifyIdentity' : 'home.onboarding.explanationModal.goToTask') | transloco }}
                    </button>
                } @else {
                    <button
                        mat-flat-button
                        type="button"
                        class="w-full !rounded-xl !h-12 !text-sm !font-bold !bg-slate-200 dark:!bg-slate-800 !text-slate-800 dark:!text-slate-200 hover:opacity-95"
                        (click)="close()"
                    >
                        {{ 'home.onboarding.explanationModal.close' | transloco }}
                    </button>
                }
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
export class OnboardingExplanationModalComponent implements OnInit {
    private _dialogRef = inject(MatDialogRef<OnboardingExplanationModalComponent>);
    private _router = inject(Router);
    private _accountEnv = inject(AccountEnvironmentService);

    techInfo: TaskTechnicalInfo | null = null;

    private readonly _techMap: Record<string, TaskTechnicalInfo> = {
        test_smartcheck: {
            method: 'POST',
            endpoint: 'https://api.verifik.co/v2/postman/run',
            icon: 'terminal',
            gradient: 'from-blue-500 to-indigo-600',
        },
        test_collection_demo: {
            method: 'POST',
            endpoint: 'https://api.verifik.co/v2/face-recognition/collections',
            icon: 'folder_open',
            gradient: 'from-purple-500 to-indigo-600',
        },
        test_add_person_demo: {
            method: 'POST',
            endpoint: 'https://api.verifik.co/v2/face-recognition/collections/:code/persons',
            icon: 'person_add',
            gradient: 'from-pink-500 to-rose-600',
        },
        test_search_person_demo: {
            method: 'POST',
            endpoint: 'https://api.verifik.co/v2/face-recognition/search',
            icon: 'search',
            gradient: 'from-emerald-500 to-teal-600',
        },
        test_liveness_demo: {
            method: 'POST',
            endpoint: 'https://api.verifik.co/v2/biometrics/liveness',
            icon: 'face',
            gradient: 'from-violet-500 to-purple-600',
        },
        test_humanauthn_creation: {
            method: 'POST',
            endpoint: 'https://api.verifik.co/v2/human-id/encrypt',
            icon: 'vpn_key',
            gradient: 'from-amber-500 to-orange-600',
        },
        test_humanauthn_decryption: {
            method: 'POST',
            endpoint: 'https://api.verifik.co/v2/human-id/decrypt',
            icon: 'lock_open',
            gradient: 'from-teal-500 to-cyan-600',
        },
        test_humanauthn_preview: {
            method: 'POST',
            endpoint: 'https://api.verifik.co/v2/human-id/preview',
            icon: 'visibility',
            gradient: 'from-sky-500 to-blue-600',
        },
        subscribe_smart_access: {
            method: 'POST',
            endpoint: 'https://api.verifik.co/v2/subscriptions',
            icon: 'subscriptions',
            gradient: 'from-rose-500 to-red-600',
        },
        subscribe_smart_enroll: {
            method: 'POST',
            endpoint: 'https://api.verifik.co/v2/subscriptions',
            icon: 'subscriptions',
            gradient: 'from-rose-500 to-red-600',
        },
        add_billing_details: {
            method: 'POST',
            endpoint: 'https://api.verifik.co/v2/client-settings',
            icon: 'payment',
            gradient: 'from-emerald-500 to-teal-600',
        },
        complete_kyc: {
            method: 'POST',
            endpoint: 'https://api.verifik.co/v2/kyc/verify',
            icon: 'verified_user',
            gradient: 'from-cyan-500 to-blue-600',
        },
    };

    constructor(@Inject(MAT_DIALOG_DATA) public data: OnboardingExplanationData) {}

    ngOnInit(): void {
        this.techInfo = this._techMap[this.data.taskId] || null;
    }

    showApiReference(): boolean {
        return this.data.taskId.startsWith('test_');
    }

    close(): void {
        this._dialogRef.close();
    }

    goToTask(): void {
        if (this.data.taskId === 'complete_kyc') {
            this._accountEnv.startCompanyVerification();
            this.close();
            return;
        }
        const link = this.getTaskLink(this.data.taskId);
        void this._router.navigate([link]);
        this.close();
    }

    private getTaskLink(taskId: string): string {
        switch (taskId) {
            case 'test_smartcheck': return '/postman';
            case 'test_collection_demo': return '/smart-enroll/demos/create-collection';
            case 'test_add_person_demo': return '/smart-enroll/demos/create-person';
            case 'test_search_person_demo': return '/smart-enroll/demos/search-person';
            case 'test_liveness_demo': return '/smart-enroll/demos/liveness';
            case 'test_humanauthn_creation': return '/smart-enroll/demos/humanid-create-qr';
            case 'test_humanauthn_decryption':
                return '/smart-enroll/demos/humanid-decrypt';
            case 'test_humanauthn_preview':
                return '/smart-enroll/demos/humanid-preview';
            case 'subscribe_smart_access':
                return '/smart-access/projects';
            case 'subscribe_smart_enroll':
                return '/smart-enroll/projects';
            case 'add_billing_details': return '/settings/billing-details';
            case 'complete_kyc': return '/home';
            default: return '/home';
        }
    }
}
