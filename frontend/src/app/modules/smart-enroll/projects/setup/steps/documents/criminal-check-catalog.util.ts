import postmanEndpointsIo from '../../../../../postman/postman-endpoints-io.json';

export type CriminalCheckDocs = {
    en: string;
    es: string;
};

export type CriminalCheckOption = {
    value: string;
    titleKey: string;
    descriptionKey: string;
    sourceKey: string;
    aboutKey: string;
    docs: CriminalCheckDocs;
};

export type RequirementKind = 'required' | 'optional' | 'conditional';

export interface CriminalCheckParam {
    field: string;
    type: string;
    required: boolean;
    requirementKind: RequirementKind;
    conditionalHint?: string;
    description: string;
    allowed?: string[];
    dateFormat?: string;
    sourceHint: string;
    dependencyGroup?: string;
}

export interface CriminalCheckParamGroup {
    id: string;
    groupType: 'name' | 'document' | 'serial' | 'other' | 'flat';
    titleKey: string;
    titleFallback: string;
    hintKey?: string;
    hintFallback?: string;
    badgeKey?: string;
    badgeFallback?: string;
    icon: string;
    params: CriminalCheckParam[];
}

export interface CriminalCheckResponseSample {
    status: string;
    label: string;
    body: string;
    formattedJson: string;
    isHit: boolean;
    isClean: boolean;
}

export interface CriminalCheckCodeExample {
    lang: string;
    label: string;
    language: string;
    code: string;
}

export interface CriminalCheckDetail {
    code: string;
    name: string;
    nameES?: string;
    method: string;
    url: string;
    endpointPath: string;
    description: string;
    price?: number;
    headers: Array<{ name: string; value: string }>;
    params: CriminalCheckParam[];
    paramGroups: CriminalCheckParamGroup[];
    hasSearchGroups: boolean;
    responses: CriminalCheckResponseSample[];
    requestExamples: CriminalCheckCodeExample[];
}

export const DOCS_BASE_URL = 'https://docs.verifik.co';

