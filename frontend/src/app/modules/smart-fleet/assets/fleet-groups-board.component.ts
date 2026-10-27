import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { catchError, firstValueFrom, forkJoin, of } from 'rxjs';
import { FleetVehicleIconComponent } from './fleet-vehicle-icon.component';
import {
    FLEET_GROUP_COLOR_DEFAULT,
    FLEET_GROUP_COLORS,
    FLEET_GROUP_ICON_DEFAULT,
    FLEET_GROUP_ICONS,
    FleetAsset,
    FleetGroupIcon,
    FleetGroupRef,
    SmartFleetService,
    normalizeFleetGroup,
} from '../smart-fleet.service';

const STORED_GROUPS_KEY = 'smart-fleet.groups';
const STORED_GROUP_VIEW_KEY = 'smart-fleet.groups.view';

type GroupView = 'list' | 'icons';

type IdentifierKind = 'plateOnly' | 'plate' | 'vin';

/** How the vehicle can be checked: plate only, plate plus owner document, or VIN. */
function readGroupView(): GroupView {
    if (typeof localStorage === 'undefined') return 'list';

    return localStorage.getItem(STORED_GROUP_VIEW_KEY) === 'icons' ? 'icons' : 'list';
}

function identifierKind(asset: FleetAsset): IdentifierKind {
    const plate = asset.plate?.trim();
    const vin = asset.vin?.trim();
    const documentNumber = asset.ownerDocumentNumber?.trim();

    if (vin && !plate) return 'vin';

    if (plate && documentNumber) return 'plate';

    return 'plateOnly';
}

