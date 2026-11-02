const jwt = require("jsonwebtoken");

const ID_PATTERN = /^[a-zA-Z0-9_-]{1,64}$/;
const WALLET_PATTERN = /^0x[a-fA-F0-9]{40}$/;
const CONVERSATION_PATTERN = /^[a-zA-Z0-9_-]{1,80}$/;
const LOOKUP_STATUSES = new Set(["success", "error", "payment_required"]);
const CONTENT_LIMIT = 500;

const sanitizeId = (value) => {
	if (typeof value !== "string") return null;
	const trimmed = value.trim();
	return ID_PATTERN.test(trimmed) ? trimmed : null;
};

const sanitizeWallet = (value) => {
	if (typeof value !== "string") return null;
	const trimmed = value.trim();
	return WALLET_PATTERN.test(trimmed) ? trimmed.toLowerCase() : null;
};

const sanitizeConversationId = (value) => {
	if (typeof value !== "string") return null;
	const trimmed = value.trim();
	return CONVERSATION_PATTERN.test(trimmed) ? trimmed : null;
};

const sanitizeMode = (mode) => (mode === "x402" || mode === "credits" ? mode : null);

/**
 * Keep API paths only. Query strings can carry document numbers and names.
 * @param {unknown} value
 * @returns {string|null}
 */
const sanitizeEndpoint = (value) => {
	if (typeof value !== "string") return null;
	const trimmed = value.trim();
	if (!trimmed || trimmed.length > 300) return null;
	if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
		try {
			const url = new URL(trimmed);
			return `${url.origin}${url.pathname}`.slice(0, 300);
		} catch {
			return null;
		}
	}
	if (!trimmed.startsWith("/") || trimmed.includes("?") || trimmed.includes("#") || /\s/.test(trimmed)) {
		return null;
	}
	return trimmed.slice(0, 300);
};

const readNumber = (value) => {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	if (typeof value === "string" && value.trim()) {
		const parsed = Number(value);
		if (Number.isFinite(parsed)) return parsed;
	}
	return null;
};

/**
 * Credit charge reported by Verifik. Account balance (`credits`) and the
 * x402 USD list price are not a credit cost.
 * @param {unknown} payload
 * @returns {number|null}
 */
const extractCreditCost = (payload) => {
	if (!payload || typeof payload !== "object") return null;
	const billing = payload.billing && typeof payload.billing === "object" ? payload.billing : null;
	const nested = payload.data && typeof payload.data === "object" ? payload.data : null;
	const cost = payload.cost && typeof payload.cost === "object" ? payload.cost : null;
	const candidates = [
		payload.creditsCharged,
		billing && billing.chargedCredits,
		nested && nested.creditsCharged,
		cost && cost.credits,
		cost && cost.smartCheck,
		payload.ocrCreditsCharged,
	];
	for (const candidate of candidates) {
		const amount = readNumber(candidate);
		if (amount != null && amount >= 0 && amount <= 1_000_000) return amount;
	}
	return null;
};

const decodeJwtPayload = (token) => {
	if (!token || typeof token !== "string") return null;
	const raw = token.replace(/^Bearer\s+/i, "").trim();
	if (raw.split(".").length < 2) return null;
	try {
		const payload = jwt.decode(raw);
		return payload && typeof payload === "object" ? payload : null;
	} catch {
		return null;
	}
};

const firstString = (...values) => {
	for (const value of values) {
		if (typeof value === "string" && value.trim()) return value.trim();
	}
	return null;
};

/**
 * IDs only. Email, name, and the raw token are dropped.
 * @param {{ userToken?: string, paymentWallet?: string, mode?: string }} input
 */
const extractChatIdentity = ({ userToken, paymentWallet, mode } = {}) => {
	const payload = decodeJwtPayload(userToken) || {};
	const clientId = sanitizeId(typeof payload.clientId === "string" ? payload.clientId : null);
	let userId = sanitizeId(
		firstString(payload._id, payload.id, payload.userId, payload.sub, payload.staffId, payload.superAdminId),
	);
	const walletFromBody = sanitizeWallet(paymentWallet);
	const walletFromToken = sanitizeWallet(payload.walletAddress);
	const walletAddress = walletFromBody || walletFromToken;
	if (!userId && mode === "credits") {
		userId = sanitizeId(paymentWallet);
	}
	return { clientId, userId, walletAddress };
};

const emptyUsage = () => ({
	ranLookup: false,
	endpoints: [],
	success: null,
	creditCost: null,
	status: null,
});

/**
 * @param {{ endpoint?: string|null, status?: string|null, payload?: unknown }} input
 */
const buildLookupUsage = ({ endpoint, status, payload } = {}) => {
	const normalized = typeof status === "string" ? status : null;
	const ranLookup = LOOKUP_STATUSES.has(normalized);
	const cleanEndpoint = sanitizeEndpoint(endpoint);
	return {
		ranLookup,
		endpoints: ranLookup && cleanEndpoint ? [cleanEndpoint] : [],
		success: normalized === "success" ? true : ranLookup ? false : null,
		creditCost: extractCreditCost(payload),
		status: ranLookup ? normalized : null,
	};
};

