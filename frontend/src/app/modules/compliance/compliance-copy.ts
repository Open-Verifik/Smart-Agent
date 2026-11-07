import { ActivatedRoute } from '@angular/router';
import { ComplianceLocale } from 'app/modules/compliance/compliance-taxonomy';

// UI copy of the Centro de Cumplimiento in both languages (Open-Verifik/app.verifik.co#1129). The app's
// Transloco files don't cover public landings, so the copy lives here.
export const COMPLIANCE_COPY = {
    es: {
        basePath: '/cumplimiento',
        hubName: 'Centro de Cumplimiento',
        homeTitle: 'Centro de Cumplimiento | Verifik',
        homeDescription:
            'Guías y novedades de cumplimiento normativo en Latinoamérica: identidad y acceso, delitos financieros (KYC, AML/CFT) y privacidad de datos.',
        nav: {
            products: 'Productos',
            solutions: 'Soluciones',
            resources: 'Recursos',
            company: 'Compañía',
            demo: 'Demo biométrico',
            language: 'Es',
            otherLanguage: 'English',
            login: 'Ingresar',
            trial: 'Prueba gratis',
            menu: 'Menú',
        },
        search: 'Buscar',
        filter: 'Filtro',
        filteredBy: 'Filtrado por:',
        clear: 'Borrar',
        latest: 'Últimas publicaciones',
        results: (shown: number, total: number) =>
            `(${shown} de ${total} ${total === 1 ? 'resultado' : 'resultados'})`,
        gridView: 'Ver en cuadrícula',
        listView: 'Ver en lista',
        removeTopic: (topic: string) => `Quitar ${topic}`,
        empty: 'No encontramos artículos con estos filtros.',
        emptyAction: 'Ver todos los artículos',
        previous: 'Anterior',
        next: 'Siguiente',
        minRead: (minutes: number) => `${minutes} MIN DE LECTURA`,
        defaultAuthor: 'Verifik Team',
        loading: 'Cargando',
        index: 'Índice',
        share: 'Comparte este artículo',
        shareOn: (network: string) => `Compartir en ${network}`,
        related: 'Explora otros artículos',
        faqs: 'Preguntas frecuentes',
        notFoundTitle: 'No encontramos este artículo',
        notFoundText: 'Puede que se haya movido o que ya no esté publicado.',
        back: 'Volver al Centro de Cumplimiento',
        ctaTitle: 'Protege la identidad de tus clientes en cada etapa',
        ctaText:
            'Descubre cómo integrar verificación y autenticación en tu plataforma sin añadir fricción innecesaria a la experiencia.',
        ctaButton: 'Agenda una sesión',
        rights: 'Todos los derechos reservados.',
    },
    en: {
        basePath: '/en/compliance',
        hubName: 'Compliance Center',
        homeTitle: 'Compliance Center | Verifik',
        homeDescription:
            'Guides and regulatory updates for Latin America: identity and access, financial crime compliance (KYC, AML/CFT) and data privacy.',
        nav: {
            products: 'Products',
            solutions: 'Solutions',
            resources: 'Resources',
            company: 'Company',
            demo: 'Biometric demo',
            language: 'En',
            otherLanguage: 'Español',
            login: 'Log in',
            trial: 'Free trial',
            menu: 'Menu',
        },
        search: 'Search',
        filter: 'Filter',
        filteredBy: 'Filtered by:',
        clear: 'Clear',
        latest: 'Latest posts',
        results: (shown: number, total: number) =>
            `(${shown} of ${total} ${total === 1 ? 'result' : 'results'})`,
        gridView: 'Grid view',
        listView: 'List view',
        removeTopic: (topic: string) => `Remove ${topic}`,
        empty: 'No articles match these filters.',
        emptyAction: 'See all articles',
        previous: 'Previous',
        next: 'Next',
        minRead: (minutes: number) => `${minutes} MIN READ`,
        defaultAuthor: 'Verifik Team',
        loading: 'Loading',
        index: 'Contents',
        share: 'Share this article',
        shareOn: (network: string) => `Share on ${network}`,
        related: 'Explore other articles',
        faqs: 'Frequently asked questions',
        notFoundTitle: "We couldn't find this article",
        notFoundText: 'It may have moved or is no longer published.',
        back: 'Back to the Compliance Center',
        ctaTitle: "Protect your customers' identity at every step",
        ctaText:
            'See how to add verification and authentication to your platform without adding unnecessary friction to the experience.',
        ctaButton: 'Book a session',
        rights: 'All rights reserved.',
    },
};

export type ComplianceCopy = typeof COMPLIANCE_COPY.es;

/** The locale comes from the parent route data (/cumplimiento → es, /en/compliance → en). */
export const complianceLocale = (route: ActivatedRoute): ComplianceLocale =>
    route.snapshot.pathFromRoot.some((snapshot) => snapshot.data?.complianceLocale === 'en')
        ? 'en'
        : 'es';

/** Home of a locale, optionally for one country: /cumplimiento/colombia, /en/compliance/colombia. */
export const complianceHomePath = (locale: ComplianceLocale, country?: string): string =>
    country ? `${COMPLIANCE_COPY[locale].basePath}/${country}` : COMPLIANCE_COPY[locale].basePath;

export const compliancePostPath = (
    locale: ComplianceLocale,
    country: string,
    slug: string
): string => `${COMPLIANCE_COPY[locale].basePath}/${country || 'latam'}/${slug}`;
