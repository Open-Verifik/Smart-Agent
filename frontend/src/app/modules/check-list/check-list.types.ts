import { CheckListDomain } from './check-list-taxonomy';

export type CheckListStatus = 'draft' | 'active';

export interface CheckListRecord {
    _id: string;
    name: string;
    countries: string[];
    domains: CheckListDomain[];
    featureCodes: string[];
    status: CheckListStatus;
    createdAt?: string;
    updatedAt?: string;
}

export interface CheckListPayload {
    name: string;
    countries: string[];
    domains: CheckListDomain[];
    featureCodes: string[];
    status?: CheckListStatus;
}

export interface CheckListListResponse {
    data: CheckListRecord[];
    total?: number;
}
