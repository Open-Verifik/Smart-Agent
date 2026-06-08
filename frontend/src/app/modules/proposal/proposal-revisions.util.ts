export interface ProposalPricingRevision {
    revisedAt: string;
}

export const diffDaysSince = (from: string | Date, to: string | Date): number => {
    const start = new Date(from);
    const end = new Date(to);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;

    return Math.max(0, Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
};

export const buildRevisionTimeline = (
    createdAt?: string,
    revisions: ProposalPricingRevision[] = []
): Array<{ revisedAt: string; daysSinceCreated: number }> => {
    if (!createdAt) return [];

    return revisions
        .filter((revision) => revision.revisedAt)
        .map((revision) => ({
            revisedAt: revision.revisedAt,
            daysSinceCreated: diffDaysSince(createdAt, revision.revisedAt),
        }));
};
