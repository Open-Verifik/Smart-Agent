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
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    addEndpointNode,
    addExtraPort,
    extraPortsFor,
    hidePort,
    hiddenPortsFor,
    connectPorts,
    cubicWire,
    emptyFlowGraph,
    ensureResultSinks,
    endpointNodes as listEndpointNodes,
    fieldsLikelyCompatible,
    flattenFlowGraph,
    FLOW_RESULT_ID,
    FLOW_START_ID,
    FlowGraph,
    FlowGraphNode,
    flowNodeHeight,
    flowNodeWidth,
    incomingEdge,
    incomingEdgeForField,
    outgoingEdges,
    layoutFlowGraph,
    moveFlowNode,
    nodeById,
    portCenter,
    removeFlowEdge,
    removeFlowNode,
    sameFlowFeatureSet,
    sameFlowFeatures,
    sameFlowLayout,
    setFixedValue,
    startOutputPorts,
    usedFeatureIds,
    graphFromLinearChain,
    wireColorForIndex,
} from '../endpoint-flow-graph.util';
import { canonicalChainField, ChainProfile, chainProfileForFeature } from '../endpoint-chain.util';
import {
    featureParamChips,
    FeatureParamChip,
    humanizeParamField,
    paramEnumChipClass,
    paramFieldLabelKey,
    requiredParamChipClass,
    requiredVisibleFields,
} from '../endpoint-param-highlight.util';
import { FEATURE_GROUP_ICONS, featureGroup, FeatureGroupId, featureGroupIcon } from '../feature-group.util';
import { compareFeaturesForSelectedCountry, countryFlagImageUrl, getCountryFlag, isWorldCountry } from '../smart-batch-country.util';
import { AppFeature } from '../smart-batch.service';
import {
    getAppFeatureCatalogCopy,
    resolveAboutOverview,
} from '../../postman/postman-endpoint-copy.util';
import { MarkdownPipe } from '../../../shared/pipes/markdown.pipe';

type FlowDrag = { from: 'tray'; feature: AppFeature };

