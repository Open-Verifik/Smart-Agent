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
import type { ApiErrorResponse, FaceCollectionListItem, PersonListItem } from '../../services/biometrics-demo.types';
import {
    mapPersonDocsToListItems,
    normalizePersonsListPayload,
} from '../../services/biometrics-demo.util';
import { CollectionSingleSelectComponent } from '../../shared/collection-single-select.component';
import { CreatePersonResultComponent } from '../../shared/create-person-result.component';
import { DemoConfirmModalComponent } from '../../shared/demo-confirm-modal.component';
import { DemoResultActionsComponent } from '../../shared/demo-result-actions.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';
import { PersonSingleSelectComponent } from '../../shared/person-single-select.component';

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/resources/the-person-object`,
    `${DOCS_BASE}/resources/list-all-persons`,
    `${DOCS_BASE}/resources/retrieve-a-person`,
    `${DOCS_BASE}/resources/persons/delete-a-person`,
    `${DOCS_BASE}/resources/create-a-person`,
    `${DOCS_BASE}/resources/create-a-person-with-liveness`,
    `${DOCS_BASE}/resources/persons/update-a-person`,
    `${DOCS_BASE}/resources/persons`,
] as const;

const RELATED_DOC_BADGE_MUTED = [true, false, false, false, false, false, false, true] as const;

type DeleteMode = 'full' | 'collection';
type Step = 'form' | 'processing' | 'result';

const readPersonPayload = (body: unknown): Record<string, unknown> | null => {
    if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
    const envelope = body as Record<string, unknown>;
    const inner = envelope['data'];
    if (inner && typeof inner === 'object' && !Array.isArray(inner)) {
        return inner as Record<string, unknown>;
    }
    return null;
};

const isPlainObject = (v: unknown): v is Record<string, unknown> =>
    v !== null && typeof v === 'object' && !Array.isArray(v);

const redactThumbnailsForDebug = (value: unknown): unknown => {
    if (value === null || typeof value !== 'object') return value;
    if (Array.isArray(value)) return value.map(redactThumbnailsForDebug);
    const o = value as Record<string, unknown>;
    const next: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(o)) {
        if (k === 'thumbnail' && typeof v === 'string' && v.length > 64) {
            next[k] = `[base64 image, ${v.length} characters]`;
        } else {
            next[k] = redactThumbnailsForDebug(v);
        }
    }
    return next;
};

@Component({
    selector: 'app-delete-person-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        DemoPageShellComponent,
        DemoRelatedDocsSectionComponent,
        DemoConfirmModalComponent,
        DemoResultActionsComponent,
        CollectionSingleSelectComponent,
        CreatePersonResultComponent,
        PersonSingleSelectComponent,
    ],
    templateUrl: './delete-person-demo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeletePersonDemoComponent implements OnInit {
    private _api = inject(BiometricsDemoApiService);
    private _router = inject(Router);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    authChecked = false;
    step: Step = 'form';
    selectedPersonId: string | null = null;
    personsLoading = false;
    personsError: string | null = null;
    personRows: PersonListItem[] = [];
    mode: DeleteMode = 'full';
    selectedCollectionCode: string | null = null;
    collectionItems: FaceCollectionListItem[] = [];
    collectionsLoading = false;
    collectionsError: string | null = null;
    error: string | null = null;
    result: Record<string, unknown> | null = null;
    loadingPersonDetail = false;
    loadPersonDetailError: string | null = null;
    personMemberCodes: string[] = [];
    confirmOpen = false;
    relatedDocs: DemoRelatedDocItem[] = [];

    ngOnInit(): void {
        if (!this._api.ensureAuthenticated()) {
            this.authChecked = true;
            return;
        }
        this.authChecked = true;
        this.relatedDocs = this.buildRelatedDocs();
        this.loadCollections();
        this.loadPersons();
    }

    get showApiReference(): boolean {
        return this.step !== 'result';
    }

    get collectionsForPicker(): FaceCollectionListItem[] {
        if (!this.personMemberCodes.length) return [];
        const memberSet = new Set(this.personMemberCodes);
        return this.collectionItems.filter((c) => memberSet.has(c.code) || memberSet.has(c._id));
    }

    get resultData(): unknown {
        return this.result && 'data' in this.result ? this.result['data'] : undefined;
    }

    get hasPersonPayload(): boolean {
        return isPlainObject(this.resultData);
    }

    get confirmTitle(): string {
        return this.mode === 'full'
            ? this._transloco.translate('smartEnrollDemos.deletePerson.confirmTitleFull')
            : this._transloco.translate('smartEnrollDemos.deletePerson.confirmTitleCollection');
    }

    get confirmDescription(): string {
        return this.mode === 'full'
            ? this._transloco.translate('smartEnrollDemos.deletePerson.confirmDescFull')
            : this._transloco.translate('smartEnrollDemos.deletePerson.confirmDescCollection');
    }

    get confirmLabel(): string {
        return this.mode === 'full'
            ? this._transloco.translate('smartEnrollDemos.deletePerson.confirmSubmitFull')
            : this._transloco.translate('smartEnrollDemos.deletePerson.confirmSubmitCollection');
    }

    get redactedResultJson(): string {
        return this.result ? JSON.stringify(redactThumbnailsForDebug(this.result), null, 2) : '';
    }

    loadCollections(): void {
        this.collectionsLoading = true;
        this.collectionsError = null;
        this._cdr.markForCheck();

        this._api.listCollections().subscribe({
            next: (items) => {
                this.collectionItems = items;
                this.collectionsLoading = false;
                this._cdr.markForCheck();
            },
            error: (err: ApiErrorResponse) => {
                this.collectionsError = err.error ?? err.message ?? 'Failed to load collections';
                this.collectionItems = [];
                this.collectionsLoading = false;
                this._cdr.markForCheck();
            },
        });
    }

    loadPersons(): void {
        this.personsLoading = true;
        this.personsError = null;
        this._cdr.markForCheck();

        this._api.getPersons({ page: 1, limit: 200 }).subscribe({
            next: (data) => {
                const body = data as { data?: unknown } | undefined;
                const raw = normalizePersonsListPayload(body?.data);
                this.personRows = mapPersonDocsToListItems(raw);
                this.personsLoading = false;
                this._cdr.markForCheck();
            },
            error: (err: ApiErrorResponse) => {
                this.personsError = err.error ?? err.message ?? 'Failed to load people';
                this.personRows = [];
                this.personsLoading = false;
                this._cdr.markForCheck();
            },
        });
    }

    onPersonSelected(id: string): void {
        this.selectedPersonId = id;
        this.selectedCollectionCode = null;
        if (!id?.trim()) {
            this.personMemberCodes = [];
            this.loadPersonDetailError = null;
            this.loadingPersonDetail = false;
            this._cdr.markForCheck();
            return;
        }
        this.loadPersonDetail(id.trim());
    }

    loadPersonDetail(id: string): void {
        this.loadingPersonDetail = true;
        this.loadPersonDetailError = null;
        this._cdr.markForCheck();

        this._api.getPerson(id).subscribe({
            next: (data) => {
                this.loadingPersonDetail = false;
                const person = readPersonPayload(data);
                const cols =
                    person && Array.isArray(person['collections'])
                        ? person['collections'].filter((c): c is string => typeof c === 'string')
                        : [];
                this.personMemberCodes = cols;
                this._cdr.markForCheck();
            },
            error: (err: ApiErrorResponse) => {
                this.loadingPersonDetail = false;
                this.loadPersonDetailError = err.error ?? err.message ?? 'Failed to load person';
                this.personMemberCodes = [];
                this._cdr.markForCheck();
            },
        });
    }

    handleModeChange(next: DeleteMode): void {
        this.mode = next;
        if (next === 'full') this.selectedCollectionCode = null;
    }

    handleSubmit(): void {
        const id = this.selectedPersonId?.trim();
        if (!id) return;

        if (this.mode === 'collection' && !this.selectedCollectionCode?.trim()) {
            this.error = this._transloco.translate('smartEnrollDemos.deletePerson.errSelectCollection');
            this._cdr.markForCheck();
            return;
        }

        this.error = null;
        this.confirmOpen = true;
        this._cdr.markForCheck();
    }

    performDelete(): void {
        this.confirmOpen = false;
        const id = this.selectedPersonId?.trim();
        if (!id) return;

        this.step = 'processing';
        this.error = null;
        this._cdr.markForCheck();

        const collection =
            this.mode === 'collection' && this.selectedCollectionCode
                ? this.selectedCollectionCode.trim()
                : undefined;

        this._api.deletePerson(id, collection).subscribe({
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

    cancelConfirm(): void {
        this.confirmOpen = false;
    }

    reset(): void {
        this.step = 'form';
        this.selectedPersonId = null;
        this.mode = 'full';
        this.selectedCollectionCode = null;
        this.personMemberCodes = [];
        this.loadPersonDetailError = null;
        this.confirmOpen = false;
        this.error = null;
        this.result = null;
    }

    backToDemos(): void {
        void this._router.navigate(['/smart-enroll/demos']);
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.deletePerson.relatedDocs.${i}.title`),
            description: this._transloco.translate(`smartEnrollDemos.deletePerson.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`smartEnrollDemos.deletePerson.relatedDocs.${i}.badge`),
            badgeMuted: RELATED_DOC_BADGE_MUTED[i],
        }));
    }
}
