import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppFeature, BatchConfiguration, BatchStep, SmartBatchService } from './smart-batch.service';
import { BatchConfigurationRef, SmartReportService, SmartReportTemplate } from './smart-report.service';

export const TEMPLATE_EXPORT_FORMAT = 'verifik.smart-batch-template';
export const TEMPLATE_EXPORT_VERSION = 1;

/** Imported files above this size are refused before parsing. */
export const TEMPLATE_IMPORT_MAX_BYTES = 25 * 1024 * 1024;

/** Feature ids differ between environments, so steps travel by feature code. */
export interface ExportedBatchStep {
    featureCode: string;
    sequence: number;
    enabled: boolean;
    parameterDefaults?: Record<string, unknown>;
    inputFieldMapping?: Record<string, string>;
    outputFieldsToKeep?: string[];
    maxRetries?: number;
    retryDelayBaseSeconds?: number;
    timeoutSeconds?: number;
}

export interface ExportedBatchConfiguration {
    name: string;
    description?: string;
    country: string;
    executor?: BatchConfiguration['executor'];
    inputFormat: BatchConfiguration['inputFormat'];
    outputFormat: BatchConfiguration['outputFormat'];
    mergeStrategy: BatchConfiguration['mergeStrategy'];
    steps: ExportedBatchStep[];
    /** The configuration used this template as its default report. */
    usesTemplateAsDefault?: boolean;
}

export interface SmartTemplateExportFile {
    format: typeof TEMPLATE_EXPORT_FORMAT;
    version: number;
    exportedAt: string;
    template: Partial<SmartReportTemplate>;
    configuration: ExportedBatchConfiguration | null;
}

export type TemplateImportErrorCode = 'invalidFile' | 'unsupportedVersion' | 'tooLarge' | 'missingFeatures' | 'createFailed';

export class TemplateImportError extends Error {
    constructor(
        readonly code: TemplateImportErrorCode,
        readonly detail: string[] = []
    ) {
        super(code);
    }
}

export interface TemplateImportResult {
    template: SmartReportTemplate;
    configurationId: string | null;
    /** The PDF password is never exported, so protection is switched off on import. */
    securityDisabled: boolean;
}

/** Fields that only make sense for the account or environment the template came from. */
const LOCAL_TEMPLATE_FIELDS = [
    '_id',
    'client',
    'batchConfiguration',
    'thumbnail',
    'createdAt',
    'updatedAt',
    '__v',
    'type',
    'systemKey',
    'nameKey',
    'descriptionKey',
    'presetSteps',
    'clonedFromSystemKey',
] as const;

@Injectable({ providedIn: 'root' })
export class SmartTemplateTransferService {
    private _reports = inject(SmartReportService);
    private _batches = inject(SmartBatchService);

    /** Template design plus the consultation steps it runs on, as a portable JSON file. */
    async buildExport(templateId: string): Promise<SmartTemplateExportFile> {
        const template = await firstValueFrom(this._reports.getTemplate(templateId));
        const configId = this._refId(template.batchConfiguration);
        let configuration: ExportedBatchConfiguration | null = null;

        if (configId) {
            const response = await firstValueFrom(this._batches.getConfiguration(configId));
            configuration = response?.data ? this._exportConfiguration(response.data, templateId) : null;
        }

        return {
            format: TEMPLATE_EXPORT_FORMAT,
            version: TEMPLATE_EXPORT_VERSION,
            exportedAt: new Date().toISOString(),
            template: this._exportTemplate(template),
            configuration,
        };
    }

