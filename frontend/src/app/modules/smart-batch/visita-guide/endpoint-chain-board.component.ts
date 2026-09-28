import { CdkDrag, CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, input, output, signal, untracked } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import {
    canFeed,
    ChainProfile,
    inputKeysForFeature,
    outputKeysFromDocs,
    sharedChainFields,
} from '../endpoint-chain.util';
import { humanizeParamField, paramFieldLabelKey } from '../endpoint-param-highlight.util';
import { featureGroupIcon } from '../feature-group.util';
import { countryFlagImageUrl, isWorldCountry } from '../smart-batch-country.util';
import { AppFeature, SmartBatchService } from '../smart-batch.service';

const profileCache = new Map<string, ChainProfile>();

@Component({
    selector: 'endpoint-chain-board',
    standalone: true,
    imports: [CommonModule, DragDropModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule, TranslocoModule],
    host: { class: 'flex min-h-0 flex-1 flex-col' },
    template: `
        <div class="grid min-h-0 flex-1 gap-3 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)]">
            <section class="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-gray-800 dark:bg-gray-900/70">
                <div class="shrink-0 border-b border-stone-100 px-3 py-2 dark:border-gray-800">
                    <p class="text-sm font-semibold text-stone-950 dark:text-white">{{ 'visitaGuide.advancedTrayTitle' | transloco }}</p>
                    <p class="text-[11px] text-stone-500 dark:text-stone-400">{{ 'visitaGuide.advancedSelectionHint' | transloco }}</p>
                    <input
                        type="search"
                        class="mt-2 w-full rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-sm text-stone-950 outline-none focus:border-stone-950 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                        [placeholder]="'visitaGuide.endpointsSearch' | transloco"
                        [value]="query()"
                        (input)="queryChange.emit($any($event.target).value)"
                    />
                </div>
                <div
                    id="endpoint-chain-tray"
                    cdkDropList
                    cdkDropListId="endpoint-chain-tray"
                    [cdkDropListData]="tray()"
                    [cdkDropListConnectedTo]="['endpoint-chain-track']"
                    [cdkDropListSortingDisabled]="true"
                    class="flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto p-2"
                >
                    @if (loading() && !tray().length) {
                        <div class="flex flex-1 flex-col items-center justify-center gap-3 py-8">
                            <mat-spinner diameter="32"></mat-spinner>
                            <p class="px-4 text-center text-xs text-stone-400">{{ 'visitaGuide.advancedLoading' | transloco }}</p>
                        </div>
                    } @else if (!loading() && !chain().length && !tray().length) {
                        <p class="px-2 py-6 text-center text-xs text-stone-400">{{ 'visitaGuide.advancedNoLinks' | transloco }}</p>
                    } @else if (!tray().length) {
                        <p class="px-2 py-6 text-center text-xs text-stone-400">{{ 'visitaGuide.advancedTrayEmpty' | transloco }}</p>
                    }
                    @for (feature of tray(); track feature._id) {
                        <div cdkDrag [cdkDragData]="feature" class="cursor-grab">
                            <ng-container *ngTemplateOutlet="piece; context: { feature: feature, chained: false, index: -1 }" />
                        </div>
                    }
                </div>
            </section>

            <section class="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-stone-950 bg-stone-50 dark:border-white dark:bg-gray-950/60">
                <div class="shrink-0 border-b border-stone-200 px-3 py-2 dark:border-gray-800">
                    <p class="text-sm font-semibold text-stone-950 dark:text-white">{{ 'visitaGuide.advancedChainTitle' | transloco }}</p>
                </div>
                <div
                    id="endpoint-chain-track"
                    cdkDropList
                    cdkDropListId="endpoint-chain-track"
                    [cdkDropListData]="chain()"
                    [cdkDropListConnectedTo]="['endpoint-chain-tray']"
                    [cdkDropListSortingDisabled]="true"
                    [cdkDropListEnterPredicate]="canEnterChain"
                    (cdkDropListDropped)="onDropOnChain($event)"
                    class="flex min-h-0 flex-1 items-start gap-0 overflow-x-auto overflow-y-auto p-4"
                >
                    @if (!chain().length) {
                        <div class="flex h-full min-h-40 w-full items-center justify-center rounded-2xl border border-dashed border-stone-300 px-6 text-center text-xs text-stone-400 dark:border-gray-700">
                            {{ 'visitaGuide.advancedChainEmpty' | transloco }}
                        </div>
                    }
                    @for (feature of chain(); track feature._id; let index = $index) {
                        <div class="flex shrink-0 items-center" [class.chain-snap]="snappedId() === feature._id">
                            @if (index > 0 && jointLabel(index)) {
                                <div class="chain-joint mx-1 flex w-16 flex-col items-center" [class.chain-joint-snap]="snappedId() === feature._id">
                                    <span class="h-1.5 w-10 rounded-full bg-emerald-500"></span>
                                    <span class="mt-1 max-w-full truncate text-center text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
                                        {{ jointLabel(index) }}
                                    </span>
                                </div>
                            }
                            <div class="relative">
                                <span
                                    class="pointer-events-none absolute top-1/2 z-[1] h-5 w-5 -translate-y-1/2 rounded-full border-2 border-emerald-500 bg-white dark:bg-gray-900"
                                    [class.-left-2.5]="index > 0"
                                    [class.hidden]="index === 0"
                                ></span>
                                <ng-container *ngTemplateOutlet="piece; context: { feature: feature, chained: true, index: index }" />
                                <span class="pointer-events-none absolute -right-2.5 top-1/2 z-[1] h-5 w-5 -translate-y-1/2 rounded-full border-2 border-stone-950 bg-white dark:border-white dark:bg-gray-900"></span>
                            </div>
                        </div>
                    }
                </div>
                <div class="shrink-0 border-t border-stone-200 p-2 dark:border-gray-800">
                    <button
                        type="button"
                        class="inline-flex h-10 w-full items-center justify-center rounded-lg bg-stone-950 px-4 text-sm font-medium text-white disabled:opacity-40 dark:bg-white dark:text-gray-950"
                        [disabled]="!chain().length"
                        (click)="continueChain.emit()"
                    >
                        {{ 'visitaGuide.continue' | transloco }}
                    </button>
                </div>
            </section>
        </div>

        <ng-template #piece let-feature="feature" let-chained="chained" let-index="index">
            <article class="w-56 rounded-2xl border border-stone-200 bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-900">
                <div class="flex items-center gap-2">
                    <span class="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-700 dark:bg-gray-800 dark:text-stone-200">
                        <mat-icon class="!h-5 !w-5 !text-[22px]">{{ icon(feature) }}</mat-icon>
                        @if (flag(feature); as src) {
                            <img [src]="src" alt="" class="absolute -bottom-0.5 -right-0.5 h-3 w-4 rounded-[2px] object-cover ring-1 ring-white dark:ring-gray-900" />
                        } @else if (world(feature)) {
                            <span class="absolute -bottom-0.5 -right-0.5 text-[8px]">🌐</span>
                        }
                    </span>
                    <span class="min-w-0 flex-1 truncate text-sm font-medium text-stone-950 dark:text-white">{{ name(feature) }}</span>
                    @if (chained) {
                        <button
                            type="button"
                            class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-red-600 hover:bg-red-50 dark:text-red-400"
                            [matTooltip]="'visitaGuide.advancedRemoveTail' | transloco"
                            (click)="removeFrom(index); $event.stopPropagation()"
                        >
                            <mat-icon class="!h-4 !w-4 !text-base">close</mat-icon>
                        </button>
                    }
                </div>
                <div class="mt-2 flex flex-wrap gap-1">
                    @for (field of asks(feature); track field) {
                        <span class="rounded-full border border-orange-200 bg-orange-50 px-1.5 py-px text-[10px] font-medium text-orange-800 dark:border-orange-800/60 dark:bg-orange-950/40 dark:text-orange-300">
                            {{ 'visitaGuide.advancedAsks' | transloco }} {{ fieldLabel(field) }}
                        </span>
                    }
                    @for (field of returns(feature); track field) {
                        <span class="rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-px text-[10px] font-medium text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                            {{ 'visitaGuide.advancedReturns' | transloco }} {{ fieldLabel(field) }}
                        </span>
                    }
                </div>
            </article>
        </ng-template>
    `,
    styles: [
        `
            .chain-snap {
                animation: chain-lock 0.55s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            .chain-joint-snap span:first-child {
                animation: chain-joint 0.6s ease;
            }
            @keyframes chain-lock {
                0% {
                    transform: translateX(36px) scale(0.96);
                    opacity: 0.4;
                }
                55% {
                    transform: translateX(-6px) scale(1.03);
                    opacity: 1;
                }
                100% {
                    transform: none;
                    opacity: 1;
                }
            }
            @keyframes chain-joint {
                0% {
                    transform: scaleX(0.2);
                    opacity: 0;
                }
                100% {
                    transform: scaleX(1);
                    opacity: 1;
                }
            }
        `,
    ],
})
export class EndpointChainBoardComponent {
    private _batch = inject(SmartBatchService);
    private _transloco = inject(TranslocoService);

