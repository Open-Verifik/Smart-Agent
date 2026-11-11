import type { BusinessBranding, BusinessDataProtection, BusinessProject, BusinessProjectFlow, VerifyStyleId } from '../../smart-business.types';

export interface BusinessWizardStep {
    index: number;
    titleKey: string;
    descriptionKey: string;
    icon: string;
}

export const BUSINESS_WIZARD_STEPS: BusinessWizardStep[] = [
    {
        index: 0,
        titleKey: 'smartBusiness.setup.steps.basic_setup',
        descriptionKey: 'smartBusiness.setup.steps.basic_setup_desc',
        icon: 'heroicons_outline:cog-6-tooth',
    },
    {
        index: 1,
        titleKey: 'smartBusiness.setup.steps.company_intake',
        descriptionKey: 'smartBusiness.setup.steps.company_intake_desc',
        icon: 'heroicons_outline:building-office',
    },
    {
        index: 2,
        titleKey: 'smartBusiness.setup.steps.corporate_docs',
        descriptionKey: 'smartBusiness.setup.steps.corporate_docs_desc',
        icon: 'heroicons_outline:document-duplicate',
    },
    {
        index: 3,
        titleKey: 'smartBusiness.setup.steps.representatives_policy',
        descriptionKey: 'smartBusiness.setup.steps.representatives_policy_desc',
        icon: 'heroicons_outline:user-group',
    },
    {
        index: 4,
        titleKey: 'smartBusiness.setup.steps.integrations',
        descriptionKey: 'smartBusiness.setup.steps.integrations_desc',
        icon: 'heroicons_outline:link',
    },
    {
        index: 5,
        titleKey: 'smartBusiness.setup.steps.user_interface',
        descriptionKey: 'smartBusiness.setup.steps.user_interface_desc',
        icon: 'heroicons_outline:paint-brush',
    },
];

export interface StyleOption {
    id: VerifyStyleId;
    nameEn: string;
    nameEs: string;
    descriptionEn: string;
    descriptionEs: string;
    pageBg: string;
    cardBg: string;
    ink: string;
    buttonBg: string;
    buttonText: string;
    buttonRadius: string;
    buttonBorder: string;
    fontFamily: string;
    fontWeight: string;
    cardRadius?: string;
    cardBorder?: string;
    cardShadow?: string;
    inputBg?: string;
    inputBorder?: string;
    inputRadius?: string;
    inputText?: string;
    subtleText?: string;
    mutedText?: string;
    badgeBg?: string;
    badgeText?: string;
    buttonShadow?: string;
    dividerBorder?: string;
    headlineTransform?: string;
    headlineAlign?: string;
    isDark?: boolean;
}

