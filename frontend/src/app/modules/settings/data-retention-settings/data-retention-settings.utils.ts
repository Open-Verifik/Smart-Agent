/**
 * @deprecated Import from `app/core/data-retention/retention.util` and `retention.model`.
 * Re-exported so older specs keep a single implementation.
 */
export {
    CORE_TYPES,
    type RetentionMode,
    type RetentionPolicy as ClientDataRetentionConfig,
    type RetentionTypeRule as RetentionRuleConfig,
} from '../../../core/data-retention/retention.model';
export {
    computeAllSameMode,
    computeIsCustomized,
    defaultRetentionPolicy,
    syncGlobalToGranular,
} from '../../../core/data-retention/retention.util';

import { defaultRetentionPolicy } from '../../../core/data-retention/retention.util';

/** Account default used by older imports. */
export const DEFAULT_CONFIG = defaultRetentionPolicy();
