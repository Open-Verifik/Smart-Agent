/**
 * SmartLink session access on the x402 proxy.
 *
 * Every paid x402 call that omits a client credential is executed with one
 * shared Verifik service account. Session list, status, update, and delete
 * on that account would expose or change every other caller's sessions.
 * Those operations stay available only when the caller sends their own
 * API key or JWT. Creating a session can stay on x402, at a non-zero price,
 * and the proxy returns only the session that call created.
 */

const path = require("path");

const SMART_LINK_CREATE_TOOL_ID = "smart_link_create_session";

/** Floor used when the create tool is missing a positive priceUsd. */
const SMART_LINK_CREATE_PRICE_USD = 0.05;

const SESSION_FIELDS = [
	"sessionId",
	"_id",
	"id",
	"shortCode",
	"url",
	"shareUrl",
	"qrDataUrl",
	"expiresAt",
	"state",
	"requireDocument",
	"requestedMode",
	"completionMode",
	"externalRefId",
	"createdByChannel",
	"maxUses",
	"useCount",
	"isMultiUseTemplate",
	"statusToken",
	"statusUrl",
];

const PREFILL_FIELDS = ["email", "phone", "countryCode", "fullName"];

/**
 * @param {string | undefined} ctxPath
 * @param {string | undefined} targetUrlHeader
 * @returns {string}
 */
const resolveProxyPath = (ctxPath, targetUrlHeader) => {
	if (ctxPath === "/api/proxy" && targetUrlHeader) {
		try {
			return new URL(targetUrlHeader).pathname;
		} catch {
			if (String(targetUrlHeader).startsWith("/")) {
				return String(targetUrlHeader).split("?")[0];
			}
		}
	}
	return ctxPath || "";
};

/**
 * Public `/api/v3/...` and upstream `/v3/...` paths share one comparison form.
 * Normalizes dot-segments, duplicate slashes, and percent-encoded traversal.
 * @param {string} pathname
 * @returns {string}
 */
const toVerifikPath = (pathname) => {
	if (!pathname || typeof pathname !== "string") return "";
	let raw = pathname.split("?")[0].split("#")[0];
	for (let pass = 0; pass < 2; pass += 1) {
		try {
			const decoded = decodeURIComponent(raw);
			if (decoded === raw) break;
			raw = decoded;
		} catch {
			break;
		}
	}
	raw = raw.replace(/\\/g, "/").replace(/\/+/g, "/");
	let normalized = path.posix.normalize(raw.startsWith("/") ? raw : `/${raw}`).toLowerCase();
	if (normalized.length > 1 && normalized.endsWith("/")) normalized = normalized.slice(0, -1);
	if (normalized.startsWith("/api/v3/")) normalized = `/v3/${normalized.slice("/api/v3/".length)}`;
	return normalized;
};

/**
 * @param {string} method
 * @param {string} pathname Public or upstream path.
 * @returns {boolean}
 */
const isSmartLinkSessionCreate = (method, pathname) => {
	if (String(method || "").toUpperCase() !== "POST") return false;
	const cleanPath = toVerifikPath(pathname);
	if (cleanPath === "/v3/smart-links/sessions") return true;
	const parts = cleanPath.split("/").filter(Boolean);
	// POST /v3/smart-links/:projectId/sessions — not /sessions/status or /sessions/:id.
	return (
		parts.length === 4 &&
		parts[0] === "v3" &&
		parts[1] === "smart-links" &&
		parts[2] !== "sessions" &&
		parts[3] === "sessions"
	);
};

/**
 * List, status, read, update, delete, exchange, resend, revoke, bulk, dispatch,
 * and analytics routes. Session creation and public end-user routes are excluded.
 * @param {string} method
 * @param {string} pathname
 * @returns {boolean}
 */
const isSmartLinkSessionManagement = (method, pathname) => {
	const cleanPath = toVerifikPath(pathname);
	if (cleanPath !== "/v3/smart-links" && !cleanPath.startsWith("/v3/smart-links/")) return false;
	if (cleanPath === "/v3/smart-links/public" || cleanPath.startsWith("/v3/smart-links/public/")) return false;
	return !isSmartLinkSessionCreate(method, cleanPath);
};

const isSmartLinkPublicStatusPoll = (method, pathname) => {
	if (String(method || "").toUpperCase() !== "GET") return false;
	const cleanPath = toVerifikPath(pathname);
	return /^\/v3\/smart-links\/public\/sessions\/[^/]+\/status$/i.test(cleanPath);
};

/**
 * A caller-owned API key or JWT. The shared service token does not qualify.
 * @param {string | undefined} authorization
 * @param {string | undefined} serviceToken
 * @returns {boolean}
 */
const isPerClientCredential = (authorization, serviceToken) => {
	if (!authorization || typeof authorization !== "string") return false;
	const match = /^Bearer\s+(\S+)/i.exec(authorization.trim());
	if (!match) return false;
	const token = match[1];
	if (serviceToken && token === String(serviceToken).trim()) return false;
	return true;
};

/**
 * @param {{ id?: string } | null | undefined} tool
 * @returns {boolean}
 */
const isSmartLinkCreateTool = (tool) => Boolean(tool && tool.id === SMART_LINK_CREATE_TOOL_ID);

