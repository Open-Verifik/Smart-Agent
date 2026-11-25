import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    ACTION_LABELS,
    normalizePermissions,
    STAFF_ACTIONS,
    STAFF_RESOURCES,
} from 'app/core/permissions/staff-permission.constants';
import {
    PermissionMap,
    ResourceDefinition,
    StaffAction,
    StaffTemporaryGrant,
} from 'app/core/permissions/staff-permission.types';

interface ResourceGroupSection {
    group: string;
    groupKey: string;
    resources: ResourceDefinition[];
}

@Component({
    selector: 'app-staff-permission-matrix',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatTooltipModule,
        TranslocoModule,
    ],
    templateUrl: './staff-permission-matrix.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaffPermissionMatrixComponent {
    private readonly _transloco = inject(TranslocoService);

    @Input() permissions: PermissionMap | null | undefined = {};
    @Input() readonly = false;
    /** Optional caller permission ceiling — disables toggling cells the actor lacks (owners pass null). */
    @Input() ceilingPermissions: PermissionMap | null = null;
    /** Optional active JIT temporary grants to highlight with an amber badge. */
    @Input() temporaryGrants: StaffTemporaryGrant[] = [];

    @Output() readonly permissionsChange = new EventEmitter<PermissionMap>();

    searchQuery = '';
    readonly actions = STAFF_ACTIONS;
    readonly actionMeta = ACTION_LABELS;
    readonly collapsedGroups = new Set<string>();

    get groupedSections(): ResourceGroupSection[] {
        const q = this.searchQuery.trim().toLowerCase();
        const groupsMap = new Map<string, ResourceGroupSection>();

        for (const res of STAFF_RESOURCES) {
            if (q) {
                const translatedLabel = (this._transloco.translate(res.labelKey) || res.label).toLowerCase();
                const translatedGroup = (this._transloco.translate(res.groupKey) || res.group).toLowerCase();
                if (
                    !translatedLabel.includes(q) &&
                    !translatedGroup.includes(q) &&
                    !res.key.toLowerCase().includes(q)
                ) {
                    continue;
                }
            }

            let section = groupsMap.get(res.group);
            if (!section) {
                section = { group: res.group, groupKey: res.groupKey, resources: [] };
                groupsMap.set(res.group, section);
            }
            section.resources.push(res);
        }

        return Array.from(groupsMap.values());
    }

    isApplicable(res: ResourceDefinition, action: StaffAction): boolean {
        return res.applicableActions.includes(action);
    }

    isOwnerOnlyCell(res: ResourceDefinition, action: StaffAction): boolean {
        return res.key === 'workspaceSettings' && action === 'delete';
    }

    isCellEnabled(res: ResourceDefinition, action: StaffAction): boolean {
        if (!this.isApplicable(res, action) || this.isOwnerOnlyCell(res, action)) {
            return false;
        }
        return Boolean(this.permissions?.[res.key]?.[action]);
    }

    isCellLockedByCeiling(res: ResourceDefinition, action: StaffAction): boolean {
        if (this.isOwnerOnlyCell(res, action)) return true;
        if (!this.ceilingPermissions) return false;
        return !this.ceilingPermissions?.[res.key]?.[action];
    }

    isCellDisabled(res: ResourceDefinition, action: StaffAction): boolean {
        if (this.readonly) return true;
        if (!this.isApplicable(res, action)) return true;
        return this.isCellLockedByCeiling(res, action);
    }

    getTempGrantForCell(resKey: string, action: StaffAction): StaffTemporaryGrant | null {
        const now = Date.now();
        for (const g of this.temporaryGrants || []) {
            if (!g || g.revokedAt || g.resource !== resKey) continue;
            if (!g.permanent && g.expiresAt && new Date(g.expiresAt).getTime() <= now) continue;
            if (g.actions?.includes(action)) return g;
        }
        return null;
    }

    formatExpiryShort(grant: StaffTemporaryGrant): string {
        if (grant.permanent || !grant.expiresAt) return 'JIT';
        const diffMs = new Date(grant.expiresAt).getTime() - Date.now();
        if (diffMs <= 0) return '0h';
        const hours = Math.ceil(diffMs / 3600000);
        if (hours < 48) return `${hours}h`;
        const days = Math.ceil(hours / 24);
        return `${days}d`;
    }

    toggleCell(res: ResourceDefinition, action: StaffAction, checked: boolean): void {
        if (this.isCellDisabled(res, action)) return;

        const next = normalizePermissions(this.permissions);
        next[res.key][action] = checked;

        // Selecting any mutating/execute action automatically ensures read is enabled when applicable
        if (checked && action !== 'read' && this.isApplicable(res, 'read')) {
            next[res.key]['read'] = true;
        }
        // Turning off read also clears mutating actions on the same row
        if (!checked && action === 'read') {
            for (const act of this.actions) {
                next[res.key][act] = false;
            }
        }

        this.permissionsChange.emit(next);
    }

    applyGroupPreset(section: ResourceGroupSection, preset: 'none' | 'read' | 'full'): void {
        if (this.readonly) return;

        const next = normalizePermissions(this.permissions);
        for (const res of section.resources) {
            for (const act of res.applicableActions) {
                if (this.isOwnerOnlyCell(res, act)) {
                    next[res.key][act] = false;
                    continue;
                }
                if (this.isCellLockedByCeiling(res, act)) continue;

                if (preset === 'none') {
                    next[res.key][act] = false;
                } else if (preset === 'read') {
                    next[res.key][act] = act === 'read';
                } else {
                    next[res.key][act] = true;
                }
            }
        }
        this.permissionsChange.emit(next);
    }

    toggleGroupCollapse(group: string): void {
        if (this.collapsedGroups.has(group)) {
            this.collapsedGroups.delete(group);
        } else {
            this.collapsedGroups.add(group);
        }
    }

    isGroupCollapsed(group: string): boolean {
        return this.collapsedGroups.has(group);
    }
}