export const criminalCheckDocs: Record<string, CriminalCheckDocs> = {
    colombia_api_inpec: {
        en: '/background-check/colombia-inpec',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec',
    },
    colombia_api_identity_lookup_procuraduria: {
        en: '/background-check/colombia-disciplinary-records-attorneys-office',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-procuraduria',
    },
    colombia_api_police_rnmc: {
        en: '/background-check/colombia-police-compliance-corrective-measures',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial',
    },
    colombia_special_api_police_identity_lookup: {
        en: '/background-check/colombia-police-record-check',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-policia',
    },
    world_api_interpol: {
        en: '/background-check/international/interpol-background-check',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-interpol',
    },
    world_api_fbi: {
        en: '/background-check/international/fbi-background-check',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-fbi',
    },
    world_api_dea: {
        en: '/background-check/international/dea-background-check',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-dea',
    },
    world_api_europol: {
        en: '/background-check/international/europol-background-check',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-europol',
    },
    world_api_ofac: {
        en: '/background-check/international/ofac-background-check',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-ofac',
    },
    world_api_onu: {
        en: '/background-check/international/onu-background-check',
        es: '/verifik-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-onu',
    },
    world_api_csl: {
        en: '/background-check/international/us-consolidated-screening-list',
        es: '/verifik-es/background-check/international/us-consolidated-screening-list',
    },
    world_api_dss_most_wanted: {
        en: '/background-check/international/dss-most-wanted',
        es: '/verifik-es/background-check/international/dss-most-wanted',
    },
    world_api_us_terrorists: {
        en: '/background-check/international/us-state-terrorists',
        es: '/verifik-es/background-check/international/us-state-terrorists',
    },
    world_api_secret_service: {
        en: '/background-check/international/secret-service',
        es: '/verifik-es/background-check/international/secret-service',
    },
    world_api_sec: {
        en: '/background-check/international/sec-sanctions',
        es: '/verifik-es/background-check/international/sec-sanctions',
    },
    world_api_health_exclusions: {
        en: '/background-check/international/health-exclusions',
        es: '/verifik-es/background-check/international/health-exclusions',
    },
    world_api_cia_world_leaders: {
        en: '/background-check/international/cia-world-leaders',
        es: '/verifik-es/background-check/international/cia-world-leaders',
    },
    world_api_eu_terrorists: {
        en: '/background-check/international/eu-terrorists',
        es: '/verifik-es/background-check/international/eu-terrorists',
    },
    world_api_eu_fsf: {
        en: '/background-check/international/eu-financial-sanctions',
        es: '/verifik-es/background-check/international/eu-financial-sanctions',
    },
    world_api_ofsi: {
        en: '/background-check/international/uk-ofsi-sanctions',
        es: '/verifik-es/background-check/international/uk-ofsi-sanctions',
    },
    world_api_world_bank: {
        en: '/background-check/international/world-bank',
        es: '/verifik-es/background-check/international/world-bank',
    },
    world_api_iadb: {
        en: '/background-check/international/iadb-sanctions',
        es: '/verifik-es/background-check/international/iadb-sanctions',
    },
    world_api_offshore_leaks: {
        en: '/background-check/international/icij-offshore-leaks',
        es: '/verifik-es/background-check/international/icij-offshore-leaks',
    },
    colombia_api_jcc_sanctions: {
        en: '/background-check/colombia-jcc-sanctions',
        es: '/verifik-es/background-check/colombia-jcc-sanctions',
    },
    colombia_api_paco_sanctions: {
        en: '/background-check/colombia-paco-anticorruption',
        es: '/verifik-es/background-check/colombia-paco-anticorruption',
    },
    colombia_api_rama_jepms: {
        en: '/background-check/colombia-rama-jepms',
        es: '/verifik-es/background-check/colombia-rama-jepms',
    },
    colombia_api_adverse_media: {
        en: '/background-check/adverse-media-google-rss',
        es: '/verifik-es/background-check/adverse-media-google-rss',
    },
    colombia_api_sicaac_cases: {
        en: '/legal/colombia-sicaac-cases',
        es: '/verifik-es/legal/colombia-sicaac-cases',
    },
    colombia_api_sicaac_insolvency: {
        en: '/legal/colombia-sicaac-cases',
        es: '/verifik-es/legal/colombia-sicaac-cases',
    },
    peru_api_pep: {
        en: '/background-check/peru-politically-exposed-persons',
        es: '/verifik-es/background-check/peru-politically-exposed-persons',
    },
    brazil_api_pep: {
        en: '/background-check/brazil-politically-exposed-persons',
        es: '/verifik-es/background-check/brazil-politically-exposed-persons',
    },
};

export const criminalCheckDocsUrl = (docs: CriminalCheckDocs, lang: string): string => {
    const path = lang?.toLowerCase().startsWith('es') ? docs.es : docs.en;

    return `${DOCS_BASE_URL}${path}`;
};

export type CountryCheckSection = {
    country: string;
    checks: CriminalCheckOption[];
};

export const buildCountryCheckSections = (
    countries: string[],
    checksByCountry: Record<string, CriminalCheckOption[]>
): CountryCheckSection[] =>
    [...new Set(countries.map((country) => String(country || '').trim()).filter(Boolean))].map((country) => ({
        country,
        checks: checksByCountry[country.toLowerCase()] || [],
    }));

export const isCountryCheckSelected = (
    current: string[],
    endpoint: string,
    countryCodes: string[],
    legacyCodes: string[]
): boolean => {
    const explicit = current.filter((code) => countryCodes.includes(code));

    if (explicit.length) return explicit.includes(endpoint);
    if (!current.includes('local_api')) return false;

    return legacyCodes.includes(endpoint);
};

