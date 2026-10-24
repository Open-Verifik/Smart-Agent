import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';

import { RetentionPolicyFormComponent } from 'app/core/data-retention/retention-policy-form.component';
import type { RetentionPolicy } from 'app/core/data-retention/retention.model';
import {
    buildProjectRetentionOverride,
    defaultRetentionPolicy,
    policyFromStored,
} from 'app/core/data-retention/retention.util';

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
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatSlideToggleModule,
        TranslocoModule,
        RetentionPolicyFormComponent,
    ],
    templateUrl: './storage-step.component.html',
    styleUrl: './storage-step.component.scss',
})
export class HumanAuthnStorageStepComponent implements OnInit {
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

    retentionOverride = false;
    retentionPolicy: RetentionPolicy = defaultRetentionPolicy();

    ngOnInit(): void {
        this._initRetentionFromForm();
    }

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

    /**
     * Reads a saved project override. Face images follow the saved mode
     * and are not forced to `none`, which would skip the selfie and block face comparison.
     */
    private _initRetentionFromForm(): void {
        const current = this.form?.get('dataRetention')?.value;
        const policy = policyFromStored(current);
        if (policy) {
            this.retentionOverride = true;
            this.retentionPolicy = policy;
            return;
        }
        this.retentionOverride = false;
        this.retentionPolicy = defaultRetentionPolicy();
    }

    /** Turns the project override on or off and writes the form control. */
    onRetentionToggle(enabled: boolean): void {
        this.retentionOverride = enabled;
        this._syncRetentionToForm();
    }

    /** Applies an edit from the shared policy form. */
    onRetentionPolicyChange(policy: RetentionPolicy): void {
        this.retentionPolicy = policy;
        this._syncRetentionToForm();
    }

    /** Writes `dataRetention` as null, or as an enforced-types override. */
    private _syncRetentionToForm(): void {
        const control = this.form?.get('dataRetention');
        if (!control) return;
        control.setValue(this.retentionOverride ? buildProjectRetentionOverride(this.retentionPolicy) : null);
        control.markAsDirty();
    }
}

