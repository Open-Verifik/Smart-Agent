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
                            class="flex flex-1 min-w-[130px] items-center gap-2 cursor-pointer transition-all"
                            (click)="onStepClick(step.index)"
                        >
                            <div
                                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all"
                                [class.bg-emerald-600]="step.index === currentStep"
                                [class.text-white]="step.index === currentStep"
                                [class.bg-emerald-100]="step.index < currentStep"
                                [class.text-emerald-800]="step.index < currentStep"
                                [class.bg-stone-200]="step.index > currentStep"
                                [class.text-stone-500]="step.index > currentStep"
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
                                    [class.text-emerald-700]="step.index === currentStep"
                                    [class.dark:text-emerald-400]="step.index === currentStep"
                                    [class.text-stone-800]="step.index < currentStep"
                                    [class.dark:text-stone-200]="step.index < currentStep"
                                    [class.text-stone-400]="step.index > currentStep"
                                >
                                    {{ t(step.titleKey) }}
                                </span>
                                <span class="text-[10px] text-stone-400 truncate">{{ t('smartBusiness.setup.stepXof6', { step: step.index + 1 }) }}</span>
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
