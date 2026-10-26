import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';
import {
    RETENTION_DURATION_PRESETS,
    RETENTION_TYPE_META,
    WEBHOOK_HOLD_MAX,
    WEBHOOK_HOLD_MIN,
    type RetentionDataType,
    type RetentionDurationPreset,
    type RetentionMode,
    type RetentionPolicy,
} from './retention.model';
import {
    computeIsCustomized,
    defaultRetentionPolicy,
    faceImagesHeldUntilHold,
    setAllowManualDelete,
    setTypeRule,
    setWebhookHold,
    syncGlobalToGranular,
} from './retention.util';

/**
 * Shared editor for an account or project retention policy.
 * Renders only the types the backend enforces, plus a store-only hours field
 * and a webhook hold clamped to 24–72. Manual erase is included because the backend gates it.
 * `livenessResults` and `apiResponseLogs` are never part of the policy this form emits.
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
        MatSlideToggleModule,
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
    readonly durationPresets = RETENTION_DURATION_PRESETS;

    /** Tracks which data types currently have custom input selected. */
    customDurationTypes: Partial<Record<RetentionDataType, boolean>> = {};

    /**
     * Returns the selected duration option for a type.
     * Matches a preset number or null (Indefinite).
     * If custom was selected or hours is not in the preset list, returns 'custom'.
     */
    getDurationValue(type: RetentionDataType): number | null | 'custom' {
        if (this.customDurationTypes[type]) {
            return 'custom';
        }
        const hours = this.current.types[type]?.retentionHours;
        if (hours === null || hours === undefined) {
            return null;
        }
        const match = this.durationPresets.find((p) => p.value === hours);
        return match ? (match.value as number) : 'custom';
    }

    /**
     * True if custom hours input should be visible for this type.
     */
    isCustomDuration(type: RetentionDataType): boolean {
        return this.getDurationValue(type) === 'custom';
    }

    /**
     * Handles dropdown change for duration.
     */
    onDurationSelect(type: RetentionDataType, value: number | null | 'custom'): void {
        if (value === 'custom') {
            this.customDurationTypes[type] = true;
            const currentHours = this.current.types[type]?.retentionHours;
            if (!currentHours) {
                this.setRetentionHours(type, 72);
            }
        } else {
            this.customDurationTypes[type] = false;
            this.setRetentionHours(type, value);
        }
    }

    /** Policy shown in the template. */
    get current(): RetentionPolicy {
        return this.policy ?? defaultRetentionPolicy();
    }

    /** True when a type mode differs from the baseline. */
    get customized(): boolean {
        return computeIsCustomized(this.current);
    }

    /** True when face images are `none`. The selfie stays until the hold ends, so comparison can run. */
    get faceHeldUntilHold(): boolean {
        return faceImagesHeldUntilHold(this.current);
    }

    /** True when document-presence photos are not uploaded. */
    get documentLivenessNotUploaded(): boolean {
        return this.current.types.documentLiveness?.mode === 'none';
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

    /**
     * Sets whether administrators may call the manual erase endpoints.
     * @param allowed - Toggle value.
     */
    setManualDelete(allowed: boolean): void {
        this.policyChange.emit(setAllowManualDelete(this.current, allowed));
    }
}
