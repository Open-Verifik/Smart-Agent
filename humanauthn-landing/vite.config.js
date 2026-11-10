import { defineConfig } from "vite";

export default defineConfig({
	build: {
		outDir: "dist",
		assetsDir: "assets",
	},
	publicDir: "public",
	server: {
		port: 3100,
	},
});
