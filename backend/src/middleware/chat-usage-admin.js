const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { getChatUsageSettings } = require("../config/chat-usage");

const safeEqual = (left, right) => {
	const a = crypto.createHash("sha256").update(String(left)).digest();
	const b = crypto.createHash("sha256").update(String(right)).digest();
	return crypto.timingSafeEqual(a, b);
};

const isSuperAdmin = (payload) => {
	if (!payload || typeof payload !== "object") return false;
	if (typeof payload.superAdminId === "string" && payload.superAdminId.trim()) return true;
	const role = typeof payload.role === "string" ? payload.role.toLowerCase() : "";
	return role === "superadmin" || role === "super-admin";
};

/**
 * Allows a configured admin token, or a verified Verifik JWT that carries
 * superAdminId. Customer sessions are rejected. When neither secret is set
 * the route stays closed.
 */
const requireChatUsageAdmin = async (ctx, next) => {
	const settings = getChatUsageSettings();
	if (!settings.adminToken && !settings.jwtSecret) {
		ctx.status = 503;
		ctx.body = { error: "Chat usage admin access is not configured" };
		return;
	}

	const authorization = ctx.get("authorization") || "";
	const bearer = authorization.toLowerCase().startsWith("bearer ") ? authorization.slice(7).trim() : "";
	const presented = (ctx.get("x-admin-token") || bearer || "").trim();

	if (settings.adminToken && presented && safeEqual(presented, settings.adminToken)) {
		await next();
		return;
	}

	if (settings.jwtSecret && bearer) {
		try {
			const payload = jwt.verify(bearer, settings.jwtSecret);
			if (isSuperAdmin(payload)) {
				await next();
				return;
			}
		} catch {
			// Invalid signature or expired token. Fall through to 403.
		}
	}

	ctx.status = 403;
	ctx.body = { error: "Forbidden" };
};

module.exports = {
	requireChatUsageAdmin,
	isSuperAdmin,
};
