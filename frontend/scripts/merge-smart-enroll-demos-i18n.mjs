#!/usr/bin/env node
/**
 * Merge HumanAuthn demo translations into Smart-Agent public/i18n under smartEnrollDemos.
 * Only fills keys missing in Smart-Agent — never overwrites existing translations.
 */
import fs from 'node:fs';
import path from 'node:path';

const LOCALES = ['en', 'es', 'zh', 'fr', 'ja', 'ko', 'pt'];
const HA_ROOT = '/Users/miguel/humanauthn/verifik-human-authn-demo-app/apps/web/messages';
const SA_I18N = '/Users/miguel/Smart-Agent/frontend/public/i18n';

const DEMO_FILE_MAP = {
    common: 'common.json',
    createCollection: 'createCollection.json',
    createPerson: 'createPerson.json',
    createPersonWithLiveness: 'createPersonWithLiveness.json',
    updatePerson: 'updatePerson.json',
    deletePerson: 'deletePerson.json',
    searchPerson: 'searchPerson.json',
    searchLivePerson: 'searchLivePerson.json',
    searchActiveUser: 'searchActiveUser.json',
    detectFace: 'detectFace.json',
    searchCrops: 'searchCrops.json',
    faceComparison: 'faceComparison.json',
    faceComparisonLiveness: 'faceComparisonLiveness.json',
    verifyFace: 'verifyFace.json',
    liveness: 'liveness.json',
    humanidCreate: 'humanidCreate.json',
    humanidCreateQr: 'humanidCreateQr.json',
    humanidDecrypt: 'humanidDecrypt.json',
    humanidPreview: 'humanidPreview.json',
    humanIdStructuredResult: 'humanIdStructuredResult.json',
    humanIdDecryptResult: 'humanIdDecryptResult.json',
    humanIdPreviewResult: 'humanIdPreviewResult.json',
    personResult: 'personResult.json',
    alreadyEnrolled: 'alreadyEnrolled.json',
    searchPersonResult: 'searchPersonResult.json',
    searchLivePersonResult: 'searchLivePersonResult.json',
    searchActiveUserResult: 'searchActiveUserResult.json',
};

const flatten = (obj, prefix = '') => {
    const out = {};
    for (const [k, v] of Object.entries(obj ?? {})) {
        const p = prefix ? `${prefix}.${k}` : k;
        if (v && typeof v === 'object' && !Array.isArray(v)) {
            Object.assign(out, flatten(v, p));
        } else {
            out[p] = v;
        }
    }
    return out;
};

/** Add keys from source only when absent in target (recursive). */
const mergeMissingOnly = (target, source) => {
    let added = 0;
    for (const [k, v] of Object.entries(source ?? {})) {
        if (v && typeof v === 'object' && !Array.isArray(v)) {
            if (!target[k] || typeof target[k] !== 'object') target[k] = {};
            added += mergeMissingOnly(target[k], v);
        } else if (!(k in target)) {
            target[k] = v;
            added++;
        }
    }
    return added;
};

const loadJson = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));

const loadDemoSection = (locale, fileName) => {
    const localized = path.join(HA_ROOT, 'demos', locale, fileName);
    const english = path.join(HA_ROOT, 'demos', 'en', fileName);
    if (fs.existsSync(localized)) return loadJson(localized);
    if (fs.existsSync(english)) return loadJson(english);
    return {};
};

