/**
 * Emoji placed on the report sheet as Twemoji SVG artwork.
 *
 * Emoji glyphs depend on the fonts installed where the PDF is printed, so the
 * sheet stores the vector image instead and looks the same everywhere.
 */

const TWEMOJI_BASE = 'https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg';
const RECENT_KEY = 'smart-report.recent-emojis';
const RECENT_LIMIT = 24;

export interface ReportEmojiCategory {
    id: string;
    labelKey: string;
    icon: string;
    emojis: string[];
}

const split = (value: string): string[] => {
    const Segmenter = (Intl as unknown as { Segmenter?: new (locale?: string, options?: { granularity: string }) => { segment(text: string): Iterable<{ segment: string }> } }).Segmenter;
    if (Segmenter) {
        return Array.from(new Segmenter(undefined, { granularity: 'grapheme' }).segment(value), (part) => part.segment).filter(
            (part) => part.trim()
        );
    }
    return Array.from(value).filter((part) => part.trim());
};

export const REPORT_EMOJI_CATEGORIES: ReportEmojiCategory[] = [
    {
        id: 'smileys',
        labelKey: 'reportEmojis.catSmileys',
        icon: 'sentiment_satisfied',
        emojis: split('😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😎🤓🧐🤔🤨😐😑😶🙄😏😴😷🤒🤕🤢🤯😱😨😰😢😭😤😠😡🥳🤩😬🤗🤫'),
    },
    {
        id: 'people',
        labelKey: 'reportEmojis.catPeople',
        icon: 'waving_hand',
        emojis: split('👍👎👌✌️🤞🤝👏🙌👋✋🖐️👊✊🙏💪👀👤👥🧑‍💼👮🕵️👷🧑‍🔧🧑‍💻🧑‍⚖️🧑‍🏫'),
    },
    {
        id: 'status',
        labelKey: 'reportEmojis.catStatus',
        icon: 'check_circle',
        emojis: split('✅☑️✔️❌❎⚠️⛔🚫❗❓⭐🌟✨🔥💯🔴🟠🟡🟢🔵🟣⚫⚪🟥🟧🟨🟩🟦🟪⬛⬜🔺🔻🔶🔷➡️⬅️⬆️⬇️↗️🔄♻️ℹ️🆗🆕🆘💲'),
    },
    {
        id: 'vehicles',
        labelKey: 'reportEmojis.catVehicles',
        icon: 'directions_car',
        emojis: split('🚗🚕🚙🚌🚎🏎️🚓🚑🚒🚐🛻🚚🚛🚜🏍️🛵🚲🛴⛽🚦🚧🛣️🗺️📍🧭✈️🚢🚂🅿️'),
    },
    {
        id: 'objects',
        labelKey: 'reportEmojis.catObjects',
        icon: 'description',
        emojis: split('📄📃📑📋📁📂🗂️📅📆🗓️📊📈📉📌📎✏️🖊️🔍🔒🔓🔑🛡️💳💰🏦🏢🏠📱💻🖥️📞✉️📧📦⏰⏱️⌛💡🔧🔨⚙️🧰🪪'),
    },
    {
        id: 'nature',
        labelKey: 'reportEmojis.catNature',
        icon: 'eco',
        emojis: split('☀️🌤️🌧️⛈️❄️🌍🌎🌱🌳🍀🐶🐱⚡💧🎉🎁🏆🥇🥈🥉🎯'),
    },
    {
        id: 'flags',
        labelKey: 'reportEmojis.catFlags',
        icon: 'flag',
        emojis: split('🇨🇴🇲🇽🇺🇸🇪🇸🇦🇷🇨🇱🇵🇪🇪🇨🇧🇷🇻🇪🇵🇦🇨🇷🇬🇹🇺🇾🇵🇾🇧🇴🇩🇴🏳️🏁🚩'),
    },
];

/** First emoji in free text (typed, pasted or from the OS picker), if any. */
export const firstEmoji = (text: string): string | null =>
    split(text).find((part) => /\p{Extended_Pictographic}|\p{Regional_Indicator}/u.test(part)) ?? null;

/** Twemoji file name: code points joined by `-`, dropping FE0F unless the emoji has a ZWJ. */
export const emojiCode = (emoji: string): string => {
    const text = emoji.includes('\u200d') ? emoji : emoji.replace(/\ufe0f/g, '');
    return Array.from(text, (char) => char.codePointAt(0)!.toString(16)).join('-');
};

export const emojiImageUrl = (emoji: string): string => `${TWEMOJI_BASE}/${emojiCode(emoji)}.svg`;

export async function emojiSvg(emoji: string): Promise<string | null> {
    const response = await fetch(emojiImageUrl(emoji));
    return response.ok ? response.text() : null;
}

export const readRecentEmojis = (): string[] => {
    try {
        const parsed: unknown = JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]');
        return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string').slice(0, RECENT_LIMIT) : [];
    } catch {
        return [];
    }
};

export const rememberEmoji = (emoji: string): void => {
    try {
        const next = [emoji, ...readRecentEmojis().filter((item) => item !== emoji)].slice(0, RECENT_LIMIT);
        localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {
        /* storage unavailable */
    }
};
