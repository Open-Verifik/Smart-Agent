import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { formatCatalogPrice } from 'app/modules/postman/postman-docs-params.util';
import type { AppFeatureOption } from '../smart-scan.types';
import { endpointDocsUrl, postmanUrlForFeature } from './endpoint-docs-url';
import { DOCUMENT_TYPE_WIZARD } from './document-type-wizard.token';

@Component({
    selector: 'document-type-wizard-smart-check',
    standalone: true,
    imports: [
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        TranslocoModule,
    ],
    templateUrl: './document-type-wizard-smart-check.component.html',
    styleUrls: ['./document-type-wizard-smart-check.component.scss'],
})
export class DocumentTypeWizardSmartCheckComponent {
    private readonly _transloco = inject(TranslocoService);

    readonly wizard = inject(DOCUMENT_TYPE_WIZARD);
    readonly copyKey = 'smartCheckStep';
    readonly notes = ['noteOptional', 'noteMap', 'noteSkip'];
    browsingEndpoints = false;

    get showAllEndpoints(): boolean {
        return !this.wizard.selectedFeature || this.browsingEndpoints;
    }

    pickFeature(featureId: string): void {
        this.wizard.onFeatureChange(featureId);
        this.browsingEndpoints = false;
    }

    openEndpointList(event: Event): void {
        event.stopPropagation();
        this.browsingEndpoints = true;
    }

    clearEndpoint(event: Event): void {
        event.stopPropagation();
        this.wizard.onFeatureChange('');
        this.browsingEndpoints = false;
    }

    featureCost(feature: AppFeatureOption): string {
        return formatCatalogPrice(feature.price);
    }

    postmanUrl(feature: AppFeatureOption): string {
        return postmanUrlForFeature(feature.code);
    }

    /**
     * Docs page for this endpoint, or null when the catalog has no matching page.
     */
    docsUrl(feature: AppFeatureOption): string | null {
        return endpointDocsUrl(feature.url, this._transloco.getActiveLang());
    }

    /**
     * What the scan will pass for one dependency in the right-hand call preview.
     */
    dependencySource(field: string): { kind: 'literal' | 'field' | 'missing'; value: string } {
        const chosen = this.wizard.fieldMap[field] || '';
        if (chosen.startsWith('literal:')) {
            return { kind: 'literal', value: chosen.slice('literal:'.length) };
        }
        if (chosen) {
            return { kind: 'field', value: chosen };
        }
        return { kind: 'missing', value: '' };
    }
}
