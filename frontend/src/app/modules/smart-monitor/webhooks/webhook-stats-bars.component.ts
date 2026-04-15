import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DateTime } from 'luxon';

/** statistics: map of yyyy-MM-dd -> { success, failed } */
@Component({
    selector: 'webhook-stats-bars',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    templateUrl: './webhook-stats-bars.component.html',
    styleUrls: ['./webhook-stats-bars.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebhookStatsBarsComponent implements OnChanges {
    @Input() statistics: Record<string, { success?: number; failed?: number }> | null = null;
    @Input() days = 7;

    lastDays: string[] = [];
    bars: { day: string; success: number; failed: number; successPct: number; failedPct: number; label: string }[] = [];
    errorRate = 0;

    ngOnChanges(): void {
        this.rebuild();
    }

    private rebuild(): void {
        this.lastDays = [];
        for (let i = this.days - 1; i >= 0; i--) {
            this.lastDays.push(DateTime.now().minus({ days: i }).toFormat('yyyy-MM-dd'));
        }
        let totalOk = 0;
        let totalFail = 0;
        let max = 1;
        const raw = this.lastDays.map((day) => {
            const d = this.statistics?.[day];
            const success = d?.success ?? 0;
            const failed = d?.failed ?? 0;
            totalOk += success;
            totalFail += failed;
            const sum = success + failed;
            if (sum > max) max = sum;
            return { day, success, failed, sum };
        });
        this.errorRate = totalOk + totalFail > 0 ? (totalFail / (totalOk + totalFail)) * 100 : 0;
        this.bars = raw.map((r) => ({
            day: r.day,
            success: r.success,
            failed: r.failed,
            successPct: max ? (r.success / max) * 100 : 0,
            failedPct: max ? (r.failed / max) * 100 : 0,
            label: DateTime.fromISO(r.day).toFormat('LLL d'),
        }));
    }
}
