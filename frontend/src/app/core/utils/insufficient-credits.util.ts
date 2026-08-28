/**
 * True when an API or notification payload is a credit-balance shortage
 * (including the backend typo "enought").
 */
export const isInsufficientCreditsError = (
    err:
        | {
              code?: string | null;
              error?: string | null;
              message?: string | null;
          }
        | string
        | null
        | undefined
): boolean => {
    if (typeof err === 'string') return mentionsCreditShortage(err);
    if (!err) return false;
    return mentionsCreditShortage(`${err.message ?? ''} ${err.error ?? ''} ${err.code ?? ''}`);
};

const mentionsCreditShortage = (text: string): boolean => {
    const msg = text.toLowerCase();
    return (
        msg.includes('enought') ||
        msg.includes('not enough') ||
        msg.includes('insufficient') ||
        (msg.includes('credit') && (msg.includes('enough') || msg.includes('falt') || msg.includes('insuf')))
    );
};