    downloadExport(file: SmartTemplateExportFile): void {
        const blob = new Blob([JSON.stringify(file, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.href = url;
        link.download = `${this._fileSlug(file.template.name || 'plantilla')}.verifik-template.json`;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    async readImportFile(file: File): Promise<SmartTemplateExportFile> {
        if (file.size > TEMPLATE_IMPORT_MAX_BYTES) throw new TemplateImportError('tooLarge');

        let parsed: unknown;

        try {
            parsed = JSON.parse(await file.text());
        } catch {
            throw new TemplateImportError('invalidFile');
        }

        const data = parsed as Partial<SmartTemplateExportFile> | null;

        if (!data || data.format !== TEMPLATE_EXPORT_FORMAT || !data.template || typeof data.template !== 'object') {
            throw new TemplateImportError('invalidFile');
        }

        if (typeof data.version !== 'number' || data.version > TEMPLATE_EXPORT_VERSION) {
            throw new TemplateImportError('unsupportedVersion');
        }

        if (!Array.isArray(data.template.sections)) throw new TemplateImportError('invalidFile');

        return data as SmartTemplateExportFile;
    }

    /**
     * Creates the consultation first, then the template linked to it. Feature codes are
     * resolved before anything is written, so a file that cannot be imported leaves no
     * half-created records behind.
     */
    async importFile(
        file: SmartTemplateExportFile,
        existing: { templateNames: string[]; configurationNames: string[]; suffix: string }
    ): Promise<TemplateImportResult> {
        const steps = file.configuration ? await this._resolveSteps(file.configuration.steps) : null;
        let configurationId: string | null = null;

        if (file.configuration && steps) {
            const source = file.configuration;
            const payload: BatchConfiguration = {
                name: this._uniqueName(source.name, existing.configurationNames, existing.suffix, 150),
                description: source.description,
                country: source.country,
                inputFormat: source.inputFormat || 'csv',
                outputFormat: source.outputFormat || 'csv',
                mergeStrategy: source.mergeStrategy || 'sequential',
                steps,
                ...(source.executor ? { executor: source.executor } : {}),
            };

            try {
                const created = await firstValueFrom(this._batches.createConfiguration(payload));
                configurationId = this._refId(created?.data ?? null);
            } catch (error) {
                console.error('[TemplateImport] configuration create error', error);
                throw new TemplateImportError('createFailed');
            }
        }

        const design = JSON.parse(JSON.stringify(file.template)) as Partial<SmartReportTemplate>;
        const securityDisabled = Boolean(design.security?.enabled);

        for (const key of LOCAL_TEMPLATE_FIELDS) delete (design as Record<string, unknown>)[key];

        if (design.security) design.security = { enabled: false };

        let template: SmartReportTemplate;

        try {
            template = await firstValueFrom(
                this._reports.createTemplate({
                    ...design,
                    name: this._uniqueName(design.name || 'Plantilla', existing.templateNames, existing.suffix, 150),
                    sections: design.sections ?? [],
                    ...(configurationId ? { batchConfiguration: configurationId } : {}),
                })
            );
        } catch (error) {
            console.error('[TemplateImport] template create error', error);
            if (configurationId) {
                await firstValueFrom(this._batches.deleteConfiguration(configurationId)).catch(() => undefined);
            }
            throw new TemplateImportError('createFailed');
        }

        if (configurationId && template._id && file.configuration?.usesTemplateAsDefault) {
            await firstValueFrom(
                this._batches.updateConfiguration(configurationId, { preferredReportTemplate: template._id })
            ).catch((error) => console.error('[TemplateImport] default template link error', error));
        }

        return { template, configurationId, securityDisabled };
    }

    private _exportTemplate(template: SmartReportTemplate): Partial<SmartReportTemplate> {
        const design = JSON.parse(JSON.stringify(template)) as Partial<SmartReportTemplate>;

        for (const key of LOCAL_TEMPLATE_FIELDS) delete (design as Record<string, unknown>)[key];

        if (design.security) design.security = { enabled: design.security.enabled };

        return design;
    }

    private _exportConfiguration(config: BatchConfiguration, templateId: string): ExportedBatchConfiguration {
        const steps = [...(config.steps ?? [])]
            .sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0))
            .map((step) => this._exportStep(step))
            .filter((step): step is ExportedBatchStep => Boolean(step));

        return {
            name: config.name,
            description: config.description,
            country: config.country,
            executor: config.executor,
            inputFormat: config.inputFormat,
            outputFormat: config.outputFormat,
            mergeStrategy: config.mergeStrategy,
            steps,
            usesTemplateAsDefault: this._refId(config.preferredReportTemplate ?? null) === templateId,
        };
    }

    private _exportStep(step: BatchStep): ExportedBatchStep | null {
        const feature = typeof step.appFeature === 'object' ? (step.appFeature as AppFeature) : null;

        if (!feature?.code) return null;

        const mapping = step.inputFieldMapping instanceof Map ? Object.fromEntries(step.inputFieldMapping) : step.inputFieldMapping;

        return {
            featureCode: feature.code,
            sequence: step.sequence,
            enabled: step.enabled !== false,
            parameterDefaults: step.parameterDefaults ?? {},
            inputFieldMapping: mapping ?? {},
            outputFieldsToKeep: step.outputFieldsToKeep ?? [],
            maxRetries: step.maxRetries,
            retryDelayBaseSeconds: step.retryDelayBaseSeconds,
            timeoutSeconds: step.timeoutSeconds,
        };
    }

    private async _resolveSteps(steps: ExportedBatchStep[]): Promise<BatchStep[]> {
        const list = Array.isArray(steps) ? steps.filter((step) => step && typeof step.featureCode === 'string') : [];
        const codes = [...new Set(list.map((step) => step.featureCode))];
        const ids = new Map<string, string>();

        await Promise.all(
            codes.map(async (code) => {
                const feature = (await firstValueFrom(this._batches.getFeatureDetail(code))) as AppFeature | null;
                if (feature?._id) ids.set(code, feature._id);
            })
        );

        const missing = codes.filter((code) => !ids.has(code));

        if (missing.length) throw new TemplateImportError('missingFeatures', missing);

        return list.map((step, index) => ({
            appFeature: ids.get(step.featureCode)!,
            sequence: Number(step.sequence) > 0 ? Number(step.sequence) : index + 1,
            enabled: step.enabled !== false,
            parameterDefaults: step.parameterDefaults ?? {},
            inputFieldMapping: step.inputFieldMapping ?? {},
            outputFieldsToKeep: step.outputFieldsToKeep ?? [],
            ...(step.maxRetries != null ? { maxRetries: step.maxRetries } : {}),
            ...(step.retryDelayBaseSeconds != null ? { retryDelayBaseSeconds: step.retryDelayBaseSeconds } : {}),
            ...(step.timeoutSeconds != null ? { timeoutSeconds: step.timeoutSeconds } : {}),
        }));
    }

    private _uniqueName(name: string, taken: string[], suffix: string, maxLength: number): string {
        const base = (name || '').trim() || 'Plantilla';
        const used = new Set(taken.map((item) => item.trim().toLowerCase()));

        if (!used.has(base.toLowerCase())) return base.slice(0, maxLength);

        for (let attempt = 1; attempt < 100; attempt++) {
            const tail = attempt === 1 ? ` (${suffix})` : ` (${suffix} ${attempt})`;
            const candidate = `${base.slice(0, maxLength - tail.length)}${tail}`;
            if (!used.has(candidate.toLowerCase())) return candidate;
        }

        return base.slice(0, maxLength);
    }

    private _refId(ref: string | BatchConfigurationRef | { _id?: string; id?: string } | null | undefined): string | null {
        if (!ref) return null;
        if (typeof ref === 'string') return ref;
        const id = ref._id ?? ref.id;
        return typeof id === 'string' && id ? id : null;
    }

    private _fileSlug(name: string): string {
        return (
            name
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-zA-Z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
                .toLowerCase()
                .slice(0, 60) || 'plantilla'
        );
    }
}