const buildSmartEnrollDemos = (locale) => {
    const homePath = path.join(HA_ROOT, locale === 'en' ? 'en.json' : `${locale}.json`);
    const homeEnPath = path.join(HA_ROOT, 'en.json');
    const home = fs.existsSync(homePath) ? loadJson(homePath) : loadJson(homeEnPath);
    const homeEn = loadJson(homeEnPath);

    const hub = {
        title: 'Demos',
        metaTitle: home.home?.metaTitle ?? homeEn.home.metaTitle,
        metaDescription: home.home?.metaDescription ?? homeEn.home.metaDescription,
        heroEyebrow: home.home?.heroEyebrow ?? homeEn.home.heroEyebrow,
        heroTitle: home.home?.heroTitle ?? homeEn.home.heroTitle,
        heroBody: home.home?.heroBody ?? homeEn.home.heroBody,
        traditionalEyebrow: home.home?.traditionalEyebrow ?? homeEn.home.traditionalEyebrow,
        traditionalTitle: home.home?.traditionalTitle ?? homeEn.home.traditionalTitle,
        decentralizedEyebrow: home.home?.decentralizedEyebrow ?? homeEn.home.decentralizedEyebrow,
        decentralizedTitle: home.home?.decentralizedTitle ?? homeEn.home.decentralizedTitle,
        enterpriseEyebrow: home.home?.enterpriseEyebrow ?? homeEn.home.enterpriseEyebrow,
        enterpriseTitle: home.home?.enterpriseTitle ?? homeEn.home.enterpriseTitle,
        enterpriseBody: home.home?.enterpriseBody ?? homeEn.home.enterpriseBody,
        pillGdpr: home.home?.pillGdpr ?? homeEn.home.pillGdpr,
        pillAes: home.home?.pillAes ?? homeEn.home.pillAes,
        pillSoc2: home.home?.pillSoc2 ?? homeEn.home.pillSoc2,
        demoCta: home.home?.demoCta ?? homeEn.home.demoCta,
        sections: home.home?.sections ?? homeEn.home.sections,
        demos: home.home?.demos ?? homeEn.home.demos,
    };

    const smartEnrollDemos = { hub };

    for (const [key, fileName] of Object.entries(DEMO_FILE_MAP)) {
        smartEnrollDemos[key] = loadDemoSection(locale, fileName);
    }

    return smartEnrollDemos;
};

const NAV_DEMO_LABELS = {
    en: { demos: 'Demos', demos_subtitle: 'Interactive biometrics demos' },
    es: { demos: 'Demos', demos_subtitle: 'Demos interactivos de biometría' },
    zh: { demos: '演示', demos_subtitle: '交互式生物识别演示' },
    fr: { demos: 'Démos', demos_subtitle: 'Démos biométriques interactifs' },
    ja: { demos: 'デモ', demos_subtitle: 'インタラクティブな生体認証デモ' },
    ko: { demos: '데모', demos_subtitle: '대화형 생체 인증 데모' },
    pt: { demos: 'Demos', demos_subtitle: 'Demos interativos de biometria' },
};

for (const locale of LOCALES) {
    const targetPath = path.join(SA_I18N, `${locale}.json`);
    const existing = loadJson(targetPath);
    const incoming = buildSmartEnrollDemos(locale);
    existing.smartEnrollDemos ??= {};

    const added = mergeMissingOnly(existing.smartEnrollDemos, incoming);
    const saAhead = Object.keys(flatten(existing.smartEnrollDemos)).filter((k) => !(k in flatten(incoming)));

    existing.nav = existing.nav ?? {};
    existing.nav.demos = NAV_DEMO_LABELS[locale]?.demos ?? NAV_DEMO_LABELS.en.demos;
    existing.nav.demos_subtitle = NAV_DEMO_LABELS[locale]?.demos_subtitle ?? NAV_DEMO_LABELS.en.demos_subtitle;

    fs.writeFileSync(targetPath, `${JSON.stringify(existing, null, locale === 'en' ? 4 : 2)}\n`);
    console.log(`Updated ${targetPath}: ${added} key(s) added from HumanAuthn`);
    if (saAhead.length) {
        console.log(`  Smart-Agent-ahead (${saAhead.length} keys not in HumanAuthn): ${saAhead.slice(0, 5).join(', ')}${saAhead.length > 5 ? '…' : ''}`);
    }
}

console.log('Done merging smartEnrollDemos i18n (missing-only).');
