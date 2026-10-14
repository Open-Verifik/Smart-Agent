import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    inject,
    signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { getVerifikDocsUrls } from 'app/core/docs/verifik-docs-urls';
import { COUNTRY_CENTROIDS, countryName } from 'app/core/usage/country-geo';
import { CostCenter, UsageApiService } from 'app/core/usage/usage-api.service';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { getBusinessUserClientId } from '../utils/settings-business-user.util';

const CODE_PATTERN = /^[A-Za-z0-9_.-]+$/;

/**
 * Settings → Cost centers. Requests are tagged with a center via the `x-cost-center` header,
 * or automatically when the account has exactly one active center for the endpoint's country.
 */
@Component({
    selector: 'app-cost-centers',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
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
    private readonly _fb = inject(FormBuilder);

    readonly centers = signal<CostCenter[]>([]);
    readonly loading = signal(false);
    readonly saving = signal(false);
    readonly editingId = signal<string | null>(null);
    readonly formOpen = signal(false);
    readonly errorKey = signal<string | null>(null);

    readonly form = this._fb.nonNullable.group({
        name: ['', [Validators.required, Validators.maxLength(120)]],
        code: ['', [Validators.required, Validators.maxLength(60), Validators.pattern(CODE_PATTERN)]],
        country: ['', [Validators.required, Validators.pattern(/^[A-Z]{2}$/)]],
    });

    get userClientId(): string | undefined {
        return getBusinessUserClientId(this.user);
    }

    get countries(): { code: string; name: string }[] {
        const lang = this._transloco.getActiveLang() || 'en';

        return Object.keys(COUNTRY_CENTROIDS)
            .map((code) => ({ code, name: countryName(code, lang) }))
            .sort((a, b) => a.name.localeCompare(b.name));
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

    openCreate(): void {
        this.editingId.set(null);
        this.errorKey.set(null);
        this.form.reset({ name: '', code: '', country: '' });
        this.formOpen.set(true);
    }

    openEdit(center: CostCenter): void {
        this.editingId.set(center._id);
        this.errorKey.set(null);
        this.form.reset({ name: center.name, code: center.code, country: center.country });
        this.formOpen.set(true);
    }

    cancel(): void {
        this.formOpen.set(false);
        this.editingId.set(null);
    }

    save(): void {
        if (this.form.invalid || this.saving()) {
            this.form.markAllAsTouched();
            return;
        }

        const input = { ...this.form.getRawValue(), code: this.form.getRawValue().code.trim() };
        const id = this.editingId();
        const request$ = id ? this._api.updateCostCenter(id, input) : this._api.createCostCenter(input);

        this.saving.set(true);
        request$.subscribe({
            next: () => {
                this.saving.set(false);
                this.cancel();
                this._toast(id ? 'settings.costCenters.updated' : 'settings.costCenters.created');
                this.load();
            },
            error: (error: HttpErrorResponse) => {
                this.saving.set(false);
                this.errorKey.set(error?.error?.message === 'cost_center_code_taken' ? 'settings.costCenters.codeTaken' : 'settings.costCenters.saveError');
            },
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
