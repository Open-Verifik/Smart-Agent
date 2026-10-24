import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

import type { ProjectDataRetentionOverride } from '../../../../smart-enroll/projects/smart-enroll-projects.types';

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
    retentionGlobalMode: 'store' | 'ephemeral' | 'none' = 'store';
    retentionDocMode: 'store' | 'ephemeral' | 'none' = 'store';
    retentionOcrMode: 'store' | 'ephemeral' | 'none' = 'store';
    retentionLivenessMode: 'store' | 'ephemeral' | 'none' = 'store';
    retentionWebhookHold = 24;
    retentionAllowManualDelete = true;

    constructor(private _transloco: TranslocoService) {}

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

    private _initRetentionFromForm(): void {
        const current = this.form?.get('dataRetention')?.value as ProjectDataRetentionOverride | null | undefined;
        if (current && (current.mode || current.types)) {
            this.retentionOverride = true;
            this.retentionGlobalMode = current.mode || 'store';
            this.retentionDocMode = current.types?.documentImages?.mode || this.retentionGlobalMode;
            this.retentionOcrMode = current.types?.ocrExtraction?.mode || this.retentionGlobalMode;
            this.retentionLivenessMode = current.types?.documentLiveness?.mode || this.retentionGlobalMode;
            this.retentionWebhookHold = current.webhookHoldHours ?? 24;
            this.retentionAllowManualDelete = current.allowManualDelete !== false;
        } else {
            this.retentionOverride = false;
            this.retentionGlobalMode = 'store';
            this.retentionDocMode = 'store';
            this.retentionOcrMode = 'store';
            this.retentionLivenessMode = 'store';
            this.retentionWebhookHold = 24;
            this.retentionAllowManualDelete = true;
        }
    }

    onRetentionToggle(enabled: boolean): void {
        this.retentionOverride = enabled;
        this._syncRetentionToForm();
    }

    onGlobalRetentionModeChange(mode: 'store' | 'ephemeral' | 'none'): void {
        this.retentionGlobalMode = mode;
        this.retentionDocMode = mode;
        this.retentionOcrMode = mode;
        this.retentionLivenessMode = mode;
        this._syncRetentionToForm();
    }

    onGranularTypeChange(type: 'doc' | 'ocr' | 'liveness', mode: 'store' | 'ephemeral' | 'none'): void {
        if (type === 'doc') this.retentionDocMode = mode;
        if (type === 'ocr') this.retentionOcrMode = mode;
        if (type === 'liveness') this.retentionLivenessMode = mode;
        this._syncRetentionToForm();
    }

    onWebhookHoldChange(hours: number): void {
        this.retentionWebhookHold = Math.max(24, Number(hours) || 24);
        this._syncRetentionToForm();
    }

    onManualDeleteChange(allowed: boolean): void {
        this.retentionAllowManualDelete = allowed;
        this._syncRetentionToForm();
    }

    private _syncRetentionToForm(): void {
        const control = this.form?.get('dataRetention');
        if (!control) return;

        if (!this.retentionOverride) {
            control.setValue(null);
            control.markAsDirty();
            return;
        }

        const payload: ProjectDataRetentionOverride = {
            mode: this.retentionGlobalMode,
            webhookHoldHours: this.retentionWebhookHold,
            allowManualDelete: this.retentionAllowManualDelete,
            types: {
                documentImages: { mode: this.retentionDocMode, retentionHours: null },
                ocrExtraction: { mode: this.retentionOcrMode, retentionHours: null },
                faceImages: { mode: 'none', retentionHours: null }, // Strictly locked to none
                documentLiveness: { mode: this.retentionLivenessMode, retentionHours: null },
            },
        };

        control.setValue(payload);
        control.markAsDirty();
    }

    getRetentionModeLabel(mode?: string | null): string {
        if (!mode) return this._transloco.translate('smartEnrollProjects.detail.retention.accountDefault');
        if (mode === 'none') return this._transloco.translate('smartEnrollProjects.detail.retention.modeNone');
        if (mode === 'ephemeral') return this._transloco.translate('smartEnrollProjects.detail.retention.modeEphemeral');
        if (mode === 'store') return this._transloco.translate('smartEnrollProjects.detail.retention.modeStore');
        return mode;
    }
}

