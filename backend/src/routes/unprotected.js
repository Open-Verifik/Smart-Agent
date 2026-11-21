const Router = require("@koa/router").Router || require("@koa/router");
const router = new Router();
const serve = require("koa-static");
const path = require("path");
const mount = require("koa-mount");

// Public route test
router.get("/public", (ctx) => {
	ctx.body = { message: "This is a public endpoint" };
});

require("./unprotected-routes")(router);

// Serve Uploads
// We mount the static server at /api/uploads
// The static server serves from ../../data/uploads relative to this file?
// this file is src/routes/unprotected.js
// data is backend/data. so ../../data is correct.
// Serve Uploads - Manual Handler for reliability
const fs = require("fs");
const { getStorageDir } = require("../utils/storageDir");

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

module.exports = router;
