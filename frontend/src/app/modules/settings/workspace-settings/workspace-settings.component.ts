import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SettingsService, Workspace } from '../settings.service';

@Component({
    selector: 'app-workspace-settings',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        TranslocoModule,
    ],
    templateUrl: './workspace-settings.component.html',
    styleUrl: './workspace-settings.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceSettingsComponent implements OnInit, OnDestroy {
    private _destroy$ = new Subject<void>();

    @Input() user: unknown;
    @Output() readonly userChange = new EventEmitter<unknown>();

    workspaceLoaded = false;
    workspace: Workspace = null;
    workspaceName = '';
    workspaceLogo: string | null = null;
    isSavingWorkspace = false;
    isDeletingWorkspace = false;

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
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    loadWorkspaceData(): void {
        if (this.workspaceLoaded) {
            return;
        }

        const raw = this.user as { _id?: string };
        if (!raw?._id) {
            this.workspaceLoaded = true;
            this._cdr.markForCheck();
            return;
        }

        this._settingsService
            .getWorkspace(raw._id)
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
