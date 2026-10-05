import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    HostListener,
    computed,
    effect,
    inject,
    input,
    output,
    signal,
    untracked,
    viewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    addEndpointNode,
    attachLeafsToMerge,
    autoConnect,
    connectPorts,
    cubicWire,
    emptyFlowGraph,
    endpointNodes as listEndpointNodes,
    fieldsLikelyCompatible,
    flattenFlowGraph,
    FLOW_MERGE_ID,
    FLOW_NODE_WIDTH,
    FLOW_RESULT_ID,
    FLOW_START_ID,
    FlowGraph,
    FlowGraphNode,
    incomingEdge,
    layoutFlowGraph,
    moveFlowNode,
    nodeById,
    portCenter,
    removeFlowEdge,
    removeFlowNode,
    sameFlowFeatures,
    setFixedValue,
    startOutputPorts,
    usedFeatureIds,
    graphFromLinearChain,
} from '../endpoint-flow-graph.util';
import { ChainProfile, chainProfileForFeature } from '../endpoint-chain.util';
import {
    featureParamChips,
    FeatureParamChip,
    humanizeParamField,
    paramEnumChipClass,
    paramFieldLabelKey,
    requiredParamChipClass,
} from '../endpoint-param-highlight.util';
import { FEATURE_GROUP_ICONS, featureGroup, FeatureGroupId, featureGroupIcon } from '../feature-group.util';
import { countryFlagImageUrl, isWorldCountry } from '../smart-batch-country.util';
import { AppFeature } from '../smart-batch.service';
import { getAppFeatureCatalogCopy } from '../../postman/postman-endpoint-copy.util';

type FlowDrag = { from: 'tray'; feature: AppFeature };

@Component({
    selector: 'endpoint-details-dialog',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule],
    template: `
        <div class="flex items-start gap-2 px-5 pt-4">
            <span class="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-slate-200">
                <mat-icon>{{ icon }}</mat-icon>
            </span>
            <div class="min-w-0 flex-1">
                <h2 class="text-base font-semibold text-slate-900 dark:text-white">{{ name }}</h2>
                <p class="truncate font-mono text-[11px] text-slate-500">{{ request }}</p>
            </div>
            <button type="button" mat-icon-button mat-dialog-close [attr.aria-label]="'visitaGuide.endpointDetailsClose' | transloco">
                <mat-icon>close</mat-icon>
            </button>
        </div>
        <mat-dialog-content class="!mt-2 space-y-4">
            @if (description) {
                <p class="text-sm leading-snug text-slate-600 dark:text-slate-300">{{ description }}</p>
            }
            <div>
                <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{{ 'visitaGuide.flowInputs' | transloco }}</p>
                <div class="mt-1.5 flex flex-wrap gap-1">
                    @for (chip of chips; track chip.field) {
                        <span class="rounded-full border px-1.5 py-px text-[10px] font-medium" [ngClass]="chip.chipClass">
                            {{ chip.label }}
                        </span>
                    }
                </div>
            </div>
        </mat-dialog-content>
        <mat-dialog-actions align="end" class="!px-5 !pb-4">
            <button mat-button mat-dialog-close type="button">{{ 'visitaGuide.endpointDetailsClose' | transloco }}</button>
        </mat-dialog-actions>
    `,
})
export class EndpointDetailsDialogComponent {
    private _data = inject(MAT_DIALOG_DATA) as EndpointDetailsDialogData;
    readonly name = this._data.name;
    readonly request = this._data.request;
    readonly description = this._data.description;
    readonly icon = this._data.icon;
    readonly chips = this._data.chips;
}

interface EndpointDetailsDialogData {
    name: string;
    request: string;
    description: string;
    icon: string;
    chips: { field: string; label: string; required: boolean; enums: string[]; chipClass: string }[];
}

const TRAY_GROUPS: { id: FeatureGroupId; labelKey: string }[] = [
    { id: 'vehicle', labelKey: 'visitaGuide.entityVehicle' },
    { id: 'citizen', labelKey: 'visitaGuide.entityPerson' },
    { id: 'company', labelKey: 'visitaGuide.entityCompany' },
    { id: 'other', labelKey: 'visitaGuide.intentOther' },
];

