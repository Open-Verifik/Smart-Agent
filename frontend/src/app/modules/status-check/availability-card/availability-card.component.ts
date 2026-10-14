import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AvailabilityMonth, AvailabilityReport, UsageApiService } from 'app/core/usage/usage-api.service';
import { getVerifikDocsUrls } from 'app/core/docs/verifik-docs-urls';

type CardState = 'loading' | 'ready' | 'hidden' | 'error';

interface MonthBar extends AvailabilityMonth {
    label: string;
    percent: number | null;
    height: number;
    tone: string;
}

const BAR_TONES = { met: 'bg-emerald-500', missed: 'bg-rose-500', none: 'bg-gray-200 dark:bg-gray-800' };

/** Bars start at this SLI so the gap between 90% and 100% stays readable. */
const CHART_FLOOR = 0.9;

/**
 * Monthly SmartCheck availability for the signed-in account, measured against the contractual target.
 */
@Component({
    selector: 'app-availability-card',
    standalone: true,
    imports: [DecimalPipe, MatIconModule, MatTooltipModule, TranslocoModule],
    templateUrl: './availability-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailabilityCardComponent implements OnInit {
    private _usageApi = inject(UsageApiService);
    private _transloco = inject(TranslocoService);
    private _destroyRef = inject(DestroyRef);

    readonly state = signal<CardState>('loading');
    readonly report = signal<AvailabilityReport | null>(null);

    readonly target = computed(() => this.report()?.target ?? 0.95);
    readonly targetOffset = computed(() => this._barHeight(this.target()));

    readonly bars = computed<MonthBar[]>(() => {
        const lang = this._transloco.getActiveLang() || 'en';
        const formatter = new Intl.DateTimeFormat(lang === 'es' ? 'es' : 'en', { month: 'short', year: 'numeric', timeZone: 'UTC' });
        return (this.report()?.months ?? []).map((month) => ({
            ...month,
            label: formatter.format(new Date(`${month.month}-01T00:00:00Z`)),
            percent: month.sli === null ? null : month.sli * 100,
            height: month.sli === null ? 0 : this._barHeight(month.sli),
            tone: month.met === true ? BAR_TONES.met : month.met === false ? BAR_TONES.missed : BAR_TONES.none,
        }));
    });

    readonly hasData = computed(() => this.bars().some((bar) => bar.sli !== null));

    readonly closedMonths = computed(() => this.bars().filter((bar) => !bar.partial && bar.sli !== null));
    readonly monthsMet = computed(() => this.closedMonths().filter((bar) => bar.met).length);
    /** Up to three services under target in the most recent month that has traffic. */
    readonly weakServices = computed(() => {
        const latest = [...this.bars()].reverse().find((bar) => bar.sli !== null);
        if (!latest) return [];
        return latest.services
            .filter((service) => service.sli !== null && service.sli < this.target())
            .sort((a, b) => (a.sli ?? 0) - (b.sli ?? 0))
            .slice(0, 3);
    });

    docsUrl = (): string => getVerifikDocsUrls(this._transloco.getActiveLang()).usageApi;

    ngOnInit(): void {
        if (!localStorage.getItem('accessToken')) {
            this.state.set('hidden');
            return;
        }

        this._usageApi
            .getAvailability(6)
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe({
                next: (report) => {
                    this.report.set(report);
                    this.state.set('ready');
                },
                error: (error) => this.state.set(error?.status === 401 || error?.status === 403 ? 'hidden' : 'error'),
            });
    }

    private _barHeight = (sli: number): number => {
        const clamped = Math.min(1, Math.max(CHART_FLOOR, sli));
        return Math.max(4, ((clamped - CHART_FLOOR) / (1 - CHART_FLOOR)) * 100);
    };
}