    features = input<AppFeature[]>([]);
    chain = input<AppFeature[]>([]);
    query = input('');

    chainChange = output<AppFeature[]>();
    continueChain = output<void>();
    queryChange = output<string>();

    loading = signal(false);
    profiles = signal<Record<string, ChainProfile>>({});
    snappedId = signal<string | null>(null);

    private _generation = 0;

    readonly tray = computed(() => {
        const features = this.features();
        const chain = this.chain();
        const profiles = this.profiles();
        const used = new Set(chain.map((feature) => feature._id));
        const last = chain.at(-1);
        return features.filter((feature) => {
            if (!feature._id || used.has(feature._id) || !profiles[feature._id]) return false;
            if (!last) return this._linksWithAny(feature, features, profiles);
            return canFeed(profiles[last._id], profiles[feature._id]);
        });
    });

    private readonly _hydrateEffect = effect(() => {
        const features = this.features();
        untracked(() => void this._hydrate(features));
    });

    canEnterChain = (drag: CdkDrag<AppFeature>): boolean => {
        const feature = drag.data;
        if (!feature?._id) return false;
        const last = this.chain().at(-1);
        const profiles = this.profiles();
        if (!profiles[feature._id]) return false;
        if (!last) return this._linksWithAny(feature, this.features(), profiles);
        return canFeed(profiles[last._id], profiles[feature._id]);
    };