const clipContent = (value) => {
	if (typeof value !== "string") return null;
	const trimmed = value.trim();
	if (!trimmed) return null;
	return trimmed.slice(0, CONTENT_LIMIT);
};

/**
 * One user row and one assistant row. Text is included only when `storeText` is set.
 * @param {object} input
 * @returns {object[]}
 */
const buildUsageDocuments = (input = {}) => {
	const now = input.now instanceof Date && !Number.isNaN(input.now.getTime()) ? input.now : new Date();
	const identity = extractChatIdentity(input);
	const usage = input.usage && typeof input.usage === "object" ? input.usage : emptyUsage();
	const failed = Boolean(input.failed);
	const storeText = Boolean(input.storeText);
	const status = failed ? "chat_error" : LOOKUP_STATUSES.has(usage.status) ? usage.status : null;
	const endpoints = Array.isArray(usage.endpoints)
		? usage.endpoints.map(sanitizeEndpoint).filter(Boolean).slice(0, 10)
		: [];

	const base = {
		clientId: identity.clientId,
		userId: identity.userId,
		walletAddress: identity.walletAddress,
		conversationId: sanitizeConversationId(input.conversationId),
		mode: sanitizeMode(input.mode),
		source: "smart_check_chat",
	};

	const userDoc = {
		...base,
		createdAt: now,
		role: "user",
		ranLookup: false,
		endpoints: [],
		success: null,
		creditCost: null,
		status: null,
	};

	const assistantDoc = {
		...base,
		createdAt: new Date(now.getTime() + 1),
		role: "assistant",
		ranLookup: status === "success" || status === "error" || status === "payment_required",
		endpoints: status === "success" || status === "error" || status === "payment_required" ? endpoints : [],
		success: status === "success" ? true : status === "error" || status === "payment_required" ? false : null,
		creditCost:
			status === "success" || status === "error" || status === "payment_required"
				? extractCreditCost({ creditsCharged: usage.creditCost })
				: null,
		status,
	};

	if (storeText) {
		const userContent = clipContent(input.userContent);
		const assistantContent = clipContent(input.assistantContent);
		if (userContent) userDoc.content = userContent;
		if (assistantContent) assistantDoc.content = assistantContent;
	}

	return [userDoc, assistantDoc];
};

/**
 * Weekly messages, conversations, and distinct clientIds.
 * Lookups are assistant rows whose tool call reached Verifik.
 * Paste into mongosh against the chat-usage database. See the repository comment.
 * @param {Date} from
 * @param {Date} to
 */
const buildWeeklyUsagePipeline = (from, to) => [
	{
		$match: {
			source: "smart_check_chat",
			createdAt: { $gte: from, $lt: to },
		},
	},
	{
		$group: {
			_id: {
				week: { $dateToString: { format: "%G-W%V", date: "$createdAt", timezone: "UTC" } },
			},
			messages: { $sum: 1 },
			conversationIds: { $addToSet: "$conversationId" },
			clientIds: { $addToSet: "$clientId" },
			walletAddresses: { $addToSet: "$walletAddress" },
			lookups: { $sum: { $cond: [{ $eq: ["$ranLookup", true] }, 1, 0] } },
			successfulLookups: {
				$sum: {
					$cond: [{ $and: [{ $eq: ["$ranLookup", true] }, { $eq: ["$success", true] }] }, 1, 0],
				},
			},
			creditCost: { $sum: { $ifNull: ["$creditCost", 0] } },
		},
	},
	{
		$project: {
			_id: 0,
			week: "$_id.week",
			messages: 1,
			conversations: {
				$size: {
					$filter: {
						input: "$conversationIds",
						as: "id",
						cond: { $and: [{ $ne: ["$$id", null] }, { $ne: ["$$id", ""] }] },
					},
				},
			},
			uniqueClients: {
				$size: {
					$filter: {
						input: "$clientIds",
						as: "id",
						cond: { $and: [{ $ne: ["$$id", null] }, { $ne: ["$$id", ""] }] },
					},
				},
			},
			uniqueWallets: {
				$size: {
					$filter: {
						input: "$walletAddresses",
						as: "id",
						cond: { $and: [{ $ne: ["$$id", null] }, { $ne: ["$$id", ""] }] },
					},
				},
			},
			lookups: 1,
			successfulLookups: 1,
			creditCost: 1,
		},
	},
	{ $sort: { week: 1 } },
];

module.exports = {
	CONTENT_LIMIT,
	sanitizeEndpoint,
	extractCreditCost,
	decodeJwtPayload,
	extractChatIdentity,
	emptyUsage,
	buildLookupUsage,
	buildUsageDocuments,
	buildWeeklyUsagePipeline,
};
