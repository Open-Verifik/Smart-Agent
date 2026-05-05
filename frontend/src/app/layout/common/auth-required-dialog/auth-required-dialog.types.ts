/**
 * i18n keys (Transloco) for {@link AuthRequiredDialogComponent}.
 */
export interface AuthRequiredDialogData {
    titleKey: string;
    bodyKey: string;
    signInKey: string;
    backHomeKey: string;
    closeAriaKey: string;
}

export const DEFAULT_AUTH_REQUIRED_DIALOG_DATA: AuthRequiredDialogData = {
    titleKey: 'guestFeatureAuth.title',
    bodyKey: 'guestFeatureAuth.body',
    signInKey: 'guestFeatureAuth.signIn',
    backHomeKey: 'guestFeatureAuth.backHome',
    closeAriaKey: 'guestFeatureAuth.closeAria',
};