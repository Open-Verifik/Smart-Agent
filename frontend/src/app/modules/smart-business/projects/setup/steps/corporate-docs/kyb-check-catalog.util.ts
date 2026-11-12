import type { CriminalCheckOption } from 'app/modules/smart-enroll/projects/setup/steps/documents/criminal-check-catalog.util';
import { criminalCheckDocs } from 'app/modules/smart-enroll/projects/setup/steps/documents/criminal-check-catalog.util';

/** Official documentation pages for each SmartCheck endpoint (verified against the docs sitemap). */
const KYB_DOCS: Record<string, { en: string; es: string }> = {
    colombia_api_rues_full_v3: { en: '/business-validation/rues-complete-v3', es: '/verifik-es/business-validation/rues-complete-v3' },
    colombia_api_dian: { en: '/business-validation/colombia-dian-verification', es: '/verifik-es/business-validation/colombia-dian-verification' },
    colombia_api_dian_invoicer: { en: '/business-validation/colombia-legal-invoicer-verification', es: '/verifik-es/business-validation/colombia-legal-invoicer-verification' },
    colombia_pep_lookup: { en: '/identity-validation/colombia/colombian-politically-exposed-persons', es: '/verifik-es/identity-validation/colombia/colombian-politically-exposed-persons' },
    mexico_api_company: { en: '/business-validation/mexican-companies', es: '/business-validation/mexican-companies' },
    mexico_api_rfc_lookup: { en: '/identity/mexico-rfc', es: '/verifik-es/identity/mexico-rfc' },
    chile_api_taxpayer_lookup: { en: '/identity/chile-taxpayer', es: '/identity/chile-taxpayer' },
    chile_api_business_lookup: { en: '/business-validation/chilean', es: '/business-validation/chilean' },
    usa_api_company: { en: '/business-validation/united-states', es: '/business-validation/united-states' },
    peru_api_company_lookup_v3: { en: '/business-validation/peru', es: '/business-validation/peru' },
    brasil_api_company_lookup: { en: '/business-validation/brazil', es: '/verifik-es/business-validation/brazil' },
    panama_api_business_lookup: { en: '/business-validation/panama', es: '/business-validation/panama' },
    ecuador_api_company_lookup_v3: { en: '/business-validation/ecuador', es: '/business-validation/ecuador' },
    spain_api_company_lookup: { en: '/business-validation/spain', es: '/business-validation/spain' },
    spain_api_tax_id_validate: { en: '/business-validation/spain-tax-id-validation', es: '/verifik-es/business-validation/spain-tax-id-validation' },
    canada_api_company: { en: '/business-validation/canada', es: '/business-validation/canada' },
    argentina_api_company_lookup: { en: '/business-validation/argentina', es: '/business-validation/argentina' },
    costa_rica_api_business_lookup: { en: '/business-validation/costa-rica', es: '/business-validation/costa-rica' },
    world_api_gleif_lei: { en: '/business-validation/world-gleif-lei', es: '/verifik-es/business-validation/world-gleif-lei' },
};

/** Section landing pages used when an endpoint has no dedicated documentation page yet. */
const WATCHLIST_DOCS_FALLBACK = { en: '/background-check', es: '/verifik-es/background-check' };
const BUSINESS_DOCS_FALLBACK = { en: '/services/business-validation', es: '/verifik-es/services/business-validation' };

const kybDocsFor = (value: string) =>
    KYB_DOCS[value] ??
    criminalCheckDocs[value] ??
    (/_pep$|^world_api_|^[a-z]{2}_api_pep$/.test(value) ? WATCHLIST_DOCS_FALLBACK : BUSINESS_DOCS_FALLBACK);

const kybOption = (value: string, key: string): CriminalCheckOption => {
    const base = `smartBusiness.setup.docs.checks.${key}`;
    return {
        value,
        titleKey: `${base}.title`,
        descriptionKey: `${base}.description`,
        sourceKey: `${base}.source`,
        aboutKey: `${base}.description`,
        docs: kybDocsFor(value),
    };
};

const smartEnrollOption = (value: string, key: string): CriminalCheckOption => {
    const base = `smartEnrollProjects.setup.documents.screening.checks.${key}`;
    return {
        value,
        titleKey: `${base}.title`,
        descriptionKey: `${base}.description`,
        sourceKey: `${base}.source`,
        aboutKey: `${base}.about`,
        docs: kybDocsFor(value),
    };
};

