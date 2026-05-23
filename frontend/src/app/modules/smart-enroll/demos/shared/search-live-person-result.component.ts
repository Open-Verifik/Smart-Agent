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
import {
    formatDate,
    formatDob,
    formatScore,
    isPlainObject,
    parseCollectionEntries,
    parseThumbnails,
} from './demo-result.utils';
import { DemoRasterImageComponent } from './demo-raster-image.component';

type ResultTab = 'matches' | 'raw';

@Component({
    selector: 'app-search-live-person-result',
    standalone: true,
    imports: [CommonModule, TranslocoModule, DemoRasterImageComponent],
    templateUrl: './search-live-person-result.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLivePersonResultComponent implements OnChanges {
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

    formatGender(gender: string): string {
        if (gender === 'M') return this._transloco.translate('smartEnrollDemos.common.male');
        if (gender === 'F') return this._transloco.translate('smartEnrollDemos.common.female');
        return gender;
    }

    formatScoreValue(score: number | null): string {
        return formatScore(score, this._transloco.translate('smartEnrollDemos.common.scoreNA'));
    }

    livenessScoreDisplay(): string {
        const score = this.livenessResult()?.['liveness_score'];
        return this.formatScoreValue(typeof score === 'number' ? score : null);
    }

    formatDateValue(value: string): string {
        return formatDate(value);
    }

    formatDobValue(value: string): string {
        return formatDob(value);
    }

    parseThumbnails(raw: unknown): { id: string; src: string }[] {
        return parseThumbnails(Array.isArray(raw) ? raw : []);
    }

    parseCollections(raw: unknown) {
        return parseCollectionEntries(Array.isArray(raw) ? raw : []);
    }

    livenessResult(): Record<string, unknown> | null {
        if (!this.liveness) return null;
        const r = this.liveness['result'];
        return isPlainObject(r) ? r : null;
    }

    private parseResult(): void {
        const data = isPlainObject(this.result?.['data']) ? (this.result!['data'] as Record<string, unknown>) : null;
        const rawMatches = Array.isArray(data?.['search']) ? (data!['search'] as unknown[]) : [];
        this.matches = rawMatches.filter(isPlainObject) as Array<Record<string, unknown>>;
        this.liveness = isPlainObject(data?.['liveness']) ? (data!['liveness'] as Record<string, unknown>) : null;

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
