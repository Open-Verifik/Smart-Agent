import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { featureGroup } from '../feature-group.util';
import { AppFeature, BatchConfiguration, BatchStep, SmartBatchService } from '../smart-batch.service';
import { ReportSection, SmartReportService, SmartReportTemplate } from '../smart-report.service';
import {
    countryNameForIso,
    defaultSystemKey,
    GuideBatchSettings,
    GuideEntity,
} from './visita-guide.catalog';

export interface GuidePipelineResult {
    configId: string;
    configuration: BatchConfiguration;
    template: SmartReportTemplate | null;
}

const featureId = (appFeature: string | AppFeature): string =>
    typeof appFeature === 'string' ? appFeature : appFeature._id;

const featureCode = (appFeature: string | AppFeature): string =>
    typeof appFeature === 'string' ? '' : appFeature.code ?? '';

const remapResultsPath = (path: string | undefined, seqMap: Map<number, number>): string | undefined => {
    if (!path) return path;
    return path.replace(/results\.(\d+)/g, (_match, raw) => {
        const next = seqMap.get(Number(raw));
        return `results.${next ?? raw}`;
    });
};

const remapSections = (sections: ReportSection[] | undefined, seqMap: Map<number, number>): ReportSection[] =>
    (sections ?? []).map((section, index) => ({
        ...section,
        id: `${section.id || 's'}-${index}`,
        order: index,
        dataPath: remapResultsPath(section.dataPath, seqMap),
    }));

@Injectable({ providedIn: 'root' })
export class VisitaGuidePipelineService {
    private _batch = inject(SmartBatchService);
    private _reports = inject(SmartReportService);

    async resolve(
        entities: GuideEntity[],
        iso: string,
        settings: GuideBatchSettings,
        selectedFeatures: AppFeature[] = [],
        existing?: { configId: string; template: SmartReportTemplate | null }
    ): Promise<GuidePipelineResult> {
        const unique = [...new Set(entities)];
        if (unique.length === 0) throw new Error('no entities');

        if (existing?.configId) {
            const populated = await firstValueFrom(this._batch.getConfiguration(existing.configId));
            const applied = await this._applySelection(
                {
                    configId: existing.configId,
                    configuration: populated.data,
                    template: existing.template,
                },
                selectedFeatures,
                unique
            );
            return this._withSettings(applied, settings);
        }

        // System presets only exist for Colombia. Other countries use the endpoints the user picked.
        if (iso.trim().toLowerCase() !== 'co') {
            return this._createFromSelection(unique, iso, settings, selectedFeatures);
        }

        if (unique.length === 1) {
            const cloned = await firstValueFrom(
                this._batch.cloneSystemPreset(defaultSystemKey(unique[0], iso))
            );
            const configId = cloned.data.batchConfiguration._id ?? cloned.data.batchConfiguration.id;
            if (!configId) throw new Error('missing config');
            const populated = await firstValueFrom(this._batch.getConfiguration(configId));
            return this._withSettings(
                await this._applySelection(
                    {
                        configId,
                        configuration: populated.data,
                        template: cloned.data.template,
                    },
                    selectedFeatures,
                    unique
                ),
                settings
            );
        }

        const clones = [];
        for (const entity of unique) {
            const cloned = await firstValueFrom(
                this._batch.cloneSystemPreset(defaultSystemKey(entity, iso))
            );
            const id = cloned.data.batchConfiguration._id ?? cloned.data.batchConfiguration.id;
            if (!id) throw new Error('missing config');
            const populated = await firstValueFrom(this._batch.getConfiguration(id));
            clones.push({ entity, configuration: populated.data, template: cloned.data.template });
        }

        const mixed = unique.includes('citizen') && unique.includes('company');
        const hasCitizen = unique.includes('citizen');
        const seen = new Set<string>();
        const steps: BatchStep[] = [];
        const mergedSections: ReportSection[] = [];

        for (const clone of clones) {
            const seqMap = new Map<number, number>();
            const ordered = [...(clone.configuration.steps ?? [])]
                .filter((step) => step.enabled !== false)
                .sort((a, b) => a.sequence - b.sequence);

            for (const step of ordered) {
                const id = featureId(step.appFeature);
                if (!id || seen.has(id)) continue;
                seen.add(id);
                const sequence = steps.length + 1;
                seqMap.set(step.sequence, sequence);
                const mapping = this._mappingFor(clone.entity, mixed, hasCitizen);
                steps.push({
                    appFeature: id,
                    sequence,
                    enabled: true,
                    parameterDefaults: {
                        ...(step.parameterDefaults ?? {}),
                        ...mapping.parameterDefaults,
                    },
                    inputFieldMapping: {
                        ...(step.inputFieldMapping ?? {}),
                        ...mapping.inputFieldMapping,
                    },
                    outputFieldsToKeep: step.outputFieldsToKeep ?? [],
                    maxRetries: step.maxRetries ?? 3,
                    retryDelayBaseSeconds: Math.max(1, step.retryDelayBaseSeconds ?? 4),
                    timeoutSeconds: Math.max(5, step.timeoutSeconds ?? 30),
                });
            }

            mergedSections.push(...remapSections(clone.template?.sections, seqMap));
        }

        const country = countryNameForIso(iso);
        const created = await firstValueFrom(
            this._batch.createConfiguration(this._configurationBody(settings, country, steps))
        );
        const configId = created.data._id ?? created.data.id;
        if (!configId) throw new Error('missing mixed config');
        const populated = await firstValueFrom(this._batch.getConfiguration(configId));

        let template: SmartReportTemplate | null = null;
        if (mergedSections.length) {
            const base = clones.find((item) => item.template)?.template;
            template = await firstValueFrom(
                this._reports.createTemplate({
                    name: settings.name.trim(),
                    type: 'client',
                    country,
                    batchConfiguration: configId,
                    sections: mergedSections.map((section, index) => ({ ...section, order: index })),
                    logo: base?.logo,
                    primaryColor: base?.primaryColor,
                    header: base?.header,
                    footer: base?.footer,
                    pageSize: base?.pageSize ?? 'A4',
                    orientation: base?.orientation ?? 'portrait',
                    pdfEngine: base?.pdfEngine ?? 'puppeteer',
                })
            );
            await firstValueFrom(
                this._batch.updateConfiguration(configId, { preferredReportTemplate: template._id })
            );
        }

        const mixedResult = {
            configId,
            configuration: populated.data,
            template,
        };
        return this._withSettings(
            await this._applySelection(mixedResult, selectedFeatures, unique),
            settings
        );
    }

