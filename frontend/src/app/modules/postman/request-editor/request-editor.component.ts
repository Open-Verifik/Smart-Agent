import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslocoService } from '@jsverse/transloco';
import { AgentWalletService } from '../../chat/services/agent-wallet.service';
import {
    ClientSubscription,
    SubscriptionPlan,
} from '../../subscription-plans/subscription-plan.types';
import { SubscriptionService } from '../../subscription-plans/subscription.service';
import { PostmanService } from '../postman.service';
import { ApiEndpoint } from '../postman.types';
import { arePostmanRequestInputsSatisfied, buildPostmanEffectiveUrl } from '../postman-url.util';
import { AboutEndpointComponent } from './about-endpoint.component';

import { TranslocoPipe } from '@jsverse/transloco';

/**
 * Stable UI string for numeric prices (avoids float artifacts like 0.3000000005).
 */
function formatPostmanPriceForDisplay(value: number, maxDecimals = 6): string {
    if (!Number.isFinite(value)) {
        return '0';
    }
    return parseFloat(value.toFixed(maxDecimals)).toString();
}

@Component({
    selector: 'postman-request-editor',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        TranslocoPipe,
        AboutEndpointComponent,
    ],
    host: { class: 'block h-full' },
    template: `
        <div
            class="flex flex-col h-full bg-white dark:bg-slate-900"
            *ngIf="endpoint(); else noSelection"
        >
            <!-- Top Bar: Method & URL & Send -->
            <div *ngIf="endpoint() as ep" class="px-4 pt-4 pb-2 select-text">
                <ng-container *ngIf="ep.code; else defaultHeader">
                    <h2 class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                        <ng-container *ngIf="ep.layoutDisplayName?.trim(); else catalogTitle">
                            {{ ep.layoutDisplayName?.trim() }}
                        </ng-container>
                        <ng-template #catalogTitle>
                            {{ 'appFeatures.' + ep.code + '.title' | transloco }}
                        </ng-template>
                    </h2>
                    <p class="text-sm text-slate-500 dark:text-slate-400">
                        {{ 'appFeatures.' + ep.code + '.description' | transloco }}
                    </p>
                </ng-container>
                <ng-template #defaultHeader>
                    <h2 class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                        {{ ep.label }}
                    </h2>
                    <p class="text-sm text-slate-500 dark:text-slate-400" *ngIf="ep.description">
                        {{ ep.description }}
                    </p>
                </ng-template>

                @if (priceDisplay(); as pd) {
                    <div
                        class="mt-3 inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
                    >
                        <div
                            class="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm dark:bg-slate-900 dark:text-violet-400"
                        >
                            <mat-icon class="icon-size-4">sell</mat-icon>
                        </div>
                        <div class="leading-tight">
                            <div
                                class="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400"
                            >
                                {{ 'postman.requestEditor.costPerRequest' | transloco }}
                            </div>
                            <div class="text-sm font-semibold text-slate-700 dark:text-slate-100">
                                @switch (pd.type) {
                                    @case ('credits') {
                                        {{ pd.value }}
                                        {{ 'postman.requestEditor.credits' | transloco }}
                                    }
                                    @case ('avax') {
                                        {{ pd.value }} AVAX
                                    }
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>

            <!-- Request Bar -->
            <div class="p-4 pt-2">
                <div class="flex items-center gap-2">
                    <div
                        class="flex items-center rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm dark:border-slate-600 dark:bg-slate-800 flex-1"
                    >
                        <span class="mr-3 font-bold text-blue-600">{{ endpoint()?.method }}</span>
                        <input
                            type="text"
                            readonly
                            [value]="effectiveRequestUrl()"
                            class="w-full min-w-[300px] bg-transparent text-slate-700 outline-none dark:text-slate-200"
                        />
                    </div>

                    <button
                        mat-flat-button
                        color="primary"
                        (click)="sendRequest()"
                        [disabled]="isLoading() || !canSendRequest()"
                    >
                        <span *ngIf="!isLoading()">{{
                            'postman.requestEditor.send' | transloco
                        }}</span>
                        <span *ngIf="isLoading()">{{
                            'postman.requestEditor.sending' | transloco
                        }}</span>
                    </button>
                </div>
            </div>

            <!-- Tabs: About, Params, Headers, Body -->
            <div class="flex-1 overflow-hidden flex flex-col">
                <mat-tab-group class="h-full">
                    <!-- About -->
                    <mat-tab
                        [label]="'postman.requestEditor.tabs.about' | transloco"
                        *ngIf="showAboutTab()"
                    >
                        <div class="flex flex-col h-full overflow-hidden">
                            @if (endpoint()?.docs) {
                                <postman-about-endpoint
                                    class="flex-1 min-h-0"
                                    [docs]="endpoint()?.docs"
                                    [endpoint]="endpoint()"
                                ></postman-about-endpoint>
                            } @else {
                                <div
                                    class="flex-1 overflow-y-auto p-6 bg-slate-50 dark:bg-slate-900/50"
                                >
                                    <div
                                        class="prose prose-sm dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-xl select-text"
                                        [innerHTML]="renderMarkdown(documentationContent() || '')"
                                    ></div>
                                </div>
                            }
                        </div>
                    </mat-tab>

                    <!-- Params -->
                    <mat-tab [label]="'postman.requestEditor.tabs.params' | transloco">
                        <div class="p-4 overflow-y-auto h-full space-y-4">
                            <div
                                class="flex items-center gap-2 mb-2 font-semibold text-xs uppercase text-slate-500"
                            >
                                <div class="flex-1">
                                    {{ 'postman.requestEditor.params.key' | transloco }}
                                </div>
                                <div class="flex-1">
                                    {{ 'postman.requestEditor.params.value' | transloco }}
                                </div>
                                <div class="flex-1">
                                    {{ 'postman.requestEditor.params.description' | transloco }}
                                </div>
                                <div class="w-8"></div>
                                <!-- Spacer for delete button -->
                            </div>
                            <div
                                *ngFor="let param of endpoint()?.params; let i = index"
                                class="flex gap-2 items-start"
                            >
                                <input
                                    class="flex-1 min-w-0 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                    [(ngModel)]="param.key"
                                    [placeholder]="
                                        'postman.requestEditor.params.keyPlaceholder' | transloco
                                    "
                                />
                                @if (param.enum?.length) {
                                    <select
                                        class="postman-param-value-select flex-1 min-w-0 px-3 py-2 pr-8 bg-slate-50 border border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer"
                                        [(ngModel)]="param.value"
                                    >
                                        @for (opt of paramValueOptions(param); track opt) {
                                            <option [value]="opt">{{ opt }}</option>
                                        }
                                    </select>
                                } @else {
                                    <input
                                        class="flex-1 min-w-0 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                        [(ngModel)]="param.value"
                                        [placeholder]="
                                            'postman.requestEditor.params.valuePlaceholder'
                                                | transloco
                                        "
                                    />
                                }
                                <input
                                    class="flex-1 min-w-0 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700 text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                    [(ngModel)]="param.description"
                                    [placeholder]="
                                        'postman.requestEditor.params.descriptionPlaceholder'
                                            | transloco
                                    "
                                />
                                <button
                                    mat-icon-button
                                    (click)="removeParam(i)"
                                    class="flex-shrink-0 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-red-500 mt-0.5"
                                >
                                    <mat-icon class="icon-size-4">delete</mat-icon>
                                </button>
                            </div>
                            <div class="pt-4">
                                <button
                                    mat-stroked-button
                                    (click)="addParam()"
                                    class="!rounded-lg !border-slate-200 text-slate-600"
                                >
                                    <mat-icon class="icon-size-4 mr-1">add</mat-icon>
                                    {{ 'postman.requestEditor.params.addParam' | transloco }}
                                </button>
                            </div>
                        </div>
                    </mat-tab>

                    <!-- Headers -->
                    <mat-tab [label]="'postman.requestEditor.tabs.headers' | transloco">
                        <div class="p-4 overflow-y-auto h-full space-y-4">
                            <div
                                class="flex items-center gap-2 mb-2 font-semibold text-xs uppercase text-slate-500 tracking-wider"
                            >
                                <div class="flex-1 pl-1">
                                    {{ 'postman.requestEditor.headers.key' | transloco }}
                                </div>
                                <div class="flex-1 pl-1">
                                    {{ 'postman.requestEditor.headers.value' | transloco }}
                                </div>
                                <div class="w-8"></div>
                                <!-- Spacer for delete button -->
                            </div>
                            <div
                                *ngFor="let header of endpoint()?.headers; let i = index"
                                class="flex gap-2 items-center"
                            >
                                <input
                                    class="flex-1 min-w-0 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                    [(ngModel)]="header.key"
                                    [placeholder]="
                                        'postman.requestEditor.headers.keyPlaceholder' | transloco
                                    "
                                />
                                <input
                                    class="flex-1 min-w-0 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                    [(ngModel)]="header.value"
                                    [placeholder]="
                                        'postman.requestEditor.headers.valuePlaceholder' | transloco
                                    "
                                />
                                <button
                                    mat-icon-button
                                    (click)="removeHeader(i)"
                                    class="flex-shrink-0 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-red-500"
                                >
                                    <mat-icon class="icon-size-4">delete</mat-icon>
                                </button>
                            </div>
                            <div class="pt-4">
                                <button
                                    mat-stroked-button
                                    (click)="addHeader()"
                                    class="!rounded-lg !border-slate-200 text-slate-600"
                                >
                                    <mat-icon class="icon-size-4 mr-1">add</mat-icon>
                                    {{ 'postman.requestEditor.headers.addHeader' | transloco }}
                                </button>
                            </div>
                        </div>
                    </mat-tab>

                    <!-- Body -->
                    <mat-tab
                        [label]="'postman.requestEditor.tabs.body' | transloco"
                        *ngIf="endpoint()?.method !== 'GET'"
                    >
                        <div class="p-4 h-full flex flex-col">
                            <div
                                class="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider"
                            >
                                {{ 'postman.requestEditor.body.jsonBody' | transloco }}
                            </div>
                            <textarea
                                class="flex-1 w-full p-4 font-mono text-sm bg-slate-50 border border-slate-200 rounded-xl dark:bg-slate-800 dark:border-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                [ngModel]="bodyString"
                                (ngModelChange)="updateBody($event)"
                            ></textarea>
                        </div>
                    </mat-tab>
                </mat-tab-group>
            </div>
        </div>

        <ng-template #noSelection>
            <div class="h-full flex flex-col items-center justify-center text-slate-400">
                <mat-icon class="icon-size-16 mb-4 opacity-50">api</mat-icon>
                <div class="text-lg font-medium">
                    {{ 'postman.requestEditor.selectEndpoint' | transloco }}
                </div>
            </div>
        </ng-template>

        <!-- x402 Payment Confirmation Modal -->
        @if (showPaymentModal()) {
            <div
                class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                (click)="cancelPayment()"
            >
                <div
                    class="w-full max-w-sm mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden"
                    (click)="$event.stopPropagation()"
                >
                    <!-- Header with Gradient -->
                    <div class="h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                    <div class="p-6">
                        <!-- Icon & Title -->
                        <div class="text-center mb-6">
                            <div
                                class="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full mx-auto flex items-center justify-center mb-3 ring-4 ring-indigo-50 dark:ring-indigo-900/20"
                            >
                                <mat-icon>account_balance_wallet</mat-icon>
                            </div>
                            <h2 class="text-xl font-bold text-slate-900 dark:text-white">
                                Confirm Payment
                            </h2>
                            <p class="text-sm text-slate-500 dark:text-slate-400">
                                x402 Protocol • Avalanche Fuji
                            </p>
                        </div>

                        <!-- Checkout Summary Card -->
                        <div
                            class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 mb-6 border border-slate-100 dark:border-slate-800"
                        >
                            <!-- Service Info -->
                            <div class="flex justify-between items-center mb-4 text-sm">
                                <span class="text-slate-500 dark:text-slate-400">Service</span>
                                <span class="font-medium text-slate-700 dark:text-slate-200">{{
                                    endpoint()?.label
                                }}</span>
                            </div>

                            <div class="h-px bg-slate-200 dark:bg-slate-700 my-3"></div>

                            <!-- Current Balance -->
                            <div class="flex justify-between items-center mb-2 text-sm">
                                <span class="text-slate-500 dark:text-slate-400"
                                    >Wallet Balance</span
                                >
                                <span class="font-mono text-slate-700 dark:text-slate-300"
                                    >{{ formatBalance(walletBalance()) }} AVAX</span
                                >
                            </div>

                            <!-- Payment Amount -->
                            <div class="flex justify-between items-center mb-2 text-sm">
                                <span class="text-slate-500 dark:text-slate-400">Total</span>
                                <span class="font-mono font-semibold text-red-500"
                                    >-{{ pendingPaymentAmount() }} AVAX</span
                                >
                            </div>

                            <div class="h-px bg-slate-200 dark:bg-slate-700 my-3"></div>

                            <!-- Remaining Balance -->
                            <div class="flex justify-between items-center">
                                <span class="font-semibold text-slate-700 dark:text-slate-200"
                                    >Balance After</span
                                >
                                <span
                                    class="font-mono font-bold text-indigo-600 dark:text-indigo-400"
                                    >{{ getRemainingBalance() }} AVAX</span
                                >
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="space-y-3">
                            <button
                                mat-flat-button
                                color="primary"
                                class="w-full !h-12 !rounded-xl !text-base shadow-lg shadow-indigo-500/20"
                                [disabled]="isProcessingPayment() || !canAfford()"
                                (click)="executePayment()"
                            >
                                <span
                                    *ngIf="!isProcessingPayment() && canAfford()"
                                    class="font-medium"
                                    >Pay {{ pendingPaymentAmount() }} AVAX</span
                                >
                                <span *ngIf="!canAfford()" class="font-medium text-red-200"
                                    >Insufficient Balance</span
                                >
                                <div
                                    *ngIf="isProcessingPayment()"
                                    class="flex items-center justify-center gap-2"
                                >
                                    <mat-progress-spinner
                                        diameter="20"
                                        mode="indeterminate"
                                        class="!text-white"
                                    ></mat-progress-spinner>
                                    <span>Processing...</span>
                                </div>
                            </button>

                            <button
                                mat-stroked-button
                                class="w-full !h-12 !rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                                [disabled]="isProcessingPayment()"
                                (click)="cancelPayment()"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        }
    `,
    styles: [
        `
            ::ng-deep .mat-mdc-tab-group {
                height: 100%;
            }
            ::ng-deep .mat-mdc-tab-body-wrapper {
                height: 100%;
                overflow-y: auto;
            }
            ::ng-deep .mat-mdc-tab-body {
                height: 100%;
                display: flex;
                flex-direction: column;
            }
            ::ng-deep .mat-mdc-tab-body-content {
                height: 100%;
                overflow: hidden;
            }
            select.postman-param-value-select {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2394a3b8'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 0.625rem center;
                background-size: 1rem 1rem;
            }
            :host-context(.dark) select.postman-param-value-select {
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2364748b'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
            }
            select.postman-param-value-select::-ms-expand {
                display: none;
            }
        `,
    ],
})
export class RequestEditorComponent {
    private _postmanService = inject(PostmanService);
    private _httpClient = inject(HttpClient);
    private _walletService = inject(AgentWalletService);
    private _subscriptionService = inject(SubscriptionService);
    translocoService = inject(TranslocoService);

