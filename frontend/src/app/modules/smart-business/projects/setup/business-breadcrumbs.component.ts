import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { BUSINESS_WIZARD_STEPS, BusinessWizardStep } from './business-setup.types';

@Component({
    selector: 'business-breadcrumbs',
    standalone: true,
    imports: [CommonModule, MatIconModule, TranslocoModule],
    template: `
        <ng-container *transloco="let t">
            <nav aria-label="Wizard Steps" class="w-full">
                <ol class="flex items-center justify-between gap-2 overflow-x-auto py-2">
                    @for (step of steps; track step.index) {
                        <li
                            tabindex="0"
                            class="flex flex-1 min-w-[130px] items-center gap-2 cursor-pointer rounded-lg px-1.5 py-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                            (click)="onStepClick(step.index)"
                            (keydown.enter)="onStepClick(step.index)"
                        >
                            <div
                                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all"
                                [ngClass]="
                                    step.index === currentStep
                                        ? 'bg-emerald-600 text-white ring-4 ring-emerald-500/20 dark:ring-emerald-400/20'
                                        : step.index < currentStep
                                          ? 'bg-emerald-100 text-emerald-800 dark:border dark:border-emerald-700/60 dark:bg-emerald-950/80 dark:text-emerald-300'
                                          : 'bg-stone-200 text-stone-600 dark:border dark:border-gray-700 dark:bg-gray-800 dark:text-stone-300'
                                "
                            >
                                @if (step.index < currentStep) {
                                    <mat-icon class="icon-size-4">check</mat-icon>
                                } @else {
                                    {{ step.index }}
                                }
                            </div>
                            <div class="flex flex-col min-w-0">
                                <span
                                    class="text-xs font-semibold truncate leading-tight"
                                    [ngClass]="
                                        step.index === currentStep
                                            ? 'text-emerald-700 dark:text-emerald-400'
                                            : step.index < currentStep
                                              ? 'text-stone-800 dark:text-stone-200'
                                              : 'text-stone-500 dark:text-stone-400'
                                    "
                                >
                                    {{ t(step.titleKey) }}
                                </span>
                                <span class="text-[10px] text-stone-500 dark:text-stone-400 truncate">{{ t('smartBusiness.setup.stepXof6', { step: step.index + 1 }) }}</span>
                            </div>
                        </li>
                    }
                </ol>
            </nav>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessBreadcrumbsComponent {
    @Input() currentStep = 0;
    @Input() maxVisitedStep = 0;
    @Output() stepSelected = new EventEmitter<number>();

    readonly steps: BusinessWizardStep[] = BUSINESS_WIZARD_STEPS;

    readonly stepLabels = [
        'Configuración',
        'Empresa',
        'Documentos & Registros',
        'Socios & KYC',
        'Integraciones',
        'Estilo Visual',
    ];

    onStepClick(index: number): void {
        this.stepSelected.emit(index);
    }
}
