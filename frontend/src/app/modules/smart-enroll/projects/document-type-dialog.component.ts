import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { finalize } from 'rxjs';
import {
    SmartEnrollProjectsService,
    type DocumentTypeOption,
} from './smart-enroll-projects.service';

export interface DocumentTypeDialogData {
    documentValidationId: string;
    country: string | null;
}

export interface DocumentTypeDialogResult {
    success: boolean;
    documentType?: string;
}

@Component({
    standalone: true,
    selector: 'document-type-dialog',
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './document-type-dialog.component.html',
    styleUrls: ['./resolve-status-dialog.component.scss'],
})
export class DocumentTypeDialogComponent implements OnInit {
    data = inject<DocumentTypeDialogData>(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<DocumentTypeDialogComponent>);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _transloco = inject(TranslocoService);

    types = signal<DocumentTypeOption[]>([]);
    filter = signal('');
    showAllCountries = signal(false);
    selected = signal<string | null>(null);
    loading = signal(true);
    detecting = signal(false);
    saving = signal(false);
    errorMessage = signal<string | null>(null);
    detectHint = signal<string | null>(null);

    ngOnInit(): void {
        this._projectsService.listDocumentTypes().subscribe({
            next: (types) => {
                this.types.set(types);
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
                this.errorMessage.set(
                    this._transloco.translate('smartEnrollProjects.recordDetail.documentTypeDialog.loadError')
                );
            },
        });
    }

    visibleTypes(): DocumentTypeOption[] {
        const query = this.filter().trim().toLowerCase();
        const country = this.data.country?.trim().toLowerCase() || '';
        const restrictCountry = !this.showAllCountries() && !!country;

        return this.types().filter((type) => {
            if (restrictCountry && !this._countriesOverlap(country, type.country)) return false;
            if (!query) return true;
            return `${type.name} ${type.code} ${type.country}`.toLowerCase().includes(query);
        });
    }

    optionLabel(type: DocumentTypeOption): string {
        return `${type.name} (${type.code})`;
    }

    select(code: string): void {
        if (this.saving() || this.detecting()) return;
        this.selected.set(code);
        this.errorMessage.set(null);
    }

    setFilter(value: string): void {
        this.filter.set(value);
    }

    toggleAllCountries(): void {
        this.showAllCountries.update((current) => !current);
    }

    detect(): void {
        if (this.detecting() || this.saving()) return;

        this.detecting.set(true);
        this.errorMessage.set(null);
        this.detectHint.set(null);

        this._projectsService
            .detectDocumentType(this.data.documentValidationId)
            .pipe(finalize(() => this.detecting.set(false)))
            .subscribe({
                next: (suggestion) => {
                    if (!suggestion?.code) {
                        this.detectHint.set(
                            this._transloco.translate('smartEnrollProjects.recordDetail.documentTypeDialog.detectNone')
                        );
                        this.showAllCountries.set(true);
                        return;
                    }

                    this.selected.set(suggestion.code);
                    if (!this.visibleTypes().some((type) => type.code === suggestion.code)) {
                        this.showAllCountries.set(true);
                    }
                    this.detectHint.set(
                        this._transloco.translate('smartEnrollProjects.recordDetail.documentTypeDialog.detectFound', {
                            name: suggestion.name || suggestion.code,
                            code: suggestion.code,
                        })
                    );
                },
                error: (error) => {
                    this.errorMessage.set(
                        error?.error?.message ??
                            this._transloco.translate('smartEnrollProjects.recordDetail.documentTypeDialog.detectError')
                    );
                },
            });
    }

    save(): void {
        const code = this.selected();
        if (!code || this.saving()) return;

        this.saving.set(true);
        this.errorMessage.set(null);

        this._projectsService
            .setDocumentType(this.data.documentValidationId, code)
            .pipe(finalize(() => this.saving.set(false)))
            .subscribe({
                next: () => this._dialogRef.close({ success: true, documentType: code } as DocumentTypeDialogResult),
                error: (error) => {
                    this.errorMessage.set(
                        error?.error?.message ??
                            this._transloco.translate('smartEnrollProjects.recordDetail.documentTypeDialog.saveError')
                    );
                },
            });
    }

    close(): void {
        if (this.saving()) return;
        this._dialogRef.close({ success: false } as DocumentTypeDialogResult);
    }

    private _countriesOverlap(scanCountry: string, catalogCountry: string): boolean {
        const left = scanCountry.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const right = catalogCountry.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

        return left.includes(right) || right.includes(left);
    }
}