    endpoint = this._postmanService.selectedEndpoint;
    isLoading = this._postmanService.isLoading;
    documentationContent = signal<string>('');
    currentSubscription = signal<ClientSubscription | null>(null);

    // Payment method state - connected to service
    paymentMethod = this._postmanService.paymentMethod;
    showPaymentModal = signal(false);
    isProcessingPayment = signal(false);
    pendingPaymentAmount = signal<string>('0'); // String to preserve precision
    paymentReceiver = signal<string>(''); // Wallet address from backend
    walletBalance = signal<string>('0'); // Current wallet balance

    bodyString = '';

    /**
     * Options for enum-backed params; if current value is not in the enum (legacy state), prepend it so the select stays valid.
     */
    /**
     * URL bar: reflects path-param endpoints (e.g. Bogotá taxi `.../plate/:plate`)
     * once required segments are filled; otherwise the catalog base URL.
     */
    effectiveRequestUrl(): string {
        const ep = this.endpoint();
        if (!ep) {
            return '';
        }
        return buildPostmanEffectiveUrl(ep);
    }

    paramValueOptions(param: NonNullable<ApiEndpoint['params']>[number]): string[] {
        const list = param.enum;
        if (!list?.length) {
            return [];
        }
        const v = (param.value ?? '').trim();
        if (v && !list.includes(v)) {
            return [v, ...list];
        }
        return [...list];
    }

