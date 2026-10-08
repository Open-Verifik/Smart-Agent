import { CommonModule } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

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
        </div>
    `,
})
export class FleetNavComponent {
    private _router = inject(Router);

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
    ];

    isActive(item: FleetNavItem): boolean {
        return this._router.isActive(item.link, {
            paths: item.exact ? 'exact' : 'subset',
            queryParams: 'ignored',
            fragment: 'ignored',
            matrixParams: 'ignored',
        });
    }
}
