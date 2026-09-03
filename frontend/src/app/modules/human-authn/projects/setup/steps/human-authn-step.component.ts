import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'human-authn-mode-step',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatSlideToggleModule, TranslocoModule],
    template: `
        <ng-container *transloco="let t" [formGroup]="form">
            <div class="flex flex-col gap-4" formGroupName="projectFlow">
                <p class="text-sm text-stone-500">{{ t('humanAuthnProjects.setup.humanAuthn.privacy') }}</p>
                <div class="grid gap-4 md:grid-cols-2" formGroupName="humanAuthn">
                    <button
                        type="button"
                        class="rounded-2xl border p-5 text-left"
                        [class.border-stone-900]="form.get('projectFlow.humanAuthn.mode')?.value === 'standard'"
                        [class.border-stone-200]="form.get('projectFlow.humanAuthn.mode')?.value !== 'standard'"
                        (click)="setMode('standard')"
                    >
                        <h3 class="font-semibold">{{ t('humanAuthnProjects.setup.humanAuthn.standardTitle') }}</h3>
                        <p class="mt-2 text-sm text-stone-500">{{ t('humanAuthnProjects.setup.humanAuthn.standardBody') }}</p>
                    </button>
                    <button
                        type="button"
                        class="rounded-2xl border p-5 text-left"
                        [class.border-stone-900]="form.get('projectFlow.humanAuthn.mode')?.value === 'active_user'"
                        [class.border-stone-200]="form.get('projectFlow.humanAuthn.mode')?.value !== 'active_user'"
                        (click)="setMode('active_user')"
                    >
                        <h3 class="font-semibold">{{ t('humanAuthnProjects.setup.humanAuthn.activeTitle') }}</h3>
                        <p class="mt-2 text-sm text-stone-500">{{ t('humanAuthnProjects.setup.humanAuthn.activeBody') }}</p>
                    </button>
                    <mat-slide-toggle formControlName="livenessAtCreation" class="md:col-span-2">
                        {{ t('humanAuthnProjects.setup.humanAuthn.livenessAtCreation') }}
                    </mat-slide-toggle>
                    <p class="md:col-span-2 text-xs text-stone-500">
                        {{ t('humanAuthnProjects.setup.humanAuthn.livenessAtCreationHelp') }}
                    </p>
                </div>
            </div>
        </ng-container>
    `,
})
export class HumanAuthnModeStepComponent {
    @Input() form!: FormGroup;

    setMode(mode: 'standard' | 'active_user'): void {
        const control = this.form.get('projectFlow.humanAuthn.mode');
        control?.setValue(mode);
        control?.markAsDirty();
    }
}