export const toggleCountryCheck = (
    current: string[],
    endpoint: string,
    countryCodes: string[],
    legacyCodes: string[]
): string[] => {
    const explicit = current.filter((code) => countryCodes.includes(code));
    const base = explicit.length ? explicit : current.includes('local_api') ? legacyCodes : [];
    const nextCountry = base.includes(endpoint) ? base.filter((code) => code !== endpoint) : [...base, endpoint];
    const unaffected = current.filter((code) => code !== 'local_api' && !countryCodes.includes(code));

    return [...unaffected, ...nextCountry];
};

export const getExtractionHint = (field: string, lang = 'en'): string => {
    const isEs = lang.toLowerCase().startsWith('es');
    switch (field) {
        case 'documentNumber':
            return isEs
                ? 'Extraído automáticamente del documento / cédula escaneada'
                : 'Auto-extracted from verified identity document scan';
        case 'documentType':
            return isEs
                ? 'Tipo de documento detectado (CC, CE, DNI, etc.)'
                : 'Auto-detected document type (CC, CE, DNI, etc.)';
        case 'firstSurname':
            return isEs
                ? 'Primer apellido extraído del documento del titular'
                : 'Applicant first surname extracted from document';
        case 'fullName':
            return isEs
                ? 'Nombre completo reconstruido de nombres y apellidos verificados'
                : 'Full name reconstructed from verified first & last names';
        case 'dateOfBirth':
            return isEs
                ? 'Fecha de nacimiento extraída del código de barras / OCR'
                : 'Date of birth extracted from document barcode / MRZ';
        case 'expirationDate':
            return isEs
                ? 'Fecha de vencimiento extraída del documento'
                : 'Expiration date extracted from document';
        case 'issueDate':
        case 'expeditionDate':
            return isEs
                ? 'Fecha de expedición extraída del documento'
                : 'Issue date extracted from identity document';
        default:
            return isEs
                ? 'Parámetro mapeado automáticamente en la sesión'
                : 'Auto-mapped from applicant verification session';
    }
};

const NAME_FIELDS = new Set([
    'fullName',
    'primerNombre',
    'primerApellido',
    'segundoNombre',
    'segundoApellido',
    'firstName',
    'lastName',
]);
const DOCUMENT_FIELDS = new Set(['documentType', 'documentNumber']);
const SERIAL_FIELDS = new Set(['serial']);

const DOCUMENT_FIELD_ORDER = [
    'documentType',
    'documentNumber',
    'dateOfBirth',
    'expirationDate',
    'issueDate',
    'expeditionDate',
];

const NAME_FIELD_ORDER = [
    'fullName',
    'primerNombre',
    'primerApellido',
    'segundoNombre',
    'segundoApellido',
    'firstName',
    'lastName',
];

