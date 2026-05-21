export type PersonThumbnail = {
    id: string;
    thumbnail: string;
};

export type CreatePersonWithLivenessPayload = {
    collection_id: string;
    date_of_birth: string;
    gender: 'F' | 'M';
    images: string[];
    liveness_min_score: number;
    min_score: number;
    name: string;
    nationality?: string;
    search_mode: 'ACCURATE' | 'FAST';
};

export type CreatePersonPayload = {
    collections: string[];
    date_of_birth: string;
    gender: 'F' | 'M';
    images: string[];
    name: string;
    nationality?: string;
    notes?: string;
};

export type Person = {
    __v?: number;
    _id: string;
    client: string;
    collections: string[];
    createdAt: string;
    date_of_birth: string | null;
    documentValidations?: unknown[];
    emails?: string[];
    environment?: string;
    gender?: string;
    livenessScore?: number;
    name: string;
    nationality: string | null;
    notes: string | null;
    phones?: string[];
    selected?: boolean;
    thumbnails: PersonThumbnail[];
    updatedAt: string;
};
