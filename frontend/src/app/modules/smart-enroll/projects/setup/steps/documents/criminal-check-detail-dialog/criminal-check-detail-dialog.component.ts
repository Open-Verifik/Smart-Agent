import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    SecurityContext,
    signal,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { FuseHighlightService } from '../../../../../../../../@fuse/components/highlight/highlight.service';
import {
    DEFAULT_ENROLL_LOOKUP_DISCOUNT_PERCENT,
    discountedOveragePrice,
} from '../../../../../plans/smart-enroll-usage.util';
import {
    CriminalCheckCodeExample,
    CriminalCheckDetail,
    CriminalCheckDocs,
    CriminalCheckOption,
    CriminalCheckParam,
    CriminalCheckParamGroup,
    CriminalCheckResponseSample,
    criminalCheckDocsUrl,
    getCriminalCheckEndpointDetail,
} from '../criminal-check-catalog.util';

export interface CriminalCheckDialogData {
    check: CriminalCheckOption;
    isSelected: boolean;
    onToggle?: () => void;
}

export type DetailDialogTab = 'overview' | 'params' | 'responses' | 'code';

@Component({
    selector: 'app-criminal-check-detail-dialog',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatTooltipModule,
        TranslocoModule,
    ],
    templateUrl: './criminal-check-detail-dialog.component.html',
    styleUrl: './criminal-check-detail-dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CriminalCheckDetailDialogComponent {
    readonly data = inject<CriminalCheckDialogData>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef<CriminalCheckDetailDialogComponent>);

    private _transloco = inject(TranslocoService);
    private _highlight = inject(FuseHighlightService);
    private _sanitizer = inject(DomSanitizer);

    readonly activeTab = signal<DetailDialogTab>('overview');
    readonly selectedResponseIndex = signal<number>(0);
    readonly selectedCodeIndex = signal<number>(0);
    readonly copiedKey = signal<string | null>(null);
    readonly isSelected = signal<boolean>(this.data?.isSelected ?? false);

    readonly detail = signal<CriminalCheckDetail | null>(
        getCriminalCheckEndpointDetail(this.data.check.value, this._transloco.getActiveLang())
    );

    readonly localizedOverview = computed(() => {
        const d = this.detail();
        const activeLang = this._transloco.getActiveLang()?.toLowerCase() || 'en';
        if (activeLang.startsWith('es') && d?.description) {
            return d.description;
        }
        return d?.description || '';
    });

    readonly listPrice = computed<number | null>(() => {
        return this.detail()?.price ?? null;
    });

    readonly discountPercent = computed<number>(() => {
        return DEFAULT_ENROLL_LOOKUP_DISCOUNT_PERCENT;
    });

    readonly smartEnrollPrice = computed<number | null>(() => {
        const list = this.listPrice();
        if (list == null) return null;
        return discountedOveragePrice(list, this.discountPercent());
    });

    readonly paramsList = computed<CriminalCheckParam[]>(() => {
        return this.detail()?.params || [];
    });

    readonly paramGroups = computed<CriminalCheckParamGroup[]>(() => {
        return this.detail()?.paramGroups || [];
    });

    readonly hasSearchGroups = computed<boolean>(() => {
        return this.detail()?.hasSearchGroups ?? false;
    });

    readonly responseSamples = computed<CriminalCheckResponseSample[]>(() => {
        return this.detail()?.responses || [];
    });

    readonly currentResponse = computed<CriminalCheckResponseSample | null>(() => {
        const list = this.responseSamples();
        if (!list.length) return null;
        const idx = this.selectedResponseIndex();
        return list[idx] ?? list[0];
    });

    readonly highlightedResponseHtml = computed<SafeHtml>(() => {
        const current = this.currentResponse();
        if (!current) return '';
        return this._highlightSafe(current.formattedJson, 'json');
    });

    readonly codeExamples = computed<CriminalCheckCodeExample[]>(() => {
        return this.detail()?.requestExamples || [];
    });

    readonly currentCodeExample = computed<CriminalCheckCodeExample | null>(() => {
        const list = this.codeExamples();
        if (!list.length) return null;
        const idx = this.selectedCodeIndex();
        return list[idx] ?? list[0];
    });

    readonly highlightedCodeHtml = computed<SafeHtml>(() => {
        const current = this.currentCodeExample();
        if (!current) return '';
        return this._highlightSafe(current.code, current.language || 'bash');
    });

    readonly docsUrl = computed(() => {
        return criminalCheckDocsUrl(this.data.check.docs, this._transloco.getActiveLang());
    });

    readonly postmanUrl = computed(() => {
        return `/postman?code=${encodeURIComponent(this.data.check.value)}`;
    });

    selectTab(tab: DetailDialogTab): void {
        this.activeTab.set(tab);
    }

    selectResponse(index: number): void {
        this.selectedResponseIndex.set(index);
    }

    selectCode(index: number): void {
        this.selectedCodeIndex.set(index);
    }

    toggleCheck(): void {
        const next = !this.isSelected();
        this.isSelected.set(next);
        this.data.onToggle?.();
    }

    async copy(text: string, key: string): Promise<void> {
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            this.copiedKey.set(key);
            setTimeout(() => {
                if (this.copiedKey() === key) {
                    this.copiedKey.set(null);
                }
            }, 1800);
        } catch {
            /* clipboard write denied; no-op */
        }
    }

    close(): void {
        this.dialogRef.close(this.isSelected());
    }

    private _highlightSafe(code: string, language: string): string {
        if (!code) return '';
        try {
            const html = this._highlight.highlight(code, language);
            return this._sanitizer.sanitize(SecurityContext.HTML, html) ?? '';
        } catch {
            return this._sanitizer.sanitize(SecurityContext.HTML, code) ?? '';
        }
    }
}
