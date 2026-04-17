import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';

import { SetupDocumentsComponent } from '../documents/documents.component';
import { SetupLivenessComponent } from '../liveness/liveness.component';
import { SetupSignUpFormComponent } from '../sign-up-form/sign-up-form.component';

/**
 * Step 3 (business target) — Legal representatives.
 * Mirrors verifik-client-panel `SmartEnrollRepresentativesComponent`: tabs that flip
 * between information / documents / liveness sub-forms.
 */
@Component({
    selector: 'setup-representatives',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        TranslocoModule,
        SetupDocumentsComponent,
        SetupLivenessComponent,
        SetupSignUpFormComponent,
    ],
    templateUrl: './representatives.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupRepresentativesComponent {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    pageIndex = 0;
    representativeCounts = Array.from({ length: 10 }, (_, i) => i + 1);

    get representativesFormGroup(): FormGroup | null {
        return (this.form?.get('projectFlow.representatives') as FormGroup) || null;
    }
    get documentsFormGroup(): FormGroup | null {
        return (this.representativesFormGroup?.get('documents') as FormGroup) || null;
    }
    get informationFormGroup(): FormGroup | null {
        return (this.representativesFormGroup?.get('information') as FormGroup) || null;
    }
    get livenessFormGroup(): FormGroup | null {
        return (this.representativesFormGroup?.get('liveness') as FormGroup) || null;
    }
    get stepFormGroup(): FormGroup | null {
        return (this.form?.get('projectFlow.steps') as FormGroup) || null;
    }
    get isFormReady(): boolean {
        return (
            !this.loading &&
            !!this.form &&
            !!this.representativesFormGroup &&
            !!this.livenessFormGroup &&
            !!this.documentsFormGroup &&
            !!this.informationFormGroup
        );
    }
    get isNotRequired(): boolean {
        return this.stepFormGroup?.get('legalRepresentative')?.value === 'skip';
    }
}
