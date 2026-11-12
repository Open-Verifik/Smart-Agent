import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { DocumentVerificationTypeListComponent } from 'app/modules/smart-enroll/projects/setup/steps/documents/document-verification-type/document-verification-type-list.component';

@Component({
    selector: 'corporate-docs',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        TranslocoModule,
        DocumentVerificationTypeListComponent,
    ],
    templateUrl: './corporate-docs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorporateDocsComponent {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    get docsGroup(): FormGroup {
        return this.form.get('projectFlow.corporateDocs') as FormGroup;
    }

    get businessDocumentTypes(): FormArray {
        return this.form.get('projectFlow.business.documentTypes') as FormArray;
    }

    get officialRegistryChecksGroup(): FormGroup {
        return this.docsGroup.get('officialRegistryChecks') as FormGroup;
    }
}
