import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { featureGroup } from '../feature-group.util';
import {
    AppFeature,
    BatchConfiguration,
    BatchStep,
    SmartBatchExecutor,
    SmartBatchService,
} from '../smart-batch.service';
import { ReportSection, SmartReportService, SmartReportTemplate } from '../smart-report.service';
import { chainStepFeedTemplates } from '../endpoint-chain.util';
import { chainStepFeedTemplatesFromGraph, endpointNodes, FlowGraph } from '../endpoint-flow-graph.util';
import { defaultSystemKey, GuideEntity, GUIDE_COUNTRIES } from './visita-guide.catalog';

export const serializeVisitaFlow = (graph: FlowGraph): FlowGraph => ({
    nodes: graph.nodes.map((node) => ({
        id: node.id,
        kind: node.kind,
        x: node.x,
        y: node.y,
        ...(node.feature?._id
            ? {
                  feature: {
                      _id: node.feature._id,
                      code: node.feature.code,
                      name: node.feature.name,
                  } as AppFeature,
              }
            : {}),
    })),
    edges: graph.edges.map((edge) => ({ ...edge })),
    fixed: graph.fixed ?? {},
    ports: graph.ports ?? {},
});

export const featureIdsFromConfiguration = (config: BatchConfiguration | null | undefined): string[] =>
    [...(config?.steps ?? [])]
        .filter((step) => step.enabled !== false)
        .sort((a, b) => a.sequence - b.sequence)
        .map((step) => featureId(step.appFeature))
        .filter(Boolean);

export const featuresFromConfiguration = (config: BatchConfiguration | null | undefined): AppFeature[] =>
    [...(config?.steps ?? [])]
        .filter((step) => step.enabled !== false)
        .sort((a, b) => a.sequence - b.sequence)
        .map((step) => (typeof step.appFeature === 'object' ? step.appFeature : null))
        .filter((feature): feature is AppFeature => Boolean(feature?._id));

export interface GuidePipelineResult {
    configId: string;
    configuration: BatchConfiguration;
    template: SmartReportTemplate | null;
}

const featureId = (appFeature: string | AppFeature): string =>
    typeof appFeature === 'string' ? appFeature : appFeature._id;

