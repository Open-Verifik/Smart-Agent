import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	build: {
		outDir: "dist",
		assetsDir: "assets",
		chunkSizeWarningLimit: 600,
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				deck: resolve(__dirname, "deck.html"),
			},
			output: {
				manualChunks: {
					three: ["three"],
				},
			},
		},
	},
	publicDir: "public",
	server: {
		port: 3000,
	},
});