@Component({
    selector: 'fleet-group-name-dialog',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslocoModule, MatDialogModule, MatButtonModule, FleetVehicleIconComponent],
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            fleet-group-name-dialog {
                display: flex;
                flex-direction: column;
                max-height: 100%;
                min-height: 0;
            }

            fleet-group-name-dialog .fleet-group-dialog__body {
                flex: 1 1 auto;
                min-height: 0;
                overflow-y: auto;
                overscroll-behavior: contain;
                max-height: none !important;
                padding: 0.5rem 1.25rem 1rem !important;
            }

            /* Vehicle type tiles: big icon, full label (wraps instead of being cut off) */
            fleet-group-name-dialog .fleet-group-dialog__tile {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                min-height: 6.5rem;
                padding: 0.75rem 0.375rem;
                text-align: center;
                border-radius: 1rem;
                transition:
                    border-color 120ms,
                    background-color 120ms;
            }

            fleet-group-name-dialog .fleet-group-dialog__tile fleet-vehicle-icon {
                width: 3.25rem;
                height: 2.25rem;
            }

            fleet-group-name-dialog .fleet-group-dialog__tile-label {
                font-size: 0.875rem;
                font-weight: 500;
                line-height: 1.15;
                overflow-wrap: anywhere;
                hyphens: auto;
            }

            fleet-group-name-dialog .fleet-group-dialog__actions {
                gap: 0.75rem;
                padding: 0.75rem 1.25rem 1rem !important;
                border-top: 1px solid rgb(231 229 228);
            }

            fleet-group-name-dialog .fleet-group-dialog__actions .mat-mdc-button-base {
                min-height: 3rem;
                padding-inline: 1.5rem;
                font-size: 1rem;
            }

            @media (max-width: 639px) {
                fleet-group-name-dialog .fleet-group-dialog__actions {
                    flex-direction: column-reverse;
                    align-items: stretch;
                }

                fleet-group-name-dialog .fleet-group-dialog__actions .mat-mdc-button-base {
                    width: 100%;
                    margin: 0;
                }
            }
        `,
    ],
    template: `
        <h2 mat-dialog-title class="!px-5 !pt-5 text-xl font-semibold">
            {{ 'smartFleet.groups.promptTitle' | transloco }}
        </h2>
        <mat-dialog-content class="fleet-group-dialog__body">
            <label class="mt-1 flex flex-col gap-2">
                <span class="text-base font-medium text-stone-700 dark:text-stone-200">{{
                    'smartFleet.groups.promptLabel' | transloco
                }}</span>
                <input
                    type="text"
                    [(ngModel)]="name"
                    (keyup.enter)="confirm()"
                    [placeholder]="'smartFleet.groups.namePlaceholder' | transloco"
                    class="min-h-[3rem] rounded-xl border border-stone-300 px-4 py-3 text-base focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900"
                />
            </label>

            <p class="mb-3 mt-6 text-base font-medium text-stone-700 dark:text-stone-200">
                {{ 'smartFleet.groups.pickColor' | transloco }}
            </p>
            <div class="flex flex-wrap gap-3">
                <button
                    *ngFor="let swatch of colors"
                    type="button"
                    (click)="color = swatch"
                    class="h-11 w-11 rounded-full border-[3px] transition-transform"
                    [style.background]="swatch"
                    [class.border-stone-900]="color === swatch"
                    [class.dark:border-white]="color === swatch"
                    [class.scale-110]="color === swatch"
                    [class.border-transparent]="color !== swatch"
                    [attr.aria-label]="swatch"
                    [attr.aria-pressed]="color === swatch"
                ></button>
            </div>

            <p class="mb-3 mt-6 text-base font-medium text-stone-700 dark:text-stone-200">
                {{ 'smartFleet.groups.pickIcon' | transloco }}
            </p>
            <div class="grid grid-cols-3 gap-3 sm:grid-cols-4">
                <button
                    *ngFor="let mark of icons"
                    type="button"
                    (click)="icon = mark"
                    class="fleet-group-dialog__tile border-2 text-stone-800 dark:text-stone-100"
                    [class.border-stone-900]="icon === mark"
                    [class.bg-stone-100]="icon === mark"
                    [class.dark:border-stone-100]="icon === mark"
                    [class.dark:bg-gray-800]="icon === mark"
                    [class.border-stone-200]="icon !== mark"
                    [class.dark:border-gray-600]="icon !== mark"
                    [attr.aria-label]="'smartFleet.groups.icon.' + mark | transloco"
                    [attr.aria-pressed]="icon === mark"
                >
                    <fleet-vehicle-icon [icon]="mark"></fleet-vehicle-icon>
                    <span class="fleet-group-dialog__tile-label text-stone-700 dark:text-stone-200">{{
                        'smartFleet.groups.icon.' + mark | transloco
                    }}</span>
                </button>
            </div>
        </mat-dialog-content>
        <mat-dialog-actions align="end" class="fleet-group-dialog__actions">
            <button mat-stroked-button type="button" (click)="cancel()">
                {{ 'smartFleet.cancel' | transloco }}
            </button>
            <button mat-flat-button color="primary" type="button" (click)="confirm()">
                {{ 'smartFleet.groups.create' | transloco }}
            </button>
        </mat-dialog-actions>
    `,
})
export class FleetGroupNameDialogComponent {
    private _ref = inject(MatDialogRef<FleetGroupNameDialogComponent, FleetGroupRef | undefined>);

    readonly colors = FLEET_GROUP_COLORS;
    readonly icons = FLEET_GROUP_ICONS;

    name = '';
    color = FLEET_GROUP_COLOR_DEFAULT;
    icon: FleetGroupIcon = FLEET_GROUP_ICON_DEFAULT;

    confirm(): void {
        const trimmed = this.name.trim();

        this._ref.close(trimmed ? { name: trimmed, color: this.color, icon: this.icon } : undefined);
    }

    cancel(): void {
        this._ref.close(undefined);
    }
}

@Component({
    selector: 'fleet-group-rename-dialog',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslocoModule, MatDialogModule, MatButtonModule],
    template: `
        <h2 mat-dialog-title class="text-lg font-semibold">
            {{ 'smartFleet.groups.editNameTitle' | transloco }}
        </h2>
        <mat-dialog-content>
            <label class="mt-2 flex flex-col gap-1">
                <span class="text-sm text-stone-600">{{ 'smartFleet.groups.editNameLabel' | transloco }}</span>
                <input
                    type="text"
                    [(ngModel)]="name"
                    (keyup.enter)="confirm()"
                    [placeholder]="'smartFleet.groups.namePlaceholder' | transloco"
                    class="rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none"
                />
            </label>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button type="button" (click)="cancel()">
                {{ 'smartFleet.cancel' | transloco }}
            </button>
            <button mat-flat-button color="primary" type="button" (click)="confirm()">
                {{ 'smartFleet.groups.save' | transloco }}
            </button>
        </mat-dialog-actions>
    `,
})
export class FleetGroupRenameDialogComponent {
    private _ref = inject(MatDialogRef<FleetGroupRenameDialogComponent, string | undefined>);
    private _data = inject<{ name: string }>(MAT_DIALOG_DATA);

    name = this._data.name;

    confirm(): void {
        const trimmed = this.name.trim();

        this._ref.close(trimmed || undefined);
    }

    cancel(): void {
        this._ref.close(undefined);
    }
}

@Component({
    selector: 'fleet-groups-board',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatSnackBarModule,
        MatTooltipModule,
        FleetVehicleIconComponent,
    ],
    templateUrl: './fleet-groups-board.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FleetGroupsBoardComponent implements OnInit {
    private _fleetService = inject(SmartFleetService);
    private _transloco = inject(TranslocoService);
    private _snackBar = inject(MatSnackBar);
    private _confirm = inject(FuseConfirmationService);
    private _dialog = inject(MatDialog);

    assets = signal<FleetAsset[]>([]);
    groups = signal<FleetGroupRef[]>([]);
    selectedGroup = signal<string | null>(null);
    colorTarget = signal<string | null>(null);
    iconTarget = signal<string | null>(null);
    isLoading = signal(true);
    view = signal<GroupView>(readGroupView());
    readonly groupColors = FLEET_GROUP_COLORS;
    readonly groupIcons = FLEET_GROUP_ICONS;
    colorMenuTrigger?: MatMenuTrigger;
    iconMenuTrigger?: MatMenuTrigger;

    groupNames = computed(() => {
        const names = new Set(this.groups().map((group) => group.name));

        for (const asset of this.assets()) {
            if (asset.group) names.add(asset.group);
        }

        return [...names].sort((left, right) => left.localeCompare(right));
    });

    ungrouped = computed(() => this.assets().filter((asset) => !asset.group));
    adding = signal(false);
    vehicleQuery = signal('');
    /** How many vehicles the open group had when the add panel was opened. */
    private _membersAtOpen = 0;
    filteredUngrouped = computed(() => {
        const query = this.vehicleQuery().trim().toLowerCase();
        const list = this.ungrouped();

        if (!query) return list;

        return list.filter((asset) =>
            [asset.plate, asset.vin, asset.nickname].some((value) => value?.toLowerCase().includes(query))
        );
    });

    readonly identifierKinds: IdentifierKind[] = ['plateOnly', 'plate', 'vin'];

    private _buckets = computed(() => {
        const map = new Map<string, FleetAsset[]>();

        for (const name of this.groupNames()) map.set(name, []);

        for (const asset of this.assets()) {
            if (asset.group && map.has(asset.group)) map.get(asset.group)!.push(asset);
        }

        return map;
    });

    ngOnInit(): void {
        this.reload();
    }

    setView(next: GroupView): void {
        this.view.set(next);

        if (typeof localStorage === 'undefined') return;

        localStorage.setItem(STORED_GROUP_VIEW_KEY, next);
    }

    reload(): void {
        this.isLoading.set(true);

        forkJoin({
            assets: this._fleetService.listAssets(),
            groups: this._fleetService.listGroups(),
        }).subscribe({
            next: ({ assets, groups }) => {
                const remote = (groups.data ?? []).map((entry) => normalizeFleetGroup(entry));
                const pending = this._readStoredGroups().filter(
                    (name) => !remote.some((entry) => entry.name.toLowerCase() === name.toLowerCase())
                );

                this.assets.set(assets.data ?? []);
                this._dismissAddPanelIfCaughtUp();
                this.groups.set([
                    ...remote,
                    ...pending.map((name) => normalizeFleetGroup(name)),
                ]);
                this.isLoading.set(false);

                if (pending.length) this._migrateStoredGroups(pending);
                else this._writeStoredGroups([]);
            },
            error: (err) => {
                this.isLoading.set(false);
                console.error('[SmartFleet] list groups error', err);
            },
        });
    }

    colorOf(name: string | null | undefined): string {
        if (!name) return FLEET_GROUP_COLOR_DEFAULT;

        return this.groups().find((group) => group.name === name)?.color || FLEET_GROUP_COLOR_DEFAULT;
    }

    iconOf(name: string | null | undefined): FleetGroupIcon {
        if (!name) return FLEET_GROUP_ICON_DEFAULT;

        return this.groups().find((group) => group.name === name)?.icon || FLEET_GROUP_ICON_DEFAULT;
    }

    setColor(name: string, color: string): void {
        this._patchGroup(name, { color });
        this.colorMenuTrigger?.closeMenu();

        this._fleetService.updateGroup(name, { color }).subscribe({
            error: (err) => {
                console.error('[SmartFleet] update group color error', err);
                this.reload();
                this._snackBar.open(this._transloco.translate('smartFleet.groups.moveFailed'), undefined, {
                    duration: 4000,
                });
            },
        });
    }

    setIcon(name: string, icon: FleetGroupIcon): void {
        this._patchGroup(name, { icon });
        this.iconMenuTrigger?.closeMenu();

        this._fleetService.updateGroup(name, { icon }).subscribe({
            error: (err) => {
                console.error('[SmartFleet] update group icon error', err);
                this.reload();
                this._snackBar.open(this._transloco.translate('smartFleet.groups.moveFailed'), undefined, {
                    duration: 4000,
                });
            },
        });
    }

    private _patchGroup(name: string, changes: { color?: string; icon?: FleetGroupIcon }): void {
        this.groups.update((list) => {
            if (!list.some((group) => group.name === name)) {
                return [...list, normalizeFleetGroup({ name, ...changes })];
            }

            return list.map((group) => (group.name === name ? { ...group, ...changes } : group));
        });
    }

    vehiclesIn(groupName: string): FleetAsset[] {
        return this._buckets().get(groupName) ?? [];
    }

    openGroup(name: string): void {
        this.selectedGroup.set(name);
        this._resetAddPanel();
    }

    closeGroup(): void {
        this.selectedGroup.set(null);
        this._resetAddPanel();
    }

    toggleAdding(): void {
        this.adding.update((open) => !open);

        if (!this.adding()) {
            this.vehicleQuery.set('');

            return;
        }

        const group = this.selectedGroup();

        this._membersAtOpen = group ? this.vehiclesIn(group).length : 0;
    }

    async promptCreateGroup(): Promise<void> {
        const created = await firstValueFrom(
            this._dialog
                .open(FleetGroupNameDialogComponent, {
                    width: '600px',
                    maxWidth: '96vw',
                    maxHeight: '94dvh',
                    autoFocus: true,
                    panelClass: 'fleet-group-dialog-panel',
                })
                .afterClosed()
        );

        if (!created?.name) return;

        const name = created.name;
        const exists = this.groupNames().some((group) => group.toLowerCase() === name.toLowerCase());

        if (exists) {
            this._snackBar.open(this._transloco.translate('smartFleet.groups.duplicate'), undefined, {
                duration: 3000,
            });

            return;
        }

        this._fleetService.createGroup(name, created.color, created.icon).subscribe({
            next: () =>
                this.groups.update((list) => [...list, { name, color: created.color, icon: created.icon }]),
            error: (err) => {
                console.error('[SmartFleet] create group error', err);
                this._snackBar.open(this._transloco.translate('smartFleet.groups.moveFailed'), undefined, {
                    duration: 4000,
                });
            },
        });
    }

    addVehicle(asset: FleetAsset): void {
        const group = this.selectedGroup();

        if (!group || !asset._id) return;

        this._move(asset, group);
    }

    kindOf(asset: FleetAsset): IdentifierKind {
        return identifierKind(asset);
    }

    ungroupedOf(kind: IdentifierKind): FleetAsset[] {
        return this.ungrouped().filter((asset) => identifierKind(asset) === kind);
    }

    addAllOfKind(kind: IdentifierKind): void {
        const group = this.selectedGroup();
        const vehicles = this.ungroupedOf(kind).filter((asset) => asset._id);

        if (!group || !vehicles.length) return;

        for (const asset of vehicles) this._setGroup(asset._id!, group);

        this._dismissAddPanelIfCaughtUp();

        forkJoin(
            vehicles.map((asset) =>
                this._fleetService.updateAsset(asset._id!, { group }).pipe(
                    catchError((err) => {
                        console.error('[SmartFleet] add vehicles by kind error', err);
                        this._setGroup(asset._id!, null);

                        return of(null);
                    })
                )
            )
        ).subscribe({
            next: (results) => {
                const savedIds = new Set(
                    vehicles.filter((_, index) => results[index] !== null).map((asset) => asset._id)
                );

                this._fleetService.assets.update((list) =>
                    list.map((entry) => (savedIds.has(entry._id) ? { ...entry, group } : entry))
                );

                if (savedIds.size !== vehicles.length) {
                    if (this.ungrouped().length) this.adding.set(true);

                    this._snackBar.open(this._transloco.translate('smartFleet.groups.moveFailed'), undefined, {
                        duration: 4000,
                    });
                }
            },
        });
    }

    removeVehicle(asset: FleetAsset): void {
        if (!asset._id) return;

        this._move(asset, null);
    }

    async promptRenameGroup(name: string): Promise<void> {
        const next = await firstValueFrom(
            this._dialog
                .open(FleetGroupRenameDialogComponent, {
                    width: '420px',
                    autoFocus: true,
                    data: { name },
                })
                .afterClosed()
        );

        if (!next || next === name) return;

        const exists = this.groupNames().some(
            (group) => group !== name && group.toLowerCase() === next.toLowerCase()
        );

        if (exists) {
            this._snackBar.open(this._transloco.translate('smartFleet.groups.duplicate'), undefined, {
                duration: 3000,
            });

            return;
        }

        this._fleetService.updateGroup(name, { newName: next }).subscribe({
            next: () => {
                this.groups.update((list) =>
                    list.map((group) => (group.name === name ? { ...group, name: next } : group))
                );
                this.assets.update((list) =>
                    list.map((asset) => (asset.group === name ? { ...asset, group: next } : asset))
                );
                this._fleetService.assets.update((list) =>
                    list.map((asset) => (asset.group === name ? { ...asset, group: next } : asset))
                );

                if (this.selectedGroup() === name) this.selectedGroup.set(next);
            },
            error: (err) => {
                console.error('[SmartFleet] rename group error', err);
                const key = err?.status === 409 ? 'smartFleet.groups.duplicate' : 'smartFleet.groups.moveFailed';

                this._snackBar.open(this._transloco.translate(key), undefined, { duration: 4000 });
            },
        });
    }

    async deleteGroup(name: string): Promise<void> {
        const confirmed = await firstValueFrom(
            this._confirm
                .open({
                    title: this._transloco.translate('smartFleet.groups.deleteTitle'),
                    message: this._transloco.translate('smartFleet.groups.deleteConfirmation', { name }),
                    actions: {
                        confirm: { label: this._transloco.translate('smartFleet.groups.delete') },
                        cancel: { label: this._transloco.translate('smartFleet.cancel') },
                    },
                })
                .afterClosed()
        );

        if (confirmed !== 'confirmed') return;

        this._fleetService.deleteGroup(name).subscribe({
            next: () => {
                this.groups.update((list) => list.filter((entry) => entry.name !== name));
                this.assets.update((list) =>
                    list.map((asset) => (asset.group === name ? { ...asset, group: null } : asset))
                );
                this._fleetService.assets.update((list) =>
                    list.map((asset) => (asset.group === name ? { ...asset, group: null } : asset))
                );

                if (this.selectedGroup() === name) this.selectedGroup.set(null);
            },
            error: (err) => {
                console.error('[SmartFleet] delete group error', err);
                this._snackBar.open(this._transloco.translate('smartFleet.groups.moveFailed'), undefined, {
                    duration: 4000,
                });
            },
        });
    }

    private _resetAddPanel(): void {
        this.adding.set(false);
        this.vehicleQuery.set('');
    }

    /** Drop the empty "nothing to add" note once the vehicle just added is already in the group. */
    private _dismissAddPanelIfCaughtUp(): void {
        if (!this.adding()) return;

        const group = this.selectedGroup();

        if (!group || this.ungrouped().length) return;

        if (this.vehiclesIn(group).length > this._membersAtOpen) this._resetAddPanel();
    }

    private _move(asset: FleetAsset, groupName: string | null): void {
        if (!asset._id || (asset.group || null) === groupName) return;

        const previous = asset.group ?? null;

        this._setGroup(asset._id, groupName);

        this._fleetService.updateAsset(asset._id, { group: groupName }).subscribe({
            next: () => {
                this._fleetService.assets.update((list) =>
                    list.map((entry) =>
                        entry._id === asset._id ? { ...entry, group: groupName } : entry
                    )
                );
            },
            error: (err) => {
                console.error('[SmartFleet] move vehicle error', err);
                this._setGroup(asset._id!, previous);

                if (this.ungrouped().some((entry) => entry._id === asset._id)) this.adding.set(true);

                this._snackBar.open(this._transloco.translate('smartFleet.groups.moveFailed'), undefined, {
                    duration: 4000,
                });
            },
        });
    }

    private _setGroup(assetId: string, groupName: string | null): void {
        this.assets.update((list) =>
            list.map((entry) => (entry._id === assetId ? { ...entry, group: groupName } : entry))
        );
        this._dismissAddPanelIfCaughtUp();
    }

    /** One-time copy of groups that only existed in this browser. */
    private _migrateStoredGroups(names: string[]): void {
        forkJoin(
            names.map((name) =>
                this._fleetService.createGroup(name).pipe(
                    catchError((err) => {
                        if (err?.status === 409) return of(null);

                        throw err;
                    })
                )
            )
        ).subscribe({
            next: () => this._writeStoredGroups([]),
            error: (err) => console.error('[SmartFleet] migrate groups error', err),
        });
    }

    private _readStoredGroups(): string[] {
        if (typeof localStorage === 'undefined') return [];

        try {
            const parsed = JSON.parse(localStorage.getItem(STORED_GROUPS_KEY) || '[]');

            return Array.isArray(parsed) ? parsed.filter((name) => typeof name === 'string' && name.trim()) : [];
        } catch {
            return [];
        }
    }

    private _writeStoredGroups(names: string[]): void {
        if (typeof localStorage === 'undefined') return;

        localStorage.setItem(STORED_GROUPS_KEY, JSON.stringify(names));
    }
}
