/**
 * Resolves a Mongo-style id from populate payloads (string ref or `{ _id }`).
 */
export const extractMongoId = (ref: unknown): string | null => {
    if (ref == null) return null;
    if (typeof ref === 'string' && ref.trim()) return ref.trim();
    if (typeof ref === 'object' && ref !== null && '_id' in ref) {
        const id = (ref as { _id?: unknown })._id;
        if (typeof id === 'string' && id.trim()) return id.trim();
    }
    return null;
};

export type DevApiHintI18n = {
    headers: string;
    populatesExplainer: string;
    noDirectCompare: string;
    compareFallback: string;
    emptyList: string;
    noId: string;
    webhookNote: string;
};

export type DevApiHintBuildOpts = {
    recordId: string;
    project: { _id?: string } | null;
    apiBase: string;
    populates: string[];
    i18n: DevApiHintI18n;
    /** Remaining URLs not listed (after cap). */
    moreUrlsLabel: (count: number) => string;
};

const apiPath = (apiBase: string, segment: string): string => {
    const base = apiBase.replace(/\/$/, '');
    const seg = segment.startsWith('/') ? segment : `/${segment}`;
    return `${base}/v2${seg}`;
};

const populatesBlock = (populates: string[]): string =>
    populates.map((p) => `  populates[]=${p}`).join('\n');

const headersBlock = (i18n: DevApiHintI18n): string => `\n${i18n.headers}\n  Authorization: Bearer <accessToken>\n`;

const listArrayGets = (
    items: unknown[],
    urlForId: (id: string) => string,
    maxLines: number,
    i18n: DevApiHintI18n,
    moreUrlsLabel: (count: number) => string,
): string => {
    if (!items.length) return i18n.emptyList;
    const ids = items.map(extractMongoId).filter((x): x is string => !!x);
    if (!ids.length) return i18n.emptyList;
    const slice = ids.slice(0, maxLines);
    const lines = slice.map((id) => `GET ${urlForId(id)}`);
    const rest = ids.length - slice.length;
    if (rest > 0) {
        lines.push(moreUrlsLabel(rest));
    }
    return lines.join('\n');
};

/**
 * Plain-text body for the dev API hint dialog.
 */
export const buildDevApiHintBody = (sectionKey: string, value: unknown, opts: DevApiHintBuildOpts): string => {
    const { recordId, project, apiBase, populates, i18n, moreUrlsLabel } = opts;
    const h = headersBlock(i18n);

    switch (sectionKey) {
        case 'record': {
            const url = apiPath(apiBase, `/app-registrations/${recordId}`);
            const q = populatesBlock(populates);
            return [
                `GET ${url}`,
                '',
                i18n.populatesExplainer,
                q,
                '',
                h.trimEnd(),
            ].join('\n');
        }
        case 'informationValidation': {
            const id = extractMongoId(value);
            if (!id) return i18n.noId;
            return `GET ${apiPath(apiBase, `/information-validations/${id}`)}${h}`;
        }
        case 'emailValidation': {
            const id = extractMongoId(value);
            if (!id) return i18n.noId;
            return `GET ${apiPath(apiBase, `/email-validations/${id}`)}${h}`;
        }
        case 'phoneValidation': {
            const id = extractMongoId(value);
            if (!id) return i18n.noId;
            return `GET ${apiPath(apiBase, `/phone-validations/${id}`)}${h}`;
        }
        case 'documentValidation': {
            const id = extractMongoId(value);
            if (!id) return i18n.noId;
            return `GET ${apiPath(apiBase, `/document-validations/${id}`)}${h}`;
        }
        case 'documentFace':
        case 'face': {
            const id = extractMongoId(value);
            if (!id) return i18n.noId;
            return `GET ${apiPath(apiBase, `/identity-images/${id}`)}${h}`;
        }
        case 'failedDocumentValidations': {
            const items = Array.isArray(value) ? value : [];
            const block = listArrayGets(
                items,
                (id) => apiPath(apiBase, `/document-validations/${id}`),
                15,
                i18n,
                moreUrlsLabel,
            );
            return `${block}${items.length ? h : ''}`;
        }
        case 'biometricValidation': {
            const id = extractMongoId(value);
            if (!id) return i18n.noId;
            return `GET ${apiPath(apiBase, `/biometric-validations/${id}`)}${h}`;
        }
        case 'failedBiometricValidations': {
            const items = Array.isArray(value) ? value : [];
            const block = listArrayGets(
                items,
                (id) => apiPath(apiBase, `/biometric-validations/${id}`),
                15,
                i18n,
                moreUrlsLabel,
            );
            return `${block}${items.length ? h : ''}`;
        }
        case 'person': {
            const id = extractMongoId(value);
            if (!id) return i18n.noId;
            return `GET ${apiPath(apiBase, `/face-recognition/persons/${id}`)}${h}`;
        }
        case 'compareFaceVerification': {
            const nestedId = extractMongoId(value);
            const url = apiPath(apiBase, `/app-registrations/${recordId}`);
            const parts = [
                i18n.noDirectCompare,
                nestedId ? `FaceVerification _id: ${nestedId}` : '',
                '',
                i18n.compareFallback,
                `GET ${url}`,
                '  populates[]=compareFaceVerification',
                '',
                h.trimEnd(),
            ].filter(Boolean);
            return parts.join('\n');
        }
        case 'projectFlow': {
            const id = extractMongoId(value);
            if (!id) return i18n.noId;
            return `GET ${apiPath(apiBase, `/project-flows/${id}`)}${h}`;
        }
        case 'project': {
            const id = extractMongoId(value) ?? project?._id;
            if (!id) return i18n.noId;
            return `GET ${apiPath(apiBase, `/projects/${id}`)}${h}`;
        }
        case 'webhookEvents': {
            const baseUrl = apiPath(apiBase, '/webhook-events');
            const populateSelects = '{"projectFlow":"project","project":"name"}';
            const params = [
                `where_appRegistration=${encodeURIComponent(recordId)}`,
                'where_status=sent',
                'sort=-createdAt',
                'page=1',
                'perPage=10',
                'populates[]=projectFlow.project',
                `populateSelects=${encodeURIComponent(populateSelects)}`,
            ];
            return [i18n.webhookNote, '', `GET ${baseUrl}?${params.join('&')}`, '', h.trimEnd()].join('\n');
        }
        default:
            return i18n.noId;
    }
};