const DEFAULT_CHAIN_PORTS = new Set([
    'documentNumber',
    'documentType',
    'plate',
    'vin',
    'fullName',
    'processNumber',
]);

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
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        TranslocoModule,
        MarkdownPipe,
    ],
    host: { class: 'flex min-h-0 flex-1 flex-col' },
    template: `
        <div class="relative flex min-h-0 flex-1 flex-col" cdkDropListGroup>
            <section class="flow-canvas relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-800">
                <div class="flex shrink-0 items-center gap-2 border-b border-slate-200 px-3 py-2 dark:border-gray-800">
                    <button
                        type="button"
                        class="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-semibold text-slate-700 dark:border-gray-700 dark:bg-gray-900 dark:text-slate-200"
                        [matTooltip]="(libraryOpen() ? 'visitaGuide.flowHideLibrary' : 'visitaGuide.flowShowLibrary') | transloco"
                        (click)="toggleLibrary()"
                    >
                        <mat-icon>{{ libraryOpen() ? 'chevron_left' : 'menu' }}</mat-icon>
                        {{ 'visitaGuide.flowLibrary' | transloco }}
                    </button>
                    <div class="min-w-0 flex-1">
                        <p class="text-sm font-semibold text-slate-900 dark:text-white">{{ 'visitaGuide.flowCanvas' | transloco }}</p>
                        <p class="truncate text-[11px] text-slate-500">{{ 'visitaGuide.flowWiresHint' | transloco }}</p>
                    </div>
                    <button type="button" mat-icon-button (click)="zoomBy(-0.1)"><mat-icon>remove</mat-icon></button>
                    <button type="button" mat-icon-button (click)="zoomBy(0.1)"><mat-icon>add</mat-icon></button>
                    <button type="button" mat-icon-button [matTooltip]="'visitaGuide.flowAutoLayout' | transloco" (click)="autoLayout()"><mat-icon>account_tree</mat-icon></button>
                    <button
                        type="button"
                        class="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-semibold text-slate-700 dark:border-gray-700 dark:bg-gray-900 dark:text-slate-200"
                        [matTooltip]="(configOpen() ? 'visitaGuide.flowHideConfig' : 'visitaGuide.flowShowConfig') | transloco"
                        (click)="toggleConfig()"
                    >
                        {{ 'visitaGuide.flowConfig' | transloco }}
                        <mat-icon>{{ configOpen() ? 'chevron_right' : 'tune' }}</mat-icon>
                    </button>
                </div>
                <div #flowStage class="relative min-h-0 flex-1 overflow-hidden">
                <div
                    #viewport
                    class="absolute inset-0 overflow-hidden"
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
                                    stroke="transparent"
                                    stroke-width="18"
                                    class="cursor-pointer"
                                    [class.pointer-events-stroke]="!wire.locked"
                                    [class.pointer-events-none]="wire.locked"
                                    (click)="selectWire(wire.id); $event.stopPropagation()"
                                    (pointerdown)="$event.stopPropagation()"
                                />
                                <path
                                    [attr.d]="wire.d"
                                    fill="none"
                                    [attr.stroke-width]="selectedWireId() === wire.id ? 4 : 2.5"
                                    class="pointer-events-none"
                                    [attr.stroke]="selectedWireId() === wire.id ? '#0369a1' : wire.color"
                                />
                            }
                            @if (previewPath(); as preview) {
                                <path [attr.d]="preview" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="6 4" />
                            }
                        </svg>
                        @if (selectedWire(); as wire) {
                            <button
                                type="button"
                                class="absolute z-30 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-red-200 bg-white text-red-600 shadow-lg hover:bg-red-50 dark:border-red-800 dark:bg-gray-900 dark:text-red-400"
                                [style.left.px]="wire.mx"
                                [style.top.px]="wire.my"
                                [matTooltip]="'visitaGuide.flowDeleteWire' | transloco"
                                (pointerdown)="$event.stopPropagation()"
                                (click)="removeEdge(wire.id); $event.stopPropagation()"
                            >
                                <mat-icon class="!h-5 !w-5 !text-xl">delete</mat-icon>
                            </button>
                        }
                        @for (node of graph().nodes; track node.id) {
                            @if (node.kind !== 'merge') {
                            <div
                                class="flow-node absolute z-10 cursor-grab rounded-2xl shadow-sm ring-1 select-none active:cursor-grabbing"
                                [style.left.px]="node.x"
                                [style.top.px]="node.y"
                                [style.width.px]="nodeWidth(node)"
                                [ngClass]="nodeTone(node)"
                                [class.ring-2]="selectedId() === node.id"
                                [class.ring-sky-500]="selectedId() === node.id"
                                (pointerdown)="onNodePointerDown($event, node)"
                                (click)="onNodeClick(node)"
                            >
                                <div class="flex items-center gap-2 px-3 pt-3">
                                    <span class="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-700 dark:bg-gray-900">
                                        <mat-icon>{{ nodeIcon(node) }}</mat-icon>
                                        @if (node.feature) {
                                            @if (flag(node.feature); as flagSrc) {
                                                <img
                                                    [src]="flagSrc"
                                                    alt=""
                                                    class="absolute -bottom-0.5 -right-0.5 h-3.5 w-5 rounded-[2px] object-cover shadow-sm ring-1 ring-white dark:ring-gray-900"
                                                />
                                            } @else if (world(node.feature)) {
                                                <span
                                                    class="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-5 items-center justify-center rounded-[2px] bg-white text-[9px] shadow-sm ring-1 ring-white dark:bg-gray-900 dark:ring-gray-900"
                                                    aria-hidden="true"
                                                    >🌐</span
                                                >
                                            }
                                        }
                                    </span>
                                    <div class="min-w-0 flex-1">
                                        <p class="truncate text-sm font-semibold text-slate-900 dark:text-white">{{ nodeTitle(node) }}</p>
                                        @if (node.feature) {
                                            <p class="truncate font-mono text-[10px] text-slate-400">{{ pathLabel(node.feature) }}</p>
                                        }
                                    </div>
                                    @if (node.kind === 'endpoint') {
                                        <button
                                            type="button"
                                            class="text-slate-400 hover:text-sky-600"
                                            [matTooltip]="'visitaGuide.flowShowConfig' | transloco"
                                            (pointerdown)="$event.stopPropagation()"
                                            (click)="openNodeConfig(node.id); $event.stopPropagation()"
                                        >
                                            <mat-icon class="!h-4 !w-4 !text-base">tune</mat-icon>
                                        </button>
                                        <button type="button" class="text-slate-400 hover:text-red-500" (pointerdown)="$event.stopPropagation()" (click)="removeNode(node.id); $event.stopPropagation()">
                                            <mat-icon class="!h-4 !w-4 !text-base">close</mat-icon>
                                        </button>
                                    }
                                </div>
                                <div class="mt-2 grid grid-cols-2 gap-x-2 pb-2">
                                    <div>
                                    @for (port of inputPorts(node); track port) {
                                        <div
                                            data-flow-port
                                            class="relative flex h-8 cursor-grab items-center pl-5 pr-1 text-[11px] text-slate-600 select-none dark:text-slate-300"
                                            [class.bg-sky-100]="isHotInput(node, port)"
                                            [class.dark:bg-sky-950]="isHotInput(node, port)"
                                        >
                                            <button
                                                type="button"
                                                class="absolute -left-2 z-20 h-4 w-4 cursor-crosshair rounded-full border-2 border-white bg-slate-400 shadow"
                                                [class.bg-sky-500]="!!boundSource(node.id, port)"
                                                [class.ring-2]="isHotInput(node, port)"
                                                [class.ring-sky-400]="isHotInput(node, port)"
                                                (pointerdown)="onInputPortDown($event, node, port)"
                                            ></button>
                                            <span class="min-w-0 flex-1 truncate">{{ portLabel(node, port) }}</span>
                                            @if (canHidePort(node, 'inputs', port)) {
                                                <button
                                                    type="button"
                                                    class="ml-0.5 text-slate-300 hover:text-red-500"
                                                    [matTooltip]="'visitaGuide.flowRemoveParam' | transloco"
                                                    (pointerdown)="$event.stopPropagation()"
                                                    (click)="hideVisiblePort(node, 'inputs', port); $event.stopPropagation()"
                                                >
                                                    <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">close</mat-icon>
                                                </button>
                                            }
                                        </div>
                                    }
                                    @if (node.kind === 'endpoint') {
                                        <button
                                            type="button"
                                            class="ml-3 mt-1 inline-flex items-center rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-800 dark:bg-violet-950 dark:text-violet-200"
                                            [matMenuTriggerFor]="inputParamMenu"
                                            [matTooltip]="'visitaGuide.flowAddInputParams' | transloco"
                                            (pointerdown)="$event.stopPropagation()"
                                            (click)="$event.stopPropagation()"
                                        >
                                            {{ 'visitaGuide.flowAddParams' | transloco }}
                                        </button>
                                        <mat-menu #inputParamMenu="matMenu">
                                            @for (port of allInputChoices(node); track port) {
                                                <button
                                                    type="button"
                                                    mat-menu-item
                                                    (click)="toggleVisiblePort(node, 'inputs', port)"
                                                >
                                                    <mat-icon>{{ isPortVisible(node, 'inputs', port) ? 'check' : 'add' }}</mat-icon>
                                                    <span>{{ fieldLabel(port) }}</span>
                                                </button>
                                            }
                                            @if (!allInputChoices(node).length) {
                                                <button type="button" mat-menu-item disabled>
                                                    {{ 'visitaGuide.flowNoMoreParams' | transloco }}
                                                </button>
                                            }
                                        </mat-menu>
                                    }
                                    </div>
                                    <div>
                                    @for (port of outputPorts(node); track port) {
                                        <div
                                            data-flow-port
                                            class="relative flex h-8 cursor-grab items-center justify-end pl-1 pr-5 text-[11px] font-medium text-slate-700 select-none dark:text-slate-200"
                                        >
                                            @if (canHidePort(node, 'outputs', port)) {
                                                <button
                                                    type="button"
                                                    class="mr-0.5 text-slate-300 hover:text-red-500"
                                                    [matTooltip]="'visitaGuide.flowRemoveParam' | transloco"
                                                    (pointerdown)="$event.stopPropagation()"
                                                    (click)="hideVisiblePort(node, 'outputs', port); $event.stopPropagation()"
                                                >
                                                    <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">close</mat-icon>
                                                </button>
                                            }
                                            <span class="min-w-0 truncate">{{ fieldLabel(port) }}</span>
                                            <button
                                                type="button"
                                                class="absolute -right-2 z-20 h-4 w-4 cursor-crosshair rounded-full border-2 border-white bg-emerald-500 shadow"
                                                [class.ring-2]="hasOutgoing(node.id, port)"
                                                [class.ring-emerald-300]="hasOutgoing(node.id, port)"
                                                (pointerdown)="onOutputPortDown($event, node, port)"
                                            ></button>
                                        </div>
                                    }
                                    @if (node.kind === 'endpoint') {
                                        <div class="mt-1 flex justify-end pr-3">
                                            <button
                                                type="button"
                                                class="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                                                [matMenuTriggerFor]="outputParamMenu"
                                                [matTooltip]="'visitaGuide.flowAddOutputParams' | transloco"
                                                (pointerdown)="$event.stopPropagation()"
                                                (click)="$event.stopPropagation()"
                                            >
                                                {{ 'visitaGuide.flowAddParams' | transloco }}
                                            </button>
                                        </div>
                                        <mat-menu #outputParamMenu="matMenu">
                                            @for (port of allOutputChoices(node); track port) {
                                                <button
                                                    type="button"
                                                    mat-menu-item
                                                    (click)="toggleVisiblePort(node, 'outputs', port)"
                                                >
                                                    <mat-icon>{{ isPortVisible(node, 'outputs', port) ? 'check' : 'add' }}</mat-icon>
                                                    <span>{{ fieldLabel(port) }}</span>
                                                </button>
                                            }
                                            @if (!allOutputChoices(node).length) {
                                                <button type="button" mat-menu-item disabled>
                                                    {{ 'visitaGuide.flowNoMoreParams' | transloco }}
                                                </button>
                                            }
                                        </mat-menu>
                                    }
                                    </div>
                                </div>
                            </div>
                            }
                        }
                    </div>
                </div>

                    <aside
                        #libraryPanel
                        class="flow-drawer flow-drawer-left absolute z-20 flex w-[min(26rem,46vw)] min-w-[18rem] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-xl backdrop-blur dark:border-gray-700 dark:bg-gray-900/95"
                        [class.is-open]="libraryOpen()"
                        [class.is-home]="libraryAtHome()"
                        [class.is-dragging]="libraryDragging()"
                        [attr.aria-hidden]="!libraryOpen()"
                        [style.left.px]="libraryPos().x"
                        [style.top.px]="libraryPos().y"
                        [style.height]="libraryHeight()"
                    >
                            <div
                                class="flex shrink-0 cursor-grab items-center gap-2 border-b border-slate-100 px-3 py-2 select-none active:cursor-grabbing dark:border-gray-800"
                                (pointerdown)="onLibraryDragStart($event)"
                                (pointermove)="onLibraryDragMove($event)"
                                (pointerup)="onLibraryDragEnd()"
                                (pointercancel)="onLibraryDragEnd()"
                            >
                                <mat-icon class="!h-4 !w-4 !text-base text-slate-400">drag_indicator</mat-icon>
                                <p class="min-w-0 flex-1 text-sm font-semibold text-slate-900 dark:text-white">{{ 'visitaGuide.flowLibrary' | transloco }}</p>
                                <button type="button" mat-icon-button [matTooltip]="'visitaGuide.flowHideLibrary' | transloco" (click)="libraryOpen.set(false); $event.stopPropagation()" (pointerdown)="$event.stopPropagation()">
                                    <mat-icon>close</mat-icon>
                                </button>
                            </div>
                            <div class="shrink-0 space-y-2 border-b border-slate-100 px-3 py-2 dark:border-gray-800">
                                <input
                                    type="search"
                                    class="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm outline-none focus:border-sky-500 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                                    [placeholder]="'visitaGuide.endpointsSearch' | transloco"
                                    [value]="query()"
                                    (input)="queryChange.emit($any($event.target).value)"
                                />
                                @if (paramFilterFields().length) {
                                    <button
                                        type="button"
                                        class="inline-flex h-8 w-full items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-semibold text-slate-700 dark:border-gray-700 dark:bg-gray-950 dark:text-slate-200"
                                        [matMenuTriggerFor]="paramFilterMenu"
                                    >
                                        <span class="inline-flex min-w-0 items-center gap-1.5">
                                            <mat-icon class="!h-4 !w-4 !text-base">filter_list</mat-icon>
                                            <span class="truncate">{{ 'visitaGuide.paramFilterTitle' | transloco }}</span>
                                        </span>
                                        @if (activeParamFilters().length) {
                                            <span class="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-950 px-1.5 text-[10px] font-bold text-white dark:bg-white dark:text-gray-950">{{
                                                activeParamFilters().length
                                            }}</span>
                                        } @else {
                                            <mat-icon class="!h-4 !w-4 !text-base text-slate-400">expand_more</mat-icon>
                                        }
                                    </button>
                                    <mat-menu #paramFilterMenu="matMenu" class="visita-param-filter-menu">
                                        @for (field of paramFilterFields(); track field) {
                                            <button
                                                type="button"
                                                mat-menu-item
                                                (click)="$event.stopPropagation(); toggleParamFilter.emit(field)"
                                            >
                                                <mat-checkbox
                                                    class="pointer-events-none"
                                                    [checked]="isParamFilterActive(field)"
                                                >
                                                    {{ fieldLabel(field) }}
                                                </mat-checkbox>
                                            </button>
                                        }
                                        @if (activeParamFilters().length) {
                                            <button type="button" mat-menu-item (click)="clearParamFilters.emit()">
                                                {{ 'visitaGuide.paramFilterClear' | transloco }}
                                            </button>
                                        }
                                    </mat-menu>
                                }
                                <div class="flex flex-wrap items-center gap-2">
                                    <button type="button" class="inline-flex h-8 items-center rounded-lg border border-red-200 bg-red-50 px-3 text-xs font-semibold text-red-700" (click)="clearFlow()">
                                        {{ 'visitaGuide.clearEndpoints' | transloco }}
                                    </button>
                                    <span class="text-[11px] text-slate-400">{{ selectedCountLabel() }}</span>
                                </div>
                            </div>
                            <div class="min-h-0 flex-1 overflow-y-auto p-3">
                                @if (loading() && !tray().length) {
                                    <div class="flex flex-col items-center gap-3 py-10">
                                        <mat-spinner diameter="36"></mat-spinner>
                                    </div>
                                }
                                @for (group of trayGroups(); track group.id) {
                                    <p class="sticky top-0 z-[1] mb-1.5 flex items-center gap-1 bg-white/95 px-1 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-gray-900/95">
                                        <mat-icon class="!h-4 !w-4 !text-base">{{ group.icon }}</mat-icon>
                                        {{ group.labelKey | transloco }}
                                    </p>
                                    <div cdkDropList [cdkDropListData]="group.items" [cdkDropListSortingDisabled]="true" class="mb-4 flex flex-col gap-2">
                                        @for (feature of group.items; track feature._id) {
                                            <div
                                                cdkDrag
                                                [cdkDragData]="trayDrag(feature)"
                                                class="cursor-grab rounded-xl border bg-white p-3 dark:bg-gray-950"
                                                [ngClass]="tone(feature)"
                                                (dblclick)="attachToSelected(feature)"
                                                (cdkDragStarted)="onTrayDragStart()"
                                                (cdkDragEnded)="onTrayDragEnd()"
                                            >
                                                <div *cdkDragPlaceholder class="h-2"></div>
                                                <div class="flex items-start gap-2">
                                                    <mat-icon class="mt-1 !h-4 !w-4 !text-base text-slate-400">drag_indicator</mat-icon>
                                                    <span class="relative mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-slate-200">
                                                        <mat-icon class="!h-5 !w-5 !text-[22px]">{{ icon(feature) }}</mat-icon>
                                                        @if (flag(feature); as flagSrc) {
                                                            <img
                                                                [src]="flagSrc"
                                                                alt=""
                                                                class="absolute -bottom-0.5 -right-0.5 h-3.5 w-5 rounded-[2px] object-cover shadow-sm ring-1 ring-white dark:ring-gray-900"
                                                            />
                                                        } @else if (world(feature)) {
                                                            <span
                                                                class="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-5 items-center justify-center rounded-[2px] bg-white text-[9px] shadow-sm ring-1 ring-white dark:bg-gray-900 dark:ring-gray-900"
                                                                aria-hidden="true"
                                                                >🌐</span
                                                            >
                                                        } @else {
                                                            <span
                                                                class="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-5 items-center justify-center rounded-[2px] bg-white text-[10px] leading-none shadow-sm ring-1 ring-white dark:bg-gray-900 dark:ring-gray-900"
                                                                aria-hidden="true"
                                                                >{{ countryMark(feature) }}</span
                                                            >
                                                        }
                                                    </span>
                                                    <div class="min-w-0 flex-1">
                                                        <p class="text-sm font-medium leading-snug text-slate-900 dark:text-white">{{ name(feature) }}</p>
                                                        <div class="mt-1.5 flex flex-wrap gap-1">
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
                        </aside>

                    <aside
                        class="flow-drawer flow-drawer-right absolute inset-y-2 right-2 z-20 flex w-[min(22rem,40vw)] min-w-[16rem] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-xl backdrop-blur dark:border-gray-700 dark:bg-gray-900/95"
                        [class.is-open]="configOpen()"
                        [attr.aria-hidden]="!configOpen()"
                    >
                            <div class="flex shrink-0 items-center gap-2 border-b border-slate-100 px-3 py-2 dark:border-gray-800">
                                <p class="min-w-0 flex-1 text-sm font-semibold text-slate-900 dark:text-white">{{ 'visitaGuide.flowConfig' | transloco }}</p>
                                <button type="button" mat-icon-button [matTooltip]="'visitaGuide.flowHideConfig' | transloco" (click)="configOpen.set(false)">
                                    <mat-icon>close</mat-icon>
                                </button>
                            </div>
                            <div class="min-h-0 flex-1 overflow-y-auto p-3">
                                @if (selectedNode(); as node) {
                                    <p class="text-sm font-medium text-slate-900 dark:text-white">{{ nodeTitle(node) }}</p>
                                    @if (node.feature) {
                                        <p class="mt-1 font-mono text-[11px] text-slate-500">{{ requestLabel(node.feature) }}</p>
                                        @if (featureDescription(node.feature); as about) {
                                            <p class="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{{ 'visitaGuide.flowEndpointAbout' | transloco }}</p>
                                            <div
                                                class="endpoint-about mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                                                [innerHTML]="about | markdown"
                                            ></div>
                                        }
                                        <p class="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{{ 'visitaGuide.flowInputs' | transloco }}</p>
                                        <button
                                            type="button"
                                            class="mt-2 inline-flex items-center rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-800 dark:bg-violet-950 dark:text-violet-200"
                                            [matMenuTriggerFor]="configInputMenu"
                                        >
                                            {{ 'visitaGuide.flowAddInputParams' | transloco }}
                                        </button>
                                        <mat-menu #configInputMenu="matMenu">
                                            @for (port of allInputChoices(node); track port) {
                                                <button
                                                    type="button"
                                                    mat-menu-item
                                                    (click)="toggleVisiblePort(node, 'inputs', port)"
                                                >
                                                    <mat-icon>{{ isPortVisible(node, 'inputs', port) ? 'check' : 'add' }}</mat-icon>
                                                    <span>{{ fieldLabel(port) }}</span>
                                                </button>
                                            }
                                        </mat-menu>
                                        @for (port of inputPorts(node); track port) {
                                            <div class="mt-2 rounded-xl border border-slate-200 p-2 dark:border-gray-800">
                                                <div class="flex items-start justify-between gap-2">
                                                    <p class="text-xs font-medium text-slate-800 dark:text-slate-100">{{ fieldLabel(port) }}</p>
                                                    @if (canHidePort(node, 'inputs', port)) {
                                                        <button
                                                            type="button"
                                                            class="text-slate-400 hover:text-red-500"
                                                            [matTooltip]="'visitaGuide.flowRemoveParam' | transloco"
                                                            (click)="hideVisiblePort(node, 'inputs', port)"
                                                        >
                                                            <mat-icon class="!h-4 !w-4 !text-base">close</mat-icon>
                                                        </button>
                                                    }
                                                </div>
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
                                        <button
                                            type="button"
                                            class="mt-2 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                                            [matMenuTriggerFor]="configOutputMenu"
                                        >
                                            {{ 'visitaGuide.flowAddOutputParams' | transloco }}
                                        </button>
                                        <mat-menu #configOutputMenu="matMenu">
                                            @for (port of allOutputChoices(node); track port) {
                                                <button
                                                    type="button"
                                                    mat-menu-item
                                                    (click)="toggleVisiblePort(node, 'outputs', port)"
                                                >
                                                    <mat-icon>{{ isPortVisible(node, 'outputs', port) ? 'check' : 'add' }}</mat-icon>
                                                    <span>{{ fieldLabel(port) }}</span>
                                                </button>
                                            }
                                        </mat-menu>
                                        <div class="mt-2 flex flex-wrap gap-1">
                                            @for (port of outputPorts(node); track port) {
                                                <span class="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                                                    {{ fieldLabel(port) }}
                                                    @if (canHidePort(node, 'outputs', port)) {
                                                        <button
                                                            type="button"
                                                            class="text-emerald-700 hover:text-red-500"
                                                            [matTooltip]="'visitaGuide.flowRemoveParam' | transloco"
                                                            (click)="hideVisiblePort(node, 'outputs', port)"
                                                        >
                                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">close</mat-icon>
                                                        </button>
                                                    }
                                                </span>
                                            }
                                        </div>
                                    } @else {
                                        <p class="mt-3 text-sm text-slate-500">{{ inspectorHint(node) }}</p>
                                    }
                                } @else {
                                    <p class="text-sm text-slate-500">{{ 'visitaGuide.flowInspectorEmpty' | transloco }}</p>
                                }
                            </div>
                        </aside>
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
            .flow-node,
            .flow-node p,
            .flow-node span {
                user-select: none;
                -webkit-user-select: none;
            }
            .flow-node button {
                cursor: pointer;
            }
            .endpoint-about :where(p, ul, ol) {
                margin: 0;
            }
            .endpoint-about :where(p + p, p + ul, ul + p) {
                margin-top: 0.5rem;
            }
            .endpoint-about ul {
                list-style: disc;
                padding-left: 1.1rem;
            }
            .flow-drawer {
                pointer-events: none;
                opacity: 0;
                visibility: hidden;
            }
            .flow-drawer-left.is-home {
                will-change: transform, opacity;
                transform: translate3d(calc(-100% - 1rem), 0, 0);
                transition:
                    transform 380ms cubic-bezier(0.22, 1, 0.36, 1),
                    opacity 220ms ease,
                    visibility 0s linear 380ms;
            }
            .flow-drawer-left.is-home.is-open {
                pointer-events: auto;
                opacity: 1;
                visibility: visible;
                transform: translate3d(0, 0, 0);
                transition:
                    transform 380ms cubic-bezier(0.22, 1, 0.36, 1),
                    opacity 180ms ease,
                    visibility 0s;
            }
            .flow-drawer-left:not(.is-home) {
                transform: none;
                transition: none;
            }
            .flow-drawer-left:not(.is-home).is-open,
            .flow-drawer-right.is-open {
                pointer-events: auto;
                opacity: 1;
                visibility: visible;
            }
            .flow-drawer-right {
                transform: translate3d(calc(100% + 1rem), 0, 0);
                transition:
                    transform 380ms cubic-bezier(0.22, 1, 0.36, 1),
                    opacity 220ms ease,
                    visibility 0s linear 380ms;
            }
            .flow-drawer-right.is-open {
                transform: translate3d(0, 0, 0);
                transition:
                    transform 380ms cubic-bezier(0.22, 1, 0.36, 1),
                    opacity 180ms ease,
                    visibility 0s;
            }
            .flow-drawer.is-dragging {
                transition: none;
            }
            @media (prefers-reduced-motion: reduce) {
                .flow-drawer {
                    transition: none;
                }
            }
        `,
    ],
})
export class EndpointChainBoardComponent {
    private _transloco = inject(TranslocoService);
    private readonly _activeLang = toSignal(this._transloco.langChanges$, {
        initialValue: this._transloco.getActiveLang(),
    });
    private _confirm = inject(FuseConfirmationService);
    private readonly _viewport = viewChild<ElementRef<HTMLElement>>('viewport');
    private readonly _flowStage = viewChild<ElementRef<HTMLElement>>('flowStage');
    private readonly _libraryPanel = viewChild<ElementRef<HTMLElement>>('libraryPanel');

