/**
 * Letter case for sheet text. The PDF applies the same rules in
 * `report.template.ejs`, so keep both in sync.
 */
export type ReportTextCase = 'none' | 'upper' | 'lower' | 'sentence' | 'title';

export const REPORT_TEXT_CASES: ReportTextCase[] = ['none', 'sentence', 'title', 'upper', 'lower'];

/** Connectors that stay lowercase inside a title-cased phrase. */
const MINOR_WORDS = new Set([
    'a', 'al', 'con', 'de', 'del', 'e', 'el', 'en', 'la', 'las', 'lo', 'los', 'o', 'por', 'para', 'sin', 'u', 'un', 'una', 'y',
    'and', 'at', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to',
]);

const LOCALE = 'es';

export const isReportTextCase = (value: unknown): value is ReportTextCase =>
    typeof value === 'string' && (REPORT_TEXT_CASES as string[]).includes(value);

const capitalizeFirst = (word: string): string => word.replace(/\p{L}/u, (letter) => letter.toLocaleUpperCase(LOCALE));

/**
 * Sentence and title case lowercase each word first. Tokens with digits or `@`
 * (plates, codes, emails) keep their own case.
 */
export const applyTextCase = (text: string, mode: ReportTextCase | null | undefined): string => {
    if (!text || !mode || mode === 'none') return text;
    if (mode === 'upper') return text.toLocaleUpperCase(LOCALE);
    if (mode === 'lower') return text.toLocaleLowerCase(LOCALE);

    let sentenceStart = true;
    let firstWord = true;
    return text.replace(/\S+/g, (token) => {
        if (!/\p{L}/u.test(token)) return token;
        const atSentenceStart = sentenceStart;
        const isFirst = firstWord;
        sentenceStart = /[.!?]["')\]»]*$/.test(token);
        firstWord = false;
        if (/[\d@]/.test(token)) return token;
        const lower = token.toLocaleLowerCase(LOCALE);
        if (mode === 'sentence') return atSentenceStart ? capitalizeFirst(lower) : lower;
        const bare = lower.replace(/[^\p{L}]/gu, '');
        return !isFirst && !atSentenceStart && MINOR_WORDS.has(bare) ? lower : capitalizeFirst(lower);
    });
};