    onDropOnChain(event: CdkDragDrop<AppFeature[]>): void {
        if (event.previousContainer === event.container) return;
        const feature = event.item.data as AppFeature | undefined;
        if (!feature?._id || !this.canEnterChain(event.item)) return;
        if (this.chain().some((item) => item._id === feature._id)) return;
        this.snappedId.set(feature._id);
        this.chainChange.emit([...this.chain(), feature]);
        const id = feature._id;
        setTimeout(() => {
            if (this.snappedId() === id) this.snappedId.set(null);
        }, 700);
    }

    removeFrom(index: number): void {
        if (index < 0) return;
        this.chainChange.emit(this.chain().slice(0, index));
    }

    jointLabel(index: number): string {
        const chain = this.chain();
        const previous = chain[index - 1];
        const current = chain[index];
        if (!previous || !current) return '';
        const via = sharedChainFields(
            this.profiles()[previous._id]?.outputs ?? [],
            this.profiles()[current._id]?.inputs ?? []
        );
        return via.map((field) => this.fieldLabel(field)).join(', ');
    }

    asks(feature: AppFeature): string[] {
        return (this.profiles()[feature._id]?.inputs ?? []).slice(0, 4);
    }

    returns(feature: AppFeature): string[] {
        return (this.profiles()[feature._id]?.outputs ?? []).slice(0, 4);
    }

    name(feature: AppFeature): string {
        const lang = this._transloco.getActiveLang();
        if (lang.startsWith('es') && feature.nameES?.trim()) return feature.nameES.trim();
        return feature.name;
    }

    icon(feature: AppFeature): string {
        return featureGroupIcon(feature);
    }

    flag(feature: AppFeature): string | null {
        return countryFlagImageUrl(feature.country);
    }

    world(feature: AppFeature): boolean {
        return isWorldCountry(feature.country);
    }

    fieldLabel(field: string): string {
        const key = paramFieldLabelKey(field);
        return this._transloco.translate(key, { field: humanizeParamField(field) });
    }

    private _linksWithAny(
        feature: AppFeature,
        features: AppFeature[],
        profiles: Record<string, ChainProfile>
    ): boolean {
        const mine = profiles[feature._id];
        if (!mine) return false;
        return features.some((other) => {
            if (other._id === feature._id) return false;
            const theirs = profiles[other._id];
            if (!theirs) return false;
            return canFeed(mine, theirs) || canFeed(theirs, mine);
        });
    }

    private async _hydrate(features: AppFeature[]): Promise<void> {
        const generation = ++this._generation;
        const pending = features.filter((feature) => feature._id && !this.profiles()[feature._id]);
        if (!pending.length) {
            this.loading.set(false);
            return;
        }
        this.loading.set(true);
        const queue = [...pending];
        const worker = async () => {
            while (queue.length && generation === this._generation) {
                const feature = queue.shift();
                if (!feature?._id) continue;
                const cacheKey = feature.code || feature._id;
                let profile = profileCache.get(cacheKey);
                if (!profile) {
                    const detail = await firstValueFrom(this._batch.getFeatureDetail(cacheKey)).catch(() => null);
                    const docs = detail && typeof detail === 'object' ? (detail as { docs?: unknown }).docs : undefined;
                    profile = {
                        inputs: inputKeysForFeature(feature),
                        outputs: outputKeysFromDocs(docs),
                    };
                    profileCache.set(cacheKey, profile);
                }
                if (generation !== this._generation) return;
                const ready = profile;
                this.profiles.update((current) => ({ ...current, [feature._id]: ready }));
            }
        };
        await Promise.all([worker(), worker(), worker(), worker()]);
        if (generation === this._generation) this.loading.set(false);
    }
}
