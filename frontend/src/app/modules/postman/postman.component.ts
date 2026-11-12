import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    DestroyRef,
    effect,
    ElementRef,
    HostListener,
    inject,
    NgZone,
    signal,
    untracked,
    viewChild,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import {
    catalogCountryScope,
    DEFAULT_POSTMAN_COUNTRY,
    endpointMatchesCountryFilter,
    WORLD_CATALOG_COUNTRY,
} from './postman-catalog.util';
import {
    areSamePostmanCountry,
    canonicalPostmanCountryName,
    countryNameToIso,
    formatPostmanCountryDisplayName,
    normalizeCountryToken,
    postmanCountryFlagUi,
    PostmanCountryFlagUi,
    resolveCountryNameFromIso,
} from './postman-country.util';
import {
    POSTMAN_HISTORY_PREFILL_STORAGE_KEY,
    PostmanHistoryPrefillPayload,
} from './postman-history-prefill';
import { PostmanService } from './postman.service';
import { ApiEndpoint } from './postman.types';
import { RequestEditorComponent } from './request-editor/request-editor.component';
import { ResponseViewerComponent } from './response-viewer/response-viewer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const PINNED_COUNTRIES_KEY = 'postman.pinnedCountries';

/**
 * Country names the explorer should keep on the left of the flag strip.
 * @returns {string[]}
 */
const _readPinnedCountries = (): string[] => {
    try {
        const parsed = JSON.parse(localStorage.getItem(PINNED_COUNTRIES_KEY) || '[]');
        if (!Array.isArray(parsed)) return [];
        const normalized = parsed
            .filter((name): name is string => typeof name === 'string' && Boolean(name.trim()))
            .map((name) => canonicalPostmanCountryName(name) || name.trim());
        return [...new Set(normalized)];
    } catch {
        return [];
    }
};