    priceDisplay = computed(() => {
        const ep = this.endpoint();
        const method = this.paymentMethod();
        if (!ep) return null;
        if (method === 'x402') {
            const cost = ep.estimatedCost ?? 0;
            return { type: 'avax' as const, value: formatPostmanPriceForDisplay(cost, 5) };
        }
        const basePrice = ep.estimatedCost ?? 0;
        const sub = this.currentSubscription();
        const plan = sub?.subscriptionPlan;
        const effective = this.getEffectivePrice(basePrice, plan);
        return { type: 'credits' as const, value: formatPostmanPriceForDisplay(effective) };
    });

    /** About tab is visible when the endpoint has structured docs or legacy markdown content. */
    showAboutTab = computed(() => {
        const ep = this.endpoint();
        if (ep?.docs && Object.keys(ep.docs).length) return true;
        return !!this.documentationContent();
    });

    constructor() {
        this._subscriptionService.getMySubscription().subscribe({
            next: (res) => this.currentSubscription.set(res?.data ?? null),
            error: () => this.currentSubscription.set(null),
        });

        // Effect to handle 402 Payment Required errors from backend
        effect(() => {
            const error = this._postmanService.error();
            // Check if error is 402 Payment Required
            if (error && error.status === 402) {
                // Backend returns details in error.error object
                // { wallet: "0x...", amount: "0.001", price: "0.001 AVAX", ... }
                const details = error.error;
                if (details && details.wallet && details.amount) {
                    console.log('Payment Required:', details);

                    this.pendingPaymentAmount.set(details.amount);
                    this.paymentReceiver.set(details.wallet);

                    // Fetch current balance before showing modal
                    this.fetchBalance().then(() => {
                        this.showPaymentModal.set(true);
                    });
                }
            }
        });

        // Effect to clear payment header on successful response
        effect(() => {
            const res = this._postmanService.response();
            // If response is successful (2xx) and we are using x402
            if (res && res.status >= 200 && res.status < 300 && this.paymentMethod() === 'x402') {
                const ep = this.endpoint();
                if (ep && ep.headers) {
                    const header = ep.headers.find((h) => h.key === 'x-payment-tx');
                    if (header && header.value) {
                        console.log('Clearing used payment transaction header');
                        header.value = '';
                    }
                }
            }
        });

        effect((onCleanup) => {
            const ep = this.endpoint();

            // Handle Body
            if (ep && ep.body) {
                this.bodyString = JSON.stringify(ep.body, null, 2);
            } else {
                this.bodyString = '';
            }

            // Handle Documentation Fetching
            if (ep && ep.documentationUrl) {
                const loadDocs = (lang: string) => {
                    const url = ep.documentationUrl!;
                    // Assume url structure like: docs/path/to/file.md
                    // transform to: docs/path/to/{lang}/file.md
                    // We need to insert the lang code before the filename
                    const parts = url.split('/');
                    const filename = parts.pop();
                    const basePath = parts.join('/');

                    // Supported langs: en, es. Default to en if not es.
                    const targetLang = lang === 'es' ? 'es' : 'en';

                    const finalUrl = `${basePath}/${targetLang}/${filename}`;

                    this._httpClient.get(finalUrl, { responseType: 'text' }).subscribe({
                        next: (content) => this.documentationContent.set(content),
                        error: () => {
                            // Fallback to en if specific lang fails (though we default above)
                            // This double check helps if e.g. 'fr' is requested, it defaults to 'en', but if 'en' fails...
                            if (targetLang !== 'en') {
                                const fallbackUrl = `${basePath}/en/${filename}`;
                                this._httpClient
                                    .get(fallbackUrl, { responseType: 'text' })
                                    .subscribe({
                                        next: (c) => this.documentationContent.set(c),
                                        error: () => this.documentationContent.set(''),
                                    });
                            } else {
                                this.documentationContent.set('');
                            }
                        },
                    });
                };

                // Initial Load
                loadDocs(this.translocoService.getActiveLang());

                // Subscribe to lang changes
                const sub = this.translocoService.langChanges$.subscribe((lang) => {
                    loadDocs(lang);
                });

                onCleanup(() => {
                    sub.unsubscribe();
                });
            } else {
                this.documentationContent.set('');
            }
        });

        // Effect to update headers based on payment method
        effect(() => {
            const ep = this.endpoint();
            const method = this.paymentMethod();

            if (!ep || !ep.headers) return;

            if (method === 'x402') {
                // Remove Authorization header and add wallet headers
                ep.headers = ep.headers.filter((h) => h.key !== 'Authorization');

                // Add wallet address header if not present
                if (!ep.headers.find((h) => h.key === 'x-wallet-address')) {
                    ep.headers.push({
                        key: 'x-wallet-address',
                        value: this._walletService.getAddress(),
                    });
                }

                // Add payment tx header if not present (empty initially)
                if (!ep.headers.find((h) => h.key === 'x-payment-tx')) {
                    ep.headers.push({
                        key: 'x-payment-tx',
                        value: '',
                    });
                }
            } else {
                // JWT mode - remove wallet headers and add Authorization
                ep.headers = ep.headers.filter(
                    (h) => h.key !== 'x-wallet-address' && h.key !== 'x-payment-tx'
                );

                // Add Authorization header if not present
                if (!ep.headers.find((h) => h.key === 'Authorization')) {
                    const token = localStorage.getItem('accessToken');
                    ep.headers.push({
                        key: 'Authorization',
                        value: token ? `Bearer ${token}` : 'Bearer <token>',
                    });
                }
            }
        });
    }

