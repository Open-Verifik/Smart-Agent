import { CommonModule } from '@angular/common';
import { Component, computed, DestroyRef, effect, ElementRef, inject, NgZone, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { TranslocoPipe } from '@jsverse/transloco';
import {
    countryNameToIso,
    postmanCountryFlagUi,
    PostmanCountryFlagUi,
    resolveCountryNameFromIso,
} from './postman-country.util';
import {
    DEFAULT_POSTMAN_COUNTRY,
    catalogCountryScope,
    endpointMatchesCountryFilter,
} from './postman-catalog.util';
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
        return Array.isArray(parsed) ? parsed.filter((name) => typeof name === 'string' && name) : [];
    } catch {
        return [];
    }
};

@Component({
    selector: 'app-postman',
    standalone: true,
    imports: [
        CommonModule,
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
                        class="hover:bg-blue-500/20 active:bg-blue-500/40 transition-colors rounded-full flex-shrink-0 z-30 flex items-center justify-center w-3 h-full cursor-col-resize group"
                        (mousedown)="startSidebarDrag($event)"
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
                ></div>
                <!-- Drawer -->
                <div
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
                        >
                            <mat-icon>menu</mat-icon>
                        </button>
                    }

                    <div class="postman-flag-strip" [ngClass]="isMobile() ? 'min-w-0 flex-1' : 'max-w-[60%]'">
                        @if (pinnedCountries().length) {
                            <div class="postman-flag-pins">
                                @for (country of pinnedCountries(); track country.name) {
                                    <ng-container *ngTemplateOutlet="countryFlag; context: { $implicit: country, pinned: true }" />
                                }
                            </div>
                            <div class="postman-flag-divider" aria-hidden="true"></div>
                        }
                        <div class="postman-flag-scroll">
                            <div #flagScroller class="postman-flag-scroller" (scroll)="updateFlagScroll()">
                                @for (country of scrollCountries(); track country.name) {
                                    <ng-container *ngTemplateOutlet="countryFlag; context: { $implicit: country, pinned: false }" />
                                }
                            </div>
                            @if (canScrollLeft()) {
                                <button type="button" class="postman-flag-arrow postman-flag-arrow--left" (click)="scrollFlags(-1)" [attr.aria-label]="'postman.flags.scrollLeft' | transloco">
                                    <mat-icon>chevron_left</mat-icon>
                                </button>
                            }
                            @if (canScrollRight()) {
                                <button type="button" class="postman-flag-arrow postman-flag-arrow--right" (click)="scrollFlags(1)" [attr.aria-label]="'postman.flags.scrollRight' | transloco">
                                    <mat-icon>chevron_right</mat-icon>
                                </button>
                            }
                        </div>
                    </div>
                    <ng-template #countryFlag let-country let-pinned="pinned">
                        @let ui = countryFlagUi(country.name);
                        @let selected = selectedCountry() === country.name;
                        <div class="postman-flag" [attr.data-country]="country.name">
                            <button
                                type="button"
                                class="postman-flag-btn"
                                [class.postman-flag-btn--selected]="selected"
                                (click)="toggleCountry(country.name)"
                                [attr.aria-pressed]="selected"
                                [matTooltip]="country.name + ' (' + country.count + ')'"
                            >
                                @switch (ui.k) {
                                    @case ('img') {
                                        <img [src]="ui.src" alt="" width="21" height="21" decoding="async" loading="lazy" />
                                    }
                                    @case ('globe') {
                                        <mat-icon>public</mat-icon>
                                    }
                                    @case ('initials') {
                                        <span class="postman-flag-initials">{{ ui.text }}</span>
                                    }
                                }
                            </button>
                            <button
                                type="button"
                                class="postman-flag-pin"
                                [class.postman-flag-pin--on]="pinned"
                                (click)="togglePin(country.name, $event)"
                                matTooltipPosition="above"
                                [matTooltip]="(pinned ? 'postman.flags.unpin' : 'postman.flags.pin') | transloco: { country: country.name }"
                                [attr.aria-label]="(pinned ? 'postman.flags.unpin' : 'postman.flags.pin') | transloco: { country: country.name }"
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
                        >
                            <button
                                class="px-3 py-1.5 rounded-md transition-all text-xs font-medium"
                                [class.bg-slate-100]="paymentMethod() === 'credits'"
                                [class.text-slate-900]="paymentMethod() === 'credits'"
                                [class.dark:bg-slate-700]="paymentMethod() === 'credits'"
                                [class.dark:text-white]="paymentMethod() === 'credits'"
                                [class.text-slate-500]="paymentMethod() !== 'credits'"
                                [class.hover:text-slate-900]="paymentMethod() !== 'credits'"
                                (click)="setPaymentMethod('credits')"
                                matTooltip="Authenticate with JWT Token"
                            >
                                CREDITS
                            </button>
                            <div class="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-0.5"></div>
                            <button
                                class="px-3 py-1.5 rounded-md transition-all text-xs font-medium"
                                [class.bg-slate-100]="paymentMethod() === 'x402'"
                                [class.text-slate-900]="paymentMethod() === 'x402'"
                                [class.dark:bg-slate-700]="paymentMethod() === 'x402'"
                                [class.dark:text-white]="paymentMethod() === 'x402'"
                                [class.text-slate-500]="paymentMethod() !== 'x402'"
                                [class.hover:text-slate-900]="paymentMethod() !== 'x402'"
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
                        >
                            <button
                                class="p-1.5 px-3 rounded-md transition-all text-slate-500 hover:text-slate-900"
                                [class.bg-slate-100]="layout === 'horizontal'"
                                [class.text-slate-900]="layout === 'horizontal'"
                                [class.font-medium]="layout === 'horizontal'"
                                [class.dark:bg-slate-700]="layout === 'horizontal'"
                                [class.dark:text-white]="layout === 'horizontal'"
                                (click)="setLayout('horizontal')"
                                [matTooltip]="'postman.layout.splitVertical' | transloco"
                            >
                                <mat-icon class="!w-4 !h-4 !text-[16px]">view_column</mat-icon>
                            </button>
                            <div class="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                            <button
                                class="p-1.5 px-3 rounded-md transition-all text-slate-500 hover:text-slate-900"
                                [class.bg-slate-100]="layout === 'vertical'"
                                [class.text-slate-900]="layout === 'vertical'"
                                [class.font-medium]="layout === 'vertical'"
                                [class.dark:bg-slate-700]="layout === 'vertical'"
                                [class.dark:text-white]="layout === 'vertical'"
                                (click)="setLayout('vertical')"
                                [matTooltip]="'postman.layout.splitHorizontal' | transloco"
                            >
                                <mat-icon class="!w-4 !h-4 !text-[16px]">view_stream</mat-icon>
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
                            class="hover:bg-blue-500/20 active:bg-blue-500/40 transition-colors rounded-full flex-shrink-0 z-10 flex items-center justify-center"
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
            :host {
                position: absolute;
                inset: 0;
                display: flex;
                flex-direction: column;
                min-width: 0;
                min-height: 0;
                overflow: hidden;
            }

            .postman-flag-strip {
                display: flex;
                align-items: center;
                min-width: 0;
                gap: 0.35rem;
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
                gap: 0.25rem;
                overflow-x: auto;
                padding: 0.15rem 0.15rem;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }

            .postman-flag-scroller::-webkit-scrollbar {
                display: none;
                width: 0;
                height: 0;
            }

            .postman-flag {
                position: relative;
                flex-shrink: 0;
            }

            .postman-flag-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 2.275rem;
                height: 2.275rem;
                border-radius: 999px;
                border: 1px solid rgb(226 232 240);
                background: white;
                box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
                transition:
                    background-color 0.15s ease,
                    border-color 0.15s ease,
                    color 0.15s ease;

                img {
                    width: 1.3rem;
                    height: 1.3rem;
                    border-radius: 999px;
                    object-fit: cover;
                    box-shadow: 0 0 0 1px rgb(0 0 0 / 0.1);
                }

                mat-icon {
                    width: 1.3rem;
                    height: 1.3rem;
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

            .postman-flag-btn--selected {
                border-color: transparent;
                background: rgb(15 23 42);
                color: white;

                mat-icon,
                .postman-flag-initials {
                    color: white;
                }
            }

            :host-context(.dark) .postman-flag-btn:not(.postman-flag-btn--selected) {
                border-color: rgb(51 65 85);
                background: rgb(30 41 59);

                mat-icon,
                .postman-flag-initials {
                    color: rgb(203 213 225);
                }
            }

            .postman-flag-pin {
                position: absolute;
                right: -2px;
                bottom: -2px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                width: 14px;
                height: 14px;
                min-width: 0;
                padding: 0;
                overflow: hidden;
                border: 1px solid rgb(226 232 240);
                border-radius: 999px;
                background: white;
                color: rgb(148 163 184);
                line-height: 0;
                box-shadow: 0 1px 2px rgb(15 23 42 / 0.16);
                opacity: 0;
                cursor: pointer;

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
                .postman-flag-pin {
                    opacity: 1;
                }
            }

            .postman-flag-arrow {
                position: absolute;
                top: 50%;
                z-index: 2;
                display: grid;
                width: 1.35rem;
                height: 1.35rem;
                place-items: center;
                border: 1px solid rgb(226 232 240);
                border-radius: 999px;
                background: rgb(248 250 252);
                color: rgb(51 65 85);
                box-shadow: 0 1px 3px rgb(15 23 42 / 0.12);
                transform: translateY(-50%);

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
            .sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }))
    );

    readonly flagScroller = viewChild<ElementRef<HTMLElement>>('flagScroller');
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

    // Payment Method State
    paymentMethod = this._postmanService.paymentMethod;

    toggleCountry(country: string) {
        if (this.selectedCountry() === country) {
            return;
        }
        this.selectedCountry.set(country);
        this._postmanService.loadFeaturesForCountries(catalogCountryScope(country));

        if (this.isMobile()) {
            this.mobileSidebarOpen.set(false);
        }
        const iso = countryNameToIso(country);
        const queryParams: Record<string, string | null> = { country: iso };

        const currentEp = this._postmanService.selectedEndpoint();
        if (currentEp && !endpointMatchesCountryFilter(currentEp.country, country)) {
            queryParams['code'] = null;
            this._postmanService.selectedEndpoint.set(null);
        }

        this._router.navigate([], {
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
        const current = this.pinnedNames();
        const next = current.includes(name) ? current.filter((item) => item !== name) : [...current, name];
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
        this.canScrollRight.set(scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 2);
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
            onCleanup(() => observer.disconnect());
        });

        effect(() => {
            const selected = this.selectedCountry();
            const scrolling = this.scrollCountries();
            if (!selected || !scrolling.some((country) => country.name === selected)) return;
            queueMicrotask(() => requestAnimationFrame(() => this._scrollSelectedIntoView(selected)));
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
        const flag = Array.from(scroller.querySelectorAll<HTMLElement>('[data-country]')).find((el) => el.dataset.country === name);
        if (!flag) return;
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
            const codeParam = params?.get('code');
            if (!codeParam) {
                this._openedCodeFromUrl = null;
                return;
            }
            const isoParam = params?.get('country');
            const selectedCountry = this._postmanService.selectedCountry();
            const selectedIso = countryNameToIso(selectedCountry);
            if (isoParam && selectedIso && isoParam !== selectedIso) {
                return;
            }
            const endpoints = this._postmanService.visibleEndpoints();
            const found = endpoints.find((ep) => ep.code === codeParam);
            if (found) {
                if (selectedCountry && !endpointMatchesCountryFilter(found.country, selectedCountry)) {
                    return;
                }
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
            const isoParam = params?.get('country');
            const countryRows = this._postmanService.catalogCountries();
            const catalogEndpoints = countryRows.map((row) => ({ country: row.country }) as ApiEndpoint);

            if (!isoParam) {
                if (params?.get('code')) {
                    return;
                }
                if (this._postmanService.selectedCountry() !== DEFAULT_POSTMAN_COUNTRY) {
                    this._postmanService.selectedCountry.set(DEFAULT_POSTMAN_COUNTRY);
                }
                return;
            }

            const resolved =
                resolveCountryNameFromIso(isoParam, catalogEndpoints) ||
                resolveCountryNameFromIso(isoParam, this._postmanService.visibleEndpoints());
            if (resolved && this._postmanService.selectedCountry() !== resolved) {
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
            if (selectedCountry && !endpointMatchesCountryFilter(selected.country, selectedCountry)) {
                return;
            }

            const currentParams = this._queryParamMap();
            const desiredCountryIso = countryNameToIso(selected.country);
            const currentCode = currentParams?.get('code') ?? null;
            const currentCountry = currentParams?.get('country') ?? null;

            if (currentCode === selected.code && currentCountry === desiredCountryIso) {
                return;
            }

            const urlTree = this._router.createUrlTree([], {
                relativeTo: this._route,
                queryParams: { code: selected.code, country: desiredCountryIso },
                queryParamsHandling: 'merge',
            });
            const urlString = this._router.serializeUrl(urlTree);
            this._router.navigateByUrl(urlString, {
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
