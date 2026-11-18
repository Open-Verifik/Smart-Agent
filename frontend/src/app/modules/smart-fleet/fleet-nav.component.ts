import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AccountEnvironmentService } from 'app/core/account/account-environment.service';
import { catchError, firstValueFrom, forkJoin, of } from 'rxjs';
import { FleetAssetFilters, SmartFleetService } from './smart-fleet.service';

interface FleetNavItem {
    link: string;
    exact: boolean;
    icon: string;
    label: string;
    showAlertBadge?: boolean;
}

@Component({
    selector: 'fleet-nav',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        TranslocoModule,
        MatIconModule,
        MatProgressSpinnerModule,
    ],
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            fleet-nav {
                display: block;
            }

            fleet-nav .fleet-nav {
                display: flex;
                flex-wrap: nowrap;
                align-items: stretch;
                gap: 0.25rem;
                width: 100%;
                padding-inline: 0.5rem;
                overflow-x: auto;
                overflow-y: hidden;
                scroll-snap-type: inline proximity;
                overscroll-behavior-x: contain;
                scrollbar-width: none;
                -webkit-overflow-scrolling: touch;
            }

            fleet-nav .fleet-nav::-webkit-scrollbar {
                display: none;
            }

            fleet-nav .fleet-nav__link {
                position: relative;
                display: inline-flex;
                flex: none;
                align-items: center;
                justify-content: center;
                gap: 0.45rem;
                min-height: 2.875rem;
                padding: 0.625rem 0.875rem;
                white-space: nowrap;
                scroll-snap-align: start;
                text-decoration: none;
                -webkit-tap-highlight-color: transparent;
            }

            fleet-nav .fleet-nav__link:focus-visible {
                outline: 2px solid var(--fleet-accent);
                outline-offset: -2px;
                border-radius: 0.5rem;
            }

            fleet-nav .fleet-nav__link[aria-current="page"] {
                color: var(--fleet-accent);
                font-weight: 600;
            }

            fleet-nav .fleet-nav__link[aria-current="page"]::after {
                content: "";
                position: absolute;
                inset: auto 0 0;
                border-block-end: 3px solid var(--fleet-accent);
            }

            fleet-nav .fleet-nav__link mat-icon {
                flex-shrink: 0;
                width: 1.125rem;
                height: 1.125rem;
                font-size: 1.125rem;
                line-height: 1.125rem;
            }

            fleet-nav .fleet-nav__label {
                font-size: 0.875rem;
                line-height: 1.25;
            }

            fleet-nav .mat-mdc-progress-spinner {
                --mdc-circular-progress-active-indicator-color: currentColor;
            }

            @media (min-width: 1024px) {
                fleet-nav .fleet-nav {
                    gap: 0.5rem;
                    max-height: 52px;
                    padding-inline: 0.75rem;
                }

                fleet-nav .fleet-nav__link {
                    min-height: 3rem;
                    max-height: 3.25rem;
                    padding: 0.625rem 0.9rem;
                }
            }
        `,
    ],
    template: `
        <div class="flex flex-col gap-3">
            <nav
                class="fleet-nav rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
                [attr.aria-label]="'smartFleet.title' | transloco"
            >
                @for (item of items; track item.link) {
                    <a
                        [routerLink]="item.link"
                        class="fleet-nav__link rounded-lg font-medium transition-colors"
                        [attr.aria-current]="isActive(item) ? 'page' : null"
                        [ngClass]="
                            isActive(item)
                                ? 'text-amber-600 dark:text-amber-400'
                                : 'text-stone-600 hover:bg-stone-100/80 hover:text-stone-900 dark:text-stone-300 dark:hover:bg-gray-800/70 dark:hover:text-white'
                        "
                    >
                        <mat-icon class="shrink-0">{{ item.icon }}</mat-icon>
                        <span class="fleet-nav__label">{{ item.label | transloco }}</span>
                        @if (item.showAlertBadge && openAlertsCount() > 0) {
                            <span
                                class="inline-flex min-w-[1.25rem] items-center justify-center rounded-full px-1.5 py-0.5 text-[11px] font-semibold leading-none tabular-nums"
                                [ngClass]="
                                    criticalAlertsCount() > 0
                                        ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
                                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200'
                                "
                                [attr.aria-label]="
                                    'smartFleet.nav.openAlertsCount'
                                        | transloco: { count: openAlertsCount() }
                                "
                            >
                                {{ openAlertsCount() > 99 ? '99+' : openAlertsCount() }}
                            </span>
                        }
                    </a>
                }
            </nav>

            @if (env.isSandboxModeActive()) {
                <div
                    class="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-300/80 bg-white px-4 py-2.5 text-sm shadow-sm dark:border-amber-500/30 dark:bg-gray-900"
                    role="region"
                    [attr.aria-label]="'smartFleet.sandbox.labTitle' | transloco"
                >
                    <div class="flex min-w-0 flex-wrap items-center gap-2.5">
                        <span
                            class="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"
                        >
                            <span
                                class="h-2 w-2 rounded-full bg-emerald-500"
                                aria-hidden="true"
                            ></span>
                            {{ 'smartFleet.sandbox.labTitle' | transloco }}
                        </span>
                        <span class="text-xs text-stone-600 dark:text-stone-300 sm:text-sm">
                            {{ 'smartFleet.sandbox.instantIndicator' | transloco }}
                        </span>
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        <button
                            type="button"
                            class="fleet-tactile-btn inline-flex min-h-[36px] items-center gap-1.5 rounded-xl bg-amber-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-amber-500 dark:text-gray-950 dark:hover:bg-amber-400"
                            [disabled]="sandboxWorking()"
                            (click)="seedDemo()"
                        >
                            @if (sandboxAction() === 'seed') {
                                <mat-spinner diameter="14"></mat-spinner>
                                <span>{{ 'smartFleet.sandbox.loadingDemo' | transloco }}</span>
                            } @else {
                                <mat-icon class="!h-4 !w-4 !text-[16px] leading-4">bolt</mat-icon>
                                <span>{{ 'smartFleet.sandbox.loadDemo' | transloco }}</span>
                            }
                        </button>

                        <button
                            type="button"
                            class="fleet-tactile-btn inline-flex min-h-[36px] items-center gap-1.5 rounded-xl border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-stone-200 dark:hover:bg-gray-700"
                            [disabled]="sandboxWorking()"
                            (click)="resetDemo()"
                        >
                            @if (sandboxAction() === 'reset') {
                                <mat-spinner diameter="14"></mat-spinner>
                                <span>{{ 'smartFleet.sandbox.resettingDemo' | transloco }}</span>
                            } @else {
                                <mat-icon class="!h-4 !w-4 !text-[16px] leading-4">restart_alt</mat-icon>
                                <span>{{ 'smartFleet.sandbox.resetDemo' | transloco }}</span>
                            }
                        </button>
                    </div>
                </div>
            } @else if (onFreePlan() && !isActive(plansItem)) {
                <div
                    class="fleet-free-plan-banner flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200"
                >
                    <div class="flex items-center gap-2">
                        <mat-icon class="icon-size-5 shrink-0 text-current">info</mat-icon>
                        <span>{{ 'smartFleet.freePlanNotice' | transloco }}</span>
                    </div>
                    <a
                        routerLink="/smart-fleet/plans"
                        class="fleet-tactile-btn rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-700"
                    >
                        {{ 'smartFleet.freePlanCta' | transloco }}
                    </a>
                </div>
            }
        </div>
    `,
})
export class FleetNavComponent implements OnInit {
    private _router = inject(Router);
    private _fleet = inject(SmartFleetService);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    readonly env = inject(AccountEnvironmentService);

    @Output() sandboxDemoAction = new EventEmitter<'seeded' | 'reset'>();

    readonly onFreePlan = this._fleet.onFreePlan;
    readonly sandboxAction = signal<'seed' | 'reset' | null>(null);
    readonly sandboxWorking = computed(() => this.sandboxAction() !== null);

    readonly openAlertsCount = computed(() => this._fleet.dashboard()?.alerts?.openTotal ?? 0);
    readonly criticalAlertsCount = computed(
        () => this._fleet.dashboard()?.alerts?.severity?.open?.critical ?? 0
    );

    readonly items: FleetNavItem[] = [
        {
            link: '/smart-fleet',
            exact: true,
            icon: 'space_dashboard',
            label: 'smartFleet.nav.overview',
        },
        {
            link: '/smart-fleet/assets',
            exact: false,
            icon: 'directions_car',
            label: 'smartFleet.nav.assets',
        },
        {
            link: '/smart-fleet/watch-rules',
            exact: false,
            icon: 'rule',
            label: 'smartFleet.nav.watchRules',
        },
        {
            link: '/smart-fleet/alerts',
            exact: false,
            icon: 'notifications_active',
            label: 'smartFleet.nav.alerts',
            showAlertBadge: true,
        },
        {
            link: '/smart-fleet/plans',
            exact: false,
            icon: 'credit_card',
            label: 'smartFleet.nav.plans',
        },
    ];

    readonly plansItem = this.items[this.items.length - 1];

    constructor() {
        effect(() => {
            if (this.env.isAuthenticated()) {
                this._fleet.ensurePlanStatus();
                this._fleet.ensureDashboard();
            }
        });
    }

    ngOnInit(): void {
        if (this.env.isAuthenticated()) {
            this._fleet.ensurePlanStatus();
            this._fleet.ensureDashboard();
        }
    }

    isActive(item: FleetNavItem): boolean {
        return this._router.isActive(item.link, {
            paths: item.exact ? 'exact' : 'subset',
            queryParams: 'ignored',
            fragment: 'ignored',
            matrixParams: 'ignored',
        });
    }

    async seedDemo(): Promise<void> {
        if (this.sandboxWorking()) return;

        this.sandboxAction.set('seed');

        try {
            await firstValueFrom(this._fleet.seedSandboxDemo());
            await this._refreshFleetData();
            this.sandboxDemoAction.emit('seeded');
            this._snackBar.open(
                this._transloco.translate('smartFleet.sandbox.seedSuccess'),
                undefined,
                { duration: 3500 }
            );
        } catch (err) {
            console.error('[SmartFleet] seedSandboxDemo error', err);
            this._snackBar.open(
                this._transloco.translate('smartFleet.sandbox.seedError'),
                undefined,
                { duration: 4000 }
            );
        } finally {
            this.sandboxAction.set(null);
        }
    }

    async resetDemo(): Promise<void> {
        if (this.sandboxWorking()) return;

        this.sandboxAction.set('reset');

        try {
            await firstValueFrom(this._fleet.resetSandboxDemo());
            await this._refreshFleetData();
            this.sandboxDemoAction.emit('reset');
            this._snackBar.open(
                this._transloco.translate('smartFleet.sandbox.resetSuccess'),
                undefined,
                { duration: 3500 }
            );
        } catch (err) {
            console.error('[SmartFleet] resetSandboxDemo error', err);
            this._snackBar.open(
                this._transloco.translate('smartFleet.sandbox.resetError'),
                undefined,
                { duration: 4000 }
            );
        } finally {
            this.sandboxAction.set(null);
        }
    }

    private _currentAssetFilters(): FleetAssetFilters {
        const tree = this._router.parseUrl(this._router.url);
        const type = tree.queryParams['type'];

        return type === 'driver' || type === 'vehicle' ? { type } : {};
    }

    private async _refreshFleetData(): Promise<void> {
        await firstValueFrom(
            forkJoin([
                this._fleet.getDashboard().pipe(catchError(() => of(null))),
                this._fleet.getAssets(this._currentAssetFilters()).pipe(catchError(() => of(null))),
                this._fleet.getWatchRules().pipe(catchError(() => of(null))),
                this._fleet.getAlerts().pipe(catchError(() => of(null))),
                this._fleet.getPlanOverview().pipe(catchError(() => of(null))),
            ])
        );
    }
}
