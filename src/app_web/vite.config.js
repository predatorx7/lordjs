import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";

import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

import "dotenv/config";
import Joi from "joi";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		open: true,
		strictPort: true,
		// validate port
		// refer: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.txt
		// refer: https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers
		port: await Joi.number()
			.positive()
			.min(1024)
			.max(65535)
			.required()
			.label("PORT")
			.validateAsync(process.env.PORT),
	},
	plugins: [react(), splitVendorChunkPlugin(), visualizer()],
	build: {
		target: "es2015",
		commonjsOptions: {
			include: ["postcss.config.cjs", "tailwind.config.cjs", "node_modules/**"],
		},
		rollupOptions: {
			output: {
				// Reference: https://vitejs.dev/guide/build.html#chunking-strategy
				manualChunks(id) {
					if (
						id.includes("react-router-dom") ||
						id.includes("@remix-run") ||
						id.includes("react-router")
					) {
						// creating a chunk to react routes deps. Reducing the vendor chunk size
						return "@react-router";
					}
					if (id.includes("libphonenumber-js")) {
						return "libphonenumber-js";
					}
					if (id.includes("luxon")) {
						return "luxon";
					}
					if (id.includes("axios")) {
						return "axios";
					}
					if (id.includes("react-hook-form")) {
						return "react-hook-form";
					}
				},
			},
		},
	},
	resolve: {
		alias: {
			"tailwind-config": path.resolve(process.cwd(), "./tailwind.config.cjs"),
		},
	},
	optimizeDeps: {
		include: ["tailwind-config"],
	},
});
