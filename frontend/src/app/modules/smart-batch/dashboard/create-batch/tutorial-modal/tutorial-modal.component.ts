import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

interface TutorialStep {
    icon: string;
    title: string;
    description: string;
    tip?: string;
}

@Component({
    selector: 'batch-tutorial-modal',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
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
                        Step {{ currentStep() + 1 }} of {{ steps.length }}
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
                        {{ currentStepData().title }}
                    </h2>

                    <!-- Description -->
                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
                        {{ currentStepData().description }}
                    </p>

                    <!-- Tip -->
                    <div
                        *ngIf="currentStepData().tip"
                        class="mt-4 flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-left"
                    >
                        <mat-icon class="text-amber-500 !w-5 !h-5 shrink-0 icon-size-5"
                            >lightbulb</mat-icon
                        >
                        <span class="text-xs text-amber-700 dark:text-amber-300">{{
                            currentStepData().tip
                        }}</span>
                    </div>
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
                        Back
                    </button>

                    <div class="flex gap-1.5">
                        <span
                            *ngFor="let step of steps; let i = index"
                            class="w-2 h-2 rounded-full transition-all duration-300"
                            [class.bg-indigo-500]="i === currentStep()"
                            [class.bg-slate-300]="i !== currentStep()"
                            [class.dark:bg-slate-600]="i !== currentStep()"
                        ></span>
                    </div>

                    <button
                        *ngIf="currentStep() < steps.length - 1"
                        mat-flat-button
                        color="primary"
                        (click)="nextStep()"
                    >
                        Next
                        <mat-icon class="ml-1">arrow_forward</mat-icon>
                    </button>
                    <button
                        *ngIf="currentStep() === steps.length - 1"
                        mat-flat-button
                        color="primary"
                        (click)="close()"
                    >
                        Get Started
                        <mat-icon class="ml-1">rocket_launch</mat-icon>
                    </button>
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
export class TutorialModalComponent {
    private _dialogRef = inject(MatDialogRef<TutorialModalComponent>);

    currentStep = signal(0);

    steps: TutorialStep[] = [
        {
            icon: 'waving_hand',
            title: 'Welcome to Batch Creation!',
            description:
                "This wizard will help you upload and process data in bulk. Let's walk through the key steps together.",
            tip: 'You can replay this tutorial anytime by clicking the help button in the top right corner.',
        },
        {
            icon: 'edit',
            title: 'Step 1: Name Your Batch',
            description:
                'Give your batch a descriptive name so you can easily identify it later. For example: "January 2026 Verifications" or "HR Background Checks Q1".',
        },
        {
            icon: 'download',
            title: 'Step 2: Download the Template',
            description:
                'Before uploading, download the CSV template. This template includes all the required columns based on your batch configuration.',
            tip: 'The template ensures your data has the correct format and all required fields are present.',
        },
        {
            icon: 'table_chart',
            title: 'Step 3: Fill Your Data',
            description:
                'Open the template in Excel or Google Sheets and fill in your data. Each row represents one record to be processed.',
            tip: 'Make sure all required fields (marked with *) are filled in. Empty required fields will cause errors.',
        },
        {
            icon: 'cloud_upload',
            title: 'Step 4: Upload Your File',
            description:
                "Drag and drop your completed CSV file into the upload area, or click to browse. We'll validate the data and show you a preview.",
        },
        {
            icon: 'visibility',
            title: 'Step 5: Review & Submit',
            description:
                'Check the data preview to make sure everything looks correct. Review the estimated cost, then click "Create Batch" to start processing!',
            tip: 'You can remove the file and upload a different one if you spot any issues.',
        },
    ];

    currentStepData = () => this.steps[this.currentStep()];

    progressPercent = () => ((this.currentStep() + 1) / this.steps.length) * 100;

    nextStep() {
        if (this.currentStep() < this.steps.length - 1) {
            this.currentStep.update((v) => v + 1);
        }
    }

    prevStep() {
        if (this.currentStep() > 0) {
            this.currentStep.update((v) => v - 1);
        }
    }

    close() {
        this._dialogRef.close();
    }
}
