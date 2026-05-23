import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    Output,
    EventEmitter,
    inject,
    OnChanges,
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
type CopyState = 'idle' | 'copied' | 'error';

type ParsedMatch = {
    id: string;
    name: string;
    gender: string;
    dateOfBirth: string;
    nationality: string;
    notes: unknown;
    score: number | null;
    createDate: string;
    modifiedDate: string;
    thumbnails: { id: string; src: string }[];
    collections: ReturnType<typeof parseCollectionEntries>;
};

@Component({
    selector: 'app-search-person-result',
    standalone: true,
    imports: [CommonModule, TranslocoModule, DemoRasterImageComponent],
    templateUrl: './search-person-result.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPersonResultComponent implements OnChanges {
    @Input({ required: true }) result: Record<string, unknown> | null = null;
    @Output() reset = new EventEmitter<void>();

    activeTab: ResultTab = 'matches';
    copyState: CopyState = 'idle';
    matches: ParsedMatch[] = [];
    signature: { dateTime: string; message: string } | null = null;
    requestId = '';

    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    ngOnChanges(): void {
        this.parseResult();
    }

    formatGender(gender: string): string {
        if (gender === 'M') return this._transloco.translate('smartEnrollDemos.common.male');
        if (gender === 'F') return this._transloco.translate('smartEnrollDemos.common.female');
        return gender;
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

    private parseResult(): void {
        const rawMatches = Array.isArray(this.result?.['data']) ? (this.result!['data'] as unknown[]) : [];
        this.matches = rawMatches
            .filter(isPlainObject)
            .map((person) => ({
                id: typeof person['id'] === 'string' ? person['id'] : '',
                name:
                    typeof person['name'] === 'string'
                        ? person['name']
                        : this._transloco.translate('smartEnrollDemos.common.unknownPerson'),
                gender: typeof person['gender'] === 'string' ? person['gender'] : '',
                dateOfBirth: typeof person['date_of_birth'] === 'string' ? person['date_of_birth'] : '',
                nationality: typeof person['nationality'] === 'string' ? person['nationality'] : '',
                notes: person['notes'],
                score: typeof person['score'] === 'number' ? person['score'] : null,
                createDate: typeof person['create_date'] === 'string' ? person['create_date'] : '',
                modifiedDate: typeof person['modified_date'] === 'string' ? person['modified_date'] : '',
                thumbnails: parseThumbnails(Array.isArray(person['thumbnails']) ? person['thumbnails'] : []),
                collections: parseCollectionEntries(Array.isArray(person['collections']) ? person['collections'] : []),
            }))
            .sort((a, b) => (b.score ?? -1) - (a.score ?? -1));

        const sig = this.result?.['signature'];
        this.signature = isPlainObject(sig)
            ? {
                  dateTime: typeof sig['dateTime'] === 'string' ? sig['dateTime'] : '',
                  message: typeof sig['message'] === 'string' ? sig['message'] : '',
              }
            : null;
        this.requestId = typeof this.result?.['id'] === 'string' ? this.result['id'] : '';
    }

    formatScoreValue(score: number | null): string {
        return formatScore(score, this._transloco.translate('smartEnrollDemos.common.scoreNA'));
    }

    formatDateValue(value: string): string {
        return formatDate(value);
    }

    formatDobValue(value: string): string {
        return formatDob(value);
    }
}