@Component({
    selector: 'app-postman',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        SidebarComponent,
        RequestEditorComponent,
        ResponseViewerComponent,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        TranslocoPipe,
    ],
    template: `
        <div
            data-postman-root
            class="flex h-full min-h-0 w-full min-w-0 overflow-hidden bg-[#f8fafc] select-none font-sans text-slate-900 dark:bg-[#0f172a] dark:text-slate-100"
            [class.h-dvh]="isMobile()"
        >
            @if (isDragging) {
                <div
                    class="fixed inset-0 z-[9999] select-none"
                    [class.cursor-col-resize]="
                        dragMode === 'sidebar' ||
                        (dragMode === 'horizontal' && layout === 'horizontal')
                    "
                    [class.cursor-row-resize]="
                        dragMode === 'vertical' ||
                        (dragMode === 'horizontal' && layout === 'vertical')
                    "
                ></div>
            }

            <!-- Sidebar (desktop column; main area flex-shrinks as this grows) -->
            @if (!isMobile()) {
                <div
                    class="z-20 flex h-full max-h-full min-h-0 flex-col self-stretch overflow-hidden border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                    [class.transition-[flex-basis,width]]="dragMode !== 'sidebar'"
                    [class.duration-300]="dragMode !== 'sidebar'"
                    [class.ease-in-out]="dragMode !== 'sidebar'"
                    [style.flex]="'0 0 ' + sidebarWidth + 'px'"
                    [style.width.px]="sidebarWidth"
                    [style.max-width.px]="sidebarWidth"
                >
                    <postman-sidebar
                        class="min-h-0 flex-1"
                        [collapsed]="sidebarCollapsed"
                        (toggleCollapsed)="toggleSidebar()"
                    >
                    </postman-sidebar>
                </div>

                @if (!sidebarCollapsed) {
                    <div
                        role="separator"
                        aria-orientation="vertical"
                        aria-label="Resize sidebar"
                        tabindex="0"
                        class="hover:bg-blue-500/20 active:bg-blue-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 transition-colors rounded-full flex-shrink-0 z-30 flex items-center justify-center w-3 h-full cursor-col-resize group"
                        (mousedown)="startSidebarDrag($event)"
                        (keydown)="onSidebarResizerKeydown($event)"
                    >
                        <div
                            class="w-0.5 h-8 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-400 group-active:bg-blue-500"
                        ></div>
                    </div>
                }
            }

            <!-- Sidebar (slide-in drawer on mobile) -->
            @if (isMobile()) {
                <!-- Backdrop (above the shell header/footer which sit at z-49) -->
                <div
                    class="fixed inset-0 z-[55] bg-black/40 transition-opacity duration-300"
                    [class.opacity-0]="!mobileSidebarOpen()"
                    [class.pointer-events-none]="!mobileSidebarOpen()"
                    [class.opacity-100]="mobileSidebarOpen()"
                    (click)="mobileSidebarOpen.set(false)"
                    aria-hidden="true"
                ></div>
                <!-- Drawer -->
                <div
                    role="dialog"
                    aria-modal="true"
                    [attr.aria-label]="'postman.sidebar.title' | transloco"
                    [attr.inert]="!mobileSidebarOpen() ? '' : null"
                    class="fixed inset-y-0 left-0 z-[60] w-[85%] max-w-[320px] h-dvh min-h-0 overflow-hidden bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-xl transition-transform duration-300 ease-in-out"
                    [class.-translate-x-full]="!mobileSidebarOpen()"
                    [class.translate-x-0]="mobileSidebarOpen()"
                >
                    <postman-sidebar [collapsed]="false"> </postman-sidebar>
                </div>
            }

            <!-- Main Content Wrapper (shrinks when sidebar grows) -->
            <div
                class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-[#f8fafc] dark:bg-[#0f172a]"
            >
                <!-- Toolbar / Header -->
                <div
                    class="flex flex-shrink-0 items-center justify-between bg-transparent z-10 min-h-14 py-2"
                    [class.pl-3]="!isMobile()"
                    [class.pr-1]="!isMobile()"
                    [class.px-3]="isMobile()"
                    [class.gap-2]="isMobile()"
                >
                    <!-- Hamburger (mobile only) -->
                    @if (isMobile()) {
                        <button
                            type="button"
                            mat-icon-button
                            class="flex-shrink-0 text-slate-600 dark:text-slate-300"
                            (click)="mobileSidebarOpen.set(true)"
                            [matTooltip]="'postman.sidebar.title' | transloco"
                            [attr.aria-label]="'postman.sidebar.title' | transloco"
                            [attr.aria-expanded]="mobileSidebarOpen()"
                        >
                            <mat-icon>menu</mat-icon>
                        </button>
                    }

                    <div
                        class="postman-flag-strip"
                        role="region"
                        [attr.aria-label]="'postman.sidebar.title' | transloco"
                        [ngClass]="isMobile() ? 'min-w-0 flex-1' : 'max-w-[65%]'"
                    >
                        <button
                            #countryPickerTrigger
                            type="button"
                            class="postman-country-picker-trigger"
                            [class.postman-country-picker-trigger--open]="countryPickerOpen()"
                            [attr.popovertarget]="countryPickerPopoverId"
                            (click)="onCountryPickerTriggerClick($event)"
                            [attr.aria-expanded]="countryPickerOpen()"
                            [attr.aria-label]="
                                ('postman.flags.searchTrigger' | transloco) +
                                ' (' +
                                countries().length +
                                ')'
                            "
                            [matTooltip]="('postman.flags.searchTrigger' | transloco) + ' (⌘K)'"
                        >
                            <mat-icon aria-hidden="true">search</mat-icon>
                            <span class="postman-country-picker-trigger__count">{{
                                countries().length
                            }}</span>
                        </button>

                        <div
                            #countryPickerPopover
                            [id]="countryPickerPopoverId"
                            [attr.popover]="'auto'"
                            class="postman-country-popover"
                            [class.postman-country-popover--fallback-open]="
                                countryPickerFallbackOpen()
                            "
                            (beforetoggle)="onCountryPopoverBeforeToggle($event)"
                            (toggle)="onCountryPopoverToggle($event)"
                        >
                            <div class="postman-country-popover__search">
                                <label [attr.for]="countrySearchInputId" class="visually-hidden">
                                    {{ 'postman.flags.searchTrigger' | transloco }}
                                </label>
                                <mat-icon
                                    class="postman-country-popover__search-icon"
                                    aria-hidden="true"
                                    >search</mat-icon
                                >
                                <input
                                    #countrySearchInput
                                    [id]="countrySearchInputId"
                                    type="text"
                                    autocomplete="off"
                                    [ngModel]="countrySearchQuery()"
                                    (ngModelChange)="onCountrySearchQueryChange($event)"
                                    (keydown)="onCountrySearchKeydown($event)"
                                    [placeholder]="'postman.flags.searchPlaceholder' | transloco"
                                    class="postman-country-popover__input"
                                />
                                @if (countrySearchQuery()) {
                                    <button
                                        type="button"
                                        class="postman-country-popover__clear"
                                        (click)="clearCountrySearch()"
                                        aria-label="Clear search"
                                    >
                                        <mat-icon aria-hidden="true">close</mat-icon>
                                    </button>
                                } @else {
                                    <kbd class="postman-country-popover__kbd" aria-hidden="true"
                                        >ESC</kbd
                                    >
                                }
                            </div>

                            <div #countryPickerList class="postman-country-popover__list">
                                @if (filteredPickerCountries().length === 0) {
                                    <div class="postman-country-popover__empty">
                                        {{
                                            'postman.flags.noCountriesFound'
                                                | transloco: { query: countrySearchQuery() }
                                        }}
                                    </div>
                                } @else if (!countrySearchQuery().trim()) {
                                    @if (pinnedCountries().length) {
                                        <div class="postman-country-popover__section-label">
                                            {{ 'postman.flags.pinnedSection' | transloco }}
                                        </div>
                                        @for (
                                            country of pinnedCountries();
                                            track country.name;
                                            let idx = $index
                                        ) {
                                            <ng-container
                                                *ngTemplateOutlet="
                                                    countryPickerRow;
                                                    context: {
                                                        $implicit: country,
                                                        pinned: true,
                                                        active:
                                                            activeCountryPickerName() ===
                                                            country.name,
                                                    }
                                                "
                                            />
                                        }
                                        <div
                                            class="postman-country-popover__divider"
                                            aria-hidden="true"
                                        ></div>
                                    }
                                    <div class="postman-country-popover__section-label">
                                        {{ 'postman.flags.allCountriesSection' | transloco }} ({{
                                            scrollCountries().length
                                        }})
                                    </div>
                                    @for (country of scrollCountries(); track country.name) {
                                        <ng-container
                                            *ngTemplateOutlet="
                                                countryPickerRow;
                                                context: {
                                                    $implicit: country,
                                                    pinned: false,
                                                    active:
                                                        activeCountryPickerName() === country.name,
                                                }
                                            "
                                        />
                                    }
                                } @else {
                                    @for (
                                        country of filteredPickerCountries();
                                        track country.name
                                    ) {
                                        <ng-container
                                            *ngTemplateOutlet="
                                                countryPickerRow;
                                                context: {
                                                    $implicit: country,
                                                    pinned: isCountryPinned(country.name),
                                                    active:
                                                        activeCountryPickerName() === country.name,
                                                }
                                            "
                                        />
                                    }
                                }
                            </div>
                        </div>

                        <ng-template
                            #countryPickerRow
                            let-country
                            let-pinned="pinned"
                            let-active="active"
                        >
                            @let ui = countryFlagUi(country.name);
                            @let selected = isCountrySelected(country.name);
                            @let displayName = countryDisplayName(country.name);
                            @let isoBadge = countryIsoBadge(country.name);
                            <div
                                class="postman-country-popover__row"
                                [class.postman-country-popover__row--selected]="selected"
                                [class.postman-country-popover__row--active]="active"
                                [attr.data-picker-country]="country.name"
                                (mouseenter)="setActiveCountryPickerName(country.name)"
                            >
                                <button
                                    type="button"
                                    class="postman-country-popover__select"
                                    [attr.aria-pressed]="selected"
                                    (click)="selectCountryFromPicker(country.name)"
                                >
                                    <span class="postman-country-popover__flag">
                                        @switch (ui.k) {
                                            @case ('img') {
                                                <img
                                                    [src]="ui.src"
                                                    alt=""
                                                    width="20"
                                                    height="20"
                                                    decoding="async"
                                                    loading="lazy"
                                                />
                                            }
                                            @case ('globe') {
                                                <mat-icon aria-hidden="true">public</mat-icon>
                                            }
                                            @case ('initials') {
                                                <span class="postman-flag-initials">{{
                                                    ui.text
                                                }}</span>
                                            }
                                        }
                                    </span>
                                    <span class="postman-country-popover__name">{{
                                        displayName
                                    }}</span>
                                    @if (isoBadge) {
                                        <span class="postman-country-popover__iso">{{
                                            isoBadge
                                        }}</span>
                                    }
                                    <span class="postman-country-popover__count">{{
                                        country.count
                                    }}</span>
                                    @if (selected) {
                                        <mat-icon
                                            class="postman-country-popover__check"
                                            aria-hidden="true"
                                            >check</mat-icon
                                        >
                                    }
                                </button>
                                <button
                                    type="button"
                                    class="postman-country-popover__pin"
                                    [class.postman-country-popover__pin--on]="pinned"
                                    (click)="togglePin(country.name, $event)"
                                    [attr.aria-label]="
                                        (pinned ? 'postman.flags.unpin' : 'postman.flags.pin')
                                            | transloco: { country: displayName }
                                    "
                                    [attr.aria-pressed]="pinned"
                                    [matTooltip]="
                                        (pinned ? 'postman.flags.unpin' : 'postman.flags.pin')
                                            | transloco: { country: displayName }
                                    "
                                >
                                    <svg
                                        viewBox="0 0 12 12"
                                        width="11"
                                        height="11"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M4 1.25h4a.75.75 0 0 1 .75.75v1.1c0 .85-.55 1.55-1.3 1.8l-.15.05v.45h.9L6.75 7.1v2.15L6 10.1l-.75-.85V7.1L3.8 5.4h.9v-.45l-.15-.05c-.75-.25-1.3-.95-1.3-1.8V2A.75.75 0 0 1 4 1.25z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </ng-template>

                        <div class="postman-flag-divider" aria-hidden="true"></div>

                        @if (pinnedCountries().length) {
                            <div class="postman-flag-pins">
                                @for (country of pinnedCountries(); track country.name) {
                                    <ng-container
                                        *ngTemplateOutlet="
                                            countryFlag;
                                            context: { $implicit: country, pinned: true }
                                        "
                                    />
                                }
                            </div>
                            <div class="postman-flag-divider" aria-hidden="true"></div>
                        }
                        <div class="postman-flag-scroll">
                            <div
                                #flagScroller
                                class="postman-flag-scroller"
                                [class.more-start]="canScrollLeft()"
                                [class.more-end]="canScrollRight()"
                                (scroll)="updateFlagScroll()"
                            >
                                @for (country of scrollCountries(); track country.name) {
                                    <ng-container
                                        *ngTemplateOutlet="
                                            countryFlag;
                                            context: { $implicit: country, pinned: false }
                                        "
                                    />
                                }
                            </div>
                            @if (canScrollLeft()) {
                                <button
                                    type="button"
                                    class="postman-flag-arrow postman-flag-arrow--left"
                                    (click)="scrollFlags(-1)"
                                    [attr.aria-label]="'postman.flags.scrollLeft' | transloco"
                                >
                                    <mat-icon aria-hidden="true">chevron_left</mat-icon>
                                </button>
                            }
                            @if (canScrollRight()) {
                                <button
                                    type="button"
                                    class="postman-flag-arrow postman-flag-arrow--right"
                                    (click)="scrollFlags(1)"
                                    [attr.aria-label]="'postman.flags.scrollRight' | transloco"
                                >
                                    <mat-icon aria-hidden="true">chevron_right</mat-icon>
                                </button>
                            }
                        </div>
                    </div>
                    <ng-template #countryFlag let-country let-pinned="pinned">
                        @let ui = countryFlagUi(country.name);
                        @let selected = isCountrySelected(country.name);
                        @let displayName = countryDisplayName(country.name);
                        <div class="postman-flag" [attr.data-country]="country.name">
                            <button
                                type="button"
                                class="postman-flag-btn"
                                [class.postman-flag-btn--selected]="selected"
                                (click)="toggleCountry(country.name)"
                                [attr.aria-pressed]="selected"
                                [attr.aria-label]="displayName + ' (' + country.count + ')'"
                                [matTooltip]="displayName + ' (' + country.count + ')'"
                            >
                                @switch (ui.k) {
                                    @case ('img') {
                                        <img
                                            [src]="ui.src"
                                            alt=""
                                            width="21"
                                            height="21"
                                            decoding="async"
                                            loading="lazy"
                                        />
                                    }
                                    @case ('globe') {
                                        <mat-icon aria-hidden="true">public</mat-icon>
                                    }
                                    @case ('initials') {
                                        <span class="postman-flag-initials">{{ ui.text }}</span>
                                    }
                                }
                                @if (selected) {
                                    <span class="postman-flag-label">{{ displayName }}</span>
                                    <span class="postman-flag-count">{{ country.count }}</span>
                                }
                            </button>
                            <button
                                type="button"
                                class="postman-flag-pin"
                                [class.postman-flag-pin--on]="pinned"
                                (click)="togglePin(country.name, $event)"
                                matTooltipPosition="above"
                                [matTooltip]="
                                    (pinned ? 'postman.flags.unpin' : 'postman.flags.pin')
                                        | transloco: { country: displayName }
                                "
                                [attr.aria-label]="
                                    (pinned ? 'postman.flags.unpin' : 'postman.flags.pin')
                                        | transloco: { country: displayName }
                                "
                                [attr.aria-pressed]="pinned"
                            >
                                <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
                                    <path
                                        fill="currentColor"
                                        d="M4 1.25h4a.75.75 0 0 1 .75.75v1.1c0 .85-.55 1.55-1.3 1.8l-.15.05v.45h.9L6.75 7.1v2.15L6 10.1l-.75-.85V7.1L3.8 5.4h.9v-.45l-.15-.05c-.75-.25-1.3-.95-1.3-1.8V2A.75.75 0 0 1 4 1.25z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </ng-template>

                    <div class="flex items-center gap-3">
                        <!-- Payment Method Toggle (Privy-style: JWT | x402) -->
                        <div
                            class="flex items-center bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm"
                            role="group"
                            aria-label="Payment method"
                        >
                            <button
                                type="button"
                                class="px-3 py-1.5 rounded-md transition-all text-xs font-medium active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                                [class.bg-slate-100]="paymentMethod() === 'credits'"
                                [class.text-slate-900]="paymentMethod() === 'credits'"
                                [class.dark:bg-slate-700]="paymentMethod() === 'credits'"
                                [class.dark:text-white]="paymentMethod() === 'credits'"
                                [class.text-slate-500]="paymentMethod() !== 'credits'"
                                [class.hover:text-slate-900]="paymentMethod() !== 'credits'"
                                [attr.aria-pressed]="paymentMethod() === 'credits'"
                                (click)="setPaymentMethod('credits')"
                                matTooltip="Authenticate with JWT Token"
                            >
                                CREDITS
                            </button>
                            <div
                                class="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-0.5"
                                aria-hidden="true"
                            ></div>
                            <button
                                type="button"
                                class="px-3 py-1.5 rounded-md transition-all text-xs font-medium active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                                [class.bg-slate-100]="paymentMethod() === 'x402'"
                                [class.text-slate-900]="paymentMethod() === 'x402'"
                                [class.dark:bg-slate-700]="paymentMethod() === 'x402'"
                                [class.dark:text-white]="paymentMethod() === 'x402'"
                                [class.text-slate-500]="paymentMethod() !== 'x402'"
                                [class.hover:text-slate-900]="paymentMethod() !== 'x402'"
                                [attr.aria-pressed]="paymentMethod() === 'x402'"
                                (click)="setPaymentMethod('x402')"
                                matTooltip="Pay with x402 Wallet"
                            >
                                x402
                            </button>
                        </div>

                        <!-- Layout Toggles (Joined Segmented Control) -->
                        <div
                            *ngIf="!isMobile()"
                            class="flex items-center bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm"
                            role="group"
                            aria-label="Split layout"
                        >
                            <button
                                type="button"
                                class="p-1.5 px-3 rounded-md transition-all text-slate-500 hover:text-slate-900 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                                [class.bg-slate-100]="layout === 'horizontal'"
                                [class.text-slate-900]="layout === 'horizontal'"
                                [class.font-medium]="layout === 'horizontal'"
                                [class.dark:bg-slate-700]="layout === 'horizontal'"
                                [class.dark:text-white]="layout === 'horizontal'"
                                [attr.aria-pressed]="layout === 'horizontal'"
                                [attr.aria-label]="'postman.layout.splitVertical' | transloco"
                                (click)="setLayout('horizontal')"
                                [matTooltip]="'postman.layout.splitVertical' | transloco"
                            >
                                <mat-icon class="!w-4 !h-4 !text-[16px]" aria-hidden="true"
                                    >view_column</mat-icon
                                >
                            </button>
                            <div
                                class="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-1"
                                aria-hidden="true"
                            ></div>
                            <button
                                type="button"
                                class="p-1.5 px-3 rounded-md transition-all text-slate-500 hover:text-slate-900 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                                [class.bg-slate-100]="layout === 'vertical'"
                                [class.text-slate-900]="layout === 'vertical'"
                                [class.font-medium]="layout === 'vertical'"
                                [class.dark:bg-slate-700]="layout === 'vertical'"
                                [class.dark:text-white]="layout === 'vertical'"
                                [attr.aria-pressed]="layout === 'vertical'"
                                [attr.aria-label]="'postman.layout.splitHorizontal' | transloco"
                                (click)="setLayout('vertical')"
                                [matTooltip]="'postman.layout.splitHorizontal' | transloco"
                            >
                                <mat-icon class="!w-4 !h-4 !text-[16px]" aria-hidden="true"
                                    >view_stream</mat-icon
                                >
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Split Content Area (desktop: side-by-side / stacked with resizer) -->
                @if (!isMobile()) {
                    <div
                        class="flex flex-1 min-h-0 min-w-0 overflow-hidden pl-3 pr-1 pb-2 pt-0 gap-2"
                        [class.flex-row]="layout === 'horizontal'"
                        [class.flex-col]="layout === 'vertical'"
                    >
                        <!-- Request Editor Panel -->
                        <div
                            [class.h-full]="layout === 'horizontal'"
                            [class.w-full]="layout === 'vertical'"
                            [style.flex]="'1 1 ' + requestPanelSize + '%'"
                            class="relative flex min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                        >
                            <postman-request-editor></postman-request-editor>
                        </div>

                        <!-- Resizer Handle -->
                        <div
                            role="separator"
                            [attr.aria-orientation]="
                                layout === 'horizontal' ? 'vertical' : 'horizontal'
                            "
                            aria-label="Resize request and response panels"
                            tabindex="0"
                            class="hover:bg-blue-500/20 active:bg-blue-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 transition-colors rounded-full flex-shrink-0 z-10 flex items-center justify-center"
                            [class.w-4]="layout === 'horizontal'"
                            [class.h-4]="layout === 'vertical'"
                            [class.h-full]="layout === 'horizontal'"
                            [class.w-full]="layout === 'vertical'"
                            [class.cursor-col-resize]="layout === 'horizontal'"
                            [class.cursor-row-resize]="layout === 'vertical'"
                            (mousedown)="
                                startDrag(
                                    $event,
                                    layout === 'horizontal' ? 'horizontal' : 'vertical'
                                )
                            "
                            (keydown)="onSplitResizerKeydown($event)"
                        >
                            <div
                                class="bg-slate-300 dark:bg-slate-700 rounded-full"
                                [class.w-1]="layout === 'horizontal'"
                                [class.h-8]="layout === 'horizontal'"
                                [class.h-1]="layout === 'vertical'"
                                [class.w-8]="layout === 'vertical'"
                            ></div>
                        </div>

                        <!-- Response Viewer Panel -->
                        <div
                            [style.flex]="'1 1 ' + (100 - requestPanelSize) + '%'"
                            class="relative flex min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                        >
                            <postman-response-viewer></postman-response-viewer>
                        </div>
                    </div>
                }

                <!-- Mobile Content Area (one panel at a time + segmented switch) -->
                @if (isMobile()) {
                    <div class="flex-1 flex flex-col min-w-0 min-h-0 px-3 pb-3 gap-3">
                        <!-- Request | Response Switch -->
                        <div
                            class="flex items-center bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm flex-shrink-0"
                        >
                            <button
                                type="button"
                                class="flex-1 py-2 rounded-md transition-all text-sm font-medium text-slate-500"
                                [class.bg-slate-100]="mobilePanel() === 'request'"
                                [class.text-slate-900]="mobilePanel() === 'request'"
                                [class.dark:bg-slate-700]="mobilePanel() === 'request'"
                                [class.dark:text-white]="mobilePanel() === 'request'"
                                (click)="mobilePanel.set('request')"
                            >
                                {{ 'postman.requestEditor.title' | transloco }}
                            </button>
                            <button
                                type="button"
                                class="flex-1 py-2 rounded-md transition-all text-sm font-medium text-slate-500"
                                [class.bg-slate-100]="mobilePanel() === 'response'"
                                [class.text-slate-900]="mobilePanel() === 'response'"
                                [class.dark:bg-slate-700]="mobilePanel() === 'response'"
                                [class.dark:text-white]="mobilePanel() === 'response'"
                                (click)="mobilePanel.set('response')"
                            >
                                {{ 'postman.responseViewer.title' | transloco }}
                            </button>
                        </div>

                        <!-- Single Full-Width Panel (both kept mounted to preserve state) -->
                        <div class="flex-1 min-w-0 min-h-0 relative">
                            <div
                                class="absolute inset-0 overflow-hidden flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
                                [class.hidden]="mobilePanel() !== 'request'"
                            >
                                <postman-request-editor></postman-request-editor>
                            </div>
                            <div
                                class="absolute inset-0 overflow-hidden flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
                                [class.hidden]="mobilePanel() !== 'response'"
                            >
                                <postman-response-viewer></postman-response-viewer>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            @property --fade-start {
                syntax: '<length>';
                inherits: false;
                initial-value: 0px;
            }

            @property --fade-end {
                syntax: '<length>';
                inherits: false;
                initial-value: 0px;
            }

            :host {
                position: absolute;
                inset: 0;
                display: flex;
                flex-direction: column;
                min-width: 0;
                min-height: 0;
                overflow: hidden;
            }

            .visually-hidden:where(:not(:focus-within, :active)) {
                position: absolute !important;
                clip-path: inset(50%) !important;
                overflow: hidden !important;
                width: 1px !important;
                height: 1px !important;
                margin: -1px !important;
                padding: 0 !important;
                border: 0 !important;
                white-space: nowrap !important;
            }

            .postman-flag-strip {
                display: flex;
                align-items: center;
                min-width: 0;
                gap: 0.35rem;
            }

            .postman-country-picker-trigger {
                display: inline-flex;
                flex-shrink: 0;
                align-items: center;
                justify-content: center;
                gap: 0.3rem;
                min-width: 2.275rem;
                height: 2.275rem;
                padding: 0 0.55rem 0 0.45rem;
                border-radius: 999px;
                border: 1px solid rgb(226 232 240);
                background: white;
                color: rgb(51 65 85);
                box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
                cursor: pointer;
                transition:
                    background-color 0.15s ease,
                    border-color 0.15s ease,
                    box-shadow 0.15s ease,
                    scale 0.12s ease-out,
                    color 0.15s ease;

                &:hover {
                    border-color: rgb(148 163 184);
                    box-shadow: 0 2px 6px rgb(15 23 42 / 0.1);
                    color: rgb(15 23 42);
                }

                &:active {
                    scale: 0.96;
                }

                &:focus-visible {
                    outline: 2px solid rgb(37 99 235);
                    outline-offset: 2px;
                }

                mat-icon {
                    width: 1.05rem;
                    height: 1.05rem;
                    font-size: 1.05rem;
                    flex-shrink: 0;
                }
            }

            .postman-country-picker-trigger--open {
                border-color: rgb(37 99 235);
                background: rgb(239 246 255);
                color: rgb(29 78 216);
                box-shadow: 0 0 0 2px rgb(37 99 235 / 0.2);
            }

            .postman-country-picker-trigger__count {
                font-size: 0.68rem;
                font-weight: 700;
                font-variant-numeric: tabular-nums;
                line-height: 1;
                color: rgb(100 116 139);
            }

            .postman-country-picker-trigger--open .postman-country-picker-trigger__count {
                color: rgb(29 78 216);
            }

            :host-context(.dark) .postman-country-picker-trigger {
                border-color: rgb(51 65 85);
                background: rgb(30 41 59);
                color: rgb(203 213 225);

                &:hover {
                    border-color: rgb(100 116 139);
                    background: rgb(51 65 85);
                    color: rgb(248 250 252);
                }
            }

            :host-context(.dark) .postman-country-picker-trigger--open {
                border-color: rgb(96 165 250);
                background: rgb(30 58 138);
                color: rgb(248 250 252);
            }

            :host-context(.dark) .postman-country-picker-trigger__count {
                color: rgb(148 163 184);
            }

            :host-context(.dark)
                .postman-country-picker-trigger--open
                .postman-country-picker-trigger__count {
                color: rgb(219 234 254);
            }

            [popover].postman-country-popover {
                width: min(21.5rem, calc(100vw - 1.5rem));
                max-height: min(26rem, calc(100dvh - 5rem));
                padding: 0;
                border: 1px solid rgb(226 232 240);
                border-radius: 0.875rem;
                background: white;
                color: rgb(15 23 42);
                box-shadow:
                    0 12px 32px -4px rgb(15 23 42 / 0.16),
                    0 4px 12px -2px rgb(15 23 42 / 0.08);
                overflow: hidden;
                transform-origin: top left;
            }

            @supports (position-area: block-end) {
                [popover].postman-country-popover {
                    inset: auto;
                    margin: 0.35rem 0 0 0;
                    position-area: block-end span-inline-end;
                    position-try-fallbacks:
                        flip-block,
                        flip-inline,
                        flip-block flip-inline;
                }
            }

            [popover].postman-country-popover:is(:popover-open, .\\:popover-open),
            .postman-country-popover.postman-country-popover--fallback-open {
                display: flex;
                flex-direction: column;
                animation: postman-popover-fade 150ms ease-out both;
            }

            @media (prefers-reduced-motion: no-preference) {
                [popover].postman-country-popover:is(:popover-open, .\\:popover-open),
                .postman-country-popover.postman-country-popover--fallback-open {
                    animation:
                        postman-popover-grow 260ms
                            linear(0, 0.45 15%, 1.06 35%, 0.98 55%, 1.01 75%, 1) both,
                        postman-popover-fade 150ms ease-out both;
                }
            }

            @keyframes postman-popover-grow {
                from {
                    scale: 0.94;
                }
            }

            @keyframes postman-popover-fade {
                from {
                    opacity: 0;
                }
            }

            :host-context(.dark) [popover].postman-country-popover {
                border-color: rgb(51 65 85);
                background: rgb(15 23 42);
                color: rgb(248 250 252);
                box-shadow:
                    0 16px 36px -4px rgb(0 0 0 / 0.5),
                    0 4px 12px -2px rgb(0 0 0 / 0.35);
            }

            .postman-country-popover__search {
                position: relative;
                display: flex;
                align-items: center;
                gap: 0.45rem;
                padding: 0.6rem 0.75rem;
                border-bottom: 1px solid rgb(226 232 240);
                background: rgb(248 250 252);
                flex-shrink: 0;
            }

            :host-context(.dark) .postman-country-popover__search {
                border-bottom-color: rgb(30 41 59);
                background: rgb(30 41 59 / 0.65);
            }

            .postman-country-popover__search-icon {
                width: 1rem;
                height: 1rem;
                font-size: 1rem;
                color: rgb(148 163 184);
                flex-shrink: 0;
            }

            .postman-country-popover__input {
                flex: 1 1 auto;
                min-width: 0;
                border: none;
                background: transparent;
                padding: 0.15rem 0;
                font-size: 0.8125rem;
                color: inherit;
                outline: none;

                &::placeholder {
                    color: rgb(148 163 184);
                }
            }

            .postman-country-popover__clear {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 1.35rem;
                height: 1.35rem;
                border: none;
                border-radius: 999px;
                background: rgb(226 232 240 / 0.7);
                color: rgb(71 85 105);
                cursor: pointer;
                flex-shrink: 0;

                &:hover {
                    background: rgb(203 213 225);
                    color: rgb(15 23 42);
                }

                &:focus-visible {
                    outline: 2px solid rgb(37 99 235);
                    outline-offset: 1px;
                }

                mat-icon {
                    width: 0.85rem;
                    height: 0.85rem;
                    font-size: 0.85rem;
                }
            }

            :host-context(.dark) .postman-country-popover__clear {
                background: rgb(51 65 85);
                color: rgb(203 213 225);

                &:hover {
                    background: rgb(71 85 105);
                    color: white;
                }
            }

            .postman-country-popover__kbd {
                flex-shrink: 0;
                padding: 0.125rem 0.35rem;
                border: 1px solid rgb(203 213 225);
                border-radius: 0.3rem;
                background: white;
                color: rgb(100 116 139);
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
                font-size: 0.625rem;
                font-weight: 600;
                line-height: 1.2;
            }

            :host-context(.dark) .postman-country-popover__kbd {
                border-color: rgb(51 65 85);
                background: rgb(15 23 42);
                color: rgb(148 163 184);
            }

            .postman-country-popover__list {
                flex: 1 1 auto;
                min-height: 0;
                overflow-y: auto;
                overscroll-behavior: contain;
                padding: 0.4rem;
            }

            .postman-country-popover__section-label {
                padding: 0.35rem 0.5rem 0.25rem;
                font-size: 0.65rem;
                font-weight: 700;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                color: rgb(100 116 139);
            }

            :host-context(.dark) .postman-country-popover__section-label {
                color: rgb(148 163 184);
            }

            .postman-country-popover__divider {
                height: 1px;
                margin: 0.35rem 0.25rem;
                background: rgb(226 232 240);
            }

            :host-context(.dark) .postman-country-popover__divider {
                background: rgb(30 41 59);
            }

            .postman-country-popover__empty {
                padding: 1.5rem 0.75rem;
                text-align: center;
                font-size: 0.8125rem;
                color: rgb(100 116 139);
            }

            .postman-country-popover__row {
                display: flex;
                align-items: center;
                gap: 0.25rem;
                border-radius: 0.5rem;
                padding-right: 0.25rem;
                transition: background-color 0.1s ease;

                &:hover,
                &.postman-country-popover__row--active {
                    background: rgb(241 245 249);
                }
            }

            .postman-country-popover__row--selected {
                background: rgb(239 246 255);

                &:hover,
                &.postman-country-popover__row--active {
                    background: rgb(219 234 254 / 0.85);
                }
            }

            :host-context(.dark) .postman-country-popover__row {
                &:hover,
                &.postman-country-popover__row--active {
                    background: rgb(30 41 59);
                }
            }

            :host-context(.dark) .postman-country-popover__row--selected {
                background: rgb(30 58 138 / 0.45);

                &:hover,
                &.postman-country-popover__row--active {
                    background: rgb(30 58 138 / 0.65);
                }
            }

            .postman-country-popover__select {
                display: flex;
                flex: 1 1 auto;
                min-width: 0;
                align-items: center;
                gap: 0.55rem;
                padding: 0.42rem 0.5rem;
                border: none;
                background: transparent;
                color: inherit;
                text-align: left;
                cursor: pointer;
                border-radius: 0.5rem;

                &:focus-visible {
                    outline: 2px solid rgb(37 99 235);
                    outline-offset: -2px;
                }
            }

            .postman-country-popover__flag {
                display: inline-flex;
                width: 1.25rem;
                height: 1.25rem;
                flex-shrink: 0;
                align-items: center;
                justify-content: center;

                img {
                    width: 1.25rem;
                    height: 1.25rem;
                    border-radius: 999px;
                    object-fit: cover;
                    box-shadow: 0 0 0 1px rgb(0 0 0 / 0.1);
                }

                mat-icon {
                    width: 1.15rem;
                    height: 1.15rem;
                    font-size: 1.15rem;
                    color: rgb(71 85 105);
                }
            }

            :host-context(.dark) .postman-country-popover__flag mat-icon {
                color: rgb(203 213 225);
            }

            .postman-country-popover__name {
                flex: 1 1 auto;
                min-width: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.8125rem;
                font-weight: 500;
            }

            .postman-country-popover__row--selected .postman-country-popover__name {
                font-weight: 700;
                color: rgb(29 78 216);
            }

            :host-context(.dark)
                .postman-country-popover__row--selected
                .postman-country-popover__name {
                color: rgb(147 197 253);
            }

            .postman-country-popover__iso {
                flex-shrink: 0;
                padding: 0.1rem 0.3rem;
                border-radius: 0.25rem;
                background: rgb(226 232 240 / 0.7);
                color: rgb(100 116 139);
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
                font-size: 0.625rem;
                font-weight: 600;
                line-height: 1.1;
            }

            :host-context(.dark) .postman-country-popover__iso {
                background: rgb(51 65 85 / 0.8);
                color: rgb(148 163 184);
            }

            .postman-country-popover__count {
                display: inline-flex;
                flex-shrink: 0;
                align-items: center;
                justify-content: center;
                min-width: 1.35rem;
                height: 1.2rem;
                padding: 0 0.35rem;
                border-radius: 999px;
                background: rgb(241 245 249);
                color: rgb(71 85 105);
                font-size: 0.68rem;
                font-weight: 700;
                font-variant-numeric: tabular-nums;
                line-height: 1;
            }

            :host-context(.dark) .postman-country-popover__count {
                background: rgb(30 41 59);
                color: rgb(203 213 225);
            }

            .postman-country-popover__check {
                width: 1rem;
                height: 1rem;
                font-size: 1rem;
                color: rgb(37 99 235);
                flex-shrink: 0;
            }

            :host-context(.dark) .postman-country-popover__check {
                color: rgb(96 165 250);
            }

            .postman-country-popover__pin {
                display: inline-flex;
                width: 1.6rem;
                height: 1.6rem;
                flex-shrink: 0;
                align-items: center;
                justify-content: center;
                border: none;
                border-radius: 0.375rem;
                background: transparent;
                color: rgb(148 163 184);
                cursor: pointer;
                transition:
                    color 0.15s ease,
                    background-color 0.15s ease,
                    scale 0.12s ease-out;

                &:hover {
                    background: rgb(226 232 240 / 0.7);
                    color: rgb(51 65 85);
                }

                &:active {
                    scale: 0.92;
                }

                &:focus-visible {
                    outline: 2px solid rgb(37 99 235);
                    outline-offset: 1px;
                }
            }

            .postman-country-popover__pin--on {
                color: rgb(15 23 42);
            }

            :host-context(.dark) .postman-country-popover__pin {
                &:hover {
                    background: rgb(51 65 85);
                    color: rgb(226 232 240);
                }
            }

            :host-context(.dark) .postman-country-popover__pin--on {
                color: rgb(248 250 252);
            }

            .postman-flag-pins {
                display: flex;
                flex-shrink: 0;
                align-items: center;
                gap: 0.25rem;
            }

            .postman-flag-divider {
                width: 1px;
                height: 1.35rem;
                flex-shrink: 0;
                background: rgb(203 213 225);
            }

            :host-context(.dark) .postman-flag-divider {
                background: rgb(51 65 85);
            }

            .postman-flag-scroll {
                position: relative;
                min-width: 0;
                flex: 1 1 auto;
            }

            .postman-flag-scroller {
                display: flex;
                align-items: center;
                gap: 0.3rem;
                overflow-x: auto;
                padding: 0.2rem 0.2rem;
                scroll-snap-type: x proximity;
                scroll-padding-inline: 1.75rem;
                interpolate-size: allow-keywords;
                scrollbar-width: none;
                -ms-overflow-style: none;
                --fade-size: 1.75rem;
                --fade-dir: right;
                --fade-start-pos: 0;
                --fade-end-pos: 100%;
                mask:
                    linear-gradient(black, black) no-clip subtract,
                    linear-gradient(to var(--fade-dir), black, transparent) var(--fade-start-pos)
                        0 / var(--fade-start) 100% no-repeat no-clip,
                    linear-gradient(to var(--fade-dir), transparent, black) var(--fade-end-pos) 0 /
                        var(--fade-end) 100% no-repeat no-clip;
                animation:
                    postman-reveal-fade-start linear both,
                    postman-hide-fade-end linear both;
                animation-timeline: scroll(self inline);
                animation-range:
                    0 var(--fade-size),
                    calc(100% - var(--fade-size)) 100%;

                &:dir(rtl) {
                    --fade-dir: left;
                    --fade-start-pos: 100%;
                    --fade-end-pos: 0;
                }

                &.more-start {
                    --fade-start: var(--fade-size);
                }

                &.more-end {
                    --fade-end: var(--fade-size);
                }
            }

            @keyframes postman-reveal-fade-start {
                to {
                    --fade-start: var(--fade-size);
                }
            }

            @keyframes postman-hide-fade-end {
                from {
                    --fade-end: var(--fade-size);
                }
            }

            .postman-flag-scroller::-webkit-scrollbar {
                display: none;
                width: 0;
                height: 0;
            }

            .postman-flag {
                position: relative;
                flex-shrink: 0;
                scroll-snap-align: start;
            }

            .postman-flag-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.4rem;
                min-width: 2.275rem;
                height: 2.275rem;
                padding: 0 0.45rem;
                border-radius: 999px;
                border: 1px solid rgb(226 232 240);
                background: white;
                box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
                cursor: pointer;
                transition:
                    background-color 0.15s ease,
                    border-color 0.15s ease,
                    box-shadow 0.15s ease,
                    scale 0.12s ease-out,
                    color 0.15s ease;

                &:hover:not(.postman-flag-btn--selected) {
                    border-color: rgb(148 163 184);
                    box-shadow: 0 2px 6px rgb(15 23 42 / 0.1);
                }

                &:active {
                    scale: 0.96;
                }

                &:focus-visible {
                    outline: 2px solid rgb(37 99 235);
                    outline-offset: 2px;
                }

                img {
                    width: 1.3rem;
                    height: 1.3rem;
                    flex-shrink: 0;
                    border-radius: 999px;
                    object-fit: cover;
                    box-shadow: 0 0 0 1px rgb(0 0 0 / 0.1);
                }

                mat-icon {
                    width: 1.3rem;
                    height: 1.3rem;
                    flex-shrink: 0;
                    font-size: 1.3rem;
                    color: rgb(71 85 105);
                }
            }

            .postman-flag-initials {
                max-width: 100%;
                padding: 0 0.1rem;
                overflow: hidden;
                color: rgb(51 65 85);
                font-size: 0.65rem;
                font-weight: 700;
                line-height: 1;
                text-overflow: ellipsis;
            }

            .postman-flag-label {
                font-size: 0.75rem;
                font-weight: 600;
                line-height: 1;
                white-space: nowrap;
                letter-spacing: -0.01em;
            }

            .postman-flag-count {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 1.15rem;
                height: 1.15rem;
                padding: 0 0.3rem;
                border-radius: 999px;
                background: rgb(255 255 255 / 0.18);
                color: rgb(248 250 252);
                font-size: 0.65rem;
                font-weight: 700;
                font-variant-numeric: tabular-nums;
                line-height: 1;
            }

            .postman-flag-btn--selected {
                min-inline-size: max-content;
                padding: 0 0.55rem 0 0.45rem;
                border-color: rgb(15 23 42);
                background: rgb(15 23 42);
                color: white;
                box-shadow:
                    0 0 0 2px rgb(37 99 235 / 0.25),
                    0 2px 6px rgb(15 23 42 / 0.18);

                mat-icon,
                .postman-flag-initials {
                    color: white;
                }
            }

            :host-context(.dark) .postman-flag-btn:not(.postman-flag-btn--selected) {
                border-color: rgb(51 65 85);
                background: rgb(30 41 59);

                &:hover {
                    border-color: rgb(100 116 139);
                    background: rgb(51 65 85);
                }

                mat-icon,
                .postman-flag-initials {
                    color: rgb(203 213 225);
                }
            }

            :host-context(.dark) .postman-flag-btn--selected {
                border-color: rgb(96 165 250);
                background: rgb(30 58 138);
                color: rgb(248 250 252);
                box-shadow:
                    0 0 0 2px rgb(96 165 250 / 0.35),
                    0 2px 8px rgb(0 0 0 / 0.35);
            }

            .postman-flag-pin {
                position: absolute;
                right: -2px;
                bottom: -2px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                width: 15px;
                height: 15px;
                min-width: 0;
                padding: 0;
                border: 1px solid rgb(226 232 240);
                border-radius: 999px;
                background: white;
                color: rgb(148 163 184);
                line-height: 0;
                box-shadow: 0 1px 2px rgb(15 23 42 / 0.16);
                opacity: 0;
                pointer-events: none;
                cursor: pointer;
                transition:
                    opacity 0.15s ease,
                    scale 0.12s ease-out,
                    color 0.15s ease;

                &::after {
                    content: '';
                    position: absolute;
                    inset: -5px;
                }

                &:active {
                    scale: 0.92;
                }

                &:focus-visible {
                    opacity: 1;
                    pointer-events: auto;
                    outline: 2px solid rgb(37 99 235);
                    outline-offset: 1px;
                }

                svg {
                    display: block;
                    width: 10px;
                    height: 10px;
                    flex-shrink: 0;
                }
            }

            .postman-flag:hover .postman-flag-pin,
            .postman-flag:focus-within .postman-flag-pin,
            .postman-flag-pin--on {
                opacity: 1;
                pointer-events: auto;
            }

            .postman-flag-pin--on {
                color: rgb(15 23 42);
            }

            :host-context(.dark) .postman-flag-pin {
                border-color: rgb(51 65 85);
                background: rgb(30 41 59);
                color: rgb(148 163 184);
            }

            :host-context(.dark) .postman-flag-pin--on {
                color: rgb(248 250 252);
            }

            @media (hover: none) {
                .postman-flag-btn--selected + .postman-flag-pin,
                .postman-flag-pin--on {
                    opacity: 1;
                    pointer-events: auto;
                }
            }

            .postman-flag-arrow {
                position: absolute;
                top: 50%;
                z-index: 2;
                display: grid;
                width: 1.5rem;
                height: 1.5rem;
                place-items: center;
                border: 1px solid rgb(226 232 240);
                border-radius: 999px;
                background: rgb(248 250 252);
                color: rgb(51 65 85);
                box-shadow: 0 1px 3px rgb(15 23 42 / 0.12);
                transform: translateY(-50%);
                cursor: pointer;
                transition:
                    background-color 0.15s ease,
                    box-shadow 0.15s ease;

                &:hover {
                    background: white;
                    box-shadow: 0 2px 6px rgb(15 23 42 / 0.18);
                }

                &:focus-visible {
                    outline: 2px solid rgb(37 99 235);
                    outline-offset: 2px;
                }

                mat-icon {
                    width: 1rem;
                    height: 1rem;
                    font-size: 1rem;
                }
            }

            .postman-flag-arrow--left {
                left: 0;
            }

            .postman-flag-arrow--right {
                right: 0;
            }

            .postman-flag-arrow--left::before,
            .postman-flag-arrow--right::before {
                content: '';
                position: absolute;
                top: -0.45rem;
                bottom: -0.45rem;
                width: 1.15rem;
                pointer-events: none;
            }

            .postman-flag-arrow--left::before {
                left: 100%;
                background: linear-gradient(to right, rgb(248 250 252), transparent);
            }

            .postman-flag-arrow--right::before {
                right: 100%;
                background: linear-gradient(to left, rgb(248 250 252), transparent);
            }

            :host-context(.dark) .postman-flag-arrow {
                border-color: rgb(51 65 85);
                background: rgb(15 23 42);
                color: rgb(226 232 240);
            }

            :host-context(.dark) .postman-flag-arrow--left::before {
                background: linear-gradient(to right, rgb(15 23 42), transparent);
            }

            :host-context(.dark) .postman-flag-arrow--right::before {
                background: linear-gradient(to left, rgb(15 23 42), transparent);
            }

            :host-context(.dark) .postman-flag-pin:not(.postman-flag-pin--on) {
                border-color: rgb(51 65 85);
                background: rgb(15 23 42);
                color: rgb(203 213 225);
            }
        `,
    ],
})
export class PostmanComponent {
    private static readonly SIDEBAR_COLLAPSED_WIDTH = 64;
    private static readonly SIDEBAR_MIN_WIDTH = 220;
    private static readonly SIDEBAR_DEFAULT_WIDTH = 360;
    /** Minimum width reserved for request + response so they can still reflow. */
    private static readonly MAIN_MIN_WIDTH = 360;
    private static readonly SIDEBAR_RESIZER_WIDTH = 8;

