import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SettingsService, Workspace } from '../settings.service';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { getBusinessUserClientId, getVerifikAccount } from '../utils/settings-business-user.util';

type SupportTimezoneOption = {
    id: string;
    offset: string;
    minutes: number;
    search: string;
};

/**
 * Current UTC offset for an IANA zone, such as UTC-5 or UTC+5:30.
 * @param {string} zone
 * @returns {{ offset: string, minutes: number }}
 */
const _zoneOffset = (zone: string): { offset: string; minutes: number } => {
    let raw = 'GMT';

    try {
        const parts = new Intl.DateTimeFormat('en-US', { timeZone: zone, timeZoneName: 'shortOffset' }).formatToParts(new Date());

        raw = parts.find((part) => part.type === 'timeZoneName')?.value || 'GMT';
    } catch {
        raw = 'GMT';
    }

    const match = /(?:GMT|UTC)([+-])(\d{1,2})(?::(\d{2}))?/.exec(raw);

    if (!match) return { offset: 'UTC+0', minutes: 0 };

    const sign = match[1] === '-' ? -1 : 1;
    const hours = Number(match[2]);
    const mins = Number(match[3] || 0);
    const clock = match[3] ? `${hours}:${match[3]}` : String(hours);

    return { offset: `UTC${match[1]}${clock}`, minutes: sign * (hours * 60 + mins) };
};

/**
 * IANA zones for the account support clock, labeled with the current offset and sorted west to east.
 * @returns {SupportTimezoneOption[]}
 */
const _supportTimezoneOptions = (): SupportTimezoneOption[] => {
    const zones = typeof Intl.supportedValuesOf === 'function' ? Intl.supportedValuesOf('timeZone') : [];
    const ids = zones.includes('UTC') ? zones : ['UTC', ...zones];

    return ids
        .map((id) => {
            const { offset, minutes } = _zoneOffset(id);
            const readable = id.replaceAll('_', ' ');

            return { id, offset, minutes, search: `${offset} ${id} ${readable}`.toLowerCase() };
        })
        .sort((left, right) => left.minutes - right.minutes || left.id.localeCompare(right.id));
};

