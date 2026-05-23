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
import { CollectionMultiSelectComponent } from '../../shared/collection-multi-select.component';
import { CreatePersonResultComponent } from '../../shared/create-person-result.component';
import { DemoPageShellComponent } from '../../shared/demo-page-shell.component';
import { DemoRelatedDocsSectionComponent } from '../../shared/demo-related-docs-section.component';
import type { DemoRelatedDocItem } from '../../shared/demo-related-docs-section.types';
import { PersonSingleSelectComponent } from '../../shared/person-single-select.component';

const DOCS_BASE = 'https://docs.verifik.co';

const RELATED_DOC_HREFS = [
    `${DOCS_BASE}/resources/retrieve-a-person`,
    `${DOCS_BASE}/resources/persons/update-a-person`,
    `${DOCS_BASE}/resources/create-a-person`,
    `${DOCS_BASE}/resources/persons/delete-a-person`,
] as const;

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

@Component({
    selector: 'app-update-person-demo',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        DemoPageShellComponent,
        DemoRelatedDocsSectionComponent,
        CollectionMultiSelectComponent,
        CreatePersonResultComponent,
        PersonSingleSelectComponent,
    ],
    templateUrl: './update-person-demo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatePersonDemoComponent implements OnInit {
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
    name = '';
    gender: 'M' | 'F' = 'M';
    dob = '';
    nationality = '';
    notes = '';
    selectedCollectionIds: string[] = [];
    collectionItems: FaceCollectionListItem[] = [];
    collectionsLoading = false;
    collectionsError: string | null = null;
    loadError: string | null = null;
    loadingPerson = false;
    submitError: string | null = null;
    result: Record<string, unknown> | null = null;
    noCollectionsLoadedSlot = '';

    relatedDocs: DemoRelatedDocItem[] = [];

    ngOnInit(): void {
        if (!this._api.ensureAuthenticated()) {
            this.authChecked = true;
            return;
        }
        this.authChecked = true;
        this.relatedDocs = this.buildRelatedDocs();
        this.noCollectionsLoadedSlot = this._transloco.translate(
            'smartEnrollDemos.updatePerson.noCollectionsLoaded'
        );
        this.loadCollections();
        this.loadPersons();
    }

    get showApiReference(): boolean {
        return this.step !== 'result';
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

    applyPersonToForm(person: Record<string, unknown>): void {
        this.name = typeof person['name'] === 'string' ? person['name'] : '';
        this.gender = person['gender'] === 'F' ? 'F' : 'M';
        const dobRaw = person['date_of_birth'];
        this.dob = typeof dobRaw === 'string' ? dobRaw.slice(0, 10) : '';
        this.nationality = typeof person['nationality'] === 'string' ? person['nationality'] : '';
        this.notes =
            person['notes'] !== undefined && person['notes'] !== null ? String(person['notes']) : '';
        const cols = Array.isArray(person['collections'])
            ? person['collections'].filter((c): c is string => typeof c === 'string')
            : [];
        this.selectedCollectionIds = cols;
    }

    loadPersonDetails(id: string): void {
        if (!id) return;

        this.loadingPerson = true;
        this.loadError = null;
        this._cdr.markForCheck();

        this._api.getPerson(id).subscribe({
            next: (data) => {
                this.loadingPerson = false;
                const person = readPersonPayload(data);
                if (!person) {
                    this.loadError = this._transloco.translate(
                        'smartEnrollDemos.updatePerson.unexpectedResponseShape'
                    );
                } else {
                    this.applyPersonToForm(person);
                }
                this._cdr.markForCheck();
            },
            error: (err: ApiErrorResponse) => {
                this.loadingPerson = false;
                this.loadError = err.error ?? err.message ?? 'Failed to load person';
                this._cdr.markForCheck();
            },
        });
    }

    handlePersonSelected(id: string): void {
        this.selectedPersonId = id;
        this.loadPersonDetails(id);
    }

    handleSubmit(): void {
        const id = this.selectedPersonId?.trim();
        if (!id) return;

        this.step = 'processing';
        this.submitError = null;
        this._cdr.markForCheck();

        this._api
            .updatePerson(id, {
                name: this.name,
                gender: this.gender,
                date_of_birth: this.dob,
                nationality: this.nationality || undefined,
                notes: this.notes || undefined,
                collections: this.selectedCollectionIds,
            })
            .subscribe({
                next: (data) => {
                    this.result = data as Record<string, unknown>;
                    this.step = 'result';
                    this._cdr.markForCheck();
                },
                error: (err: ApiErrorResponse) => {
                    this.submitError = err.error ?? err.message ?? 'Request failed';
                    this.step = 'form';
                    this._cdr.markForCheck();
                },
            });
    }

    reset(): void {
        this.step = 'form';
        this.selectedPersonId = null;
        this.name = '';
        this.gender = 'M';
        this.dob = '';
        this.nationality = '';
        this.notes = '';
        this.selectedCollectionIds = [];
        this.loadError = null;
        this.submitError = null;
        this.result = null;
    }

    backToDemos(): void {
        void this._router.navigate(['/smart-enroll/demos']);
    }

    private buildRelatedDocs(): DemoRelatedDocItem[] {
        return RELATED_DOC_HREFS.map((href, i) => ({
            href,
            title: this._transloco.translate(`smartEnrollDemos.updatePerson.relatedDocs.${i}.title`),
            description: this._transloco.translate(`smartEnrollDemos.updatePerson.relatedDocs.${i}.description`),
            badge: this._transloco.translate(`smartEnrollDemos.updatePerson.relatedDocs.${i}.badge`),
        }));
    }
}
