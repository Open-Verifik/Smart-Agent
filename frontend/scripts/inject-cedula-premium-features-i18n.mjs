/**
 * Run from repo: node frontend/scripts/inject-cedula-premium-features-i18n.mjs
 * Requires write access to public/i18n/features-*.json (use sudo or chown if needed).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const i18nDir = join(__dirname, "..", "public", "i18n");

const TEXTS = {
	en: [
		"Colombia - National ID Premium (CC)",
		"Premium CC lookup: expedition date resolved automatically, same enriched fields as /v2/co/cedula/extra. GET/POST /v2/co/cedula/premium.",
	],
	es: [
		"Colombia - Verificación premium de cédula (CC)",
		"Consulta premium de CC: resuelve la fecha de expedición automáticamente y devuelve los mismos campos enriquecidos que /v2/co/cedula/extra. GET/POST /v2/co/cedula/premium.",
	],
	ko: [
		"콜롬비아 — 국민 신분증 프리미엄(CC)",
		"CC 프리미엄: 발급일 자동 확인, /v2/co/cedula/extra와 동일한 확장 필드. GET/POST /v2/co/cedula/premium.",
	],
	fr: [
		"Colombie — Cédula nationale premium (CC)",
		"Consultation CC premium : date d'expédition résolue automatiquement, mêmes champs enrichis que /v2/co/cedula/extra. GET/POST /v2/co/cedula/premium.",
	],
	pt: [
		"Colômbia — Cédula nacional premium (CC)",
		"Consulta CC premium: data de expedição resolvida automaticamente, mesmos campos enriquecidos que /v2/co/cedula/extra. GET/POST /v2/co/cedula/premium.",
	],
	ja: [
		"コロンビア — 国民身分証プレミアム(CC)",
		"CC プレミアム: 発行日を自動解決し、/v2/co/cedula/extra と同じ拡張フィールド。GET/POST /v2/co/cedula/premium。",
	],
	zh: [
		"哥伦比亚 — 国民身份证高级核验(CC)",
		"CC 高级：自动解析签发日，与 /v2/co/cedula/extra 相同的扩展字段。GET/POST /v2/co/cedula/premium。",
	],
};

const CODE = "colombia_api_identity_lookup_premium";

for (const [lang, [title, description]] of Object.entries(TEXTS)) {
	const path = join(i18nDir, `features-${lang}.json`);
	const data = JSON.parse(readFileSync(path, "utf8"));
	const appFeatures = data.appFeatures ?? (data.appFeatures = {});
	if (appFeatures[CODE]) {
		console.log(`${path}: already has ${CODE}, skipping`);
		continue;
	}
	const reordered = {};
	for (const [k, v] of Object.entries(appFeatures)) {
		reordered[k] = v;
		if (k === "colombia_api_identity_lookup_extra") {
			reordered[CODE] = { title, description };
		}
	}
	if (!reordered[CODE]) {
		reordered[CODE] = { title, description };
	}
	data.appFeatures = reordered;
	writeFileSync(path, JSON.stringify(data, null, 2) + "\n", "utf8");
	console.log(`Updated ${path}`);
}
