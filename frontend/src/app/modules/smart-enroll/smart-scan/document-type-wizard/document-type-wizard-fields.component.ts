import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import { DOCUMENT_TYPE_WIZARD } from './document-type-wizard.token';

@Component({
    selector: 'document-type-wizard-fields',
    standalone: true,
    imports: [
        NgTemplateOutlet,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        TranslocoModule,
    ],
    templateUrl: './document-type-wizard-fields.component.html',
    styleUrls: ['./document-type-wizard-fields.component.scss'],
})
export class DocumentTypeWizardFieldsComponent {
    readonly wizard = inject(DOCUMENT_TYPE_WIZARD);
    readonly copyKey = 'fieldsStep';
}
