import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';

import { DocumentVerificationTypeListComponent } from './document-verification-type/document-verification-type-list.component';

/**
 * Step 2 — Documents (personal target) or Business verification (business target).
 *
 * Renders the step requirement toggle, attempt limit, screening + verification methods.
 * Document type configurations are edited via the embedded
 * {@link DocumentVerificationTypeListComponent}; the per-configuration
 * prompt template editor is wired but deep-links to OCR Studio for full CRUD
 * (see plan follow-up note).
 */
@Component({
    selector: 'setup-documents',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSlideToggleModule,
        TranslocoModule,
        DocumentVerificationTypeListComponent,
    ],
    templateUrl: './documents.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupDocumentsComponent {
    @Input() form!: FormGroup;
    @Input() formGroup!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;
    @Input() subForm = false;
    @Input() stepFormControlName: 'document' | 'legalRepresentative' | 'businessVerification' = 'document';

    readonly criminalRecordsEndpoints = [
        { value: 'world_api_interpol', label: 'Interpol' },
        { value: 'world_api_fbi', label: 'FBI' },
        { value: 'world_api_dea', label: 'DEA' },
        { value: 'world_api_europol', label: 'Europol' },
        { value: 'world_api_ofac', label: 'OFAC' },
        { value: 'world_api_onu', label: 'ONU' },
    ];

    readonly verificationMethods = [
        { value: 'SCAN_AGENT', label: 'smartEnrollProjects.setup.documents.method.scanAgent' },
        { value: 'SCAN_STUDIO', label: 'smartEnrollProjects.setup.documents.method.scanStudio' },
        { value: 'SCAN_PROMPT', label: 'smartEnrollProjects.setup.documents.method.scanPrompt' },
    ];

    get documentTypesFormArray(): FormArray | null {
        return (this.formGroup?.get('documentTypes') as FormArray) || null;
    }

    get stepFormGroup(): FormGroup | null {
        return (this.form?.get('projectFlow.steps') as FormGroup) || null;
    }

    get target(): 'business' | 'personal' {
        return this.stepFormControlName === 'legalRepresentative'
            ? 'personal'
            : ((this.form?.get('target')?.value as 'business' | 'personal') || 'personal');
    }

    get isNotRequired(): boolean {
        if (this.stepFormControlName === 'businessVerification') {
            return !this.stepFormGroup?.get('businessVerification')?.value;
        }
        if (this.stepFormControlName === 'legalRepresentative') {
            return this.stepFormGroup?.get('legalRepresentative')?.value === 'skip';
        }
        return this.stepFormGroup?.get('document')?.value === 'skip';
    }

    get isFormReady(): boolean {
        return !this.loading && !!this.form && !!this.formGroup && !!this.stepFormGroup;
    }

    get verificationMethodsValue(): string[] {
        return (this.formGroup?.get('verificationMethods')?.value as string[]) || [];
    }

    get criminalEndpointsValue(): string[] {
        return (this.formGroup?.get('criminalHistoryVerificationEndpoints')?.value as string[]) || [];
    }

    isVerificationMethodSelected(method: string): boolean {
        return this.verificationMethodsValue.includes(method);
    }

    toggleVerificationMethod(method: string): void {
        const ctrl = this.formGroup?.get('verificationMethods');
        if (!ctrl) return;
        const current = this.verificationMethodsValue;
        const next = current.includes(method)
            ? current.filter((m) => m !== method)
            : [...current, method];
        ctrl.setValue(next);
        ctrl.markAsDirty();
    }

    isEndpointSelected(endpoint: string): boolean {
        return this.criminalEndpointsValue.includes(endpoint);
    }

    toggleCriminalEndpoint(endpoint: string): void {
        const ctrl = this.formGroup?.get('criminalHistoryVerificationEndpoints');
        if (!ctrl) return;
        const current = this.criminalEndpointsValue;
        const next = current.includes(endpoint)
            ? current.filter((e) => e !== endpoint)
            : [...current, endpoint];
        ctrl.setValue(next);
        ctrl.markAsDirty();
    }
}
