# Partial-locale documentation (pointer)

Canonical **process, URL rules, and country checklist** for adding FR / PT / KO / JA / ZH doc pages live in the documentation repo:

Open the playbook in the documentation repo (sibling clone or monorepo path):

`verifik-documentation/internal/PARTIAL_LOCALE_DOCS_PLAYBOOK.md`

If both repos live under the same parent folder, a relative link may work as `../verifik-documentation/internal/PARTIAL_LOCALE_DOCS_PLAYBOOK.md`.

## Why this file exists

Smart Agent (Postman, feature JSON, seeded URLs) should stay aligned with **single-prefix** Docusaurus URLs: `/verifik-{locale}/<category>/<page>/`, never `/verifik-{locale}/{locale}-docs/...`.

## Quick rules

1. Mirror English paths under `docs-fr`, `docs-pt`, etc.  
2. `slug` in front matter = `/category/page` — **no** `fr-docs`, `pt-docs`, etc.  
3. After doc changes, run the backend seeder from `verifik-backend`: `node scripts/seed-app-feature-docs.js` (use `--dry-run` and `--only=` as needed).

Cursor rules for the docs repo: `verifik-documentation/.cursor/rules/partial-locale-docs.mdc`.
