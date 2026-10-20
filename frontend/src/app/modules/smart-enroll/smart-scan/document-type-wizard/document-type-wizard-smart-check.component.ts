import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import { DOCUMENT_TYPE_WIZARD } from './document-type-wizard.token';

@Component({
    selector: 'document-type-wizard-smart-check',
    standalone: true,
    imports: [FormsModule, MatFormFieldModule, MatIconModule, MatProgressSpinnerModule, MatSelectModule, TranslocoModule],
    templateUrl: './document-type-wizard-smart-check.component.html',
    styleUrls: ['./document-type-wizard-smart-check.component.scss'],
})
export class DocumentTypeWizardSmartCheckComponent {
    readonly wizard = inject(DOCUMENT_TYPE_WIZARD);
    readonly copyKey = 'smartCheckStep';
    readonly notes = ['noteOptional', 'noteMap', 'noteSkip'];
}
