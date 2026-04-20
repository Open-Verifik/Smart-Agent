import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { PostmanService } from './postman.service';
import { ApiEndpoint } from './postman.types';
import { RequestEditorComponent } from './request-editor/request-editor.component';
import { ResponseViewerComponent } from './response-viewer/response-viewer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

/** ISO 3166-1 alpha-2 (lowercase in URL) or "world" for globe icon — not emoji (Windows often shows "US" instead of 🇺🇸). */
const POSTMAN_COUNTRY_ISO: Record<string, 'world' | string> = {
    world: 'world',
    Global: 'world',
    Colombia: 'co',
    'United States': 'us',
    Peru: 'pe',
    Mexico: 'mx',
    Brazil: 'br',
    Chile: 'cl',
    Argentina: 'ar',
    Ecuador: 'ec',
    Venezuela: 've',
    Bolivia: 'bo',
    Uruguay: 'uy',
    Paraguay: 'py',
    Panama: 'pa',
    'Costa Rica': 'cr',
    Guatemala: 'gt',
    Honduras: 'hn',
    'El Salvador': 'sv',
    'Dominican Republic': 'do',
    'República Dominicana': 'do',
    Canada: 'ca',
    Spain: 'es',
    Israel: 'il',
    Nicaragua: 'ni',
};

type PostmanCountryFlagUi =
    | { k: 'img'; src: string }
    | { k: 'globe' }
    | { k: 'initials'; text: string };

function postmanCountryFlagUi(country: string): PostmanCountryFlagUi {
    const code = POSTMAN_COUNTRY_ISO[country];
    if (code === 'world') {
        return { k: 'globe' };
    }
    if (typeof code === 'string' && code.length >= 2) {
        return { k: 'img', src: `https://flagcdn.com/w40/${code}.png` };
    }
    return { k: 'initials', text: postmanCountryInitials(country) };
}

function postmanCountryInitials(name: string): string {
    const trim = name.trim();
    if (!trim) {
        return '?';
    }
    const words = trim.split(/\s+/).filter(Boolean);
    if (words.length === 1) {
        return trim.slice(0, 2).toUpperCase();
    }
    return (words[0][0] + words[1][0]).toUpperCase();
}

/**
 * Returns the lowercase ISO token (e.g. "es", "co", "world") for a display country name.
 * Falls back to `null` for unknown names so callers can drop the URL param defensively.
 */
function countryNameToIso(name: string | null | undefined): string | null {
    if (!name) return null;
    const code = POSTMAN_COUNTRY_ISO[name];
    return typeof code === 'string' && code.length > 0 ? code.toLowerCase() : null;
}

/**
 * Resolves an ISO token from the URL back to the canonical country name actually used
 * by the loaded endpoint catalog. Prefers a live match against `endpoints[*].country`
 * to avoid mismatches when several display names share an ISO; falls back to the
 * static reverse map derived from `POSTMAN_COUNTRY_ISO`.
 */
