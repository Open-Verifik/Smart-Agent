import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import { DOCUMENT_TYPE_WIZARD } from './document-type-wizard.token';

@Component({
    selector: 'document-type-wizard-details',
    standalone: true,
    imports: [FormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, TranslocoModule],
    templateUrl: './document-type-wizard-details.component.html',
    styleUrls: ['./document-type-wizard-details.component.scss'],
})
export class DocumentTypeWizardDetailsComponent {
    readonly wizard = inject(DOCUMENT_TYPE_WIZARD);
    readonly copyKey = 'details';
    readonly notes = ['noteCountry', 'noteCode', 'noteCategory'];
}