    updateBody(value: string) {
        this.bodyString = value;
        try {
            this.endpoint()!.body = JSON.parse(value);
        } catch (e) {
            // Invalid JSON, ignore for now or show error
        }
    }

    addParam() {
        if (!this.endpoint()!.params) {
            this.endpoint()!.params = [];
        }
        this.endpoint()!.params!.push({
            key: '',
            value: '',
            description: '',
            type: 'string', // Default type
            required: false, // Default required status
        });
    }

    removeParam(index: number) {
        this.endpoint()!.params!.splice(index, 1);
    }

    addHeader() {
        if (!this.endpoint()!.headers) {
            this.endpoint()!.headers = [];
        }
        this.endpoint()!.headers!.push({ key: '', value: '' });
    }

    removeHeader(index: number) {
        this.endpoint()!.headers!.splice(index, 1);
    }

    canSendRequest(): boolean {
        return arePostmanRequestInputsSatisfied(this.endpoint());
    }

    sendRequest() {
        // Just send the request. If x402 is selected and no payment provided,
        // the backend will return 402, which we catch in the effect above.
        if (!this.canSendRequest()) {
            return;
        }
        this._postmanService.sendRequest(this.endpoint()!);
    }

    cancelPayment() {
        this.showPaymentModal.set(false);
        this.isProcessingPayment.set(false);
    }

