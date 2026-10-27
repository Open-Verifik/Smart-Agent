import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { SmartFleetService } from './smart-fleet.service';

interface FleetNavItem {
    link: string;
    exact: boolean;
    icon: string;
    label: string;
}

@Component({
    selector: 'fleet-nav',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslocoModule, MatIconModule],
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            fleet-nav {
                display: block;
            }

            /* Mobile: 5 equal columns in one row, icon above label */
            fleet-nav .fleet-nav {
                display: grid;
                grid-template-columns: repeat(5, minmax(0, 1fr));
                gap: 0.25rem;
                width: 100%;
                padding: 0.375rem;
            }

            fleet-nav .fleet-nav__link {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 0.25rem;
                min-width: 0;
                min-height: 3.75rem;
                padding: 0.5rem 0.125rem;
                text-align: center;
                -webkit-tap-highlight-color: transparent;
            }

            fleet-nav .fleet-nav__link mat-icon {
                flex-shrink: 0;
                width: 1.625rem;
                height: 1.625rem;
                font-size: 1.625rem;
                line-height: 1.625rem;
            }

            fleet-nav .fleet-nav__label {
                display: block;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.6875rem;
                line-height: 1.15;
            }

            @media (min-width: 400px) {
                fleet-nav .fleet-nav__label {
                    font-size: 0.75rem;
                }
            }

            /* Desktop: icon beside label */
            @media (min-width: 1024px) {
                fleet-nav .fleet-nav {
                    gap: 0.375rem;
                    padding: 0.5rem;
                }

                fleet-nav .fleet-nav__link {
                    flex-direction: row;
                    justify-content: flex-start;
                    gap: 0.625rem;
                    min-height: 0;
                    padding: 0.75rem 1.25rem;
                    text-align: left;
                }

                fleet-nav .fleet-nav__link mat-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                    font-size: 1.25rem;
                    line-height: 1.25rem;
                }

                fleet-nav .fleet-nav__label {
                    font-size: 1rem;
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
                <a
                    *ngFor="let item of items"
                    [routerLink]="item.link"
                    class="fleet-nav__link rounded-xl font-medium transition-colors"
                    [class.fleet-nav__link--active]="isActive(item)"
                    [attr.aria-current]="isActive(item) ? 'page' : null"
                    [class.bg-stone-900]="isActive(item)"
                    [class.text-white]="isActive(item)"
                    [class.text-stone-600]="!isActive(item)"
                    [class.hover:bg-stone-100]="!isActive(item)"
                    [class.dark:text-stone-300]="!isActive(item)"
                    [class.dark:hover:bg-gray-800]="!isActive(item)"
                >
                    <mat-icon class="shrink-0">{{ item.icon }}</mat-icon>
                    <span class="fleet-nav__label">{{ item.label | transloco }}</span>
                </a>
            </nav>
            @if (onFreePlan() && !isActive(plansItem)) {
                <div
                    class="fleet-free-plan-banner flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200"
                >
                    <div class="flex items-center gap-2">
                        <mat-icon class="icon-size-5 shrink-0 text-current">info</mat-icon>
                        <span>{{ 'smartFleet.freePlanNotice' | transloco }}</span>
                    </div>
                    <a
                        routerLink="/smart-fleet/plans"
                        class="rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-700"
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

    readonly onFreePlan = this._fleet.onFreePlan;

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
        },
        {
            link: '/smart-fleet/plans',
            exact: false,
            icon: 'credit_card',
            label: 'smartFleet.nav.plans',
        },
    ];

    readonly plansItem = this.items[this.items.length - 1];

    ngOnInit(): void {
        this._fleet.ensurePlanStatus();
    }

    isActive(item: FleetNavItem): boolean {
        return this._router.isActive(item.link, {
            paths: item.exact ? 'exact' : 'subset',
            queryParams: 'ignored',
            fragment: 'ignored',
            matrixParams: 'ignored',
        });
    }
}
