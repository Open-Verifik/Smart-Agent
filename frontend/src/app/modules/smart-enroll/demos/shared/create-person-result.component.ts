import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import {
    formatDate,
    formatDob,
    isPlainObject,
    parseThumbnails,
    redactThumbnailsForDebug,
} from './demo-result.utils';
import { DemoRasterImageComponent } from './demo-raster-image.component';
import { DemoResultActionsComponent } from './demo-result-actions.component';
import { DemoCreditsUsageComponent } from './demo-credits-usage.component';

const HANDLED = new Set([
    'name', 'thumbnails', 'collections', '_id', 'id', 'gender', 'date_of_birth', 'nationality', 'notes',
    'documentValidations', 'emails', 'phones', 'isDemoPerson', 'environment', 'client',
    'createdAt', 'updatedAt', 'create_date', 'modified_date', '__v',
]);

@Component({
    selector: 'app-create-person-result',
    standalone: true,
    imports: [CommonModule, TranslocoModule, DemoRasterImageComponent, DemoResultActionsComponent, DemoCreditsUsageComponent],
    templateUrl: './create-person-result.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePersonResultComponent {
    @Input() result: Record<string, unknown> | null = null;
    @Input() mode: 'create' | 'update' | 'delete' = 'create';
    @Output() enrollAnother = new EventEmitter<void>();
    @Output() backToDemos = new EventEmitter<void>();

    formatDate = formatDate;
    formatDob = formatDob;
    redactThumbnailsForDebug = redactThumbnailsForDebug;

    get parsed() {
        if (!this.result) return null;
        const data = isPlainObject(this.result['data']) ? (this.result['data'] as Record<string, unknown>) : null;
        if (!data) return { data: null, extra: {} as Record<string, unknown> };

        const extra: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(data)) {
            if (!HANDLED.has(k)) extra[k] = v;
        }

        return {
            data,
            personId: typeof data['_id'] === 'string' ? data['_id'] : typeof data['id'] === 'string' ? data['id'] : '',
            name: typeof data['name'] === 'string' ? data['name'] : '',
            gender: typeof data['gender'] === 'string' ? data['gender'] : '',
            dateOfBirth: typeof data['date_of_birth'] === 'string' ? data['date_of_birth'] : '',
            nationality: typeof data['nationality'] === 'string' ? data['nationality'] : '',
            notes: data['notes'],
            collections: Array.isArray(data['collections'])
                ? data['collections'].filter((c): c is string => typeof c === 'string')
                : [],
            thumbnails: parseThumbnails(Array.isArray(data['thumbnails']) ? data['thumbnails'] : []),
            createdAt: typeof data['createdAt'] === 'string' ? data['createdAt'] : '',
            updatedAt: typeof data['updatedAt'] === 'string' ? data['updatedAt'] : '',
            extra,
        };
    }

    get headerIcon(): string {
        if (this.mode === 'delete') return 'delete';
        if (this.mode === 'update') return 'edit';
        return 'person_add';
    }

    formatGender(g: string): string {
        if (g === 'M') return 'Male';
        if (g === 'F') return 'Female';
        return g;
    }
}
