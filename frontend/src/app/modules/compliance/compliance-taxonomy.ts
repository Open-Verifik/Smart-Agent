// Countries, categories and topics of the Centro de Cumplimiento (Open-Verifik/app.verifik.co#1129), as in the Figma filter.
// Keys are what the blog API stores (country, category, topics) and what the URLs use.

export type ComplianceLocale = 'es' | 'en';

export type ComplianceLabel = Record<ComplianceLocale, string>;

export interface ComplianceCountry {
    key: string;
    flag: string;
    label: ComplianceLabel;
}

export interface ComplianceTopic {
    key: string;
    label: ComplianceLabel;
}

export interface ComplianceCategory {
    key: string;
    tone: 'blue' | 'orange' | 'green';
    label: ComplianceLabel;
    topics: ComplianceTopic[];
}

export const COMPLIANCE_COUNTRIES: ComplianceCountry[] = [
    { key: 'colombia', flag: 'CO', label: { es: 'Colombia', en: 'Colombia' } },
    { key: 'chile', flag: 'CL', label: { es: 'Chile', en: 'Chile' } },
    { key: 'panama', flag: 'PA', label: { es: 'Panamá', en: 'Panama' } },
    { key: 'mexico', flag: 'MX', label: { es: 'México', en: 'Mexico' } },
    { key: 'peru', flag: 'PE', label: { es: 'Perú', en: 'Peru' } },
];

export const COMPLIANCE_CATEGORIES: ComplianceCategory[] = [
    {
        key: 'identity-access',
        tone: 'blue',
        label: { es: 'Identidad y acceso', en: 'Identity & access' },
        topics: [
            {
                key: 'identity-validation',
                label: { es: 'Validación de identidad', en: 'Identity validation' },
            },
            {
                key: 'identity-verification',
                label: { es: 'Verificación de identidad', en: 'Identity verification' },
            },
            { key: 'authentication', label: { es: 'Autenticación', en: 'Authentication' } },
            {
                key: 'strong-authentication',
                label: { es: 'Autenticación robusta', en: 'Strong authentication' },
            },
            { key: 'e-signature', label: { es: 'Firma electrónica', en: 'Electronic signature' } },
        ],
    },
    {
        key: 'financial-crime',
        tone: 'orange',
        label: {
            es: 'Cumplimiento de Delitos Financieros (FCC)',
            en: 'Financial Crime Compliance (FCC)',
        },
        topics: [
            { key: 'kyc', label: { es: 'KYC', en: 'KYC' } },
            { key: 'kyb', label: { es: 'KYB', en: 'KYB' } },
            {
                key: 'cdd',
                label: {
                    es: 'CDD (Debida diligencia del cliente)',
                    en: 'CDD (Customer due diligence)',
                },
            },
            {
                key: 'edd',
                label: {
                    es: 'EDD (Debida diligencia reforzada)',
                    en: 'EDD (Enhanced due diligence)',
                },
            },
            { key: 'aml-cft', label: { es: 'AML/CFT', en: 'AML/CFT' } },
            {
                key: 'sanctions-screening',
                label: { es: 'Verificación de sanciones', en: 'Sanctions screening' },
            },
            { key: 'pep-screening', label: { es: 'Verificación de PEPs', en: 'PEP screening' } },
            {
                key: 'beneficial-ownership',
                label: {
                    es: 'Identificación de beneficiarios finales',
                    en: 'Beneficial ownership identification',
                },
            },
            {
                key: 'transaction-monitoring',
                label: { es: 'Monitoreo de transacciones', en: 'Transaction monitoring' },
            },
            {
                key: 'ongoing-monitoring',
                label: { es: 'Monitoreo continuo', en: 'Ongoing monitoring' },
            },
        ],
    },
    {
        key: 'data-privacy',
        tone: 'green',
        label: { es: 'Privacidad y gobernanza de datos', en: 'Data privacy & governance' },
        topics: [
            { key: 'data-protection', label: { es: 'Protección de datos', en: 'Data protection' } },
            { key: 'consent', label: { es: 'Consentimiento', en: 'Consent' } },
            {
                key: 'data-subject-rights',
                label: { es: 'Derechos de los titulares de los datos', en: 'Data subject rights' },
            },
            {
                key: 'data-minimization',
                label: { es: 'Minimización de datos', en: 'Data minimization' },
            },
            { key: 'data-retention', label: { es: 'Retención de datos', en: 'Data retention' } },
            {
                key: 'cross-border-transfers',
                label: {
                    es: 'Transferencias transfronterizas de datos',
                    en: 'Cross-border data transfers',
                },
            },
        ],
    },
];

export const findCountry = (key: string): ComplianceCountry | undefined =>
    COMPLIANCE_COUNTRIES.find((country) => country.key === key);

export const findCategory = (key: string): ComplianceCategory | undefined =>
    COMPLIANCE_CATEGORIES.find((category) => category.key === key);

export const findTopic = (key: string): ComplianceTopic | undefined =>
    COMPLIANCE_CATEGORIES.reduce<ComplianceTopic[]>(
        (all, category) => all.concat(category.topics),
        []
    ).find((topic) => topic.key === key);
