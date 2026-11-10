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
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    flowSeedFields,
    FLOW_RESULT_ID,
    FLOW_START_ID,
    FlowGraph,
    FlowGraphNode,
    flowNodeWidth,
    incomingEdge,
    incomingEdgeForField,
    outgoingEdges,
    layoutFlowGraph,
    moveFlowNode,
    nodeById,
    planEndpointLink,
    portCenter,
    restoreUnfedInputs,
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
    applyQueryMode,
    nodeQueryInputs,
    pruneInvalidEndpointWires,
    queryModeFor,
} from '../endpoint-flow-graph.util';
import { canonicalChainField, ChainProfile, chainProfileForFeature, outputFeedingInput } from '../endpoint-chain.util';
import { QueryMode, queryModesForFeature } from '../query-modes.util';
import {
    canonicalParamFilterId,
    featureParamChips,
    FeatureParamChip,
    humanizeParamField,
    paramEnumChipClass,
    paramFieldLabelKey,
    requiredParamChipClass,
    requiredVisibleFields,
} from '../endpoint-param-highlight.util';
import { FEATURE_GROUP_ICONS, featureGroup, FeatureGroupId, featureGroupIcon } from '../feature-group.util';
import { compareFeaturesForSelectedCountry, countryFlagImageUrl, getCountryFlag, isFeatureForCountry, isWorldCountry } from '../smart-batch-country.util';
import { AppFeature } from '../smart-batch.service';
import {
    getAppFeatureCatalogCopy,
    resolveAboutOverview,
} from '../../postman/postman-endpoint-copy.util';
import { MarkdownPipe } from '../../../shared/pipes/markdown.pipe';
import { EndpointInfoDialogComponent } from './endpoint-info-dialog.component';

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

const START_INPUT_CHOICES = [
    'documentType',
    'documentNumber',
    'fullName',
    'firstName',
    'lastName',
    'plate',
    'vin',
    'dateOfBirth',
    'processNumber',
];

const TRAY_GROUPS: { id: FeatureGroupId; labelKey: string }[] = [
    { id: 'vehicle', labelKey: 'visitaGuide.entityVehicle' },
    { id: 'citizen', labelKey: 'visitaGuide.entityPerson' },
    { id: 'company', labelKey: 'visitaGuide.entityCompany' },
    { id: 'other', labelKey: 'visitaGuide.intentOther' },
];

const arrayAtPath = (node: unknown, path: string): unknown[] | null => {
    let current: unknown = node;
    for (const segment of path.split('.')) {
        if (!current || typeof current !== 'object' || Array.isArray(current)) return null;
        current = (current as Record<string, unknown>)[segment];
    }
    return Array.isArray(current) ? current : null;
};

