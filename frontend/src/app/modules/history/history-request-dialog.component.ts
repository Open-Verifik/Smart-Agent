import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
    formatHistoryCostCredits,
    getHistoryBillingTooltipParams,
    isDynamicQueryPremiumAdjustment,
} from '../postman/postman-billing.util';
import { ApiRequest, HistoryService } from './history.service';

export interface HistoryRequestDialogResult {
    repeat: true;
    request: ApiRequest;
}

type HistoryStatus = 'failed' | 'pending' | 'success';

@Component({
    selector: 'history-request-dialog',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule],
    templateUrl: './history-request-dialog.component.html',
    styleUrl: './history-request-dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class HistoryRequestDialogComponent implements OnInit, OnDestroy {
    private _data = inject<ApiRequest>(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<HistoryRequestDialogComponent, HistoryRequestDialogResult | undefined>);
    private _historyService = inject(HistoryService);
    private _transloco = inject(TranslocoService);
    private _destroy$ = new Subject<void>();

    request = signal<ApiRequest>({ ...this._data });
    loading = signal(true);

    ngOnInit(): void {
        this._historyService
            .getRequestDetail(this._data._id)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (res) => {
                    this.request.set({ ...this._data, ...res.data });
                    this.loading.set(false);
                },
                error: () => this.loading.set(false),
            });
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    close = (): void => {
        this._dialogRef.close();
    };

    repeat = (): void => {
        const request = this.request();
        if (!request?.code) return;
        this._dialogRef.close({ repeat: true, request });
    };

    canRepeatRequest = (request: ApiRequest): boolean => !!request?.code;

    formatDate = (date?: string | number): string => {
        if (!date) return '—';
        if (typeof date === 'number') return DateTime.fromMillis(date).toFormat('LLL dd, yyyy h:mma');
        const parsed = DateTime.fromISO(date);
        return parsed.isValid ? parsed.toFormat('LLL dd, yyyy h:mma') : '—';
    };

    formatCost = (cost?: number | string | null): string => {
        const formatted = formatHistoryCostCredits(cost);
        return formatted === '-' ? '—' : `${formatted} credits`;
    };

    isNotCharged = (row?: { historyStatus?: string; status?: string; statusCode?: number } | null): boolean =>
        this._resolveHistoryStatus(row) === 'pending';

    hasDynamicQueryBilling = (request: ApiRequest): boolean => isDynamicQueryPremiumAdjustment(request);

    getDynamicQueryTooltipParams = (request: ApiRequest) => getHistoryBillingTooltipParams(request);

    historyStatusClass = (row?: { historyStatus?: string; status?: string; statusCode?: number } | null): string => {
        const status = this._resolveHistoryStatus(row);
        if (status === 'success') return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300';
        if (status === 'failed') return 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300';
        return 'bg-stone-100 text-stone-600 dark:bg-gray-800 dark:text-stone-300';
    };

    historyStatusLabel = (row?: { historyStatus?: string; status?: string; statusCode?: number } | null): string => {
        const status = this._resolveHistoryStatus(row);
        if (status === 'failed') return this._transloco.translate('history.statusFailed');
        if (status === 'pending') return this._transloco.translate('history.statusPending');
        return this._transloco.translate('history.statusSuccess');
    };

    private _resolveHistoryStatus = (
        row?: { historyStatus?: string; status?: string; statusCode?: number } | null
    ): HistoryStatus => {
        if (row?.historyStatus === 'success' || row?.historyStatus === 'failed' || row?.historyStatus === 'pending') {
            return row.historyStatus;
        }
        if (row?.status === 'failed' || row?.status === 'timed-out') return 'failed';
        if (row?.status === 'queue') return 'pending';
        if (row?.status === 'ok' && row.statusCode != null && row.statusCode >= 400) return 'failed';
        if (row?.status === 'ok') return 'success';
        return 'pending';
    };
}