    private async _createFromSelection(
        entities: GuideEntity[],
        iso: string,
        settings: GuideBatchSettings,
        selectedFeatures: AppFeature[]
    ): Promise<GuidePipelineResult> {
        if (!selectedFeatures.length) throw new Error('no endpoints');

        const mixed = entities.includes('citizen') && entities.includes('company');
        const hasCitizen = entities.includes('citizen');
        const steps: BatchStep[] = selectedFeatures.map((feature, index) => {
            const entity = this._entityForFeature(feature, entities);
            const mapping = this._mappingFor(entity, mixed, hasCitizen);
            return {
                appFeature: feature._id,
                sequence: index + 1,
                enabled: true,
                parameterDefaults: mapping.parameterDefaults,
                inputFieldMapping: mapping.inputFieldMapping,
                outputFieldsToKeep: [],
                maxRetries: 3,
                retryDelayBaseSeconds: 4,
                timeoutSeconds: 30,
            };
        });

        const country = countryNameForIso(iso);
        const created = await firstValueFrom(
            this._batch.createConfiguration(this._configurationBody(settings, country, steps))
        );
        const configId = created.data._id ?? created.data.id;
        if (!configId) throw new Error('missing config');
        const populated = await firstValueFrom(this._batch.getConfiguration(configId));

        return {
            configId,
            configuration: populated.data,
            template: null,
        };
    }

    private _settingsPayload(settings: GuideBatchSettings): Partial<BatchConfiguration> {
        return {
            name: settings.name.trim(),
            description: settings.description.trim(),
            inputFormat: settings.inputFormat,
            outputFormat: settings.outputFormat,
            mergeStrategy: settings.mergeStrategy,
            executor: settings.executor,
            notification: {
                webhookUrl: settings.webhookUrl.trim(),
                emailOnCompletion: settings.emailOnCompletion,
            },
            isActive: true,
        };
    }

