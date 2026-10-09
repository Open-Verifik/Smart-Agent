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
    template: `
        <div class="flex flex-col gap-3">
            <nav
                class="flex flex-wrap gap-1.5 rounded-2xl border border-stone-200/90 bg-white p-2 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                [attr.aria-label]="'smartFleet.title' | transloco"
            >
                <a
                    *ngFor="let item of items"
                    [routerLink]="item.link"
                    class="inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-base font-medium transition-colors"
                    [class.bg-stone-900]="isActive(item)"
                    [class.text-white]="isActive(item)"
                    [class.text-stone-600]="!isActive(item)"
                    [class.hover:bg-stone-100]="!isActive(item)"
                    [class.dark:text-stone-300]="!isActive(item)"
                    [class.dark:hover:bg-gray-800]="!isActive(item)"
                >
                    <mat-icon class="icon-size-5">{{ item.icon }}</mat-icon>
                    {{ item.label | transloco }}
                </a>
            </nav>
            @if (onFreePlan() && !isActive(plansItem)) {
                <div
                    class="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200"
                >
                    <div class="flex items-center gap-2">
                        <mat-icon class="icon-size-5 text-current">info</mat-icon>
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
