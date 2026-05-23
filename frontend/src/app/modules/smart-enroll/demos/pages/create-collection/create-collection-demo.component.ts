import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { BiometricsDemoApiService } from '../../services/biometrics-demo-api.service';
import type { ApiErrorResponse } from '../../services/biometrics-demo.types';
import {
    DemoPageShellComponent,
} from '../../shared/demo-page-shell.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import { DemoResultActionsComponent } from '../../shared/demo-result-actions.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/resources/the-collection-object`,
    `${DOCS_BASE}/resources/list-all-collections`,
    `${DOCS_BASE}/resources/retrieve-a-collection`,
    `${DOCS_BASE}/resources/update-a-collection`,
    `${DOCS_BASE}/resources/delete-a-collection`,
] as const;

const RELATED_DOC_BADGE_MUTED = [true, false, false, false, false] as const;

type Step = 'form' | 'processing' | 'result';

@Component({
    selector: 'app-create-collection-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        DemoPageShellComponent,
        DemoRelatedDocsSectionComponent,
        DemoResultActionsComponent,
    ],
    templateUrl: './create-collection-demo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'flex flex-auto min-w-0 w-full',
    },
})
export class CreateCollectionDemoComponent implements OnInit {
    private _api = inject(BiometricsDemoApiService);
    private _router = inject(Router);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    authChecked = false;
    step: Step = 'form';
    name = '';
    description = '';
    result: Record<string, unknown> | null = null;
    error: string | null = null;
    relatedDocs: DemoRelatedDocItem[] = [];

    readonly apiFetchExample = `await fetch("https://api.verifik.co/v2/face-recognition/collections", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: \`Bearer \${accessToken}\`,
  },
  body: JSON.stringify({
    name: "My collection",
    description: "Optional notes",
  }),
});`;

    readonly apiResponseExample = `// 200 OK — example shape
{
  "data": {
    "_id": "…",
    "code": "…",
    "name": "My collection",
    "description": "Optional notes",
    "client": "…",
    "createdAt": "…",
    "updatedAt": "…",
    "__v": 0
  }
}`;

    ngOnInit(): void {
        if (!this._api.ensureAuthenticated()) {
            this.authChecked = true;
            return;
        }
        this.authChecked = true;
        this.relatedDocs = this.buildRelatedDocs();
    }

    get showApiReference(): boolean {
        return this.step !== 'result';
    }

    handleSubmit(): void {
        if (!this.name.trim()) return;

        this.step = 'processing';
        this.error = null;
        this._cdr.markForCheck();

        this._api
            .createCollection({
                name: this.name,
                description: this.description || undefined,
            })
            .subscribe({
                next: (data) => {
                    this.result = data as Record<string, unknown>;
                    this.step = 'result';
                    this._cdr.markForCheck();
                },
                error: (err: ApiErrorResponse) => {
                    this.error = err.error ?? err.message ?? 'Request failed';
                    this.step = 'form';
                    this._cdr.markForCheck();
                },
            });
    }

    reset(): void {
        this.step = 'form';
        this.name = '';
        this.description = '';
        this.result = null;
        this.error = null;
    }

    backToDemos(): void {
        void this._router.navigate(['/smart-enroll/demos']);
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.createCollection.relatedDocs.${i}.title`),
            description: this._transloco.translate(
                `smartEnrollDemos.createCollection.relatedDocs.${i}.description`
            ),
            badge: this._transloco.translate(`smartEnrollDemos.createCollection.relatedDocs.${i}.badge`),
            badgeMuted: RELATED_DOC_BADGE_MUTED[i],
        }));
    }
}
