# HumanAuthn landing (humanauthn.com)

Static landing for HumanAuthn with two A/B variants and an ES/EN toggle. Vite, vanilla JS, no framework.

```bash
npm install
npm run dev      # http://localhost:3100
npm run build    # outputs dist/
```

## A/B variants

- **A**: privacy angle ("Know it's your customer. Without storing their face."), left-aligned hero, "Why HumanAuthn" first.
- **B**: identity angle ("Self-custody identity. Human-powered access."), centered hero, use cases first.

Resolution order: `?v=a|b` → path `/a` or `/b` → `ha_variant` cookie (90 days) → 50/50 draw.
Forced variants (query or path) are not saved, so QA links don't skew the split.

Every page view pushes `ha_variant_view` to `window.dataLayer` (and `gtag` if present) with `ha_variant` and `ha_lang`.
CTA clicks push `ha_cta_click` with the `cta` name. Add the GTM/GA4 snippet to `index.html` to collect them.

## Language

`?lang=es|en` → path `/es` or `/en` → saved choice → browser language. The toggle in the navbar saves the choice.
All copy lives in `src/i18n.js` (`COPY`, `META`, `LINKS`, `VIDEOS`).

## "See how it works" video

YouTube ids in `VIDEOS` (`src/i18n.js`). Spanish: `PQpyeU0Bgcl`. English is empty until its upload exists, and falls back to Spanish.

## Domains

`humanauthn.com` is the main domain. `vercel.json` redirects `www.humanauthn.com`, `humanauthn.org`, `humanauthn.io`
and `humanauthntech.com` to it once those domains point at the same deployment.