    private _postmanService = inject(PostmanService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _fuseMediaWatcherService = inject(FuseMediaWatcherService);
    private _ngZone = inject(NgZone);
    private _destroyRef = inject(DestroyRef);
    private _transloco = inject(TranslocoService);

    sidebarCollapsed = false;
    sidebarExpandedWidth = PostmanComponent.SIDEBAR_DEFAULT_WIDTH;
    sidebarWidth = PostmanComponent.SIDEBAR_DEFAULT_WIDTH;
    private _sidebarDragRootLeft = 0;
    private _sidebarDragRootWidth = 0;
    private _sidebarDragActive = false;

    // Responsive State (true when viewport is below the `md` breakpoint)
    isMobile = signal(false);

    // Mobile-only UI State
    mobileSidebarOpen = signal(false);
    mobilePanel = signal<'request' | 'response'>('request');

    // Layout State
    layout: 'horizontal' | 'vertical' = 'horizontal';

    // Resizable Split (Size in Percentage)
    requestPanelSize = 50;
    isDragging = false;
    dragMode: 'sidebar' | 'horizontal' | 'vertical' | null = null;

    // Flag to prevent cyclic updates
    private _isNavigating = false;
    private _openedCodeFromUrl: string | null = null;

    selectedCountry = this._postmanService.selectedCountry;

    countries = computed(() =>
        this._postmanService
            .catalogCountries()
            .map(({ country, count }) => ({ name: country, count }))
            .sort((a, b) => {
                const aWorld = a.name.toLowerCase() === WORLD_CATALOG_COUNTRY;
                const bWorld = b.name.toLowerCase() === WORLD_CATALOG_COUNTRY;
                if (aWorld !== bWorld) {
                    return aWorld ? -1 : 1;
                }
                return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
            })
    );

    readonly flagScroller = viewChild<ElementRef<HTMLElement>>('flagScroller');
    readonly countryPickerTrigger =
        viewChild<ElementRef<HTMLButtonElement>>('countryPickerTrigger');
    readonly countryPickerPopover = viewChild<ElementRef<HTMLElement>>('countryPickerPopover');
    readonly countrySearchInput = viewChild<ElementRef<HTMLInputElement>>('countrySearchInput');
    readonly countryPickerList = viewChild<ElementRef<HTMLElement>>('countryPickerList');

    readonly countryPickerPopoverId = 'postman-country-picker';
    readonly countrySearchInputId = 'postman-country-search-input';
    readonly countrySearchQuery = signal('');
    readonly countryPickerOpen = signal(false);
    readonly countryPickerFallbackOpen = signal(false);
    readonly activeCountryPickerName = signal<string | null>(null);

    readonly pinnedNames = signal<string[]>(_readPinnedCountries());
    readonly canScrollLeft = signal(false);
    readonly canScrollRight = signal(false);
    readonly pinnedCountries = computed(() => {
        const byName = new Map(this.countries().map((country) => [country.name, country]));
        return this.pinnedNames().flatMap((name) => {
            const country = byName.get(name);
            return country ? [country] : [];
        });
    });
    readonly scrollCountries = computed(() => {
        const pinned = new Set(this.pinnedNames());
        return this.countries().filter((country) => !pinned.has(country.name));
    });

    readonly filteredPickerCountries = computed(() => {
        const rawQuery = this.countrySearchQuery().trim();
        if (!rawQuery) {
            return [...this.pinnedCountries(), ...this.scrollCountries()];
        }

        const qToken = normalizeCountryToken(rawQuery);
        const qLower = rawQuery.toLowerCase();

        const scored: Array<{ country: { name: string; count: number }; score: number }> = [];
        for (const country of this.countries()) {
            const iso = (countryNameToIso(country.name) || '').toLowerCase();
            const displayName = this.countryDisplayName(country.name);
            const displayToken = normalizeCountryToken(displayName);
            const canonicalToken = normalizeCountryToken(country.name);
            const displayLower = displayName.toLowerCase();
            const canonicalLower = country.name.toLowerCase();

            let score = 0;
            if (iso === qLower || displayToken === qToken || canonicalToken === qToken) {
                score = 100;
            } else if (
                displayToken.startsWith(qToken) ||
                canonicalToken.startsWith(qToken) ||
                displayLower.startsWith(qLower) ||
                canonicalLower.startsWith(qLower)
            ) {
                score = 80;
            } else if (iso.startsWith(qLower) && qLower.length <= 2) {
                score = 70;
            } else if (
                displayToken.includes(qToken) ||
                canonicalToken.includes(qToken) ||
                displayLower.includes(qLower) ||
                canonicalLower.includes(qLower) ||
                iso.includes(qLower)
            ) {
                score = 50;
            }

            if (score > 0) {
                scored.push({ country, score });
            }
        }

        return scored
            .sort((a, b) => {
                if (b.score !== a.score) return b.score - a.score;
                return this.countryDisplayName(a.country.name).localeCompare(
                    this.countryDisplayName(b.country.name),
                    this._transloco.getActiveLang() || 'en',
                    { sensitivity: 'base' }
                );
            })
            .map((entry) => entry.country);
    });

    // Payment Method State
    paymentMethod = this._postmanService.paymentMethod;

    isCountrySelected(country: string): boolean {
        return areSamePostmanCountry(this.selectedCountry(), country);
    }

    isCountryPinned(country: string): boolean {
        const canonical = canonicalPostmanCountryName(country) || country;
        return this.pinnedNames().includes(canonical);
    }

    countryIsoBadge(country: string): string {
        const iso = countryNameToIso(country);
        if (!iso || iso === 'world') return '';
        return iso.toUpperCase();
    }

    setActiveCountryPickerName(name: string): void {
        this.activeCountryPickerName.set(name);
    }

    onCountrySearchQueryChange(query: string): void {
        this.countrySearchQuery.set(query);
        const first = this.filteredPickerCountries()[0]?.name ?? null;
        this.activeCountryPickerName.set(first);
    }

    clearCountrySearch(): void {
        this.countrySearchQuery.set('');
        const currentSelected = this.selectedCountry();
        const first =
            this.filteredPickerCountries().find((c) =>
                areSamePostmanCountry(c.name, currentSelected)
            )?.name ??
            this.filteredPickerCountries()[0]?.name ??
            null;
        this.activeCountryPickerName.set(first);
        this.countrySearchInput()?.nativeElement.focus();
    }

    onCountryPopoverBeforeToggle(event: Event): void {
        const toggleEvent = event as Event & { newState?: string };
        if (toggleEvent.newState !== 'open') return;
        this._positionPopoverFallback();
    }

    onCountryPopoverToggle(event: Event): void {
        const toggleEvent = event as Event & { newState?: string };
        const isOpen = toggleEvent.newState === 'open';
        this.countryPickerOpen.set(isOpen);
        if (!isOpen) {
            this.countryPickerFallbackOpen.set(false);
            return;
        }
        this._initializeCountryPickerOnOpen();
    }

    onCountryPickerTriggerClick(event: MouseEvent): void {
        const popoverEl = this.countryPickerPopover()?.nativeElement as
            | (HTMLElement & { showPopover?: () => void; hidePopover?: () => void })
            | undefined;
        if (!popoverEl || typeof popoverEl.showPopover === 'function') {
            // Native popovertarget handles toggling automatically when showPopover exists.
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const nextOpen = !this.countryPickerFallbackOpen();
        this.countryPickerFallbackOpen.set(nextOpen);
        this.countryPickerOpen.set(nextOpen);
        if (nextOpen) {
            this._positionPopoverFallback();
            this._initializeCountryPickerOnOpen();
        }
    }

    closeCountryPicker(): void {
        const popoverEl = this.countryPickerPopover()?.nativeElement as
            | (HTMLElement & { hidePopover?: () => void })
            | undefined;
        if (popoverEl && typeof popoverEl.hidePopover === 'function') {
            try {
                if (popoverEl.matches(':popover-open')) {
                    popoverEl.hidePopover();
                }
            } catch {
                // Ignore if already closed
            }
        }
        this.countryPickerFallbackOpen.set(false);
        this.countryPickerOpen.set(false);
    }

    selectCountryFromPicker(country: string): void {
        this.toggleCountry(country);
        this.closeCountryPicker();
        queueMicrotask(() =>
            requestAnimationFrame(() =>
                this._scrollSelectedIntoView(canonicalPostmanCountryName(country) || country)
            )
        );
    }

    onCountrySearchKeydown(event: KeyboardEvent): void {
        const list = this.filteredPickerCountries();
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            if (!list.length) return;
            const current = this.activeCountryPickerName();
            const currentIdx = list.findIndex((c) => c.name === current);
            const delta = event.key === 'ArrowDown' ? 1 : -1;
            const nextIdx =
                currentIdx < 0
                    ? delta > 0
                        ? 0
                        : list.length - 1
                    : (currentIdx + delta + list.length) % list.length;
            const nextName = list[nextIdx].name;
            this.activeCountryPickerName.set(nextName);
            this._scrollPickerRowIntoView(nextName);
            return;
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            const active =
                list.find((c) => c.name === this.activeCountryPickerName()) ?? list[0] ?? null;
            if (active) {
                this.selectCountryFromPicker(active.name);
            }
            return;
        }
        if (event.key === 'Escape') {
            this.closeCountryPicker();
        }
    }

    @HostListener('document:keydown', ['$event'])
    onGlobalCountryPickerKeydown(event: KeyboardEvent): void {
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
            const target = event.target as HTMLElement | null;
            const isEditable =
                target &&
                (target.tagName === 'INPUT' ||
                    target.tagName === 'TEXTAREA' ||
                    target.isContentEditable) &&
                target.id !== this.countrySearchInputId;
            if (isEditable) return;

            event.preventDefault();
            const popoverEl = this.countryPickerPopover()?.nativeElement as
                | (HTMLElement & { togglePopover?: () => void })
                | undefined;
            if (popoverEl && typeof popoverEl.togglePopover === 'function') {
                popoverEl.togglePopover();
            } else {
                const nextOpen = !this.countryPickerFallbackOpen();
                this.countryPickerFallbackOpen.set(nextOpen);
                this.countryPickerOpen.set(nextOpen);
                if (nextOpen) {
                    this._positionPopoverFallback();
                    this._initializeCountryPickerOnOpen();
                }
            }
        } else if (event.key === 'Escape' && this.countryPickerFallbackOpen()) {
            this.closeCountryPicker();
        }
    }

