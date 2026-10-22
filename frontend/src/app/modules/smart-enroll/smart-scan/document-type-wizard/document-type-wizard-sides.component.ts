import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { DOCUMENT_TYPE_WIZARD } from './document-type-wizard.token';

@Component({
    selector: 'document-type-wizard-sides',
    standalone: true,
    imports: [MatIconModule, TranslocoModule],
    templateUrl: './document-type-wizard-sides.component.html',
    styleUrls: ['./document-type-wizard-sides.component.scss'],
})
export class DocumentTypeWizardSidesComponent {
    readonly wizard = inject(DOCUMENT_TYPE_WIZARD);
    readonly copyKey = 'sidesStep';
    readonly notes = ['noteFront', 'noteBack', 'noteImages'];
}
