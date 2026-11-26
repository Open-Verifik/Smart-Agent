import { ComplianceLocale } from 'app/modules/compliance/compliance-taxonomy';

const MONTHS: Record<ComplianceLocale, string[]> = {
    es: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
    en: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
};

/** "SEP 30, 2026" in English and "30 SEP 2026" in Spanish, from the stored calendar day so time zones don't shift it. */
export const formatComplianceDate = (value: string, locale: ComplianceLocale): string => {
    const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(value || '');

    if (!match) return '';

    const month = MONTHS[locale][Number(match[2]) - 1];
    const day = Number(match[3]);

    return locale === 'en' ? `${month} ${day}, ${match[1]}` : `${day} ${month} ${match[1]}`;
};

export const flagSrc = (flag: string): string => `images/compliance/flags/${flag}.svg`;

// Author photos already published on verifik.co
const AUTHOR_PHOTOS: { match: RegExp; photo: string }[] = [
    {
        match: /johan/i,
        photo: 'https://verifik.co/wp-content/uploads/2025/06/johan_castellanos.avif',
    },
    {
        match: /miguel/i,
        photo: 'https://verifik.co/wp-content/uploads/2025/06/miguel_trevino.avif',
    },
];

export const authorPhoto = (author: string): string | null =>
    AUTHOR_PHOTOS.find((entry) => entry.match.test(author || ''))?.photo || null;

export const authorInitials = (author: string): string =>
    (author || 'V')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join('');

/** Reading time at ~200 words per minute. */
export const readingMinutes = (markdown: string): number =>
    Math.max(1, Math.round((markdown || '').split(/\s+/).filter(Boolean).length / 200));

export interface BlogFaq {
    question: string;
    answer: string;
}

// The blog editor stores FAQs as base64 JSON inside an HTML comment at the end of markdownContent.
const FAQ_BLOCK = /\n*<!--(?:ZELF|VERIFIK)_FAQS:([A-Za-z0-9+/=]+)-->\n*/;

/** Splits the FAQ block out of a post's markdown. */
export const extractBlogFaqs = (markdown: string): { content: string; faqs: BlogFaq[] } => {
    const match = markdown.match(FAQ_BLOCK);

    if (!match) return { content: markdown, faqs: [] };

    let faqs: BlogFaq[] = [];

    try {
        const bytes = Uint8Array.from(atob(match[1]), (char) => char.charCodeAt(0));
        const parsed = JSON.parse(new TextDecoder().decode(bytes));

        if (Array.isArray(parsed)) {
            faqs = parsed
                .map((faq) => ({
                    question: String(faq?.question || '').trim(),
                    answer: String(faq?.answer || '').trim(),
                }))
                .filter((faq) => faq.question || faq.answer);
        }
    } catch {
        faqs = [];
    }

    return { content: markdown.replace(FAQ_BLOCK, '\n').replace(/\s+$/, ''), faqs };
};
