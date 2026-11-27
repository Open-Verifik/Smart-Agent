import { describe, expect, it } from 'vitest';
import featuresEn from '../../../../public/i18n/features-en.json';
import featuresEs from '../../../../public/i18n/features-es.json';
import featuresFr from '../../../../public/i18n/features-fr.json';
import featuresJa from '../../../../public/i18n/features-ja.json';
import featuresKo from '../../../../public/i18n/features-ko.json';
import featuresPt from '../../../../public/i18n/features-pt.json';
import featuresZh from '../../../../public/i18n/features-zh.json';
import en from '../../../../public/i18n/en.json';
import es from '../../../../public/i18n/es.json';
import fr from '../../../../public/i18n/fr.json';
import ja from '../../../../public/i18n/ja.json';
import ko from '../../../../public/i18n/ko.json';
import pt from '../../../../public/i18n/pt.json';
import zh from '../../../../public/i18n/zh.json';
import { enrichAppFeatureRecord } from './postman-catalog-enrichment.util';
import { indexAboutParamMetadata } from './postman-docs-params.util';
import { resolvePostmanEndpointCopy, resolveAboutOverview } from './postman-endpoint-copy.util';
import {
    formatPostmanCategoryLabel,
    isUnlistedPostmanFeature,
    joinPostmanFeatureUrl,
    resolvePostmanFeatureCategory,
    resolvePostmanFeatureCountry,
    resolvePostmanHttpMethod,
    verifiedPostBodyFor,
} from './postman-feature-shape.util';
import postmanEndpointsIo from './postman-endpoints-io.json';
import { EndpointDocLocale } from './postman.types';

const PREMIUM_CODE = 'colombia_api_identity_lookup_premium';

/** The 30 individual endpoints. Cédula premium stays off this list. */
const INDIVIDUAL_30 = [
    { code: 'colombia_api_identity_lookup_vigencia', method: 'GET', url: 'v2/co/cedula/vigencia', country: 'Colombia', baseCategory: 'identity', group: 'apiRequest' },
    { code: 'colombia_api_electrical_mechanical_engineering', method: 'GET', url: 'v2/co/consejo-profesional', country: 'Colombia', baseCategory: 'professional_license', group: 'apiRequest' },
    { code: 'colombia_api_cpae', method: 'GET', url: 'v2/co/cpae', country: 'Colombia', baseCategory: 'professional_license', group: 'apiRequest' },
    { code: 'colombia_api_cpiq', method: 'GET', url: 'v2/co/cpiq', country: 'Colombia', baseCategory: 'professional_license', group: 'apiRequest' },
    { code: 'colombia_api_dian_proveedores_ficticios', method: 'GET', url: 'v2/co/dian/proveedores-ficticios', country: 'co', baseCategory: 'company', group: 'apiRequest' },
    { code: 'colombia_api_pep_candidatos', method: 'GET', url: 'v2/co/pep/candidatos', country: 'co', baseCategory: 'pep', group: 'apiRequest' },
    { code: 'colombia_api_pep_cuerpo_diplomatico', method: 'GET', url: 'v2/co/pep/cuerpo-diplomatico', country: 'co', baseCategory: 'pep', group: 'apiRequest' },
    { code: 'colombia_api_pep_estructura_gobierno', method: 'GET', url: 'v2/co/pep/estructura-gobierno', country: 'co', baseCategory: 'pep', group: 'apiRequest' },
    { code: 'colombia_api_pep_misiones_exterior', method: 'GET', url: 'v2/co/pep/misiones-exterior', country: 'co', baseCategory: 'pep', group: 'apiRequest' },
    { code: 'colombia_api_pep_partidos_politicos', method: 'GET', url: 'v2/co/pep/partidos-politicos', country: 'co', baseCategory: 'pep', group: 'apiRequest' },
    { code: 'colombia_api_sst_license', method: 'GET', url: 'v2/co/sst/licencia', country: 'Colombia', baseCategory: 'professional_license', group: 'apiRequest' },
    { code: 'colombia_api_superfinanciera_concordatos', method: 'GET', url: 'v2/co/superfinanciera/concordatos', country: 'co', baseCategory: 'company', group: 'apiRequest' },
    { code: 'colombia_api_supersociedades_siis', method: 'GET', url: 'v2/co/supersociedades/siis', country: 'co', baseCategory: 'company', group: 'apiRequest' },
    { code: 'colombia_api_supersolidaria_sanciones', method: 'GET', url: 'v2/co/supersolidaria/sanciones', country: 'co', baseCategory: 'company', group: 'apiRequest' },
    { code: 'costa_rica_api_traffic_infractions', method: 'GET', url: 'v2/cr/traffic-infractions', country: 'Costa Rica', baseCategory: 'transit', group: 'apiRequest' },
    { code: 'ecuador_api_voting_location', method: 'GET', url: 'v2/ec/votacion', country: 'Ecuador', baseCategory: 'identity', group: 'apiRequest' },
    { code: 'ecuador_api_vehicle_v3', method: 'GET', url: 'v3/ec/vehiculo/placa', country: 'Ecuador', baseCategory: 'transit', group: 'apiRequest' },
    { code: 'world_api_br_bcb_disqualified', method: 'GET', url: 'v2/br/bcb-disqualified', country: 'Global', baseCategory: 'background_check', group: 'apiRequest' },
    { code: 'world_api_br_tcu_disqualified', method: 'GET', url: 'v2/br/tcu-disqualified', country: 'Global', baseCategory: 'background_check', group: 'apiRequest' },
    { code: 'world_api_crypto_fbi_lazarus', method: 'GET', url: 'v2/crypto/fbi-lazarus', country: 'Global', baseCategory: 'background_check', group: 'apiRequest' },
    { code: 'world_api_crypto_ransomwhere', method: 'GET', url: 'v2/crypto/ransomwhere', country: 'Global', baseCategory: 'background_check', group: 'apiRequest' },
    { code: 'panama_api_lawyer_idoneidad', method: 'GET', url: 'v2/pa/lawyer/idoneidad', country: 'Panama', baseCategory: 'professional_license', group: 'apiRequest' },
    { code: 'panama_api_jtia_license', method: 'GET', url: 'v2/pa/professional/jtia', country: 'Panama', baseCategory: 'professional_license', group: 'apiRequest' },
    { code: 'peru_api_renacyt_education', method: 'GET', url: 'v2/pe/education/renacyt', country: 'Peru', baseCategory: 'education_verification', group: 'apiRequest' },
    { code: 'world_api_education_score', method: 'GET', url: 'v2/score/education', country: 'World', baseCategory: 'professional_license', group: 'apiRequest' },
    { code: 'communication_global_email_otp', method: 'POST', url: 'v2/communication/email', country: 'world', baseCategory: 'email', group: 'communication' },
    { code: 'communication_messaging_sms', method: 'POST', url: 'v2/communication/sms', country: 'world', baseCategory: 'messaging', group: 'communication' },
    { code: 'communication_global_messaging_whatsapp', method: 'POST', url: 'v2/communication/whatsapp', country: 'world', baseCategory: 'messaging', group: 'communication' },
    { code: 'face_recognition_detect_face', method: 'POST', url: 'v2/face-recognition/face-validation', country: 'world', baseCategory: 'Search', group: 'faceRecognition' },
    { code: 'ocr_scan_gpt', method: 'POST', url: 'v2/ocr/scan-gpt', country: 'world', baseCategory: 'OCR', group: 'biometrics' },
] as const;