export const buildCriminalCheckParamGroups = (
    params: CriminalCheckParam[],
    rawDeps: Array<{
        field: string;
        dependencyGroup?: string;
        required?: boolean;
        requiredWhen?: { field?: string; in?: string[] };
    }> = [],
    lang = 'en'
): { groups: CriminalCheckParamGroup[]; hasSearchGroups: boolean } => {
    const isEs = lang.toLowerCase().startsWith('es');

    const validGroupIds = new Set(
        rawDeps
            .map((d) => (d.dependencyGroup != null ? String(d.dependencyGroup).trim() : ''))
            .filter((g) => g.length > 0)
    );

    // If fewer than 2 distinct dependency groups, it's a flat parameter layout
    if (validGroupIds.size < 2) {
        return {
            hasSearchGroups: false,
            groups: [
                {
                    id: 'all',
                    groupType: 'flat',
                    titleKey: 'smartEnrollProjects.setup.documents.screening.detailsModal.params.title',
                    titleFallback: isEs ? 'Parámetros enviados al registro oficial' : 'Parameters submitted to the official record',
                    icon: 'tune',
                    params,
                },
            ],
        };
    }

    const depMap = new Map(rawDeps.map((d) => [d.field, d]));
    const docGroupIds = new Set<string>();
    const nameGroupIds = new Set<string>();
    const serialGroupIds = new Set<string>();

    for (const d of rawDeps) {
        const gid = d.dependencyGroup != null ? String(d.dependencyGroup).trim() : '';
        if (!gid) continue;
        if (DOCUMENT_FIELDS.has(d.field)) docGroupIds.add(gid);
        if (NAME_FIELDS.has(d.field)) nameGroupIds.add(gid);
        if (SERIAL_FIELDS.has(d.field)) serialGroupIds.add(gid);
    }

    const nameParams: CriminalCheckParam[] = [];
    const docParams: CriminalCheckParam[] = [];
    const serialParams: CriminalCheckParam[] = [];
    const otherParams: CriminalCheckParam[] = [];

    for (const p of params) {
        const dep = depMap.get(p.field);
        const gid = dep?.dependencyGroup != null ? String(dep.dependencyGroup).trim() : '';

        if (gid && nameGroupIds.has(gid)) {
            nameParams.push({
                ...p,
                requirementKind: 'required',
                required: true,
            });
        } else if (gid && docGroupIds.has(gid)) {
            const isConditional = !!dep?.requiredWhen?.in?.length;
            docParams.push({
                ...p,
                requirementKind: isConditional ? 'conditional' : 'required',
                required: !isConditional,
            });
        } else if (gid && serialGroupIds.has(gid)) {
            serialParams.push({
                ...p,
                requirementKind: 'required',
                required: true,
            });
        } else {
            otherParams.push(p);
        }
    }

    // Sort parameters within groups by standard field order
    const docOrder = (key: string) => {
        const i = DOCUMENT_FIELD_ORDER.indexOf(key);
        return i === -1 ? 1000 : i;
    };
    const nameOrder = (key: string) => {
        const i = NAME_FIELD_ORDER.indexOf(key);
        return i === -1 ? 1000 : i;
    };

    docParams.sort((a, b) => docOrder(a.field) - docOrder(b.field) || a.field.localeCompare(b.field));
    nameParams.sort((a, b) => nameOrder(a.field) - nameOrder(b.field) || a.field.localeCompare(b.field));

    const groups: CriminalCheckParamGroup[] = [];

    // Option A — Search by Full Name (matches Postman Option A)
    if (nameParams.length > 0) {
        groups.push({
            id: 'option-name',
            groupType: 'name',
            titleKey: 'smartEnrollProjects.setup.documents.screening.detailsModal.params.optionFullName',
            titleFallback: isEs ? 'Opción A — Búsqueda por nombre completo' : 'Option A — Search by full name',
            hintKey: 'smartEnrollProjects.setup.documents.screening.detailsModal.params.optionFullNameHint',
            hintFallback: isEs
                ? 'Se utiliza al buscar a la persona en listas de control por sus nombres y apellidos verificados.'
                : 'Used when screening the individual across watchlists using verified first and last names.',
            badgeKey: 'smartEnrollProjects.setup.documents.screening.detailsModal.params.xorModeBadge',
            badgeFallback: isEs ? 'Modo Alternativo' : 'Alternative Mode',
            icon: 'person_search',
            params: nameParams,
        });
    }

    // Option B — Search by Document (matches Postman Option B)
    if (docParams.length > 0) {
        groups.push({
            id: 'option-doc',
            groupType: 'document',
            titleKey: 'smartEnrollProjects.setup.documents.screening.detailsModal.params.optionDocument',
            titleFallback: isEs ? 'Opción B — Búsqueda por documento' : 'Option B — Search by document',
            hintKey: 'smartEnrollProjects.setup.documents.screening.detailsModal.params.optionDocumentHint',
            hintFallback: isEs
                ? 'Se utiliza al consultar el registro oficial directamente con el tipo y número del documento escaneado.'
                : 'Used when querying official records directly with the document type and number from the ID scan.',
            badgeKey: 'smartEnrollProjects.setup.documents.screening.detailsModal.params.xorModeBadge',
            badgeFallback: isEs ? 'Modo Alternativo' : 'Alternative Mode',
            icon: 'badge',
            params: docParams,
        });
    }

    // Option C — Search by Serial (matches Postman Option C)
    if (serialParams.length > 0) {
        groups.push({
            id: 'option-serial',
            groupType: 'serial',
            titleKey: 'smartEnrollProjects.setup.documents.screening.detailsModal.params.optionSerial',
            titleFallback: isEs ? 'Opción C — Búsqueda por serial' : 'Option C — Search by serial',
            hintKey: 'smartEnrollProjects.setup.documents.screening.detailsModal.params.optionSerialHint',
            hintFallback: isEs
                ? 'Se utiliza al consultar registros civiles con el número serial del documento.'
                : 'Used when querying civil registries with the document serial number.',
            badgeKey: 'smartEnrollProjects.setup.documents.screening.detailsModal.params.xorModeBadge',
            badgeFallback: isEs ? 'Modo Alternativo' : 'Alternative Mode',
            icon: 'confirmation_number',
            params: serialParams,
        });
    }

    // Other parameters (credits, custom options, etc.)
    if (otherParams.length > 0) {
        groups.push({
            id: 'other',
            groupType: 'other',
            titleKey: 'smartEnrollProjects.setup.documents.screening.detailsModal.params.otherParamsTitle',
            titleFallback: isEs ? 'Otros parámetros' : 'Other parameters',
            hintKey: 'smartEnrollProjects.setup.documents.screening.detailsModal.params.otherParamsHint',
            hintFallback: isEs
                ? 'Parámetros contextuales adicionales que acepta este endpoint.'
                : 'Additional contextual parameters accepted by this endpoint.',
            icon: 'tune',
            params: otherParams,
        });
    }

    return {
        hasSearchGroups: groups.length > 1,
        groups,
    };
};

