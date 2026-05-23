import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { formatDisplayValue, isPlainObject } from './human-id-result.util';
import { DemoResultActionsComponent } from './demo-result-actions.component';

const PREVIEW_DATA_HANDLED = new Set(['publicData', 'passwordLayer', 'requireLiveness']);

@Component({
    selector: 'app-human-id-preview-result',
    standalone: true,
    imports: [JsonPipe, TranslocoModule, DemoResultActionsComponent],
    templateUrl: './human-id-preview-result.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumanIdPreviewResultComponent {
    @Input({ required: true }) result: Record<string, unknown> | null = null;
    @Output() previewAnother = new EventEmitter<void>();
    @Output() backToDemos = new EventEmitter<void>();

    get parsed() {
        if (!this.result) return null;
        const data = isPlainObject(this.result['data']) ? (this.result['data'] as Record<string, unknown>) : null;
        const extraData: Record<string, unknown> = {};
        if (data) {
            for (const [k, v] of Object.entries(data)) {
                if (!PREVIEW_DATA_HANDLED.has(k)) extraData[k] = v;
            }
        }
        return {
            publicData: isPlainObject(data?.['publicData']) ? (data['publicData'] as Record<string, unknown>) : null,
            passwordLayer: typeof data?.['passwordLayer'] === 'string' ? data['passwordLayer'] : undefined,
            requireLiveness: typeof data?.['requireLiveness'] === 'boolean' ? data['requireLiveness'] : undefined,
            extraData,
        };
    }

    formatValue(v: unknown, yes: string, no: string): string {
        return formatDisplayValue(v, yes, no);
    }

    formatPasswordLayer(value: string): string {
        const normalized = value.trim();
        if (normalized === 'NoPassword') return 'No password';
        if (normalized === 'HasPassword') return 'Password required';
        return normalized;
    }

    objectEntries(obj: Record<string, unknown> | null): [string, unknown][] {
        if (!obj) return [];
        return Object.entries(obj).filter(([, v]) => v !== undefined && v !== null);
    }

    hasSummaryRow(): boolean {
        const p = this.parsed;
        return (
            p?.passwordLayer !== undefined ||
            p?.requireLiveness !== undefined ||
            Object.keys(p?.extraData ?? {}).length > 0
        );
    }
}