@Component({
    selector: 'endpoint-chain-board',
    standalone: true,
    imports: [
        CommonModule,
        DragDropModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        TranslocoModule,
    ],
    host: { class: 'flex min-h-0 flex-1 flex-col' },
    template: `
        <div class="grid min-h-0 flex-1 gap-3 xl:grid-cols-[18rem_minmax(0,1fr)_18rem]" cdkDropListGroup>
            <section class="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <div class="shrink-0 border-b border-slate-100 px-3 py-2 dark:border-gray-800">
                    <p class="text-sm font-semibold text-slate-900 dark:text-white">{{ 'visitaGuide.flowLibrary' | transloco }}</p>
                    <input
                        type="search"
                        class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm outline-none focus:border-sky-500 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                        [placeholder]="'visitaGuide.endpointsSearch' | transloco"
                        [value]="query()"
                        (input)="queryChange.emit($any($event.target).value)"
                    />
                    <div class="mt-2 flex flex-wrap gap-2">
                        <button type="button" class="inline-flex h-8 items-center rounded-lg border border-red-200 bg-red-50 px-3 text-xs font-semibold text-red-700" (click)="clearFlow()">
                            {{ 'visitaGuide.clearEndpoints' | transloco }}
                        </button>
                        <span class="text-[11px] text-slate-400">{{ selectedCountLabel() }}</span>
                    </div>
                </div>
                <div class="min-h-0 flex-1 overflow-y-auto p-2">
                    @if (loading() && !tray().length) {
                        <div class="flex flex-col items-center gap-3 py-10">
                            <mat-spinner diameter="36"></mat-spinner>
                        </div>
                    }
                    @for (group of trayGroups(); track group.id) {
                        <p class="sticky top-0 z-[1] mb-1 flex items-center gap-1 bg-white px-1 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-gray-900">
                            <mat-icon class="!h-4 !w-4 !text-base">{{ group.icon }}</mat-icon>
                            {{ group.labelKey | transloco }}
                        </p>
                        <div cdkDropList [cdkDropListData]="group.items" [cdkDropListSortingDisabled]="true" class="mb-3 flex flex-col gap-1.5">
                            @for (feature of group.items; track feature._id) {
                                <div
                                    cdkDrag
                                    [cdkDragData]="trayDrag(feature)"
                                    class="cursor-grab rounded-xl border bg-white p-2 dark:bg-gray-950"
                                    [ngClass]="tone(feature)"
                                    (dblclick)="attachToSelected(feature)"
                                >
                                    <div *cdkDragPlaceholder class="h-2"></div>
                                    <div class="flex items-start gap-2">
                                        <mat-icon class="mt-1 !h-4 !w-4 !text-base text-slate-400">drag_indicator</mat-icon>
                                        <div class="min-w-0 flex-1">
                                            <p class="truncate text-sm font-medium text-slate-900 dark:text-white">{{ name(feature) }}</p>
                                            <div class="mt-0.5 flex flex-wrap gap-1">
                                                @for (chip of paramChips(feature); track chip.field) {
                                                    <span class="rounded-full border px-1.5 py-px text-[10px] font-medium" [ngClass]="chipClass(chip.required)">{{ fieldLabel(chip.field) }}</span>
                                                }
                                            </div>
                                        </div>
                                        <button type="button" class="text-slate-400" (mousedown)="$event.stopPropagation()" (click)="attachToSelected(feature); $event.stopPropagation()">
                                            <mat-icon>add</mat-icon>
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </section>

            <section class="flow-canvas flex min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-800">
                <div class="flex shrink-0 items-center gap-2 border-b border-slate-200 px-3 py-2 dark:border-gray-800">
                    <div class="min-w-0 flex-1">
                        <p class="text-sm font-semibold text-slate-900 dark:text-white">{{ 'visitaGuide.flowCanvas' | transloco }}</p>
                        <p class="truncate text-[11px] text-slate-500">{{ 'visitaGuide.flowWiresHint' | transloco }}</p>
                    </div>
                    <button type="button" mat-icon-button (click)="zoomBy(-0.1)"><mat-icon>remove</mat-icon></button>
                    <button type="button" mat-icon-button (click)="zoomBy(0.1)"><mat-icon>add</mat-icon></button>
                    <button type="button" mat-icon-button [matTooltip]="'visitaGuide.flowAutoLayout' | transloco" (click)="autoLayout()"><mat-icon>account_tree</mat-icon></button>
                </div>
                <div
                    #viewport
                    class="relative min-h-0 flex-1 overflow-hidden"
                    cdkDropList
                    cdkDropListId="endpoint-chain-canvas"
                    [cdkDropListData]="dropBucket('endpoint-chain-canvas')"
                    [cdkDropListSortingDisabled]="true"
                    (cdkDropListDropped)="onCanvasDrop($event)"
                    (pointerdown)="onViewportPointerDown($event)"
                    (wheel)="onWheel($event)"
                >
                    <div class="flow-world absolute left-0 top-0 origin-top-left" [style.transform]="worldTransform()">
                        <svg class="pointer-events-none absolute left-0 top-0 overflow-visible" width="2400" height="1600">
                            @for (wire of wires(); track wire.id) {
                                <path
                                    [attr.d]="wire.d"
                                    fill="none"
                                    stroke-width="2.5"
                                    class="pointer-events-stroke cursor-pointer"
                                    [attr.stroke]="wire.color"
                                    (click)="removeEdge(wire.id); $event.stopPropagation()"
                                />
                            }
                            @if (previewPath(); as preview) {
                                <path [attr.d]="preview" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="6 4" />
                            }
                        </svg>
                        @for (node of graph().nodes; track node.id) {
                            <div
                                class="absolute rounded-2xl shadow-sm ring-1"
                                [style.left.px]="node.x"
                                [style.top.px]="node.y"
                                [style.width.px]="nodeWidth(node)"
                                [ngClass]="nodeTone(node)"
                                [class.ring-2]="selectedId() === node.id"
                                [class.ring-sky-500]="selectedId() === node.id"
                                (pointerdown)="onNodePointerDown($event, node)"
                                (click)="selectedId.set(node.id)"
                            >
                                <div class="flex items-center gap-2 px-3 pt-3">
                                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-700 dark:bg-gray-900">
                                        <mat-icon>{{ nodeIcon(node) }}</mat-icon>
                                    </span>
                                    <div class="min-w-0 flex-1">
                                        <p class="truncate text-sm font-semibold text-slate-900 dark:text-white">{{ nodeTitle(node) }}</p>
                                        @if (node.feature) {
                                            <p class="truncate font-mono text-[10px] text-slate-400">{{ pathLabel(node.feature) }}</p>
                                        }
                                    </div>
                                    @if (node.kind === 'endpoint') {
                                        <button type="button" class="text-slate-400 hover:text-red-500" (pointerdown)="$event.stopPropagation()" (click)="removeNode(node.id); $event.stopPropagation()">
                                            <mat-icon class="!h-4 !w-4 !text-base">close</mat-icon>
                                        </button>
                                    }
                                </div>
                                <div class="mt-2 space-y-0 pb-2">
                                    @for (port of inputPorts(node); track port; let i = $index) {
                                        <div class="relative flex h-7 items-center pl-4 pr-3 text-[11px] text-slate-600 dark:text-slate-300">
                                            <button
                                                type="button"
                                                class="absolute -left-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-slate-400 shadow"
                                                [class.bg-sky-500]="!!boundSource(node.id, port)"
                                                (pointerdown)="onInputPortDown($event, node, port)"
                                            ></button>
                                            <span class="truncate">{{ fieldLabel(port) }}</span>
                                            @if (boundSource(node.id, port); as source) {
                                                <span class="ml-auto truncate pl-2 text-[10px] text-sky-700 dark:text-sky-300">{{ source }}</span>
                                            }
                                        </div>
                                    }
                                    @for (port of outputPorts(node); track port; let i = $index) {
                                        <div class="relative flex h-7 items-center justify-end pl-3 pr-4 text-[11px] font-medium text-slate-700 dark:text-slate-200">
                                            <span class="truncate">{{ fieldLabel(port) }}</span>
                                            <button
                                                type="button"
                                                class="absolute -right-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 shadow"
                                                (pointerdown)="onOutputPortDown($event, node, port)"
                                            ></button>
                                        </div>
                                    }
                                </div>
                                @if (node.kind === 'endpoint') {
                                    <button
                                        type="button"
                                        class="mb-2 ml-3 inline-flex items-center rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-800"
                                        (pointerdown)="$event.stopPropagation()"
                                        (click)="selectedId.set(node.id)"
                                    >
                                        {{ 'visitaGuide.flowAddBranch' | transloco }}
                                    </button>
                                }
                            </div>
                        }
                    </div>
                </div>
                <div class="shrink-0 border-t border-slate-200 p-2 dark:border-gray-800">
                    <button
                        type="button"
                        class="inline-flex h-10 w-full items-center justify-center rounded-lg bg-slate-900 text-sm font-medium text-white disabled:opacity-40 dark:bg-white dark:text-gray-950"
                        [disabled]="!endpointNodes().length"
                        (click)="continueChain.emit()"
                    >
                        {{ 'visitaGuide.continue' | transloco }}
                    </button>
                </div>
            </section>

            <section class="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <div class="border-b border-slate-100 px-3 py-2 dark:border-gray-800">
                    <p class="text-sm font-semibold text-slate-900 dark:text-white">{{ 'visitaGuide.flowConfig' | transloco }}</p>
                </div>
                <div class="min-h-0 flex-1 overflow-y-auto p-3">
                    @if (selectedNode(); as node) {
                        <p class="text-sm font-medium text-slate-900 dark:text-white">{{ nodeTitle(node) }}</p>
                        @if (node.feature) {
                            <p class="mt-1 font-mono text-[11px] text-slate-500">{{ requestLabel(node.feature) }}</p>
                            <p class="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{{ 'visitaGuide.flowInputs' | transloco }}</p>
                            @for (port of inputPorts(node); track port) {
                                <div class="mt-2 rounded-xl border border-slate-200 p-2 dark:border-gray-800">
                                    <p class="text-xs font-medium text-slate-800 dark:text-slate-100">{{ fieldLabel(port) }}</p>
                                    <p class="mt-1 text-[11px] text-sky-700 dark:text-sky-300">{{ boundSource(node.id, port) || ('visitaGuide.flowAskUser' | transloco) }}</p>
                                    <select
                                        class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                                        (change)="onSourcePick(node, port, $any($event.target).value)"
                                    >
                                        <option value="">{{ 'visitaGuide.flowAskUser' | transloco }}</option>
                                        <option value="start">{{ 'visitaGuide.flowFromStart' | transloco }}</option>
                                        @for (option of sourceOptions(node.id, port); track option.id) {
                                            <option [value]="option.id">{{ option.label }}</option>
                                        }
                                        @if (enumsFor(node, port).length) {
                                            @for (value of enumsFor(node, port); track value) {
                                                <option [value]="'fixed:' + value">{{ 'visitaGuide.flowFixedValue' | transloco }} {{ value }}</option>
                                            }
                                        }
                                    </select>
                                </div>
                            }
                            <p class="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{{ 'visitaGuide.flowOutputs' | transloco }}</p>
                            <div class="mt-2 flex flex-wrap gap-1">
                                @for (port of outputPorts(node); track port) {
                                    <span class="rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">{{ fieldLabel(port) }}</span>
                                }
                            </div>
                        } @else {
                            <p class="mt-3 text-sm text-slate-500">{{ inspectorHint(node) }}</p>
                        }
                    } @else {
                        <p class="text-sm text-slate-500">{{ 'visitaGuide.flowInspectorEmpty' | transloco }}</p>
                    }
                </div>
            </section>
        </div>
    `,
    styles: [
        `
            .flow-canvas {
                background-color: #f8fafc;
                background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
                background-size: 18px 18px;
            }
            :host-context(.dark) .flow-canvas {
                background-color: #030712;
                background-image: radial-gradient(#1f2937 1px, transparent 1px);
            }
            .pointer-events-stroke {
                pointer-events: stroke;
            }
        `,
    ],
})
export class EndpointChainBoardComponent {
    private _transloco = inject(TranslocoService);
    private _confirm = inject(FuseConfirmationService);
    private readonly _viewport = viewChild<ElementRef<HTMLElement>>('viewport');

