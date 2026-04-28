/** Dependency fields that must never appear in batch CSV / client UI (internal API use only). */
const CLIENT_HIDDEN_DEPENDENCY_FIELDS = new Set(['force']);

/** True if this dependency `field` should be shown in Smart Batch UIs and templates. */
export const isClientVisibleBatchDependencyField = (field: string): boolean => {
    if (!field) return false;
    return !CLIENT_HIDDEN_DEPENDENCY_FIELDS.has(field);
};

/** Remove internal-only keys from an uploaded row before persisting the batch. */
export const stripClientHiddenRowFields = (row: Record<string, unknown>): Record<string, unknown> => {
    const out = { ...row };
    for (const hidden of CLIENT_HIDDEN_DEPENDENCY_FIELDS) {
        for (const k of Object.keys(out)) {
            if (k.toLowerCase() === hidden) {
                delete out[k];
            }
        }
    }
    return out;
};
