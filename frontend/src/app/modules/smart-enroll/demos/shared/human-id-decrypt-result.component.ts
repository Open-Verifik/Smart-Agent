import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { faceCropToDataUrl, formatDisplayValue, isPlainObject } from './human-id-result.util';
import { DemoResultActionsComponent } from './demo-result-actions.component';
import { DemoCreditsUsageComponent } from './demo-credits-usage.component';

@Component({
    selector: 'app-human-id-decrypt-result',
    standalone: true,
    imports: [JsonPipe, TranslocoModule, DemoResultActionsComponent, DemoCreditsUsageComponent],
    templateUrl: './human-id-decrypt-result.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumanIdDecryptResultComponent {
    @Input({ required: true }) result: Record<string, unknown> | null = null;
    @Output() tryAgain = new EventEmitter<void>();
    @Output() backToDemos = new EventEmitter<void>();

    get parsed() {
        if (!this.result) return null;
        const data = isPlainObject(this.result['data']) ? (this.result['data'] as Record<string, unknown>) : null;
        return {
            identifier: typeof data?.['identifier'] === 'string' ? data['identifier'] : '',
            publicData: isPlainObject(data?.['publicData']) ? (data['publicData'] as Record<string, unknown>) : null,
            metadata: isPlainObject(data?.['metadata']) ? (data['metadata'] as Record<string, unknown>) : null,
            faceCropBase64: typeof data?.['faceCropBase64'] === 'string' ? data['faceCropBase64'] : '',
            difficulty: typeof data?.['difficulty'] === 'string' ? data['difficulty'] : '',
            credits: isPlainObject(this.result['credits']) ? (this.result['credits'] as Record<string, unknown>) : null,
            charged: typeof this.result['charged'] === 'boolean' ? this.result['charged'] : undefined,
            requiredLiveness:
                typeof this.result['requiredLiveness'] === 'boolean' ? this.result['requiredLiveness'] : undefined,
        };
    }

    formatValue(v: unknown, yes: string, no: string): string {
        return formatDisplayValue(v, yes, no);
    }

    faceCropUrl(): string {
        return faceCropToDataUrl(this.parsed?.faceCropBase64 ?? '');
    }

    objectEntries(obj: Record<string, unknown> | null): [string, unknown][] {
        if (!obj) return [];
        return Object.entries(obj).filter(([, v]) => v !== undefined && v !== null);
    }
}
