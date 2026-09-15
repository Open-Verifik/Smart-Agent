import { DateTime } from 'luxon';

export const createdAtRangeParams = (
    start: DateTime,
    end: DateTime
): { whereGTE_createdAt: string; whereLTE_createdAt: string } => ({
    whereGTE_createdAt: start.startOf('day').toUTC().toISO() ?? '',
    whereLTE_createdAt: end.endOf('day').toUTC().toISO() ?? '',
});
