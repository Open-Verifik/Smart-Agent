import { defineConfig } from "vite";

export default defineConfig({
	build: {
		outDir: "dist",
		assetsDir: "assets",
		chunkSizeWarningLimit: 600,
		rollupOptions: {
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