    private _positionPopoverFallback(): void {
        if (typeof window === 'undefined' || typeof CSS === 'undefined') return;
        if (CSS.supports('position-area: block-end')) return;
        const trigger = this.countryPickerTrigger()?.nativeElement;
        const popover = this.countryPickerPopover()?.nativeElement;
        if (!trigger || !popover) return;
        const rect = trigger.getBoundingClientRect();
        const maxLeft = Math.max(8, window.innerWidth - 356);
        const left = Math.max(8, Math.min(Math.round(rect.left), maxLeft));
        const top = Math.round(rect.bottom + 6);
        popover.style.position = 'fixed';
        popover.style.inset = 'auto';
        popover.style.margin = '0';
        popover.style.top = `${top}px`;
        popover.style.left = `${left}px`;
        popover.style.zIndex = '70';
    }

    private _initializeCountryPickerOnOpen(): void {
        this.countrySearchQuery.set('');
        const selected = this.selectedCountry();
        const list = this.filteredPickerCountries();
        const match =
            list.find((c) => areSamePostmanCountry(c.name, selected))?.name ??
            list[0]?.name ??
            null;
        this.activeCountryPickerName.set(match);
        queueMicrotask(() => {
            requestAnimationFrame(() => {
                this.countrySearchInput()?.nativeElement.focus();
                if (match) {
                    this._scrollPickerRowIntoView(match);
                }
            });
        });
    }