const collectArrayPaths = (
    node: unknown,
    depth = 0,
    prefix = '',
    into: { path: string; items: unknown[] }[] = []
): { path: string; items: unknown[] }[] => {
    if (!node || typeof node !== 'object' || Array.isArray(node) || depth > 3) return into;
    for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
        if (key.startsWith('_') || key === 'errors' || key === 'stack') continue;
        const path = prefix ? `${prefix}.${key}` : key;
        if (Array.isArray(value)) into.push({ path, items: value });
        else if (value && typeof value === 'object') collectArrayPaths(value, depth + 1, path, into);
    }
    return into;
};

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
        <ng-template #flowCoach let-text="text" let-closable="closable">
            <div class="flex items-start gap-2.5 rounded-[18px] border border-sky-300 bg-white px-3 py-2.5 shadow-[0_10px_24px_rgba(37,99,175,0.14)] dark:border-sky-700 dark:bg-gray-900">
                <svg viewBox="0 0 64 64" class="h-9 w-9 shrink-0" aria-hidden="true">
                    <g fill="#1e40af">
                        <rect x="29.25" y="1.5" width="5.5" height="9" rx="2.75" />
                        <rect x="1.5" y="23.25" width="9" height="5.5" rx="2.75" />
                        <rect x="53.5" y="23.25" width="9" height="5.5" rx="2.75" />
                        <rect x="8" y="7.5" width="9" height="5.5" rx="2.75" transform="rotate(-42 12.5 10.25)" />
                        <rect x="47" y="7.5" width="9" height="5.5" rx="2.75" transform="rotate(42 51.5 10.25)" />
                    </g>
                    <circle cx="32" cy="27.5" r="13.2" fill="#facc15" stroke="#1e3a8a" stroke-width="3.4" />
                    <path d="M24.2 19.2c2.4-2.6 5-3.6 7.4-3.4" stroke="#fff6c2" stroke-width="2.3" stroke-linecap="round" />
                    <ellipse cx="25.4" cy="25.6" rx="1.35" ry="1.7" fill="#fff6c2" transform="rotate(-28 25.4 25.6)" />
                    <path d="M37.6 19.8c3.2 3.6 4.4 7.4 3.6 12.2" stroke="#eab308" stroke-width="2.3" stroke-linecap="round" />
                    <path d="M23.6 39.2h16.8c1.1 0 1.8.8 1.8 1.8v11.2c0 4.6-4.1 7.6-10.2 7.6s-10.2-3-10.2-7.6V41c0-1 .7-1.8 1.8-1.8z" fill="#1e3a8a" />
                    <rect x="25.2" y="41.6" width="13.6" height="3.15" rx="1.2" fill="#7dd3fc" />
                    <rect x="25.6" y="46.3" width="12.8" height="3.15" rx="1.2" fill="#38bdf8" />
                    <rect x="26.3" y="51" width="11.4" height="3" rx="1.2" fill="#2563eb" />
                </svg>
                <p class="min-w-0 flex-1 text-[13px] leading-snug text-slate-800 dark:text-slate-100">{{ text }}</p>
                @if (closable) {
                    <button
                        type="button"
                        class="pointer-events-auto -mr-1 -mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-gray-800 dark:hover:text-white"
                        [attr.aria-label]="'visitaGuide.flowCoachHide' | transloco"
                        (pointerdown)="$event.stopPropagation()"
                        (click)="hideFlowCoach(); $event.stopPropagation()"
                    >
                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">close</mat-icon>
                    </button>
                }
            </div>
        </ng-template>
        <div class="relative flex min-h-0 flex-1 flex-col" cdkDropListGroup>
            <section
                class="flow-canvas relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-sky-100 dark:border-gray-800"
                (contextmenu)="onCanvasContextMenu($event)"
            >
                <div #flowStage class="relative min-h-0 flex-1 overflow-hidden">
                    <div class="pointer-events-none absolute inset-x-3 top-3 z-30 flex items-start justify-between gap-2">
                        <div class="pointer-events-auto flex min-h-12 min-w-0 max-w-[70%] items-center overflow-x-auto rounded-2xl border border-white/80 bg-white px-2 shadow-[0_10px_28px_rgba(37,99,175,0.12)] dark:border-gray-700 dark:bg-gray-900">
                            <ng-content select="[flow-context]"></ng-content>
                        </div>
                        <div class="pointer-events-auto relative flex h-12 shrink-0 items-center gap-0.5 rounded-2xl border border-white/80 bg-white px-1.5 shadow-[0_10px_28px_rgba(37,99,175,0.12)] dark:border-gray-700 dark:bg-gray-900">
                            <ng-content select="[flow-executor]"></ng-content>
                            <button
                                type="button"
                                class="mr-1 inline-flex h-9 shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-3.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:border-sky-300 hover:bg-sky-50 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                                [class.border-sky-400]="libraryOpen()"
                                [class.bg-sky-50]="libraryOpen()"
                                [attr.aria-label]="'visitaGuide.flowAddEndpoint' | transloco"
                                [attr.aria-expanded]="libraryOpen()"
                                (click)="openLibrary()"
                            >
                                <span class="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white shadow-[0_4px_10px_rgba(2,132,199,0.35)]">
                                    <mat-icon class="!h-4 !w-4 !text-[18px] !text-white">add</mat-icon>
                                </span>
                                {{ 'visitaGuide.flowAddEndpoint' | transloco }}
                            </button>
                            <button type="button" mat-icon-button [matTooltip]="coachTextKey() | transloco">
                                <mat-icon>info</mat-icon>
                            </button>
                            <button
                                type="button"
                                mat-icon-button
                                [matTooltip]="'visitaGuide.flowZoomOut' | transloco"
                                [attr.aria-label]="'visitaGuide.flowZoomOut' | transloco"
                                (click)="zoomBy(-0.1)"
                            >
                                <mat-icon>remove</mat-icon>
                            </button>
                            <button
                                type="button"
                                mat-icon-button
                                [matTooltip]="'visitaGuide.flowZoomIn' | transloco"
                                [attr.aria-label]="'visitaGuide.flowZoomIn' | transloco"
                                (click)="zoomBy(0.1)"
                            >
                                <mat-icon>add</mat-icon>
                            </button>
                            <button type="button" mat-icon-button [matTooltip]="'visitaGuide.flowAutoLayout' | transloco" (click)="autoLayout()"><mat-icon>account_tree</mat-icon></button>
                            <button
                                type="button"
                                class="inline-flex h-9 items-center gap-1 rounded-xl px-2 text-xs font-semibold text-slate-700 hover:bg-sky-50 dark:text-slate-200 dark:hover:bg-gray-800"
                                [matTooltip]="(configOpen() ? 'visitaGuide.flowHideConfig' : 'visitaGuide.flowShowConfig') | transloco"
                                (click)="toggleConfig()"
                            >
                                <mat-icon class="!h-4 !w-4 !text-base">{{ configOpen() ? 'chevron_right' : 'tune' }}</mat-icon>
                            </button>
                        </div>
                    </div>
                    @if (showFlowCoach()) {
                        <div
                            class="flow-coach absolute left-4 top-[4.75rem] z-20 w-[min(22rem,calc(100%-2rem))]"
                            [class.is-leaving]="flowCoachLeaving()"
                            [class.pointer-events-none]="!resultSources().length || flowCoachLeaving()"
                        >
                            <ng-container *ngTemplateOutlet="flowCoach; context: { text: (coachTextKey() | transloco), closable: coachStep() !== 'add' }"></ng-container>
                        </div>
                    }
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
                            <defs>
                                <marker id="flow-wire-arrow" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="9" markerHeight="9" orient="auto">
                                    <path d="M2 1.5 L10.5 6 L2 10.5 Z" fill="#6d86a6" />
                                </marker>
                                <marker id="flow-wire-arrow-hot" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="9" markerHeight="9" orient="auto">
                                    <path d="M2 1.5 L10.5 6 L2 10.5 Z" fill="#2563eb" />
                                </marker>
                            </defs>
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
                                    [attr.stroke-width]="selectedWireId() === wire.id ? 2.75 : 2"
                                    class="pointer-events-none"
                                    [attr.stroke]="selectedWireId() === wire.id ? '#2563eb' : '#7f96b3'"
                                    [attr.marker-end]="selectedWireId() === wire.id ? 'url(#flow-wire-arrow-hot)' : 'url(#flow-wire-arrow)'"
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
                                class="flow-node absolute z-10 cursor-grab rounded-2xl select-none active:cursor-grabbing"
                                [style.left.px]="node.x"
                                [style.top.px]="node.y"
                                [style.width.px]="nodeWidth(node)"
                                [ngClass]="nodeTone(node)"
                                [class.ring-2]="selectedId() === node.id"
                                [class.ring-sky-500]="selectedId() === node.id"
                                (pointerdown)="onNodePointerDown($event, node)"
                                (click)="onNodeClick(node)"
                            >
                                @if (node.kind === 'start' || node.kind === 'endpoint') {
                                    <button
                                        type="button"
                                        class="absolute -right-2 z-20 h-4 w-4 -translate-y-1/2 cursor-crosshair rounded-full border-2 border-sky-500 bg-white shadow"
                                        [ngClass]="node.kind === 'start' ? 'top-1/2' : 'top-[28px]'"
                                        [attr.aria-label]="'visitaGuide.flowConnectHandle' | transloco"
                                        (pointerdown)="onCardLinkDown($event, node)"
                                    ></button>
                                }
                                @if (node.kind === 'endpoint') {
                                    <span class="pointer-events-none absolute -left-2 top-[28px] z-20 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-sky-500 bg-white shadow"></span>
                                }
                                @if (node.kind === 'start') {
                                    <div class="px-4 pt-4">
                                        <div class="flex items-start gap-3">
                                            <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                                                <mat-icon>play_arrow</mat-icon>
                                            </span>
                                            <div class="min-w-0 flex-1">
                                                <p class="text-[15px] font-semibold leading-5 text-slate-900 dark:text-white">{{ 'visitaGuide.flowStartCardTitle' | transloco }}</p>
                                                <div class="mt-0.5 flex h-8 items-start gap-1">
                                                    <p class="line-clamp-2 flex-1 text-xs leading-4 text-slate-500">{{ 'visitaGuide.flowStartCardHint' | transloco }}</p>
                                                    <button
                                                        type="button"
                                                        class="inline-flex h-4 w-4 shrink-0 items-center justify-center text-slate-400"
                                                        [matTooltip]="'visitaGuide.flowStartHint' | transloco"
                                                        (pointerdown)="$event.stopPropagation()"
                                                        (click)="$event.stopPropagation()"
                                                    >
                                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">info</mat-icon>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3">
                                            @for (port of outputPorts(node); track port) {
                                                <div class="flex h-9 items-center gap-2.5 text-sm text-slate-700 select-none dark:text-slate-200">
                                                    <mat-icon class="!h-5 !w-5 !text-[20px] text-slate-400">{{ startFieldIcon(port) }}</mat-icon>
                                                    <span class="min-w-0 flex-1 whitespace-nowrap">{{ fieldLabel(port) }}</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div class="px-4 pb-4 pt-3">
                                        <button
                                            type="button"
                                            class="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-blue-100 text-sm font-medium text-blue-600 hover:bg-blue-200/80 dark:bg-blue-950 dark:text-blue-300 dark:hover:bg-blue-900"
                                            (pointerdown)="$event.stopPropagation()"
                                            (click)="openNodeConfig(node.id); $event.stopPropagation()"
                                        >
                                            <mat-icon class="!h-4 !w-4 !text-[18px] !text-blue-600 dark:!text-blue-300">edit</mat-icon>
                                            {{ 'visitaGuide.flowEditData' | transloco }}
                                        </button>
                                    </div>
                                } @else if (node.kind === 'result') {
                                    <div class="relative px-4 pb-4 pt-4">
                                        <span
                                            class="absolute -left-2 top-1/2 z-20 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-sky-500 bg-white shadow"
                                            aria-hidden="true"
                                        ></span>
                                        <div class="flex items-start gap-3">
                                            <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                                                <mat-icon>check</mat-icon>
                                            </span>
                                            <div class="min-w-0 flex-1">
                                                <div class="flex items-center gap-1">
                                                    <p class="text-[15px] font-semibold leading-5 text-slate-900 dark:text-white">{{ 'visitaGuide.flowResult' | transloco }}</p>
                                                    <button
                                                        type="button"
                                                        class="inline-flex h-4 w-4 shrink-0 items-center justify-center text-slate-400"
                                                        [matTooltip]="'visitaGuide.flowResultHint' | transloco"
                                                        (pointerdown)="$event.stopPropagation()"
                                                        (click)="$event.stopPropagation()"
                                                    >
                                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">info</mat-icon>
                                                    </button>
                                                </div>
                                                <p class="mt-0.5 line-clamp-2 h-8 text-xs leading-4 text-slate-500">{{ 'visitaGuide.flowResultCardHint' | transloco }}</p>
                                            </div>
                                        </div>
                                        <div class="mt-3 space-y-2">
                                            @for (source of resultSources(); track source.id) {
                                                <div class="flex h-8 items-center gap-2.5">
                                                    <mat-icon class="!h-5 !w-5 !text-[20px] text-slate-300">description</mat-icon>
                                                    <span
                                                        class="flex h-7 min-w-0 flex-1 items-center truncate rounded-lg bg-slate-100 px-3 text-xs text-slate-500 dark:bg-gray-800 dark:text-slate-300"
                                                        [matTooltip]="nodeTitle(source)"
                                                        matTooltipShowDelay="300"
                                                    >{{ nodeTitle(source) }}</span>
                                                </div>
                                            } @empty {
                                                @for (bar of resultPlaceholders; track bar) {
                                                    <div class="flex h-8 items-center gap-2.5">
                                                        <mat-icon class="!h-5 !w-5 !text-[20px] text-slate-300">description</mat-icon>
                                                        <span class="h-7 flex-1 rounded-lg bg-slate-100 dark:bg-gray-800"></span>
                                                    </div>
                                                }
                                            }
                                        </div>
                                    </div>
                                } @else {
                                <div class="flex items-center gap-2 px-3 pb-3 pt-3">
                                    <span
                                        class="relative inline-flex h-8 w-8 items-center justify-center rounded-xl"
                                        [ngClass]="node.feature ? iconTone(node.feature) : 'bg-sky-100 text-sky-700'"
                                    >
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
                                        <p
                                            class="truncate text-sm font-semibold text-slate-900 dark:text-white"
                                            [matTooltip]="nodeTitle(node)"
                                            matTooltipShowDelay="300"
                                        >{{ nodeTitle(node) }}</p>
                                        @if (node.feature) {
                                            <p class="truncate font-mono text-[10px] text-slate-400">{{ pathLabel(node.feature) }}</p>
                                        }
                                    </div>
                                    @if (node.kind === 'endpoint') {
                                        <button
                                            type="button"
                                            class="text-slate-400 hover:text-sky-600"
                                            [matTooltip]="'visitaGuide.endpointInfoOpen' | transloco"
                                            (pointerdown)="$event.stopPropagation()"
                                            (click)="openFeatureInfo(node.feature); $event.stopPropagation()"
                                        >
                                            <mat-icon class="!h-4 !w-4 !text-base">info</mat-icon>
                                        </button>
                                        <button
                                            type="button"
                                            class="text-slate-400 hover:text-sky-600"
                                            [matTooltip]="'visitaGuide.flowShowConfig' | transloco"
                                            (pointerdown)="$event.stopPropagation()"
                                            (click)="openNodeConfig(node.id); $event.stopPropagation()"
                                        >
                                            <mat-icon class="!h-4 !w-4 !text-base">settings</mat-icon>
                                        </button>
                                        <button type="button" class="text-slate-400 hover:text-red-500" (pointerdown)="$event.stopPropagation()" (click)="removeNode(node.id); $event.stopPropagation()">
                                            <mat-icon class="!h-4 !w-4 !text-base">close</mat-icon>
                                        </button>
                                    }
                                </div>
                                @if (node.kind !== 'endpoint' && node.kind !== 'result') {
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
                                                class="absolute -left-2 z-20 h-3.5 w-3.5 cursor-crosshair rounded-full border-2 border-sky-500 bg-white shadow"
                                                [class.bg-sky-500]="!!boundSource(node.id, port)"
                                                [class.ring-2]="isHotInput(node, port)"
                                                [class.ring-sky-300]="isHotInput(node, port)"
                                                (pointerdown)="onInputPortDown($event, node, port)"
                                            ></button>
                                            <span
                                                class="min-w-0 flex-1 truncate"
                                                [matTooltip]="portLabel(node, port)"
                                                matTooltipShowDelay="300"
                                            >{{ portLabel(node, port) }}</span>
                                            @if (canHidePort(node, 'inputs', port)) {
                                                <button
                                                    type="button"
                                                    class="ml-0.5 text-slate-300 hover:text-red-500"
                                                    [matTooltip]="'visitaGuide.flowRemoveParam' | transloco"
                                                    (pointerdown)="$event.stopPropagation()"
                                                    (click)="hideVisiblePort(node, 'inputs', port); $event.stopPropagation()"
                                                >
                                                    <mat-icon class="!h-3 !w-3 !text-[12px]">delete</mat-icon>
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
                                                    <mat-icon class="!h-3 !w-3 !text-[12px]">delete</mat-icon>
                                                </button>
                                            }
                                            <span
                                                class="min-w-0 truncate text-right"
                                                [matTooltip]="fieldLabel(port)"
                                                matTooltipShowDelay="300"
                                            >{{ fieldLabel(port) }}</span>
                                            @if (node.kind === 'endpoint') {
                                                <input
                                                    type="number"
                                                    min="0"
                                                    step="1"
                                                    inputmode="numeric"
                                                    class="ml-1 w-12 shrink-0 rounded border border-emerald-200 bg-white px-1 py-0.5 text-[10px] text-slate-800 dark:border-emerald-900 dark:bg-gray-950 dark:text-slate-100"
                                                    [placeholder]="'#'"
                                                    [title]="arrayIndexHint(node, port)"
                                                    [value]="pickedArrayIndex(node.id, port) ?? ''"
                                                    (pointerdown)="$event.stopPropagation()"
                                                    (change)="pickArrayIndex(node.id, port, $any($event.target).value)"
                                                />
                                            }
                                            <button
                                                type="button"
                                                class="absolute -right-2 z-20 h-3.5 w-3.5 cursor-crosshair rounded-full border-2 border-sky-500 bg-white shadow"
                                                [class.bg-sky-500]="hasOutgoing(node.id, port)"
                                                [class.ring-2]="hasOutgoing(node.id, port)"
                                                [class.ring-sky-300]="hasOutgoing(node.id, port)"
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
                                }
                                }
                            </div>
                            }
                        }
                    </div>
                </div>

                    <aside
                        #libraryPanel
                        class="flow-drawer flow-drawer-left absolute z-20 flex w-[min(48rem,calc(100%-1.5rem))] flex-col overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_16px_40px_rgba(37,99,175,0.16)] dark:border-gray-700 dark:bg-gray-900"
                        [class.is-open]="libraryOpen()"
                        [class.is-home]="libraryAtHome() && !libraryCentered()"
                        [class.is-centered]="libraryCentered()"
                        [class.is-dragging]="libraryDragging()"
                        [attr.aria-hidden]="!libraryOpen()"
                        [style.left]="libraryCentered() ? '50%' : libraryPos().x + 'px'"
                        [style.top]="libraryCentered() ? '50%' : libraryPos().y + 'px'"
                    >
                            <div
                                class="flex shrink-0 cursor-grab items-center gap-2 border-b border-slate-100 px-3 py-2 select-none active:cursor-grabbing dark:border-gray-800"
                                (pointerdown)="onLibraryDragStart($event)"
                                (pointermove)="onLibraryDragMove($event)"
                                (pointerup)="onLibraryDragEnd()"
                                (pointercancel)="onLibraryDragEnd()"
                            >
                                <mat-icon class="!h-4 !w-4 !text-base text-slate-400">drag_indicator</mat-icon>
                                <p class="min-w-0 flex-1 text-sm font-semibold text-slate-900 dark:text-white">{{ 'visitaGuide.flowAddEndpoint' | transloco }}</p>
                                <button type="button" mat-icon-button [matTooltip]="'visitaGuide.flowHideLibrary' | transloco" (click)="libraryOpen.set(false); $event.stopPropagation()" (pointerdown)="$event.stopPropagation()">
                                    <mat-icon>close</mat-icon>
                                </button>
                            </div>
                            <div class="shrink-0 space-y-2 border-b border-slate-100 px-3 py-2 dark:border-gray-800">
                                <label class="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 dark:border-gray-700 dark:bg-gray-950">
                                    <mat-icon class="!h-5 !w-5 !text-[20px] text-sky-500">search</mat-icon>
                                    <input
                                        type="search"
                                        class="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-white"
                                        [attr.aria-label]="'visitaGuide.endpointsSearch' | transloco"
                                        [placeholder]="searchPlaceholder()"
                                        [value]="query()"
                                        (focus)="onSearchFocus()"
                                        (blur)="onSearchBlur()"
                                        (input)="queryChange.emit($any($event.target).value)"
                                    />
                                </label>
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
                            </div>
                            <div class="min-h-0 flex-1 overflow-y-auto p-3">
                                @if (loading() && !tray().length) {
                                    <div class="flex flex-col items-center gap-3 py-10">
                                        <mat-spinner diameter="36"></mat-spinner>
                                    </div>
                                }
                                @if (!loading() && !tray().length) {
                                    <p class="px-1 py-6 text-center text-sm text-slate-400">{{ 'visitaGuide.noEndpoints' | transloco }}</p>
                                }
                                @if (countryChoices().length > 1) {
                                    <div class="mb-3 flex flex-wrap gap-1">
                                        <button
                                            type="button"
                                            class="rounded-full border px-2.5 py-1 text-[11px] font-semibold"
                                            [class.border-slate-950]="countryFilter() === 'all'"
                                            [class.bg-slate-950]="countryFilter() === 'all'"
                                            [class.text-white]="countryFilter() === 'all'"
                                            [class.border-slate-200]="countryFilter() !== 'all'"
                                            (click)="countryFilter.set('all')"
                                        >
                                            {{ 'visitaGuide.endpointsAllCountries' | transloco }}
                                        </button>
                                        @for (country of countryChoices(); track country) {
                                            <button
                                                type="button"
                                                class="rounded-full border px-2.5 py-1 text-[11px] font-semibold"
                                                [class.border-slate-950]="countryFilter() === country"
                                                [class.bg-slate-950]="countryFilter() === country"
                                                [class.text-white]="countryFilter() === country"
                                                [class.border-slate-200]="countryFilter() !== country"
                                                (click)="countryFilter.set(country)"
                                            >
                                                {{ country }}
                                            </button>
                                        }
                                    </div>
                                }
                                <div cdkDropList [cdkDropListData]="trayItems()" [cdkDropListSortingDisabled]="true" class="flex flex-col gap-3">
                                    @for (feature of trayItems(); track feature._id) {
                                            <div
                                                cdkDrag
                                                [cdkDragDisabled]="isAdded(feature)"
                                                [cdkDragData]="trayDrag(feature)"
                                                class="rounded-2xl border px-3.5 py-3 shadow-sm"
                                                [ngClass]="
                                                    isAdded(feature)
                                                        ? 'cursor-default border-dashed border-slate-300 bg-slate-50 dark:border-gray-600 dark:bg-gray-950'
                                                        : 'cursor-grab border-slate-200 bg-white dark:border-gray-700 dark:bg-gray-900'
                                                "
                                                (dblclick)="addFromLibrary(feature)"
                                                (cdkDragStarted)="onTrayDragStart()"
                                                (cdkDragEnded)="onTrayDragEnd()"
                                            >
                                                <div *cdkDragPlaceholder class="h-2"></div>
                                                <div class="flex items-start gap-3">
                                                    <mat-icon class="mt-2 !h-4 !w-4 !text-base text-slate-300">drag_indicator</mat-icon>
                                                    <span class="relative mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" [ngClass]="iconTone(feature)">
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
                                                        <p class="text-[15px] font-medium leading-snug text-slate-900 dark:text-white">{{ name(feature) }}</p>
                                                        @if (isAdded(feature)) {
                                                            <p class="mt-1 inline-flex items-center rounded-full bg-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-gray-800 dark:text-slate-300">
                                                                {{ 'visitaGuide.flowEndpointAdded' | transloco }}
                                                            </p>
                                                        }
                                                        <p class="mt-0.5 break-all font-mono text-[11px] leading-4 text-slate-400">{{ requestLabel(feature) }}</p>
                                                        @if (countryChoices().length > 1) {
                                                            <p class="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{{ feature.country }}</p>
                                                        }
                                                        <div class="mt-2 flex flex-wrap gap-1.5">
                                                            @for (chip of paramChips(feature); track chip.field) {
                                                                <span class="rounded-full border px-2 py-0.5 text-xs font-medium" [ngClass]="chipClass(chip.required)">{{ fieldLabel(chip.field) }}</span>
                                                            }
                                                        </div>
                                                    </div>
                                                    <button type="button" class="text-slate-400 hover:text-sky-600" [matTooltip]="'visitaGuide.endpointInfoOpen' | transloco" (mousedown)="$event.stopPropagation()" (click)="openFeatureInfo(feature); $event.stopPropagation()">
                                                        <mat-icon>info</mat-icon>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="text-slate-400 disabled:cursor-not-allowed disabled:text-emerald-600"
                                                        [disabled]="isAdded(feature)"
                                                        [attr.aria-label]="isAdded(feature) ? ('visitaGuide.flowEndpointAdded' | transloco) : ('visitaGuide.flowAddEndpoint' | transloco)"
                                                        (mousedown)="$event.stopPropagation()"
                                                        (click)="addFromLibrary(feature); $event.stopPropagation()"
                                                    >
                                                        <mat-icon>{{ isAdded(feature) ? 'check' : 'add' }}</mat-icon>
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                </div>
                            </div>
                        </aside>

                    <aside
                        class="flow-drawer flow-drawer-right absolute bottom-16 right-3 top-16 z-20 flex w-[min(22rem,40vw)] min-w-[16rem] flex-col overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_16px_40px_rgba(37,99,175,0.16)] dark:border-gray-700 dark:bg-gray-900"
                        [class.is-open]="configOpen()"
                        [attr.aria-hidden]="!configOpen()"
                    >
                            <div class="flex shrink-0 items-center gap-2 border-b border-slate-100 px-3 py-2 dark:border-gray-800">
                                <p class="min-w-0 flex-1 text-sm font-semibold text-slate-900 dark:text-white">{{ 'visitaGuide.flowConfig' | transloco }}</p>
                                @if (selectedNode()?.feature; as feature) {
                                    <button type="button" class="rounded-lg border border-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-700 dark:border-gray-700 dark:text-slate-200" (click)="openFeatureInfo(feature)">
                                        {{ 'visitaGuide.endpointInfoOpen' | transloco }}
                                    </button>
                                }
                                <button type="button" mat-icon-button [matTooltip]="'visitaGuide.flowHideConfig' | transloco" (click)="configOpen.set(false)">
                                    <mat-icon>close</mat-icon>
                                </button>
                            </div>
                            <div class="min-h-0 flex-1 overflow-y-auto p-3">
                                @if (selectedNode(); as node) {
                                    <p class="text-sm font-medium text-slate-900 dark:text-white">{{ node.kind === 'start' ? ('visitaGuide.flowStartCardTitle' | transloco) : nodeTitle(node) }}</p>
                                    @if (node.feature) {
                                        <p class="mt-1 font-mono text-[11px] text-slate-500">{{ requestLabel(node.feature) }}</p>
                                        @if (featureDescription(node.feature); as about) {
                                            <p class="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{{ 'visitaGuide.flowEndpointAbout' | transloco }}</p>
                                            <div
                                                class="endpoint-about mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                                                [innerHTML]="about | markdown"
                                            ></div>
                                        }
                                        @if (queryModes(node).length > 1) {
                                            <p class="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{{ 'visitaGuide.flowQueryMode' | transloco }}</p>
                                            <p class="mt-1 text-[11px] leading-snug text-slate-500">{{ 'visitaGuide.flowQueryModeHint' | transloco }}</p>
                                            <div class="mt-2 space-y-1.5">
                                                @for (mode of queryModes(node); track mode.id) {
                                                    <button
                                                        type="button"
                                                        class="w-full rounded-xl border px-2.5 py-2 text-left"
                                                        [ngClass]="isQueryModeActive(node, mode) ? 'border-slate-900 bg-slate-50 dark:border-white dark:bg-gray-800' : 'border-slate-200 dark:border-gray-700'"
                                                        (click)="selectQueryMode(node, mode.id)"
                                                    >
                                                        <p class="text-[10px] font-semibold uppercase tracking-wide text-slate-400">{{ 'visitaGuide.flowQueryOption' | transloco: { letter: mode.letter } }}</p>
                                                        <p class="text-xs font-medium text-slate-900 dark:text-white">{{ modeTitle(mode) }}</p>
                                                        @for (note of modeNotes(mode); track note) {
                                                            <p class="mt-0.5 text-[11px] leading-snug text-amber-700 dark:text-amber-300">{{ note }}</p>
                                                        }
                                                    </button>
                                                }
                                            </div>
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
                                                    <div class="min-w-0">
                                                        <p class="text-xs font-medium text-slate-800 dark:text-slate-100">{{ fieldLabel(port) }}</p>
                                                        @if (portCondition(node, port); as note) {
                                                            <p class="mt-0.5 text-[11px] leading-snug text-amber-700 dark:text-amber-300">{{ note }}</p>
                                                        }
                                                    </div>
                                                    @if (canHidePort(node, 'inputs', port)) {
                                                        <button
                                                            type="button"
                                                            class="text-slate-400 hover:text-red-500"
                                                            [matTooltip]="'visitaGuide.flowRemoveParam' | transloco"
                                                            (click)="hideVisiblePort(node, 'inputs', port)"
                                                        >
                                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">delete</mat-icon>
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
                                                            <mat-icon class="!h-3 !w-3 !text-[12px]">delete</mat-icon>
                                                        </button>
                                                    }
                                                </span>
                                            }
                                        </div>
                                    } @else if (node.kind === 'start') {
                                        <p class="mt-1 text-[11px] leading-snug text-slate-500">{{ 'visitaGuide.flowStartInputsHint' | transloco }}</p>
                                        <button
                                            type="button"
                                            class="mt-3 inline-flex items-center rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-semibold text-sky-800 dark:bg-sky-950 dark:text-sky-200"
                                            [matMenuTriggerFor]="startInputMenu"
                                        >
                                            {{ 'visitaGuide.flowAddStartField' | transloco }}
                                        </button>
                                        <mat-menu #startInputMenu="matMenu">
                                            @for (field of startInputChoices(); track field) {
                                                <button type="button" mat-menu-item (click)="toggleStartInput(field)">
                                                    <mat-icon>{{ isStartInputOn(field) ? 'check' : 'add' }}</mat-icon>
                                                    <span>{{ fieldLabel(field) }}</span>
                                                </button>
                                            }
                                        </mat-menu>
                                        <div class="mt-3 space-y-1.5">
                                            @for (port of outputPorts(node); track port) {
                                                <div class="flex items-center justify-between gap-2 rounded-xl border border-slate-200 px-2.5 py-2 dark:border-gray-800">
                                                    <span class="inline-flex min-w-0 items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-100">
                                                        <mat-icon class="!h-4 !w-4 !text-base text-slate-400">{{ startFieldIcon(port) }}</mat-icon>
                                                        <span class="truncate">{{ fieldLabel(port) }}</span>
                                                    </span>
                                                    @if (canRemoveStartInput(port)) {
                                                        <button
                                                            type="button"
                                                            class="text-slate-400 hover:text-red-500"
                                                            [matTooltip]="'visitaGuide.flowRemoveParam' | transloco"
                                                            (click)="removeStartInput(port)"
                                                        >
                                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">delete</mat-icon>
                                                        </button>
                                                    }
                                                </div>
                                            } @empty {
                                                <p class="text-xs text-slate-400">{{ 'visitaGuide.flowStartInputsEmpty' | transloco }}</p>
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
                <div class="pointer-events-none absolute bottom-[6.75rem] right-3 z-30">
                    <div class="pointer-events-auto flex items-center gap-1 rounded-full border border-white/80 bg-white p-1 shadow-[0_12px_28px_rgba(37,99,175,0.16)] dark:border-gray-700 dark:bg-gray-900">
                        <span class="inline-flex items-center gap-1.5 px-2.5 text-[12px] font-medium text-slate-500 dark:text-slate-300">
                            <span class="h-3 w-3 rounded-full border-2 border-sky-500 bg-white dark:bg-gray-900"></span>
                            {{ 'visitaGuide.flowLegendInput' | transloco }}
                        </span>
                        <span class="inline-flex items-center gap-1.5 pr-1 text-[12px] font-medium text-slate-500 dark:text-slate-300">
                            <span class="h-3 w-3 rounded-full bg-sky-600"></span>
                            {{ 'visitaGuide.flowLegendOutput' | transloco }}
                        </span>
                        <button
                            type="button"
                            class="inline-flex h-9 items-center gap-2 rounded-full bg-sky-600 px-3.5 text-[13px] font-semibold text-white shadow-[0_8px_18px_rgba(2,132,199,0.35)] hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-40"
                            [disabled]="!endpointNodes().length"
                            [matTooltip]="'visitaGuide.flowAutoConnectHint' | transloco"
                            (click)="connectAutomatically()"
                        >
                            <svg viewBox="0 0 24 24" class="h-4 w-4" aria-hidden="true">
                                <circle cx="5.5" cy="7" r="2" fill="currentColor" />
                                <circle cx="18.5" cy="7" r="2" fill="currentColor" />
                                <circle cx="12" cy="17.5" r="2" fill="currentColor" />
                                <path d="M7.1 8.3 10.6 15.6M16.9 8.3 13.4 15.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
                            </svg>
                            {{ 'visitaGuide.flowLegendAuto' | transloco }}
                        </button>
                    </div>
                </div>
                <div class="absolute bottom-3 left-3 right-3 z-30 flex flex-wrap items-center gap-x-4 gap-y-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_12px_32px_rgba(37,99,175,0.14)] dark:border-gray-700 dark:bg-gray-900">
                    <div class="flex min-w-[12rem] items-center gap-3">
                        <span
                            class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                            [class.bg-emerald-500]="flowStatus().ready"
                            [class.bg-white]="!flowStatus().ready"
                            [class.border]="!flowStatus().ready"
                            [class.border-slate-300]="!flowStatus().ready"
                        >
                            @if (flowStatus().ready) {
                                <mat-icon class="!text-white">check</mat-icon>
                            }
                        </span>
                        <div class="min-w-0">
                            <p class="text-sm font-semibold text-slate-800 dark:text-white">{{ 'visitaGuide.flowStatusTitle' | transloco }}</p>
                            <span
                                class="mt-1 inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold"
                                [class.bg-emerald-50]="flowStatus().ready"
                                [class.text-emerald-700]="flowStatus().ready"
                                [class.bg-slate-100]="!flowStatus().ready"
                                [class.text-slate-500]="!flowStatus().ready"
                                [class.dark:bg-emerald-950]="flowStatus().ready"
                                [class.dark:text-emerald-200]="flowStatus().ready"
                            >
                                {{ (flowStatus().ready ? 'visitaGuide.flowStatusReady' : 'visitaGuide.flowStatusPending') | transloco }}
                            </span>
                        </div>
                    </div>
                    <span class="hidden h-10 w-px bg-slate-200 sm:block dark:bg-gray-700"></span>
                    <div class="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                        @for (item of flowStatus().checks; track item.label) {
                            <span class="inline-flex items-center gap-2 text-[13px] text-slate-700 dark:text-slate-200">
                                <span
                                    class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                    [class.bg-emerald-500]="item.ok"
                                    [class.border]="!item.ok"
                                    [class.border-slate-300]="!item.ok"
                                    [class.bg-white]="!item.ok"
                                    [class.dark:border-gray-600]="!item.ok"
                                    [class.dark:bg-gray-900]="!item.ok"
                                >
                                    @if (item.ok) {
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[15px] !text-white">check</mat-icon>
                                    }
                                </span>
                                {{ item.label }}
                            </span>
                        }
                    </div>
                    <span class="hidden h-10 w-px bg-slate-200 lg:block dark:bg-gray-700"></span>
                    <div class="flex min-w-[14rem] flex-1 items-center gap-3">
                        <div class="min-w-0 flex-1">
                            <p class="mb-1 text-xs font-medium text-slate-500">{{ 'visitaGuide.flowStatusProgress' | transloco: { done: flowStatus().configured, total: flowStatus().total } }}</p>
                            <div class="h-2.5 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-950">
                                <div class="h-full rounded-full bg-emerald-500 transition-all duration-300" [style.width.%]="flowStatus().percent"></div>
                            </div>
                        </div>
                        <span class="text-sm font-bold" [class.text-emerald-500]="flowStatus().percent === 100" [class.text-slate-400]="flowStatus().percent !== 100">{{ flowStatus().percent }}%</span>
                    </div>
                    <button
                        type="button"
                        class="inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-2xl bg-sky-600 px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,175,0.28)] disabled:opacity-40"
                        [disabled]="!endpointNodes().length"
                        (click)="continueChain.emit()"
                    >
                        {{ continueKey() | transloco }}
                    </button>
                </div>
            </section>
            @if (canvasContextMenu(); as menu) {
                <div
                    class="flow-canvas-menu fixed z-50 min-w-[15rem] overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-[0_16px_40px_rgba(37,99,175,0.18)] dark:border-gray-700 dark:bg-gray-900"
                    [style.left.px]="menu.x"
                    [style.top.px]="menu.y"
                    (contextmenu)="$event.preventDefault()"
                    (pointerdown)="$event.stopPropagation()"
                >
                    <button
                        type="button"
                        class="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm font-semibold text-slate-800 hover:bg-sky-50 dark:text-white dark:hover:bg-gray-800"
                        (click)="openLibraryFromMenu()"
                    >
                        <span class="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white">
                            <mat-icon class="!h-4 !w-4 !text-[18px] !text-white">add</mat-icon>
                        </span>
                        {{ 'visitaGuide.flowAddEndpoint' | transloco }}
                    </button>
                </div>
            }
        </div>
    `,
    styles: [
        `
            .flow-canvas {
                background-color: #e7f1fb;
            }
            :host-context(.dark) .flow-canvas {
                background-color: #0b1220;
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
            .flow-drawer-left {
                height: min(42rem, calc(100% - 1.5rem));
            }
            .flow-drawer-left.is-centered {
                transform: translate3d(-50%, -50%, 0) scale(0.96);
                transition:
                    transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
                    opacity 180ms ease,
                    visibility 0s linear 280ms;
            }
            .flow-drawer-left.is-centered.is-open {
                pointer-events: auto;
                opacity: 1;
                visibility: visible;
                transform: translate3d(-50%, -50%, 0) scale(1);
                transition:
                    transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
                    opacity 180ms ease,
                    visibility 0s;
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
            .flow-coach {
                opacity: 1;
                transition: opacity 320ms ease;
            }
            .flow-coach.is-leaving {
                opacity: 0;
            }
            @media (prefers-reduced-motion: reduce) {
                .flow-drawer,
                .flow-coach {
                    transition: none;
                }
            }
        `,
    ],
})
export class EndpointChainBoardComponent {
    private _transloco = inject(TranslocoService);
    private _snack = inject(MatSnackBar);
    private _dialog = inject(MatDialog);
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
    /** Consult payload keyed by feature id, used to list items of an array output. */
    stepPayloads = input<Record<string, unknown>>({});

    chainChange = output<AppFeature[]>();
    graphChange = output<FlowGraph>();
    continueChain = output<void>();
    continueKey = input('visitaGuide.continue');
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
    libraryOpen = signal(false);
    searchPlaceholder = signal('');
    private _searchFocused = signal(false);
    private readonly _searchTypeEffect = effect((onCleanup) => {
        const playing = this.libraryOpen() && !this.query().trim() && !this._searchFocused();
        this._activeLang();
        if (!playing) {
            untracked(() => this.searchPlaceholder.set(''));
            return;
        }
        const phrases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            .map((index) => this._transloco.translate(`visitaGuide.flowSearchType${index}`))
            .filter((phrase) => phrase && !phrase.startsWith('visitaGuide.flowSearchType'));
        if (!phrases.length) return;
        let phraseIndex = 0;
        let length = 0;
        let mode: 'type' | 'hold' | 'delete' | 'gap' = 'type';
        let cursorOn = true;
        let typeTimer: ReturnType<typeof setTimeout> | null = null;
        let cursorTimer: ReturnType<typeof setInterval> | null = null;
        const paint = (): void => {
            const phrase = phrases[phraseIndex] ?? '';
            const text = phrase.slice(0, length);
            this.searchPlaceholder.set(`${text}${cursorOn ? '|' : '\u00A0'}`);
        };
        const step = (): void => {
            const phrase = phrases[phraseIndex] ?? '';
            if (mode === 'type') {
                if (length < phrase.length) {
                    length += 1;
                    paint();
                    typeTimer = setTimeout(step, 46);
                    return;
                }
                mode = 'hold';
                typeTimer = setTimeout(step, 1500);
                return;
            }
            if (mode === 'hold') {
                mode = 'delete';
                typeTimer = setTimeout(step, 28);
                return;
            }
            if (mode === 'delete') {
                if (length > 0) {
                    length -= 1;
                    paint();
                    typeTimer = setTimeout(step, 28);
                    return;
                }
                mode = 'gap';
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeTimer = setTimeout(step, 260);
                return;
            }
            mode = 'type';
            typeTimer = setTimeout(step, 160);
        };
        paint();
        cursorTimer = setInterval(() => {
            cursorOn = !cursorOn;
            paint();
        }, 530);
        typeTimer = setTimeout(step, 220);
        onCleanup(() => {
            if (typeTimer != null) clearTimeout(typeTimer);
            if (cursorTimer != null) clearInterval(cursorTimer);
        });
    });
    canvasContextMenu = signal<{ x: number; y: number } | null>(null);
    flowCoachHidden = signal(false);
    flowCoachLeaving = signal(false);
    private _coachHideTimer: ReturnType<typeof setTimeout> | null = null;
    libraryCentered = signal(true);
    configOpen = signal(false);
    libraryPos = signal({ x: 12, y: 68 });
    libraryDragging = signal(false);
    readonly libraryAtHome = computed(() => {
        const pos = this.libraryPos();
        return Math.abs(pos.x - 12) < 2 && Math.abs(pos.y - 68) < 2;
    });
    private _libraryDrag: { px: number; py: number; x: number; y: number } | null = null;
    zoom = signal(1);
    panX = signal(0);
    panY = signal(0);
    linking = signal<{ from: string; fromPort: string; fromIndex?: number } | null>(null);
    private readonly _arrayPick = signal<Record<string, number>>({});
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
        const selected = this.countryFilter();
        return this.features().filter((feature) => {
            if (!feature._id) return false;
            if (selected === 'all') return true;
            return isFeatureForCountry(feature.country, selected);
        });
    });

    readonly countryChoices = computed(() => {
        const names = new Set<string>();
        for (const feature of this.features()) {
            const name = (feature.country || '').trim();
            if (name && !isWorldCountry(name)) names.add(name);
        }
        return [...names].sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
    });

    countryFilter = signal('all');

    readonly trayGroups = computed(() =>
        TRAY_GROUPS.map((group) => ({
            ...group,
            icon: FEATURE_GROUP_ICONS[group.id],
            items: this.tray()
                .filter((feature) => featureGroup(feature) === group.id)
                .sort((left, right) => {
                    const byAdded = Number(this.isAdded(left)) - Number(this.isAdded(right));
                    if (byAdded !== 0) return byAdded;
                    const byCountry = (left.country || '').localeCompare(right.country || '', 'es', {
                        sensitivity: 'base',
                    });
                    if (byCountry !== 0) return byCountry;
                    return compareFeaturesForSelectedCountry(left, right);
                }),
        })).filter((group) => group.items.length)
    );

    readonly trayItems = computed(() => this.trayGroups().flatMap((group) => group.items));

    readonly endpointNodes = computed(() => listEndpointNodes(this.graph()));
    readonly flowStatus = computed(() => {
        this._activeLang();
        const graph = this.graph();
        const profiles = this.profiles();
        const endpoints = listEndpointNodes(graph);
        const total = endpoints.length;
        const configured = endpoints.filter((node) => this._inputsSatisfied(graph, node)).length;
        const seeds = flowSeedFields(graph, profiles);
        const inputsConfigured = total > 0 && (seeds.length > 0 || configured === total);
        const connectionsOk = total > 0 && configured === total;
        const paramsComplete = connectionsOk;
        const sourcesAdded = total > 0;
        const ready = inputsConfigured && sourcesAdded && connectionsOk && paramsComplete;
        const sourceLabel =
            total === 1
                ? this._transloco.translate('visitaGuide.flowStatusSourceOne')
                : this._transloco.translate('visitaGuide.flowStatusSourceMany', { count: total });
        return {
            total,
            configured,
            percent: total ? Math.round((configured / total) * 100) : 0,
            ready,
            checks: [
                { ok: inputsConfigured, label: this._transloco.translate('visitaGuide.flowStatusInputs') },
                { ok: sourcesAdded, label: sourceLabel },
                { ok: connectionsOk, label: this._transloco.translate('visitaGuide.flowStatusConnections') },
                { ok: paramsComplete, label: this._transloco.translate('visitaGuide.flowStatusParams') },
            ],
        };
    });
    readonly selectedNode = computed(() => nodeById(this.graph(), this.selectedId() ?? '') ?? null);
    readonly selectedWire = computed(() => this.wires().find((wire) => wire.id === this.selectedWireId()) ?? null);
    readonly worldTransform = computed(() => `translate(${this.panX()}px, ${this.panY()}px) scale(${this.zoom()})`);

    readonly wires = computed(() => {
        const graph = this.graph();
        const groups = new Map<string, { from: FlowGraphNode; to: FlowGraphNode; id: string; locked: boolean }>();
        for (const edge of graph.edges) {
            const from = nodeById(graph, edge.from);
            const to = nodeById(graph, edge.to);
            if (!from || !to || from.kind === 'merge' || to.kind === 'merge') continue;
            const key = `${edge.from}->${edge.to}`;
            if (!groups.has(key)) {
                groups.set(key, { from, to, id: edge.id, locked: edge.to === FLOW_RESULT_ID });
            }
        }
        let colorIndex = 0;
        return [...groups.values()].map((group) => {
            const start = this._cardAnchor(group.from, 'out');
            const end = this._cardAnchor(group.to, 'in');
            const color = wireColorForIndex(colorIndex);
            colorIndex += 1;
            return {
                id: group.id,
                d: cubicWire(start, end),
                mx: (start.x + end.x) / 2,
                my: (start.y + end.y) / 2,
                x1: start.x,
                y1: start.y,
                x2: end.x,
                y2: end.y,
                color,
                locked: group.locked,
            };
        });
    });

    readonly previewPath = computed(() => {
        const link = this.linking();
        if (!link) return '';
        const from = nodeById(this.graph(), link.from);
        if (!from) return '';
        const start =
            link.fromPort === '*'
                ? this._cardAnchor(from, 'out')
                : this._portPoint(from, 'out', Math.max(0, this.outputPorts(from).indexOf(link.fromPort)));
        return cubicWire(start, this.cursor());
    });

    private _coachStepId = '';
    private readonly _coachStepEffect = effect(() => {
        const step = this.coachStep();
        untracked(() => {
            if (step === this._coachStepId) return;
            this._coachStepId = step;
            if (this._coachHideTimer != null) {
                clearTimeout(this._coachHideTimer);
                this._coachHideTimer = null;
            }
            this.flowCoachLeaving.set(false);
            this.flowCoachHidden.set(false);
        });
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

    @HostListener('document:pointerdown', ['$event'])
    onDocumentPointerDown(event: PointerEvent): void {
        if (!this.canvasContextMenu()) return;
        const target = event.target as HTMLElement | null;
        if (target?.closest('.flow-canvas-menu')) return;
        this.canvasContextMenu.set(null);
    }

    @HostListener('document:keydown.escape')
    closeCanvasContextMenu(): void {
        this.canvasContextMenu.set(null);
    }

    @HostListener('document:keydown', ['$event'])
    onZoomShortcut(event: KeyboardEvent): void {
        if (!(event.ctrlKey || event.metaKey) || event.altKey) return;
        const target = event.target as HTMLElement | null;
        if (target?.closest?.('input, textarea, select, [contenteditable="true"]')) return;
        const zoomIn = event.key === '+' || event.key === '=' || event.code === 'NumpadAdd';
        const zoomOut = event.key === '-' || event.key === '_' || event.code === 'NumpadSubtract';
        if (!zoomIn && !zoomOut) return;
        event.preventDefault();
        this.zoomBy(zoomIn ? 0.1 : -0.1);
    }

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
        const point = this._toWorld(event);
        if (link.fromPort === '*') {
            const target = this.graph().nodes.find(
                (node) => node.id !== link.from && node.kind === 'endpoint' && this._pointInNode(point, node)
            );
            if (target) this._connectCards(link.from, target.id);
            return;
        }
        const target = this._hitInputPort(point, link.from);
        if (!target) return;
        this._connect(link.from, link.fromPort, target.nodeId, target.port, link.fromIndex);
    }

    onWheel(event: WheelEvent): void {
        if (!event.ctrlKey && !event.metaKey) return;
        event.preventDefault();
        this.zoomBy(event.deltaY > 0 ? -0.08 : 0.08);
    }

    onCanvasContextMenu(event: MouseEvent): void {
        const target = event.target as HTMLElement | null;
        if (target?.closest('.flow-drawer, .flow-canvas-menu, button, a, input, textarea, select')) return;
        event.preventDefault();
        const width = 248;
        const height = 52;
        const x = Math.max(8, Math.min(event.clientX, window.innerWidth - width - 8));
        const y = Math.max(8, Math.min(event.clientY, window.innerHeight - height - 8));
        this.canvasContextMenu.set({ x, y });
    }

    openLibraryFromMenu(): void {
        this.canvasContextMenu.set(null);
        this._revealLibrary();
    }

    onViewportPointerDown(event: PointerEvent): void {
        if (event.button !== 0) return;
        if (event.target !== event.currentTarget && !(event.target as HTMLElement).classList.contains('flow-world')) {
            return;
        }
        this.configOpen.set(false);
        this.selectedWireId.set(null);
        this._panning = { x: event.clientX, y: event.clientY, panX: this.panX(), panY: this.panY() };
    }

    onNodePointerDown(event: PointerEvent, node: FlowGraphNode): void {
        if (event.button !== 0) return;
        if ((event.target as HTMLElement).closest('button')) return;
        event.preventDefault();
        event.stopPropagation();
        const point = this._toWorld(event);
        if (node.kind !== 'result' && point.x >= node.x + this.nodeWidth(node) - 40) {
            this._moving = null;
            this.linking.set({ from: node.id, fromPort: '*' });
            this.cursor.set(point);
            this.selectedId.set(node.id);
            this.selectedWireId.set(null);
            return;
        }
        this._didMove = false;
        this._moving = { id: node.id, dx: point.x - node.x, dy: point.y - node.y };
        this._hidePanelsForMove();
        this.selectedWireId.set(null);
        this.selectedId.set(node.id);
    }

    onCardLinkDown(event: PointerEvent, node: FlowGraphNode): void {
        if (event.button !== 0) return;
        event.stopPropagation();
        event.preventDefault();
        this._moving = null;
        this.libraryOpen.set(false);
        this.configOpen.set(false);
        this.selectedWireId.set(null);
        this.linking.set({ from: node.id, fromPort: '*' });
        this.cursor.set(this._toWorld(event));
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
        if (event.button !== 0) return;
        event.stopPropagation();
        event.preventDefault();
        this._moving = null;
        this.libraryOpen.set(false);
        this.configOpen.set(false);
        this.selectedWireId.set(null);
        const fromIndex = this.pickedArrayIndex(node.id, port) ?? undefined;
        this.linking.set({ from: node.id, fromPort: port, fromIndex });
        this.cursor.set(this._toWorld(event));
    }

    onInputPortDown(event: PointerEvent, node: FlowGraphNode, port: string): void {
        if (event.button !== 0) return;
        event.stopPropagation();
        const link = this.linking();
        if (!link) return;
        event.preventDefault();
        this.linking.set(null);
        this._connect(link.from, link.fromPort, node.id, port, link.fromIndex);
    }

    zoomBy(delta: number): void {
        this.zoom.set(Math.min(1.6, Math.max(0.5, Math.round((this.zoom() + delta) * 100) / 100)));
    }

    connectAutomatically(): void {
        const endpoints = this.endpointNodes();
        if (!endpoints.length) return;
        this._hydrate(endpoints.map((node) => node.feature).filter((feature): feature is AppFeature => Boolean(feature)));
        let graph = this.graph();
        for (const node of endpoints) {
            const current = nodeById(graph, node.id);
            if (current) graph = this._wireInputsFromStart(graph, current);
        }
        this.graph.set(graph);
        this._emit();
    }

    autoLayout(): void {
        this.graph.set(
            layoutFlowGraph(
                this.graph(),
                (node) => Math.max(this.inputPorts(node).length, this.outputPorts(node).length, 1),
                (node) => ({ width: this.nodeWidth(node), height: this._cardHeight(node) })
            )
        );
        this._emit();
    }

    toggleLibrary(): void {
        if (this.libraryOpen()) {
            this.libraryOpen.set(false);
            return;
        }
        this._revealLibrary();
    }

    openLibrary(): void {
        if (this.libraryOpen() && this.libraryCentered()) {
            this.libraryOpen.set(false);
            return;
        }
        this._revealLibrary();
    }

    /** Opening the catalog starts from a clean search. */
    private _revealLibrary(): void {
        const opening = !this.libraryOpen();
        this.libraryCentered.set(true);
        this.libraryOpen.set(true);
        this.configOpen.set(false);
        if (opening) this.queryChange.emit('');
    }

    private _libraryOrigin(event: PointerEvent): { x: number; y: number } {
        if (!this.libraryCentered()) return this.libraryPos();
        const stage = this._flowStage()?.nativeElement;
        const panel = (event.currentTarget as HTMLElement | null)?.closest('aside');
        if (!stage || !panel) return this.libraryPos();
        const bounds = stage.getBoundingClientRect();
        const box = panel.getBoundingClientRect();
        return { x: box.left - bounds.left, y: box.top - bounds.top };
    }

    onLibraryDragStart(event: PointerEvent): void {
        if (!this.libraryOpen()) return;
        const target = event.target as HTMLElement;
        if (target.closest('button, a, input, textarea')) return;
        event.preventDefault();
        event.stopPropagation();
        const pos = this._libraryOrigin(event);
        this.libraryCentered.set(false);
        this.libraryPos.set(pos);
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

    onSearchFocus(): void {
        this._searchFocused.set(true);
    }

    onSearchBlur(): void {
        this._searchFocused.set(false);
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
        const previous = this._panelsBeforeMove;
        this._panelsBeforeMove = null;
        if (!previous) return;
        this.configOpen.set(previous.config);
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

    startInputChoices(): string[] {
        return START_INPUT_CHOICES;
    }

    isStartInputOn(field: string): boolean {
        const start = nodeById(this.graph(), FLOW_START_ID);
        if (!start) return false;
        const canonical = canonicalChainField(field);
        return this.outputPorts(start).some((port) => canonicalChainField(port) === canonical);
    }

    canRemoveStartInput(field: string): boolean {
        const canonical = canonicalChainField(field);
        const manual = extraPortsFor(this.graph(), FLOW_START_ID, 'outputs').some((port) => canonicalChainField(port) === canonical);
        return manual && !this._autoStartFields().has(canonical);
    }

    toggleStartInput(field: string): void {
        const canonical = canonicalChainField(field);
        if (this.canRemoveStartInput(canonical)) {
            this.removeStartInput(canonical);
            return;
        }
        if (this.isStartInputOn(canonical)) return;
        this.graph.set(addExtraPort(this.graph(), FLOW_START_ID, 'outputs', canonical));
        this._emit();
    }

    removeStartInput(field: string): void {
        const canonical = canonicalChainField(field);
        if (!this.canRemoveStartInput(canonical)) return;
        this.graph.set(hidePort(this.graph(), FLOW_START_ID, 'outputs', canonical));
        this._emit();
    }

    private _autoStartFields(): Set<string> {
        const graph = this.graph();
        const ports = { ...(graph.ports ?? {}) };
        const start = { ...(ports[FLOW_START_ID] ?? {}) };
        ports[FLOW_START_ID] = { ...start, outputs: [] };
        return new Set(flowSeedFields({ ...graph, ports }, this.profiles()).map((field) => canonicalChainField(field)));
    }

    readonly resultPlaceholders = [0, 1, 2, 3];

    resultSources(): FlowGraphNode[] {
        return this.graph().nodes.filter((node) => node.kind === 'endpoint');
    }

    coachStep(): 'add' | 'connect' | 'fix' | 'ready' {
        const total = this.endpointNodes().length;
        if (!total) return 'add';
        if (total === 1) return 'connect';
        return this.flowStatus().ready ? 'ready' : 'fix';
    }

    coachTextKey(): string {
        switch (this.coachStep()) {
            case 'add':
                return 'visitaGuide.flowCoachAdd';
            case 'fix':
                return 'visitaGuide.flowCoachFix';
            case 'ready':
                return 'visitaGuide.flowCoachReady';
            default:
                return 'visitaGuide.flowWiresHint';
        }
    }

    showFlowCoach(): boolean {
        if (this.coachStep() === 'add') return !this.libraryOpen();
        return !this.flowCoachHidden();
    }

    hideFlowCoach(): void {
        if (this.flowCoachLeaving() || this.flowCoachHidden()) return;
        this.flowCoachLeaving.set(true);
        if (this._coachHideTimer != null) clearTimeout(this._coachHideTimer);
        this._coachHideTimer = setTimeout(() => {
            this.flowCoachHidden.set(true);
            this.flowCoachLeaving.set(false);
            this._coachHideTimer = null;
        }, 320);
    }

    nodeWidth(node: FlowGraphNode): number {
        if (node.kind === 'result') return 320;
        const base = flowNodeWidth(node);
        if (node.kind !== 'start') return base;
        const longest = this.outputPorts(node).reduce((max, port) => Math.max(max, this.fieldLabel(port).length), 0);
        return Math.min(440, Math.max(300, Math.ceil(longest * 8.2 + 96)));
    }

    startFieldIcon(port: string): string {
        switch (canonicalParamFilterId(port)) {
            case 'fullName':
                return 'person';
            case 'documentType':
                return 'description';
            case 'documentNumber':
                return 'tag';
            case 'plate':
                return 'directions_car';
            case 'dateOfBirth':
            case 'fechaExpedicion':
            case 'expirationDate':
                return 'calendar_today';
            case 'vin':
                return 'pin';
            default:
                return /quality/i.test(port) ? 'star' : 'label';
        }
    }

    private _portPoint(node: FlowGraphNode, side: 'in' | 'out', index: number): { x: number; y: number } {
        if (node.kind === 'start' && side === 'out') {
            const row = 36;
            return {
                x: node.x + this.nodeWidth(node),
                y: node.y + 82 + index * row + row / 2,
            };
        }
        const point = portCenter(node, side, index, 0);
        if (side === 'out') point.x = node.x + this.nodeWidth(node);
        return point;
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
        const active = this.activeQueryMode(node);
        if (active) return this._uniquePorts(active.fields.map((field) => canonicalChainField(field.field)));
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
        const plan = nodeQueryInputs(this.graph(), this._nodeWithFeature(node));
        if (plan) return this._uniquePorts([...plan.required, ...plan.optional]);
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
        const shown = (seeds.length ? seeds : catalog).slice(0, 3);
        if (catalog.includes('date') && !shown.includes('date')) shown.push('date');
        const arrays = catalog.filter(
            (field) => !shown.includes(field) && (this._arrayFromPayload(node.feature?._id, field) != null || /array/i.test(field))
        );
        const known = new Set([...shown, ...arrays]);
        const live = this._payloadArrayPaths(node.feature?._id).filter((path) => {
            if (known.has(path)) return false;
            const leaf = path.split('.').pop() ?? path;
            return !(known.has(leaf) && this._arrayFromPayload(node.feature?._id, leaf));
        });
        return [...shown, ...arrays, ...live];
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

    arrayItems(node: FlowGraphNode, port: string): { index: number; label: string }[] {
        const live = this._arrayFromPayload(node.feature?._id, port);
        if (!live) return [];
        return live.slice(0, 40).map((item, index) => ({ index, label: this._arrayItemLabel(item, index) }));
    }

    pickedArrayIndex(nodeId: string, port: string): number | null {
        const picked = this._arrayPick()[`${nodeId}::${port}`];
        if (Number.isInteger(picked)) return picked;
        const stored = outgoingEdges(this.graph(), nodeId, port).find((edge) => Number.isInteger(edge.fromIndex));
        return stored?.fromIndex ?? null;
    }

    pickArrayIndex(nodeId: string, port: string, raw: string): void {
        const trimmed = raw.trim();
        const index = trimmed === '' ? null : Number(trimmed);
        if (index != null && (!Number.isInteger(index) || index < 0)) return;
        this._arrayPick.update((current) => {
            const next = { ...current };
            if (index == null) delete next[`${nodeId}::${port}`];
            else next[`${nodeId}::${port}`] = index;
            return next;
        });
        const edges = outgoingEdges(this.graph(), nodeId, port);
        if (!edges.length) return;
        const fromPath = index == null ? undefined : this._resolvedArrayPath(nodeById(this.graph(), nodeId)?.feature?._id, port);
        let graph = this.graph();
        for (const edge of edges) {
            graph = connectPorts(graph, edge.from, edge.fromPort, edge.to, edge.toPort, index ?? undefined, fromPath);
        }
        this.graph.set(graph);
        this._emit();
    }

    arrayIndexHint(node: FlowGraphNode, port: string): string {
        const total = this._arrayFromPayload(node.feature?._id, port)?.length ?? 0;
        const items = this.arrayItems(node, port);
        const picked = this.pickedArrayIndex(node.id, port);
        const preview = items
            .slice(0, 12)
            .map((item) => `${item.index} ${item.label}`)
            .join(' · ');
        const base = this._transloco.translate('visitaGuide.flowArrayIndexHint');
        if (!total) return base;
        const seen = this._transloco.translate('visitaGuide.flowArraySeen', { count: total });
        const beyond =
            picked != null && picked >= total ? ` ${this._transloco.translate('visitaGuide.flowArrayMissing')}` : '';
        return `${base} ${seen}${preview ? ` ${preview}` : ''}${beyond}`;
    }

    private _arrayFromPayload(featureId: string | undefined, port: string): unknown[] | null {
        if (!featureId) return null;
        const payload = this.stepPayloads()[featureId];
        const direct = arrayAtPath(payload, port);
        if (direct) return direct;
        if (port.includes('.')) return null;
        const nested = collectArrayPaths(payload).find((entry) => entry.path.endsWith(`.${port}`));
        return nested?.items ?? null;
    }

    private _payloadArrayPaths(featureId: string | undefined): string[] {
        if (!featureId) return [];
        return collectArrayPaths(this.stepPayloads()[featureId])
            .filter((entry) => entry.items.length > 0)
            .map((entry) => entry.path);
    }

    private _resolvedArrayPath(featureId: string | undefined, port: string): string | undefined {
        if (!featureId) return undefined;
        const payload = this.stepPayloads()[featureId];
        if (arrayAtPath(payload, port)) return undefined;
        const leaf = port.split('.').pop() ?? port;
        const nested = collectArrayPaths(payload).find((entry) => entry.path.endsWith(`.${leaf}`));
        return nested?.path;
    }

    private _arrayItemLabel(item: unknown, index: number): string {
        if (typeof item === 'string' || typeof item === 'number') {
            const text = String(item).trim();
            return text || String(index);
        }
        if (item && typeof item === 'object' && !Array.isArray(item)) {
            const record = item as Record<string, unknown>;
            for (const key of ['fullName', 'name', 'lastName', 'firstName', 'documentNumber', 'plate', 'value']) {
                const value = record[key];
                if (typeof value === 'string' && value.trim()) return value.trim();
            }
        }
        return String(index);
    }

    boundSource(nodeId: string, port: string): string {
        const fixed = this.graph().fixed[nodeId]?.[port];
        if (fixed) return this._transloco.translate('visitaGuide.flowFixedValue') + ' ' + fixed;
        const edge = incomingEdgeForField(this.graph(), nodeId, port);
        if (!edge) return '';
        const from = nodeById(this.graph(), edge.from);
        if (!from) return '';
        const item = Number.isInteger(edge.fromIndex) ? ` [${edge.fromIndex}]` : '';
        return `${this.fieldLabel(edge.fromPort)}${item} · ${this.nodeTitle(from)}`;
    }

    hasOutgoing(nodeId: string, port: string): boolean {
        return outgoingEdges(this.graph(), nodeId, port).length > 0;
    }

    isHotInput(node: FlowGraphNode, port: string): boolean {
        const link = this.linking();
        if (!link || link.from === node.id) return false;
        if (link.fromIndex != null) return true;
        return fieldsLikelyCompatible(link.fromPort, port) || link.fromPort === '*' || port === '*';
    }

    sourceOptions(nodeId: string, port: string): { id: string; label: string }[] {
        const options: { id: string; label: string }[] = [];
        for (const node of this.graph().nodes) {
            if (node.id === nodeId) continue;
            for (const out of this.outputPorts(node)) {
                if (out === '*' && node.kind === 'endpoint') continue;
                const items = node.kind === 'endpoint' ? this.arrayItems(node, out).slice(0, 30) : [];
                options.push({
                    id: `${node.id}::${out}`,
                    label: `${this.nodeTitle(node)} → ${this.fieldLabel(out)}`,
                });
                for (const item of items) {
                    options.push({
                        id: `${node.id}::${out}::${item.index}`,
                        label: `${this.nodeTitle(node)} → ${this.fieldLabel(out)} [${item.index}] ${item.label}`,
                    });
                }
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
        const parts = value.split('::');
        const from = parts[0];
        const fromPort = parts[1];
        const rawIndex = parts.length > 2 ? Number(parts[2]) : undefined;
        if (from && fromPort) {
            this._connect(from, fromPort, node.id, port, Number.isInteger(rawIndex) ? rawIndex : undefined);
        }
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

    nodeTone(_node: FlowGraphNode): string {
        return 'border border-slate-200/90 bg-white shadow-[0_10px_28px_rgba(37,99,175,0.10)] dark:border-gray-700 dark:bg-gray-900';
    }

    iconTone(feature: AppFeature | null | undefined): string {
        switch (feature ? featureGroup(feature) : 'other') {
            case 'vehicle':
                return 'bg-sky-100 text-sky-700';
            case 'citizen':
                return 'bg-orange-100 text-orange-700';
            case 'company':
                return 'bg-violet-100 text-violet-700';
            default:
                return 'bg-emerald-100 text-emerald-700';
        }
    }

    fieldLabel(field: string): string {
        if (field === '*') return this._transloco.translate('visitaGuide.flowFullResponse');
        const key = paramFieldLabelKey(field);
        return this._transloco.translate(key, { field: humanizeParamField(field) });
    }

    queryModes(node: FlowGraphNode): QueryMode[] {
        return queryModesForFeature(this._featureOf(node));
    }

    activeQueryMode(node: FlowGraphNode): QueryMode | null {
        const modes = this.queryModes(node);
        if (modes.length < 2) return null;
        const stored = queryModeFor(this.graph(), node.id);
        return modes.find((mode) => mode.id === stored) ?? modes[0];
    }

    isQueryModeActive(node: FlowGraphNode, mode: QueryMode): boolean {
        return this.activeQueryMode(node)?.id === mode.id;
    }

    modeTitle(mode: QueryMode): string {
        const primary = mode.fields.filter((field) => !field.requiredWhen?.values.length);
        return (primary.length ? primary : mode.fields)
            .map((field) => this.fieldLabel(canonicalChainField(field.field)))
            .join(' + ');
    }

    modeNotes(mode: QueryMode): string[] {
        return mode.fields
            .filter((field) => field.requiredWhen?.values.length)
            .map((field) => this._conditionText(field.requiredWhen!.field, field.requiredWhen!.values));
    }

    portCondition(node: FlowGraphNode, port: string): string {
        const field = this.activeQueryMode(node)?.fields.find((item) => canonicalChainField(item.field) === port);
        if (!field?.requiredWhen?.values.length) return '';
        return this._conditionText(field.requiredWhen.field, field.requiredWhen.values);
    }

    selectQueryMode(node: FlowGraphNode, modeId: string): void {
        const modes = this.queryModes(node);
        if (!modes.some((mode) => mode.id === modeId)) return;
        const feature = this._featureOf(node);
        let graph = applyQueryMode(this.graph(), node.id, modeId, modes);
        if (feature && graph.nodes.some((item) => item.id === node.id && item.feature && !item.feature.dependencies?.length)) {
            graph = {
                ...graph,
                nodes: graph.nodes.map((item) => (item.id === node.id ? { ...item, feature } : item)),
            };
        }
        this.graph.set(this._rewire(graph, node.id));
        this._emit();
    }

    private _conditionText(field: string, values: string[]): string {
        return this._transloco.translate('visitaGuide.flowQueryWhen', {
            when: this.fieldLabel(canonicalChainField(field)),
            values: values.join(', '),
        });
    }

    private _featureOf(node: FlowGraphNode): AppFeature | undefined {
        const current = node.feature;
        if (!current?._id) return current;
        return this.features().find((item) => item._id === current._id) ?? current;
    }

    private _nodeWithFeature(node: FlowGraphNode): FlowGraphNode {
        const feature = this._featureOf(node);
        return feature && feature !== node.feature ? { ...node, feature } : node;
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

    openFeatureInfo(feature: AppFeature | null | undefined): void {
        if (!feature) return;
        this._dialog
            .open(EndpointInfoDialogComponent, {
                data: { feature, allowAdd: false },
                width: '720px',
                maxWidth: '92vw',
                maxHeight: '70vh',
                panelClass: 'endpoint-info-panel',
                autoFocus: false,
            });
    }

    isAdded(feature: AppFeature): boolean {
        const id = feature._id;
        return Boolean(id && usedFeatureIds(this.graph()).includes(id));
    }

    addFromLibrary(feature: AppFeature): void {
        if (this.isAdded(feature)) return;
        this.attachToSelected(feature);
    }

    attachToSelected(feature: AppFeature): void {
        const selected = this.selectedNode();
        const origin = selected && selected.kind === 'endpoint' ? selected : nodeById(this.graph(), FLOW_START_ID);
        const x = (origin?.x ?? 40) + 340;
        const y = (origin?.y ?? 180) + this.endpointNodes().length * 24;
        this._place(feature, x, y);
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
        if (!edge || edge.to === FLOW_RESULT_ID) return;
        let graph: FlowGraph = {
            ...this.graph(),
            edges: this.graph().edges.filter((item) => !(item.from === edge.from && item.to === edge.to)),
        };
        const target = nodeById(graph, edge.to);
        if (target?.kind === 'endpoint' && edge.from !== FLOW_START_ID) {
            graph = restoreUnfedInputs(graph, target.id, this._requiredInputs(graph, target));
        }
        this.graph.set(graph);
        this.selectedWireId.set(null);
        this._emit();
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
        let graph = addEndpointNode(this.graph(), feature, x, y);
        const modes = queryModesForFeature(feature);
        if (modes.length > 1) graph = applyQueryMode(graph, feature._id, modes[0].id, modes);
        const target = nodeById(graph, feature._id);
        if (target) graph = this._wireInputsFromStart(graph, target);
        this.graph.set(graph);
        this.selectNode(feature._id, false);
        this._emit();
    }

    /** Each input of the endpoint comes from Datos de entrada, including fields the flow did not have yet. */
    private _wireInputsFromStart(graph: FlowGraph, target: FlowGraphNode): FlowGraph {
        if (target.kind !== 'endpoint' || !nodeById(graph, FLOW_START_ID)) return graph;
        return this._requiredInputs(graph, target).reduce(
            (next, port) => connectPorts(next, FLOW_START_ID, port, target.id, port),
            graph
        );
    }

    private _connectCards(fromId: string, toId: string): void {
        const from = nodeById(this.graph(), fromId);
        const to = nodeById(this.graph(), toId);
        if (!from || !to || to.kind !== 'endpoint' || from.kind === 'result') return;
        const needed = this._requiredInputs(this.graph(), to);
        const plan = planEndpointLink(
            this.graph(),
            from,
            to,
            needed,
            this.profiles()[from.id],
            this.profiles()[to.id]
        );
        if (from.kind === 'endpoint' && plan.status !== 'full') {
            this._rejectChain(from, to, plan.status === 'cycle' ? 'cycle' : 'none', plan.pending);
            return;
        }
        if (!plan.wires.length) {
            if (this._mustReject(this.graph(), to)) this._rejectChain(from, to, 'none', needed);
            return;
        }
        const graph = plan.wires.reduce(
            (next, wire) => connectPorts(next, wire.from, wire.fromPort, wire.to, wire.toPort),
            this.graph()
        );
        this.graph.set(graph);
        this._emit();
        if (from.kind === 'endpoint') this._announceChain(plan.status, plan.pending);
    }

    private _requiredInputs(graph: FlowGraph, node: FlowGraphNode): string[] {
        const plan = nodeQueryInputs(graph, node);
        if (plan) {
            const fields = plan.required.length ? plan.required : plan.optional;
            return this._uniquePorts(fields);
        }
        return this.profiles()[node.id]?.inputs ?? [];
    }

    private _inputsSatisfied(graph: FlowGraph, node: FlowGraphNode): boolean {
        const needed = this._requiredInputs(graph, node);
        if (!needed.length) return true;
        return needed.every((field) => {
            if ((graph.fixed[node.id]?.[field] ?? '').trim()) return true;
            const edge = incomingEdgeForField(graph, node.id, field);
            if (!edge || edge.from === node.id) return false;
            return this._edgeFeeds(graph, node.id, edge.from, field);
        });
    }

    private _edgeFeeds(_graph: FlowGraph, _nodeId: string, fromId: string, field: string): boolean {
        if (fromId === FLOW_START_ID) return true;
        return outputFeedingInput(this.profiles()[fromId]?.outputs ?? [], field) != null;
    }

    private _rewire(graph: FlowGraph, nodeId: string): FlowGraph {
        const target = nodeById(graph, nodeId);
        if (!target || target.kind !== 'endpoint') return graph;
        const next: FlowGraph = {
            ...graph,
            edges: graph.edges.filter((edge) => !(edge.to === nodeId && edge.toPort !== '*')),
        };
        return this._wireInputsFromStart(next, target);
    }

    private _mustReject(graph: FlowGraph, to: FlowGraphNode): boolean {
        return to.kind === 'endpoint' && this._requiredInputs(graph, to).length > 0;
    }

    private _cardHeight(node: FlowGraphNode): number {
        if (node.kind === 'start') return 155 + this.outputPorts(node).length * 36;
        if (node.kind === 'result') {
            const rows = this.resultSources().length || this.resultPlaceholders.length;
            return 90 + rows * 40;
        }
        return 68;
    }

    private _cardAnchor(node: FlowGraphNode, side: 'in' | 'out'): { x: number; y: number } {
        return {
            x: side === 'in' ? node.x : node.x + this.nodeWidth(node),
            y: node.y + (node.kind === 'endpoint' ? 28 : this._cardHeight(node) / 2),
        };
    }

    private _connect(from: string, fromPort: string, to: string, toPort: string, fromIndex?: number): void {
        const apply = (): void => {
            const fromPath =
                fromIndex == null
                    ? undefined
                    : this._resolvedArrayPath(nodeById(this.graph(), from)?.feature?._id, fromPort);
            this.graph.set(connectPorts(this.graph(), from, fromPort, to, toPort, fromIndex, fromPath));
            this._emit();
        };
        if (fromIndex != null || fromPort === '*' || toPort === '*' || fieldsLikelyCompatible(fromPort, toPort)) {
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
        this._dropStaleWires();
    }

    private _dropStaleWires(): void {
        const pruned = pruneInvalidEndpointWires(this.graph(), this.profiles());
        if (!pruned.dropped.length) return;
        let graph = pruned.graph;
        for (const edge of pruned.dropped) {
            const target = nodeById(graph, edge.to);
            if (target?.kind === 'endpoint') graph = restoreUnfedInputs(graph, target.id, this._requiredInputs(graph, target));
        }
        this.graph.set(graph);
        this._emit();
        const sample = pruned.dropped[0];
        const source = nodeById(graph, sample.from);
        const target = nodeById(graph, sample.to);
        this._snack.open(
            this._transloco.translate('visitaGuide.flowLinkStaleBody', {
                source: source?.feature ? this.name(source.feature) : sample.from,
                target: target?.feature ? this.name(target.feature) : sample.to,
                field: this.fieldLabel(sample.field),
            }),
            undefined,
            { duration: 5000 }
        );
    }

    private _announceChain(status: 'full' | 'partial' | 'none' | 'cycle', pending: string[]): void {
        const key = status === 'partial' ? 'visitaGuide.flowLinkPartialBody' : 'visitaGuide.flowLinkReadyBody';
        this._snack.open(
            this._transloco.translate(key, { fields: pending.map((field) => this.fieldLabel(field)).join(', ') }),
            undefined,
            { duration: 4500 }
        );
    }

    private _rejectChain(
        from: FlowGraphNode,
        to: FlowGraphNode,
        status: 'none' | 'cycle',
        pending: string[]
    ): void {
        const source = from.kind === 'start' ? this._transloco.translate('visitaGuide.flowStartCardTitle') : from.feature ? this.name(from.feature) : from.id;
        const target = to.feature ? this.name(to.feature) : to.id;
        const key = status === 'cycle' ? 'visitaGuide.flowLinkCycleBody' : 'visitaGuide.flowLinkBlockedBody';
        this._confirm.open({
            title: this._transloco.translate('visitaGuide.flowLinkRejectedTitle'),
            message: this._transloco.translate(key, {
                source,
                target,
                fields: pending.map((item) => this.fieldLabel(item)).join(', '),
            }),
            icon: { show: true, name: 'heroicons_outline:exclamation-triangle', color: 'warning' },
            actions: {
                confirm: { show: true, label: this._transloco.translate('visitaGuide.flowLinkRejectedOk'), color: 'primary' },
                cancel: { show: false, label: '' },
            },
        });
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
        const height = this._cardHeight(node);
        return (
            point.x >= node.x - 24 &&
            point.x <= node.x + width + 24 &&
            point.y >= node.y - 28 &&
            point.y <= node.y + height + 28
        );
    }
}
