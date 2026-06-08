import { PublicProposal } from './proposal.service';
import { getSelectedLineItems } from './proposal-pricing.util';

export interface ProposalScopeSummary {
    countries: string[];
    endpointCount: number;
    categories: string[];
}

export const buildScopeSummary = (proposal: PublicProposal): ProposalScopeSummary => {
    const items = getSelectedLineItems(proposal);

    return {
        countries: [...new Set(items.map((item) => item.country?.trim()).filter(Boolean) as string[])].sort(),
        endpointCount: items.length,
        categories: [...new Set(items.map((item) => item.category?.trim()).filter(Boolean) as string[])].sort(),
    };
};

export const getRecipientCompany = (proposal: PublicProposal): string => {
    return proposal.prospect?.company?.trim() || '';
};

export const getRecipientEmail = (proposal: PublicProposal): string => {
    return proposal.prospect?.email?.trim() || proposal.client?.email?.trim() || '';
};

export const getDocumentSubject = (proposal: PublicProposal, fallbackTitle: string): string => {
    return proposal.subject?.trim() || fallbackTitle;
};

export const showScopeSection = (proposal: PublicProposal): boolean => {
    return proposal.includeScopeSection !== false;
};

export const showSlaSection = (proposal: PublicProposal): boolean => {
    return proposal.includeSlaSection !== false;
};

export const showGeneralitiesSection = (proposal: PublicProposal): boolean => {
    return proposal.includeGeneralitiesSection !== false;
};

export const showCommercialNotes = (proposal: PublicProposal): boolean => {
    return proposal.includeCommercialNotes !== false;
};

export const getLatestRevisionDate = (proposal: PublicProposal): string | undefined => {
    const revisions = proposal.pricingRevisions || [];

    if (revisions.length) {
        return revisions[revisions.length - 1].revisedAt;
    }

    return proposal.createdAt;
};