    private _scrollPickerRowIntoView(name: string): void {
        const container = this.countryPickerList()?.nativeElement;
        if (!container) return;
        const row = Array.from(
            container.querySelectorAll<HTMLElement>('[data-picker-country]')
        ).find((el) => el.dataset.pickerCountry === name);
        if (!row || typeof row.scrollIntoView !== 'function') return;
        row.scrollIntoView({
            block: 'nearest',
            inline: 'nearest',
            container: 'nearest',
        } as ScrollIntoViewOptions);
    }

    countryDisplayName(country: string): string {
        if (!country) return '';
        const worldKey = 'postman.flags.world';
        const translatedWorld = this._transloco.translate(worldKey);
        const worldLabel =
            translatedWorld && translatedWorld !== worldKey ? translatedWorld : 'Global';
        return formatPostmanCountryDisplayName(
            country,
            this._transloco.getActiveLang(),
            worldLabel
        );
    }

    toggleCountry(country: string) {
        const canonical = canonicalPostmanCountryName(country) || country;
        if (this.isCountrySelected(canonical)) {
            if (this.isMobile()) {
                this.mobileSidebarOpen.set(true);
            }
            return;
        }
        this.selectedCountry.set(canonical);
        this._postmanService.loadFeaturesForCountries(catalogCountryScope(canonical));

        if (this.isMobile()) {
            this.mobileSidebarOpen.set(true);
        }
        const iso = countryNameToIso(canonical) || canonical.toLowerCase();
        const queryParams: Record<string, string | null> = { country: iso };

        const currentEp = this._postmanService.selectedEndpoint();
        if (currentEp && !endpointMatchesCountryFilter(currentEp.country, canonical)) {
            queryParams['code'] = null;
            this._openedCodeFromUrl = null;
            this._postmanService.selectedEndpoint.set(null);
        }

        void this._router.navigate([], {
            relativeTo: this._route,
            queryParams,
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }

    setPaymentMethod(method: 'credits' | 'x402') {
        this._postmanService.paymentMethod.set(method);
    }

    countryFlagUi(country: string): PostmanCountryFlagUi {
        return postmanCountryFlagUi(country);
    }

    /**
     * Keep a country in the left group, or return it to the scrolling row.
     * @param {string} name
     * @param {Event} event
     */
    togglePin = (name: string, event: Event): void => {
        event.stopPropagation();
        event.preventDefault();
        const canonical = canonicalPostmanCountryName(name) || name;
        const current = this.pinnedNames();
        const next = current.includes(canonical)
            ? current.filter((item) => item !== canonical)
            : [...current, canonical];
        this._storePins(next);
    };

    /**
     * Move the scrolling flags by most of the visible width.
     * @param {-1 | 1} direction
     */
    scrollFlags = (direction: -1 | 1): void => {
        const scroller = this.flagScroller()?.nativeElement;
        if (!scroller) return;
        scroller.scrollBy({ left: direction * scroller.clientWidth * 0.8, behavior: 'smooth' });
    };

    /** Show an arrow only on the side that still has hidden flags. */
    updateFlagScroll = (): void => {
        const scroller = this.flagScroller()?.nativeElement;
        if (!scroller) {
            this.canScrollLeft.set(false);
            this.canScrollRight.set(false);
            return;
        }
        this.canScrollLeft.set(scroller.scrollLeft > 2);
        this.canScrollRight.set(
            scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 2
        );
    };

    /**
     * Persist pins and drop names that are no longer in the catalog.
     */
    private _watchFlagStrip = (): void => {
        effect((onCleanup) => {
            const scroller = this.flagScroller()?.nativeElement;
            this.scrollCountries();
            if (!scroller) return;
            const observer = new ResizeObserver(() => this.updateFlagScroll());
            observer.observe(scroller);
            this.updateFlagScroll();
            requestAnimationFrame(() => this.updateFlagScroll());
            onCleanup(() => observer.disconnect());
        });

        effect(() => {
            const selected = this.selectedCountry();
            const scrolling = this.scrollCountries();
            const match = scrolling.find((country) =>
                areSamePostmanCountry(country.name, selected)
            );
            if (!selected || !match) return;
            queueMicrotask(() =>
                requestAnimationFrame(() => this._scrollSelectedIntoView(match.name))
            );
        });

        effect(() => {
            const known = new Set(this.countries().map((country) => country.name));
            if (!known.size) return;
            const next = this.pinnedNames().filter((name) => known.has(name));
            if (next.length === this.pinnedNames().length) return;
            this._storePins(next);
        });
    };

    /**
     * @param {string[]} names
     */
    private _storePins = (names: string[]): void => {
        this.pinnedNames.set(names);
        localStorage.setItem(PINNED_COUNTRIES_KEY, JSON.stringify(names));
    };

    /**
     * Bring a selected flag into the visible part of the row.
     * @param {string} name
     */
    private _scrollSelectedIntoView = (name: string): void => {
        const scroller = this.flagScroller()?.nativeElement;
        if (!scroller) return;
        const flag = Array.from(scroller.querySelectorAll<HTMLElement>('[data-country]')).find(
            (el) => el.dataset.country === name
        );
        if (!flag) return;
        if (typeof flag.scrollIntoView === 'function') {
            flag.scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
                container: 'nearest',
                behavior: 'smooth',
            } as ScrollIntoViewOptions);
            return;
        }
        const flagBox = flag.getBoundingClientRect();
        const rowBox = scroller.getBoundingClientRect();
        const left = flagBox.left - rowBox.left;
        const right = flagBox.right - rowBox.right;
        if (left < 0) scroller.scrollBy({ left: left - 8, behavior: 'smooth' });
        else if (right > 0) scroller.scrollBy({ left: right + 8, behavior: 'smooth' });
    };