    private _configurationBody(
        settings: GuideBatchSettings,
        country: string,
        steps: BatchStep[]
    ): BatchConfiguration {
        return {
            name: settings.name.trim(),
            description: settings.description.trim(),
            country,
            steps,
            inputFormat: settings.inputFormat,
            outputFormat: settings.outputFormat,
            mergeStrategy: settings.mergeStrategy,
            executor: settings.executor,
            notification: {
                webhookUrl: settings.webhookUrl.trim(),
                emailOnCompletion: settings.emailOnCompletion,
            },
            isActive: true,
        };
    }

    private async _withSettings(
        result: GuidePipelineResult,
        settings: GuideBatchSettings
    ): Promise<GuidePipelineResult> {
        await firstValueFrom(
            this._batch.updateConfiguration(result.configId, this._settingsPayload(settings))
        );
        const populated = await firstValueFrom(this._batch.getConfiguration(result.configId));
        return {
            configId: result.configId,
            configuration: populated.data,
            template: result.template,
        };
    }

    private async _applySelection(
        result: GuidePipelineResult,
        selectedFeatures: AppFeature[],
        entities: GuideEntity[]
    ): Promise<GuidePipelineResult> {
        if (!selectedFeatures.length) return result;

        const mixed = entities.includes('citizen') && entities.includes('company');
        const hasCitizen = entities.includes('citizen');
        const previousById = new Map<string, BatchStep>();
        for (const step of result.configuration.steps ?? []) {
            const id = featureId(step.appFeature);
            if (id) previousById.set(id, step);
        }

        const seqMap = new Map<number, number>();
        const steps: BatchStep[] = selectedFeatures.map((feature, index) => {
            const previous = previousById.get(feature._id);
            const sequence = index + 1;
            if (previous) seqMap.set(previous.sequence, sequence);
            const entity = this._entityForFeature(feature, entities);
            const mapping = this._mappingFor(entity, mixed, hasCitizen);
            return {
                appFeature: feature._id,
                sequence,
                enabled: true,
                parameterDefaults: {
                    ...(previous?.parameterDefaults ?? {}),
                    ...mapping.parameterDefaults,
                },
                inputFieldMapping: {
                    ...(previous?.inputFieldMapping ?? {}),
                    ...mapping.inputFieldMapping,
                },
                outputFieldsToKeep: previous?.outputFieldsToKeep ?? [],
                maxRetries: previous?.maxRetries ?? 3,
                retryDelayBaseSeconds: Math.max(1, previous?.retryDelayBaseSeconds ?? 4),
                timeoutSeconds: Math.max(5, previous?.timeoutSeconds ?? 30),
            };
        });

        await firstValueFrom(this._batch.updateConfiguration(result.configId, { steps }));
        const populated = await firstValueFrom(this._batch.getConfiguration(result.configId));
        const remapped = result.template
            ? { ...result.template, sections: remapSections(result.template.sections, seqMap) }
            : null;

        return {
            configId: result.configId,
            configuration: populated.data,
            template: remapped,
        };
    }

    private _entityForFeature(feature: AppFeature, entities: GuideEntity[]): GuideEntity {
        const group = featureGroup(feature);
        if (group === 'vehicle' || group === 'citizen' || group === 'company') {
            if (entities.includes(group)) return group;
        }
        return entities[0];
    }

    private _mappingFor(
        entity: GuideEntity,
        mixedCitizenCompany: boolean,
        hasCitizen: boolean
    ): { parameterDefaults: Record<string, string>; inputFieldMapping: Record<string, string> } {
        if (!mixedCitizenCompany) {
            return { parameterDefaults: {}, inputFieldMapping: {} };
        }

        if (entity === 'citizen') {
            return {
                parameterDefaults: {},
                inputFieldMapping: {
                    citizenDocumentNumber: 'documentNumber',
                    citizenDocumentType: 'documentType',
                },
            };
        }
        if (entity === 'company') {
            return {
                parameterDefaults: {},
                inputFieldMapping: {
                    companyDocumentNumber: 'documentNumber',
                    companyDocumentType: 'documentType',
                },
            };
        }

        const ownerFromCitizen = hasCitizen;
        return {
            parameterDefaults: {},
            inputFieldMapping: {
                plate: 'plate',
                ...(ownerFromCitizen
                    ? {
                          citizenDocumentNumber: 'documentNumber',
                          citizenDocumentType: 'documentType',
                      }
                    : {
                          companyDocumentNumber: 'documentNumber',
                          companyDocumentType: 'documentType',
                      }),
            },
        };
    }
}