    features = input<AppFeature[]>([]);
    chain = input<AppFeature[]>([]);
    flowGraph = input<FlowGraph | null>(null);
    query = input('');
    loading = input(false);
    paramFilterFields = input<string[]>([]);
    activeParamFilters = input<string[]>([]);
    selectedCountries = input<string[]>([]);

    chainChange = output<AppFeature[]>();
    graphChange = output<FlowGraph>();
    continueChain = output<void>();
    queryChange = output<string>();
    toggleParamFilter = output<string>();
    clearParamFilters = output<void>();
    hoverEnter = output<{ feature: AppFeature; event: MouseEvent }>();
    hoverMove = output<{ feature: AppFeature; event: MouseEvent }>();
    hoverLeave = output<void>();

    profiles = signal<Record<string, ChainProfile>>({});
    graph = signal<FlowGraph>(emptyFlowGraph());
    selectedId = signal<string | null>(FLOW_START_ID);
    selectedWireId = signal<string | null>(null);
    libraryOpen = signal(true);
    configOpen = signal(false);
    libraryPos = signal({ x: 8, y: 8 });
    libraryDragging = signal(false);
    readonly libraryAtHome = computed(() => {
        const pos = this.libraryPos();
        return Math.abs(pos.x - 8) < 2 && Math.abs(pos.y - 8) < 2;
    });
    private _libraryDrag: { px: number; py: number; x: number; y: number } | null = null;
    zoom = signal(1);
    panX = signal(0);
    panY = signal(0);
    linking = signal<{ from: string; fromPort: string } | null>(null);
    cursor = signal({ x: 0, y: 0 });
    readonly enumClass = paramEnumChipClass;
    private readonly _dropBuckets = new Map<string, unknown[]>();
    private _panning: { x: number; y: number; panX: number; panY: number } | null = null;
    private _moving: { id: string; dx: number; dy: number } | null = null;
    private _panelsBeforeMove: { library: boolean; config: boolean } | null = null;
    private _didMove = false;

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
            items: this.tray()
                .filter((feature) => featureGroup(feature) === group.id)
                .sort(compareFeaturesForSelectedCountry),
        })).filter((group) => group.items.length)
    );

    readonly endpointNodes = computed(() => listEndpointNodes(this.graph()));
    readonly selectedNode = computed(() => nodeById(this.graph(), this.selectedId() ?? '') ?? null);
    readonly selectedWire = computed(() => this.wires().find((wire) => wire.id === this.selectedWireId()) ?? null);
    readonly worldTransform = computed(() => `translate(${this.panX()}px, ${this.panY()}px) scale(${this.zoom()})`);

    readonly wires = computed(() => {
        const graph = this.graph();
        let colorIndex = 0;
        return graph.edges
            .map((edge) => {
                const from = nodeById(graph, edge.from);
                const to = nodeById(graph, edge.to);
                if (!from || !to || from.kind === 'merge' || to.kind === 'merge') return null;
                const fromPorts = this.outputPorts(from);
                const toPorts = this.inputPorts(to);
                const fromIndex = Math.max(0, fromPorts.indexOf(edge.fromPort));
                const toIndex = Math.max(0, toPorts.indexOf(edge.toPort));
                const start = portCenter(from, 'out', fromIndex, 0);
                const end = portCenter(to, 'in', toIndex, 0);
                const color = wireColorForIndex(colorIndex);
                colorIndex += 1;
                return {
                    id: edge.id,
                    d: cubicWire(start, end),
                    mx: (start.x + end.x) / 2,
                    my: (start.y + end.y) / 2,
                    color,
                    locked: edge.to === FLOW_RESULT_ID,
                };
            })
            .filter((wire): wire is { id: string; d: string; mx: number; my: number; color: string; locked: boolean } => !!wire);
    });

    readonly previewPath = computed(() => {
        const link = this.linking();
        if (!link) return '';
        const from = nodeById(this.graph(), link.from);
        if (!from) return '';
        const ports = this.outputPorts(from);
        const start = portCenter(from, 'out', Math.max(0, ports.indexOf(link.fromPort)), 0);
        return cubicWire(start, this.cursor());
    });

    private readonly _hydrateEffect = effect(() => {
        const features = [...this.features(), ...flattenFlowGraph(this.graph()), ...this.chain()];
        untracked(() => this._hydrate(features));
    });

    private readonly _syncTreeEffect = effect(() => {
        const incoming = this.chain();
        const saved = this.flowGraph();
        untracked(() => {
            if (saved && sameFlowFeatureSet(saved, incoming) && listEndpointNodes(saved).length) {
                const next = ensureResultSinks(saved);
                if (!sameFlowLayout(this.graph(), next)) {
                    this.graph.set(next);
                    this._emit();
                }
                return;
            }
            if (sameFlowFeatures(this.graph(), incoming)) return;
            this.graph.set(graphFromLinearChain(incoming, this.profiles()));
            this.selectNode(incoming[0]?._id ?? FLOW_START_ID, false);
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
            this._hidePanelsForMove();
            this.graph.set(moveFlowNode(this.graph(), this._moving.id, point.x - this._moving.dx, point.y - this._moving.dy));
        }
    }

    @HostListener('document:pointerup', ['$event'])
    onPointerUp(event: PointerEvent): void {
        const wasMoving = Boolean(this._moving);
        this._panning = null;
        this._moving = null;
        this.onLibraryDragEnd();
        if (wasMoving) {
            this._restorePanelsAfterMove();
            if (this._didMove) this._emit();
        }
        const link = this.linking();
        if (!link) return;
        this.linking.set(null);
        const target = this._hitInputPort(this._toWorld(event), link.from);
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
        this.configOpen.set(false);
        this.selectedWireId.set(null);
        this._panning = { x: event.clientX, y: event.clientY, panX: this.panX(), panY: this.panY() };
    }

    onNodePointerDown(event: PointerEvent, node: FlowGraphNode): void {
        if ((event.target as HTMLElement).closest('button')) return;
        event.preventDefault();
        event.stopPropagation();
        const point = this._toWorld(event);
        this._didMove = false;
        this._moving = { id: node.id, dx: point.x - node.x, dy: point.y - node.y };
        this._hidePanelsForMove();
        this.selectedWireId.set(null);
        this.selectedId.set(node.id);
    }

    onNodeClick(node: FlowGraphNode): void {
        if (this._didMove) {
            this._didMove = false;
            return;
        }
        this.selectNode(node.id, false);
    }

    onOutputPortDown(event: PointerEvent, node: FlowGraphNode, port: string): void {
        event.stopPropagation();
        event.preventDefault();
        this._moving = null;
        this.libraryOpen.set(false);
        this.configOpen.set(false);
        this.selectedWireId.set(null);
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
        this.graph.set(
            layoutFlowGraph(this.graph(), (node) =>
                Math.max(this.inputPorts(node).length, this.outputPorts(node).length, 1)
            )
        );
        this._emit();
    }

    toggleLibrary(): void {
        const next = !this.libraryOpen();
        this.libraryOpen.set(next);
        if (next) this.configOpen.set(false);
    }

    libraryHeight(): string {
        return `calc(100% - ${this.libraryPos().y + 8}px)`;
    }

    onLibraryDragStart(event: PointerEvent): void {
        if (!this.libraryOpen()) return;
        const target = event.target as HTMLElement;
        if (target.closest('button, a, input, textarea')) return;
        event.preventDefault();
        event.stopPropagation();
        const pos = this.libraryPos();
        this._libraryDrag = { px: event.clientX, py: event.clientY, x: pos.x, y: pos.y };
        this.libraryDragging.set(true);
        (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    }

    onLibraryDragMove(event: PointerEvent): void {
        const drag = this._libraryDrag;
        if (!drag) return;
        event.preventDefault();
        const stage = this._flowStage()?.nativeElement;
        const panel = this._libraryPanel()?.nativeElement;
        if (!stage || !panel) return;
        const bounds = stage.getBoundingClientRect();
        const nextX = drag.x + (event.clientX - drag.px);
        const nextY = drag.y + (event.clientY - drag.py);
        const maxX = Math.max(8, bounds.width - panel.offsetWidth - 8);
        const maxY = Math.max(8, bounds.height - 120);
        this.libraryPos.set({
            x: Math.min(maxX, Math.max(8, nextX)),
            y: Math.min(maxY, Math.max(8, nextY)),
        });
    }

    onLibraryDragEnd(): void {
        this._libraryDrag = null;
        this.libraryDragging.set(false);
    }

    toggleConfig(): void {
        const next = !this.configOpen();
        this.configOpen.set(next);
        if (next) this.libraryOpen.set(false);
    }

    onTrayDragStart(): void {
        this._hidePanelsForMove();
    }

    onTrayDragEnd(): void {
        this._restorePanelsAfterMove();
    }

    private _hidePanelsForMove(): void {
        this.onLibraryDragEnd();
        if (this._panelsBeforeMove) return;
        this._didMove = true;
        this._panelsBeforeMove = { library: this.libraryOpen(), config: this.configOpen() };
        this.libraryOpen.set(false);
        this.configOpen.set(false);
    }

    private _restorePanelsAfterMove(): void {
        const previous = this._panelsBeforeMove;
        this._panelsBeforeMove = null;
        if (!previous) return;
        this.libraryOpen.set(previous.library);
        this.configOpen.set(previous.config);
    }

    selectNode(id: string, revealConfig = false): void {
        this.selectedId.set(id);
        if (!revealConfig) return;
        this.configOpen.set(true);
        this.libraryOpen.set(false);
        this.selectedWireId.set(null);
    }

    openNodeConfig(id: string): void {
        this.selectNode(id, true);
    }

    nodeWidth(node: FlowGraphNode): number {
        return flowNodeWidth(node);
    }

    inputPorts(node: FlowGraphNode): string[] {
        if (node.kind === 'start') return [];
        if (node.kind === 'result') {
            return this.graph()
                .edges.filter((edge) => edge.to === FLOW_RESULT_ID)
                .map((edge) => edge.toPort);
        }
        return this._visiblePorts(
            node,
            'inputs',
            [...this._defaultInputPorts(node), ...this._wiredInputPorts(node), ...extraPortsFor(this.graph(), node.id, 'inputs')]
        );
    }

    outputPorts(node: FlowGraphNode): string[] {
        if (node.kind === 'start') return startOutputPorts(this.graph(), this.profiles());
        if (node.kind === 'result') return [];
        return this._visiblePorts(
            node,
            'outputs',
            [...this._defaultOutputPorts(node), ...this._wiredOutputPorts(node), ...extraPortsFor(this.graph(), node.id, 'outputs')]
        );
    }

    allInputChoices(node: FlowGraphNode): string[] {
        return this._uniquePorts(this.profiles()[node.id]?.inputs ?? []);
    }

    allOutputChoices(node: FlowGraphNode): string[] {
        return this._uniquePorts([...(this.profiles()[node.id]?.outputs ?? []), '*']);
    }

    isPortVisible(node: FlowGraphNode, side: 'inputs' | 'outputs', port: string): boolean {
        return (side === 'inputs' ? this.inputPorts(node) : this.outputPorts(node)).includes(port);
    }

    canHidePort(node: FlowGraphNode, _side: 'inputs' | 'outputs', _port: string): boolean {
        return node.kind === 'endpoint';
    }

    hideVisiblePort(node: FlowGraphNode, side: 'inputs' | 'outputs', port: string): void {
        if (!this.canHidePort(node, side, port)) return;
        const next = hidePort(this.graph(), node.id, side, port);
        const selected = this.selectedWireId();
        if (selected && !next.edges.some((edge) => edge.id === selected)) {
            this.selectedWireId.set(null);
        }
        this.graph.set(next);
        this._emit();
    }

    toggleVisiblePort(node: FlowGraphNode, side: 'inputs' | 'outputs', port: string): void {
        if (this.isPortVisible(node, side, port)) {
            this.hideVisiblePort(node, side, port);
            return;
        }
        this.graph.set(addExtraPort(this.graph(), node.id, side, port));
        this._emit();
    }

    private _visiblePorts(node: FlowGraphNode, side: 'inputs' | 'outputs', ports: string[]): string[] {
        const hidden = new Set(hiddenPortsFor(this.graph(), node.id, side));
        return this._uniquePorts(ports).filter((port) => !hidden.has(port));
    }

    private _defaultInputPorts(node: FlowGraphNode): string[] {
        const profile = this.profiles()[node.id];
        const catalog = profile?.inputs ?? [];
        const required = (node.feature ? requiredVisibleFields(node.feature) : [])
            .map((field) => canonicalChainField(field))
            .filter((field) => catalog.includes(field));
        if (required.length) return required;
        return catalog.filter((field) => DEFAULT_CHAIN_PORTS.has(field)).slice(0, 2);
    }

    private _defaultOutputPorts(node: FlowGraphNode): string[] {
        const catalog = this.profiles()[node.id]?.outputs ?? [];
        const seeds = catalog.filter((field) => DEFAULT_CHAIN_PORTS.has(field));
        return (seeds.length ? seeds : catalog).slice(0, 3);
    }

    private _wiredInputPorts(node: FlowGraphNode): string[] {
        const fixed = Object.keys(this.graph().fixed[node.id] ?? {});
        const wired = this.graph()
            .edges.filter((edge) => edge.to === node.id && edge.toPort !== '*')
            .map((edge) => edge.toPort);
        return [...fixed, ...wired];
    }

    private _wiredOutputPorts(node: FlowGraphNode): string[] {
        return this.graph()
            .edges.filter(
                (edge) =>
                    edge.from === node.id &&
                    edge.fromPort !== '*' &&
                    edge.to !== FLOW_RESULT_ID
            )
            .map((edge) => edge.fromPort);
    }

    private _uniquePorts(ports: string[]): string[] {
        return [...new Set(ports.filter(Boolean))];
    }

    boundSource(nodeId: string, port: string): string {
        const fixed = this.graph().fixed[nodeId]?.[port];
        if (fixed) return this._transloco.translate('visitaGuide.flowFixedValue') + ' ' + fixed;
        const edge = incomingEdgeForField(this.graph(), nodeId, port);
        if (!edge) return '';
        const from = nodeById(this.graph(), edge.from);
        if (!from) return '';
        return `${this.fieldLabel(edge.fromPort)} · ${this.nodeTitle(from)}`;
    }

    hasOutgoing(nodeId: string, port: string): boolean {
        return outgoingEdges(this.graph(), nodeId, port).length > 0;
    }

    isHotInput(node: FlowGraphNode, port: string): boolean {
        const link = this.linking();
        if (!link || link.from === node.id) return false;
        return fieldsLikelyCompatible(link.fromPort, port) || link.fromPort === '*' || port === '*';
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
        return this._transloco.translate('visitaGuide.flowResultHint');
    }

    nodeTitle(node: FlowGraphNode): string {
        if (node.kind === 'start') return this._transloco.translate('visitaGuide.flowStart');
        if (node.kind === 'result') return this._transloco.translate('visitaGuide.flowResult');
        return node.feature ? this.name(node.feature) : node.id;
    }

    nodeIcon(node: FlowGraphNode): string {
        if (node.kind === 'start') return 'play_arrow';
        if (node.kind === 'result') return 'inventory_2';
        return node.feature ? this.icon(node.feature) : 'hub';
    }

    nodeTone(node: FlowGraphNode): string {
        if (node.kind === 'start') return 'bg-emerald-50 ring-emerald-200 dark:bg-emerald-950 dark:ring-emerald-800';
        if (node.kind === 'result') return 'bg-rose-50 ring-rose-200 dark:bg-rose-950 dark:ring-rose-800';
        return node.feature ? this.tone(node.feature) : 'bg-white';
    }

    fieldLabel(field: string): string {
        if (field === '*') return this._transloco.translate('visitaGuide.flowFullResponse');
        const key = paramFieldLabelKey(field);
        return this._transloco.translate(key, { field: humanizeParamField(field) });
    }

    isParamFilterActive(field: string): boolean {
        return this.activeParamFilters().includes(field);
    }

    portLabel(node: FlowGraphNode, port: string): string {
        if (node.kind === 'result') {
            const source = nodeById(this.graph(), port);
            if (source) return this.nodeTitle(source);
        }
        return this.fieldLabel(port);
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
        this._place(feature, x, y);
    }

    clearFlow(): void {
        this.graph.set(emptyFlowGraph());
        this.selectNode(FLOW_START_ID, false);
        this.libraryOpen.set(true);
        this.configOpen.set(false);
        this._emit();
    }

    removeNode(id: string): void {
        this.graph.set(removeFlowNode(this.graph(), id));
        this.selectNode(FLOW_START_ID, false);
        this.configOpen.set(false);
        this._emit();
    }

    selectWire(id: string): void {
        const edge = this.graph().edges.find((item) => item.id === id);
        if (edge?.to === FLOW_RESULT_ID) return;
        this.selectedWireId.set(id);
        this.configOpen.set(false);
    }

    removeEdge(id: string): void {
        const edge = this.graph().edges.find((item) => item.id === id);
        if (edge?.to === FLOW_RESULT_ID) return;
        this.graph.set(removeFlowEdge(this.graph(), id));
        this.selectedWireId.set(null);
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
        this._activeLang();
        const catalog = getAppFeatureCatalogCopy(this._transloco, feature.code);
        if (catalog.title) return catalog.title;
        const lang = (this._activeLang() ?? this._transloco.getActiveLang()).split('-')[0].toLowerCase();
        if (lang === 'es' && feature.nameES?.trim()) return feature.nameES.trim();
        return feature.name;
    }

    featureDescription(feature: AppFeature): string {
        this._activeLang();
        const locale = (this._activeLang() ?? this._transloco.getActiveLang()).split('-')[0].toLowerCase();
        const catalog = getAppFeatureCatalogCopy(this._transloco, feature.code);
        return resolveAboutOverview({
            endpoint: feature,
            catalogDescription: catalog.description ?? '',
            locale,
        }).trim();
    }

    icon(feature: AppFeature): string {
        return featureGroupIcon(feature);
    }

    flag(feature: AppFeature): string | null {
        return countryFlagImageUrl(feature.country);
    }

    countryMark(feature: AppFeature): string {
        if (this.world(feature)) return '🌐';
        return getCountryFlag(feature.country);
    }

    world(feature: AppFeature): boolean {
        return isWorldCountry(feature.country);
    }

    private _place(feature: AppFeature, x: number, y: number): void {
        if (!feature._id || usedFeatureIds(this.graph()).includes(feature._id)) return;
        this._hydrate([feature]);
        this.graph.set(addEndpointNode(this.graph(), feature, x, y));
        this.selectNode(feature._id, false);
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

    private _hitInputPort(
        point: { x: number; y: number },
        excludeNodeId?: string
    ): { nodeId: string; port: string } | null {
        const over = this.graph().nodes.filter((node) => {
            if (node.id === excludeNodeId) return false;
            return this._pointInNode(point, node);
        });
        const candidates = over.length ? over : this.graph().nodes.filter((node) => node.id !== excludeNodeId);
        let best: { nodeId: string; port: string; distance: number } | null = null;
        for (const node of candidates) {
            const ports = this.inputPorts(node);
            for (let index = 0; index < ports.length; index += 1) {
                const center = portCenter(node, 'in', index, 0);
                const distance = Math.hypot(center.x - point.x, center.y - point.y);
                const onLeft = point.x >= node.x - 28 && point.x <= node.x + this.nodeWidth(node) / 2 + 8;
                const onRow = onLeft && Math.abs(center.y - point.y) <= 16;
                if (!over.length && distance > 40 && !onRow) continue;
                const score = onRow ? Math.min(distance, 10) : distance;
                if (!best || score < best.distance) best = { nodeId: node.id, port: ports[index], distance: score };
            }
        }
        return best ? { nodeId: best.nodeId, port: best.port } : null;
    }

    private _pointInNode(point: { x: number; y: number }, node: FlowGraphNode): boolean {
        const width = this.nodeWidth(node);
        const rows = Math.max(this.inputPorts(node).length, this.outputPorts(node).length, 1);
        const height = flowNodeHeight(node, rows);
        return (
            point.x >= node.x - 24 &&
            point.x <= node.x + width + 24 &&
            point.y >= node.y &&
            point.y <= node.y + height
        );
    }
}
