export interface PostmanSandboxProfile {
    /** Stable picker value when paramOverrides change visible params. */
    profileKey?: string;
    documentNumber: string;
    fullName: string;
    gender?: 'F' | 'M';
    birthDate?: string;
    expeditionDate?: string;
    /** Path/query param for endpoints keyed by processNumber instead of documentNumber. */
    processNumber?: string;
    /** Path/query param for plate-only vehicle endpoints. */
    plate?: string;
    /** Path/query param for VIN-only vehicle endpoints. */
    vin?: string;
    /** When set, profile triggers a documented error response (or middleware validation). */
    responseType?: 'success' | 'error';
    expectedStatus?: number;
    /** Applied to request params when this profile is selected (409 validation cases). */
    paramOverrides?: Record<string, string>;
}

/** Registry entry for one or more app-feature codes that share sandbox test data. */
export interface PostmanSandboxEndpointConfig {
    profiles: PostmanSandboxProfile[];
    defaultDocumentNumber: string;
    /** Default processNumber when endpoint uses path param processNumber. */
    defaultProcessNumber?: string;
    /** Default plate when endpoint uses plate query/path param only. */
    defaultPlate?: string;
    /** Default US state code when endpoint requires state (e.g. FL). */
    defaultState?: string;
    /** Default VIN when endpoint uses vin query/path param only. */
    defaultVin?: string;
    /** Per endpoint code, default documentType when that param exists on the endpoint. */
    documentTypeByCode?: Record<string, string>;
    /** Default expeditionDate when endpoint requires it (e.g. CE foreigner-id). */
    defaultExpeditionDate?: string;
    /** Default city when endpoint requires it (e.g. judicial records). */
    defaultCity?: string;
    /** Default quality when endpoint requires it (e.g. lawyer certificate). */
    defaultQuality?: string;
    /** Default dateOfBirth when endpoint requires it (e.g. Guatemala CUI). DD/MM/YYYY. */
    defaultDateOfBirth?: string;
    /** Default date when endpoint requires it (e.g. affiliations). DD/MM/YYYY. */
    defaultDate?: string;
    /** Default category when endpoint requires it (e.g. RUES v3). */
    defaultCategory?: string;
    /** Default firstSurname when endpoint requires it (e.g. INPEC). */
    defaultFirstSurname?: string;
    /** Default codeFasecolda when endpoint uses code-only query (8 digits). */
    defaultCodeFasecolda?: string;
    /** Default business name when endpoint uses business query (e.g. Canada company). */
    defaultBusiness?: string;
    /** Default province code when endpoint requires province (e.g. ON). */
    defaultProvince?: string;
    /** Default dv when endpoint requires dv (e.g. Panama RUC). */
    defaultDv?: string;
    /** Default serialNumber when endpoint requires it (e.g. Chile validate). */
    defaultSerialNumber?: string;
    /** Default lastName when endpoint requires it (e.g. BC driver license). */
    defaultLastName?: string;
    /** Default expirationDate when endpoint requires it (e.g. Spain DNIES). DD/MM/YYYY. */
    defaultExpirationDate?: string;
    /** Transloco key suffix under postman.requestEditor (default: sandboxProfiles). */
    i18nKey?: string;
    /** When false, picker omits gender/birthDate meta (default: true). */
    showProfileMeta?: boolean;
}