    features = input<AppFeature[]>([]);
    chain = input<AppFeature[]>([]);
    query = input('');
    loading = input(false);

    chainChange = output<AppFeature[]>();
    graphChange = output<FlowGraph>();
    continueChain = output<void>();
    queryChange = output<string>();
    hoverEnter = output<{ feature: AppFeature; event: MouseEvent }>();
    hoverMove = output<{ feature: AppFeature; event: MouseEvent }>();
    hoverLeave = output<void>();

    profiles = signal<Record<string, ChainProfile>>({});
    graph = signal<FlowGraph>(emptyFlowGraph());
    selectedId = signal<string | null>(FLOW_START_ID);
    zoom = signal(1);
    panX = signal(0);
    panY = signal(0);
    linking = signal<{ from: string; fromPort: string } | null>(null);
    cursor = signal({ x: 0, y: 0 });
    readonly enumClass = paramEnumChipClass;
    private readonly _dropBuckets = new Map<string, unknown[]>();
    private _panning: { x: number; y: number; panX: number; panY: number } | null = null;
    private _moving: { id: string; dx: number; dy: number } | null = null;

    dropBucket(id: string): unknown[] {
        let bucket = this._dropBuckets.get(id);
        if (!bucket) {
            bucket = [];
            this._dropBuckets.set(id, bucket);
        }
        return bucket;
    }