/**
 * @param {object} session
 * @returns {object}
 */
const sanitizeCreatedSession = (session) => {
	/** @type {Record<string, unknown>} */
	const out = {};
	for (const key of SESSION_FIELDS) {
		if (session[key] !== undefined) out[key] = session[key];
	}
	if (!out.sessionId) {
		if (typeof session._id === "string") out.sessionId = session._id;
		else if (typeof session.id === "string") out.sessionId = session.id;
	}
	if (session.prefill && typeof session.prefill === "object" && !Array.isArray(session.prefill)) {
		/** @type {Record<string, unknown>} */
		const prefill = {};
		for (const key of PREFILL_FIELDS) {
			if (session.prefill[key] !== undefined) prefill[key] = session.prefill[key];
		}
		if (Object.keys(prefill).length) out.prefill = prefill;
	}
	const project = session.project;
	if (typeof project === "string") out.project = project;
	else if (project && typeof project === "object" && !Array.isArray(project)) {
		const id = project._id || project.id;
		if (id) out.project = { _id: id };
	}
	return out;
};

/**
 * A SmartLink session record, not a nested url-only object such as a dispatch.
 * @param {object} node
 * @returns {boolean}
 */
const isSessionRecord = (node) => {
	if (!node || typeof node !== "object" || Array.isArray(node)) return false;
	if (node.sessionId || node.shortCode) return true;
	return Boolean((node._id || node.id) && (node.url || node.shareUrl || node.state || node.qrDataUrl));
};

/**
 * @param {object} session
 * @returns {string | null}
 */
const sessionKey = (session) => {
	const id = session.sessionId || session._id || session.id || session.shortCode;
	return id ? String(id) : null;
};

/**
 * @param {unknown} node
 * @param {object[]} acc
 */
const collectSessions = (node, acc) => {
	if (!node || typeof node !== "object") return;
	if (Array.isArray(node)) {
		for (const item of node) collectSessions(item, acc);
		return;
	}
	if (isSessionRecord(node)) acc.push(node);
	if (Array.isArray(node.docs)) collectSessions(node.docs, acc);
	if (Array.isArray(node.sessions)) collectSessions(node.sessions, acc);
	if (node.session && node.session !== node) collectSessions(node.session, acc);
	if (node.data && node.data !== node) collectSessions(node.data, acc);
};

/**
 * @param {object[]} sessions
 * @returns {object[]}
 */
const uniqueSessions = (sessions) => {
	const seen = new Set();
	/** @type {object[]} */
	const out = [];
	for (const session of sessions) {
		const key = sessionKey(session) || JSON.stringify(sanitizeCreatedSession(session));
		if (seen.has(key)) continue;
		seen.add(key);
		out.push(session);
	}
	return out;
};

/**
 * @param {object[]} sessions
 * @param {object | undefined} requestBody
 * @returns {object | null}
 */
const selectCreatedSession = (sessions, requestBody) => {
	if (sessions.length === 1) return sessions[0];
	const req = requestBody && typeof requestBody === "object" ? requestBody : {};
	/** @type {Array<(session: object) => boolean>} */
	const filters = [];
	if (req.externalRefId) filters.push((session) => session.externalRefId === req.externalRefId);
	if (req.email) {
		filters.push((session) => session.prefill?.email === req.email || session.email === req.email);
	}
	if (req.phone) {
		filters.push((session) => session.prefill?.phone === req.phone || session.phone === req.phone);
	}
	let current = sessions;
	for (const filter of filters) {
		const hits = current.filter(filter);
		if (hits.length === 1) return hits[0];
		if (hits.length > 1) current = hits;
	}
	return null;
};

/**
 * Reduce a create-session payload to the one session this call minted.
 * Returns ok:false when the payload is a collection that cannot be tied
 * to this request — the proxy must not forward other callers' sessions.
 *
 * @param {unknown} body
 * @param {object | undefined} requestBody
 * @returns {{ ok: true, body: unknown } | { ok: false }}
 */
const scopeCreatedSessionBody = (body, requestBody) => {
	if (body == null || typeof body !== "object") return { ok: true, body };
	const found = [];
	collectSessions(body, found);
	const unique = uniqueSessions(found);
	if (!unique.length) {
		const collection =
			Array.isArray(body) ||
			Array.isArray(body.data) ||
			Array.isArray(body.docs) ||
			Array.isArray(body.sessions);
		if (collection) return { ok: false };
		return { ok: true, body: { data: null } };
	}
	const chosen = selectCreatedSession(unique, requestBody);
	if (!chosen) return { ok: false };
	const data = sanitizeCreatedSession(chosen);
	if (!data.sessionId && !data.shortCode && !data.url && !data.shareUrl) return { ok: false };
	return { ok: true, body: { data } };
};

module.exports = {
	SMART_LINK_CREATE_TOOL_ID,
	SMART_LINK_CREATE_PRICE_USD,
	resolveProxyPath,
	toVerifikPath,
	isSmartLinkSessionCreate,
	isSmartLinkSessionManagement,
	isSmartLinkPublicStatusPoll,
	isPerClientCredential,
	isSmartLinkCreateTool,
	sanitizeCreatedSession,
	scopeCreatedSessionBody,
};
