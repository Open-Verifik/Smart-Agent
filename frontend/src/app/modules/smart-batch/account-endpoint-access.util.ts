/** Codes from `409:endpoints_not_in_account code1,code2`, or null when this is another error. */
export const endpointsNotInAccountCodes = (error: unknown): string | null => {
    const message =
        typeof error === 'string'
            ? error
            : String(
                  (error as { error?: { message?: string } })?.error?.message ||
                      (error as { message?: string })?.message ||
                      ''
              );
    const match = message.match(/endpoints_not_in_account\s+(.+)/i);

    return match ? match[1].trim() : null;
};