    readonly tray = computed(() => {
        const used = new Set(usedFeatureIds(this.graph()));
        return this.features().filter((feature) => feature._id && !used.has(feature._id));
    });

    readonly trayGroups = computed(() =>
        TRAY_GROUPS.map((group) => ({
            ...group,
            icon: FEATURE_GROUP_ICONS[group.id],
            items: this.tray().filter((feature) => featureGroup(feature) === group.id),
        })).filter((group) => group.items.length)
    );

    readonly endpointNodes = computed(() => listEndpointNodes(this.graph()));
    readonly selectedNode = computed(() => nodeById(this.graph(), this.selectedId() ?? '') ?? null);
    readonly worldTransform = computed(() => `translate(${this.panX()}px, ${this.panY()}px) scale(${this.zoom()})`);

    readonly wires = computed(() => {
        const graph = this.graph();
        return graph.edges
            .map((edge) => {
                const from = nodeById(graph, edge.from);
                const to = nodeById(graph, edge.to);
                if (!from || !to) return null;
                const fromPorts = this.outputPorts(from);
                const toPorts = this.inputPorts(to);
                const fromIndex = Math.max(0, fromPorts.indexOf(edge.fromPort));
                const toIndex = Math.max(0, toPorts.indexOf(edge.toPort));
                const start = portCenter(from, 'out', fromIndex, this.inputPorts(from).length);
                const end = portCenter(to, 'in', toIndex, 0);
                return {
                    id: edge.id,
                    d: cubicWire(start, end),
                    color: fieldsLikelyCompatible(edge.fromPort, edge.toPort) || edge.fromPort === '*' ? '#0ea5e9' : '#f59e0b',
                };
            })
            .filter((wire): wire is { id: string; d: string; color: string } => !!wire);
    });

