/**
 * Sync appFeatures title/description in public/i18n from MDX frontmatter + app-features catalog.
 *
 * Usage (from Smart-Agent/frontend):
 *   node scripts/sync-app-features-i18n-from-docs.mjs [--dry-run] [--only=<regex>] [--locale=en|es|...] [--report=generic-count]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FRONTEND_ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const hasFlag = (name) => args.includes(`--${name}`);
const getOption = (name) => {
    const prefix = `--${name}=`;
    const entry = args.find((a) => a.startsWith(prefix));
    return entry ? entry.slice(prefix.length) : null;
};

const DRY_RUN = hasFlag('dry-run');
const ONLY_REGEX = getOption('only') ? new RegExp(getOption('only'), 'i') : null;
const LOCALE_FILTER = getOption('locale');
const REPORT = getOption('report');

const GENERIC_DESCRIPTIONS = new Set([
    'Provides reliable verification and validation services.',
    'Proporciona servicios confiables de verificación y validación.',
    'Fornece serviços confiáveis de verificação e validação.',
    'Fournit des services de vérification et de validation fiables.',
    '提供可靠的验证和验证服务。',
    '信頼性の高い検証と検証サービスを提供します。',
    '신뢰할 수 있는 검증 및 검증 서비스를 제공합니다.',
]);

const resolveDocsRoot = (folder) => {
    const candidates = [
        path.resolve(FRONTEND_ROOT, '../../verifik-documentation', folder),
        path.resolve(FRONTEND_ROOT, '../../verifik/verifik-documentation', folder),
    ];
    return candidates.find((c) => fs.existsSync(c)) || candidates[0];
};

const LOCALE_DOC_FOLDERS = {
    en: 'docs',
    es: 'docs-es',
    fr: 'docs-fr',
    pt: 'docs-pt',
    ko: 'docs-ko',
    ja: 'docs-ja',
    zh: 'docs-zh',
};

const FEATURES_JSON = path.resolve(
    FRONTEND_ROOT,
    '../../verifik/verifik-backend/scripts/app-features-final.json'
);

const normalizeUrl = (raw) => {
    if (!raw) return '';
    return raw
        .trim()
        .replace(/`/g, '')
        .replace(/^(get|post|put|patch|delete|head|options)\s+/i, '')
        .replace(/^https?:\/\/[^/]+\//, '')
        .replace(/^\/+/, '')
        .replace(/\/+$/, '')
        .toLowerCase();
};

const parseFrontmatter = (text) => {
    if (!text.startsWith('---')) return {};
    const end = text.indexOf('\n---', 3);
    if (end === -1) return {};
    const block = text.slice(3, end).trim();
    const out = {};
    for (const line of block.split('\n')) {
        const m = line.match(/^(title|description):\s*(.+)\s*$/);
        if (!m) continue;
        let value = m[2].trim();
        if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1);
        }
        out[m[1]] = value;
    }
    return out;
};

const extractEndpointUrl = (text) => {
    const body = text.startsWith('---') ? text.slice(text.indexOf('\n---', 3) + 4) : text;
    const sectionHeaders = [
        'Endpoint',
        'Punto de acceso',
        'Ponto de acesso',
        "Point d'accès",
        'Point de terminaison',
        '엔드포인트',
        'エンドポイント',
        '端点',
    ];
    for (const header of sectionHeaders) {
        const escaped = header.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const endpointMatch = new RegExp(
            `###\\s+${escaped}\\s*\\n+\\\`\\\`\\\`[a-z]*\\s*\\n([\\s\\S]*?)\\\`\\\`\\\``,
            'i'
        ).exec(body);
        if (endpointMatch) {
            const url = normalizeUrl(endpointMatch[1].trim().split('\n')[0]);
            if (url) return url;
        }
    }

    if (text.startsWith('---')) {
        const fmBlock = text.slice(3, text.indexOf('\n---', 3));
        for (const line of fmBlock.split('\n')) {
            const kw = line.match(/^\s*-\s+(?:GET\s+)?(?:https?:\/\/[^/\s]+\/)?(\/?v\d+\/[^\s`]+)/i);
            if (kw) return normalizeUrl(kw[1]);
        }
    }

    const inlineGet = body.match(/(?:^|\n)\s*GET\s+(https?:\/\/[^\s`]+)/im);
    if (inlineGet) return normalizeUrl(inlineGet[1]);

    const apiUrl = body.match(/https?:\/\/api\.verifik\.co\/([^\s`)\]]+)/i);
    if (apiUrl) return normalizeUrl(apiUrl[1]);

    return null;
};

const PARTIAL_LOCALES = new Set(['fr', 'pt', 'ko', 'ja', 'zh']);

const sanitizeTitle = (title) => {
    if (!title) return title;
    let text = title.trim();
    text = text.replace(/\\U0001[A-Fa-f0-9]{4}/g, '');
    text = text.replace(/^[\u{1F1E6}-\u{1F1FF}]{2}\s*/u, '');
    return text.replace(/\s{2,}/g, ' ').trim();
};

