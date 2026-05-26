import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Notification body HTML is sanitized on the backend when campaigns are saved.
 * Trust server output so inline images (data URIs) are not stripped by Angular.
 */
export const trustNotificationBodyHtml = (
    sanitizer: DomSanitizer,
    body: string | null | undefined
): SafeHtml => sanitizer.bypassSecurityTrustHtml(body || '');
