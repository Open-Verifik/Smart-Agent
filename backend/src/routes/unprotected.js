const fs = require("fs");
const path = require("path");
const { getStorageDir } = require("../utils/storageDir");

/**
 * Registers public, discovery, agent, and upload routes on a Router instance.
 *
 * @param {import("@koa/router").Router} router
 * @returns {import("@koa/router").Router}
 */
const registerUnprotectedRoutes = (router) => {
	// Public route test
	router.get("/public", (ctx) => {
		ctx.body = { message: "This is a public endpoint" };
	});

	require("./unprotected-routes")(router);

	// Serve Uploads - Manual Handler for reliability
	router.get("/api/uploads/:filename", async (ctx) => {
		const { filename } = ctx.params;

		// Security check to prevent directory traversal
		if (filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
			ctx.status = 403;
			return;
		}

		const primaryPath = path.join(getStorageDir("uploads"), filename);
		const legacyPath = path.join(__dirname, "../../data/uploads", filename);
		const filePath = fs.existsSync(primaryPath) ? primaryPath : legacyPath;

		if (fs.existsSync(filePath)) {
			const ext = path.extname(filename).toLowerCase();
			let contentType = "application/octet-stream";
			if (ext === ".png") contentType = "image/png";
			if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
			if (ext === ".gif") contentType = "image/gif";
			if (ext === ".webp") contentType = "image/webp";

			ctx.type = contentType;
			ctx.body = fs.createReadStream(filePath);
		} else {
			ctx.status = 404;
		}
	});

	return router;
};

module.exports = { registerUnprotectedRoutes };