/** Mongoose Map keys cannot contain `.` or `$`; chain templates belong in parameterDefaults. */
const sanitizeInputFieldMapping = (mapping: unknown): Record<string, string> => {
    const raw =
        mapping instanceof Map
            ? Object.fromEntries(mapping.entries())
            : mapping && typeof mapping === 'object'
              ? (mapping as Record<string, unknown>)
              : {};
    const out: Record<string, string> = {};
    for (const [key, value] of Object.entries(raw)) {
        if (typeof value !== 'string' || !key) continue;
        if (key.includes('.') || key.includes('$') || key.includes('{{')) continue;
        out[key] = value;
    }
    return out;
};

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
        name: string,
        selectedFeatures: AppFeature[] = [],
        executor: SmartBatchExecutor = 'queue',
        graph?: FlowGraph,
        existingConfigId?: string | null
    ): Promise<GuidePipelineResult> {
        const unique = [...new Set(entities)];
        if (unique.length === 0) throw new Error('no entities');

        if (existingConfigId) {
            try {
                const populated = await firstValueFrom(this._batch.getConfiguration(existingConfigId));
                return this._applySelection(
                    {
                        configId: existingConfigId,
                        configuration: { ...populated.data, executor },
                        template: null,
                    },
                    selectedFeatures,
                    unique,
                    graph,
                    executor
                );
            } catch {
                /* create a new configuration below */
            }
        }

        if (unique.length === 1) {
            const cloned = await firstValueFrom(
                this._batch.cloneSystemPreset(defaultSystemKey(unique[0], iso))
            );
            const configId = cloned.data.batchConfiguration._id ?? cloned.data.batchConfiguration.id;
            if (!configId) throw new Error('missing config');
            await firstValueFrom(this._batch.updateConfiguration(configId, { executor }));
            const populated = await firstValueFrom(this._batch.getConfiguration(configId));
            return this._applySelection(
                {
                    configId,
                    configuration: { ...populated.data, executor },
                    template: cloned.data.template,
                },
                selectedFeatures,
                unique,
                graph,
                executor
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
                        ...sanitizeInputFieldMapping(step.inputFieldMapping),
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
                executor,
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
                    identityColor: base?.identityColor,
                    header: base?.header,
                    footer: base?.footer,
                    legend: base?.legend,
                    legendPosition: base?.legendPosition,
                    termsAndConditions: base?.termsAndConditions,
                    termsPosition: base?.termsPosition,
                    showPageNumbers: base?.showPageNumbers,
                    pageNumberPosition: base?.pageNumberPosition,
                    pageSize: base?.pageSize ?? 'A4',
                    orientation: base?.orientation ?? 'portrait',
                    pdfEngine: base?.pdfEngine ?? 'puppeteer',
                    watermark: base?.watermark,
                    security: base?.security,
                    signature: base?.signature,
                    logoSettings: base?.logoSettings,
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
        return this._applySelection(mixedResult, selectedFeatures, unique, graph, executor);
    }

    private async _applySelection(
        result: GuidePipelineResult,
        selectedFeatures: AppFeature[],
        entities: GuideEntity[],
        graph?: FlowGraph,
        executor: SmartBatchExecutor = 'queue'
    ): Promise<GuidePipelineResult> {
        if (!selectedFeatures.length) {
            const configuration = await this._updateConfiguration(result.configId, {
                executor,
                ...(graph && endpointNodes(graph).length ? { visitaFlow: serializeVisitaFlow(graph) } : {}),
            });
            return {
                ...result,
                configuration: { ...configuration, executor },
            };
        }

        const mixed = entities.includes('citizen') && entities.includes('company');
        const hasCitizen = entities.includes('citizen');
        const hasCompany = entities.includes('company');
        const previousById = new Map<string, BatchStep>();
        for (const step of result.configuration.steps ?? []) {
            const id = featureId(step.appFeature);
            if (id) previousById.set(id, step);
        }

        const seqMap = new Map<number, number>();
        const feedTemplates =
            graph && endpointNodes(graph).length
                ? chainStepFeedTemplatesFromGraph(graph, selectedFeatures)
                : chainStepFeedTemplates(selectedFeatures);
        const steps: BatchStep[] = selectedFeatures.map((feature, index) => {
            const previous = previousById.get(feature._id);
            const sequence = index + 1;
            if (previous) seqMap.set(previous.sequence, sequence);
            const entity = this._entityForFeature(feature, entities);
            const mapping = this._mappingFor(entity, mixed, hasCitizen, hasCompany);
            const chained = feedTemplates[index] ?? {};
            return {
                appFeature: feature._id,
                sequence,
                enabled: true,
                parameterDefaults: {
                    ...(previous?.parameterDefaults ?? {}),
                    ...mapping.parameterDefaults,
                    ...chained,
                },
                inputFieldMapping: {
                    ...sanitizeInputFieldMapping(previous?.inputFieldMapping),
                    ...mapping.inputFieldMapping,
                },
                outputFieldsToKeep: previous?.outputFieldsToKeep ?? [],
                maxRetries: previous?.maxRetries ?? 3,
                retryDelayBaseSeconds: Math.max(1, previous?.retryDelayBaseSeconds ?? 4),
                timeoutSeconds: Math.max(5, previous?.timeoutSeconds ?? 30),
            };
        });

        const saved = await this._updateConfiguration(result.configId, {
            steps,
            executor,
            ...(graph && endpointNodes(graph).length ? { visitaFlow: serializeVisitaFlow(graph) } : {}),
        });
        const populated = await firstValueFrom(this._batch.getConfiguration(result.configId)).catch(
            () => ({ data: saved })
        );
        const remapped = result.template
            ? { ...result.template, sections: remapSections(result.template.sections, seqMap) }
            : null;

        return {
            configId: result.configId,
            configuration: populated.data,
            template: remapped,
        };
    }

    private async _updateConfiguration(
        id: string,
        patch: Partial<BatchConfiguration>
    ): Promise<BatchConfiguration> {
        try {
            return (await firstValueFrom(this._batch.updateConfiguration(id, patch))).data;
        } catch (error) {
            if (patch.visitaFlow === undefined) throw error;
            const { visitaFlow: _ignored, ...rest } = patch;
            return (await firstValueFrom(this._batch.updateConfiguration(id, rest))).data;
        }
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
