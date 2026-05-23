import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    inject,
} from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { formatScore, isPlainObject } from './demo-result.utils';

type ResultTab = 'matches' | 'raw';

@Component({
    selector: 'app-search-active-user-result',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    templateUrl: './search-active-user-result.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchActiveUserResultComponent implements OnChanges {
    @Input({ required: true }) result: Record<string, unknown> | null = null;
    @Output() reset = new EventEmitter<void>();

    activeTab: ResultTab = 'matches';
    copyState: 'idle' | 'copied' | 'error' = 'idle';
    matches: Array<Record<string, unknown>> = [];
    liveness: Record<string, unknown> | null = null;
    signature: { dateTime: string; message: string } | null = null;
    requestId = '';

    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    ngOnChanges(): void {
        this.parseResult();
    }

    setTab(tab: ResultTab): void {
        this.activeTab = tab;
        this._cdr.markForCheck();
    }

    async copyRaw(): Promise<void> {
        if (!this.result) return;
        try {
            await navigator.clipboard.writeText(JSON.stringify(this.result, null, 2));
            this.copyState = 'copied';
        } catch {
            this.copyState = 'error';
        }
        this._cdr.markForCheck();
        window.setTimeout(() => {
            this.copyState = 'idle';
            this._cdr.markForCheck();
        }, 1800);
    }

    formatScoreValue(score: number | null): string {
        return formatScore(score, this._transloco.translate('smartEnrollDemos.common.scoreNA'));
    }

    private parseResult(): void {
        const data = isPlainObject(this.result?.['data']) ? (this.result!['data'] as Record<string, unknown>) : null;
        this.liveness = isPlainObject(data?.['liveness']) ? (data!['liveness'] as Record<string, unknown>) : null;
        this.matches = Array.isArray(data?.['persons'])
            ? ((data!['persons'] as unknown[]).filter(isPlainObject) as Array<Record<string, unknown>>)
            : [];

        const sig = this.result?.['signature'];
        this.signature = isPlainObject(sig)
            ? {
                  dateTime: typeof sig['dateTime'] === 'string' ? sig['dateTime'] : '',
                  message: typeof sig['message'] === 'string' ? sig['message'] : '',
              }
            : null;
        this.requestId = typeof this.result?.['id'] === 'string' ? this.result['id'] : '';
    }
}
