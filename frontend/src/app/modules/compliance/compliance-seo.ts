import { Meta, Title } from '@angular/platform-browser';

// The pages stay out of search engines until verifik.co/cumplimiento and verifik.co/en/compliance
// point here (Open-Verifik/app.verifik.co#1129). Switch this on then.
const INDEXABLE = false;

/** Title, description and robots of a Centro de Cumplimiento page. */
export const applyComplianceMeta = (
    title: Title,
    meta: Meta,
    page: { title: string; description?: string }
): void => {
    title.setTitle(page.title);
    meta.updateTag({ name: 'robots', content: INDEXABLE ? 'index, follow' : 'noindex, nofollow' });

    if (page.description) {
        meta.updateTag({ name: 'description', content: page.description });
    }
};

export const clearComplianceMeta = (meta: Meta): void => {
    meta.removeTag('name="robots"');
    meta.removeTag('name="description"');
};