    async executePayment() {
        const ep = this.endpoint();
        if (!ep) return;

        this.isProcessingPayment.set(true);

        try {
            // Execute payment via wallet service
            const amount = this.pendingPaymentAmount();
            const contractAddress = this.paymentReceiver(); // Address from backend 402 response

            if (!contractAddress) {
                throw new Error('No payment receiver address found');
            }

            // Use backend provided amount directly (it is already formatted as string)
            const serviceId = ep.code || 'api-call';
            const requestId = `req_${Date.now()}`;

            const { tx, signerAddress } = await this._walletService.payForService(
                contractAddress,
                serviceId,
                requestId,
                amount
            );

            console.log('Payment transaction sent:', tx.hash);

            // Wait for confirmation
            await tx.wait();
            console.log('Payment confirmed!');

            // Inject Payment Headers
            // Use the address that actually signed the transaction
            const walletAddress = signerAddress;

            if (!ep.headers) {
                ep.headers = [];
            }

            // Remove old payment headers
            ep.headers = ep.headers.filter(
                (h) => h.key !== 'x-payment-tx' && h.key !== 'x-wallet-address'
            );

            // Add new payment headers
            ep.headers.push({ key: 'x-payment-tx', value: tx.hash });
            ep.headers.push({ key: 'x-wallet-address', value: signerAddress });
            ep.headers.push({ key: 'x-payment-amount', value: amount });

            // Close modal
            this.showPaymentModal.set(false);
            this.isProcessingPayment.set(false);

            // Retry the request with the payment proof
            this._postmanService.sendRequest(ep);
        } catch (error: any) {
            console.error('Payment error:', error);

            this.isProcessingPayment.set(false);
            alert('Payment failed: ' + (error.message || 'Unknown error'));
        }
    }