const LOCALES: EndpointDocLocale[] = ['en', 'es', 'fr', 'pt', 'ko', 'ja', 'zh'];

const catalogs = {
    en: featuresEn,
    es: featuresEs,
    fr: featuresFr,
    pt: featuresPt,
    ko: featuresKo,
    ja: featuresJa,
    zh: featuresZh,
} as const;

const categoryLocales = { en, es, fr, pt, ko, ja, zh } as const;

const staticEndpoints = () =>
    ((postmanEndpointsIo as { endpoints?: Array<Record<string, unknown>> }).endpoints ??
        []) as Array<Record<string, any>>;

const expectedCountry = (country: string): string => {
    const normalized = country.trim().toLowerCase();
    if (normalized === 'world' || normalized === 'global') return 'world';
    if (normalized === 'co') return 'Colombia';
    return country;
};

const expectedCategory = (baseCategory: string): string => {
    if (baseCategory === 'Search') return 'SEARCH';
    if (baseCategory === 'OCR') return 'OCR';
    return baseCategory.toUpperCase();
};

describe('30 individual Postman endpoints', () => {
    it('lists exactly those 30 codes and leaves cédula premium unlisted', () => {
        expect(INDIVIDUAL_30).toHaveLength(30);
        expect(new Set(INDIVIDUAL_30.map((row) => row.code)).size).toBe(30);
        expect(INDIVIDUAL_30.some((row) => row.code === PREMIUM_CODE)).toBe(false);
        expect(isUnlistedPostmanFeature({ code: PREMIUM_CODE })).toBe(true);
        expect(isUnlistedPostmanFeature({ code: 'ocr_scan_gpt' })).toBe(false);
    });

    it('keeps the premium catalog copy unchanged and hidden', () => {
        expect(featuresEn.appFeatures[PREMIUM_CODE].title).toBe(
            'Colombia — National ID premium lookup (CC)'
        );
        const premium = staticEndpoints().find((entry) => entry.code === PREMIUM_CODE);
        expect(premium?.catalogHidden).toBe(true);
        expect(premium?.url).toBe('v2/co/cedula/premium');
    });

    it('renders method, v3 path, country, and group for every endpoint', () => {
        for (const row of INDIVIDUAL_30) {
            expect(resolvePostmanHttpMethod(row), row.code).toBe(row.method);
            expect(resolvePostmanFeatureCountry(row.country), row.code).toBe(
                expectedCountry(row.country)
            );
            expect(resolvePostmanFeatureCategory(row), row.code).toBe(
                expectedCategory(row.baseCategory)
            );
            expect(joinPostmanFeatureUrl('https://api.verifik.co', row.url), row.code).toBe(
                `https://api.verifik.co/${row.url}`
            );
        }
    });

    it('keeps communication and Scan Agent as POST JSON bodies even when a slim row says GET', () => {
        const cases: Array<{ code: string; url: string; fields: string[]; absent: string[] }> = [
            {
                code: 'communication_global_email_otp',
                url: 'v2/communication/email',
                fields: ['project', 'validationMethod', 'email', 'type'],
                absent: ['message', 'country'],
            },
            {
                code: 'communication_messaging_sms',
                url: 'v2/communication/sms',
                fields: ['phone', 'countryCode'],
                absent: ['message'],
            },
            {
                code: 'communication_global_messaging_whatsapp',
                url: 'v2/communication/whatsapp',
                fields: ['phone', 'countryCode', 'whatsappTemplate'],
                absent: ['message'],
            },
            {
                code: 'ocr_scan_gpt',
                url: 'v2/ocr/scan-gpt',
                fields: ['image', 'documentType', 'backImage', 'template'],
                absent: ['country', 'cropFace'],
            },
        ];
        for (const row of cases) {
            expect(
                resolvePostmanHttpMethod({ method: 'GET', group: 'apiRequest', url: row.url }),
                row.code
            ).toBe('POST');
            const enriched = enrichAppFeatureRecord({
                code: row.code,
                url: row.url,
                method: 'GET',
                group: 'apiRequest',
                dependencies: [
                    { field: 'email', required: true },
                    { field: 'message', required: true },
                    { field: 'country', required: false },
                    { field: 'cropFace', required: false },
                ],
            });
            expect(enriched.dependencies?.map((dep) => dep.field), row.code).toEqual(row.fields);
            const optional = new Set(
                (verifiedPostBodyFor(row) ?? []).filter((field) => !field.required).map((field) => field.field)
            );
            for (const field of row.fields) {
                const dep = enriched.dependencies?.find((item) => item.field === field);
                expect(dep?.required, `${row.code} ${field}`).toBe(!optional.has(field));
            }
            for (const locale of LOCALES) {
                const params = enriched.docs?.[locale]?.params ?? [];
                expect(params.map((param) => param.field), `${locale} ${row.code}`).toEqual(row.fields);
                expect(params.every((param) => param.description.trim().length > 0)).toBe(true);
            }
            for (const field of row.absent) {
                expect(enriched.dependencies?.some((dep) => dep.field === field), field).toBe(false);
            }
        }
    });

    it('keeps face validation and Scan Agent as POST when a slim row says apiRequest GET', () => {
        expect(
            resolvePostmanHttpMethod({
                method: 'GET',
                group: 'apiRequest',
                url: 'v2/face-recognition/face-validation',
            })
        ).toBe('POST');
        expect(
            resolvePostmanHttpMethod({
                group: 'apiRequest',
                endpoint: 'POST /v2/ocr/scan-gpt',
                url: 'v2/ocr/scan-gpt',
            })
        ).toBe('POST');
        expect(
            resolvePostmanHttpMethod({
                group: 'apiRequest',
                url: 'v3/ec/vehiculo/placa',
            })
        ).toBe('GET');
        expect(joinPostmanFeatureUrl('https://api.verifik.co', '/v3/ec/vehiculo/placa')).toBe(
            'https://api.verifik.co/v3/ec/vehiculo/placa'
        );
    });

    it('normalizes world, World, and Global onto the same country pill', () => {
        expect(resolvePostmanFeatureCountry('world')).toBe('world');
        expect(resolvePostmanFeatureCountry('World')).toBe('world');
        expect(resolvePostmanFeatureCountry('Global')).toBe('world');
        expect(resolvePostmanFeatureCountry('co')).toBe('Colombia');
    });

    it('labels the new groups in all 7 locales', () => {
        const keys = ['PEP', 'PROFESSIONAL_LICENSE', 'COMPANY', 'EDUCATION_VERIFICATION', 'OCR', 'SEARCH', 'EMAIL', 'MESSAGING', 'TRANSIT', 'IDENTITY', 'BACKGROUND_CHECK'] as const;
        for (const locale of LOCALES) {
            const categories = (categoryLocales[locale] as { categories: Record<string, string> }).categories;
            for (const key of keys) {
                expect(categories[key], `${locale} ${key}`).toEqual(expect.any(String));
                expect(categories[key].trim().length).toBeGreaterThan(0);
            }
            expect(formatPostmanCategoryLabel('PEP', categories)).toBe('PEP');
            expect(formatPostmanCategoryLabel('OCR', categories)).toBe('OCR');
        }
    });

    it('has a title and description for every code in all 7 feature catalogs', () => {
        for (const row of INDIVIDUAL_30) {
            for (const locale of LOCALES) {
                const copy = catalogs[locale].appFeatures[row.code];
                expect(copy?.title, `${locale} ${row.code}`).toEqual(expect.any(String));
                expect(copy.title.trim().length).toBeGreaterThan(0);
                expect(copy.description?.trim().length, `${locale} ${row.code}`).toBeGreaterThan(0);
            }
        }
    });

    it('names ocr_scan_gpt Scan Agent in every locale and keeps the code and URL', () => {
        for (const locale of LOCALES) {
            expect(catalogs[locale].appFeatures.ocr_scan_gpt.title).toBe('Scan Agent');
        }
        const scan = staticEndpoints().find((entry) => entry.code === 'ocr_scan_gpt');
        expect(scan?.name).toBe('Scan Agent');
        expect(scan?.nameES).toBe('Scan Agent');
        expect(scan?.url).toBe('v2/ocr/scan-gpt');
        expect(scan?.method).toBe('POST');
        for (const locale of LOCALES) {
            expect(scan?.docs?.[locale]?.title).toBe('Scan Agent');
            expect(scan?.docs?.[locale]?.params?.length).toBeGreaterThan(0);
        }
        const copy = resolvePostmanEndpointCopy({
            endpoint: {
                code: 'ocr_scan_gpt',
                country: 'world',
                label: 'OCR Document Scan Prompt',
                nameES: 'Escaneo OCR de Documentos GPT',
                docs: scan?.docs,
            },
            catalogTitle: 'Scan Agent',
            catalogDescription: catalogs.en.appFeatures.ocr_scan_gpt.description,
            locale: 'en',
        });
        expect(copy.title).toBe('Scan Agent');
        expect(copy.title).not.toMatch(/Scan-GPT|Scan Prompt|OCR Document Scan Prompt/i);
    });

    it('fills About parameters from the static catalog when the live row has no params', () => {
        for (const row of INDIVIDUAL_30) {
            const staticEntry = staticEndpoints().find((entry) => entry.code === row.code);
            expect(staticEntry, row.code).toBeTruthy();
            expect(staticEntry?.url).toBe(row.url);
            const enriched = enrichAppFeatureRecord({
                code: row.code,
                name: staticEntry?.name,
                url: row.url,
                method: row.method,
                group: row.group,
                country: row.country,
                category: row.baseCategory === 'professional_license' ? 'identity_verification' : null,
                baseCategory: null,
                params: null,
                about: null,
                dependencies: null,
                docs: {
                    en: { params: ['force', ...(staticEntry?.dependencies || staticEntry?.input?.dependencies || []).map((dep: { field: string }) => dep.field)] },
                },
            });
            expect(enriched.baseCategory, row.code).toBe(
                row.baseCategory === 'Search'
                    ? 'Search'
                    : row.baseCategory === 'OCR'
                      ? 'OCR'
                      : row.baseCategory
            );
            expect(enriched.dependencies?.some((dep) => dep.field === 'force'), row.code).toBe(false);
            expect((enriched.dependencies?.length ?? 0) > 0, row.code).toBe(true);
            for (const locale of LOCALES) {
                const block = enriched.docs?.[locale];
                expect(block?.title || block?.overview || block?.description, `${locale} ${row.code}`).toBeTruthy();
                const params = Array.isArray(block?.params) ? block?.params : [];
                expect(params.length, `${locale} ${row.code}`).toBeGreaterThan(0);
                expect(params.some((param) => (typeof param === 'string' ? param : param.field) === 'force')).toBe(false);
            }
            const meta = indexAboutParamMetadata([], enriched.dependencies);
            expect(meta.size, row.code).toBeGreaterThan(0);
            if (row.method === 'POST') {
                const fields = [...meta.values()];
                expect(fields.some((field) => field.type)).toBe(true);
            }
            const overview = resolveAboutOverview({
                endpoint: { code: row.code, docs: enriched.docs, description: staticEntry?.description },
                catalogDescription: catalogs.en.appFeatures[row.code].description,
                locale: 'en',
            });
            expect(overview.trim().length, row.code).toBeGreaterThan(0);
        }
    });
});