const stripCountryPrefix = (title, country) => {
    const cleaned = sanitizeTitle(title);
    if (!cleaned || !country) return cleaned;
    const match = cleaned.match(/^(.+?)\s*[-–—]\s+(.+)$/);
    if (!match) return cleaned;
    const prefix = match[1].trim().toLowerCase();
    const countryNorm = country === 'world' ? 'global' : country.trim().toLowerCase();
    const aliases = {
        colombia: ['colombia', 'colômbia', 'colombie', '哥伦比亚'],
        'united states': ['united states', 'usa', 'us', '美国'],
        spain: ['spain', 'españa', 'espana', '西班牙'],
        mexico: ['mexico', 'méxico', '墨西哥'],
        peru: ['peru', 'perú', '秘鲁'],
        ecuador: ['ecuador', '厄瓜多尔'],
        bolivia: ['bolivia', '玻利维亚'],
        world: ['global', 'world', '全球'],
    };
    const variants = aliases[countryNorm] || [countryNorm];
    const prefixNorm = prefix.normalize('NFD').replace(/\p{M}/gu, '');
    if (variants.some((v) => prefixNorm.includes(v.normalize('NFD').replace(/\p{M}/gu, '')))) {
        return sanitizeTitle(match[2].trim());
    }
    return cleaned;
};

const walkDocs = (root) => {
    if (!fs.existsSync(root)) return [];
    const out = [];
    const stack = [root];
    while (stack.length) {
        const current = stack.pop();
        for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
            const full = path.join(current, entry.name);
            if (entry.isDirectory()) {
                stack.push(full);
                continue;
            }
            const ext = path.extname(entry.name).toLowerCase();
            if (ext === '.mdx' || ext === '.md') out.push(full);
        }
    }
    return out;
};

const loadMdxByUrl = (locale) => {
    const folder = LOCALE_DOC_FOLDERS[locale];
    if (!folder) return new Map();
    const root = resolveDocsRoot(folder);
    const map = new Map();
    for (const file of walkDocs(root)) {
        const rel = path.relative(root, file);
        if (ONLY_REGEX && !ONLY_REGEX.test(rel)) continue;
        const raw = fs.readFileSync(file, 'utf8');
        const url = extractEndpointUrl(raw);
        if (!url) continue;
        const fm = parseFrontmatter(raw);
        if (!fm.title && !fm.description) continue;
        map.set(url, { ...fm, file: rel });
    }
    return map;
};

const isBrokenTitle = (t) => typeof t === 'string' && t.startsWith(' - ');
const isGenericDescription = (d) => !d || GENERIC_DESCRIPTIONS.has(d.trim());