    async fetchBalance() {
        try {
            const balance = await this._walletService.getBalance();
            this.walletBalance.set(balance);
        } catch (e) {
            console.error('Failed to fetch balance', e);
            this.walletBalance.set('0');
        }
    }

    getRemainingBalance(): string {
        const current = parseFloat(this.walletBalance());
        const cost = parseFloat(this.pendingPaymentAmount());
        const remaining = current - cost;
        return remaining > 0 ? remaining.toFixed(5) : '0.00000';
    }

    canAfford(): boolean {
        const current = parseFloat(this.walletBalance());
        const cost = parseFloat(this.pendingPaymentAmount());
        return current >= cost;
    }

    formatBalance(balance: string): string {
        return parseFloat(balance).toFixed(5);
    }

    getEffectivePrice(basePrice: number, plan: SubscriptionPlan | undefined): number {
        if (!basePrice || !plan?.discount) return basePrice;
        const d = plan.discount;
        const discount = d.discount ?? 0;
        if (!discount) return basePrice;
        if (d.type === 'amount') {
            return Math.max(0, basePrice - discount);
        }
        return Math.max(0, basePrice * (1 - discount / 100));
    }

    renderMarkdown(text: string): string {
        if (!text) return '';

        // 1. Placeholder for Code Blocks to prevent interference
        const codeBlocks: string[] = [];
        let processed = text.replace(/```([\s\S]*?)```/gim, (match, content) => {
            codeBlocks.push(content);
            return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
        });

        // 2. Placeholder for Inline Code
        const inlineCodes: string[] = [];
        processed = processed.replace(/`([^`]+)`/gim, (match, content) => {
            inlineCodes.push(content);
            return `__INLINE_CODE_${inlineCodes.length - 1}__`;
        });

        // 3. Simple Table Parser
        // Remove separator rows like |---|---|
        processed = processed.replace(/^\|?(\s*:?-+:?\s*\|)+\s*$/gim, '');

        // Parse rows | cell | cell |
        processed = processed.replace(/^\|(.*)\|$/gim, (match, content) => {
            const cells = content
                .split('|')
                .map((c: string) => c.trim())
                .filter((c: string) => c !== ''); // simple filter
            // If it looks like a table row (has cells)
            if (cells.length > 0) {
                const rowHtml = cells
                    .map(
                        (c: string) =>
                            `<td class="border px-4 py-2 border-slate-200 dark:border-slate-700">${c}</td>`
                    )
                    .join('');
                return `<tr>${rowHtml}</tr>`;
            }
            return match;
        });

        // Wrap adjacent text rows that look like <tr> in a <table>
        // Grouping adjacent <tr>...</tr> lines
        // This is a naive implementation but works for simple blocks
        let inTable = false;
        const lines = processed.split('\n');
        let outputLines = [];

        for (let line of lines) {
            if (line.trim().startsWith('<tr>')) {
                if (!inTable) {
                    outputLines.push(
                        '<div class="overflow-x-auto my-4"><table class="border-collapse w-full text-sm">'
                    );
                    inTable = true;
                }
                outputLines.push(line);
            } else {
                if (inTable) {
                    outputLines.push('</table></div>');
                    inTable = false;
                }
                outputLines.push(line);
            }
        }
        if (inTable) outputLines.push('</table></div>');
        processed = outputLines.join('\n');

        // 4. Basic formatting
        processed = processed
            // Custom Tabs components (stripping for now)
            .replace(/<Tabs>/g, '')
            .replace(/<\/Tabs>/g, '')
            .replace(
                /<TabItem value="(.*?)" label="(.*?)">/g,
                '<div class="font-bold mt-4 mb-2 text-xs uppercase tracking-wider text-slate-500">$2</div>'
            )
            .replace(/<\/TabItem>/g, '')

            // Headers
            .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-6 mb-2">$1</h3>')
            .replace(
                /^## (.*$)/gim,
                '<h2 class="text-xl font-bold mt-8 mb-4 border-b dark:border-slate-700 pb-2">$1</h2>'
            )
            .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-2 mb-6">$1</h1>')

            // Bold - Italic
            .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
            .replace(/\*(.*)\*/gim, '<i>$1</i>')

            // Horizontal Rule
            .replace(/^---/gm, '<hr class="my-6 border-slate-200 dark:border-slate-700"/>')

            // Lists
            .replace(/^\- (.*$)/gim, '<ul class="list-disc pl-5 my-1"><li>$1</li></ul>');

        // Fix adjacent lists
        processed = processed.replace(/<\/ul>\s*<ul class="list-disc pl-5 my-1">/gim, '');

        // 5. Restore Placeholders
        // Restore Code Blocks
        processed = processed.replace(/__CODE_BLOCK_(\d+)__/g, (match, index) => {
            return `<pre class="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg overflow-x-auto my-4 border dark:border-slate-700 text-sm font-mono text-slate-700 dark:text-slate-300"><code>${codeBlocks[parseInt(index)]}</code></pre>`;
        });

        // Restore Inline Code
        processed = processed.replace(/__INLINE_CODE_(\d+)__/g, (match, index) => {
            return `<code class="bg-slate-200 dark:bg-slate-700 rounded px-1.5 py-0.5 text-xs font-mono text-slate-700 dark:text-slate-200">${inlineCodes[parseInt(index)]}</code>`;
        });

        return processed;
    }
}
