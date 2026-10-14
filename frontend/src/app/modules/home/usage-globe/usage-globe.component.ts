import { CommonModule, DOCUMENT } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    afterNextRender,
    computed,
    inject,
    input,
    signal,
    viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import type { Arc, COBEOptions, Globe, Marker } from 'cobe';
import { catchError, map, of, Subscription, switchMap } from 'rxjs';
import { COUNTRY_CENTROIDS, anglesForLocation, countryName } from 'app/core/usage/country-geo';
import { UsageApiService, UsageGroup, UsageSource } from 'app/core/usage/usage-api.service';

export interface UsageGlobeService {
    code: string;
    label: string;
    count: number;
}

interface CountryRow {
    code: string | null;
    name: string;
    total: number;
    failed: number;
    share: number;
    onGlobe: boolean;
}

const SPIN_PER_FRAME = 0.0022;
const MAX_LABELS = 4;
/** Neighbouring countries closer than this share one label; the list still shows both. */
const LABEL_MIN_DEGREES = 16;
/** cobe uploads its map texture asynchronously and only paints on `update`, so keep painting briefly. */
const SETTLE_FRAMES = 45;

export type GlobeRange = 'today' | 'week' | 'month' | 'previousMonth' | 'year';

/**
 * Local calendar window for the globe. Weeks start on Monday.
 * @param {GlobeRange} range
 * @returns {{ startDate: string, endDate: string }}
 */
const _rangeWindow = (range: GlobeRange): { startDate: string; endDate: string } => {
    const end = new Date();
    const start = new Date(end);

    start.setHours(0, 0, 0, 0);

    if (range === 'week') {
        const offset = start.getDay() === 0 ? 6 : start.getDay() - 1;

        start.setDate(start.getDate() - offset);
    } else if (range === 'month') {
        start.setDate(1);
    } else if (range === 'previousMonth') {
        const first = new Date(end.getFullYear(), end.getMonth() - 1, 1);

        return { startDate: first.toISOString(), endDate: new Date(end.getFullYear(), end.getMonth(), 0, 23, 59, 59, 999).toISOString() };
    } else if (range === 'year') {
        start.setMonth(0, 1);
    }

    return { startDate: start.toISOString(), endDate: end.toISOString() };
};

/**
 * Home dashboard: where the account's requests went in the selected period.
 * A dotted cobe globe with one marker per country and arcs into the busiest country,
 * next to a ranked country list. Loads `cobe` lazily so the dashboard bundle stays lean.
 */
