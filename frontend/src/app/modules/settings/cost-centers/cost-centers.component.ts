import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { getVerifikDocsUrls } from 'app/core/docs/verifik-docs-urls';
import { countryName } from 'app/core/usage/country-geo';
import { CostCenter, UsageApiService } from 'app/core/usage/usage-api.service';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { getBusinessUserClientId } from '../utils/settings-business-user.util';
import { CostCenterDialogComponent, CostCenterDialogData, CostCenterDialogResult } from './cost-center-dialog.component';

/**
 * Settings → Cost centers. Requests are tagged with a center via the `x-cost-center` header,
 * or automatically when the account has exactly one active center for the endpoint's country.
 */
@Component({
    selector: 'app-cost-centers',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTooltipModule,
        TranslocoModule,
        SettingsBusinessAccountEmptyStateComponent,
    ],
    templateUrl: './cost-centers.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostCentersComponent implements OnChanges {
    @Input() user: unknown;
    @Output() userChange = new EventEmitter<unknown>();

    private readonly _api = inject(UsageApiService);
    private readonly _snack = inject(MatSnackBar);
    private readonly _transloco = inject(TranslocoService);
    private readonly _dialog = inject(MatDialog);

    readonly centers = signal<CostCenter[]>([]);
    readonly loading = signal(false);

    get userClientId(): string | undefined {
        return getBusinessUserClientId(this.user);
    }

    get docsUrl(): string {
        return getVerifikDocsUrls(this._transloco.getActiveLang() || 'en').costCenters;
    }

    get exampleCode(): string {
        return this.centers().find((center) => center.active)?.code || 'CO-OPS';
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['user'] && this.userClientId) this.load();
    }

    onBusinessAccountLinked(account: unknown): void {
        this.userChange.emit(account);
    }

    countryLabel(code: string): string {
        return countryName(code, this._transloco.getActiveLang() || 'en');
    }

    load(): void {
        this.loading.set(true);
        this._api.listCostCenters().subscribe({
            next: (centers) => {
                this.centers.set(centers);
                this.loading.set(false);
            },
            error: () => {
                this.centers.set([]);
                this.loading.set(false);
                this._toast('settings.costCenters.loadError');
            },
        });
    }

    /**
     * Open the create dialog.
     */
    openCreate = (): void => {
        this._openDialog();
    };

    /**
     * Open the same dialog with this center filled in.
     * @param {CostCenter} center
     */
    openEdit = (center: CostCenter): void => {
        this._openDialog(center);
    };

    /**
     * @param {CostCenter} [center]
     */
    private _openDialog(center?: CostCenter): void {
        this._dialog
            .open<CostCenterDialogComponent, CostCenterDialogData | null, CostCenterDialogResult>(CostCenterDialogComponent, {
                width: '880px',
                maxWidth: '94vw',
                maxHeight: '90vh',
                autoFocus: false,
                panelClass: 'cost-center-dialog-panel',
                data: center ? { id: center._id, name: center.name, code: center.code, country: center.country } : null,
            })
            .afterClosed()
            .subscribe((result) => {
                if (!result) return;

                this._toast(result === 'updated' ? 'settings.costCenters.updated' : 'settings.costCenters.created');
                this.load();
            });
    }

    toggleActive(center: CostCenter): void {
        const request$ = center.active ? this._api.deactivateCostCenter(center._id) : this._api.updateCostCenter(center._id, { active: true });

        request$.subscribe({
            next: () => {
                this._toast(center.active ? 'settings.costCenters.deactivated' : 'settings.costCenters.reactivated');
                this.load();
            },
            error: () => this._toast('settings.costCenters.saveError'),
        });
    }

    copyHeader(): void {
        void navigator.clipboard?.writeText(`x-cost-center: ${this.exampleCode}`);
        this._toast('settings.costCenters.copied');
    }

    private _toast(key: string): void {
        this._snack.open(this._transloco.translate(key), undefined, { duration: 3000 });
    }
}