@Component({
    selector: 'app-workspace-settings',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        TranslocoModule,
        SettingsBusinessAccountEmptyStateComponent,
    ],
    templateUrl: './workspace-settings.component.html',
    styleUrl: './workspace-settings.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceSettingsComponent implements OnInit, OnChanges, OnDestroy {
    private _destroy$ = new Subject<void>();

    @Input() user: unknown;
    @Output() readonly userChange = new EventEmitter<unknown>();

    workspaceLoaded = false;
    workspace: Workspace = null;
    workspaceName = '';
    workspaceLogo: string | null = null;
    isSavingWorkspace = false;
    isDeletingWorkspace = false;
    supportTimezone = 'UTC';
    timezoneInputText = 'UTC+0 · UTC';
    savingTimezone = false;
    readonly timezones = _supportTimezoneOptions();
    filteredTimezones = this.timezones;

    /** True when delete-workspace danger zone should be shown (owner; not staff-role user). */
    get showDangerZone(): boolean {
        const u = this.user as { role?: unknown; staff?: unknown };

        return !!(this.workspace && !u?.role && !u?.staff);
    }

    @ViewChild('deleteWorkspaceDialog') deleteWorkspaceDialog!: TemplateRef<unknown>;

    constructor(
        private _cdr: ChangeDetectorRef,
        private _snackBar: MatSnackBar,
        private _translocoService: TranslocoService,
        private _settingsService: SettingsService,
        private _dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.loadWorkspaceData();
        this._loadSupportTimezone();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes['user']) return;

        const prevId = getBusinessUserClientId(changes['user'].previousValue);
        const nextId = getBusinessUserClientId(changes['user'].currentValue);

        if (prevId === nextId && this.workspaceLoaded) return;

        this.workspaceLoaded = false;
        this.loadWorkspaceData();
        this._loadSupportTimezone();
    }

    get userClientId(): string | undefined {
        return getBusinessUserClientId(this.user);
    }

    onBusinessAccountLinked(account: unknown): void {
        this.userChange.emit(account);
        this.workspaceLoaded = false;
        this.loadWorkspaceData();
        this._loadSupportTimezone();
    }

    saveSupportTimezone(): void {
        const clientId = this.userClientId;

        if (!clientId || this.savingTimezone) return;

        this.savingTimezone = true;
        this._settingsService
            .updateProfile(clientId, { supportTimezone: this.supportTimezone })
            .pipe(
                takeUntil(this._destroy$),
                finalize(() => {
                    this.savingTimezone = false;
                    this._cdr.markForCheck();
                })
            )
            .subscribe({
                next: () => {
                    this._snackBar.open(this._translocoService.translate('settings.general.support_timezone_saved'), undefined, { duration: 2500 });
                },
                error: () => {
                    this._snackBar.open(this._translocoService.translate('settings.general.support_timezone_error'), undefined, { duration: 3000 });
                },
            });
    }

    private _loadSupportTimezone(): void {
        const account = getVerifikAccount() as { supportTimezone?: string } | null;
        const browserZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';

        this.supportTimezone = account?.supportTimezone || browserZone;

        if (!this.timezones.some((zone) => zone.id === this.supportTimezone)) this.supportTimezone = 'UTC';

        this.timezoneInputText = this.timezoneLabel(this.supportTimezone);
        this.filteredTimezones = this.timezones;
    }

    /**
     * Label shown in the field: the offset first, then the zone name.
     * @param {string} value
     * @returns {string}
     */
    timezoneLabel = (value: string): string => {
        const zone = this.timezones.find((item) => item.id === value);

        return zone ? `${zone.offset} · ${zone.id}` : value;
    };

    /**
     * Narrow the list as the account types a city or an offset such as -5.
     * @param {string} value
     */
    onTimezoneInput = (value: string): void => {
        this.timezoneInputText = value;
        const query = value.trim().toLowerCase().replaceAll('_', ' ');

        this.filteredTimezones = query ? this.timezones.filter((zone) => zone.search.includes(query)) : this.timezones;
        this._cdr.markForCheck();
    };

    /**
     * Keep the IANA id for save, and show the offset label in the field.
     * @param {MatAutocompleteSelectedEvent} event
     */
    selectTimezone = (event: MatAutocompleteSelectedEvent): void => {
        const id = String(event.option.value || '');

        if (!this.timezones.some((zone) => zone.id === id)) return;

        this.supportTimezone = id;
        this.timezoneInputText = this.timezoneLabel(id);
        this.filteredTimezones = this.timezones;
        this._cdr.markForCheck();
    };

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    loadWorkspaceData(): void {
        if (this.workspaceLoaded) {
            return;
        }

        const clientId = this.userClientId;
        if (!clientId) {
            this.workspaceLoaded = true;
            this._cdr.markForCheck();
            return;
        }

        this._settingsService
            .getWorkspace(clientId)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (response) => {
                    if (response?.data) {
                        this.workspace = response.data;
                        this.workspaceName = response.data.name || '';
                        this.workspaceLogo = response.data.avatar || null;
                    }
                    this.workspaceLoaded = true;
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.workspace = null;
                    this.workspaceLoaded = true;
                    this._cdr.markForCheck();
                },
            });
    }

    onWorkspaceLogoDropped(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            this._processWorkspaceLogo(files[0]);
        }
    }

    onWorkspaceLogoBrowse(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this._processWorkspaceLogo(input.files[0]);
        }
    }

    private _processWorkspaceLogo(file: File): void {
        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        if (!allowedTypes.includes(file.type)) {
            const message = this._translocoService.translate(
                'settings.profile.invalid_file_type'
            );
            this._snackBar.open(message, null, { duration: 3000 });
            return;
        }

        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            const message = this._translocoService.translate('settings.profile.file_too_large');
            this._snackBar.open(message, null, { duration: 3000 });
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            this.workspaceLogo = reader.result as string;
            this._cdr.markForCheck();
        };
    }

    onDragOver(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
    }

    removeWorkspaceLogo(): void {
        this.workspaceLogo = null;
        this._cdr.markForCheck();
    }

    saveWorkspace(): void {
        if (this.isSavingWorkspace || !this.workspaceName?.trim()) return;

        const u = this.user as { _id: string };

        if (!u?._id) return;

        this.isSavingWorkspace = true;
        this._cdr.markForCheck();

        const payload = {
            name: this.workspaceName.trim(),
            avatar: this.workspaceLogo,
            client: u._id,
        };

        const saveOperation = this.workspace
            ? this._settingsService.updateWorkspace(this.workspace._id, payload)
            : this._settingsService.createWorkspace(payload);

        saveOperation
            .pipe(
                finalize(() => {
                    this.isSavingWorkspace = false;
                    this._cdr.markForCheck();
                }),
                takeUntil(this._destroy$)
            )
            .subscribe({
                next: (response) => {
                    if (response?.data) {
                        this.workspace = response.data;

                        const merged = {
                            ...(this.user as object),
                            workSpace: response.data,
                        } as Record<string, unknown>;
                        this.user = merged;
                        this.userChange.emit(merged);

                        const message = this._translocoService.translate(
                            'settings.general.save_success'
                        );
                        this._snackBar.open(message, null, { duration: 3000 });
                    }
                },
                error: () => {
                    const message = this._translocoService.translate(
                        'settings.general.save_error'
                    );
                    this._snackBar.open(message, null, { duration: 3000 });
                },
            });
    }

    openDeleteWorkspaceDialog(): void {
        if (!this.workspace) return;

        this._dialog.open(this.deleteWorkspaceDialog, {
            width: '500px',
            maxWidth: '90vw',
        });
    }

    confirmDeleteWorkspace(): void {
        if (this.isDeletingWorkspace || !this.workspace || !this.user) return;

        this.isDeletingWorkspace = true;
        this._cdr.markForCheck();

        this._settingsService
            .deleteWorkspace(this.workspace._id)
            .pipe(
                finalize(() => {
                    this.isDeletingWorkspace = false;
                    this._cdr.markForCheck();
                }),
                takeUntil(this._destroy$)
            )
            .subscribe({
                next: () => {
                    this._dialog.closeAll();
                    this.workspace = null;
                    this.workspaceName = '';
                    this.workspaceLogo = null;

                    const merged = {
                        ...(this.user as Record<string, unknown>),
                    };
                    delete merged['workSpace'];
                    this.user = merged;
                    this.userChange.emit(merged);

                    const message = this._translocoService.translate(
                        'settings.general.delete_success'
                    );
                    this._snackBar.open(message, null, { duration: 3000 });
                },
                error: () => {
                    const message = this._translocoService.translate(
                        'settings.general.delete_error'
                    );
                    this._snackBar.open(message, null, { duration: 3000 });
                },
            });
    }
}