    readonly previewPath = computed(() => {
        const link = this.linking();
        if (!link) return '';
        const from = nodeById(this.graph(), link.from);
        if (!from) return '';
        const ports = this.outputPorts(from);
        const start = portCenter(from, 'out', Math.max(0, ports.indexOf(link.fromPort)), this.inputPorts(from).length);
        return cubicWire(start, this.cursor());
    });

    private readonly _hydrateEffect = effect(() => {
        const features = [...this.features(), ...flattenFlowGraph(this.graph()), ...this.chain()];
        untracked(() => this._hydrate(features));
    });

    private readonly _syncTreeEffect = effect(() => {
        const incoming = this.chain();
        untracked(() => {
            if (sameFlowFeatures(this.graph(), incoming)) return;
            this.graph.set(graphFromLinearChain(incoming, this.profiles()));
            this.selectedId.set(incoming[0]?._id ?? FLOW_START_ID);
        });
    });

    @HostListener('document:pointermove', ['$event'])
    onPointerMove(event: PointerEvent): void {
        const point = this._toWorld(event);
        this.cursor.set(point);
        if (this._panning) {
            this.panX.set(this._panning.panX + (event.clientX - this._panning.x));
            this.panY.set(this._panning.panY + (event.clientY - this._panning.y));
        }
        if (this._moving) {
            this.graph.set(moveFlowNode(this.graph(), this._moving.id, point.x - this._moving.dx, point.y - this._moving.dy));
        }
    }