export const getCriminalCheckEndpointDetail = (code: string, lang = 'en'): CriminalCheckDetail | null => {
    const ep = (postmanEndpointsIo.endpoints as any[]).find((e) => e.code === code);
    if (!ep) return null;

    const isEs = lang.toLowerCase().startsWith('es');
    const documented = (ep.input?.documentedParams || []) as Array<{ field: string; description?: string }>;
    const deps = (ep.input?.dependencies || []) as Array<{
        field: string;
        type?: string;
        required?: boolean;
        enum?: string[];
        dateFormat?: string;
        description?: string;
        dependencyGroup?: string;
        requiredWhen?: { field?: string; in?: string[] };
    }>;
    const byField = new Map<string, (typeof deps)[0]>();
    for (const d of deps) {
        byField.set(d.field, d);
    }

    const params: CriminalCheckParam[] = [];
    for (const doc of documented) {
        const dep = byField.get(doc.field);
        const reqWhen = dep?.requiredWhen;
        const isConditional = !!reqWhen?.in?.length;
        const conditionalHint = isConditional
            ? (isEs ? `Requerido para: ${reqWhen!.in!.join(', ')}` : `Required for: ${reqWhen!.in!.join(', ')}`)
            : undefined;

        params.push({
            field: doc.field,
            type: dep?.type || 'String',
            required: dep ? !!dep.required : false,
            requirementKind: isConditional ? 'conditional' : (dep?.required ? 'required' : 'optional'),
            conditionalHint,
            allowed: dep?.enum,
            dateFormat: dep?.dateFormat,
            description: doc.description || dep?.description || '',
            sourceHint: getExtractionHint(doc.field, lang),
            dependencyGroup: dep?.dependencyGroup != null ? String(dep.dependencyGroup).trim() : undefined,
        });
        byField.delete(doc.field);
    }
    for (const [field, dep] of byField.entries()) {
        const reqWhen = dep.requiredWhen;
        const isConditional = !!reqWhen?.in?.length;
        const conditionalHint = isConditional
            ? (isEs ? `Requerido para: ${reqWhen!.in!.join(', ')}` : `Required for: ${reqWhen!.in!.join(', ')}`)
            : undefined;

        params.push({
            field,
            type: dep.type || 'String',
            required: !!dep.required,
            requirementKind: isConditional ? 'conditional' : (dep.required ? 'required' : 'optional'),
            conditionalHint,
            allowed: dep.enum,
            dateFormat: dep.dateFormat,
            description: dep.description || '',
            sourceHint: getExtractionHint(field, lang),
            dependencyGroup: dep.dependencyGroup != null ? String(dep.dependencyGroup).trim() : undefined,
        });
    }

    const { groups: paramGroups, hasSearchGroups } = buildCriminalCheckParamGroups(params, deps, lang);

    const responses: CriminalCheckResponseSample[] = (ep.responses || []).map((r: any) => {
        let formattedJson = '';
        try {
            formattedJson = typeof r.body === 'string' ? JSON.stringify(JSON.parse(r.body), null, 2) : JSON.stringify(r.body, null, 2);
        } catch {
            formattedJson = typeof r.body === 'string' ? r.body : JSON.stringify(r.body, null, 2);
        }
        const status = String(r.status || '');
        const bodyStr = formattedJson;
        const isHit =
            status.includes('found') ||
            (status === '200' && (bodyStr.includes('Se encontró') || bodyStr.includes('foundIn') || bodyStr.includes('totalCards')));
        const isClean =
            status.includes('not-found') ||
            status.includes('no-records') ||
            bodyStr.includes('No se encontraron') ||
            bodyStr.includes('No se encuentra');

        return {
            status,
            label: r.label || status,
            body: bodyStr,
            formattedJson,
            isHit: isHit && !isClean,
            isClean,
        };
    });

    const endpointPath = ep.url ? (ep.url.startsWith('/') ? ep.url : `/${ep.url}`) : '';
    const method = ep.method || 'GET';

    const primaryParams = hasSearchGroups
        ? (paramGroups.find((g) => g.groupType === 'document')?.params ??
           paramGroups.find((g) => g.groupType === 'name')?.params ??
           params)
        : params;

    const queryString = primaryParams
        .filter((p) => p.requirementKind === 'required' || p.required || primaryParams.length <= 3)
        .map((p) => `${p.field}=${p.allowed?.[0] || (p.field === 'fullName' ? 'John Doe' : '12345678')}`)
        .join('&');
    const fullUrl = `https://api.verifik.co${endpointPath}${queryString ? `?${queryString}` : ''}`;

    const requestExamples: CriminalCheckCodeExample[] = [
        {
            lang: 'curl',
            label: 'cURL',
            language: 'bash',
            code: `curl -X ${method} "${fullUrl}" \\\n  -H "Accept: application/json" \\\n  -H "Authorization: Bearer <your_token>"`,
        },
        {
            lang: 'javascript',
            label: 'JavaScript',
            language: 'javascript',
            code: `const response = await fetch("${fullUrl}", {\n  method: "${method}",\n  headers: {\n    "Accept": "application/json",\n    "Authorization": "Bearer <your_token>"\n  }\n});\nconst result = await response.json();\nconsole.log(result);`,
        },
        {
            lang: 'python',
            label: 'Python',
            language: 'python',
            code: `import requests\n\nurl = "${fullUrl}"\nheaders = {\n    "Accept": "application/json",\n    "Authorization": "Bearer <your_token>"\n}\n\nresponse = requests.${method.toLowerCase()}(url, headers=headers)\nprint(response.json())`,
        },
    ];

    return {
        code: ep.code,
        name: lang.toLowerCase().startsWith('es') && ep.nameES ? ep.nameES : ep.name,
        nameES: ep.nameES,
        method,
        url: ep.url,
        endpointPath,
        description: ep.description || '',
        price: ep.price,
        headers: ep.headers || [],
        params,
        paramGroups,
        hasSearchGroups,
        responses,
        requestExamples,
    };
};
