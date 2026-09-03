/**
 * How an endpoint health status should be read on the status board.
 *
 * The board used to paint anything that was not `ok` red. That was accurate while
 * the backend only ever reported `ok` or `failed`, but it now reports a taxonomy
 * that separates "the endpoint is down" from "the endpoint served, there was just
 * no record" and from "we failed to measure it". Keeping the old rule would turn
 * a 404 lookup miss, a stale probe fixture and an out-of-credits monitoring client
 * into outages — the exact false readings this rebuild set out to remove.
 *
 * Mirrors `EndpointHealth/config/health-outcomes.js` in the backend.
 */

export type StatusLane = 'up' | 'degraded' | 'down' | 'unmeasured' | 'awaiting';

/** The endpoint was not serving. Only these count against uptime. */
export const DOWN_STATUSES = ['failed', 'timedOut'];

/** Serving normally. `noData` is a lookup that found no record, which is not an outage. */
export const UP_STATUSES = ['ok', 'noData'];

/** Serving, but slower than its budget or missing optional data. Still counts as up. */
export const DEGRADED_STATUSES = ['degraded'];

/**
 * We could not measure: bad probe fixture, no credits, rejected token, rate limit.
 * Never an outage, and excluded from the uptime denominator entirely rather than
 * scored as either up or down.
 */
export const UNMEASURED_STATUSES = ['configError', 'billingBlocked', 'authError', 'inconclusive'];

/** Local placeholder for an interval that was never reported at all. */
export const AWAITING = 'awaiting';

/** Same slot count as Admin details (`HISTORY_POINTS`). */
export const HISTORY_POINTS = 50;

/**
 * @param status Raw status from an APIStatusRecord
 */
export const laneOf = (status: string): StatusLane => {
    if (!status || status === AWAITING) return 'awaiting';

    if (UP_STATUSES.includes(status)) return 'up';

    if (DEGRADED_STATUSES.includes(status)) return 'degraded';

    if (DOWN_STATUSES.includes(status)) return 'down';

    if (UNMEASURED_STATUSES.includes(status)) return 'unmeasured';

    /**
     * An unrecognised status is treated as unmeasured rather than as an outage. A
     * status the backend adds later must not silently read as downtime here.
     */
    return 'unmeasured';
};

/** Whether a point can be scored as either up or down. */
export const isMeasured = (status: string): boolean => {
    const lane = laneOf(status);

    return lane === 'up' || lane === 'degraded' || lane === 'down';
};

/**
 * Uptime over a series of readings, or null when nothing was measurable.
 *
 * Null rather than 100: an endpoint nobody has measured is unknown, and reporting
 * it as perfect is how the board came to disagree with reality in the first place.
 *
 * @param points Readings, each carrying a `status`
 */
export const uptimePercentage = (points: Array<{ status?: string }>): number | null => {
    const measured = (points || []).filter((point) => isMeasured(point?.status));

    if (measured.length === 0) return null;

    const downCount = measured.filter((point) => laneOf(point.status) === 'down').length;

    return ((measured.length - downCount) * 100) / measured.length;
};

/**
 * How many readings the uptime figure is based on, so a percentage drawn from one
 * request is not mistaken for a settled measurement.
 *
 * @param points Readings, each carrying a `status`
 */
export const measuredCount = (points: Array<{ status?: string }>): number =>
    (points || []).filter((point) => isMeasured(point?.status)).length;

/**
 * Card lane follows Admin's latest record (probe tick or otherwise), not the
 * newest 360-minute traffic bar. A working probe must not render as an outage
 * just because the open bucket is still failed.
 *
 * @param latestTick Newest APIStatusRecord of any kind, same as summary
 * @param fallbackStatus Status from the newest history bar
 */
export const cardStatus = (
    latestTick: { status?: string } | null | undefined,
    fallbackStatus?: string
): string => latestTick?.status || fallbackStatus || AWAITING;

/**
 * Admin details and Smart-Agent cards share these ticks: no `bucketMinutes`.
 *
 * @param records Newest-first APIStatusRecords
 * @param limit Bar count
 */
export const probeHistory = <T extends { bucketMinutes?: number | null }>(
    records: T[] | null | undefined,
    limit: number
): T[] =>
    (records || [])
        .filter((record) => record?.bucketMinutes == null)
        .slice(0, limit);

const HISTORY_FILLER = {
    group: 'apiRequest',
    status: AWAITING,
    responseTime: 0,
    createdAt: null as null,
};

/**
 * Admin details padding: newest-first probes, then empty slots, then reverse
 * so the chart reads oldest → newest.
 *
 * @param records Newest-first APIStatusRecords
 * @param limit Bar count
 */
export const adminChartPoints = <T extends { bucketMinutes?: number | null; createdAt?: unknown }>(
    records: T[] | null | undefined,
    limit: number = HISTORY_POINTS
): Array<T | typeof HISTORY_FILLER> => {
    const probes = probeHistory(records, limit);
    const padding = Array.from({ length: Math.max(0, limit - probes.length) }, () => ({
        ...HISTORY_FILLER,
    }));

    return [...probes, ...padding].reverse();
};

/**
 * Newest real reading on an Admin-padded series (ignores awaiting fillers).
 */
export const latestChartPoint = <T extends { createdAt?: unknown; status?: string }>(
    points: T[] | null | undefined
): T | null =>
    [...(points || [])].reverse().find((point) => point?.createdAt && point.status !== AWAITING) ||
    null;