    @HostListener('document:pointerup', ['$event'])
    onPointerUp(event: PointerEvent): void {
        this._panning = null;
        this._moving = null;
        const link = this.linking();
        if (!link) return;
        this.linking.set(null);
        const target = this._hitInputPort(this._toWorld(event));
        if (!target) return;
        this._connect(link.from, link.fromPort, target.nodeId, target.port);
    }

    onWheel(event: WheelEvent): void {
        if (!event.ctrlKey && !event.metaKey) return;
        event.preventDefault();
        this.zoomBy(event.deltaY > 0 ? -0.08 : 0.08);
    }

    onViewportPointerDown(event: PointerEvent): void {
        if (event.target !== event.currentTarget && !(event.target as HTMLElement).classList.contains('flow-world')) {
            return;
        }
        this._panning = { x: event.clientX, y: event.clientY, panX: this.panX(), panY: this.panY() };
    }

    onNodePointerDown(event: PointerEvent, node: FlowGraphNode): void {
        if ((event.target as HTMLElement).closest('button')) return;
        event.stopPropagation();
        const point = this._toWorld(event);
        this._moving = { id: node.id, dx: point.x - node.x, dy: point.y - node.y };
        this.selectedId.set(node.id);
    }

    onOutputPortDown(event: PointerEvent, node: FlowGraphNode, port: string): void {
        event.stopPropagation();
        event.preventDefault();
        this.linking.set({ from: node.id, fromPort: port });
        this.cursor.set(this._toWorld(event));
    }

    onInputPortDown(event: PointerEvent, node: FlowGraphNode, port: string): void {
        event.stopPropagation();
        const link = this.linking();
        if (!link) return;
        event.preventDefault();
        this.linking.set(null);
        this._connect(link.from, link.fromPort, node.id, port);
    }

    zoomBy(delta: number): void {
        this.zoom.set(Math.min(1.6, Math.max(0.5, Math.round((this.zoom() + delta) * 100) / 100)));
    }

    autoLayout(): void {
        this.graph.set(layoutFlowGraph(this.graph()));
        this._emit();
    }

    nodeWidth(node: FlowGraphNode): number {
        return node.kind === 'endpoint' ? FLOW_NODE_WIDTH : 220;
    }

    inputPorts(node: FlowGraphNode): string[] {
        if (node.kind === 'start') return [];
        if (node.kind === 'result') return ['*'];
        if (node.kind === 'merge') {
            return this.graph()
                .edges.filter((edge) => edge.to === FLOW_MERGE_ID)
                .map((edge) => edge.toPort);
        }
        return this.profiles()[node.id]?.inputs ?? [];
    }

    outputPorts(node: FlowGraphNode): string[] {
        if (node.kind === 'start') return startOutputPorts(this.graph(), this.profiles());
        if (node.kind === 'merge') return ['*'];
        if (node.kind === 'result') return [];
        const outputs = this.profiles()[node.id]?.outputs ?? [];
        return [...outputs.slice(0, 8), '*'];
    }

    boundSource(nodeId: string, port: string): string {
        const fixed = this.graph().fixed[nodeId]?.[port];
        if (fixed) return this._transloco.translate('visitaGuide.flowFixedValue') + ' ' + fixed;
        const edge = incomingEdge(this.graph(), nodeId, port);
        if (!edge) return '';
        const from = nodeById(this.graph(), edge.from);
        if (!from) return '';
        return `${this.fieldLabel(edge.fromPort)} · ${this.nodeTitle(from)}`;
    }

    sourceOptions(nodeId: string, port: string): { id: string; label: string }[] {
        const options: { id: string; label: string }[] = [];
        for (const node of this.graph().nodes) {
            if (node.id === nodeId) continue;
            for (const out of this.outputPorts(node)) {
                if (out === '*' && node.kind === 'endpoint') continue;
                options.push({
                    id: `${node.id}::${out}`,
                    label: `${this.nodeTitle(node)} → ${this.fieldLabel(out)}`,
                });
            }
        }
        void port;
        return options;
    }

