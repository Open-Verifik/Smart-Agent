const MONTHS = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
];

// Author photos already published on verifik.co (same files as the Acerca de Verifik team grid)
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

/** "septiembre 1, 2026", as on verifik.co. Uses the calendar day of the stored date so time zones don't shift it. */
export const formatBlogDate = (value: string): string => {
    const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(value || '');

    if (!match) return '';

    return `${MONTHS[Number(match[2]) - 1]} ${Number(match[3])}, ${match[1]}`;
};

export const authorPhoto = (author: string): string | null =>
    AUTHOR_PHOTOS.find((entry) => entry.match.test(author || ''))?.photo || null;

export const authorInitials = (author: string): string =>
    (author || 'V')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join('');

/** Reading time at ~200 words per minute, as verifik.co shows it ("5 minutos"). */
export const readingMinutes = (markdown: string): number =>
    Math.max(1, Math.round((markdown || '').split(/\s+/).filter(Boolean).length / 200));