/** Country-specific corporate, tax and compliance checks, keyed by lowercase country name. */
export const KYB_COUNTRY_CHECKS: Record<string, CriminalCheckOption[]> = {
    'colombia': [
        kybOption('colombia_api_rues_full_v3', 'colombia.rues'),
        kybOption('colombia_api_dian', 'colombia.dian'),
        kybOption('colombia_api_dian_invoicer', 'colombia.dianInvoicer'),
        kybOption('colombia_api_dian_proveedores_ficticios', 'colombia.fictitiousSuppliers'),
        kybOption('colombia_api_supersociedades_siis', 'colombia.siis'),
        kybOption('colombia_api_superfinanciera_concordatos', 'colombia.insolvency'),
        kybOption('colombia_api_supersolidaria_sanciones', 'colombia.solidaritySanctions'),
        kybOption('colombia_pep_lookup', 'colombia.pep'),
    ],
    'mexico': [
        kybOption('mexico_api_company', 'mexico.company'),
        kybOption('mexico_api_rfc_lookup', 'mexico.rfc'),
        kybOption('mx_api_pep', 'mexico.pep'),
    ],
    'united states': [
        kybOption('usa_api_company', 'usa.company'),
        kybOption('world_api_sam_exclusions', 'usa.samExclusions'),
        kybOption('world_api_fincen_special_measures', 'usa.fincen'),
    ],
    'peru': [
        kybOption('peru_api_company_lookup_v3', 'peru.company'),
        kybOption('peru_api_pep', 'peru.pep'),
    ],
    'chile': [
        kybOption('chile_api_business_lookup', 'chile.company'),
        kybOption('chile_api_taxpayer_lookup', 'chile.taxpayer'),
        kybOption('chile_api_pep', 'chile.pep'),
    ],
    'brazil': [
        kybOption('brasil_api_company_lookup', 'brazil.company'),
        kybOption('brazil_api_pep', 'brazil.pep'),
    ],
    'panama': [
        kybOption('panama_api_business_lookup', 'panama.company'),
        kybOption('panama_api_pep', 'panama.pep'),
    ],
    'ecuador': [
        kybOption('ecuador_api_company_lookup_v3', 'ecuador.company'),
        kybOption('ec_api_pep', 'ecuador.pep'),
    ],
    'spain': [
        kybOption('spain_api_company_lookup', 'spain.company'),
        kybOption('spain_api_tax_id_validate', 'spain.taxId'),
        kybOption('es_api_pep', 'spain.pep'),
    ],
    'canada': [
        kybOption('canada_api_company', 'canada.company'),
        kybOption('ca_api_pep', 'canada.pep'),
    ],
    'argentina': [
        kybOption('argentina_api_company_lookup', 'argentina.company'),
        kybOption('argentina_api_pep', 'argentina.pep'),
    ],
    'costa rica': [
        kybOption('costa_rica_api_business_lookup', 'costaRica.company'),
        kybOption('cr_api_pep', 'costaRica.pep'),
    ],
};

/** International watchlists and global corporate registries applied to every configured country. */
export const KYB_INTERNATIONAL_CHECKS: CriminalCheckOption[] = [
    kybOption('world_api_gleif_lei', 'global.gleif'),
    smartEnrollOption('world_api_interpol', 'interpol'),
    smartEnrollOption('world_api_fbi', 'fbi'),
    smartEnrollOption('world_api_dea', 'dea'),
    smartEnrollOption('world_api_europol', 'europol'),
    smartEnrollOption('world_api_ofac', 'ofac'),
    smartEnrollOption('world_api_onu', 'un'),
    smartEnrollOption('world_api_csl', 'csl'),
    smartEnrollOption('world_api_dss_most_wanted', 'dss'),
    smartEnrollOption('world_api_us_terrorists', 'usTerrorists'),
    smartEnrollOption('world_api_secret_service', 'secretService'),
    smartEnrollOption('world_api_sec', 'sec'),
    smartEnrollOption('world_api_health_exclusions', 'healthExclusions'),
    smartEnrollOption('world_api_cia_world_leaders', 'ciaWorldLeaders'),
    smartEnrollOption('world_api_eu_terrorists', 'euTerrorists'),
    smartEnrollOption('world_api_eu_fsf', 'euFsf'),
    smartEnrollOption('world_api_ofsi', 'ofsi'),
    smartEnrollOption('world_api_world_bank', 'worldBank'),
    smartEnrollOption('world_api_iadb', 'iadb'),
    smartEnrollOption('world_api_offshore_leaks', 'offshoreLeaks'),
];

/** Endpoints enabled by default on new KYB projects. */
export const KYB_DEFAULT_CHECK_ENDPOINTS = [
    'colombia_api_rues_full_v3',
    'colombia_api_dian',
    'world_api_ofac',
    'world_api_onu',
];

/** Maps legacy `corporateDocs.officialRegistryChecks` toggles to SmartCheck endpoint codes. */
export const legacyRegistryChecksToEndpoints = (checks?: {
    dian?: boolean;
    rues?: boolean;
    sat?: boolean;
    sanctionsList?: boolean;
} | null): string[] => {
    if (!checks) return [];
    const out: string[] = [];
    if (checks.rues) out.push('colombia_api_rues_full_v3');
    if (checks.dian) out.push('colombia_api_dian');
    if (checks.sat) out.push('mexico_api_company', 'mexico_api_rfc_lookup');
    if (checks.sanctionsList) out.push('world_api_ofac', 'world_api_onu');
    return out;
};

/** Derives the legacy registry toggles from the selected endpoints (keeps dossiers/detail views compatible). */
export const endpointsToLegacyRegistryChecks = (endpoints: string[]) => ({
    dian: endpoints.includes('colombia_api_dian'),
    rues: endpoints.includes('colombia_api_rues_full_v3'),
    sat: endpoints.includes('mexico_api_company') || endpoints.includes('mexico_api_rfc_lookup'),
    sanctionsList: endpoints.includes('world_api_ofac') || endpoints.includes('world_api_onu'),
});
