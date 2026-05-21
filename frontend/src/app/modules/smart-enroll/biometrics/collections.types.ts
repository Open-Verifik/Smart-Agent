import { Subject } from 'rxjs';
import type { Person } from './people.types';

export type CollectionScopeType = 'demo' | 'smartEnroll' | 'other';

export interface Collection {
    _id: string;
    code: string;
    createdAt: string;
    description: string;
    expanded?: boolean;
    loading?: boolean;
    name: string;
    people?: Person[];
    project: string;
    updatedAt: string;
    isDemoCollection?: boolean;
    isSmartEnrollCollection?: boolean;
    collectionScopeType?: CollectionScopeType;
    clearPeopleSelections$?: Subject<void>;
}