export const BUSINESS_VERIFY_STYLES: StyleOption[] = [
    {
        id: 'a',
        nameEn: 'Forest',
        nameEs: 'Bosque',
        descriptionEn: 'Modern pill design with lime green accents and ultra-dark typography.',
        descriptionEs: 'Diseño moderno estilo píldora con acentos lima y tipografía ultra-oscura.',
        pageBg: '#e8ebe6',
        cardBg: '#ffffff',
        ink: '#0e0f0c',
        buttonBg: '#9fe870',
        buttonText: '#163300',
        buttonRadius: '999px',
        buttonBorder: '0',
        fontFamily: '"Inter", sans-serif',
        fontWeight: '900',
        cardRadius: '28px',
        cardBorder: 'none',
        cardShadow: 'none',
        inputBg: '#ffffff',
        inputBorder: '1px solid #dcdfd8',
        inputRadius: '10px',
        inputText: '#0e0f0c',
        subtleText: '#454745',
        mutedText: '#6a6c6a',
        badgeBg: '#e8ebe6',
        badgeText: '#163300',
        buttonShadow: 'none',
        dividerBorder: '1px solid #e8ebe6',
        headlineTransform: 'none',
        headlineAlign: 'left',
        isDark: false,
    },
    {
        id: 'b',
        nameEn: 'Editorial',
        nameEs: 'Tinta',
        descriptionEn: 'High-density monochromatic ink aesthetic inspired by classic newspapers.',
        descriptionEs: 'Estética monocromática de tinta inspirada en diarios y publicaciones clásicas.',
        pageBg: '#e5e5e5',
        cardBg: '#ffffff',
        ink: '#000000',
        buttonBg: '#000000',
        buttonText: '#ffffff',
        buttonRadius: '8px',
        buttonBorder: '0',
        fontFamily: '"Barlow Condensed", sans-serif',
        fontWeight: '700',
        cardRadius: '32px',
        cardBorder: 'none',
        cardShadow: 'none',
        inputBg: '#ffffff',
        inputBorder: '1.5px solid #c6c6c6',
        inputRadius: '8px',
        inputText: '#000000',
        subtleText: '#444444',
        mutedText: '#777777',
        badgeBg: '#000000',
        badgeText: '#ffffff',
        buttonShadow: 'none',
        dividerBorder: '1.5px solid #e5e5e5',
        headlineTransform: 'uppercase',
        headlineAlign: 'left',
        isDark: false,
    },
    {
        id: 'c',
        nameEn: 'Paper',
        nameEs: 'Nieve',
        descriptionEn: 'Ultra-clean pure white minimalism with soft card elevation.',
        descriptionEs: 'Minimalismo blanco puro y nítido con suave elevación de tarjeta.',
        pageBg: '#ffffff',
        cardBg: '#fafafa',
        ink: '#1e1e1e',
        buttonBg: '#0d111b',
        buttonText: '#ffffff',
        buttonRadius: '999px',
        buttonBorder: '0',
        fontFamily: '"Outfit", sans-serif',
        fontWeight: '600',
        cardRadius: '32px',
        cardBorder: '1px solid #eef0f3',
        cardShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        inputBg: '#ffffff',
        inputBorder: '1px solid #ccd1da',
        inputRadius: '16px',
        inputText: '#1e1e1e',
        subtleText: '#666666',
        mutedText: '#8d8d8d',
        badgeBg: '#f7fafc',
        badgeText: '#1e1e1e',
        buttonShadow: 'rgb(36, 38, 40) 0px 0px 0px 1px, rgba(27, 28, 29, 0.48) 0px 1px 2px 0px',
        dividerBorder: '1px solid #eaedf1',
        headlineTransform: 'none',
        headlineAlign: 'left',
        isDark: false,
    },
    {
        id: 'd',
        nameEn: 'Vault',
        nameEs: 'Noche',
        descriptionEn: 'Futuristic high-tech dark mode with deep navy and electric blue glow.',
        descriptionEs: 'Modo oscuro de alta tecnología con azul marino profundo y acento eléctrico.',
        pageBg: '#000814',
        cardBg: '#010d1e',
        ink: '#ffffff',
        buttonBg: '#1c6cff',
        buttonText: '#ffffff',
        buttonRadius: '16px',
        buttonBorder: '0',
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: '600',
        cardRadius: '24px',
        cardBorder: '1px solid #11263b',
        cardShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -10px 18px rgba(0, 0, 0, 0.45)',
        inputBg: '#001533',
        inputBorder: '1px solid #11263b',
        inputRadius: '16px',
        inputText: '#ffffff',
        subtleText: '#ccced0',
        mutedText: '#8899aa',
        badgeBg: '#001533',
        badgeText: '#1c6cff',
        buttonShadow: '0 0 12px rgba(28, 108, 255, 0.3)',
        dividerBorder: '1px solid #11263b',
        headlineTransform: 'none',
        headlineAlign: 'left',
        isDark: true,
    },
    {
        id: 'e',
        nameEn: 'Porcelain',
        nameEs: 'Lavanda',
        descriptionEn: 'Soft luxury palette with delicate borders, lavender tints, and pill radius.',
        descriptionEs: 'Paleta suave de lujo con bordes delicados, tintes lavanda y esquinas curvas.',
        pageBg: '#f6f6fa',
        cardBg: '#ffffff',
        ink: '#151581',
        buttonBg: '#ffffff',
        buttonText: '#151581',
        buttonRadius: '48px',
        buttonBorder: '1px solid #a1a1cd',
        fontFamily: '"Inter Tight", sans-serif',
        fontWeight: '400',
        cardRadius: '40px',
        cardBorder: '1px solid #e8e8f2',
        cardShadow: 'rgba(36, 36, 41, 0.07) 0px 8px 34px, rgba(37, 36, 41, 0.09) 0px 1px 2px',
        inputBg: '#ffffff',
        inputBorder: '1px solid #e1e0f0',
        inputRadius: '16px',
        inputText: '#292824',
        subtleText: '#292824',
        mutedText: '#a1a1cd',
        badgeBg: '#f6f5f4',
        badgeText: '#151581',
        buttonShadow: 'none',
        dividerBorder: '1px solid #f0eff8',
        headlineTransform: 'none',
        headlineAlign: 'center',
        isDark: false,
    },
    {
        id: 'f',
        nameEn: 'Notebook',
        nameEs: 'Cuaderno',
        descriptionEn: 'Neo-brutalist raw high-contrast UI with black borders and neon lime button.',
        descriptionEs: 'Neo-brutalismo de alto contraste con bordes negros sólidos y botón lima fluorescente.',
        pageBg: '#f2f2f2',
        cardBg: '#ffffff',
        ink: '#000000',
        buttonBg: '#adff02',
        buttonText: '#000000',
        buttonRadius: '16px',
        buttonBorder: '1px solid #000000',
        fontFamily: '"Roboto Condensed", sans-serif',
        fontWeight: '900',
        cardRadius: '16px',
        cardBorder: '1px solid #000000',
        cardShadow: '8px 8px 0 0 #000100',
        inputBg: '#ffffff',
        inputBorder: '1.5px solid #000000',
        inputRadius: '12px',
        inputText: '#000000',
        subtleText: '#6e6e6e',
        mutedText: '#555555',
        badgeBg: '#adff02',
        badgeText: '#000000',
        buttonShadow: '2px 2px 0 0 #000000',
        dividerBorder: '1px solid #000000',
        headlineTransform: 'none',
        headlineAlign: 'left',
        isDark: false,
    },
];