const shouldUpdate = (current, nextTitle, nextDescription, locale) => {
    if (!nextTitle && !nextDescription) return false;
    const curTitle = current?.title ?? '';
    const curDesc = current?.description ?? '';

    if (PARTIAL_LOCALES.has(locale)) {
        const titleNeeds = nextTitle && curTitle !== nextTitle;
        const descNeeds =
            nextDescription &&
            (isGenericDescription(curDesc) || curDesc !== nextDescription);
        return Boolean(titleNeeds || descNeeds);
    }

    const titleNeeds =
        nextTitle &&
        (isBrokenTitle(curTitle) ||
            curTitle !== nextTitle ||
            (curTitle.includes(' - ') && nextTitle !== curTitle));
    const descNeeds = nextDescription && isGenericDescription(curDesc);
    return Boolean(titleNeeds || descNeeds);
};

const main = () => {
    if (!fs.existsSync(FEATURES_JSON)) {
        console.error(`Missing features catalog: ${FEATURES_JSON}`);
        process.exit(1);
    }
    const features = JSON.parse(fs.readFileSync(FEATURES_JSON, 'utf8'));
    const byUrl = new Map();
    for (const f of features) {
        if (!f.code || !f.url) continue;
        const url = normalizeUrl(f.url);
        if (!byUrl.has(url)) byUrl.set(url, []);
        byUrl.get(url).push(f);
    }

    const locales = LOCALE_FILTER ? [LOCALE_FILTER] : Object.keys(LOCALE_DOC_FOLDERS);
    let totalUpdated = 0;

    for (const locale of locales) {
        const mdxByUrl = loadMdxByUrl(locale);
        const i18nPath = path.join(FRONTEND_ROOT, 'public/i18n', `features-${locale}.json`);
        if (!fs.existsSync(i18nPath)) {
            console.warn(`Skip missing locale file: ${i18nPath}`);
            continue;
        }
        const bundle = JSON.parse(fs.readFileSync(i18nPath, 'utf8'));
        const appFeatures = bundle.appFeatures || {};
        let updated = 0;

        for (const [url, mdx] of mdxByUrl.entries()) {
            const targets = byUrl.get(url) || [];
            for (const feature of targets) {
                const code = feature.code;
                const current = appFeatures[code] || {};
                const title = stripCountryPrefix(mdx.title, feature.country);
                const description = mdx.description?.trim();
                if (!shouldUpdate(current, title, description, locale)) continue;

                appFeatures[code] = {
                    ...current,
                    ...(title ? { title } : {}),
                    ...(description ? { description } : {}),
                };
                updated++;
                if (!DRY_RUN) {
                    console.log(`[${locale}] ${code}: "${current.title}" -> "${title}"`);
                }
            }
        }

        if (REPORT === 'generic-count') {
            const generic = Object.values(appFeatures).filter((e) =>
                isGenericDescription(e.description)
            ).length;
            console.log(`[${locale}] generic descriptions remaining: ${generic}`);
        }

        if (updated > 0 && !DRY_RUN) {
            fs.writeFileSync(i18nPath, JSON.stringify({ appFeatures }, null, 4) + '\n', 'utf8');
            if (locale === 'en' || locale === 'es') {
                const assetPath = path.join(
                    FRONTEND_ROOT,
                    'scripts/src/assets/i18n-features',
                    `${locale}.json`
                );
                if (fs.existsSync(assetPath)) {
                    fs.writeFileSync(
                        assetPath,
                        JSON.stringify({ appFeatures }, null, 2) + '\n',
                        'utf8'
                    );
                }
            }
        }
        console.log(`[${locale}] ${DRY_RUN ? 'would update' : 'updated'} ${updated} feature(s)`);
        totalUpdated += updated;
    }

    console.log(`\nTotal: ${DRY_RUN ? 'would update' : 'updated'} ${totalUpdated} entries`);
    if (DRY_RUN) console.log('(dry-run — no files written)');
};

main();
