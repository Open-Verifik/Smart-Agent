import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';

import { CountryService } from 'app/core/services/country.service';
import { SetupFormFactory } from '../../../setup-form.factory';

/**
 * Editable list of "document verification types" (one per country).
 *
 * Compact UI counterpart to verifik-client-panel
 * `SmartEnrollDocumentVerificationTypeComponent` (591 LOC). Country can be picked,
 * configurations toggled active per-category, and templates toggled required/optional.
 * Per-template prompt selection deep-links to OCR Studio for now (full prompt-template
 * dialog is a deferred follow-up — see plan).
 */
@Component({
    selector: 'document-verification-type-list',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        TranslocoModule,
    ],
    templateUrl: './document-verification-type-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentVerificationTypeListComponent {
    @Input() form!: FormGroup;
    @Input() documentTypes!: FormArray;
    @Input() target: 'business' | 'personal' = 'personal';

    private _factory = inject(SetupFormFactory);
    private _countries = inject(CountryService);

    countries = this._countries.worldCountries;

    get verificationErrors(): string[] {
        const errors = this.documentTypes?.errors;
        if (!errors) return [];
        return Object.keys(errors).filter((k) => errors[k] === true);
    }

    asGroup(control: unknown): FormGroup {
        return control as FormGroup;
    }

    asArray(control: unknown): FormArray {
        return control as FormArray;
    }

    addType(): void {
        this._factory.addDocumentTypesWithDefaults(this.documentTypes, this.target);
    }

    removeType(index: number): void {
        this.documentTypes.removeAt(index);
    }

    activeCategories(group: FormGroup): string[] {
        const arr = this.asArray(group.get('configurations'));
        return arr?.controls?.filter((c) => c.get('active')?.value).map((c) => c.get('documentCategory')?.value as string) ?? [];
    }
}