    onSourcePick(node: FlowGraphNode, port: string, value: string): void {
        if (!value) {
            const edge = incomingEdge(this.graph(), node.id, port);
            if (edge) this.graph.set(removeFlowEdge(this.graph(), edge.id));
            this._emit();
            return;
        }
        if (value === 'start') {
            this._connect(FLOW_START_ID, port, node.id, port);
            return;
        }
        if (value.startsWith('fixed:')) {
            this.graph.set(setFixedValue(this.graph(), node.id, port, value.slice(6)));
            this._emit();
            return;
        }
        const [from, fromPort] = value.split('::');
        if (from && fromPort) this._connect(from, fromPort, node.id, port);
    }

    enumsFor(node: FlowGraphNode, port: string): string[] {
        return this.profiles()[node.id]?.inputEnums?.[port] ?? [];
    }

    inspectorHint(node: FlowGraphNode): string {
        if (node.kind === 'start') return this._transloco.translate('visitaGuide.flowStartHint');
        if (node.kind === 'merge') return this._transloco.translate('visitaGuide.flowMergeHint');
        return this._transloco.translate('visitaGuide.flowResultHint');
    }

    nodeTitle(node: FlowGraphNode): string {
        if (node.kind === 'start') return this._transloco.translate('visitaGuide.flowStart');
        if (node.kind === 'merge') return this._transloco.translate('visitaGuide.flowMerge');
        if (node.kind === 'result') return this._transloco.translate('visitaGuide.flowResult');
        return node.feature ? this.name(node.feature) : node.id;
    }

    nodeIcon(node: FlowGraphNode): string {
        if (node.kind === 'start') return 'play_arrow';
        if (node.kind === 'merge') return 'call_merge';
        if (node.kind === 'result') return 'inventory_2';
        return node.feature ? this.icon(node.feature) : 'hub';
    }

    nodeTone(node: FlowGraphNode): string {
        if (node.kind === 'start') return 'bg-emerald-50 ring-emerald-200 dark:bg-emerald-950 dark:ring-emerald-800';
        if (node.kind === 'merge') return 'bg-violet-50 ring-violet-200 dark:bg-violet-950 dark:ring-violet-800';
        if (node.kind === 'result') return 'bg-rose-50 ring-rose-200 dark:bg-rose-950 dark:ring-rose-800';
        return node.feature ? this.tone(node.feature) : 'bg-white';
    }

    fieldLabel(field: string): string {
        if (field === '*') return this._transloco.translate('visitaGuide.flowFullResponse');
        const key = paramFieldLabelKey(field);
        return this._transloco.translate(key, { field: humanizeParamField(field) });
    }

    tone(feature: AppFeature): string {
        switch (featureGroup(feature)) {
            case 'vehicle':
                return 'border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-950';
            case 'citizen':
                return 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950';
            case 'company':
                return 'border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-950';
            default:
                return 'border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950';
        }
    }

    pathLabel(feature: AppFeature): string {
        const url = feature.url || '';
        const path = url.replace(/^https?:\/\/[^/]+/i, '');
        return path.startsWith('/') ? path : `/${path}`;
    }

    trayDrag(feature: AppFeature): FlowDrag {
        return { from: 'tray', feature };
    }

    onCanvasDrop(event: CdkDragDrop<unknown>): void {
        const payload = event.item.data as FlowDrag | AppFeature | undefined;
        const feature = payload && 'from' in payload ? payload.feature : (payload as AppFeature | undefined);
        if (!feature?._id) return;
        const point = event.dropPoint
            ? this._clientToWorld(event.dropPoint.x, event.dropPoint.y)
            : { x: 360, y: 180 };
        this._place(feature, point.x, point.y);
    }

    attachToSelected(feature: AppFeature): void {
        const selected = this.selectedNode();
        const origin = selected && selected.kind === 'endpoint' ? selected : nodeById(this.graph(), FLOW_START_ID);
        const x = (origin?.x ?? 40) + 340;
        const y = (origin?.y ?? 180) + this.endpointNodes().length * 24;
        this._place(feature, x, y, origin?.id);
    }

    clearFlow(): void {
        this.graph.set(emptyFlowGraph());
        this.selectedId.set(FLOW_START_ID);
        this._emit();
    }

    removeNode(id: string): void {
        this.graph.set(removeFlowNode(this.graph(), id));
        this.selectedId.set(FLOW_START_ID);
        this._emit();
    }

