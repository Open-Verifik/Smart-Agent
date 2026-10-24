import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import {
    RETENTION_TYPE_META,
    WEBHOOK_HOLD_MAX,
    WEBHOOK_HOLD_MIN,
    type RetentionDataType,
    type RetentionMode,
    type RetentionPolicy,
} from './retention.model';
import {
    computeIsCustomized,
    defaultRetentionPolicy,
    faceImagesBlockCompare,
    setTypeRule,
    setWebhookHold,
    syncGlobalToGranular,
} from './retention.util';

/**
 * Shared editor for an account or project retention policy.
 * Renders only the types the backend enforces, plus a store-only hours field
 * and a webhook hold clamped to 24–72. Manual delete is not offered.
 */
@Component({
    selector: 'app-retention-policy-form',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        TranslocoModule,
    ],
    templateUrl: './retention-policy-form.component.html',
})
export class RetentionPolicyFormComponent {
    /** Policy being edited. A missing value falls back to the account default. */
    @Input() policy: RetentionPolicy | null = null;

    /** Emits the next policy after each change. The input itself is not mutated. */
    @Output() policyChange = new EventEmitter<RetentionPolicy>();

    readonly typeMeta = RETENTION_TYPE_META;
    readonly holdMin = WEBHOOK_HOLD_MIN;
    readonly holdMax = WEBHOOK_HOLD_MAX;
    readonly modes: RetentionMode[] = ['store', 'ephemeral', 'none'];

    /** Policy shown in the template. */
    get current(): RetentionPolicy {
        return this.policy ?? defaultRetentionPolicy();
    }

    /** True when a type mode differs from the baseline. */
    get customized(): boolean {
        return computeIsCustomized(this.current);
    }

    /** True when face images are `none`, which skips the selfie and blocks face comparison. */
    get faceCompareBlocked(): boolean {
        return faceImagesBlockCompare(this.current);
    }

    /**
     * Translation key for a mode name or its description.
     * @param mode - Store, ephemeral, or none.
     * @param description - When true, returns the longer explanation key.
     */
    modeKey(mode: RetentionMode, description = false): string {
        const name = mode === 'store' ? 'Store' : mode === 'ephemeral' ? 'Ephemeral' : 'None';
        return `settings.dataRetention.mode${name}${description ? 'Desc' : ''}`;
    }

    /**
     * Applies one mode to every enforced type.
     * @param mode - Store, ephemeral, or none.
     */
    setGlobalMode(mode: RetentionMode): void {
        this.policyChange.emit(syncGlobalToGranular(this.current, mode));
    }

    /**
     * Changes one type's mode. Store hours already entered on that type are kept.
     * @param type - Enforced type.
     * @param mode - New mode.
     */
    setTypeMode(type: RetentionDataType, mode: RetentionMode): void {
        const current = this.current.types[type];
        this.policyChange.emit(setTypeRule(this.current, type, { mode, retentionHours: current?.retentionHours }));
    }

    /**
     * Sets how many hours a `store` type is kept. Empty or invalid input means no limit.
     * @param type - Enforced type. Ignored unless that type is `store`.
     * @param raw - Input value.
     */
    setRetentionHours(type: RetentionDataType, raw: string | number | null): void {
        const current = this.current.types[type];
        const parsed = raw === '' || raw === null ? null : Number(raw);
        this.policyChange.emit(
            setTypeRule(this.current, type, {
                mode: current?.mode ?? 'store',
                retentionHours: parsed,
            })
        );
    }

    /**
     * Sets the webhook hold. Values outside 24–72 are clamped.
     * @param raw - Input value.
     */
    setHold(raw: string | number | null): void {
        this.policyChange.emit(setWebhookHold(this.current, raw));
    }
}
