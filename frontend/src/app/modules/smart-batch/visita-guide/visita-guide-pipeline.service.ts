import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppFeature, BatchConfiguration, BatchStep, SmartBatchService } from '../smart-batch.service';
import { ReportSection, SmartReportService, SmartReportTemplate } from '../smart-report.service';
import { defaultSystemKey, GuideEntity, GUIDE_COUNTRIES } from './visita-guide.catalog';

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

    async resolve(entities: GuideEntity[], iso: string, name: string): Promise<GuidePipelineResult> {
        const unique = [...new Set(entities)];
        if (unique.length === 0) throw new Error('no entities');

        if (unique.length === 1) {
            const cloned = await firstValueFrom(
                this._batch.cloneSystemPreset(defaultSystemKey(unique[0], iso))
            );
            const configId = cloned.data.batchConfiguration._id ?? cloned.data.batchConfiguration.id;
            if (!configId) throw new Error('missing config');
            const populated = await firstValueFrom(this._batch.getConfiguration(configId));
            return {
                configId,
                configuration: populated.data,
                template: cloned.data.template,
            };
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
        const hasCompany = unique.includes('company');
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
                const mapping = this._mappingFor(clone.entity, mixed, hasCitizen, hasCompany);
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

        const country = GUIDE_COUNTRIES.find((item) => item.iso === iso)?.name ?? 'Colombia';
        const created = await firstValueFrom(
            this._batch.createConfiguration({
                name,
                description: unique.join('+'),
                country,
                steps,
                inputFormat: 'csv',
                outputFormat: 'xlsx',
                mergeStrategy: 'sequential',
                executor: clones[0]?.configuration.executor ?? 'queue',
                isActive: true,
            })
        );
        const configId = created.data._id ?? created.data.id;
        if (!configId) throw new Error('missing mixed config');
        const populated = await firstValueFrom(this._batch.getConfiguration(configId));

        let template: SmartReportTemplate | null = null;
        if (mergedSections.length) {
            const base = clones.find((item) => item.template)?.template;
            template = await firstValueFrom(
                this._reports.createTemplate({
                    name,
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

        return { configId, configuration: populated.data, template };
    }

    private _mappingFor(
        entity: GuideEntity,
        mixedCitizenCompany: boolean,
        hasCitizen: boolean,
        hasCompany: boolean
    ): { parameterDefaults: Record<string, string>; inputFieldMapping: Record<string, string> } {
        if (!mixedCitizenCompany) {
            return { parameterDefaults: {}, inputFieldMapping: {} };
        }

        if (entity === 'citizen') {
            return {
                parameterDefaults: { documentType: 'CC' },
                inputFieldMapping: {
                    citizenDocumentNumber: 'documentNumber',
                    citizenDocumentType: 'documentType',
                },
            };
        }
        if (entity === 'company') {
            return {
                parameterDefaults: { documentType: 'NIT' },
                inputFieldMapping: {
                    companyDocumentNumber: 'documentNumber',
                    companyDocumentType: 'documentType',
                },
            };
        }

        const ownerFromCitizen = hasCitizen;
        return {
            parameterDefaults: { documentType: ownerFromCitizen ? 'CC' : hasCompany ? 'NIT' : 'CC' },
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
