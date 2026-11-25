const Koa = require("koa");
const cors = require("@koa/cors");
const { koaBody } = require("koa-body");
const RouterMod = require("@koa/router");
const Router = RouterMod.Router || RouterMod.default || RouterMod;
const config = require("./config");

const app = new Koa();

// Logger first
app.use(async (ctx, next) => {
	console.log(`[${new Date().toISOString()}] Incoming: ${ctx.method} ${ctx.url}`);
	await next();
});

// Global error handler
app.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		console.error("Error middleware caught:", err);
		ctx.status = err.status || 500;
		ctx.body = { error: err.message };
		ctx.app.emit("error", err, ctx);
	}
});

app.use(cors());
app.use(
	koaBody({
		jsonLimit: "2mb",
		formLimit: "2mb",
	}),
);

// Import & register routes using local Router instances (preserves prototype across CJS bundles)
const { registerUnprotectedRoutes } = require("./routes/unprotected");
const { registerProxyRoutes } = require("./routes/proxy");

const unprotectedRoutes = registerUnprotectedRoutes(new Router());
const proxyRoutes = registerProxyRoutes(new Router());

// Register Routes
app.use(unprotectedRoutes.routes());
app.use(unprotectedRoutes.allowedMethods());

app.use(proxyRoutes.routes());
app.use(proxyRoutes.allowedMethods());

const port = config.port;

/**
 * Local `node src/index.js` listens. Vercel imports the app and serves it.
 */
if (require.main === module) {
	app.listen(port, () => {
		console.log(`Smart Agent Backend running on port ${port}`);
		console.log(`Environment: ${config.env}`);
		console.log(
			"Registered Routes:",
			unprotectedRoutes.stack.map((i) => i.path)
		);
		console.log(
			"Proxy Routes:",
			proxyRoutes.stack.map((i) => i.path)
		);

		const ConversationRepository = require("./repositories/conversation.repository");
		ConversationRepository.cleanup(30);
	});
}

module.exports = app;
