import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

type StorageProvider = 'ipfs' | 'cloud' | 'none';

type StorageProviderOption = {
    value: StorageProvider;
    icon: string;
    resultIcon: string;
    titleKey: string;
    bodyKey: string;
    benefitKeys: string[];
};

@Component({
    selector: 'human-authn-storage-step',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatIconModule, TranslocoModule],
    templateUrl: './storage-step.component.html',
    styleUrl: './storage-step.component.scss',
})
export class HumanAuthnStorageStepComponent {
    @Input() form!: FormGroup;

    readonly providers: StorageProviderOption[] = [
        {
            value: 'ipfs',
            icon: 'hub',
            resultIcon: 'link',
            titleKey: 'humanAuthnProjects.setup.storage.ipfsTitle',
            bodyKey: 'humanAuthnProjects.setup.storage.ipfsBody',
            benefitKeys: [
                'humanAuthnProjects.setup.storage.ipfsBenefitIndex',
                'humanAuthnProjects.setup.storage.ipfsBenefitGateway',
                'humanAuthnProjects.setup.storage.sameEncryptedPayload',
            ],
        },
        {
            value: 'cloud',
            icon: 'cloud_queue',
            resultIcon: 'cloud_done',
            titleKey: 'humanAuthnProjects.setup.storage.cloudTitle',
            bodyKey: 'humanAuthnProjects.setup.storage.cloudBody',
            benefitKeys: [
                'humanAuthnProjects.setup.storage.cloudBenefitManaged',
                'humanAuthnProjects.setup.storage.cloudBenefitHosted',
                'humanAuthnProjects.setup.storage.sameEncryptedPayload',
            ],
        },
        {
            value: 'none',
            icon: 'reply',
            resultIcon: 'api',
            titleKey: 'humanAuthnProjects.setup.storage.noneTitle',
            bodyKey: 'humanAuthnProjects.setup.storage.noneBody',
            benefitKeys: [
                'humanAuthnProjects.setup.storage.noneBenefitApi',
                'humanAuthnProjects.setup.storage.noneBenefitNoPersistence',
                'humanAuthnProjects.setup.storage.sameEncryptedPayload',
            ],
        },
    ];

    get provider(): StorageProvider {
        return this.form?.get('projectFlow.storage.provider')?.value || 'ipfs';
    }

    get selectedProvider(): StorageProviderOption {
        return this.providers.find((option) => option.value === this.provider) || this.providers[0];
    }

    setProvider(provider: StorageProvider): void {
        const control = this.form.get('projectFlow.storage.provider');
        control?.setValue(provider);
        control?.markAsDirty();
    }
}