@Component({
    selector: 'app-usage-globe',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, RouterLink, TranslocoModule],
    templateUrl: './usage-globe.component.html',
    styleUrl: './usage-globe.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsageGlobeComponent {
    readonly services = input<UsageGlobeService[]>([]);

    private readonly _usageApi = inject(UsageApiService);
    private readonly _transloco = inject(TranslocoService);
    private readonly _router = inject(Router);
    private readonly _document = inject(DOCUMENT);
    private readonly _destroyRef = inject(DestroyRef);
    private readonly _canvas = viewChild<ElementRef<HTMLCanvasElement>>('globeCanvas');

    readonly ranges: GlobeRange[] = ['today', 'week', 'month', 'previousMonth', 'year'];
    readonly range = signal<GlobeRange>('month');
    readonly loading = signal(true);
    readonly failed = signal(false);
    readonly source = signal<UsageSource>('apiRequests');
    readonly totalRequests = signal(0);

    /** Raw country groups. Names are derived so a language change does not keep the previous labels. */
    private readonly _groups = signal<UsageGroup[]>([]);

    /** Active language, emitted only after that language's catalog has loaded. */
    private readonly _lang = toSignal(
        this._transloco.langChanges$.pipe(
            switchMap((lang) => this._transloco.load(lang).pipe(map(() => lang), catchError(() => of(lang))))
        ),
        { initialValue: this._transloco.getActiveLang() }
    );

    readonly rows = computed(() => this._toRows(this._groups(), this.totalRequests()));

    readonly hub = computed(() => this.rows().find((row) => row.onGlobe) || null);
    readonly countryCount = computed(() => this.rows().filter((row) => row.code).length);
    readonly labelled = computed(() =>
        this.rows()
            .filter((row) => row.onGlobe)
            .reduce<CountryRow[]>((kept, row) => {
                if (kept.length >= MAX_LABELS) return kept;
                const [lat, lng] = COUNTRY_CENTROIDS[row.code!];
                const crowded = kept.some((other) => {
                    const [otherLat, otherLng] = COUNTRY_CENTROIDS[other.code!];
                    return Math.hypot(lat - otherLat, lng - otherLng) < LABEL_MIN_DEGREES;
                });
                return crowded ? kept : [...kept, row];
            }, [])
    );
    readonly isEmpty = computed(() => !this.loading() && this.totalRequests() === 0);

    private _globe: Globe | null = null;
    private _usageSub: Subscription | null = null;
    private _opening = false;
    private _frame = 0;
    private _phi = 0;
    private _theta = 0.25;
    private _dragFrom: number | null = null;
    private _visible = true;

    constructor() {
        afterNextRender(() => this._load());
        this._destroyRef.onDestroy(() => this._teardown());
    }

    selectRange(next: GlobeRange): void {
        if (next === this.range()) return;

        this.range.set(next);
        this._load();
    }

    openCountry(row: CountryRow): void {
        if (row.code) {
            this._router.navigate(['/history'], { queryParams: { country: row.code } });

            return;
        }

        const window = _rangeWindow(this.range());

        this._router.navigate(['/settings/usage-report'], {
            queryParams: { groupBy: 'endpoint', startDate: window.startDate, endDate: window.endDate },
        });
    }

    barWidth(row: CountryRow): string {
        const top = this.rows()[0]?.total || 1;

        return `${Math.max(4, Math.round((row.total / top) * 100))}%`;
    }

    failureRate(row: CountryRow): number {
        return row.total ? Math.round((row.failed / row.total) * 1000) / 10 : 0;
    }

    /** CSS anchor name cobe assigns to a marker id. */
    anchorFor(code: string): string {
        return `--cobe-${code.toLowerCase()}`;
    }

    visibilityFor(code: string): string {
        return `var(--cobe-visible-${code.toLowerCase()}, 0)`;
    }

    onPointerDown(event: PointerEvent): void {
        this._dragFrom = event.clientX;
        (event.target as HTMLElement).setPointerCapture?.(event.pointerId);
    }

    onPointerMove(event: PointerEvent): void {
        if (this._dragFrom === null) return;

        this._phi += (event.clientX - this._dragFrom) / 200;
        this._dragFrom = event.clientX;
        this._render();
    }

    onPointerUp(): void {
        this._dragFrom = null;
    }

    private _load(): void {
        const window = _rangeWindow(this.range());

        this.loading.set(true);
        this.failed.set(false);
        this._usageSub?.unsubscribe();
        this._usageSub = this._usageApi.getUsage({ groupBy: 'country', ...window, limit: 100 }).subscribe({
            next: (report) => {
                this.source.set(report.source);
                this.totalRequests.set(report.totals.totalRequests);
                this._groups.set(report.groups);
                this.loading.set(false);
                void this._paintGlobe();
            },
            error: () => {
                this.failed.set(true);
                this._groups.set([]);
                this.totalRequests.set(0);
                this.loading.set(false);
                void this._paintGlobe();
            },
        });
    }

    private _toRows(groups: UsageGroup[], total: number): CountryRow[] {
        const lang = this._lang() || 'en';

        return groups
            .filter((group) => group.totalRequests > 0)
            .map((group) => ({
                code: group.key,
                name: group.key ? countryName(group.key, lang) : this._transloco.translate('home.usageGlobe.global'),
                total: group.totalRequests,
                failed: group.failed + group.timedOut,
                share: total ? group.totalRequests / total : 0,
                onGlobe: Boolean(group.key && COUNTRY_CENTROIDS[group.key]),
            }));
    }

    private async _paintGlobe(): Promise<void> {
        if (!this._globe) {
            await this._initGlobe();

            return;
        }

        const hub = this.hub();

        if (hub?.code) [this._phi, this._theta] = this._clampAngles(anglesForLocation(...COUNTRY_CENTROIDS[hub.code]));

        this._globe.update({ markers: this._markers(), arcs: this._arcs(), phi: this._phi, theta: this._theta });
    }

    private async _initGlobe(): Promise<void> {
        const canvas = this._canvas()?.nativeElement;

        if (!canvas || this._globe || this._opening) return;

        this._opening = true;

        const { default: createGlobe } = await import('cobe');
        const size = canvas.parentElement?.clientWidth || 320;
        const hub = this.hub();

        if (this._globe) {
            this._opening = false;

            return;
        }

        if (hub?.code) [this._phi, this._theta] = this._clampAngles(anglesForLocation(...COUNTRY_CENTROIDS[hub.code]));

        this._globe = createGlobe(canvas, {
            ...this._themeOptions(),
            devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
            width: size,
            height: size,
            phi: this._phi,
            theta: this._theta,
            mapSamples: 16000,
            diffuse: 1.2,
            markers: this._markers(),
            arcs: this._arcs(),
            arcWidth: 0.6,
            arcHeight: 0.25,
            markerElevation: 0.01,
        } as COBEOptions);
        this._opening = false;
        this._globe.update({ markers: this._markers(), arcs: this._arcs(), phi: this._phi, theta: this._theta });

        this._observe(canvas);

        if (this._reducedMotion()) this._settle(SETTLE_FRAMES);
        else this._spin();
    }

    private _settle(framesLeft: number): void {
        this._render();
        if (framesLeft > 0) this._frame = requestAnimationFrame(() => this._settle(framesLeft - 1));
    }

    private _markers(): Marker[] {
        return this.rows()
            .filter((row) => row.onGlobe)
            .map((row) => ({
                id: row.code!.toLowerCase(),
                location: COUNTRY_CENTROIDS[row.code!],
                size: 0.03 + 0.07 * Math.sqrt(row.share),
            }));
    }

    private _arcs(): Arc[] {
        const hub = this.hub();

        if (!hub?.code) return [];

        return this.rows()
            .filter((row) => row.onGlobe && row.code !== hub.code)
            .map((row) => ({ id: `${row.code!.toLowerCase()}-${hub.code!.toLowerCase()}`, from: COUNTRY_CENTROIDS[row.code!], to: COUNTRY_CENTROIDS[hub.code!] }));
    }

    private _themeOptions(): Partial<COBEOptions> {
        const dark = this._document.body.classList.contains('dark');

        return dark
            ? { dark: 1, mapBrightness: 4, mapBaseBrightness: 0.02, baseColor: [0.32, 0.33, 0.4], markerColor: [0.55, 0.6, 1], glowColor: [0.12, 0.13, 0.22], arcColor: [0.55, 0.6, 1] }
            : { dark: 0, mapBrightness: 6, mapBaseBrightness: 0, baseColor: [1, 1, 1], markerColor: [0.31, 0.27, 0.9], glowColor: [0.93, 0.93, 1], arcColor: [0.39, 0.4, 0.95] };
    }

    /** Keep the camera from tipping over the poles when centring on far-south hubs. */
    private _clampAngles([phi, theta]: [number, number]): [number, number] {
        return [phi, Math.max(-0.5, Math.min(0.6, theta))];
    }

    private _render(): void {
        this._globe?.update({ phi: this._phi, theta: this._theta });
    }

    private _spin(): void {
        const tick = (): void => {
            if (this._visible && this._dragFrom === null) {
                this._phi += SPIN_PER_FRAME;
                this._render();
            }
            this._frame = requestAnimationFrame(tick);
        };

        this._frame = requestAnimationFrame(tick);
    }

    /** Pause the spin offscreen, follow container resizes, and repaint on light/dark switches. */
    private _observe(canvas: HTMLCanvasElement): void {
        const host = canvas.closest('.usage-globe-stage') as HTMLElement | null;
        const intersection = new IntersectionObserver(([entry]) => (this._visible = entry.isIntersecting));
        const resize = new ResizeObserver(() => {
            const size = host?.clientWidth || 0;
            if (size) this._globe?.update({ width: size, height: size });
        });
        const theme = new MutationObserver(() => this._globe?.update(this._themeOptions()));

        if (host) {
            intersection.observe(host);
            resize.observe(host);
        }
        theme.observe(this._document.body, { attributes: true, attributeFilter: ['class'] });

        this._destroyRef.onDestroy(() => {
            intersection.disconnect();
            resize.disconnect();
            theme.disconnect();
        });
    }

    private _reducedMotion(): boolean {
        return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    }

    private _teardown(): void {
        this._usageSub?.unsubscribe();
        cancelAnimationFrame(this._frame);
        this._globe?.destroy();
        this._globe = null;
    }
}
