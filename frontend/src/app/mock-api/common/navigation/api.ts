import { Injectable } from '@angular/core';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import {
    defaultNavigation,
    futuristicNavigation,
    horizontalNavigation,
} from 'app/mock-api/common/navigation/data';
import { cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class NavigationMockApi {
    private readonly _defaultNavigation: FuseNavigationItem[] =
        defaultNavigation;
    private readonly _futuristicNavigation: FuseNavigationItem[] =
        futuristicNavigation;
    private readonly _horizontalNavigation: FuseNavigationItem[] =
        horizontalNavigation;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService.onGet('api/common/navigation').reply(() => {
            // Fill futuristic navigation children using the default navigation
            this._futuristicNavigation.forEach((futuristicNavItem) => {
                this._defaultNavigation.forEach((defaultNavItem) => {
                    if (defaultNavItem.id === futuristicNavItem.id) {
                        futuristicNavItem.children = cloneDeep(
                            defaultNavItem.children
                        );
                    }
                });
            });

            // Fill horizontal navigation children using the default navigation
            this._horizontalNavigation.forEach((horizontalNavItem) => {
                this._defaultNavigation.forEach((defaultNavItem) => {
                    if (defaultNavItem.id === horizontalNavItem.id) {
                        horizontalNavItem.children = cloneDeep(
                            defaultNavItem.children
                        );
                    }
                });
            });

            // Return the response
            return [
                200,
                {
                    compact: cloneDeep(
                        this.buildCompactNavigationFromDefault(
                            this._defaultNavigation
                        )
                    ),
                    default: cloneDeep(this._defaultNavigation),
                    futuristic: cloneDeep(this._futuristicNavigation),
                    horizontal: cloneDeep(this._horizontalNavigation),
                },
            ];
        });
    }

    /**
     * Fuse compact/thin rails only show top-level basic and aside entries; collapsable roots are hidden (see compact.scss / thin.scss).
     * Derive compact nav from default by turning each collapsable section into an aside with the same children.
     */
    private buildCompactNavigationFromDefault(
        defaultNav: FuseNavigationItem[]
    ): FuseNavigationItem[] {
        return defaultNav
            .filter((item) => item.type !== 'divider')
            .map((item) => {
                if (item.type === 'basic') {
                    return cloneDeep(item);
                }

                if (item.type === 'collapsable') {
                    const aside: FuseNavigationItem = {
                        id: item.id,
                        title: item.title,
                        subtitle: item.subtitle,
                        tooltip: item.tooltip ?? item.title,
                        type: 'aside',
                        icon: item.icon,
                        children: cloneDeep(item.children ?? []),
                    };

                    if (item.badge) {
                        aside.badge = cloneDeep(item.badge);
                    }

                    return aside;
                }

                return cloneDeep(item);
            });
    }
}
