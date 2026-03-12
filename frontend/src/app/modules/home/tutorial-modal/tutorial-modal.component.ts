import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

interface TutorialStep {
    icon: string;
    titleKey: string;
    descriptionKey: string;
    tipKey?: string;
}

@Component({
    selector: 'home-tutorial-modal',
    standalone: true,
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        TranslocoModule,
    ],
    template: `
        <div class="flex flex-col w-full max-w-lg">
            <!-- Header with progress -->
            <div class="relative px-6 pt-6 pb-4">
                <div class="absolute top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700">
                    <div
                        class="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
                        [style.width.%]="progressPercent()"
                    ></div>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {{ 'home.tutorial.stepOf' | transloco: { current: currentStep() + 1, total: steps.length } }}
                    </span>
                    <button mat-icon-button (click)="close()" class="!-mr-2">
                        <mat-icon>close</mat-icon>
                    </button>
                </div>
            </div>

            <!-- Content -->
            <div class="px-6 pb-6">
                <div class="flex flex-col items-center text-center py-8">
                    <!-- Animated Icon -->
                    <div
                        class="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/25 animate-pulse"
                    >
                        <mat-icon class="!w-10 !h-10 text-white icon-size-10">{{
                            currentStepData().icon
                        }}</mat-icon>
                    </div>

                    <!-- Title -->
                    <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {{ currentStepData().titleKey | transloco }}
                    </h2>

                    <!-- Description -->
                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
                        {{ currentStepData().descriptionKey | transloco }}
                    </p>

                    <!-- Tip -->
                    @if (currentStepData().tipKey) {
                        <div
                            class="mt-4 flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-left"
                        >
                            <mat-icon class="text-amber-500 !w-5 !h-5 shrink-0 icon-size-5">lightbulb</mat-icon>
                            <span class="text-xs text-amber-700 dark:text-amber-300">{{
                                currentStepData().tipKey | transloco
                            }}</span>
                        </div>
                    }
                </div>

                <!-- Navigation -->
                <div
                    class="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700"
                >
                    <button
                        mat-button
                        (click)="prevStep()"
                        [disabled]="currentStep() === 0"
                        class="!text-slate-600"
                    >
                        <mat-icon class="mr-1">arrow_back</mat-icon>
                        {{ 'home.tutorial.back' | transloco }}
                    </button>

                    <div class="flex gap-1.5">
                        @for (step of steps; track $index) {
                            <span
                                class="w-2 h-2 rounded-full transition-all duration-300"
                                [class.bg-indigo-500]="$index === currentStep()"
                                [class.bg-slate-300]="$index !== currentStep()"
                                [class.dark:bg-slate-600]="$index !== currentStep()"
                            ></span>
                        }
                    </div>

                    @if (currentStep() < steps.length - 1) {
                        <button mat-flat-button color="primary" (click)="nextStep()">
                            {{ 'home.tutorial.next' | transloco }}
                            <mat-icon class="ml-1">arrow_forward</mat-icon>
                        </button>
                    } @else {
                        <button mat-flat-button color="primary" (click)="close()">
                            {{ 'home.tutorial.getStarted' | transloco }}
                            <mat-icon class="ml-1">rocket_launch</mat-icon>
                        </button>
                    }
                </div>
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
export class HomeTutorialModalComponent {
    private _dialogRef = inject(MatDialogRef<HomeTutorialModalComponent>);

    currentStep = signal(0);

    steps: TutorialStep[] = [
        {
            icon: 'waving_hand',
            titleKey: 'home.tutorial.step0Title',
            descriptionKey: 'home.tutorial.step0Desc',
            tipKey: 'home.tutorial.step0Tip',
        },
        {
            icon: 'chat',
            titleKey: 'home.tutorial.step1Title',
            descriptionKey: 'home.tutorial.step1Desc',
        },
        {
            icon: 'terminal',
            titleKey: 'home.tutorial.step2Title',
            descriptionKey: 'home.tutorial.step2Desc',
        },
        {
            icon: 'cloud_upload',
            titleKey: 'home.tutorial.step3Title',
            descriptionKey: 'home.tutorial.step3Desc',
            tipKey: 'home.tutorial.step3Tip',
        },
        {
            icon: 'build',
            titleKey: 'home.tutorial.step4Title',
            descriptionKey: 'home.tutorial.step4Desc',
        },
        {
            icon: 'credit_card',
            titleKey: 'home.tutorial.step5Title',
            descriptionKey: 'home.tutorial.step5Desc',
        },
    ];

    currentStepData = () => this.steps[this.currentStep()];

    progressPercent = () => ((this.currentStep() + 1) / this.steps.length) * 100;

    nextStep(): void {
        if (this.currentStep() < this.steps.length - 1) {
            this.currentStep.update((v) => v + 1);
        }
    }

    prevStep(): void {
        if (this.currentStep() > 0) {
            this.currentStep.update((v) => v - 1);
        }
    }

    close(): void {
        this._dialogRef.close();
    }
}
