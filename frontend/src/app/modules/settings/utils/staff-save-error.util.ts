/**
 * Maps POST/PUT /v2/staff backend error codes to settings.team i18n keys.
 */
const STAFF_SAVE_ERROR_KEYS: Record<string, string> = {
    cannot_create_staff: 'settings.team.no_plan_error',
    cannot_create_more_staff: 'settings.team.limit_reached',
    duplicated_phone: 'settings.team.errors.duplicated_phone',
    phone_is_part_of_another_organization: 'settings.team.errors.phone_in_other_org',
    duplicated_email: 'settings.team.errors.duplicated_email',
    email_is_part_of_another_organization: 'settings.team.errors.email_in_other_org',
    client_exists_with_same_email: 'settings.team.errors.client_exists_email',
    client_exists_with_same_phone: 'settings.team.errors.client_exists_phone',
};

const STAFF_SAVE_ERROR_FALLBACKS: Record<string, string> = {
    'settings.team.no_plan_error':
        'Cannot add team members without an active subscription plan.',
    'settings.team.limit_reached':
        "You've reached the maximum number of team members for your plan. Upgrade to add more.",
    'settings.team.errors.duplicated_phone': 'This phone number is already on your team.',
    'settings.team.errors.phone_in_other_org':
        'This phone number already belongs to another organization.',
    'settings.team.errors.duplicated_email': 'This email is already on your team.',
    'settings.team.errors.email_in_other_org':
        'This email already belongs to another organization.',
    'settings.team.errors.client_exists_email':
        'This email already belongs to a Verifik account. Use a different email.',
    'settings.team.errors.client_exists_phone':
        'This phone number already belongs to a Verifik account. Use a different number.',
    'settings.team.save_error': 'Failed to save team member. Please try again.',
};

/**
 * Resolve the transloco key for a failed staff create/update.
 */
export const resolveStaffSaveErrorKey = (error: unknown): string => {
    const err = error as {
        error?: { message?: string };
        status?: number;
    };
    const message = `${err?.error?.message || ''}`.trim();

    if (STAFF_SAVE_ERROR_KEYS[message]) {
        return STAFF_SAVE_ERROR_KEYS[message];
    }

    if (err?.status === 412) {
        return 'settings.team.no_plan_error';
    }

    return 'settings.team.save_error';
};

/**
 * Translate a staff-save error, falling back to English if the locale key is missing.
 */
export const resolveStaffSaveErrorMessage = (
    error: unknown,
    translate: (key: string) => string
): string => {
    const key = resolveStaffSaveErrorKey(error);
    const translated = translate(key);

    if (translated && translated !== key) {
        return translated;
    }

    return STAFF_SAVE_ERROR_FALLBACKS[key] ?? STAFF_SAVE_ERROR_FALLBACKS['settings.team.save_error'];
};