    private _queryParamMap = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });

    constructor() {
        this._destroyRef.onDestroy(() => this.stopDrag());
        this._watchFlagStrip();

        // Track viewport size: anything below the `md` alias is treated as mobile.
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntilDestroyed())
            .subscribe(({ matchingAliases }) => {
                const mobile = !matchingAliases.includes('md');
                this.isMobile.set(mobile);
                if (!mobile) {
                    this.mobileSidebarOpen.set(false);
                }
            });

        // Effect: Sync URL code param -> Selected Endpoint (route is source of truth for code)
        effect(() => {
            const params = this._queryParamMap();
            const codeParam = params?.get('code')?.trim();
            if (!codeParam) {
                this._openedCodeFromUrl = null;
                return;
            }
            const isoParam = params?.get('country')?.trim().toLowerCase() || null;
            const selectedCountry = this._postmanService.selectedCountry();
            const selectedIso = countryNameToIso(selectedCountry)?.toLowerCase() || null;
            if (isoParam && selectedIso && isoParam !== selectedIso) {
                return;
            }
            const endpoints = this._postmanService.visibleEndpoints();
            const found = endpoints.find((ep) => ep.code === codeParam);
            if (found) {
                if (
                    selectedCountry &&
                    !endpointMatchesCountryFilter(found.country, selectedCountry)
                ) {
                    return;
                }
                this._openedCodeFromUrl = codeParam;
                if (this._postmanService.selectedEndpoint()?.code !== found.code) {
                    this._postmanService.selectEndpoint(found);
                }
                return;
            }
            if (this._openedCodeFromUrl !== codeParam) {
                this._openedCodeFromUrl = codeParam;
                this._postmanService.openEndpointByCode(codeParam);
            }
        });

        // Effect: Sync URL country param -> selectedCountry, then load that slim catalog.
        effect(() => {
            const params = this._queryParamMap();
            const isoParam = params?.get('country')?.trim().toLowerCase() || null;
            const countryRows = this._postmanService.catalogCountries();
            const catalogEndpoints = countryRows.map(
                (row) => ({ country: row.country }) as ApiEndpoint
            );

            if (!isoParam) {
                if (params?.get('code')) {
                    return;
                }
                const current = untracked(() => this._postmanService.selectedCountry());
                if (!current) {
                    this._postmanService.selectedCountry.set(DEFAULT_POSTMAN_COUNTRY);
                    this._postmanService.loadFeaturesForCountries(
                        catalogCountryScope(DEFAULT_POSTMAN_COUNTRY)
                    );
                }
                return;
            }

            const resolved =
                resolveCountryNameFromIso(isoParam, catalogEndpoints) ||
                resolveCountryNameFromIso(isoParam, this._postmanService.visibleEndpoints()) ||
                canonicalPostmanCountryName(isoParam);
            const currentSelected = untracked(() => this._postmanService.selectedCountry());
            if (resolved && !areSamePostmanCountry(currentSelected, resolved)) {
                this._postmanService.selectedCountry.set(resolved);
                this._postmanService.loadFeaturesForCountries(catalogCountryScope(resolved));
            }
        });

        // Effect: Selected Endpoint -> Sync URL (code + country together, so the
        // country param always matches the endpoint and we self-heal mismatches like
        // `?code=spain_*&country=pa` -> `?code=spain_*&country=es`).
        effect(() => {
            const selected = this._postmanService.selectedEndpoint();
            if (!selected?.code) return;

            const selectedCountry = this._postmanService.selectedCountry();
            if (
                selectedCountry &&
                !endpointMatchesCountryFilter(selected.country, selectedCountry)
            ) {
                return;
            }

            const currentParams = this._queryParamMap();
            const desiredCountryIso =
                countryNameToIso(selected.country)?.toLowerCase() ||
                selected.country?.trim().toLowerCase() ||
                null;
            const currentCode = currentParams?.get('code')?.trim() ?? null;
            const currentCountry = currentParams?.get('country')?.trim().toLowerCase() ?? null;

            if (currentCode === selected.code && currentCountry === desiredCountryIso) {
                return;
            }

            const urlTree = this._router.createUrlTree([], {
                relativeTo: this._route,
                queryParams: { code: selected.code, country: desiredCountryIso },
                queryParamsHandling: 'merge',
            });
            const urlString = this._router.serializeUrl(urlTree);
            void this._router.navigateByUrl(urlString, {
                replaceUrl: true,
            });
        });

        effect(() => {
            const selected = this._postmanService.selectedEndpoint();
            if (!selected?.code) return;

            queueMicrotask(() => this.applyHistoryPrefill(selected));
        });

        // Effect: On mobile, jump to the Response panel once a request finishes
        // (loading transitions true -> false with a response or error present).
        effect(() => {
            const loading = this._postmanService.isLoading();
            const hasResult =
                this._postmanService.response() != null || this._postmanService.error() != null;
            const wasLoading = this._wasLoading;
            this._wasLoading = loading;

            if (wasLoading && !loading && hasResult && this.isMobile()) {
                this.mobilePanel.set('response');
            }
        });

        // Effect: Drive the mobile drawer/panel from the selected endpoint.
        // - No endpoint selected: open the drawer so the endpoint list is shown
        //   first (instead of an empty Request panel).
        // - Endpoint newly selected: close the drawer and land on the Request panel.
        // Re-selecting the same endpoint (e.g. prefill copy) is a no-op so it does
        // not fight the auto-jump-to-Response behavior.
        effect(() => {
            const code = this._postmanService.selectedEndpoint()?.code ?? null;
            const mobile = this.isMobile();

            if (!mobile) {
                this._lastSelectedCodeForMobile = code;
                return;
            }

            const changed = code !== this._lastSelectedCodeForMobile;
            this._lastSelectedCodeForMobile = code;

            if (!code) {
                this.mobileSidebarOpen.set(true);
                return;
            }

            if (changed) {
                this.mobileSidebarOpen.set(false);
                this.mobilePanel.set('request');
            }
        });
    }

    private _wasLoading = false;
    private _lastSelectedCodeForMobile: string | null = null;

    private _activeDrag: 'sidebar' | 'horizontal' | 'vertical' | null = null;
    private _splitRect: DOMRect | null = null;

    onSidebarResizerKeydown(event: KeyboardEvent) {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        const delta = event.key === 'ArrowRight' ? 24 : -24;
        const maxW = Math.max(
            PostmanComponent.SIDEBAR_MIN_WIDTH,
            window.innerWidth -
                PostmanComponent.SIDEBAR_RESIZER_WIDTH -
                PostmanComponent.MAIN_MIN_WIDTH
        );
        const nextWidth = Math.max(
            PostmanComponent.SIDEBAR_MIN_WIDTH,
            Math.min(maxW, this.sidebarWidth + delta)
        );
        this.sidebarExpandedWidth = nextWidth;
        this.sidebarWidth = nextWidth;
    }

    onSplitResizerKeydown(event: KeyboardEvent) {
        const isHorizontal = this.layout === 'horizontal';
        const decreaseKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp';
        const increaseKey = isHorizontal ? 'ArrowRight' : 'ArrowDown';
        if (event.key !== decreaseKey && event.key !== increaseKey) return;
        event.preventDefault();
        const delta = event.key === increaseKey ? 5 : -5;
        this.requestPanelSize = Math.max(15, Math.min(85, this.requestPanelSize + delta));
    }

    toggleSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        this.sidebarWidth = this.sidebarCollapsed
            ? PostmanComponent.SIDEBAR_COLLAPSED_WIDTH
            : this.sidebarExpandedWidth;
    }

    setLayout(mode: 'horizontal' | 'vertical') {
        this.layout = mode;
    }

    startSidebarDrag(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();

        const root = (event.currentTarget as HTMLElement).closest(
            '[data-postman-root]'
        ) as HTMLElement | null;
        const rootRect = root?.getBoundingClientRect();
        this._sidebarDragRootLeft = rootRect?.left ?? 0;
        this._sidebarDragRootWidth = rootRect?.width ?? window.innerWidth;
        this.isDragging = true;
        this.dragMode = 'sidebar';
        this._activeDrag = 'sidebar';

        this._listenGlobalDrag();
    }

    startDrag(event: MouseEvent, mode: 'horizontal' | 'vertical') {
        event.preventDefault();
        event.stopPropagation();

        const container = (event.currentTarget as HTMLElement).parentElement;
        this._splitRect = container?.getBoundingClientRect() ?? null;
        this.isDragging = true;
        this.dragMode = mode;
        this._activeDrag = mode;

        this._listenGlobalDrag();
    }

    private _listenGlobalDrag() {
        this._ngZone.runOutsideAngular(() => {
            document.addEventListener('mousemove', this._onGlobalPointerMove);
            document.addEventListener('mouseup', this._onGlobalPointerUp);
        });
    }

    private _onGlobalPointerMove = (event: MouseEvent) => {
        if (!this._activeDrag) return;

        if (this._activeDrag === 'sidebar') {
            const rootWidth = this._sidebarDragRootWidth || window.innerWidth;
            const available =
                rootWidth -
                PostmanComponent.SIDEBAR_RESIZER_WIDTH -
                PostmanComponent.MAIN_MIN_WIDTH;
            const maxW = Math.max(PostmanComponent.SIDEBAR_MIN_WIDTH, available);
            let width = event.clientX - this._sidebarDragRootLeft;
            width = Math.max(PostmanComponent.SIDEBAR_MIN_WIDTH, Math.min(maxW, width));

            this._ngZone.run(() => {
                this.sidebarExpandedWidth = width;
                this.sidebarWidth = width;
            });
        } else if (this._splitRect) {
            const mode = this._activeDrag;
            let newSizePercent = 50;

            if (mode === 'horizontal') {
                const offsetX = event.clientX - this._splitRect.left;
                newSizePercent = (offsetX / this._splitRect.width) * 100;
            } else {
                const offsetY = event.clientY - this._splitRect.top;
                newSizePercent = (offsetY / this._splitRect.height) * 100;
            }

            if (newSizePercent < 15) newSizePercent = 15;
            if (newSizePercent > 85) newSizePercent = 85;

            this._ngZone.run(() => {
                this.requestPanelSize = newSizePercent;
            });
        }
    };

    private _onGlobalPointerUp = () => {
        if (!this._activeDrag) return;
        this._ngZone.run(() => this.stopDrag());
    };

    stopDrag() {
        this._activeDrag = null;
        this._splitRect = null;
        document.removeEventListener('mousemove', this._onGlobalPointerMove);
        document.removeEventListener('mouseup', this._onGlobalPointerUp);
        this.isDragging = false;
        this.dragMode = null;
    }

    private applyHistoryPrefill(endpoint: ApiEndpoint): void {
        const raw = sessionStorage.getItem(POSTMAN_HISTORY_PREFILL_STORAGE_KEY);
        if (!raw) return;

        let payload: PostmanHistoryPrefillPayload;
        try {
            payload = JSON.parse(raw);
        } catch {
            sessionStorage.removeItem(POSTMAN_HISTORY_PREFILL_STORAGE_KEY);
            return;
        }

        if (payload.source !== 'history' || payload.v !== 1) {
            sessionStorage.removeItem(POSTMAN_HISTORY_PREFILL_STORAGE_KEY);
            return;
        }

        if (payload.code !== endpoint.code) return;

        const endpointCopy = this.applyPrefillToEndpoint(endpoint, payload.paramValues || {});
        this._postmanService.paymentMethod.set(payload.paymentMode || 'credits');
        this._postmanService.selectedEndpoint.set(endpointCopy);
        sessionStorage.removeItem(POSTMAN_HISTORY_PREFILL_STORAGE_KEY);
    }

    private applyPrefillToEndpoint(
        endpoint: ApiEndpoint,
        paramValues: Record<string, unknown>
    ): ApiEndpoint {
        const endpointCopy: ApiEndpoint = JSON.parse(JSON.stringify(endpoint));
        const remaining = { ...paramValues };

        endpointCopy.params?.forEach((param) => {
            if (!Object.prototype.hasOwnProperty.call(paramValues, param.key)) return;

            param.value = this.prefillValueToString(paramValues[param.key]);
            delete remaining[param.key];
        });

        const remainingEntries = Object.entries(remaining);
        if (!remainingEntries.length) return endpointCopy;

        if (endpointCopy.method === 'GET' || endpointCopy.method === 'DELETE') {
            endpointCopy.params = endpointCopy.params || [];
            remainingEntries.forEach(([key, value]) => {
                endpointCopy.params?.push({
                    key,
                    value: this.prefillValueToString(value),
                    type: 'string',
                    required: false,
                    description: '',
                });
            });

            return endpointCopy;
        }

        endpointCopy.body = {
            ...this.bodyToObject(endpointCopy.body),
            ...remaining,
        };

        return endpointCopy;
    }

    private bodyToObject(body: unknown): Record<string, unknown> {
        if (!body) return {};

        if (typeof body === 'object' && !Array.isArray(body)) {
            return { ...(body as Record<string, unknown>) };
        }

        if (typeof body === 'string') {
            try {
                const parsed = JSON.parse(body);
                return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
            } catch {
                return {};
            }
        }

        return {};
    }

    private prefillValueToString(value: unknown): string {
        if (value == null) return '';
        if (typeof value === 'string') return value;
        if (typeof value === 'number' || typeof value === 'boolean') return String(value);

        try {
            return JSON.stringify(value);
        } catch {
            return String(value);
        }
    }
}