    removeEdge(id: string): void {
        this.graph.set(removeFlowEdge(this.graph(), id));
        this._emit();
    }

    selectedCountLabel(): string {
        return this._transloco.translate('visitaGuide.endpointsSelected', {
            count: flattenFlowGraph(this.graph()).length,
        });
    }

    paramChips(feature: AppFeature): FeatureParamChip[] {
        return featureParamChips(feature);
    }

    chipClass(required: boolean): string {
        return requiredParamChipClass(required);
    }

    requestLabel(feature: AppFeature): string {
        return `${(feature.method || 'GET').toUpperCase()} ${this.pathLabel(feature)}`;
    }

    name(feature: AppFeature): string {
        const catalog = getAppFeatureCatalogCopy(this._transloco, feature.code);
        if (catalog.title) return catalog.title;
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

    private _place(feature: AppFeature, x: number, y: number, sourceId?: string): void {
        if (!feature._id || usedFeatureIds(this.graph()).includes(feature._id)) return;
        this._hydrate([feature]);
        let next = addEndpointNode(this.graph(), feature, x, y);
        const source = sourceId ?? this.selectedId();
        if (source && source !== feature._id) {
            next = autoConnect(next, source, feature._id, this.profiles());
        }
        const leftover = (this.profiles()[feature._id]?.inputs ?? []).filter((field) => !incomingEdge(next, feature._id, field));
        for (const field of leftover) {
            next = connectPorts(next, FLOW_START_ID, field, feature._id, field);
        }
        next = attachLeafsToMerge(next);
        this.graph.set(next);
        this.selectedId.set(feature._id);
        this._emit();
    }

    private _connect(from: string, fromPort: string, to: string, toPort: string): void {
        const apply = (): void => {
            this.graph.set(connectPorts(this.graph(), from, fromPort, to, toPort));
            this._emit();
        };
        if (fromPort === '*' || toPort === '*' || fieldsLikelyCompatible(fromPort, toPort)) {
            apply();
            return;
        }
        this._confirm
            .open({
                title: this._transloco.translate('visitaGuide.flowIncompatibleTitle'),
                message: this._transloco.translate('visitaGuide.flowIncompatibleBody', {
                    from: this.fieldLabel(fromPort),
                    to: this.fieldLabel(toPort),
                }),
                icon: { show: true, name: 'heroicons_outline:exclamation-triangle', color: 'warning' },
                actions: {
                    confirm: { show: true, label: this._transloco.translate('visitaGuide.flowConnectAnyway'), color: 'primary' },
                    cancel: { show: true, label: this._transloco.translate('visitaGuide.endpointDetailsClose') },
                },
            })
            .afterClosed()
            .subscribe((result) => {
                if (result === 'confirmed') apply();
            });
    }

    private _emit(): void {
        this.chainChange.emit(flattenFlowGraph(this.graph()));
        this.graphChange.emit(this.graph());
    }

    private _hydrate(features: AppFeature[]): void {
        const current = this.profiles();
        let changed = false;
        const next = { ...current };
        for (const feature of features) {
            if (!feature._id || next[feature._id]) continue;
            next[feature._id] = chainProfileForFeature(feature);
            changed = true;
        }
        if (changed) this.profiles.set(next);
    }

    private _toWorld(event: PointerEvent): { x: number; y: number } {
        return this._clientToWorld(event.clientX, event.clientY);
    }

    private _clientToWorld(clientX: number, clientY: number): { x: number; y: number } {
        const rect = this._viewport()?.nativeElement.getBoundingClientRect();
        if (!rect) return { x: clientX, y: clientY };
        return {
            x: (clientX - rect.left - this.panX()) / this.zoom(),
            y: (clientY - rect.top - this.panY()) / this.zoom(),
        };
    }

    private _hitInputPort(point: { x: number; y: number }): { nodeId: string; port: string } | null {
        for (const node of this.graph().nodes) {
            const ports = this.inputPorts(node);
            for (let index = 0; index < ports.length; index += 1) {
                const center = portCenter(node, 'in', index, 0);
                if (Math.hypot(center.x - point.x, center.y - point.y) < 18) {
                    return { nodeId: node.id, port: ports[index] };
                }
            }
        }
        return null;
    }
}
