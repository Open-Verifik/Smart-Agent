import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'human-authn-storage-step',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TranslocoModule],
    template: `
        <ng-container *transloco="let t">
            <div class="grid gap-4 md:grid-cols-2">
                <button
                    type="button"
                    class="rounded-2xl border p-5 text-left"
                    [class.border-stone-900]="provider === 'ipfs'"
                    [class.border-stone-200]="provider !== 'ipfs'"
                    (click)="setProvider('ipfs')"
                >
                    <h3 class="font-semibold">{{ t('humanAuthnProjects.setup.storage.ipfsTitle') }}</h3>
                    <p class="mt-2 text-sm text-stone-500">{{ t('humanAuthnProjects.setup.storage.ipfsBody') }}</p>
                </button>
                <button
                    type="button"
                    class="rounded-2xl border p-5 text-left"
                    [class.border-stone-900]="provider === 'cloud'"
                    [class.border-stone-200]="provider !== 'cloud'"
                    (click)="setProvider('cloud')"
                >
                    <h3 class="font-semibold">{{ t('humanAuthnProjects.setup.storage.cloudTitle') }}</h3>
                    <p class="mt-2 text-sm text-stone-500">{{ t('humanAuthnProjects.setup.storage.cloudBody') }}</p>
                </button>
            </div>
        </ng-container>
    `,
})
export class HumanAuthnStorageStepComponent {
    @Input() form!: FormGroup;

    get provider(): string {
        return this.form?.get('projectFlow.storage.provider')?.value || 'ipfs';
    }

    setProvider(provider: 'ipfs' | 'cloud'): void {
        this.form.get('projectFlow.storage.provider')?.setValue(provider);
        this.form.get('projectFlow.storage.provider')?.markAsDirty();
    }
}
