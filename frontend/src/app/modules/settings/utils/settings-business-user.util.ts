export const getVerifikAccount = (): Record<string, unknown> | null => {
    try {
        const raw = localStorage.getItem('verifik_account');
        return raw ? (JSON.parse(raw) as Record<string, unknown>) : null;
    } catch {
        return null;
    }
};

export const getBusinessUserClientId = (user?: unknown): string | undefined => {
    const verifikAccount = getVerifikAccount();
    if (verifikAccount?._id) {
        return verifikAccount._id as string;
    }

    const rec = user as Record<string, unknown> | null;
    return rec?.['_id'] as string | undefined;
};

export const getSettingsUser = (fallbackUser?: unknown): unknown => {
    const verifikAccount = getVerifikAccount();
    if (verifikAccount?._id) {
        return verifikAccount;
    }

    return fallbackUser ?? null;
};
