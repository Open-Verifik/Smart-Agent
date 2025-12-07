const Koa = require("koa");
const cors = require("@koa/cors");
const { koaBody } = require("koa-body");
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
app.use(koaBody());

// Import Routes
// Import Routes
const unprotectedRoutes = require("./routes/unprotected");
const proxyRoutes = require("./routes/proxy");

// Register Routes
app.use(unprotectedRoutes.routes());
app.use(unprotectedRoutes.allowedMethods());

app.use(proxyRoutes.routes());
app.use(proxyRoutes.allowedMethods());

const port = config.port;

app.listen(port, () => {
	console.log(`Smart Agent Backend running on port ${port}`);
	console.log(`Environment: ${config.env}`);
	// Log registered routes for debugging
	console.log(
		"Registered Routes:",
		unprotectedRoutes.stack.map((i) => i.path)
	);

	// log proxy routes
	console.log(
		"Proxy Routes:",
		proxyRoutes.stack.map((i) => i.path)
	);
});
