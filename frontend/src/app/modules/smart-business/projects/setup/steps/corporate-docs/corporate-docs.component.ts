import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import {
    buildCountryCheckSections,
    CountryCheckSection,
    CriminalCheckOption,
} from 'app/modules/smart-enroll/projects/setup/steps/documents/criminal-check-catalog.util';
import { CriminalCheckDetailDialogComponent } from 'app/modules/smart-enroll/projects/setup/steps/documents/criminal-check-detail-dialog/criminal-check-detail-dialog.component';
import { DocumentVerificationTypeListComponent } from 'app/modules/smart-enroll/projects/setup/steps/documents/document-verification-type/document-verification-type-list.component';
import { KYB_COUNTRY_CHECKS, KYB_INTERNATIONAL_CHECKS } from './kyb-check-catalog.util';

/**
 * Step 2 — Corporate documents & verification checks.
 *
 * Mirrors SmartEnroll's Documents step: accepted documents by country, collection
 * policy, then database screening with a country-driven SmartCheck catalog.
 * State lives in `projectFlow.business`; the host keeps the legacy
 * `corporateDocs.officialRegistryChecks` toggles in sync on save.
 */
@Component({
    selector: 'corporate-docs',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        TranslocoModule,
        DocumentVerificationTypeListComponent,
    ],
    templateUrl: './corporate-docs.component.html',
    styleUrl: '../_kyb-journey.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorporateDocsComponent implements OnInit, OnChanges {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);
    private _dialog = inject(MatDialog, { optional: true });
    private _subBound = false;

    readonly internationalChecks: CriminalCheckOption[] = KYB_INTERNATIONAL_CHECKS;

    ngOnInit(): void {
        this._bindChanges();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['form']) {
            this._subBound = false;
            this._bindChanges();
        }
    }

    private _bindChanges(): void {
        if (this._subBound || !this.form) return;
        this._subBound = true;
        this.form.valueChanges
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(() => this._cdr.markForCheck());
    }

    get businessGroup(): FormGroup {
        return this.form.get('projectFlow.business') as FormGroup;
    }

    get businessDocumentTypes(): FormArray {
        return this.form.get('projectFlow.business.documentTypes') as FormArray;
    }

    get countryCheckSections(): CountryCheckSection[] {
        const countries =
            this.businessDocumentTypes?.controls
                .map((c) => String(c.get('country')?.value || '').trim())
                .filter(Boolean) || [];

        return buildCountryCheckSections(countries, KYB_COUNTRY_CHECKS);
    }

    get configuredCountriesCount(): number {
        return this.businessDocumentTypes?.controls.filter((c) => !!c.get('country')?.value).length || 0;
    }

    get selectedDocumentsCount(): number {
        return (
            this.businessDocumentTypes?.controls.reduce((total, doc) => {
                const configs = doc.get('configurations') as FormArray | null;
                if (!configs) return total;
                return (
                    total +
                    configs.controls.reduce((sum, cfg) => {
                        const tpls = cfg.get('documentTemplates') as FormArray | null;
                        return sum + (tpls?.controls.filter((t) => !!t.get('promptTemplate')?.value).length || 0);
                    }, 0)
                );
            }, 0) || 0
        );
    }

    get attemptLimit(): number {
        return Number(this.businessGroup?.get('attemptLimit')?.value || 3);
    }

    get screeningEnabled(): boolean {
        return !!this.businessGroup?.get('screening')?.value;
    }

    get screeningChecksCount(): number {
        return ['informationVerification', 'criminalHistoryVerification'].filter(
            (key) => !!this.businessGroup?.get(key)?.value
        ).length;
    }

    get selectedEndpoints(): string[] {
        return (this.businessGroup?.get('criminalHistoryVerificationEndpoints')?.value as string[]) || [];
    }

    isEndpointSelected(endpoint: string): boolean {
        return this.selectedEndpoints.includes(endpoint);
    }

    toggleEndpoint(endpoint: string): void {
        const ctrl = this.businessGroup?.get('criminalHistoryVerificationEndpoints');
        if (!ctrl) return;
        const current = this.selectedEndpoints;
        ctrl.setValue(
            current.includes(endpoint) ? current.filter((c) => c !== endpoint) : [...current, endpoint]
        );
        ctrl.markAsDirty();
        this._cdr.markForCheck();
    }

    openCheckDetails(event: Event, check: CriminalCheckOption): void {
        event.preventDefault();
        event.stopPropagation();
        this._dialog?.open(CriminalCheckDetailDialogComponent, {
            data: {
                check,
                isSelected: this.isEndpointSelected(check.value),
                onToggle: () => this.toggleEndpoint(check.value),
            },
            width: '840px',
            maxWidth: '95vw',
            maxHeight: '92vh',
            panelClass: 'criminal-check-dialog-panel',
            autoFocus: false,
        });
    }
}