function resolveCountryNameFromIso(
    iso: string | null | undefined,
    endpoints: ApiEndpoint[]
): string | null {
    if (!iso) return null;
    const target = iso.trim().toLowerCase();
    if (!target) return null;

    for (const ep of endpoints) {
        if (!ep.country) continue;
        const epIso = countryNameToIso(ep.country);
        if (epIso && epIso === target) {
            return ep.country;
        }
    }

    for (const [name, code] of Object.entries(POSTMAN_COUNTRY_ISO)) {
        if (typeof code === 'string' && code.toLowerCase() === target) {
            return name;
        }
    }

    return null;
}

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
            class="flex h-screen w-full overflow-hidden bg-[#f8fafc] dark:bg-[#0f172a] select-none text-slate-900 dark:text-slate-100 font-sans"
        >
            <!-- Sidebar -->
            <div
                class="flex-shrink-0 transition-all duration-300 ease-in-out h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-20"
                [style.width.px]="sidebarWidth"
            >
                <postman-sidebar [collapsed]="sidebarCollapsed" (toggleCollapsed)="toggleSidebar()">
                </postman-sidebar>
            </div>

            <!-- Main Content Wrapper -->
            <div class="flex-1 flex flex-col h-full min-w-0 bg-[#f8fafc] dark:bg-[#0f172a]">
                <!-- Toolbar / Header -->
                <div class="h-16 flex items-center justify-between px-6 py-3 bg-transparent z-10">
                    <!-- Country Filters (Pill Style) -->
                    <div
                        class="flex items-center gap-1.5 overflow-x-auto scrollbar-hide mask-gradient max-w-[60%] p-1"
                    >
                        @for (country of countries(); track country.name) {
                            @let ui = countryFlagUi(country.name);
                            @let selected = selectedCountry() === country.name;
                            <button
                                type="button"
                                (click)="toggleCountry(country.name)"
                                [class.bg-white]="!selected"
                                [class.shadow-sm]="!selected"
                                [class.border-slate-200]="!selected"
                                [class.dark:bg-slate-800]="!selected"
                                [class.bg-slate-900]="selected"
                                [class.text-white]="selected"
                                [class.border-transparent]="selected"
                                class="h-9 w-9 min-w-[2.25rem] flex items-center justify-center rounded-full border transition-all duration-200 relative group flex-shrink-0 aspect-square dark:border-slate-700"
                                [matTooltip]="country.name + ' (' + country.count + ')'"
                            >
                                @switch (ui.k) {
                                    @case ('img') {
                                        <img
                                            [src]="ui.src"
                                            alt=""
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            loading="lazy"
                                            class="h-5 w-5 rounded-full object-cover shadow-sm ring-1 ring-black/10 dark:ring-white/15"
                                        />
                                    }
                                    @case ('globe') {
                                        <mat-icon
                                            class="!w-5 !h-5 !text-[18px]"
                                            [class.text-white]="selected"
                                            [class.text-slate-600]="!selected"
                                            [class.dark:text-slate-300]="!selected"
                                        >
                                            public
                                        </mat-icon>
                                    }
                                    @case ('initials') {
                                        <span
                                            class="text-[9px] font-bold leading-tight text-center px-0.5 max-w-full truncate"
                                            [class.text-white]="selected"
                                            [class.text-slate-700]="!selected"
                                            [class.dark:text-slate-200]="!selected"
                                        >
                                            {{ ui.text }}
                                        </span>
                                    }
                                }
                            </button>
                        }
                    </div>

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

                <!-- Split Content Area -->
                <div
                    class="flex-1 flex min-w-0 min-h-0 p-4 pt-0 gap-4"
                    [class.flex-row]="layout === 'horizontal'"
                    [class.flex-col]="layout === 'vertical'"
                    (mousemove)="onDrag($event)"
                    (mouseup)="stopDrag()"
                    (mouseleave)="stopDrag()"
                >
                    <!-- Request Editor Panel -->
                    <div
                        [class.h-full]="layout === 'horizontal'"
                        [class.w-full]="layout === 'vertical'"
                        [style.width.%]="layout === 'horizontal' ? requestPanelSize : 100"
                        [style.height.%]="layout === 'vertical' ? requestPanelSize : 100"
                        class="min-w-0 min-h-0 relative overflow-hidden flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
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
                            startDrag($event, layout === 'horizontal' ? 'horizontal' : 'vertical')
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
                        class="flex-1 min-w-0 min-h-0 overflow-hidden flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
                    >
                        <postman-response-viewer></postman-response-viewer>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class PostmanComponent {
    private _postmanService = inject(PostmanService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);

    sidebarCollapsed = false;
    sidebarWidth = 280; // Expanded width

    // Layout State
    layout: 'horizontal' | 'vertical' = 'horizontal';

    // Resizable Split (Size in Percentage)
    requestPanelSize = 50;
    isDragging = false;
    dragMode: 'horizontal' | 'vertical' | null = null;

    // Flag to prevent cyclic updates
    private _isNavigating = false;

    selectedCountry = this._postmanService.selectedCountry;

    countries = computed(() => {
        const endpoints = this._postmanService.endpoints();
        const counts: Record<string, number> = {};

        endpoints.forEach((ep) => {
            if (ep.country) {
                counts[ep.country] = (counts[ep.country] || 0) + 1;
            }
        });

        return Object.entries(counts)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    });

    // Payment Method State
    paymentMethod = this._postmanService.paymentMethod;

    toggleCountry(country: string) {
        const next = this.selectedCountry() === country ? null : country;
        this.selectedCountry.set(next);
        const iso = next ? countryNameToIso(next) : null;

        const queryParams: Record<string, string | null> = { country: iso };

        /**
         * Switching to a country whose filter excludes the active endpoint
         * would leave a stale `code=...` in the URL. Drop both the URL param
         * and the in-memory selection so the request editor resets cleanly.
         */
        if (next) {
            const currentEp = this._postmanService.selectedEndpoint();
            if (currentEp?.country && currentEp.country !== next) {
                queryParams['code'] = null;
                this._postmanService.selectedEndpoint.set(null);
            }
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

    private _queryParamMap = toSignal(this._route.queryParamMap, {
        initialValue: this._route.snapshot.queryParamMap,
    });

    constructor() {
        // Effect: Sync URL code param -> Selected Endpoint (route is source of truth for code)
        effect(
            () => {
                const params = this._queryParamMap();
                const codeParam = params?.get('code');
                const endpoints = this._postmanService.endpoints();
                if (endpoints.length > 0 && codeParam) {
                    const found = endpoints.find((ep) => ep.code === codeParam);
                    // Skip re-selecting if the endpoint is already active. Re-selecting
                    // calls `selectEndpoint` which clears the current `response`, and we
                    // would otherwise wipe the user's last result whenever the endpoint
                    // catalog is reloaded (e.g. after a credits refresh).
                    if (found && this._postmanService.selectedEndpoint()?.code !== found.code) {
                        this._postmanService.selectEndpoint(found);
                    }
                }
            },
            { allowSignalWrites: true }
        );

        // Effect: Sync URL country param -> selectedCountry, gated on loaded catalog
        effect(
            () => {
                const params = this._queryParamMap();
                const isoParam = params?.get('country');
                const endpoints = this._postmanService.endpoints();
                if (endpoints.length === 0) return;

                if (!isoParam) {
                    if (this._postmanService.selectedCountry() !== null) {
                        this._postmanService.selectedCountry.set(null);
                    }
                    return;
                }

                const resolved = resolveCountryNameFromIso(isoParam, endpoints);
                if (resolved) {
                    if (this._postmanService.selectedCountry() !== resolved) {
                        this._postmanService.selectedCountry.set(resolved);
                    }
                } else if (this._postmanService.selectedCountry() !== null) {
                    this._postmanService.selectedCountry.set(null);
                }
            },
            { allowSignalWrites: true }
        );

        // Effect: Selected Endpoint -> Sync URL (code + country together, so the
        // country param always matches the endpoint and we self-heal mismatches like
        // `?code=spain_*&country=pa` -> `?code=spain_*&country=es`).
        effect(() => {
            const selected = this._postmanService.selectedEndpoint();
            if (!selected?.code) return;

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
    }

    toggleSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        this.sidebarWidth = this.sidebarCollapsed ? 64 : 256;
    }

    setLayout(mode: 'horizontal' | 'vertical') {
        this.layout = mode;
    }

    startDrag(event: MouseEvent, mode: 'horizontal' | 'vertical') {
        event.preventDefault();
        this.isDragging = true;
        this.dragMode = mode;
    }

    stopDrag() {
        this.isDragging = false;
        this.dragMode = null;
    }

    onDrag(event: MouseEvent) {
        if (!this.isDragging) return;

        // Use dragMode or fallback to layout
        const mode = this.dragMode || this.layout;

        // We need the container dimensions.
        // The event is on the container (mousemove), so currentTarget is the container.
        const container = event.currentTarget as HTMLElement;
        const rect = container.getBoundingClientRect();

        let newSizePercent = 50;

        if (mode === 'horizontal') {
            const offsetX = event.clientX - rect.left;
            newSizePercent = (offsetX / rect.width) * 100;
        } else {
            const offsetY = event.clientY - rect.top;
            newSizePercent = (offsetY / rect.height) * 100;
        }

        // Clamp
        if (newSizePercent < 20) newSizePercent = 20;
        if (newSizePercent > 80) newSizePercent = 80;

        this.requestPanelSize = newSizePercent;
    }
}
